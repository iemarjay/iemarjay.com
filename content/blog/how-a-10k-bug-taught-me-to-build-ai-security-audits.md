# How a $10k Bug Taught Me to Build an AI Security Audit System

A vulnerability I missed cost my client nearly $10,000. That failure drove me to build something better. When I finally used it to audit my own smart contracts, it found the exact same class of bug, at the smart contract level.

This is the story of how I went from "it looks fine" to a systematic methodology that actually catches things.

---

## The Bug That Cost $10,000

I was building a payment integration with Korapay for a client. Standard stuff, receive webhook notifications when deposits come in, credit user wallets, move on.

The code worked. Tests passed. Manual testing looked good. "It looks fine," I thought.

Then the attackers showed up.

They discovered something I'd missed: you could replay the same webhook notification multiple times. The request would hit my server, and before the system could record and check for duplicates, they'd replay it again. And again. Sometimes 2 times. Sometimes 6.

One real $500 deposit would credit a wallet $3,000.

By the time I understood what was happening, the damage was done. Nearly $10,000 in losses for my client.

### What I Got Wrong

Looking back, the vulnerability was obvious. Classic race condition combined with replay attack. The system checked for duplicates, but not atomically, and not fast enough.

But here's the thing: I didn't miss it because I was careless. I missed it because I was checking things *I knew to check*. The attack vector lived in my blind spot.

Human review has a fundamental problem: we don't know what we don't know. We check for things we've seen before. We get tired on line 400. We skip the "boring" parts.

"Be more careful next time" wasn't going to cut it. I needed a system.

---

## Building the Methodology

After the Korapay incident, I became a little obsessed with systematic security review. How do professional auditors find bugs that developers miss? What makes the difference between "looks fine" and "actually fine"?

The answer kept coming back to coverage. Good auditors don't just read code; they systematically check every function against a mental checklist of vulnerability patterns. They don't skip sections. They don't get tired.

That's when I started experimenting with Claude AI.

### Why AI?

Not because AI is magic. It's not. But AI has two properties that complement human review:

1. **It doesn't get tired.** Line 1 and line 600 get the same attention.
2. **It can be systematic.** Give it a checklist, it checks everything.

The problem is, "find bugs in this code" doesn't work. I tried it early on. You get vague observations, false positives, and miss the real issues.

What *does* work is targeted, systematic prompts. Instead of "find bugs," you ask specific questions:

- "For every external call, trace what happens if the called contract re-enters this function"
- "For every signature verification, check: is chainId included? Is there a nonce? Can it be replayed?"
- "For every role-gated function, who can grant that role? Can it be exploited?"

This took months to develop. I went through dozens of prompt iterations, testing each one against known vulnerabilities to see what actually caught bugs versus what produced noise.

Eventually I had a 7-prompt framework that covered different security dimensions systematically.

---

## The Prompts (5 of 7, Open-Sourced)

I'm releasing 5 of the 7 prompts publicly. You can use them on your own projects right now.

### Prompt 1: Line-by-Line Security Audit

This prompt walks through every function, checking for common vulnerability patterns: reentrancy, access control issues, integer handling, signature verification, and more.

**What it catches**: The breadth of known vulnerability types. Things like missing reentrancy guards, unchecked return values, or signature malleability.

**Sample prompt structure**:
```
Analyze this Solidity contract line by line. For each function:
1. Identify all external calls and check for reentrancy
2. Check access control, who can call this? Should they be able to?
3. Look for signature verification issues: replay attacks, malleability, missing chainId
4. Check integer operations for overflow/underflow (even with Solidity 0.8+, check wrapped operations)
5. Identify state changes and verify they happen before external calls

Report findings with severity (Critical/High/Medium/Low/Info), affected code location, and specific fix recommendation.
```

### Prompt 2: Key Areas Security Review

Instead of scanning everything uniformly, this prompt deep-dives into high-risk areas: fund movements, privilege changes, external integrations.

**What it catches**: Subtle issues in critical code paths that a broad scan might skim over.

### Prompt 3: Access Control Matrix

This generates a complete map of who can call what. Every role, every function, every trust assumption.

**What it catches**: Privilege escalation paths, missing role checks, functions that should be restricted but aren't.

**Why this matters**: I've found that drawing out the access control matrix often reveals issues that line-by-line review misses. You see the system as a whole, not just individual functions.

### Prompt 4: Business Logic Review

This checks whether the code actually does what it's supposed to. Do deposits go where they should? Can withdrawals be front-run? Are fees calculated correctly?

**What it catches**: Logic bugs that aren't "security vulnerabilities" in the traditional sense but could still lose user funds.

### Prompt 5: External Dependencies Review

This examines every external call, inherited contract, and third-party integration. Are you using OpenZeppelin correctly? What happens if that oracle lies?

**What it catches**: Supply chain risks, unsafe assumptions about external contracts, version-specific vulnerabilities.

### Prompts 6-7 (Not Open-Sourced)

The remaining two prompts cover static analysis integration and security test generation. These are more involved; they require specific toolchain setup and produce results that need more careful interpretation. I use these in my paid audits.

---

## Finding the Critical Bug: Same Class, Different Level

Here's where the story comes full circle.

After developing the methodology, I ran it on my own project, a DeFi deposit/withdrawal system on BSC. Three contracts, about 600 lines of Solidity. Signature-based withdrawals, batch operations, CREATE2 deployments.

