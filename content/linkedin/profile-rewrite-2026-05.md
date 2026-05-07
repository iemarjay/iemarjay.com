# LinkedIn Profile Rewrite — May 2026

Drafted in response to "no experience visible" feedback from a Nigerian-startup CTO conversation. Goal: surface the CTO-grade work that was buried.

**LinkedIn editing tip:** before saving each entry, **toggle "Notify network" OFF** in the Edit dialog so your connections don't get spammed with 6 job-change notifications across these edits.

---

## Headline

```
CTO & Engineering Lead • Backend / Web3 / Security / Fintech / AI • 8+ yrs at pre-seed → Series A • Powered a $400K raise
```

(Already updated on profile.)

---

## About

```
I lead engineering at pre-seed → Series A startups. Backend, web3, fintech, security, and AI / LLM integration.

In 8 years: shipped a fintech PaaS to 2,000+ users, built a token sale platform that raised $400K in 2 weeks, and found 160+ vulnerabilities before attackers did. Now building LLM-native developer tools.

WHAT I'VE BUILT

→ Decafinance — A multi-tenant fintech loan & savings PaaS for ride-hailing drivers. Integrated banking APIs for automated disbursement, savings, and withdrawals. Scaled to 2,000+ drivers and $40K+ in transactions. (CTO, Decasoft Technologies, 2 yrs)

→ Wikipedia search infrastructure — On the Search Platform team at Wikimedia Foundation (the non-profit behind Wikipedia). Upgraded Elasticsearch plugins powering search across 300+ language editions. Fixed a long-standing instrumentation bug that cut error volume from ~5M/month to ~500K.

→ Token private sale platform that raised $400K in 2 weeks. Stack: Next.js, Wagmi, EthersJS, Solana web3.js, Solidity. Pivoted from Solana to EVM mid-build to dodge congestion. Real-time tracking bot, KOL dashboards, multi-wallet support.

→ Code Refinery — Open-source agentic PR review tool. Two passes (security + code quality) powered by Claude Code CLI in full agentic mode. Multi-provider (Anthropic, AWS Bedrock, Vertex AI, Azure), JSON-schema-constrained output, branded GitHub App via OIDC token exchange, inline diff comments, auto-merge. github.com/iemarjay/code-refinery

→ Security audits — backend (fintech) and web3 (Solidity + Solana/Rust). 160+ vulnerabilities surfaced across engagements, including a cross-chain replay bug and vault insolvency risk in an LMSR AMM prediction market. One forensic case: quantified $7,149 in fraud over 42 days and identified $5,110 still recoverable in attacker wallets.

WHAT I BRING TO A FOUNDING TEAM

→ Architecture & scaling for systems that handle real money
→ Hiring, mentoring, engineering culture (also mentor on ADPList)
→ Security-first engineering across web2 + web3
→ LLM-native tooling and agentic workflows in production
→ Comfort with ambiguity — pre-seed → Series A is home turf
→ Stack: Node.js, TypeScript, Go, Next.js, Solidity, Rust, PostgreSQL, Elasticsearch, Claude Code SDK / agentic LLM pipelines

WHAT I'M LOOKING FOR

CTO or VP Engineering roles at pre-seed → Series A startups — especially in fintech, web3, AI-native products, or anywhere money + trust meet code. Open to remote and hybrid (Lagos).

Currently leading engineering at Pouchfi.

emarjay921@gmail.com · iemarjay.com
```

---

## EXPERIENCE — paste-ready entries

### 1. Pouchfi (NEW entry — add this)

| Field | Value |
|---|---|
| Title | `Engineering Lead` |
| Company | `Pouchfi` |
| Employment type | Full-time *(or whatever applies)* |
| Start date | `Jul 2024` |
| Currently working | ✅ Yes |
| Location | `Remote` |
| Location type | `Remote` |

**Description:**

