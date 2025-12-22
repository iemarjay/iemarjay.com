import Link from "next/link";
import { Navigation } from "@/app/navigation";

export const metadata = {
  title: "Fintech Security Audit Case Study | Emmanuel Joseph",
  description: "How I identified 24 vulnerabilities, traced an active attack, and recovered $5,110 for a fintech platform through security audit and forensic analysis.",
  openGraph: {
    title: "Fintech Security Audit Case Study | Emmanuel Joseph",
    description: "How I identified 24 vulnerabilities, traced an active attack, and recovered $5,110 for a fintech platform through security audit and forensic analysis.",
    url: "https://iemarjay.com/about/case-study/fintech-security",
    siteName: "Emmanuel Joseph (iemarjay)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintech Security Audit Case Study | Emmanuel Joseph",
    description: "How I identified 24 vulnerabilities, traced an active attack, and recovered $5,110 for a fintech platform through security audit and forensic analysis.",
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
            Fintech Security Audit
          </h1>
          <p className="text-base sm:text-lg text-[#c4b0cf] max-w-2xl">
            Security audit and forensic incident response for a payments platform under active attack.
          </p>
          <p className="text-sm text-[#c4b0cf] mt-4">
            Industry: Fintech, Payments & Wallet Services
          </p>
        </div>

        {/* Results Overview */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Results at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-red-500 bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-400">24</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Vulnerabilities Found</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">$7.1k</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Fraud Quantified</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-green-500 bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">$5.1k</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Recoverable</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#E6BAFF] bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E6BAFF]">24h</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Attack Stopped</div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">The Challenge</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              A fintech platform processing payments was experiencing an active security breach. Attackers were exploiting payment webhook handling to create fraudulent credits.
            </p>
            <p>
              The scope of the damage was unknown, and the attack was ongoing. The platform needed immediate containment while maintaining zero downtime for legitimate users.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              Beyond stopping the attack, the client needed to understand exactly what happened, how much was lost, and whether recovery was possible.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">My Approach</h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Phase 1 */}
            <div className="p-4 sm:p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 1: Vulnerability Assessment
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Systematic Code Review</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    AI-augmented line-by-line code audit with manual expert analysis. Covered payment webhooks (3 providers), wallet operations, order processing, and admin functions.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Business Logic Analysis</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Deep dive into financial operations looking for race conditions, double-spend vectors, and authentication bypasses in state-changing operations.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Attack Vector Mapping</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Identified the exact vulnerability being exploited — a webhook fallback path that created payment records without proper validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-4 sm:p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 2: Forensic Database Analysis
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Transaction Timeline Reconstruction</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    With production database read access, reconstructed the complete attack timeline spanning 42 days.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Attack Quantification</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Identified 1,058 duplicate payments affecting 720 accounts. Calculated exact fraudulent amount: $7,149.24.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Attacker Identification</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Traced attack patterns to specific accounts. Top offender: 40 duplicate payments, $1,028 in fraudulent credits, $619 still in wallet.
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="p-3 rounded-lg bg-red-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-red-400">5</div>
              <div className="text-xs text-[#c4b0cf]">Critical</div>
            </div>
            <div className="p-3 rounded-lg bg-orange-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-orange-400">7</div>
              <div className="text-xs text-[#c4b0cf]">High</div>
            </div>
            <div className="p-3 rounded-lg bg-yellow-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-yellow-400">5</div>
              <div className="text-xs text-[#c4b0cf]">Medium</div>
            </div>
            <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20 text-center">
              <div className="text-xl font-bold text-blue-400">7</div>
              <div className="text-xs text-[#c4b0cf]">Low</div>
            </div>
          </div>

          {/* Critical vulnerabilities */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20">
              <h4 className="text-red-400 font-medium mb-2">Arbitrary Payment Creation via Webhook</h4>
              <p className="text-sm text-[#c4b0cf]">
                Fallback code path created payment records and credited wallets when no pre-existing payment was found. Attackers crafted webhooks with arbitrary amounts.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20">
              <h4 className="text-red-400 font-medium mb-2">Race Condition in Payment Verification</h4>
              <p className="text-sm text-[#c4b0cf]">
                Missing pessimistic locking allowed concurrent webhook calls to double-credit wallets. Impact: 2x-6x deposit multiplication.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-20">
              <h4 className="text-red-400 font-medium mb-2">Silent Signature Validation Failure</h4>
              <p className="text-sm text-[#c4b0cf]">
                Invalid webhook signatures returned silently instead of throwing exceptions, allowing unsigned requests through under certain conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Attack Analysis */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Attack Pattern Analysis</h2>
          <div className="p-4 sm:p-6 rounded-lg bg-white bg-opacity-5">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-[#c4b0cf] mb-1">Attack Window</p>
                <p className="text-white font-medium">42 days</p>
              </div>
              <div>
                <p className="text-xs text-[#c4b0cf] mb-1">Affected Accounts</p>
                <p className="text-white font-medium">720 (0.86% of users)</p>
              </div>
              <div>
                <p className="text-xs text-[#c4b0cf] mb-1">Duplicate Payments</p>
                <p className="text-white font-medium">1,058</p>
              </div>
              <div>
                <p className="text-xs text-[#c4b0cf] mb-1">Peak Day</p>
                <p className="text-white font-medium">46 duplicates</p>
              </div>
            </div>
            <p className="text-sm text-[#c4b0cf]">
              Attack escalated gradually from ~6/day to ~32/day, suggesting automated exploitation once the vulnerability was discovered.
            </p>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Deliverables</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Security Audit Report</h4>
              <p className="text-sm text-[#c4b0cf]">
                40+ pages covering all 24 findings with severity ratings, code-level fix recommendations, and prioritized remediation roadmap.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Forensic Analysis Report</h4>
              <p className="text-sm text-[#c4b0cf]">
                Complete attack timeline, affected account listing, top offender identification, and recovery recommendations.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">SQL Query Library</h4>
              <p className="text-sm text-[#c4b0cf]">
                Reusable queries for duplicate detection, balance discrepancy analysis, and ongoing attack monitoring.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Evidence Package</h4>
              <p className="text-sm text-[#c4b0cf]">
                Documentation prepared for potential legal action against identified attackers.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Outcome</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Attack vector closed within 24 hours of identification. All 5 critical vulnerabilities remediated within the first week.
            </p>
            <p>
              Database constraints added preventing negative balances. Pessimistic locking implemented across all financial operations. Webhook security hardened across all providers.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              $5,110 recovery path identified with evidence package prepared. The client now has ongoing monitoring capabilities to detect similar attacks early.
            </p>
          </div>
        </section>

        {/* Lessons */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Key Lessons</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Race conditions are the primary vulnerability class in fintech.</span> Every state-changing operation needs proper locking.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Defense in depth requires each layer to actively block, not just log.</span> Silent failures create attack vectors.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-[#E6BAFF]">
              <p className="text-sm text-[#c4b0cf]">
                <span className="text-white font-medium">Forensic capability is valuable for quantifying and recovering from attacks.</span> Knowing the damage enables informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-2">Need a Security Audit?</h2>
          <p className="text-[#c4b0cf] mb-6">
            Whether you&apos;re dealing with an active incident or want to proactively secure your platform, I can help identify vulnerabilities before attackers do.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:emarjay921@gmail.com"
              className="inline-block bg-white text-[#180622] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get in touch
            </a>
            <Link
              href="/services/security"
              className="inline-block border border-white border-opacity-30 text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Security Services
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
