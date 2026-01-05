import {ProductVideo} from "@/components/productVideo";
import Image from "next/image";
import Icon from "@/components/icon";
import {GmailIcon} from "@/app/about/GmailIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative grid lg:grid-cols-2 max-w-[1280px] mx-auto">
      <div className="lg:sticky top-0 flex flex-col justify-between max-h-[70vh] lg:py-24">
        <div className="">
          <div className="h-20 relative text-left">
            <Image
              src="/media/emar.png"
              fill={true}
              className="object-contain object-left"
              alt="Emmanuel Joseph"
            />
          </div>
          <h1 className="font-gilroy sm:text-5xl text-4xl text-[#E7D9EF] tracking-tight mt-5 mb-3">
            <span className="text-[#E6BAFF] font-bold">Emmanuel Joseph</span>
          </h1>
          <div className="max-w-sm text-md">
            <h2 className="mb-4 font-gilroy text-lg font-medium tracking-tight text-[#E7D9EF]">
              Full-stack Engineer (web2 and web3), serial builder, Ex Wikipedia
            </h2>
            <p className="mb-6 text-[#c4b0cf] leading-normal">
              8 years building production systems, DeFi protocols, enterprise platforms, and my own products.
            </p>

            <div className="">
              <a
                className="w-fit bg-white py-2 sm:py-3 px-8 rounded-[48px] flex justify-center items-center gap-2 backdrop-blur-2xl"
                href="mailto:emarjay921@gmail.com"
              >
                <GmailIcon/>
                <span className="text-[#1e1e1e] text-base font-medium">Get in touch</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-5 mb-6 md:mb-20 mt-8">
            <a
              href="https://linkedin.com/in/iemarjay"
              title="LinkedIn"
              target="_blank"
            >
              <Icon
                name="linked-in"
                className="text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
              />
            </a>
            <a
              href="https://github.com/iemarjay"
              title="Github"
              target="_blank"
            >
              <Icon
                name="github"
                className="text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
              />
            </a>
            <a
              href="https://twitter.com/iemarjay"
              title="Twitter"
              target="_blank"
            >
              <Icon
                name="twitter"
                className="text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
              />
            </a>
            <a
              href="https://youtube.com/@iemarjay"
              title="Youtube"
              target="_blank"
            >
              <Icon
                name="youtube"
                className="text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
              />
            </a>
            <a
              href="https://instagram.com/iemarjay"
              title="Instagram"
              target="_blank"
            >
              <Icon
                name="instagram"
                className="text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"
              />
            </a>
          </div>
        </div>

        <nav className="text-sm text-[#c4b0cf] hidden lg:block">
          <ul>
            <li>
              <a
                href="#about"
                className="block py-3 hover:text-[#E7D9EF] transition-all"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-3 hover:text-[#E7D9EF] transition-all"
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#case-study"
                className="block py-3 hover:text-[#E7D9EF] transition-all"
              >
                CASE STUDY
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block py-3 hover:text-[#E7D9EF] transition-all"
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
              I build things that handle real money and real users. Over 8 years, I&#39;ve worked across fintech, blockchain, e-commerce, and enterprise software, from search infrastructure at <span className="font-medium text-[#E6BAFF]">Wikimedia Foundation</span> to DeFi protocols handling user funds.
            </p>

            <p className="mb-6">
              I take security seriously. A webhook vulnerability I missed while building a payment platform cost a client $10k, that failure changed how I build. Now I audit my own smart contracts using an <span className="font-medium text-[#E6BAFF]">AI-augmented methodology</span> before deployment.
            </p>

            <p className="mb-6">
              When I&#39;m not working on client projects, I&#39;m building <span className="font-medium text-[#E6BAFF]">Shuttershow</span>, a tool for photographers. I believe the best engineers ship their own products, not just other people&#39;s.
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
                  Lead Engineer · PouchFI Limited
                </h3>
                <p className="mb-4">OCT 2025 - Present</p>
                <p className="text-sm leading-normal">
                  Building an early-stage DeFi protocol on BSC. As Lead Engineer, I designed a multi-currency wallet system with signature-based withdrawals, implemented on-chain deposit flows via Solidity contracts (audited using my AI-augmented security methodology) and Ethers.js, and built NestJS services with JWT auth, RBAC, and Redis pub-sub alongside a Next.js dashboard (&lt; 200ms TTFB). Integrated debit-card issuance APIs including KYC verification and automated settlement. Leading a team of five engineers with zero critical post-launch incidents.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    React
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Solidity
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Hardhat
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Ethers JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Next JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Nest JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Lead Engineer · Origineum DWTCA
                </h3>
                <p className="mb-4">NOV 2022 - DEC 2024</p>
                <p className="text-sm leading-normal">
                  Spearheaded PiggyFi—a Celo-based money-transfer dApp handling over 1,000 daily transactions via Node.js/Express APIs and Celo SDK integration, and leading the development of OpenLand, a Moonriver NFT land-investment platform managing $200 K+ in assets with a Next.js front end and Go/Echo microservices; I also optimized overall system performance to sub-200 ms TTFB and containerized our infrastructure on AWS using Terraform, achieving 99.8% uptime.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    React
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Solidity
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Hardhat
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Ethers JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Next JS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Golang
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
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
                  Contributed to the Metrics & Search Interfaces stack by consolidating the event pipeline into a single buffer (−15% complexity), introducing thread-safe configurations to eliminate race conditions, and refactoring client integrations to an exception-driven model (−20% incident fatigue). I also boosted CirrusSearch reliability and recall, developing heuristic recovery mechanisms that cut outages by 30% and adding an apostrophe filter that improved possessive query recall by 25%, all while leveraging Gerrit code-review workflows to streamline patch submissions and mentor new contributors.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Vagrant
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Java
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    GIT
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Gerrit
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Elasticsearch
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Less
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Docker
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
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
                  Architected and delivered Decafinance, a Laravel & Vue.js lending and savings platform serving over 2,000 ride-hailing drivers and processing ₦82 M (~$200 K) in transactions. I automated loan disbursement and settlement workflows via Flutterwave and Paystack integrations, reducing manual effort by 70%, and implemented Docker-based CI/CD pipelines with GitHub Actions, cutting deployment time in half. Additionally, I mentored a team of four engineers in Agile best practices, fostering collaboration and continuous delivery.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    LEMP
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
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
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
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
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PHP
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Laravel
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    VueJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NuxtJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
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
          <div className="space-y-8">
            {/* Fintech Security Audit */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <Link href="/about/case-study/fintech-security">Fintech Security Audit</Link>
                </h3>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-xs font-medium leading-5 text-red-300 mr-1.5 mt-2">
                    Security Audit
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Fintech
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Forensics
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Incident Response
                  </span>
                </div>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Identified 24 vulnerabilities, traced an active attack, quantified $7,149 in fraud, and recovered $5,110 for a payments platform.
                </p>
              </div>
              <div className="sm:order-1 sm:col-span-3 relative min-h-[100px] md:min-h-[150px] flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-purple-500/20">
                <Link href="/about/case-study/fintech-security" className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-red-400">24</div>
                    <div className="text-xs text-[#c4b0cf]">Vulnerabilities</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Solana Prediction Market Audit */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <Link href="/about/case-study/solana-prediction-market">Solana Prediction Market Audit</Link>
                </h3>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300 mr-1.5 mt-2">
                    Security Audit
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Solana
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Rust
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    DeFi
                  </span>
                </div>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Pre-mainnet audit of a prediction market protocol. Found 17 issues including vault insolvency risk in 2,800 lines of Rust.
                </p>
              </div>
              <div className="sm:order-1 sm:col-span-3 relative min-h-[100px] md:min-h-[150px] flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20">
                <Link href="/about/case-study/solana-prediction-market" className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-orange-400">17</div>
                    <div className="text-xs text-[#c4b0cf]">Issues Found</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Fitted.fashion */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <Link href="/about/case-study/fitted">Fitted.fashion</Link>
                </h3>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NFT
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Fashion
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    AI
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Supply Chain
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    E-commerce
                  </span>
                </div>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Platform powering custom and ready to wear apparel production for the fashion industry
                </p>
              </div>
              <div className="sm:order-1 sm:col-span-3 relative min-h-[100px] md:min-h-[150px]">
                <Link href="/about/case-study/fitted" className="w-full h-full">
                  <Image src="/media/fitted-landing-page.png" fill className="object-cover object-top rounded-lg"
                         alt="Fitted.fashion landing page"/>
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
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <a href="https://screen3.io" target="_blank">
                    Screen3 ↗
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-normal">
                  An all-in-one app for recording, organizing knowledge, and
                  sharing video updates
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Electron
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NextJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Typescript
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    FFMPEG
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Theta Network
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    WebRTC
                  </span>
                </div>
              </div>

              <ProductVideo
                className="sm:order-1 sm:col-span-3"
                src="/media/screen3.mp4"
                poster="/media/screen3.png"
                color="#171160"
              />
            </div>

            {/* Shuttershow */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mt-8">
              <div className="sm:col-span-8">
                <h3 className="text-white leading-7">
                  Shuttershow
                  <span className="ml-2 text-xs text-teal-300 font-normal">(Building)</span>
                </h3>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  A tool for photographers to create galleries, public pages, and let clients select their favorite shots. Competing with Pixieset.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    NextJS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    React
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Typescript
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Green Africa */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mt-8">
              <div className="sm:col-span-8">
                <h3 className="text-white leading-7">
                  Green Africa (Hedera)
                </h3>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Smart reverse vending machine on Hedera blockchain. Users recycle plastics and receive rewards in tokens, airtime, or data bundles.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Hedera
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Smart Contracts
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Node
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    IoT Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
