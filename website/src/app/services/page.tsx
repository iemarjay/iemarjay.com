import Link from "next/link";
import {Navigation} from "@/app/navigation";

export const metadata = {
  title: "Services | Emmanuel Joseph",
  description: "Backend security audits, smart contract security, consulting, and full-stack development services.",
  openGraph: {
    title: "Services | Emmanuel Joseph",
    description: "Backend security audits, smart contract security, consulting, and full-stack development services.",
    url: "https://iemarjay.com/services",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "https://iemarjay.com/media/og-services.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Emmanuel Joseph",
    description: "Backend security audits, smart contract security, consulting, and full-stack development services.",
    images: ["https://iemarjay.com/media/og-services.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#180622]">
      <Navigation variant="dark" />

      <div className="max-w-4xl mx-auto px-6 md:px-24 pt-24 pb-16 md:pt-32 md:pb-20">
        <h1 className="font-gilroy text-4xl sm:text-5xl font-bold text-[#E6BAFF] mb-4">
          Services
        </h1>
        <p className="text-lg text-[#c4b0cf] mb-12 max-w-2xl">
          I help teams build secure, production-ready systems. Whether you need a security review, architecture guidance, or hands-on development.
        </p>

        <div className="grid gap-8">
          {/* Backend Security Audits */}
          <Link
            href="/services/security"
            className="block p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 hover:bg-opacity-15 transition-all border border-[#E6BAFF] border-opacity-30"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-gilroy text-2xl font-bold text-white mb-2">
                  Backend Security Audits
                </h2>
                <p className="text-[#c4b0cf] mb-4 max-w-xl">
                  Comprehensive security assessments for fintech systems, APIs, and payment integrations. 139+ issues found across audits. Incident response with forensic analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    From $1,500
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Fintech / APIs
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Incident Response + Forensics
                  </span>
                </div>
              </div>
              <span className="text-[#E6BAFF] text-2xl">&rarr;</span>
            </div>
          </Link>

          {/* Smart Contract Security Audits */}
          <Link
            href="/services/smart-contracts-security"
            className="block p-6 md:p-8 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-gilroy text-2xl font-bold text-white mb-2">
                  Smart Contract Security Audits
                </h2>
                <p className="text-[#c4b0cf] mb-4 max-w-xl">
                  AI-augmented security reviews for DeFi protocols and smart contracts. Thorough analysis at startup-friendly prices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    From $500
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    24h - 2 weeks
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Solidity / EVM
                  </span>
                </div>
              </div>
              <span className="text-[#E6BAFF] text-2xl">&rarr;</span>
            </div>
          </Link>

          {/* Consulting */}
          <Link
            href="/services/consulting"
            className="block p-6 md:p-8 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all border border-white border-opacity-10"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-gilroy text-2xl font-bold text-white mb-2">
                  Technical Consulting
                </h2>
                <p className="text-[#c4b0cf] mb-4 max-w-xl">
                  Architecture reviews, code audits, and strategic guidance. Book a session or retain me for ongoing support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    From $150/hour
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Web2 + Web3
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Remote
                  </span>
                </div>
              </div>
              <span className="text-[#E6BAFF] text-2xl">&rarr;</span>
            </div>
          </Link>

          {/* Development */}
          <div className="p-6 md:p-8 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-gilroy text-2xl font-bold text-white mb-2">
                  Full-Stack Development
                </h2>
                <p className="text-[#c4b0cf] mb-4 max-w-xl">
                  End-to-end development for web2 and web3 projects. From smart contracts to frontend to infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    React / Next.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Node / Go
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-400/10 text-xs font-medium text-teal-300">
                    Solidity
                  </span>
                </div>
                <p className="text-sm text-[#E6BAFF] mt-4">
                  Contact for project-based pricing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h3 className="font-gilroy text-xl font-bold text-white mb-2">
            Not sure what you need?
          </h3>
          <p className="text-[#c4b0cf] mb-4">
            Let&apos;s talk. I&apos;m happy to understand your project and recommend the right approach.
          </p>
          <a
            href="mailto:emarjay921@gmail.com"
            className="inline-block bg-white text-[#180622] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
