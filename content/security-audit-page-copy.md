# Smart Contract Security Audits

I'm a full-stack Web3 developer who takes security seriously. I offer professional security reviews for DeFi protocols and smart contracts — at prices that won't drain your runway.

---

## The Problem

Traditional smart contract audits cost $50,000–$500,000 and take weeks to schedule. Most early-stage projects either:
- Skip security entirely (and risk getting hacked)
- Do a cursory self-review (and miss critical bugs)
- Wait until they can afford a big firm (and launch insecure)

You shouldn't have to choose between security and shipping.

---

## Why I Do This

I got serious about security after a bug I missed cost a client nearly $10,000.

It was a webhook replay attack. Attackers discovered they could replay payment notifications multiple times before my system could check for duplicates. A single real deposit credited the wallet 2, 3, sometimes 6 times. Classic race condition — and I didn't catch it until money was gone.

That failure changed how I approach code. I stopped trusting "it looks fine" and started building systems to catch what human eyes miss. I developed a structured methodology using Claude AI to perform comprehensive, systematic reviews.

When I later audited my own smart contracts using this methodology, I found a critical vulnerability: signatures that could be replayed across chains. The *exact same class of bug* — replay attacks — at the smart contract level. The methodology I built from that $10k failure caught what my eyes would have missed again.

Now I make sure other builders don't learn this lesson the expensive way.

---

## My Approach

I combine systematic AI-assisted analysis with hands-on expert review to deliver thorough audits at startup-friendly prices. Let me explain how it actually works — no black box.

**The simple version:**

I use Claude AI to systematically analyze every line of your code against known vulnerability patterns — reentrancy, access control issues, signature flaws, and more. AI doesn't get tired on line 400. It doesn't skip the "boring" parts. It checks everything.

But AI alone isn't enough. It generates findings — some real, some noise. My job is to review every finding, filter out false positives, analyze your specific business logic, and catch the contextual issues that tools miss.

Think of it this way: AI handles breadth (checking everything systematically). I handle depth (understanding what matters for *your* project).

**What makes this different:**

- **Builder's perspective**: I've architected production DeFi systems — deposit flows, signature-based withdrawals, batch operations. I know where bugs hide because I've written (and fixed) them myself.

- **Systematic methodology**: A 7-dimension security framework covering access control, reentrancy, signature verification, upgrade safety, business logic, external dependencies, and more.

- **Proven results**: Using this methodology on my own project, I found 1 critical vulnerability (cross-chain signature replay), 3 high-severity issues, and 4 medium-severity bugs — before launch, not after a hack.

- **Transparent about tools**: I use AI (Claude) as part of my process. I'll never pretend otherwise. You deserve to know exactly how your audit is conducted.

- **Honest about limitations**: AI augments my review; it doesn't replace judgment. I'll tell you what automated tools can't catch and when you might need additional review.

---

## What I Review

Every audit covers these security dimensions:

| Dimension | What I Check |
|-----------|--------------|
| Access Control | Who can call what, role assignments, privilege escalation |
| Reentrancy | State changes, external calls, cross-function vulnerabilities |
| Signature Verification | Replay attacks, malleability, domain separation |
| Upgrade Safety | Storage gaps, initializer protection, proxy patterns |
| Token Handling | Fee-on-transfer, rebasing tokens, approval patterns |
| Business Logic | Fund flows match intent, edge cases, economic assumptions |
| External Dependencies | OpenZeppelin usage, supply chain, version pinning |

---

## Service Tiers

### Quick Scan — $500–$1,500

Best for: Pre-launch sanity checks, hackathon projects, simple contracts

- Up to 500 lines of Solidity
- 24–48 hour turnaround
- Findings summary with severity ratings
- Critical/high issues highlighted with fix recommendations

### Standard Audit — $2,000–$5,000

Best for: Typical DeFi projects, token launches, projects preparing for mainnet

- Up to 2,000 lines of Solidity
- 3–5 business days
- Complete security report covering all 7 dimensions
- Executive summary (shareholder-friendly, non-technical)
- Detailed findings with code-level fix recommendations
- Access control matrix documentation

### Comprehensive — $5,000–$10,000

Best for: Complex protocols, significant TVL, projects needing ongoing support

- Complex multi-contract systems
- 1–2 weeks
- Everything in Standard, plus:
- Fix verification (re-review after you implement fixes)
- 30-minute walkthrough call
- 30 days of follow-up support for questions

---

## What You Get

Every audit includes professional deliverables:

**Executive Summary**
Non-technical overview for stakeholders and investors. Explains findings in plain language, overall risk assessment, and recommended actions.

**Security Report**
Detailed technical findings with:
- Severity rating (Critical / High / Medium / Low / Informational)
- Affected code locations
- Explanation of the vulnerability
- Proof of concept (where applicable)
- Specific fix recommendations with code examples

**Access Control Matrix**
Clear documentation of who can call what functions, trust assumptions, and permission structures.

**Business Logic Review**
Verification that fund flows work as intended — deposits go where they should, withdrawals are properly authorized, fees are calculated correctly.

---

## Sample Finding

Here's a real critical vulnerability I found when auditing a DeFi deposit/withdrawal system:

