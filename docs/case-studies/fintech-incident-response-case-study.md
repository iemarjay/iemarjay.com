# Case Study: Fintech Incident Response & Security Audit

**Industry**: Fintech (Payments & Wallet Services)
**Engagement Type**: Security Audit + Forensic Incident Analysis
**Duration**: 2 weeks
**Outcome**: 24 vulnerabilities identified, attack quantified, $5,110 recovery path identified

---

## Executive Summary

A fintech platform processing payments experienced an active security breach. The engagement combined traditional vulnerability assessment with production database forensics to deliver:

1. Identification of the active attack vector
2. Comprehensive vulnerability audit (24 issues found)
3. Forensic analysis quantifying $7,149 in fraudulent transactions
4. Attacker identification with evidence for potential legal action
5. Recovery plan for $5,110 in recoverable funds

---

## The Challenge

### Situation
- Active security incident with ongoing financial losses
- Attackers exploiting payment webhook handling
- Unknown scope of damage
- Need for immediate containment plus long-term remediation

### Constraints
- Production system requiring zero downtime
- NDA-protected codebase and customer data
- Time pressure from ongoing attack

---

## Approach

### Phase 1: Vulnerability Assessment

**Methodology**: AI-augmented systematic code review with manual expert analysis

**Scope**:
- Payment webhook handlers (3 providers)
- Wallet operations (balance, hold, refund)
- Order processing (5 product types)
- Admin operations
- Transaction management

**Techniques**:
- Line-by-line code audit with targeted prompts
- Business logic review for financial operations
- Race condition analysis on all state-changing operations
- Authentication & authorization mapping

### Phase 2: Forensic Database Analysis

**Scope**: Production database with full read access

**Analysis Performed**:
- Transaction timeline reconstruction
- Duplicate payment detection
- Balance discrepancy identification
- Attacker account identification
- Attack pattern analysis

---

## Findings Summary

### Vulnerability Audit Results

| Severity | Count | Examples |
|----------|-------|----------|
| Critical | 5 | Webhook payment creation, race conditions, signature failures |
| High | 7 | Negative amounts, missing constraints, double-refund vectors |
| Medium | 5 | Console logging PII, no rate limiting, collision-prone references |
| Low | 7 | Entity method footguns, missing audit trails |

### Critical Vulnerabilities

**CRITICAL-1: Arbitrary Payment Creation via Webhook**

The payment webhook handler contained a fallback code path that created payment records and credited wallets when no pre-existing payment was found. This allowed attackers to craft webhooks with arbitrary amounts and user IDs.

*Impact*: Unlimited fund creation
*Fix*: Remove fallback path; only process webhooks for initiated payments

**CRITICAL-2: Race Condition in Payment Verification**

Payment verification lacked pessimistic locking, allowing concurrent webhook calls to double-credit wallets.

*Impact*: 2x-6x deposit multiplication
*Fix*: Add `pessimistic_write` lock; implement proper try/catch/finally for connection management

**CRITICAL-3: Silent Signature Validation Failure**

Invalid webhook signatures resulted in silent return rather than exception, allowing unsigned requests through under certain conditions.

*Impact*: Signature bypass
*Fix*: Throw `UnauthorizedException` on invalid signatures; add logging

**CRITICAL-4: Cryptographic Weakness**

One payment provider integration used MD5 for signature verification.

*Impact*: Collision attacks feasible
*Recommendation*: Request SHA-256 from provider; add IP whitelisting as compensating control

**CRITICAL-5: Auto-Refund Double-Spend**

Order status polling triggered automatic refunds without pessimistic locking, enabling multiple concurrent refunds for single failed orders.

*Impact*: Nx refund for 1x payment
*Fix*: Lock order row before status check; verify status after lock acquisition

### Forensic Analysis Results

| Metric | Value |
|--------|-------|
| Total Fraudulent Amount | $7,149.24 |
| Attack Window | 42 days |
| Affected Accounts | 720 (0.86% of customer base) |
| Duplicate Payments | 1,058 |
| Affected References | 985 |
| Recoverable Funds | $5,110.06 |

### Attack Pattern Analysis

**Timeline**:
- **Start**: October 28, 2025
- **End**: December 8, 2025
- **Escalation**: Gradual increase from ~6/day to ~32/day
- **Peak**: 46 duplicate payments on November 29

**Duplicate Distribution**:
| Replay Count | Occurrences | Extra Payments |
|--------------|-------------|----------------|
| 2x | 946 | 946 |
| 3x | 18 | 36 |
| 4x | 14 | 42 |
| 5x | 1 | 4 |
| 6x | 6 | 30 |

**Top Offender**: Single account with 40 duplicate payments, $1,028 fraudulent credits, $619 remaining balance

---

## Deliverables

1. **Security Audit Report** (40+ pages)
   - All 24 findings with severity ratings
   - Code-level fix recommendations
   - Before/after code examples
   - Prioritized remediation roadmap

2. **Forensic Analysis Report**
   - Complete attack timeline
   - Affected account listing
   - Top offender identification
   - Recovery recommendations

3. **SQL Query Library**
   - Duplicate detection queries
   - Balance discrepancy analysis
   - Attack pattern identification
   - Ongoing monitoring queries

4. **Remediation Roadmap**
   - Immediate actions (deploy same day)
   - Urgent fixes (within 1 week)
   - Short-term improvements (2 weeks)
   - Long-term hardening (ongoing)

---

## Outcome

### Immediate Results
- Attack vector closed within 24 hours of identification
- $5,110 recovery path identified
- Evidence package prepared for potential legal action

### Security Posture Improvement
- 5 critical vulnerabilities remediated
- Database constraints added preventing negative balances
- Pessimistic locking implemented across all financial operations
- Webhook security hardened across all providers

### Lessons Applied
- Race conditions are the primary vulnerability class in fintech
- Defense in depth requires each layer to actively block, not just log
- Forensic capability is valuable for quantifying and recovering from attacks

---

## Engagement Details

**Duration**: 2 weeks
**Team**: Solo consultant (Emmanuel Joseph)
**Access Required**: Codebase repository, production database (read-only)
**Communication**: Daily async updates, 2 live walkthroughs

---

## About the Consultant

Emmanuel Joseph (@iemarjay) is a full-stack developer with 8 years experience building production systems. Conducts security audits across backend systems and smart contracts (Solidity and Solana/Rust), with 160+ vulnerabilities identified across engagements.

**Contact**: emarjay921@gmail.com
**Services**: [iemarjay.com/services/security](https://iemarjay.com/services/security)

---

*Client details anonymized. Engagement conducted under NDA. Case study shared with client approval.*