```
Lead engineering for Pouchfi, a DeFi platform on Binance Smart Chain. Own architecture and technical direction, contribute to product strategy, and lead a team of 7 engineers.

→ Architecture — Designed and built the current platform from the ground up: a modular monolith backend (Node.js/TypeScript) and a Next.js frontend, with an event-driven design and async queue processing to handle financial transactions reliably and at throughput.

→ Smart contracts — Wrote the on-chain contracts that power Pouchfi's deposit and withdrawal flows on BSC. Signature-based withdrawals with cryptographic verification, CREATE2 deterministic deployment, and batch operations for high-volume transactions.

→ Backend platform — Built off-chain infrastructure for signature verification, wallet operations, transaction reconciliation, and async job processing (Bull queues). DevSecOps for continuous deployment, infrastructure-as-code, and secret management.

→ Cross-functional leadership — Trusted technical voice on company direction. Contribute to product strategy alongside the leadership team; my input on design and business decisions carries weight beyond pure engineering.

→ Engineering team — Lead 7 engineers across backend, frontend, and smart contracts. Own hiring, code review standards, architecture decisions, mentorship, and engineering culture.

The platform is currently in public beta.

Stack: TypeScript, Node.js, Next.js, Solidity, PostgreSQL, Redis, Bull queues, Docker, AWS, BSC, ethers.js.
```

---

### 2. Independent Security Auditor (NEW entry — add this)

| Field | Value |
|---|---|
| Title | `Independent Security Auditor` |
| Company | `Freelance` *(or your own brand if you have one)* |
| Employment type | `Contract` |
| Start date | `Jan 2025` *(adjust if different)* |
| Currently working | ✅ Yes |
| Location | `Remote` |
| Location type | `Remote` |

**Description:**

```
Code review and code security review across web2 backends and web3 smart contracts. Covering Solidity (EVM), Solana/Rust, and Node.js/TypeScript fintech systems.

→ The $10k Redemption — Returned to audit a fintech system where a webhook replay vulnerability I had previously shipped cost the client $10,000. Found 24 vulnerabilities (5 critical, 7 high) including the exact bug that was exploited. Performed forensic analysis on production data: quantified $7,149 in fraudulent transactions across 42 days and identified $5,110 still recoverable in attacker wallets.

→ Fintech backend audit — Comprehensive audit of a payments and wallet system. Surfaced 115 issues (35 critical, 39 high) including fake-deposit flows, race conditions, weak authentication, and encryption flaws.

→ Solana prediction market audit — Reviewed a 2,800-line Solana/Rust LMSR AMM protocol, including a 703-line fixed-point math engine. Surfaced 17 issues (2 high, 5 medium) including a vault insolvency risk.

→ EVM smart contract audit — Reviewed a Solidity cross-chain protocol. Found a critical cross-chain signature replay vulnerability, storage-gap issues, and rate-limit bypasses.

→ Code Refinery (open source) — Distilled learnings from this audit work into Code Refinery, an open-source agentic PR review tool that runs dedicated security and code-quality passes using Claude Code CLI in full agentic mode. Multi-provider, JSON-schema-constrained output, branded GitHub App via OIDC, inline diff comments, auto-merge. github.com/iemarjay/code-refinery

160+ vulnerabilities surfaced across engagements. Methodology and tooling tailored per project — not a fixed checklist.

Tooling: Solidity, Rust, Foundry, Anchor, Slither, semgrep, Claude Code SDK / agentic LLM pipelines.
```

---

### 3. Origneum DWTCA (UPDATE existing entry)

| Field | Value |
|---|---|
| Title | `Lead Engineer` (no change) |
| Company | `Origneum DWTCA` (no change) |
| Employment type | `Contract` (no change) |
| Currently working | ❌ Uncheck |
| Start date | **change** `Oct 2021` → `Sep 2022` |
| End date | **add** `Sep 2024` |
| Location | `Remote` (no change) |
| Location type | `Remote` (set if not already) |

**Description (replace existing):**

```
Lead engineer on a portfolio of fintech, web3, and infrastructure projects for early-stage clients (pre-seed → Series A).

→ Token private sale platform — Built and shipped a high-throughput sale platform that raised $400K in 2 weeks. Pivoted from Solana to EVM mid-build to handle network congestion. Real-time investor tracking bot, KOL performance dashboards, multi-wallet support (MetaMask, Trust Wallet). Stack: Next.js, Wagmi, EthersJS, Solana web3.js, Solidity, Node.js.

→ Hackathon products — Led builds for several Origneum products that placed in international hackathons, including Openland (fractionalized-NFT real estate on Moonriver) and Qlipit.io (NFT marketplace + academy on BNB Chain).

→ Production delivery — Shipped full-stack web apps and APIs across fintech, web3, and ed-tech. Integrated banking, identity/KYC, and payment providers. Set up CI/CD pipelines, container-based deployments (Docker), and cloud infra on Digital Ocean and AWS.

→ Engineering & cross-functional leadership — Led a team of 3 engineers. Owned code review, architecture sessions, and technical mentorship. Partnered closely with founders/stakeholders, product, and design colleagues to align scope, timelines, and trade-offs.

Stack: Node.js, TypeScript, Go, Next.js, Vue, NestJS, Solidity, Rust, Solana, PostgreSQL, MongoDB, Redis, Docker, GitHub Actions.
```