The prompts generated a lot of findings. Most were low severity or informational, things to clean up but not urgent. Some were medium, worth fixing but not catastrophic.

And then there was this one.

### Cross-Chain Signature Replay Attack

**Severity**: Critical

The withdrawal function required a signature from an authorized signer. User requests withdrawal, backend signs the permission, user submits signed transaction. Standard pattern.

Here's what the vulnerable code looked like:

```solidity
// How I had it
bytes32 hash = keccak256(abi.encodePacked(to, amount, nonce));
address signer = hash.recover(signature);
require(signer == authorizedSigner, "Invalid signature");
```

See the problem?

No `chainId`.

An attacker who obtained a valid signature on BSC could replay it on Ethereum, Polygon, Arbitrum, any chain where the contract was deployed. Same signature, different chain, funds drained.

This is the *exact same class of bug* as the webhook replay attack. Replay attacks. One level of abstraction higher; smart contracts instead of HTTP webhooks, but fundamentally the same pattern.

The fix:

```solidity
// Include chainId to prevent cross-chain replay
bytes32 hash = keccak256(abi.encodePacked(block.chainid, to, amount, nonce));
address signer = hash.recover(signature);
require(signer == authorizedSigner, "Invalid signature");
```

One line. Adding `block.chainid` to the signed message.

This bug could have drained every user's funds on secondary deployments. And I would have missed it, again, if I'd just been "more careful."

The AI-assisted methodology caught it because I had specifically prompted it to check: *"For every signature verification, is chainId included in the signed message?"*

---

## Full Results

Running the 7-prompt framework on my 600-line DeFi project, here's what I found:

| Severity | Count | Examples |
|----------|-------|----------|
| Critical | 1 | Cross-chain signature replay |
| High | 3 | Missing storage gaps (upgrade safety), no withdrawal limits, single-step ownership transfer |
| Medium | 4 | Batch operation DoS potential, unsafe token recovery, missing event emissions, unchecked external call returns |
| Low/Info | 10+ | Documentation gaps, redundant checks, gas optimizations, naming consistency |

**Total time spent**: About 6 hours across two days, generating findings, reviewing each one, filtering false positives, writing up the real issues.

**What this would have cost from a traditional auditor**: $15,000-$50,000 minimum for a similar scope, with a 4-8 week waitlist.

---

## Honest Limitations

I want to be clear about what this methodology can't do.

### What AI Gets Wrong

**False positives**: Probably 40% of the raw AI output was noise. "This function could have a reentrancy issue" when it demonstrably couldn't. Filtering requires human judgment and context.

**Novel attack vectors**: AI is pattern-matching against known vulnerability types. A genuinely new class of attack? It won't find it. That requires human creativity.

**Complex cross-contract logic**: AI can analyze individual contracts reasonably well. Complex interactions across multiple contracts with state dependencies? Much harder. This is where experienced human review matters most.

**Economic attacks**: Game theory, oracle manipulation, MEV, these require understanding incentives and market dynamics that AI doesn't grasp.

**Business context**: AI doesn't know your business logic. It can check if funds transfer correctly, but it can't know whether they *should* transfer in that situation.

### When You Need More

For simple contracts or pre-launch sanity checks, this methodology catches a lot. For complex protocols, significant TVL, or anything where a hack would be catastrophic, you want experienced human review on top.

I'm offering that too (see below), but I want to be honest: AI augments human review. It doesn't replace it.

---

## Try It Yourself

I've open-sourced the 5 prompts on GitHub. You can use them on your own contracts right now.

**Repository**: [github.com/iemarjay/ai-smart-contract-audit-framework](https://github.com/iemarjay)

The repo includes:
- All 5 prompts with usage instructions
- Sample output from a real audit (redacted)
- Methodology documentation
- Honest limitations guide
- Tips for getting the best results

Fair warning: using the prompts effectively still requires knowing how to interpret the output. AI produces findings; knowing which ones matter is the skill.

---

## What I'm Doing Now

I'm offering AI-augmented security audits professionally. If you want thorough review with human expertise on top of this methodology, I can help.

**Why hire me instead of just using the prompts?**

1. **Interpretation**: I know what the findings mean and which ones actually matter for your specific project
2. **Business logic**: I'll understand your protocol, not just your code
3. **The full framework**: Including the prompts I haven't open-sourced
4. **Accountability**: Someone who stands behind the work

**Pricing** (startup-friendly, not enterprise-gouging):
- Quick Scan (up to 500 lines): $500-$1,500
- Standard Audit (up to 2,000 lines): $2,000-$5,000
- Comprehensive (complex protocols): $5,000-$10,000

Details at [iemarjay.com/services/audits](/services/audits).

---

## The Lesson

"It looks fine" isn't good enough.

I learned that lesson at $10,000 with a webhook. I almost learned it again with smart contracts, but this time, I had a system.

Systematic beats careful. You can't "try harder" to catch bugs that live in your blind spots. You need methodology. You need coverage. You need to check what you'd otherwise miss.

That's what I built. And it works.

---

*Questions? Feedback on the methodology? Found a bug I missed? Hit me up on Twitter [@iemarjay](https://twitter.com/iemarjay), I'd genuinely love to hear from you.*

*Building something that needs a security review? [Let's talk](/services/audits).*

---

**About me**: I'm Emmanuel Joseph, full-stack Web3 developer, 8 years shipping production code, based in Lagos. I build DeFi systems and audit smart contracts. I learned security the expensive way, and now I help other builders avoid the same mistakes.
