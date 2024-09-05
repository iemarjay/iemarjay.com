import Image from "next/image";
import {GmailIcon} from "@/app/about/GmailIcon";
import Icon from "@/components/icon";
import Emar from "@/../public/media/emar.png";
import {getBlogPostsForHome} from "@/app/actions";
import {formatDate} from "@/helpers";
import Link from "next/link";
import {Navigation} from "@/app/navigation";
import JsonLd from "@/app/components/JsonLd";

export default async function Page() {
  const posts = await getBlogPostsForHome();

  return <>
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Emmanuel Joseph (iemarjay)',
      url: 'https://www.iemarjay.com',
      logo: 'https://www.iemarjay.com/media/emar.png',
      sameAs: [
        'https://www.twitter.com/iemarjay',
        'https://www.linkedin.com/in/iemarjay',
      ],

    }} />
    <div className="">
      <Navigation/>

      <div className="max-w-4xl mx-auto px-6 md:px-24 md:pt-6" id="hero">
        <div className="pt-20 pb-10">
          <Image
            src={Emar}
            height={80}
            width={80}
            className={"object-contain object-left mx-auto md:mx-0"}
            alt={"Emmanuel Joseph"}
          />
          <h1
            className="font-gilroy sm:text-5xl text-4xl tracking-tight mt-5 mb-3 text-[#180622] font-bold text-center md:text-left">
            Emmanuel Joseph
          </h1>
          <div className="text-md text-center md:text-left">
            <h2 className="mb-4 font-gilroy text-lg font-medium tracking-tight text-[#4b1d64]">
              Full-stack Engineer, Blockchain Engineer
            </h2>
            <p className="max-w-sm mx-auto md:mx-0 mb-4 text-[#1b002a] leading-normal">
              With 8+ years of experience, I help pre-seed to Series A companies conquer their toughest code architecture, scaling, and performance challenges.  Expertise in <span className="text-[#9106dd]">ReactJS, VueJS, Solidity, NodeJS, and Golang</span>.
            </p>
            <p className="max-w-md mx-auto md:mx-0 mb-6 text-[#1b002a] leading-normal">
              If you&apos;ve used Wikipedia recently, there&apos;s a good chance you&apos;ve interacted with features I&apos;ve contributed to. I&apos;ve helped startups like Pouchfi and Fitted.ng significantly improve their tech debt, boosting investor confidence and accelerating their growth. <span className="text-[#9106dd]">I played a crucial role in securing a $50k grant for Fitted.ng.</span> Let&apos;s chat about how I can help your startup reach new heights!
            </p>

            <div className="">
              <a
                className="w-fit bg-[#180622] py-1.5 sm:py-3 px-6 rounded-[48px] flex justify-center items-center gap-2 backdrop-blur-2xl mx-auto md:mx-0"
                href="mailto:emarjay921@gmail.com"
              >
                <GmailIcon/>
                <span
                  className="text-white text-sm sm:text-base font-medium">Hire me</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-5 mb-6 md:mb-20 mt-8">
            <a
              href="https://linkedin.com/in/iemarjay"
              title={"LinkedIn"}
              target={"_blank"}
            >
              <Icon
                name={"linked-in"}
                className={
                  "text-[#4b1d64] text-opacity-80 hover:text-[#E6BAFF]"
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
                  "text-[#4b1d64] text-opacity-80 hover:text-[#E6BAFF]"
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
                  "text-[#4b1d64] text-opacity-80 hover:text-[#E6BAFF]"
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
                  "text-[#4b1d64] text-opacity-80 hover:text-[#E6BAFF]"
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
                  "text-[#4b1d64] text-opacity-80 hover:text-[#E6BAFF]"
                }
              />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-24 md:pt-6">
        <div className="">
          {posts.map(post => (
            <div className="md:max-w-xl mb-8" key={post.id}>
              <div className="mb-2 lg:mb-4">
                <h2 className="font-gilroy text-2xl font-bold text-[#180622] mb-1">
                  <Link scroll={true} href={`/post/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-gray-700">{formatDate(post.published_at)}</p>
              </div>
              <p className="text-[#1b002a] leading-normal mb-4 lg:mb-6">{post.excerpt}</p>
              <span className="text-[#4b1d64] underline decoration-2 underline-offset-2">
                <Link scroll={true} href={`/post/${post.slug}`}>Read More</Link>
            </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}
