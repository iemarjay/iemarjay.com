# X Post: Solana Prediction Market Audit Lessons

**Format**: Long-form single post (X Premium)
**Topic**: Lessons from auditing a Solana prediction market protocol
**Goal**: Establish Solana/Rust credibility, drive traffic to blog

---

## The Post

I found 17 bugs in a Solana prediction market before mainnet—including one that could drain the vault.

2,800 lines of Rust, LMSR pricing engine, 13 instruction handlers. Here's what I learned:

The good news: no critical vulnerabilities. The team knew what they were doing—comprehensive PDA validation, checked arithmetic everywhere, proper state machine guards, strong double-spend prevention.

But two high-severity issues could have caused real problems.

HIGH #1: Vault insolvency from dispute bonds

The protocol had a dispute mechanism. Post a bond to challenge an outcome, get it back if you win. Problem: dispute bonds went into the same vault as trading funds.

The attack:
1. Market has 1000 USDC from trades
2. Someone posts 100 USDC dispute bond
3. Creator withdraws 50 USDC in fees
4. Disputer wins, gets 100 USDC back
5. Winners try to redeem 1000 USDC
6. Vault is 50 USDC short

Lesson: Trace every withdrawal path. Make sure the math works in ALL combinations.

HIGH #2: Missing balance checks

The sell instruction transferred USDC without checking vault balance first. Yes, SPL token reverts on insufficient funds. But that gives confusing error messages and could mask accounting bugs during testing.

The redeem instruction did it correctly with an explicit check. Inconsistency = bugs waiting to happen.

Lesson: Explicit checks > implicit program behavior.

MEDIUM: The off-by-one-second bug

Three different time comparison patterns in one codebase:
• `now >= deadline` (close trading)
• `now > deadline` (finalize)
• `now <= deadline` (dispute)

At exactly deadline_ts: both finalize AND dispute blocked for 1 second. Pick a convention and stick to it everywhere.

The LMSR math engine was 703 lines of fixed-point arithmetic. LMSR pricing needs exp() and ln() functions. Solana has no floating point. So: Q64.64 fixed-point with I256 for overflow protection.

The team clamped exp() inputs to ±10.0 to prevent overflow. But when market quantities get extreme: real exp(15) ≈ 3,270,000 vs clamped exp(10) ≈ 22,026. That's a 148x difference. Low practical risk, but worth documenting.

What they did RIGHT:
• Every remaining account validated manually with PDA derivation
• Atomic ordering: burn tokens → transfer USDC → zero position
• checked_add(), checked_sub() everywhere—no raw operators
• Clean state machine: can't skip states or go backwards

What was missing: admin key rotation. Admin set at init, cannot be changed. Ever. In DeFi, admin keys get compromised. Without rotation: no recovery from key loss, no upgrade to multisig. Plan for key compromise from day one.

Solana-specific lessons:
1. Remaining accounts are UNCHECKED—validate every one
2. UncheckedAccount skips Anchor validation—use carefully
3. State checks needed in EVERY instruction (no modifiers like EVM)
4. Use Clock::get()?.unix_timestamp, not user timestamps

If you're building a Solana protocol: map your state machine explicitly, trace every fund flow combination, pick conventions and document them, plan for admin key compromise, and get an audit before mainnet.

The protocol was well-built. Issues were edge cases and design decisions, not fundamental flaws. That's what audits catch—the things familiarity makes you miss.

Full writeup: iemarjay.com/post/solana-prediction-market-security-lessons

I do security audits for backend systems and smart contracts (Solidity + Solana/Rust). DMs open if you're preparing for mainnet.

#Solana #DeFi #SmartContracts #Security

---

## FIRST REPLY (post immediately after)

The vault insolvency bug was the scariest one.

Most devs test the happy path: trade → resolve → redeem. Works fine.

But add a dispute with bonds from the same pool? Now withdrawal order matters. And it can drain the vault.

Always trace fund flows with EVERY combination of operations.

---

## QUOTE RT (6-8 hours later)

The LMSR math engine section was the hardest to audit.

703 lines of fixed-point arithmetic. exp() and ln() without floating point. Q64.64 format with I256 overflow protection.

The tradeoff between precision and overflow safety is genuinely interesting.

---

## Posting Checklist

- [ ] Engage 15-20 mins before posting (reply to others' posts)
- [ ] Post between 8-10 AM EST / 2-3 PM WAT
- [ ] Post first reply immediately
- [ ] Reply to every comment within 2 hours
- [ ] Quote RT 6-8 hours later with different angle
- [ ] Cross-reference LinkedIn post tomorrow

---

_Updated January 2026 with distribution optimizations_
