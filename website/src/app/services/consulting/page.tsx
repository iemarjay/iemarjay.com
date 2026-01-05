import Link from "next/link";
import {Navigation} from "@/app/navigation";

export const metadata = {
  title: "Technical Consulting | Emmanuel Joseph",
  description: "Architecture reviews, code audits, and strategic guidance for web2 and web3 projects.",
  openGraph: {
    title: "Technical Consulting | Emmanuel Joseph",
    description: "Architecture reviews, code audits, and strategic guidance for web2 and web3 projects.",
    url: "https://iemarjay.com/services/consulting",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "/media/og-consulting.png",
        width: 1200,
        height: 630,
        alt: "Technical Consulting - Emmanuel Joseph",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Consulting | Emmanuel Joseph",
    description: "Architecture reviews, code audits, and strategic guidance for web2 and web3 projects.",
    images: ["/media/og-consulting.png"],
  },
};

export default function ConsultingPage() {
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
            Technical Consulting
          </h1>
          <p className="text-lg text-[#c4b0cf] max-w-2xl">
            Architecture reviews, code audits, and strategic guidance. 8 years of experience across web2 and web3, available by the hour or as ongoing support.
          </p>
        </div>

        {/* What I Help With */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">What I Help With</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Architecture Review</h4>
              <p className="text-sm text-[#c4b0cf]">
                Evaluate your system design, identify bottlenecks, and recommend improvements before they become expensive problems.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Code Review</h4>
              <p className="text-sm text-[#c4b0cf]">
                Deep dive into your codebase. Security issues, performance problems, maintainability concerns, I&apos;ll find them.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Technical Strategy</h4>
              <p className="text-sm text-[#c4b0cf]">
                Choosing tech stacks, planning migrations, scaling decisions. Get a second opinion before committing.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Web3 Guidance</h4>
              <p className="text-sm text-[#c4b0cf]">
                Smart contract architecture, DeFi integrations, token economics. Navigate web3 without expensive mistakes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Team Mentorship</h4>
              <p className="text-sm text-[#c4b0cf]">
                Level up your engineering team. Code review practices, architecture patterns, security awareness.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Debugging Sessions</h4>
              <p className="text-sm text-[#c4b0cf]">
                Stuck on a gnarly bug? Sometimes a fresh pair of experienced eyes is all you need.
              </p>
            </div>
          </div>
        </section>

        {/* Packaged Sessions */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Packaged Sessions</h2>
          <div className="grid gap-6">
            {/* Single Session */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Single Session</h3>
                <span className="text-[#E6BAFF] font-bold">$150/hour</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Quick questions, debugging help, second opinions
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• 1 hour video call</li>
                <li>• Screen sharing for code review</li>
                <li>• Follow-up notes with action items</li>
                <li>• Book as needed</li>
              </ul>
            </div>

            {/* Architecture Deep Dive */}
            <div className="p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Architecture Deep Dive</h3>
                <span className="text-[#E6BAFF] font-bold">$500</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Pre-build planning, major refactors, scaling preparation
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• 2 hours of async codebase review</li>
                <li>• 1 hour strategy call</li>
                <li>• Written architecture recommendations</li>
                <li>• Diagrams where helpful</li>
                <li>• 1 week of follow-up questions via email</li>
              </ul>
            </div>

            {/* Code Audit Session */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Code Audit Session</h3>
                <span className="text-[#E6BAFF] font-bold">$400</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Pre-launch review, identifying tech debt, security check (non-smart-contract)
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• Up to 5,000 lines of code reviewed</li>
                <li>• Written report with findings</li>
                <li>• 30-minute walkthrough call</li>
                <li>• Priority issues highlighted</li>
              </ul>
            </div>

            {/* Monthly Retainer */}
            <div className="p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-gilroy text-xl font-bold text-white">Monthly Retainer</h3>
                <span className="text-[#E6BAFF] font-bold">$1,000–$2,500/mo</span>
              </div>
              <p className="text-sm text-[#c4b0cf] mb-4">
                Best for: Ongoing advisory, teams without a senior engineer, startups scaling up
              </p>
              <ul className="text-sm text-[#c4b0cf] space-y-2">
                <li>• 5–15 hours per month (depending on tier)</li>
                <li>• Priority async access (Slack/Discord)</li>
                <li>• Weekly or bi-weekly check-ins</li>
                <li>• Code reviews on demand</li>
                <li>• Architecture guidance as you build</li>
              </ul>
            </div>
          </div>
        </section>

        {/* My Background */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Why Work With Me</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              I&apos;ve been building production systems for 8 years. Not tutorials, not side projects, real systems handling real money and real users.
            </p>
            <ul className="space-y-2">
              <li>• <strong className="text-white">DeFi protocols</strong>: deposit flows, signature-based withdrawals, batch operations</li>
              <li>• <strong className="text-white">Enterprise platforms</strong>: serving thousands of users, handling millions in transactions</li>
              <li>• <strong className="text-white">Wikimedia Foundation</strong>: search infrastructure used by millions</li>
              <li>• <strong className="text-white">Fintech integrations</strong>: payment webhooks, KYC flows, settlement systems</li>
              <li>• <strong className="text-white">Security audits</strong>: 160+ vulnerabilities found across backend and smart contract systems (Solidity + Solana)</li>
            </ul>
            <p>
              I&apos;ve made expensive mistakes and learned from them. A bug I missed once cost a client $10,000. I later returned to audit that same system, found the exact vulnerability plus 23 more, and performed forensic analysis quantifying the damage. That experience is what you&apos;re buying, not just my time, but the shortcuts to avoid the pitfalls I&apos;ve already hit.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">How It Works</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Reach out", desc: "Email or DM me with what you're working on and what you need help with" },
              { step: "2", title: "Quick call", desc: "15 minutes to understand your situation and recommend the right engagement" },
              { step: "3", title: "Book & pay", desc: "Simple invoice, pay upfront. Crypto or bank transfer." },
              { step: "4", title: "Get help", desc: "Session scheduled within a few days (often sooner)" },
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

        {/* CTA */}
        <section className="p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-2">Let&apos;s Talk</h2>
          <p className="text-[#c4b0cf] mb-6">
            Not sure which option fits? Reach out and describe what you&apos;re working on. I&apos;ll recommend the right approach, or tell you honestly if I&apos;m not the right fit.
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
        </section>
      </div>
    </div>
  );
}
