import {ProductVideo} from "@/components/productVideo";
import Image from "next/image";
import Icon from "@/components/icon";
import {GmailIcon} from "@/app/about/GmailIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"relative grid lg:grid-cols-2 max-w-[1280px] mx-auto "}>
      <div className="lg:sticky top-0 flex flex-col justify-between max-h-[70vh] lg:py-24">
        <div className="">
          <div className="h-20 relative text-left">
            <Image
              src={"/media/emar.png"}
              fill={true}
              className={"object-contain object-left"}
              alt={"Emmanuel Joseph"}
            />
          </div>
          <h1 className="font-gilroy sm:text-5xl text-4xl text-[#E7D9EF] tracking-tight mt-5 mb-3">
            <span className="text-[#E6BAFF] font-bold">Emmanuel Joseph</span>
          </h1>
          <div className="max-w-sm text-md">
            <h2 className="mb-4 font-gilroy text-lg font-medium tracking-tight text-[#E7D9EF]">
              Full-stack Engineer, Blockchain Engineer
            </h2>
            <p className="mb-6 text-[#c4b0cf] leading-normal">
              I help pre-seed to Series A companies conquer code architecture, scaling, and performance challenges.
            </p>

            <div className="">
              <a
                className="w-fit bg-white py-1.5 sm:py-3 px-6 rounded-[48px] flex justify-center items-center gap-2 backdrop-blur-2xl"
                href="mailto:emarjay921@gmail.com"
              >
                <GmailIcon/>
                <span
                  className="text-[#1e1e1e] text-sm sm:text-base font-medium">Hire me</span>
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
        </div>

        <nav className={"text-sm text-[#c4b0cf] hidden lg:block"}>
          <ul>
            <li>
              <a
                href="#about"
                className={"block py-3 hover:text-[#E7D9EF] transition-all"}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={"block py-3 hover:text-[#E7D9EF] transition-all"}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#case-study"
                className={"block py-3 hover:text-[#E7D9EF] transition-all"}
              >
                CASE STUDY
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={"block py-3 hover:text-[#E7D9EF] transition-all"}
              >
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <section id="about" className="mb-16 md:mb-24 lg:mb-36 lg:pt-24">
          <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 lg:sr-only mt-16 lg:mt-0 mb-8">
            About
          </h1>
          <div className="max-w-4xl text-md leading-normal text-[#c4b0cf]">
            <p className="mb-6">
              <span className="font-medium">I&#39;m Emmanuel, a seasoned full-stack software and blockchain engineer dedicated to crafting innovative solutions that address real-world challenges and empower individuals.{" "}</span>
              With 8 years of experience spanning various sectors like Fintech, blockchain, e-commerce, and enterprise
              software, I specialize in utilizing cutting-edge technologies such as <span className="font-medium text-[#E6BAFF]">ReactJS, VueJS Solidity, NodeJS, and Golang</span> to
              architect scalable and user-centric platforms.
            </p>

            <p className="mb-6 font-medium text-[#E6BAFF]">
              Thank you for visiting my portfolio website!
            </p>
          </div>
        </section>

        <section id="experience" className="mb-16 md:mb-24 lg:mb-36 lg:pt-24">
          <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 lg:sr-only mt-16 lg:mt-0 mb-8">
            Experience
          </h1>

          <div className="text-[#c4b0cf] text-md leading-normal">
            <div className="">
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Lead Engineer · Origineum DWTCA
                </h3>
                <p className="mb-4">OCT 2021 - PRESENT</p>
                <p className="text-sm leading-normal">
                  Led the development of several products that won numerous
                  hackathons. Delivered high-quality, robust production code for
                  a diverse array of projects for clients. Provided leadership
                  within the engineering team by fostering close collaboration,
                  facilitating knowledge sharing, and providing mentorship.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    React
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Solidity
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Hardhat
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Ethers JS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node JS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Next JS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Golang
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Software Engineer · Wikimedia Foundation
                </h3>
                <p className="mb-4">OCT 2021 - NOV 2022</p>
                <p className="text-sm leading-normal">
                  Contributed to the Elasticsearch-based search engine that
                  powers Wikipedia and its sister projects, which indexes ~10
                  billion documents across ~1000 wikis in ~300 different
                  languages. Upgraded Elasticsearch plugins, including 7
                  internally developed plugins and contributions to 3 open
                  source plugins, making them compatible with Elasticsearch 7
                  and published on Maven Central.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Vagrant
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Java
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    GIT
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Gerrit
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Elasticsearch
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Less
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Vagrant
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Lead Engineer · Decasoft Technologies
                </h3>
                <p className="mb-4">OCT 2019 - NOV 2021</p>
                <p className="text-sm leading-normal">
                  Led the development team of 4 in building Decafinance, a
                  Fintech loan and savings PAAS that currently serves over 2,000
                  ride-hailing drivers. Integrated several banking APIs to
                  automate loan disbursements, withdrawals, and savings
                  collection on behalf of customers.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    LEMP
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Fullstack Engineer · Software Business Solutions Consulting
                  (SBSC)
                </h3>
                <p className="mb-4">JUN 2019 - SEPT 2019</p>
                <p className="text-sm leading-normal">
                  Built EMed HMR, a health management system, and scaled the
                  platform to manage 8 local governments with over 30,000 health
                  records. Revamped the accounting module to improve response
                  time by caching responses and restructuring the database to
                  eliminate unnecessary queries.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Fullstack Engineer · AlphaBeta, Ghana
                </h3>
                <p className="mb-4">MAY 2017 - DEC 2017</p>
                <p className="text-sm leading-normal">
                  Maintained and supported an Enterprise Tax Collection System
                  for local governments in Ghana.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="mb-16 md:mb-24 lg:mb-36 lg:pt-24">
          <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 lg:sr-only mt-16 lg:mt-0 mb-8">
            Case Study
          </h1>
          <div className="">
            <div
              className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <Link href="/about/case-study/fitted">Fitted.fashion</Link>
                </h3>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NFT
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Fashion
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    AI
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Supply Chain
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    E-commerce
                  </span>
                </div>
                <p className="mt-4 text-sm leading-normal">
                  Platform powering custom and ready to wear apparel production for the fashion industry
                </p>
              </div>
              <div className="sm:order-1 sm:col-span-3 relative min-h-[100px] md:min-h-[250px]">
                <Link href="/about/case-study/fitted" className="w-full h-full">
                  <Image src={"/media/fitted-landing-page.png"} fill className={'object-cover object-top'}
                         alt={"Fitted.fashion landing page"}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="mb-16 md:mb-24 lg:mb-36 lg:pt-24">
          <h1 className="text-lg font-semibold uppercase tracking-widest text-slate-200 lg:sr-only mt-16 lg:mt-0 mb-8">
            Projects
          </h1>
          <div className="">
            <div
              className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <a href="https://screen3.io" target={"_blank"}>
                    Screen3 ↗
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-normal">
                  An all-in-one app for recording, organizing knowledge, and
                  sharing video updates
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Electron
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NextJS
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Typescript
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    FFMPEG
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Theta Network
                  </span>
                  <span
                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    WebRTC
                  </span>
                </div>
              </div>

              <ProductVideo
                className={"sm:order-1 sm:col-span-3"}
                src={"/media/screen3.mp4"}
                poster={"/media/screen3.png"}
                color={"#171160"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
