# Paystack MFB - Senior Backend Engineer

**Date:** January 2026
**Position:** Senior Backend Engineer
**Location:** Lagos, Nigeria (Hybrid)
**Apply:** https://job-boards.greenhouse.io/paystackmfb/jobs/8372213002

---

## Application Form Fields

**First Name:** Emmanuel
**Last Name:** Joseph
**Email:** emarjay921@gmail.com
**Phone:** [your phone]

---

## Custom Questions

### 1. Years of Senior Backend Experience

8 years

---

### 2. Backend Engineering Experience Description

*"Briefly describe your experience as a backend engineer. What types of systems have you owned or led in production, and what was your role in designing, building, and operating them?"*

I've built and owned production systems across fintech, DeFi, and enterprise:

At Pouchfi (current), I own the deposit/withdrawal infrastructure on BSC. Designed signature-based withdrawal flows, CREATE2 contract deployment, and batch transaction operations. End-to-end responsibility from architecture to production monitoring.

At Coronation Bank, I led a team of 7 engineers building their brand portal and digital asset management system. Full ownership from database design through deployment, including internal admin tools for operations teams.

For fintech clients, I've built payment platforms with Paystack and Korapay integrations, handling transaction ledgers, reconciliation flows, and settlement logic.

Currently also conduct security audits for fintech backends. I've found 160+ vulnerabilities across engagements, including forensic analysis that traced $7,149 in fraudulent transactions and identified attackers.

---

### 3. Technical Decision Impact

*"Describe a technical decision you made that significantly improved a backend system (e.g. performance, reliability, maintainability). What was the problem, and why did you choose that approach?"*

At Pouchfi, our withdrawal system was processing transactions sequentially, creating bottlenecks during high-volume periods. Users waited too long and we risked timeout failures.

I redesigned it around batch operations with Bull queues. Instead of processing one withdrawal at a time, the system now collects pending withdrawals, groups them by criteria (same token, similar amounts), and processes batches in parallel workers.

The key insight was that blockchain transactions have fixed overhead regardless of complexity. A batch of 10 withdrawals costs marginally more gas than 1, but saves 9x the overhead.

Results: 70% reduction in average processing time, better gas efficiency, and cleaner separation between request handling and transaction execution. The queue-based architecture also made it easier to add retry logic and dead-letter handling for failed transactions.

---

### 4. Data Integrity Approach

*"How do you approach data integrity and correctness in backend systems?"*

I learned this lesson the hard way. A webhook replay vulnerability I missed cost a client $10k. That failure made me obsessive about data integrity.

My approach:

**Idempotency first.** Every state-changing operation needs a unique key. I design around the question: "What happens if this request is processed twice?"

**Database constraints as the last line.** Application logic fails. Unique constraints, foreign keys, and check constraints don't. I push as much validation to the database as possible.

**Transactions with appropriate isolation.** For financial operations, I use explicit transaction boundaries with the right isolation level. Race conditions in balance updates are silent killers.

**Immutable audit trails.** For anything involving money, I never update records. Insert new rows with timestamps. The full history must be reconstructable.

**Reconciliation by design.** Build reconciliation into the system from day one. External state (payment providers, blockchains) will drift from internal state. You need to detect and handle it.

When I audit fintech systems now, data integrity issues are what I look for first. I've found fake deposit exploits, race conditions in withdrawals, and reconciliation gaps that went undetected for months.

---

## Cover Letter (Optional)

I've spent the last year going deep on what breaks financial systems.

A few months ago, I was given production database access to a fintech platform and asked to figure out what went wrong. Found 115 vulnerabilities including fake deposits, race conditions in withdrawals, and authentication bypasses. Then did forensic analysis on the transaction logs. Traced $7,149 in fraudulent transactions over 42 days, identified the attackers through spending patterns, and found $5,110 still recoverable in their wallets.

That's the kind of work I want to do more of. Not just building systems, but building systems that don't break when someone tries to break them.

My background: 8 years backend development, mostly TypeScript/Node. Built payment platforms, DeFi protocols, and internal tools at Coronation Bank. Currently at Pouchfi building deposit/withdrawal infrastructure.

I understand what you're building at Paystack MFB. Ledgers that have to be correct. Settlement that has to reconcile. Systems that regulators will scrutinize. I've reviewed these patterns from both the builder side and the breaker side.

Portfolio: https://iemarjay.com
Security case study: https://iemarjay.com/about/case-study/fintech-security
GitHub: https://github.com/iemarjay

Emmanuel Joseph
