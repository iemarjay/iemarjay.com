# X Post: The $10k Redemption

**Format**: Long-form single post (X Premium)
**Topic**: Returning to audit the system that cost my client $10k
**Goal**: Establish credibility, drive traffic to blog/services

---

## The Post

Six months ago, a bug I missed cost my client $10,000.

Last month, they invited me back to audit the same system.

I found 24 vulnerabilities—including the exact one being exploited.

Here's what happened:

The call came at the worst time. "We're being hacked again. Can you help?"

When you're the developer who built a vulnerable system, getting invited back is complicated. Part redemption. Part facing your own code with fresh eyes.

I said yes.

Two weeks of systematic review later:
• 5 Critical vulnerabilities
• 7 High severity
• 5 Medium
• 7 Low

24 issues in code I had written. The scary part? Attackers had only found ONE.

The vulnerability being exploited: the webhook handler would CREATE payments if it didn't find an existing record. Attackers sent fake webhooks with any user ID, any amount, made-up references. Free money. Unlimited.

The fix was embarrassingly simple—reject webhooks for payments the system didn't initiate. But finding bugs was only half the job.

They gave me production database access to understand the damage.

What I found:
• $7,149 in fraudulent deposits
• 42-day attack window
• 720 affected accounts
• 1,058 duplicate payments

The attackers were methodical. Week 1: ~6 duplicates/day (testing). Week 2: ~21/day. Peak: 46 duplicates in one day. They scaled slowly to avoid detection.

Good news: $5,110 was still sitting in wallets—recoverable.

I gave the client a spreadsheet with emails, amounts, evidence for legal action. Forensics isn't just about finding bugs. It's about recovery.

Three lessons:

1. Race conditions are EVERYWHERE in fintech. 4 of 5 critical vulns were race conditions. If your code does read→check→deduct without locking, you have one.

2. Defense in depth only works if each layer STOPS attackers. The system had signature validation (failed silently) and duplicate detection (ran after the credit). Each "defense" logged problems instead of blocking them.

3. Your blind spots multiply. I missed the race condition AND the backdoor code path AND commented-out error handling AND MD5 signatures (in 2025!).

The $10k bug changed how I write code. This engagement changed what I offer—not just "find bugs" but understand what happened, quantify damage, identify attackers, help recover funds.

From costly mistake to complete incident response.

Full technical writeup: iemarjay.com/post/the-10k-redemption

If you're building fintech and this sounds familiar, DMs open.

---

## Posting Notes

- Post between 8-10 AM WAT (US East Coast morning)
- Pin this post after publishing
- Engage with replies for first 2 hours
- Follow up with video content later in the week

## Hashtags (optional, at end)

#fintech #security #webdev

---

_Converted from thread format January 2026_
