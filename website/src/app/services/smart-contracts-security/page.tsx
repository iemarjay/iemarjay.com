import Link from "next/link";
import {Navigation} from "@/app/navigation";

export const metadata = {
  title: "Smart Contract Security Audits | Emmanuel Joseph",
  description: "AI-augmented security reviews for DeFi protocols and smart contracts. Thorough analysis at startup-friendly prices.",
  openGraph: {
    title: "Smart Contract Security Audits | Emmanuel Joseph",
    description: "AI-augmented security reviews for DeFi protocols and smart contracts. Thorough analysis at startup-friendly prices.",
    url: "https://iemarjay.com/services/smart-contracts-security",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "/media/og-smart-contract-audit.png",
        width: 1200,
        height: 630,
        alt: "Smart Contract Security Audits - Emmanuel Joseph",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Contract Security Audits | Emmanuel Joseph",
    description: "AI-augmented security reviews for DeFi protocols and smart contracts. Thorough analysis at startup-friendly prices.",
    images: ["/media/og-smart-contract-audit.png"],
  },
};

export default function SmartContractsSecurityPage() {
  return (
    <div className="min-h-screen bg-[#180622]">
      <Navigation variant="dark" />

      <div className="max-w-4xl mx-auto px-6 md:px-24 pt-24 pb-16 md:pt-32 md:pb-20">
        {/* Hero */}
        <div className="mb-16">
          <Link href="/services" className="text-[#E6BAFF] text-sm hover:underline mb-4 inline-block">
            &larr; All Services
          </Link>
          <h1 className="font-gilroy text-4xl sm:text-5xl font-bold text-[#E6BAFF] mb-4">
            Smart Contract Security Audits
          </h1>
          <p className="text-lg text-[#c4b0cf] max-w-2xl">
            I&apos;m a full-stack Web3 developer who takes security seriously. I offer professional security reviews for DeFi protocols and smart contracts, at prices that won&apos;t drain your runway.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">The Problem</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Traditional smart contract audits cost $50,000–$500,000 and take weeks to schedule. Most early-stage projects either:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Skip security entirely (and risk getting hacked)</li>
              <li>Do a cursory self-review (and miss critical bugs)</li>
              <li>Wait until they can afford a big firm (and launch insecure)</li>
            </ul>
            <p className="text-[#E6BAFF] font-medium">
              You shouldn&apos;t have to choose between security and shipping.
            </p>
          </div>
        </section>

        {/* Why I Do This */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Why I Do This</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              I got serious about security after a bug I missed cost a client nearly $10,000.
            </p>
            <p>
              It was a webhook replay attack. Attackers discovered they could replay payment notifications multiple times before my system could check for duplicates. A single real deposit credited the wallet 2, 3, sometimes 6 times.
            </p>
            <p>
              <strong className="text-white">The redemption:</strong> I later returned to audit that same system. Found the exact vulnerability that was exploited, plus 23 more. Then performed forensic analysis on the production database — quantified $7,149 in fraudulent deposits over 42 days, identified the attackers, and located $5,110 still recoverable.
            </p>
            <p>
              When I audited my own smart contracts, I found a critical vulnerability: signatures that could be replayed across chains. The <em>exact same class of bug</em> — replay attacks — at the smart contract level. This cross-layer pattern recognition is why I audit both web2 backends and web3 contracts.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              149+ vulnerabilities found across backend and smart contract systems. I help builders avoid learning these lessons the expensive way.
            </p>
          </div>
        </section>

        {/* Track Record */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Track Record</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Recent DeFi protocol audit results:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-white bg-opacity-5 text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-[#c4b0cf]">Issues Found</div>
              </div>
              <div className="p-4 rounded-lg bg-red-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-red-400">1</div>
                <div className="text-sm text-[#c4b0cf]">Critical</div>
              </div>
              <div className="p-4 rounded-lg bg-orange-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-orange-400">3</div>
                <div className="text-sm text-[#c4b0cf]">High</div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-yellow-400">6+</div>
                <div className="text-sm text-[#c4b0cf]">Medium/Low</div>
              </div>
            </div>
            <p className="text-sm text-[#c4b0cf] mt-4">
              Audit scope: DeFi deposit/withdrawal system with upgradeable contracts. Critical finding: cross-chain signature replay attack.
            </p>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">My Approach</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              I combine systematic AI-assisted analysis with hands-on expert review to deliver thorough audits at startup-friendly prices.
            </p>
            <p>
              <strong className="text-white">The simple version:</strong> I use Claude AI to systematically analyze every line of your code against known vulnerability patterns, reentrancy, access control issues, signature flaws, and more. AI doesn&apos;t get tired on line 400. It doesn&apos;t skip the &quot;boring&quot; parts. It checks everything.
            </p>
            <p>
              But AI alone isn&apos;t enough. It generates findings, some real, some noise. My job is to review every finding, filter out false positives, analyze your specific business logic, and catch the contextual issues that tools miss.
            </p>
            <p className="text-[#E6BAFF]">
              Think of it this way: AI handles breadth (checking everything systematically). I handle depth (understanding what matters for <em>your</em> project).
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Builder&apos;s Perspective</h4>
              <p className="text-sm text-[#c4b0cf]">
                I&apos;ve architected production DeFi systems, deposit flows, signature-based withdrawals, batch operations. I know where bugs hide.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Systematic Methodology</h4>
              <p className="text-sm text-[#c4b0cf]">
                7-dimension security framework covering access control, reentrancy, signatures, upgrades, business logic, and more.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Proven Results</h4>
              <p className="text-sm text-[#c4b0cf]">
                Found 1 critical, 3 high, and 4 medium-severity bugs in my own project, before launch, not after a hack.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Transparent Process</h4>
              <p className="text-sm text-[#c4b0cf]">
                I use AI (Claude) as part of my process. I&apos;ll never pretend otherwise. You deserve to know exactly how your audit is conducted.
              </p>
            </div>
          </div>
        </section>

        {/* What I Review */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">What I Review</h2>
          <p className="text-[#c4b0cf] mb-6">Every audit covers these security dimensions:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white border-opacity-10">
                  <th className="text-left py-3 text-white font-medium">Dimension</th>
                  <th className="text-left py-3 text-white font-medium">What I Check</th>
                </tr>
              </thead>
              <tbody className="text-[#c4b0cf]">
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Access Control</td>
                  <td className="py-3">Who can call what, role assignments, privilege escalation</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Reentrancy</td>
                  <td className="py-3">State changes, external calls, cross-function vulnerabilities</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Signature Verification</td>
                  <td className="py-3">Replay attacks, malleability, domain separation</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Upgrade Safety</td>
                  <td className="py-3">Storage gaps, initializer protection, proxy patterns</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Token Handling</td>
                  <td className="py-3">Fee-on-transfer, rebasing tokens, approval patterns</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Business Logic</td>
                  <td className="py-3">Fund flows match intent, edge cases, economic assumptions</td>
                </tr>
                <tr>
                  <td className="py-3">External Dependencies</td>
                  <td className="py-3">OpenZeppelin usage, supply chain, version pinning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Service Tiers</h2>
          <div className="grid gap-6">
            {/* Quick Scan */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Quick Scan</h3>
                <span className="text-[#E6BAFF] font-bold">$500–$1,500</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Pre-launch sanity checks, hackathon projects, simple contracts
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Up to 500 lines of Solidity</li>
                <li>• 24–48 hour turnaround</li>
                <li>• Findings summary with severity ratings</li>
                <li>• Critical/high issues highlighted with fix recommendations</li>
              </ul>
            </div>

            {/* Standard Audit */}
            <div className="p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Standard Audit</h3>
                <span className="text-[#E6BAFF] font-bold">$2,000–$5,000</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Typical DeFi projects, token launches, projects preparing for mainnet
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Up to 2,000 lines of Solidity</li>
                <li>• 3–5 business days</li>
                <li>• Complete security report covering all 7 dimensions</li>
                <li>• Executive summary (shareholder-friendly, non-technical)</li>
                <li>• Detailed findings with code-level fix recommendations</li>
                <li>• Access control matrix documentation</li>
              </ul>
            </div>

            {/* Comprehensive */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Comprehensive</h3>
                <span className="text-[#E6BAFF] font-bold">$5,000–$10,000</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Complex protocols, significant TVL, projects needing ongoing support
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Complex multi-contract systems</li>
                <li>• 1–2 weeks</li>
                <li>• Everything in Standard, plus:</li>
                <li>• Fix verification (re-review after you implement fixes)</li>
                <li>• 30-minute walkthrough call</li>
                <li>• 30 days of follow-up support for questions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample Finding */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Sample Finding</h2>
          <p className="text-[#c4b0cf] mb-6">
            Here&apos;s a real critical vulnerability I found when auditing a DeFi deposit/withdrawal system:
          </p>
          <div className="p-6 rounded-lg bg-white bg-opacity-5 border-l-4 border-red-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 rounded bg-red-500 bg-opacity-20 text-red-400 text-xs font-medium">Critical</span>
              <span className="text-white font-medium">Cross-Chain Signature Replay Attack</span>
            </div>
            <p className="text-sm text-[#c4b0cf] mb-4">
              The withdrawal signature did not include <code className="bg-white bg-opacity-10 px-1 rounded">chainId</code> in the signed message. An attacker who obtained a valid signature on BSC could replay it on any other EVM chain where the contract was deployed, potentially draining funds.
            </p>
            <div className="text-sm mb-4">
              <p className="text-red-400 mb-2">Vulnerable:</p>
              <pre className="bg-black bg-opacity-30 p-3 rounded overflow-x-auto text-[#c4b0cf]">
{`bytes32 hash = keccak256(abi.encodePacked(to, amount, nonce));`}
              </pre>
            </div>
            <div className="text-sm">
              <p className="text-green-400 mb-2">Fixed:</p>
              <pre className="bg-black bg-opacity-30 p-3 rounded overflow-x-auto text-[#c4b0cf]">
{`bytes32 hash = keccak256(abi.encodePacked(block.chainid, to, amount, nonce));`}
              </pre>
            </div>
            <p className="text-sm text-red-400 mt-4">
              Impact: Complete fund drainage on secondary deployments.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Initial call", desc: "15–30 min to understand your project, scope the audit, answer questions" },
              { step: "2", title: "Proposal", desc: "Clear scope, timeline, pricing, no surprises" },
              { step: "3", title: "Payment", desc: "50% upfront to begin, 50% on delivery" },
              { step: "4", title: "Audit", desc: "Systematic review using my 7-dimension framework" },
              { step: "5", title: "Report", desc: "Complete deliverables within agreed timeline" },
              { step: "6", title: "Questions", desc: "Available to discuss findings and clarify fixes" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6BAFF] bg-opacity-20 flex items-center justify-center text-[#E6BAFF] font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-sm text-[#c4b0cf]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "You use AI, why should I pay for that?",
                a: "Fair question. You're paying for: (1) The methodology, systematic, targeted analysis that \"find bugs in this code\" doesn't achieve. (2) The interpretation, AI generates findings, many are noise. Knowing which ones matter is the human expertise. (3) The accountability, AI doesn't stand behind its work. I do."
              },
              {
                q: "Is AI-assisted auditing less thorough?",
                a: "No, it's more thorough. AI helps me systematically check every line without fatigue. I then apply human judgment to interpret results, check business logic, and identify issues that tools miss."
              },
              {
                q: "Do you guarantee my contracts are bug-free?",
                a: "No auditor can guarantee that. What I guarantee is a systematic, thorough review using proven methodology. Smart contract security is an ongoing practice, not a one-time checkbox."
              },
              {
                q: "What if you find a critical bug?",
                a: "I'll flag it immediately (before the final report) so you can start fixing it. For Comprehensive tier, I'll re-review your fixes."
              },
              {
                q: "Do you work with African/emerging market projects?",
                a: "Yes, I'm based in Lagos, Nigeria. I understand tighter budgets and the need for speed. We can discuss Naira pricing if easier."
              },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-white font-medium mb-2">{item.q}</h4>
                <p className="text-sm text-[#c4b0cf]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-2">Get Started</h2>
          <p className="text-[#c4b0cf] mb-6">
            Not sure if you need an audit? Let&apos;s talk. I&apos;m happy to look at your project and give you an honest assessment, even if the answer is &quot;you&apos;re fine for now.&quot;
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:emarjay921@gmail.com"
              className="inline-block bg-white text-[#180622] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://twitter.com/iemarjay"
              target="_blank"
              className="inline-block border border-white border-opacity-30 text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              DM on Twitter
            </a>
          </div>
          <p className="text-sm text-[#c4b0cf] mt-4">
            I usually respond within 24 hours.
          </p>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-[#c4b0cf] text-opacity-60 mt-12">
          This security review is provided &quot;as-is&quot; and does not guarantee the absence of vulnerabilities. This review uses AI-assisted analysis tools combined with manual expert review. The auditor assumes no liability for any financial losses resulting from the use of audited contracts.
        </p>
      </div>
    </div>
  );
}
