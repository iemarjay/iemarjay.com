# The $10k Redemption: How I Found 24 Vulnerabilities in the System I Broke

Six months ago, I wrote about [the webhook bug that cost my client $10,000](/post/how-a-10k-bug-taught-me-to-build-ai-security-audits). A replay attack I missed. Attackers replaying payment notifications to credit wallets multiple times. Classic race condition.

That story had an ending: I built a systematic security methodology. Started doing audits. Moved on.

But the story wasn't actually over.

The client called me back.

---

## The Call

"We've been hacked. Again. Can you help?"

Different attack this time. Or so they thought. Their payment system was bleeding money, and they needed someone who understood the codebase.

Here's the thing: when you're the developer who built a vulnerable system, getting invited back to audit it is... complicated. Part redemption arc. Part facing your own code with fresh eyes. Part "oh god, what else did I miss?"

I said yes. Not just to help them, but because I needed to know.

---

## Part 1: The Vulnerability Audit

I spent two weeks going through every line of code I'd written. Payment webhooks, wallet operations, refund flows, admin endpoints. Everything.

The methodology I'd built after the first incident? I used all of it. AI-assisted systematic review. Multiple passes. Business logic analysis.

### What I Found

| Severity | Count |
|----------|-------|
| Critical | 5 |
| High | 7 |
| Medium | 5 |
| Low | 7 |
| **Total** | **24** |

Twenty-four vulnerabilities. In code I had written. Code I thought I understood.

### The Attack Vector

The first thing I found was the exact vulnerability being exploited. Remember the original $10k bug? Attackers replaying webhooks before duplicate checks kicked in?

This was worse.

The webhook handler had a code path that would **create payments from scratch** if no existing payment record was found. The intention was to handle edge cases where webhooks arrived before the payment was recorded.

The reality? Attackers could send completely fabricated webhooks with:
- Any user ID they wanted
- Any amount they wanted
- Made-up transaction references

The system would create a payment record and credit that wallet. Free money. Unlimited.

```typescript
// The vulnerable pattern (simplified)
if (!existingPayment) {
  // "Handle new payment from webhook"
  const user = await findUser(webhook.metadata.userId);
  await creditWallet(user.wallet, webhook.amount);
  // No verification that money actually changed hands
}
```

The fix was simple: reject webhooks for payments the system didn't initiate.

```typescript
if (!existingPayment) {
  logger.warn(`Unknown payment reference: ${reference}`);
  return; // Don't create payments from external data alone
}
```

But that wasn't even the worst one.

### The Critical Five

**1. Free Money Vulnerability** (above)
Webhook creating payments from external data.

**2. Race Condition in Payment Verification**
The code that verified payments with the payment provider had no pessimistic locking. Two concurrent webhook calls could both read the same wallet balance, both pass validation, and both increment it. $50 deposit becomes $100 credit.

Also: error handling was commented out. Database connections leaked on exceptions. Eventually the connection pool would exhaust and the whole system would go down.

**3. Silent Signature Validation Failure**
Invalid webhook signatures didn't throw errors. They just... returned. Silently. No logging. No rejection. Compare this to Paystack's handler which correctly threw `UnauthorizedException`.

If signature validation failed for any reason (misconfigured secrets, race condition in secret rotation), attackers could send unsigned requests.

**4. MD5 for Signature Verification**
One payment provider used MD5. In 2025. MD5 collisions can be generated in seconds. This wasn't my code, but I should have flagged it.

**5. Double Refund via Auto-Refund**
The system had an auto-refund mechanism for failed orders. No pessimistic locks. No idempotency checks. Trigger the same refund 10 times concurrently, get 10x your money back.

### The High Severity Seven

- **Negative amount injection**: `adminDeductWallet(-500)` would *add* $5 to the wallet
- **No database constraints**: Nothing stopped balances from going negative
- **Hold exceeding balance**: Users could initiate payments totaling more than their balance
- **Subscription refund race**: Same double-refund pattern
- **Phone/SMS refund race**: Same pattern again
- **Transaction cleanup crash**: Null reference in the catch block would crash the cleanup service
- **Inconsistent balance updates**: Some code used SQL increments (safe), some used JavaScript arithmetic (race-prone)

The patterns repeated. Race conditions everywhere. Missing locks. Trusting external data.

---

## Part 2: The Forensic Analysis

Finding vulnerabilities was only half the engagement. The client also gave me production database access to understand the actual damage.

This is where it gets interesting.

### The Numbers

| Metric | Value |
|--------|-------|
| Total Fraudulent Deposits | $7,149.24 |
| Attack Duration | 42 days |
| Affected Customers | 720 (0.86% of 84K total) |
| Affected Payment References | 985 |
| Extra Payments Created | 1,058 |
| Recoverable from Current Balances | $5,110.06 |