---

### 4. Wikimedia Foundation (UPDATE existing entry)

| Field | Value |
|---|---|
| Title | **change** `Software Engineer` → `Software Engineer · Search Infrastructure` |
| Company | `Wikimedia Foundation` (no change) |
| Employment type | `Full-time` (no change) |
| Start / End | `Oct 2021 – Oct 2022` (no change) |
| Location | `Remote` (no change) |

**Description (replace existing — fixes "di erent" typo and adds Wikipedia framing + cert):**

```
Wikipedia search infrastructure at Wikimedia Foundation — the non-profit behind Wikipedia, Wiktionary, and Wikidata. My work powered search across 300+ Wikipedia language editions used by hundreds of millions of monthly readers.

→ Upgraded 7 internally-developed Elasticsearch plugins for Elasticsearch 7 compatibility, plus contributions to 3 open-source plugins. Published to Maven Central.

→ Improved instrumentation and error categorization between the Search frontend (CirrusSearch) and the Elasticsearch backend, which surfaced and fixed a long-standing complex bug — reducing error volume from ~5M errors/month to ~500K.

→ Created a uniform query-dump system across all Search endpoints (full-text, completion, suggestions). Let Search Engineers visualize queries end-to-end to diagnose correctness and relevance issues.

→ Trained directly on large-scale architecture design and code refactoring at one of the world's most-visited engineering organizations. Earned Elasticsearch certification during this role.

Stack: Java, PHP, Elasticsearch, Vagrant, Git, Gerrit, Less.
```

---

### 5. Decasoft Technologies CTO (UPDATE existing entry)

| Field | Value |
|---|---|
| Title | `Chief Technology Officer` (no change) |
| Company | `DECASOFT TECHNOLOGIES LTD.` (no change) |
| Employment type | `Full-time` (no change) |
| Start / End | `Oct 2019 – Oct 2021` (no change) |
| Location | `Lagos` (no change) |

**Description (replace existing):**

```
Led engineering and technical operations for a Lagos-based fintech startup. Owned architecture, hiring, deployment infrastructure, and the technical relationship with the founding team.

→ Decafinance — Architected and shipped a multi-tenant fintech loan & savings PaaS. Scaled to 2,000+ ride-hailing drivers and $40K+ in transactions. Designed for white-label deployment, so new customer organizations could be onboarded with isolated tenancy.

→ Banking integrations — Integrated multiple Nigerian banking APIs for automated loan disbursement, withdrawals, and savings collection on behalf of borrowers and lenders.

→ Deployment automation — Built a Docker-based provisioning service that automated tenant onboarding, cutting customer setup from days to minutes.

→ Cost-effective call center — Architected and rolled out an in-house call center on SIP trunking, replacing legacy telephony at a fraction of the cost while giving the support team programmable routing and call analytics.

→ Productivity stack — Introduced Zoho Mail and Freshdesk company-wide as early adopters (well before either was a default in the Lagos startup scene), saving on per-seat licensing while standardizing email and customer support workflows.

→ Engineering team — Led a team of 4 engineers. Owned hiring, code review standards, architecture decisions, and engineering culture across backend, frontend, and infra.

Stack: Node.js, NuxtJS, Vue, Tailwind, PostgreSQL, Docker, banking REST APIs, SIP trunking, Zoho, Freshdesk.
```

---

### 6. SBSC (HIDE)

Edit the SBSC role → toggle **"Show on profile"** off, OR delete the entry. 4-month role from 2019, doesn't add CTO signal.

---

## Other quick fixes (non-experience)

### Licenses & Certifications

