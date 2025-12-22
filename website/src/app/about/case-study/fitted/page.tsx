import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/app/navigation";

export const metadata = {
  title: "Fitted.fashion Case Study | Emmanuel Joseph",
  description: "How I helped Fitted.fashion overcome technical debt, secure $50k funding, and rebuild their engineering foundation.",
  openGraph: {
    title: "Fitted.fashion Case Study | Emmanuel Joseph",
    description: "How I helped Fitted.fashion overcome technical debt, secure $50k funding, and rebuild their engineering foundation.",
    url: "https://iemarjay.com/about/case-study/fitted",
    siteName: "Emmanuel Joseph (iemarjay)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitted.fashion Case Study | Emmanuel Joseph",
    description: "How I helped Fitted.fashion overcome technical debt, secure $50k funding, and rebuild their engineering foundation.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#180622]">
      <div className="absolute top-0 left-0 w-full">
        <Navigation variant="dark" />
      </div>
      <div className="max-w-4xl mx-auto md:px-24 pt-16 pb-16 md:pt-20 md:pb-20">
        {/* Hero */}
        <div className="mb-10 md:mb-16">
          <Link href="/about" className="text-[#E6BAFF] text-sm hover:underline mb-4 inline-block">
            &larr; About
          </Link>
          <p className="text-sm text-[#c4b0cf] mb-2">Case Study</p>
          <h1 className="font-gilroy text-3xl sm:text-5xl font-bold text-[#E6BAFF] mb-4">
            Fitted.fashion
          </h1>
          <p className="text-base sm:text-lg text-[#c4b0cf] max-w-2xl">
            Platform powering custom and ready-to-wear apparel production for the fashion industry.
          </p>
          <p className="text-sm text-[#c4b0cf] mt-4">
            Industry: Technology, E-commerce, Fashion
          </p>
        </div>

        {/* Hero Image */}
        <section className="mb-12 md:mb-16">
          <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white bg-opacity-5">
            <Image
              src="/media/fitted-landing-page.png"
              fill
              className="object-contain object-center"
              alt="Fitted.fashion landing page"
            />
          </div>
        </section>

        {/* Results Overview */}
        <section className="mb-12 md:mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">Results at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-green-500 bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">$50k</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Funding Secured</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">40%</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Engagement Recovered</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white bg-opacity-5 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">2mo</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Runway Extended</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#E6BAFF] bg-opacity-10 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#E6BAFF]">New</div>
              <div className="text-xs sm:text-sm text-[#c4b0cf]">Team Built</div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">The Challenge</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              After months of missed deadlines and frustrated attempts to implement their visionary roadmap, Fitted&apos;s technical debt had spiraled out of control.
            </p>
            <p>
              Following a series of failed feature launches, user engagement plummeted by 40%, placing immense pressure on their dwindling runway of just 2 months.
            </p>
            <p>
              Forced to make a difficult decision, the founder reluctantly laid off their entire engineering team, leaving them with a non-scalable MVP and a mountain of uncertainty.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              With his ambitious dreams seemingly on the brink of collapse, the founder desperately sought a way to salvage the situation and breathe new life into his groundbreaking vision.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-6">My Role</h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Phase 1 */}
            <div className="p-4 sm:p-6 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 1: Identifying the Root Cause
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Code Audit & Infrastructure Analysis</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Conducted a comprehensive code audit and infrastructure analysis to identify the core issues contributing to Fitted&apos;s technical debt and scalability problems, documenting everything.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Collaboration</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Worked closely with the founder to understand his vision and prioritize critical features for immediate implementation, improving some of the ideas along the way.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Focus Areas</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Pinpointed specific areas like spaghetti code, inefficient database queries, and inadequate server architecture that were hindering performance and feature development.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-4 sm:p-6 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-30">
              <h3 className="font-gilroy text-lg sm:text-xl font-bold text-white mb-4">
                Phase 2: Implementing a Sustainable Solution
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Refactoring & Optimization</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Undertook a systematic code refactoring process, improving code quality, modularity, and maintainability.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Modernization & Scalability</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Implemented modern software development practices, including continuous integration/continuous delivery (CI/CD) and cloud-based infrastructure, ensuring scalability and agility.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Building a New Team</h4>
                  <p className="text-sm text-[#c4b0cf]">
                    Helped the founder hire and onboard a cost-effective skilled engineering team with the help of HR, fostering a collaborative and efficient work environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Results: From Collapse to Confidence</h2>
          <p className="text-[#c4b0cf] mb-6">The impact was nothing short of transformative:</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Vision Revived</h4>
              <p className="text-sm text-[#c4b0cf]">
                Investor confidence soared, fueled by concrete progress and brainstormed ideas. Additional funding of $50,000 secured Fitted&apos;s future.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Growth on Track</h4>
              <p className="text-sm text-[#c4b0cf]">
                Agile development cycles ensured rapid feature delivery, putting Fitted back on the path to achieve its visionary roadmap.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Efficiency & Cost Savings</h4>
              <p className="text-sm text-[#c4b0cf]">
                Cloud solutions and open-source technologies maximized resources, reducing server costs and improving Fitted&apos;s financial health.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <h4 className="text-white font-medium mb-2">Empowered & Agile</h4>
              <p className="text-sm text-[#c4b0cf]">
                The new team, equipped with best practices and a collaborative environment, thrives on challenges, ready to propel Fitted&apos;s future success.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-4">Conclusion</h2>
          <div className="text-[#c4b0cf] space-y-4">
            <p>
              Fitted.fashion&apos;s story is a testament to the power of strategic tech intervention.
            </p>
            <p className="text-[#E6BAFF] font-medium">
              With the right expertise and approach, even the most daunting challenges can become springboards for extraordinary growth.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 md:p-8 rounded-lg bg-[#E6BAFF] bg-opacity-10 border border-[#E6BAFF] border-opacity-20">
          <h2 className="font-gilroy text-2xl font-bold text-white mb-2">Facing Similar Challenges?</h2>
          <p className="text-[#c4b0cf] mb-6">
            Whether you&apos;re dealing with technical debt, scaling issues, or need to rebuild your engineering foundation, let&apos;s talk about how I can help.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:emarjay921@gmail.com"
              className="inline-block bg-white text-[#180622] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get in touch
            </a>
            <Link
              href="/services/consulting"
              className="inline-block border border-white border-opacity-30 text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
