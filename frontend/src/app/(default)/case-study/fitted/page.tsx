import Icon from "@/components/icon";
import Image from "next/image";

export default function Page() {
  return (<div className={"relative max-w-[1280px] mx-auto w-full"}>
    <div className="flex justify-center gap-5 mb-6 md:mb-20 mt-8">
      <a
        href="https://linkedin.com/in/iemarjay"
        title={"LinkedIn"}
        target={"_blank"}
      >
        <Icon
          name={"linked-in"}
          className={
            "text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
          }
        />
      </a>
      <a
        href="https://github.com/iemarjay"
        title={"Github"}
        target={"_blank"}
      >
        <Icon
          name={"github"}
          className={
            "text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
          }
        />
      </a>
      <a
        href="https://twitter.com/iemarjay"
        title={"Twitter"}
        target={"_blank"}
      >
        <Icon
          name={"twitter"}
          className={
            "text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
          }
        />
      </a>
      <a
        href="https://youtube.com/@iemarjay"
        title={"Youtube"}
        target={"_blank"}
      >
        <Icon
          name={"youtube"}
          className={
            "text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
          }
        />
      </a>
      <a
        href="https://instagram.com/iemarjay"
        title={"Instagram"}
        target={"_blank"}
      >
        <Icon
          name={"instagram"}
          className={
            "text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
          }
        />
      </a>
    </div>

    <div className="text-center max-w-xl mx-auto">
      <h1
        className="font-gilroy sm:text-5xl text-4xl font-medium text-[#E6BAFF] tracking-tight mt-5 mb-3">Fitted.fashion</h1>
      <p className="">Platform powering custom and ready to wear apparel production for the fashion industry</p>
    </div>

    <div className="relative min-h-[270px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] w-full mt-12 lg:my-20">
      <Image src={"/media/fitted-landing-page.png"} fill className={'object-contain object-top rounded-md'}
             alt={"Fitted.fashion landing page"}/>
    </div>

    <div className="max-w-4xl lg:mx-auto text-md leading-normal text-[#c4b0cf]">
      <p className="mb-6">Industry: Technology, E-commerce and Fashion</p>

      <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 mt-16 mb-8">
        Challenge
      </h1>
      <p className="mb-6">
        After months of missed deadlines and frustrated attempts to implement their visionary roadmap, Fitted&apos;s
        technical debt had spiraled out of control. Following a series of failed feature launches, user engagement
        plummeted by 40%, placing immense pressure on their dwindling runway of just 2 months. Forced to make a
        difficult decision, the founder reluctantly laid off their entire engineering team, leaving them with a
        non-scalable MVP and a mountain of uncertainty. With his ambitious dreams seemingly on the brink of collapse,
        the founder desperately sought a way to salvage the situation and breathe new life into his groundbreaking
        vision.
      </p>

      <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 mt-16 mb-8">
        Role
      </h1>
      <p className="mb-6">
        <ol className="list-decimal">
          <li className="mb-2">
            <span className="font-medium mb-4">Identifying the Root Cause:</span>
            <ul className="list-disc ml-4 mt-4">
              <li className="mb-2">
                <span className="font-medium">Code audit and Infrastructure analysis:{" "}</span>
                Conducted a
                comprehensive code audit and infrastructure analysis to identify the core issues contributing to
                Fitted&apos;s technical debt and scalability problems, documenting everything.
              </li>
              <li className="mb-2">
                <span className="font-medium">Collaboration:{" "}</span>
                Worked closely with the founder to understand his vision and prioritize critical features for immediate
                implementation and improving some of the idea.
              </li>
              <li className="mb-2">
                <span className="font-medium">Focus:{" "}</span>
                Pinpointed specific areas like spaghetti code, inefficient database queries, and inadequate server
                architecture that were hindering performance and feature development.
              </li>
            </ul>
          </li>

          <li>
            <span className="font-medium mb-4">Implementing a Sustainable Solution:</span>
            <ul className="list-disc ml-4 mt-4">
              <li className="mb-2">
                <span className="font-medium">Refactoring and Optimization: {" "}</span>
                Undertook a systematic code refactoring process, improving code quality, modularity, and
                maintainability.
              </li>
              <li className="mb-2">
                <span className="font-medium">Modernization and Scalability:{" "}</span>
                Implemented modern software development practices, including continuous integration/continuous delivery
                (CI/CD) and cloud-based infrastructure, ensuring scalability and agility.
              </li>
              <li className="mb-2">
                <span className="font-medium">Building a New Team: {" "}</span>
                Helped the founder hire and on-board a cos effective skilled engineering team with the help of the HR,
                fostering a collaborative and efficient work environment.
              </li>
            </ul>
          </li>
        </ol>
      </p>

      <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 mt-16 mb-8">
        Results: From Collapse to Confidence
      </h1>
      <p className="mb-6">
        The impact was nothing short of transformative:
      </p>
      <p className="mb-6">
        <ol className="list-decimal">
          <li className="mb-2">
            <span className="font-medium mb-4">Vision Revived:{" "}</span>
            Investor confidence soared, fueled by the concrete progress and some of the ideas I and the founder
            brainstormed. Additional funding of $50,000 secured Fitted&apos;s future.
          </li>
          <li className="mb-2">
            <span className="font-medium mb-4">Growth on Track:{" "}</span>
            Agile development cycles ensured rapid feature delivery, putting Fitted back on the path to achieve its
            visionary roadmap.
          </li>
          <li className="mb-2">
            <span className="font-medium mb-4">Efficiency & Cost Savings:{" "}</span>
            Cloud solutions and open-source technologies maximized resources, reducing server costs and maximizing
            Fitted&apos;s financial health.
          </li>
          <li className="mb-2">
            <span className="font-medium mb-4">Empowered & Agile:{" "}</span>
            The new team, equipped with best practices and a collaborative environment, thrives on challenges, ready to
            propel Fitted&apos;s future success.
          </li>
        </ol>
      </p>


      <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 mt-16 mb-8">
        Conclusion
      </h1>
      <p className="mb-6">
        Fitted.fashion&apos;s story is a testament to the power of strategic tech intervention. With the right expertise
        and approach, even the most daunting challenges can become springboards for extraordinary growth.
      </p>
    </div>
  </div>)
}
