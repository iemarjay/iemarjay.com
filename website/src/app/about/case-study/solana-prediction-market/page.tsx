import Link from "next/link";
import { Navigation } from "@/app/navigation";

export const metadata = {
  title: "Solana Prediction Market Audit Case Study | Emmanuel Joseph",
  description: "Pre-mainnet security audit of a Solana prediction market protocol. Found 17 issues including vault insolvency risk in 2,800 lines of Rust.",
  openGraph: {
    title: "Solana Prediction Market Audit Case Study | Emmanuel Joseph",
    description: "Pre-mainnet security audit of a Solana prediction market protocol. Found 17 issues including vault insolvency risk in 2,800 lines of Rust.",
    url: "https://iemarjay.com/about/case-study/solana-prediction-market",
    siteName: "Emmanuel Joseph (iemarjay)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Prediction Market Audit Case Study | Emmanuel Joseph",
    description: "Pre-mainnet security audit of a Solana prediction market protocol. Found 17 issues including vault insolvency risk in 2,800 lines of Rust.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#180622]">
      <div className="absolute top-0 left-0 w-full">
        <Navigation variant="dark" />
      </div>
      <div className="max-w-4xl mx-auto md:px-24 py-16 md:py-20">
        {/* Hero */}
        <div className="mb-10 md:mb-16">
          <Link href="/about" className="text-[#E6BAFF] text-sm hover:underline mb-4 inline-block">
            &larr; About
          </Link>
          <p className="text-sm text-[#c4b0cf] mb-2">Case Study</p>
          <h1 className="font-gilroy text-3xl sm:text-5xl font-bold text-[#E6BAFF] mb-4">
            Solana Prediction Market Audit
          </h1>
          <p className="text-base sm:text-lg text-[#c4b0cf] max-w-2xl">
            Pre-mainnet security audit for a prediction market protocol using LMSR automated market maker.
          </p>
          <p className="text-sm text-[#c4b0cf] mt-4">
            Industry: DeFi, Prediction Markets &bull; Chain: Solana (Anchor/Rust)
          </p>
        </div>

        {/* Results Overview */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Results at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">17</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Issues Found</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-orange-500 bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">2</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">High Severity</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#E6BAFF] bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E6BAFF]">2.8k</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Lines Reviewed</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-green-500 bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">0</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Critical Issues</div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">The Challenge</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              A Solana-based prediction market protocol was preparing for mainnet launch. The protocol implements binary (YES/NO) prediction markets using LMSR (Logarithmic Market Scoring Rule) — the same pricing mechanism used by major prediction markets.
            </p>
            <p>
              The codebase included a 703-line fixed-point math engine for LMSR calculations, complex state machine transitions, and a dispute resolution system with bond mechanics.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              They needed confidence that their protocol could handle real money before launch.
            </p>
          </div>
        </section>

        {/* Protocol Overview */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Protocol Architecture</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-xl font-bold text-white">2</div>
              <div className="text-xs text-[#c4b0cf]">Programs</div>
            </div>
            <div className="p-3 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-xl font-bold text-white">13</div>
              <div className="text-xs text-[#c4b0cf]">Instructions</div>
            </div>
            <div className="p-3 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-xl font-bold text-white">7</div>
              <div className="text-xs text-[#c4b0cf]">Account Types</div>
            </div>
            <div className="p-3 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-xl font-bold text-white">703</div>
              <div className="text-xs text-[#c4b0cf]">Math Engine Lines</div>
            </div>
          </div>
          <p className="text-sm text-[#c4b0cf]">
            Binary markets with USDC settlement, creator fees, dispute mechanism with bonds, and admin resolution for contested outcomes.
          </p>
        </section>

        {/* My Approach */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">My Approach</h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Phase 1 */}
            <div className="p-4 sm:p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 1: Architecture Review
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">State Machine Mapping</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Mapped all 5 market states (Open → TradingClosed → ProposedResolution → Disputed → Finalized) and verified transition guards.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Account Flow Analysis</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Traced PDA derivations across all 7 account types. Verified remaining accounts validation in dynamic market creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-4 sm:p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 2: LMSR Math Engine Audit
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Fixed-Point Precision Analysis</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Reviewed Q64.64 format implementation. Verified I256 usage for overflow protection in multiplication and division.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Economic Invariant Verification</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Tested LMSR properties: monotonicity, convexity, price bounds (0 &lt; p &lt; 1), price sum = 1, and 1 winning share = 1 USDC.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Edge Case Analysis</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Analyzed behavior at exponential clamping boundaries, extreme market imbalances, and minimum trade sizes.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-4 sm:p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 3: Solana-Specific Vulnerabilities
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Account Validation Checklist</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Systematic check for missing signer/owner checks, PDA substitution attacks, type cosplay, and reinitialization vulnerabilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">CPI Security Review</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Verified all SPL token transfers use correct authorities, proper signer seeds, and validated program IDs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Key Findings</h2>

          {/* Severity breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            <div className="p-3 rounded-lg bg-red-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-red-400">0</div>
              <div className="text-xs text-[#c4b0cf]">Critical</div>
            </div>
            <div className="p-3 rounded-lg bg-orange-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-orange-400">2</div>
              <div className="text-xs text-[#c4b0cf]">High</div>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-yellow-400">5</div>
              <div className="text-xs text-[#c4b0cf]">Medium</div>
            </div>
            <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-blue-400">4</div>
              <div className="text-xs text-[#c4b0cf]">Low</div>
            </div>
            <div className="p-3 rounded-lg bg-gray-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-gray-400">6</div>
              <div className="text-xs text-[#c4b0cf]">Info</div>
            </div>
          </div>

          {/* High severity vulnerabilities */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20">
              <h4 className="text-orange-400 font-medium mb-2">Vault Insolvency from Dispute Bonds</h4>
              <p className="text-sm text-[#c4b0cf] mb-3">
                Dispute bonds went into the same vault as trading funds. When combined with creator fee withdrawals, a successful dispute refund could deplete the vault below redemption obligations.
              </p>
              <div className="text-xs text-[#c4b0cf] bg-black bg-opacity-30 p-3 rounded font-mono">
                Market: 1000 USDC → Bond: +100 → Fees: -50 → Refund: -100 → Vault: 950 USDC<br/>
                Winners need: 1000 USDC → Shortfall: 50 USDC
              </div>
            </div>
            <div className="p-4 rounded-lg bg-orange-500 bg-opacity-10 border border-orange-500 border-opacity-20">
              <h4 className="text-orange-400 font-medium mb-2">Missing Vault Balance Check in Sells</h4>
              <p className="text-sm text-[#c4b0cf]">
                The sell instruction transferred USDC without explicit balance verification. While SPL token reverts on insufficient funds, this provided poor error messaging and could mask accounting bugs during testing.
              </p>
            </div>
          </div>

          {/* Medium severity */}
          <h4 className="text-white font-medium mt-6 mb-3">Medium Severity Issues</h4>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-20">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-yellow-400 font-medium">Time comparison inconsistency:</span> Mixed use of &gt;=, &gt;, &lt;= operators created 1-second edge case windows.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-20">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-yellow-400 font-medium">LMSR exp clamping:</span> Exponential clamping at ±10 underprices shares in extreme market imbalances (148x difference at exp(15) vs clamped).
              </p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-20">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-yellow-400 font-medium">No admin key rotation:</span> Admin set at initialization cannot be changed — no recovery from key compromise.
              </p>
            </div>
          </div>
        </section>

        {/* What They Did Right */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">What They Did Right</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              This wasn&apos;t a poorly built protocol. The team had strong security fundamentals:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20">
                <h4 className="text-green-400 font-medium mb-2">Comprehensive PDA Validation</h4>
                <p className="text-sm text-[#c4b0cf]">
                  Every remaining account manually validated with proper seed derivation. No shortcuts.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20">
                <h4 className="text-green-400 font-medium mb-2">Double-Spend Prevention</h4>
                <p className="text-sm text-[#c4b0cf]">
                  Atomic ordering: burn tokens → transfer USDC → zero position. Proper sequencing.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20">
                <h4 className="text-green-400 font-medium mb-2">Checked Arithmetic</h4>
                <p className="text-sm text-[#c4b0cf]">
                  checked_add(), checked_sub() everywhere. No silent overflows possible.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20">
                <h4 className="text-green-400 font-medium mb-2">Clean State Machine</h4>
                <p className="text-sm text-[#c4b0cf]">
                  Well-defined transitions with proper guards. Cannot skip states or go backwards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Deliverables</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Security Audit Report</h4>
              <p className="text-sm text-[#c4b0cf]">
                60+ pages covering all 17 findings with severity ratings, code references, and detailed fix recommendations.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">LMSR Math Analysis</h4>
              <p className="text-sm text-[#c4b0cf]">
                Precision analysis, overflow boundary documentation, edge case test vectors, and economic invariant verification.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">State Machine Diagram</h4>
              <p className="text-sm text-[#c4b0cf]">
                Complete transition mapping with guard conditions and access control matrix.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Prioritized Roadmap</h4>
              <p className="text-sm text-[#c4b0cf]">
                Must-fix before mainnet, should-fix, and consider-fixing items with clear rationale.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Outcome</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              All high-severity issues acknowledged for remediation before mainnet deployment. The vault solvency issue addressed through separate dispute bond escrow.
            </p>
            <p>
              The protocol demonstrated strong security fundamentals — issues found were edge cases and design decisions, not fundamental architectural flaws.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              That&apos;s exactly what pre-mainnet audits are for: catching the things that familiarity makes you miss.
            </p>
          </div>
        </section>

        {/* Lessons */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Key Lessons for Solana Builders</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Trace every fund flow combination.</span> When multiple withdrawal paths exist, verify solvency in all scenarios.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Explicit checks beat implicit program behavior.</span> Don&apos;t rely on SPL token reverts for balance validation.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Pick conventions and stick to them.</span> Inconsistent time comparisons create subtle edge cases.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Plan for admin key compromise from day one.</span> Build rotation mechanisms before you need them.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-2">Preparing for Mainnet?</h2>
          <p className="text-[#c4b0cf] mb-6">
            I audit Solidity and Solana smart contracts. Fresh eyes catch what familiarity misses — get your protocol reviewed before launch, not after a hack.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:emarjay921@gmail.com"
              className="inline-block bg-white text-[#180622] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get in touch
            </a>
            <Link
              href="/services/smart-contracts-security"
              className="inline-block border border-white border-opacity-30 text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Smart Contract Services
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-[#c4b0cf] text-center mt-12 opacity-60">
          Client details anonymized. Engagement conducted under NDA. Case study shared with client approval.
        </p>
      </div>
    </div>
  );
}
