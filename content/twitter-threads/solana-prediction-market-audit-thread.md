# X Post: Solana Prediction Market Audit Lessons

---

Just finished auditing a Solana prediction market protocol. 2,800 lines of Rust, LMSR pricing engine, 13 instruction handlers. Found 17 issues (2 high severity) before mainnet.

Here's what I learned:

**The good news:** No critical vulnerabilities. The team knew what they were doing — comprehensive PDA validation, checked arithmetic everywhere, proper state machine guards, strong double-spend prevention.

But two high-severity issues could have caused real problems.

---

**HIGH #1: Vault insolvency from dispute bonds**

The protocol had a dispute mechanism. Post a bond to challenge an outcome, get it back if you win. Problem: dispute bonds went into the same vault as trading funds.

The attack scenario:
1. Market has 1000 USDC from trades
2. Someone posts 100 USDC dispute bond
3. Creator withdraws 50 USDC in fees
4. Disputer wins, gets 100 USDC back
5. Winners try to redeem 1000 USDC
6. Vault is 50 USDC short

Lesson: Trace every withdrawal path. Make sure the math works in ALL combinations.

---

**HIGH #2: Missing balance checks**

The sell instruction transferred USDC without checking vault balance first. Yes, SPL token reverts on insufficient funds. But that gives confusing error messages and could mask accounting bugs during testing.

The redeem instruction did it correctly with an explicit check. Inconsistency = bugs waiting to happen.

Lesson: Explicit checks > implicit program behavior.

---

**MEDIUM: The off-by-one-second bug**

Three different time comparison patterns in one codebase:
- `now >= deadline` (close trading)
- `now > deadline` (finalize)
- `now <= deadline` (dispute)

At exactly deadline_ts: both finalize AND dispute blocked for 1 second. Pick a convention and stick to it everywhere.

---

**The LMSR math engine (703 lines of fixed-point arithmetic)**

LMSR pricing needs exp() and ln() functions. Solana has no floating point. So: Q64.64 fixed-point with I256 for overflow protection.

The team clamped exp() inputs to ±10.0 to prevent overflow. But when market quantities get extreme: real exp(15) ≈ 3,270,000 vs clamped exp(10) ≈ 22,026. That's a 148x difference that underprices shares in extreme markets.

Low practical risk, but worth documenting.

---

**What they did RIGHT:**

1. Every remaining account validated manually with PDA derivation
2. Atomic ordering: burn tokens → transfer USDC → zero position
3. checked_add(), checked_sub() everywhere — no raw operators
4. Clean state machine: can't skip states or go backwards

---

**What was missing: admin key rotation**

Admin set at init. Cannot be changed. Ever. In DeFi, admin keys get compromised. Without rotation: no recovery from key loss, no upgrade to multisig, compromised = game over.

Plan for key compromise from day one.

---

**Solana-specific lessons:**

1. Remaining accounts are UNCHECKED — validate every one
2. UncheckedAccount skips Anchor validation — use carefully
3. State checks needed in EVERY instruction (no modifiers like EVM)
4. Use Clock::get()?.unix_timestamp, not user timestamps

---

**If you're building a Solana protocol:**

1. Map your state machine explicitly
2. Trace every fund flow combination
3. Pick conventions and document them
4. Plan for admin key compromise
5. Get an audit before mainnet

The protocol was well-built. Issues were edge cases and design decisions, not fundamental flaws. That's what audits catch: the things familiarity makes you miss.

Full writeup with more technical details: iemarjay.com/post/solana-prediction-market-security-lessons

I do security audits for backend systems and smart contracts (Solidity + Solana/Rust). 160+ vulnerabilities found across engagements. Preparing for mainnet? emarjay921@gmail.com

---

## Notes for Posting

- Single long-form post (X Premium)
- Consider adding a code screenshot for the vault insolvency scenario
- Best times: 9am or 1pm EST for dev audience
