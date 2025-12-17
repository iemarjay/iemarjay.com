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
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Image
            src={Emar}
            height={120}
            width={120}
            className={"object-contain object-left mx-auto md:mx-0 rounded-full"}
            alt={"Emmanuel Joseph"}
          />
          <h1
            className="font-gilroy sm:text-5xl text-4xl tracking-tight mt-5 mb-3 text-[#180622] font-bold text-center md:text-left">
            Emmanuel Joseph
          </h1>
          <div className="text-md text-center md:text-left">
            <h2 className="mb-4 font-gilroy text-lg font-medium tracking-tight text-[#4b1d64]">
              Full-stack Engineer (web2 and web3), serial builder, Ex Wikipedia
            </h2>
            <p className="max-w-sm mx-auto md:mx-0 mb-4 text-[#1b002a] leading-normal">
              8 years building production systems, from DeFi protocols handling user funds to enterprise platforms serving thousands. I work across the full stack: <span className="text-[#9106dd]">React, Node, Solidity, Go</span>. Currently building Shuttershow, a tool for photographers.
            </p>
            <p className="max-w-md mx-auto md:mx-0 mb-6 text-[#1b002a] leading-normal">
              If you&apos;ve searched on Wikipedia recently, you&apos;ve probably used features I worked on. <span className="text-[#9106dd]">I helped Fitted.ng secure a $50k grant</span> by rebuilding their technical foundation. I take security seriously, a bug I missed once cost a client $10k, and that failure changed how I build.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
              <a
                className="w-fit bg-[#180622] py-3 sm:py-4 px-8 rounded-[48px] flex justify-center items-center gap-2 backdrop-blur-2xl"
                href="mailto:emarjay921@gmail.com"
              >
                <GmailIcon/>
                <span className="text-white text-base font-medium">Get in touch</span>
              </a>
              <Link
                className="w-fit text-[#4b1d64] py-3 sm:py-4 px-6 font-medium hover:text-[#9106dd] transition-colors"
                href="/about"
              >
                See my work &rarr;
              </Link>
            </div>
          </div>
          {/* Worked with */}
          <div className="mt-10 mb-8">
            <p className="text-xs text-[#4b1d64] text-opacity-60 mb-3 text-center md:text-left uppercase tracking-wider">Worked with</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[#4b1d64] text-opacity-70">
              <span className="font-medium">Wikimedia Foundation</span>
              <span className="text-opacity-30">•</span>
              <span className="font-medium">Fitted.ng</span>
              <span className="text-opacity-30">•</span>
              <span className="font-medium">PouchFi</span>
              <span className="text-opacity-30">•</span>
              <span className="font-medium">Coronation Group</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 mb-6 md:mb-12 mt-8">
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

      {posts.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 md:px-24 md:pt-6">
          <h2 className="font-gilroy text-xl font-bold text-[#180622] mb-6">Latest Posts</h2>
          <div className="">
            {posts.map(post => (
              <div className="md:max-w-xl mb-8" key={post.id}>
                <div className="mb-2 lg:mb-4">
                  <h3 className="font-gilroy text-2xl font-bold text-[#180622] mb-1">
                    <Link scroll={true} href={`/post/${post.slug}`}>{post.title}</Link>
                  </h3>
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
      )}
    </div>
  </>
}