Not as bad as it could have been. But 42 days. The attack ran for 42 days before being detected.

### The Timeline

I wrote SQL queries to trace every duplicate payment, every affected account, every suspicious pattern.

The attack started small. October 28, 2025: 7 duplicate payments. Testing the waters.

Then it escalated:
- First week: ~6 duplicates/day
- Second week: ~21/day
- Third week: ~25/day
- Peak: November 29 - **46 duplicate payments in one day**

The attackers were methodical. They found the vulnerability, tested it carefully, then scaled up gradually to avoid triggering alerts.

### The Attackers

One account stood out. 40 duplicate payments. $1,028 in fraudulent credits. $619 still sitting in their wallet.

I gave the client a spreadsheet: email, name, fraudulent amount, duplicate count, current balance. Actionable intelligence for recovery and potential legal action.

The forensic queries I wrote:
- Find payments created by webhook without prior transaction
- Detect duplicate provider references
- Compare wallet balances against transaction history
- Identify accounts with suspicious deposit patterns
- Timeline the attack with daily breakdowns

### Recovery

Of the $7,149 stolen, $5,110 was still recoverable. Sitting in wallets. The attackers hadn't moved it all yet.

---

## Part 3: What This Taught Me

### Lesson 1: Your Blind Spots Multiply

I missed the original webhook race condition. But I also missed that the "fallback" code path for missing payments was effectively a backdoor. I missed that error handling was commented out. I missed that MD5 was being used for signatures.

When you're building under deadline, you're optimizing for "does it work?" not "could this be exploited?" Every shortcut, every TODO, every "we'll fix this later" is a potential vulnerability.

### Lesson 2: Race Conditions Are Everywhere in Fintech

Four of the five critical vulnerabilities were race conditions. Double-spend patterns. Missing locks. Check-then-act without atomicity.

If your code does `read balance -> check if sufficient -> deduct balance` as separate operations without locking, you have a race condition. Period.

### Lesson 3: Defense in Depth Actually Matters

The system had signature validation. But it failed silently. So when something went wrong with the signature check, attackers got through.

The system had duplicate detection. But it happened after the credit, not before. So fast replays got through.

Layers of defense only work if each layer actually stops attackers, not just logs them.

### Lesson 4: Forensics Is a Skill

Finding vulnerabilities is different from understanding an active attack. The forensic analysis, tracing the attack timeline, quantifying damage, identifying perpetrators, that required different thinking.

SQL queries I'd never have written for normal development work. Thinking like an investigator, not a developer.

### Lesson 5: Redemption Is Possible

I broke this system. I also fixed it. I found the vulnerability that was being exploited, plus 23 more. I gave the client the information they needed to recover funds and pursue attackers.

The $10k bug changed how I write code. This engagement changed what I offer. Not just "find bugs" but "understand what happened and help you recover."

---

## The Methodology

For anyone building fintech systems, here's what I check now:

**Payment Webhooks**:
- Webhook must reference pre-existing payment record
- Signature validation must throw, not return silently
- Use SHA-256 minimum, never MD5
- Rate limit webhook endpoints
- Log every rejection

**Wallet Operations**:
- Pessimistic locks on all balance changes
- Database constraints preventing negative balances
- Atomic operations (SQL increments, not read-modify-write)
- Idempotency keys on all credit operations

**Refund Flows**:
- Lock order record before processing refund
- Check status after acquiring lock, not before
- Single transaction encompassing order update and wallet credit

**Admin Operations**:
- Validate amounts are positive
- Log which admin performed action
- Require confirmation for large operations

---

## What I'm Offering Now

This engagement taught me that security audits and incident response are different skills, both valuable.

**Security Audits**: Find vulnerabilities before attackers do. The systematic methodology I've built finds what human review misses.

**Incident Response + Forensics**: When you're already under attack. Containment, root cause analysis, damage quantification, attacker identification, recovery planning.

I've done both now. The hard way.

If your fintech system handles real money and hasn't had a thorough security review, you're running on luck. I was. Twice.

[Let's talk](/services/security) before you learn these lessons the expensive way.

---

*The client in this story approved sharing these details (anonymized). The vulnerabilities have been patched. If you're building payment systems and any of this sounds familiar, please reach out. I'd rather help you fix it than read about your breach.*

---

**About me**: I'm Emmanuel Joseph, full-stack developer, 8 years building production systems. I learned security by breaking things and fixing them. Now I help other teams skip the breaking part. Based in Lagos, available for remote work globally.

*Twitter: [@iemarjay](https://twitter.com/iemarjay) | Email: emarjay921@gmail.com*