- **Delete** "Diploma in Desktop Publishing" — actively hurting the profile.
- **Add** the Elasticsearch certification you earned at Wikimedia (Elastic Certified Engineer / Analyst / Observability Engineer — pick whichever you hold). Issuer: Elastic.

### Activity feed cleanup

Delete these 3 reposts (off-brand for CTO read):

1. Repost of Kayode Oluseyi's TikTok/marketing thinkpiece (9 mo ago)
2. Repost of Iroegbu Ihechi's "Trying something new 🥰 #videoediting" (2 yr ago)
3. Your own "Late post alert!" June recap (10 mo ago)

### Profile mechanics

- **Open to Work** — switch from public ring to **recruiters-only**.
- **Verification badge** — add it if not already done.

---

## Updated timeline (after these changes)

| Role | Dates | Length |
|---|---|---|
| Engineering Lead · Pouchfi | Jul 2024 – Present | ~22 mo |
| Independent Security Auditor (Contract) | Jan 2025 – Present | ~12 mo |
| Lead Engineer · Origneum DWTCA (Contract) | Sep 2022 – Sep 2024 | 2 yrs |
| Software Engineer · Search Infrastructure · Wikimedia Foundation | Oct 2021 – Oct 2022 | 1 yr 1 mo |
| Chief Technology Officer · Decasoft | Oct 2019 – Oct 2021 | 2 yrs 1 mo |
| Software Developer · AlphaBeta Ghana | May 2017 – Oct 2017 | 6 mo |
| Software Developer · Proteux Technologies | Apr 2016 – Apr 2017 | 1 yr 1 mo |
| ~~SBSC~~ | hidden | — |

Overlaps are within 2 months at boundaries (Wikimedia↔Origneum, Origneum↔Pouchfi).

---

## Wikimedia bullet — interim version (no cert claim)

Use this until the Elasticsearch certification is recovered from Elastic:

```
→ Deepened expertise in large-scale architecture, code refactoring, and Elasticsearch internals (query optimization, plugin architecture, cluster operations) through close work with senior engineers maintaining Wikipedia's search at global scale.
```

When the cert is confirmed, swap back to mentioning it explicitly and add to Licenses & Certifications.

---

## Featured section — 5 pinned items

Open Featured → Add → Link → paste URL → edit the title/description LinkedIn pre-fills with the copy below.

### 1. Code Refinery (lead with this)

- **Type:** Link
- **URL:** `https://github.com/iemarjay/code-refinery`
- **Title:** `Code Refinery — Open-source agentic PR review`
- **Description:**
  ```
  Two-pass AI code review (security + quality) using Claude Code CLI in full agentic mode. Multi-provider, JSON-schema-constrained output, branded GitHub App via OIDC. Distilled from years of audit work into a tool you can drop into any repo.
  ```

### 2. The $10K Bug → Security Origin Story

- **Type:** Link
- **URL:** `https://iemarjay.com/post/how-a-10k-bug-taught-me-to-build-ai-security-audits`
- **Title:** `How a $10K bug taught me to build AI security audits`
- **Description:**
  ```
  A webhook vulnerability in code I shipped cost a client $10,000. That failure turned into a methodology that has surfaced 160+ vulnerabilities since. The full story.
  ```

### 3. Solana Prediction Market Audit (Case Study)

- **Type:** Link
- **URL:** `https://iemarjay.com/about/case-study/solana-prediction-market`
- **Title:** `Solana prediction market audit — 17 issues in 2,800 lines of Rust`
- **Description:**
  ```
  Reviewed an LMSR AMM protocol with a 703-line fixed-point math engine. Found 17 issues including a vault insolvency risk that would have broken the protocol's core invariant under specific liquidity conditions.
  ```

### 4. Fintech Security Case Study

- **Type:** Link
- **URL:** `https://iemarjay.com/about/case-study/fintech-security`
- **Title:** `Fintech audit + forensic recovery — the $10K redemption`
- **Description:**
  ```
  Returned to audit the same fintech I had previously broken. Found 24 vulnerabilities (5 critical, 7 high) including the original webhook bug. Forensic analysis: $7,149 in fraud quantified across 42 days, $5,110 traced and recoverable.
  ```

### 5. iemarjay.com (Portfolio + Services)

