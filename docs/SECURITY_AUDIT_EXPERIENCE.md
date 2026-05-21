# Security Audit Experience & Methodology

**Author**: Emmanuel Joseph (@iemarjay)
**Last Updated**: January 2026

---

## Overview

I have developed and executed comprehensive security audit frameworks for both **backend systems** and **smart contracts**. This document captures the methodology, tooling, and experience gained from real-world audits (client work under NDA).

Listed on LinkedIn as **Independent Security Auditor (Contract)** since Jan 2025. **160+ vulnerabilities surfaced across engagements** spanning Solidity (EVM), Solana/Rust, and Node.js/TypeScript fintech systems.

Methodology and tooling are tailored per project — not a fixed checklist. Distilled into **[Code Refinery](https://github.com/iemarjay/code-refinery)**, an open-source agentic PR review tool that runs dedicated security and code-quality passes using Claude Code CLI in full agentic mode.

---

## Audit Experience Summary

### Backend Security Audit #1 — The $10k Incident (Vulnerability Audit + Forensic Analysis)

> Full case study: [fintech-incident-response-case-study.md](./case-studies/fintech-incident-response-case-study.md)

**Context**: This is the same fintech backend where a webhook replay attack cost my client $10k. I was brought back to conduct a comprehensive security audit AND analyze the production database to quantify the actual damage.

**Scope**: Full-stack fintech backend (NestJS/TypeScript) — wallet operations, payment webhooks, purchase flows

#### Codebase Context (What I Was Working With)

**Tech Stack**: NestJS v11, TypeScript, PostgreSQL, Redis, Bull queues

**Architecture Quality**: B- overall (75/100) — production-ready but with gaps

| Area | Grade | Notes |
|------|-------|-------|
| Architecture | A- | Clean modular design, event-driven, pluggable payment providers |
| Transaction Safety | A | Excellent pessimistic locking, advisory locks for webhooks |
| Security | B | JWT auth, RBAC, but gaps in rate limiting |
| Testing | F | Only 1 test file for entire codebase — major liability |
| Error Handling | B+ | Global exception filter, proper rollbacks |
| DevOps | C+ | No CI/CD, no health checks, missing observability |

**Notable Patterns**:
- Event-driven architecture using `@nestjs/event-emitter` for loose coupling
- Pluggable payment provider pattern with `Map<Provider, Interface>`
- Queue-based async processing (Bull) for emails, notifications, gift cards
- Pessimistic locking for all concurrent wallet operations
- Advisory locks for payment webhook coordination

**The Deadlock Incident** ([full case study](./case-studies/database-deadlock-incident.md)): Prior to audit, production experienced database deadlocks. Root cause: HTTP calls to external payment APIs were happening *inside* database transactions while holding advisory locks. Fix: Move all HTTP calls outside transactions, commit DB state first. This pattern was applied across all payment methods.

**Key Security Gap Found**: A `testGetAccessToken()` method in auth service could generate valid JWT tokens without password verification — dangerous if exposed in production.

#### Part 1: Vulnerability Audit

| Metric | Value |
|--------|-------|
| Total Issues Found | 24 |
| Critical | 5 |
| High | 7 |
| Medium | 5 |
| Low | 7 |

**The Attack Vector Identified**: The webhook handler created payments and credited wallets from webhook data alone when no pre-existing payment existed. Attackers could craft webhooks with arbitrary amounts and user IDs — a "free money" vulnerability.

**Critical Vulnerabilities Found**:
- Webhook can create payments for arbitrary users (free money vulnerability)
- Payment verification missing error handling and wallet locks (race condition)
- Webhook signature validation silent failure
- MD5 used for signature verification (cryptographically broken)
- Auto-refund without pessimistic lock (double refund)

**High Severity Issues**:
- Negative amount injection in admin wallet operations
- No database-level balance constraints
- Hold can exceed available balance (double-spend vector)
- Refund operations without pessimistic locks
- Transaction cleanup null reference crashes

#### Part 2: Forensic Incident Analysis (Production Database)

Given production database access, I analyzed the actual attack impact:

| Metric | Value |
|--------|-------|
| Total Fraudulent Deposits | $7,149.24 |
| Attack Duration | 42 days |
| Affected Customers | 720 (0.86% of 84K total) |
| Affected Payment References | 985 |
| Total Extra Payments | 1,058 |
| Recoverable from Current Balances | $5,110.06 |

**Attack Timeline Analysis**:
- Start: October 28, 2025
- End: December 8, 2025
- Peak days: 46 duplicate payments in single day
- Pattern: Gradually escalating from ~6/day to ~32/day

**Identified Top Offenders**: Located accounts showing deliberate replay patterns (40+ duplicates from single user), provided actionable list for investigation.

**Deliverables**:
- Forensic SQL queries to identify affected accounts
- Attack timeline with daily breakdown
- Top offender list with amounts and current balances
- Recovery recommendations ($5K+ recoverable)
- Remediation roadmap with priority tiers
- Code fixes with before/after examples

---

### Backend Security Audit #2

> Audit plan and findings: [creditty-plan.md](./audit-artifacts/creditty-plan.md), [creditty-findings.md](./audit-artifacts/creditty-findings.md)

**Scope**: Full-stack fintech backend (Node.js/NestJS)

| Metric | Value |
|--------|-------|
| Total Issues Found | 115 |
| Critical | 35 |
| High | 39 |
| Medium | 26 |
| Low | 15 |

**Key Vulnerability Classes Identified**:
- Fake deposit/webhook vulnerabilities (multiple payment integrations)
- Race condition / double-spend in financial operations
- Non-expiring authentication tokens
- Admin endpoints without proper authorization
- Encryption implementation weaknesses (IV reuse)
- Predictable OTP generation
- Sensitive data in logs
- Third-party integration security gaps

### Smart Contract Security Audit #1 (Solidity)

**Scope**: DeFi deposit/withdrawal system (upgradeable contracts)

| Metric | Value |
|--------|-------|
| Total Issues Found | 10+ |
| Critical | 1 |
| High | 3 |
| Medium | 4 |
| Low/Info | Multiple |

**Key Vulnerability Classes Identified**:
- Cross-chain signature replay attack
- Missing storage gaps (upgrade safety)
- Absence of withdrawal rate limits
- Single-step ownership transfer risks
- Batch operation DoS vectors
- Unsafe token recovery patterns

---

### Smart Contract Security Audit #2 (Solana/Rust)

> Full case study: [solana-prediction-market-audit-case-study.md](./case-studies/solana-prediction-market-audit-case-study.md)

**Scope**: Prediction market protocol using LMSR (Logarithmic Market Scoring Rule) AMM with USDC settlement

| Metric | Value |
|--------|-------|
| Total Issues Found | 17 |
| Critical | 0 |
| High | 2 |
| Medium | 5 |
| Low | 4 |
| Informational | 6 |
| Lines Reviewed | ~2,800 |

**Protocol Architecture**:
- 2 Solana programs (main protocol + test faucet)
- 13 instruction handlers
- 7 account types
- LMSR fixed-point math engine (703 lines)
- Binary (YES/NO) prediction markets

**High Severity Issues Found**:
- **Vault Insolvency Risk**: Dispute bond refunds could deplete vault below redemption obligations when combined with creator fee withdrawals
- **Missing Vault Balance Check**: Sell operations transferred USDC without explicit balance verification (relied on SPL token program revert)

**Medium Severity Issues Found**:
- Inconsistent time comparison operators (off-by-one-second edge cases)
- LMSR exponential function clamping distorts extreme prices (q >> b scenarios)
- No admin key rotation mechanism (single point of failure)
- Creator fee truncation at low redemption amounts
- Dispute deadline calculated from trading close instead of proposal time

**Key Review Areas**:
- LMSR fixed-point arithmetic (precision, overflow, economic invariants)
- State machine transitions (Open → TradingClosed → ProposedResolution → Finalized)
- PDA validation patterns (comprehensive manual verification in remaining accounts)
- Double-spend prevention in redemption flow
- Time-based security (Clock sysvar usage, window calculations)

**Positive Security Observations**:
- Strong PDA validation patterns throughout
- Proper double-spend prevention (burn → transfer → zero position)
- Consistent use of checked arithmetic
- Comprehensive event logging for all operations
- Well-structured state machine with proper guards

---

## Backend Audit Approach

AI-augmented audits with prompts **tailored per project** based on:
- Tech stack (Node.js, Python, Go, etc.)
- Domain (fintech, e-commerce, SaaS)
- Integration points (payment providers, KYC, etc.)
- Specific risk areas identified during initial review

### Common Focus Areas

| Area | Priority | Why |
|------|----------|-----|
| Dependency Scanning | High | Known CVEs in packages |
| SAST Code Analysis | High | Automated pattern detection |
| Authentication & Authorization | Critical | Account takeover risk |
| API Security (OWASP Top 10) | Critical | Data breach potential |
| Financial Logic | Critical | Direct monetary impact |
| Infrastructure Security | High | System compromise |
| Secrets Management | Critical | Credential exposure |
| Third-Party Integrations | High | Supply chain risk |
| Business Logic | High | Fraud/abuse vectors |
| Logging & Monitoring | Medium | Forensic capability |

**Note**: Not all areas apply to every project. Prompts are written fresh based on what the codebase actually contains.

### Tools Used

| Category | Tool | Purpose |
|----------|------|---------|
| SAST | Semgrep | Code pattern analysis |
| SAST | njsscan | Node.js-specific scanning |
| Secrets | Gitleaks | Secrets in codebase |
| Secrets | TruffleHog | Secrets in git history |
| Dependencies | npm audit | Known CVEs |
| Dependencies | OWASP Dependency-Check | Transitive dependencies |
| Agentic review | Code Refinery (own) + Claude Code SDK | Two-pass security + quality review |

### Critical Priority Areas (Run First)
1. **Financial Logic** - Direct monetary impact
2. **Secrets Management** - Credential exposure
3. **Authentication** - Account takeover risk
4. **API Security** - Data breach potential

---

## Smart Contract Audit Approach

More standardized than backend audits (Solidity patterns are more consistent), but still adapted per project based on:
- Protocol type (DeFi, NFT, governance, etc.)
- Upgrade pattern (UUPS, Transparent, immutable)
- External integrations (oracles, DEXs, bridges)
- Token standards used

### Smart contract tooling

Foundry and Anchor for test harnesses, Slither for Solidity static analysis, custom semgrep rules for project-specific patterns, and Code Refinery / Claude Code SDK pipelines for full-codebase agentic passes.

### Core Review Areas

| Area | Description |
|------|-------------|
| Line-by-Line Audit | Comprehensive code review |
| Key Areas Review | High-risk functionality deep dive |
| Access Control Matrix | Permission mapping and analysis |
| External Dependencies | OpenZeppelin, third-party code |
| Security Tests | Test coverage and attack simulations |
| Business Logic Review | Fund flow verification |
| Static Analysis | Slither, Solhint, automated tools |

### Vulnerability Classes Checked

**Signature Vulnerabilities**
- Replay attacks (same-chain, cross-chain)
- Signature malleability
- Missing nonce validation
- Improper signer recovery

**Access Control**
- Privilege escalation
- Missing modifiers
- Centralization risks
- Owner key compromise impact

**Token Handling**
- Fee-on-transfer tokens
- Rebasing tokens
- Non-standard ERC20
- SafeERC20 usage

**Upgradeability (UUPS/Transparent)**
- Storage layout corruption
- Missing storage gaps
- Initialization vulnerabilities
- Upgrade authorization

**Economic Attacks**
- Flash loan vulnerabilities
- Price manipulation
- Front-running / sandwich attacks
- AMM invariant violations
- Vault solvency issues

**Denial of Service**
- Block gas limit issues
- Unbounded loops
- External call failures

### Solana-Specific Vulnerability Classes

**Account Validation**
- Missing signer checks
- Missing owner checks
- PDA substitution attacks
- Account data injection via remaining accounts
- Type cosplay (wrong account type)
- Reinitialization attacks

**Anchor Framework**
- Improper constraint usage
- UncheckedAccount without manual validation
- Missing seeds/bump verification
- Incorrect mutability annotations

**CPI Security**
- Arbitrary CPI calls
- Incorrect signer seeds
- Program ID validation
- Authority verification

**State Machine**
- Invalid state transitions
- Missing transition guards
- Time-based manipulation (Clock sysvar)

### Severity Definitions

| Severity | Definition |
|----------|------------|
| Critical | Direct fund loss possible, immediate action required |
| High | Significant security impact, must fix before mainnet |
| Medium | Security concern, should fix but not blocking |
| Low | Best practice violation, minor risk |
| Informational | Code quality, gas optimization, style |

---

## Key Learnings

### The $10k Redemption Arc

The webhook replay vulnerability that cost a client $10k became the catalyst for building systematic security audit capabilities. When I returned to audit the same system:

1. **Found the exact vulnerability** that was exploited (webhook creating payments from external data)
2. **Quantified the damage** with forensic database analysis ($7,149 fraudulent, 42-day attack window)
3. **Identified the attackers** and recoverable funds ($5,110 still in wallets)
4. **Found 23 additional vulnerabilities** the attackers didn't exploit

This wasn't just finding bugs — it was providing complete incident response: root cause, impact analysis, attacker identification, and remediation path.

### Cross-Layer Pattern Recognition

The replay vulnerability class appears across layers:

- **Web2**: Webhook notifications creating payments without pre-existing records
- **Web3**: Withdrawal signatures replayable across chains without chain ID binding

Same class of bug, different layer. This pattern recognition across web2/web3 is a core strength.

### What Makes Audits Effective

1. **Systematic prompts** - Don't rely on memory, use checklists
2. **AI augmentation** - Let AI do pattern matching, human does context
3. **Multiple passes** - SAST + manual + business logic
4. **Stakeholder reports** - Technical findings + business impact translation
5. **Actionable output** - Prioritized remediation plans

---

## Public vs Private

| Aspect | Public | Private |
|--------|--------|---------|
| Methodology | Can share frameworks, prompts | - |
| Client names | Under NDA | Specific projects |
| Findings | Anonymized examples | Detailed reports |
| Statistics | Aggregated numbers | Project-specific |

---

## Content Opportunities

This experience enables:
- Blog posts on vulnerability classes
- Twitter threads on audit methodology
- YouTube deep-dives (anonymized examples)
- Open-source audit prompt frameworks
- Teaching/mentorship content

### Code Refinery (productized output)

The audit methodology is now packaged as an open-source tool: [github.com/iemarjay/code-refinery](https://github.com/iemarjay/code-refinery). Two-pass review (security + quality) using Claude Code CLI in full agentic mode, multi-provider, JSON-schema-constrained output, branded GitHub App via OIDC, inline diff comments, auto-merge. Use as a portfolio anchor in audit pitches — clients can see the methodology in code instead of marketing.

---

## Service Offering

Security audits are **one revenue stream**, not the whole identity.

| Tier | Price Range | Scope |
|------|-------------|-------|
| Quick Scan | $500-$1,500 | Up to 500 lines, 24-48 hrs |
| Standard | $2,000-$5,000 | Up to 2,000 lines, 3-5 days |
| Comprehensive | $5,000-$10,000 | Complex protocols, 1-2 weeks |

**Positioning**: "Full-stack developer who also does security audits" — not "security auditor."

---

*This document captures methodology for reference. Specific client details remain confidential.*