**Severity**: Critical

**Title**: Cross-Chain Signature Replay Attack

**Description**: The withdrawal signature did not include `chainId` in the signed message. An attacker who obtained a valid signature on BSC could replay it on any other EVM chain where the contract was deployed, potentially draining funds.

**Vulnerable Code**:
```solidity
// Missing chainId in signature
bytes32 hash = keccak256(abi.encodePacked(to, amount, nonce));
```

**Recommended Fix**:
```solidity
// Include chainId to prevent cross-chain replay
bytes32 hash = keccak256(abi.encodePacked(block.chainid, to, amount, nonce));
```

**Impact**: Complete fund drainage on secondary deployments.

---

## My Background

I'm Emmanuel Joseph — a full-stack Web3 developer with 8 years of experience building production systems.

**What I've built:**
- DeFi deposit/withdrawal systems on BSC
- Signature-based withdrawal flows, CREATE2 deployments, batch operations
- NFT platforms with vault locking and fractionalization
- Payment integrations handling real money (where I learned about replay attacks the hard way)
- Contributor to Wikimedia Foundation
- 40+ public repositories on GitHub

I'm not a security researcher who's never shipped code. I'm a builder who learned security the hard way — by shipping a bug that cost real money.

That experience is why I take this seriously. "I'll be more careful next time" doesn't work. Systems and methodology do.

**I also do development work.** If you need someone to build your smart contracts *and* audit them, or if you need full-stack Web3 development, [let's talk](/contact).

---

## Process

1. **Initial call** (15–30 min): Understand your project, scope the audit, answer questions
2. **Proposal**: Clear scope, timeline, pricing — no surprises
3. **Payment**: 50% upfront to begin, 50% on delivery
4. **Audit**: Systematic review using my 7-dimension framework
5. **Report**: Complete deliverables within agreed timeline
6. **Questions**: Available to discuss findings and clarify fixes

---

## FAQ

**You use AI — why should I pay for that?**

Fair question. Here's what you're paying for:

1. **The methodology**: I spent months developing prompts that actually work. "Find bugs in this code" doesn't cut it — systematic, targeted analysis does.
2. **The interpretation**: AI generates findings. Many are noise. Knowing which ones matter, understanding your specific business logic, and providing actionable fixes — that's the human expertise.
3. **The accountability**: AI doesn't stand behind its work. I do.

You could run your code through ChatGPT yourself. You won't get the same results. The value is in the system, not just the tool.

**Is AI-assisted auditing less thorough?**

No — it's more thorough. AI helps me systematically check every line against known vulnerability patterns without fatigue. I then apply human judgment to interpret results, check business logic, and identify issues that tools miss. You get comprehensive coverage plus experienced analysis.

**Do you guarantee my contracts are bug-free?**

No auditor can guarantee that, and anyone who claims otherwise is lying. What I guarantee is a systematic, thorough review using proven methodology. I'll find what's findable with current techniques — but smart contract security is an ongoing practice, not a one-time checkbox.

**What if you find a critical bug?**

I'll flag it immediately (before the final report) so you can start fixing it. Critical findings include detailed fix recommendations. For Comprehensive tier clients, I'll re-review your fixes to confirm they're correct.

**Can I see a sample report?**

Yes — contact me and I'll share a redacted sample from a previous audit.

**Do you audit contracts on any chain?**

I primarily audit Solidity contracts for EVM-compatible chains (Ethereum, BSC, Polygon, Arbitrum, etc.). For other languages or chains, let's discuss.

**What's your payment method?**

I accept USDC/USDT (Ethereum, Polygon, or BSC), ETH, or bank transfer. Crypto preferred for speed.

**Do you work with African/emerging market projects?**

Yes — I'm based in Lagos, Nigeria. I understand the constraints: tighter budgets, different regulatory environments, the need for speed. If you're building in Africa or other emerging markets and need security review, I'd love to work with you. We can discuss Naira pricing if that's easier.

**Do you also do development work?**

Yes. I'm a full-stack Web3 developer first. If you need someone to build *and* audit, or if you need ongoing development help, let's talk.

---

## Disclaimer

This security review is provided "as-is" and does not guarantee the absence of vulnerabilities. This review uses AI-assisted analysis tools combined with manual expert review. It is not a substitute for formal verification, mathematical proofs, or insurance coverage.

The auditor assumes no liability for any financial losses, hacks, exploits, or other damages resulting from the use of audited contracts, whether or not such issues were identified in this review.

This review reflects the state of the code at the time of audit. Any subsequent changes may introduce new vulnerabilities.

---

## Get Started

Not sure if you need an audit? Let's talk. I'm happy to look at your project and give you an honest assessment — even if the answer is "you're fine for now."

**Book a free 15-minute call:**
[Calendly link]

**Or reach out directly:**
- Twitter: [@iemarjay](https://twitter.com/iemarjay)
- Email: emarjay921@gmail.com
- GitHub: [github.com/iemarjay](https://github.com/iemarjay)

I usually respond within 24 hours.

---

*Security shouldn't be a luxury. I'd rather help you launch safely than read about your hack on Rekt.*