- **Type:** Link
- **URL:** `https://iemarjay.com`
- **Title:** `iemarjay.com — Engineering, security, and case studies`
- **Description:**
  ```
  Full portfolio: backend & web3 engineering, security audit services, case studies, and the blog where I work through what I'm learning.
  ```

---

## Banner copy — 3 options

Replace the current "I help startups launch faster…" line.

### Option A — CTO leadership tone

```
I lead engineering at pre-seed → Series A startups.
Backend. Web3. Security. AI.
Architecture, hiring, and shipping the first $1M of value.
```

### Option B — Proof-led

```
Engineering Lead • CTO
Powered a $400K raise · Found 160+ vulnerabilities
Now building LLM-native developer tools.
iemarjay.com
```

### Option C — Recommended

```
I lead engineering at startups where money + trust meet code.
Pre-seed → Series A. Backend, web3, security, AI.
iemarjay.com
```

> **Pick C** unless you specifically want the leadership-tone or proof-led variant. C qualifies the type of startup ("money + trust meet code"), targets investor/founder language, and reads like a CTO.

---

## Recommendation request DMs

LinkedIn lets you add a custom note to a recommendation request. Paraphrase, don't paste verbatim. Include 2-3 specific things you'd like the writer to mention so they don't stare at a blank box.

### Template 1 — Founder / CEO (Decasoft, Origneum, token sale, Pouchfi)

**Body:**

```
Hey [Name] — quick favor request.

Hope you're doing well. I'm refreshing my LinkedIn for some CTO conversations and I'm asking 3 people to write me a short recommendation. You'd be a huge help.

Anything you can say honestly works — even 3-4 sentences. If it helps, things you might touch on:

• What it was like working with me as your [CTO / lead engineer / contractor]
• A specific outcome that mattered (e.g., [Decafinance scaling to 2,000+ drivers / the $400K token sale shipping in 2 weeks / the rebuild that took us from $60K-burned to public beta])
• How I handle architecture, hiring decisions, or working with the founding team

Totally fine if you'd rather not — no pressure. And of course I'll write one back for you any time.

Thanks!
Emmanuel
```

> **Best targets:** Decasoft founder/CEO, Founder Jeff (token sale), or the Pouchfi founder. One founder rec is the single highest-leverage item on the entire profile.

### Template 2 — Senior engineer / peer (Wikimedia, Origneum, Pouchfi)

```
Hey [Name],

Putting my LinkedIn through a refresh and trying to add 2-3 recommendations from people I've actually built with. Would you be up for writing one?

If you're up for it, things that'd be genuinely useful for me to have on record:

• How I show up in code review and architecture discussions
• [Wikimedia: the Elasticsearch plugin upgrade work / the CirrusSearch instrumentation fix]
• [Origneum/Pouchfi: how I pair with stakeholders or product / how I handle ambiguity]
• Anything about my engineering judgment that stuck with you

3-5 sentences is plenty. And happy to return the favor whenever you need it.

Cheers,
Emmanuel
```

### Template 3 — ADPList mentee

```
Hey [Name] —

Hope mentorship has been useful! I'm asking a few of the people I've worked with to write a short LinkedIn recommendation, and a mentee perspective would actually be valuable for the kind of roles I'm exploring (CTO/engineering lead positions where mentoring junior engineers is part of the job).

Anything honest works. If helpful, you could touch on:

• What you came to me for and whether the sessions actually helped
• How I explain technical concepts (especially the harder ones)
• Anything specific you've shipped or shifted because of our conversations

3-4 sentences is plenty. No pressure if you'd rather not — and totally happy to keep the mentorship going either way.

Thank you!
Emmanuel
```

### How to send

1. Go to the person's profile → "More" → "Request a recommendation"
2. Select the relationship and your role at the time
3. Paste the personalized message
4. Send

**Send order:**
1. One founder today (lowest hit rate, highest impact — give the most lead time)
2. One peer/senior engineer today (highest reply rate, fastest turnaround)
3. One mentee when you have a specific person in mind

If only the founder rec lands, the profile transforms.

---

## After all changes are live — closing move

Message the person who shared the harsh "no experience" feedback:

```
Thanks for the honest read — the profile was thin. I rewrote the About, Experience, and Featured sections this week. Mind taking another look?
```

That alone is a CTO move. Also gives the founder a fresh reason to re-open the conversation.
