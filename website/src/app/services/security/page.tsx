import Link from "next/link";
import {Navigation} from "@/app/navigation";

export const metadata = {
  title: "Backend Security Audits | Emmanuel Joseph",
  description: "Comprehensive security assessments for fintech backends, APIs, and web applications. Find vulnerabilities before attackers do.",
  openGraph: {
    title: "Backend Security Audits | Emmanuel Joseph",
    description: "Comprehensive security assessments for fintech backends, APIs, and web applications. Find vulnerabilities before attackers do.",
    url: "https://iemarjay.com/services/security",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "https://iemarjay.com/media/og-security-audit.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backend Security Audits | Emmanuel Joseph",
    description: "Comprehensive security assessments for fintech backends, APIs, and web applications. Find vulnerabilities before attackers do.",
    images: ["https://iemarjay.com/media/og-security-audit.png"],
  },
};

export default function SecurityPage() {
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
            Backend Security Audits
          </h1>
          <p className="text-lg text-[#c4b0cf] max-w-2xl">
            Comprehensive security assessments for fintech systems, APIs, and web applications. I find the vulnerabilities attackers exploit, before they do.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">The Problem</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Most security breaches exploit known vulnerability patterns: authentication flaws, payment integration bugs, API misconfigurations. The fixes are often straightforward, but finding them requires systematic analysis.
            </p>
            <p>
              Companies typically discover these issues after an incident: unauthorized transactions, data breaches, or worse. By then, you&apos;re dealing with financial losses, regulatory scrutiny, and customer trust damage.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              A thorough security review before an incident costs a fraction of dealing with one after.
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
              It was a webhook replay attack on a payment integration. Attackers discovered they could replay payment notifications multiple times before my system checked for duplicates. A single deposit credited the account 2, 3, sometimes 6 times. Classic race condition, and I didn&apos;t catch it until money was gone.
            </p>
            <p>
              That failure changed how I approach code. I stopped trusting &quot;it looks fine&quot; and built systematic processes to catch what human eyes miss. I now use AI-augmented analysis to review every endpoint, every integration, every authentication flow.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              I help teams find these issues before they become expensive lessons.
            </p>
          </div>
        </section>

        {/* Track Record */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Track Record</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Recent fintech backend audit results:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-white bg-opacity-5 text-center">
                <div className="text-3xl font-bold text-white">115</div>
                <div className="text-sm text-[#c4b0cf]">Issues Found</div>
              </div>
              <div className="p-4 rounded-lg bg-red-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-red-400">35</div>
                <div className="text-sm text-[#c4b0cf]">Critical</div>
              </div>
              <div className="p-4 rounded-lg bg-orange-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-orange-400">39</div>
                <div className="text-sm text-[#c4b0cf]">High</div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500 bg-opacity-10 text-center">
                <div className="text-3xl font-bold text-yellow-400">41</div>
                <div className="text-sm text-[#c4b0cf]">Medium/Low</div>
              </div>
            </div>
            <p className="text-sm text-[#c4b0cf] mt-4">
              Client details under NDA. Methodology and vulnerability classes available for discussion.
            </p>
          </div>
        </section>

        {/* What I Review */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">What I Review</h2>
          <p className="text-[#c4b0cf] mb-6">Every audit is tailored to your stack and risk profile. Common focus areas:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white border-opacity-10">
                  <th className="text-left py-3 text-white font-medium">Area</th>
                  <th className="text-left py-3 text-white font-medium">What I Check</th>
                </tr>
              </thead>
              <tbody className="text-[#c4b0cf]">
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Authentication</td>
                  <td className="py-3">Session management, token handling, password policies, MFA implementation</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Authorization</td>
                  <td className="py-3">Role-based access, privilege escalation, IDOR vulnerabilities</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Payment Integrations</td>
                  <td className="py-3">Webhook security, callback validation, replay protection, race conditions</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">API Security</td>
                  <td className="py-3">OWASP Top 10, input validation, rate limiting, error handling</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Data Protection</td>
                  <td className="py-3">Encryption at rest/transit, PII handling, secrets management</td>
                </tr>
                <tr className="border-b border-white border-opacity-5">
                  <td className="py-3">Financial Logic</td>
                  <td className="py-3">Balance manipulation, double-spend, transaction integrity</td>
                </tr>
                <tr>
                  <td className="py-3">Infrastructure</td>
                  <td className="py-3">Database security, logging gaps, dependency vulnerabilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">My Approach</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              I combine AI-assisted systematic analysis with manual expert review. This isn&apos;t just running automated scanners; it&apos;s a structured methodology.
            </p>
            <p>
              <strong className="text-white">How it works:</strong> I use Claude AI with custom prompts tailored to your specific stack, domain, and risk areas. AI handles breadth, systematically checking every file, endpoint, and integration. I handle depth, understanding your business logic, filtering false positives, and catching contextual issues tools miss.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Fintech Experience</h4>
              <p className="text-sm text-[#c4b0cf]">
                8 years building payment systems, wallets, and financial applications. I know where bugs hide in fintech code.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Custom Analysis</h4>
              <p className="text-sm text-[#c4b0cf]">
                Prompts written per project based on your tech stack, integrations, and specific risk areas. Not generic templates.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Multiple Passes</h4>
              <p className="text-sm text-[#c4b0cf]">
                SAST tools, dependency scanning, manual review, and business logic analysis. Each layer catches what others miss.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Actionable Output</h4>
              <p className="text-sm text-[#c4b0cf]">
                Prioritized findings with severity ratings, business impact, and code-level fix recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Findings */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Sample Findings</h2>
          <p className="text-[#c4b0cf] mb-6">
            Real vulnerability classes found in fintech audits:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-red-500 bg-opacity-20 text-red-400 text-xs font-medium">Critical</span>
                <span className="text-white font-medium">Webhook Replay Attack</span>
              </div>
              <p className="text-sm text-[#c4b0cf]">
                Payment webhooks accepted without idempotency checks. Attackers could replay successful payment notifications to credit accounts multiple times from a single deposit.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-red-500 bg-opacity-20 text-red-400 text-xs font-medium">Critical</span>
                <span className="text-white font-medium">Race Condition in Withdrawals</span>
              </div>
              <p className="text-sm text-[#c4b0cf]">
                Concurrent withdrawal requests could bypass balance checks, allowing users to withdraw more than their available balance.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-orange-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-orange-500 bg-opacity-20 text-orange-400 text-xs font-medium">High</span>
                <span className="text-white font-medium">Admin Endpoint Without Authorization</span>
              </div>
              <p className="text-sm text-[#c4b0cf]">
                Administrative endpoints accessible to authenticated users without role verification. Any logged-in user could access admin functions.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white bg-opacity-5 border-l-4 border-orange-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-orange-500 bg-opacity-20 text-orange-400 text-xs font-medium">High</span>
                <span className="text-white font-medium">Predictable OTP Generation</span>
              </div>
              <p className="text-sm text-[#c4b0cf]">
                OTPs generated using predictable seeds based on timestamp. Attackers could calculate valid OTPs for any user.
              </p>
            </div>
          </div>
        </section>

        {/* Service Options */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Service Options</h2>
          <div className="grid gap-6">
            {/* Incident Response */}
            <div className="p-6 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Incident Response</h3>
                <span className="text-red-400 font-bold">Contact for pricing</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                For active security incidents. Available within 24 hours.
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Immediate containment assistance</li>
                <li>• Root cause identification</li>
                <li>• Attack timeline reconstruction</li>
                <li>• Emergency patching guidance</li>
              </ul>
            </div>

            {/* Security Assessment */}
            <div className="p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Security Assessment</h3>
                <span className="text-[#E6BAFF] font-bold">From $3,000</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Comprehensive security review for production systems.
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Full codebase security review</li>
                <li>• Payment integration audit</li>
                <li>• API security assessment</li>
                <li>• Prioritized vulnerability report</li>
                <li>• Fix recommendations with code examples</li>
                <li>• Executive summary for stakeholders</li>
              </ul>
            </div>

            {/* Focused Review */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Focused Review</h3>
                <span className="text-[#E6BAFF] font-bold">From $1,500</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Targeted review of specific areas: payment integrations, authentication, or API endpoints.
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Scoped to specific components</li>
                <li>• 3-5 day turnaround</li>
                <li>• Findings report with fix recommendations</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-[#c4b0cf] mt-6">
            Naira pricing available for Nigerian companies. Let&apos;s discuss what works for your budget.
          </p>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Discovery call", desc: "30 min to understand your system, risk areas, and concerns" },
              { step: "2", title: "Proposal", desc: "Clear scope, timeline, and pricing based on your specific needs" },
              { step: "3", title: "Access setup", desc: "Secure access to codebase and relevant documentation" },
              { step: "4", title: "Audit", desc: "Systematic review using AI-augmented analysis and manual review" },
              { step: "5", title: "Report", desc: "Prioritized findings with severity, impact, and fix recommendations" },
              { step: "6", title: "Walkthrough", desc: "Call to discuss findings and answer questions" },
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
                q: "What tech stacks do you work with?",
                a: "I have deep experience with Node.js/NestJS, Python, and Go backends. I can review most modern stacks; we'll discuss your specific setup on the discovery call."
              },
              {
                q: "How is this different from automated scanning?",
                a: "Automated scanners find known patterns. I find business logic flaws, race conditions, and integration vulnerabilities that tools miss. I use scanners as one input, not the whole process."
              },
              {
                q: "Do you do penetration testing?",
                a: "I focus on code-level security review rather than black-box pentesting. If you need network/infrastructure pentesting, I can recommend specialists."
              },
              {
                q: "What about ongoing security support?",
                a: "Yes, I offer retainer arrangements for ongoing code review and security guidance. Useful for teams shipping frequently."
              },
              {
                q: "We just got hacked. Can you help?",
                a: "Yes. I offer incident response services and can start within 24 hours. Reach out immediately; every hour matters."
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
            Whether you need a full security assessment or just want to discuss your concerns, I&apos;m happy to talk.
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
            I usually respond within 24 hours. For active incidents, mention &quot;urgent&quot; in your subject line.
          </p>
        </section>
      </div>
    </div>
  );
}
