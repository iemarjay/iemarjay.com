# What I Learned Auditing a Solana Prediction Market Protocol

I recently completed a security audit for a Solana-based prediction market protocol. The protocol implements binary (YES/NO) markets using LMSR (Logarithmic Market Scoring Rule) — the same pricing mechanism used by prediction markets like Polymarket.

Here's what I found and what other Solana developers should watch out for.

---

## The Protocol in Brief

- **Chain**: Solana (Anchor framework)
- **Market Type**: Binary prediction markets (YES/NO outcomes)
- **Pricing**: LMSR automated market maker
- **Settlement**: USDC

The codebase was ~2,800 lines of Rust across 13 instruction handlers, with a 703-line fixed-point math engine for LMSR calculations.

---

## The Findings: 17 Issues, 2 High Severity

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High | 2 |
| Medium | 5 |
| Low | 4 |
| Informational | 6 |

No critical vulnerabilities — the team had clearly thought about security. But two high-severity issues could have caused real problems in production.

---

## High Severity #1: Vault Insolvency from Dispute Bonds

Prediction markets need dispute mechanisms. Someone proposes an outcome, others can dispute by posting a bond, and an admin resolves contested markets.

The problem: dispute bonds went into the same vault as trading funds.

**The attack scenario:**

1. Market has 1000 USDC from trades
2. Someone posts 100 USDC dispute bond (vault = 1100 USDC)
3. Creator withdraws their 50 USDC in earned fees (vault = 1050 USDC)
4. Disputer wins, gets 100 USDC refund (vault = 950 USDC)
5. Winners try to redeem 1000 USDC in shares
6. Vault is 50 USDC short

**The fix:** Either check solvency before bond refunds, or use a separate escrow for dispute bonds. Don't mix operational funds with collateral.

**Lesson:** Any time you have multiple withdrawal paths from the same pool, trace every combination to make sure the math always works.

---

## High Severity #2: Inconsistent Balance Checks

The sell instruction transferred USDC from the vault without checking if the vault had enough:

```rust
// trade_sell.rs - no explicit check before transfer
transfer(
    CpiContext::new_with_signer(/* ... */),
    net,  // Could exceed vault balance
)?;
```

Meanwhile, the redeem instruction did it correctly:

```rust
// redeem_winning.rs - proper check
require!(
    ctx.accounts.vault.amount >= gross,
    ErrorCode::InsufficientVaultBalance
);
```

Yes, the SPL token program will revert on insufficient balance. But that gives users a confusing error message and could mask accounting bugs during testing.

**Lesson:** Explicit checks > implicit program behavior. If something should never happen, check for it explicitly with a descriptive error.

---

## Medium Severity: The Off-By-One-Second Bug

Time handling is tricky. This protocol had three different comparison patterns:

```rust
// Close trading: uses >=
require!(now >= market.trading_close_ts, ErrorCode::TradingNotClosed);

// Finalize: uses >
require!(now > market.dispute_deadline_ts, ErrorCode::DisputeWindowOpen);

// Dispute: uses <=
require!(now <= market.dispute_deadline_ts, ErrorCode::DisputeWindowClosed);
```

At exactly `dispute_deadline_ts`:
- Finalize fails (needs `>`)
- Dispute succeeds (allows `<=`)

One second later:
- Finalize succeeds
- Dispute fails

There's a 1-second window where both operations are blocked. Not exploitable, but confusing and could cause support tickets.

**Lesson:** Pick a convention (`>=` for "after deadline") and stick to it everywhere. Document your time semantics.

---

## The LMSR Math Engine: 703 Lines of Fixed-Point Arithmetic

This was the most interesting part to audit. LMSR pricing requires:
- Exponential functions
- Natural logarithms
- Log-sum-exp calculations

All in fixed-point because Solana has no floating point.

The implementation used Q64.64 format (64 bits integer, 64 bits fraction) with I256 for intermediate calculations to prevent overflow.

**The clamping issue:**

```rust
const EXP_LIMIT: i128 = 10_i128 << 64; // +/- 10.0 in Q64.64

fn clamp_exp_arg(x: i128) -> i128 {
    if x > EXP_LIMIT { EXP_LIMIT }
    else if x < -EXP_LIMIT { -EXP_LIMIT }
    else { x }
}
```

When market quantities get extreme (q >> b), the exp input exceeds 10.0 and gets clamped. This means:
- Real exp(15) ≈ 3,270,000
- Clamped exp(10) ≈ 22,026

That's a 148x difference, which underprices shares in extremely imbalanced markets.

**Practical risk:** Low. Requires market imbalance that probably won't happen in normal operation. But worth documenting for users.

**Lesson:** Clamping is necessary to prevent overflow, but understand and document how it affects edge cases.

---

## What They Did Right

Not all findings are negative. This protocol had strong security patterns:

**1. Comprehensive PDA Validation**

The remaining accounts pattern (passing multiple accounts dynamically) is dangerous. They validated every single one:

```rust
let (expected_market, market_bump) = Pubkey::find_program_address(
    &[SEED_MARKET, &market_params.market_id.to_le_bytes()],
    ctx.program_id,
);
require_keys_eq!(expected_market, market_ai.key(), ErrorCode::InvalidMarketPda);
```

**2. Atomic Double-Spend Prevention**

The redemption flow was properly ordered:
1. Burn the outcome tokens (can't be undone)
2. Transfer USDC payout
3. Zero the position shares

If step 2 fails, user still has their tokens. But once tokens are burned, the position is zeroed regardless.

**3. Checked Arithmetic Everywhere**

Every arithmetic operation used `checked_add()`, `checked_sub()`, etc. No raw operators that could overflow silently.

**4. Strong State Machine**

Five states with proper guards:
- Can't trade when state != Open
- Can't propose when state != TradingClosed
- Can't dispute when state != ProposedResolution
- Can't redeem when state != Finalized

No way to skip states or go backwards.

---

## Missing: Admin Key Rotation

One design issue worth highlighting: the admin key was set at initialization and couldn't be changed.

In DeFi protocols, admin keys get compromised. It happens. Without a rotation mechanism:
- No recovery from key loss
- No upgrade to multisig later
- Compromised key = protocol takeover

Consider:
- Two-step transfers (propose + accept)
- Timelocks on admin changes
- Multisig support from day one

---

## Solana-Specific Lessons

If you're building on Solana, watch for:

**1. Account Injection via Remaining Accounts**
Remaining accounts are unchecked by default. Validate every one manually if you use them.

**2. UncheckedAccount Patterns**
Anchor's `UncheckedAccount` skips validation. Great for optional accounts, dangerous if you forget to validate.

**3. State Machine Transitions**
Unlike EVM where you can use modifiers, Solana programs need explicit state checks in every instruction.

**4. CPI Authority Verification**
When making CPIs, verify the authority is what you expect. PDA authority should use the correct seeds.

**5. Time-Based Security**
Use `Clock::get()?.unix_timestamp`, not passed-in timestamps. Validators control the clock within bounds, but it's better than trusting user input.

---

## Final Thoughts

This was a well-built protocol. No critical issues, strong security patterns, good test coverage. The issues found were edge cases and design decisions — the kind of things that slip through when you're focused on building.

That's exactly why audits exist. Fresh eyes catch what familiarity misses.

If you're building a Solana protocol:
1. Map your state machine explicitly
2. Trace every fund flow to make sure the math works in all combinations
3. Pick conventions (time comparisons, error handling) and stick to them
4. Plan for admin key compromise from day one
5. Get an audit before mainnet

---

*I do security audits for backend systems and smart contracts (Solidity and Solana). If you're preparing for mainnet and want another set of eyes, reach out: emarjay921@gmail.com*
