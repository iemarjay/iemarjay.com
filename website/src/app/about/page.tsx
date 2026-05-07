import {ProductVideo} from "@/components/productVideo";
import Image from "next/image";
import Icon from "@/components/icon";
import {GmailIcon} from "@/app/about/GmailIcon";
import Link from "next/link";
import HederaWinners from "@/../public/media/hedera-africa-hackathon-winners.png";

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
              Engineering Lead at Pouchfi · Ex-Wikipedia — Backend, Web2/3, Security, AI
            </h2>
            <p className="mb-6 text-[#c4b0cf] leading-normal">
              8+ years shipping production systems, from Wikipedia search infrastructure to DeFi protocols handling real user funds.
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
              I lead engineering at <span className="font-medium text-[#E6BAFF]">Pouchfi</span>, a DeFi platform on Binance Smart Chain — architected the platform, wrote the on-chain contracts, and built the engineering team from scratch (currently leading 7 engineers). Over 8+ years, I&#39;ve shipped production systems across fintech, web3, e-commerce, and enterprise software, from <span className="font-medium text-[#E6BAFF]">Wikipedia search infrastructure</span> at Wikimedia Foundation to DeFi protocols handling real user funds.
            </p>

            <p className="mb-6">
              I take security seriously. A webhook vulnerability I missed while building a payment platform cost a client $10k, and that failure changed how I build. I now run a parallel practice as an <span className="font-medium text-[#E6BAFF]">independent security auditor</span> — 4 audits, 160+ vulnerabilities surfaced including a forensic recovery case that quantified $7,149 in fraud and traced $5,110 still recoverable in attacker wallets. I distilled the methodology into <span className="font-medium text-[#E6BAFF]">Code Refinery</span>, an open-source agentic PR review tool.
            </p>

            <p className="mb-6">
              I target <span className="font-medium text-[#E6BAFF]">CTO and engineering-lead roles at pre-seed → Series A startups</span>, especially in fintech, web3, AI-native products, or anywhere money and trust meet code.
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
                  Independent Security Auditor · Contract
                </h3>
                <p className="mb-4">APR 2025 - Present</p>
                <p className="text-sm leading-normal">
                  Code review and security review across web2 backends and web3 smart contracts (Solidity/EVM, Solana/Rust, Node/TypeScript fintech). 4 audits, 160+ vulnerabilities surfaced including a forensic recovery case ($7,149 in fraud quantified across 42 days, $5,110 traced and recoverable in attacker wallets). Distilled the methodology into Code Refinery, an open-source agentic PR review tool.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Solidity
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Rust
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Foundry
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Anchor
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Slither
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    semgrep
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Claude Code SDK
                  </span>
                </div>
              </div>
              <div className="lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mb-12">
                <h3 className="text-white leading-7">
                  Lead Engineer · PouchFI Limited
                </h3>
                <p className="mb-4">JUL 2024 - Present</p>
                <p className="text-sm leading-normal">
                  Building Pouchfi, a DeFi platform on BSC. Designed and built the current platform from the ground up: modular monolith backend (Node.js/TypeScript) with event-driven design and async queue processing, plus a Next.js dashboard (&lt; 200ms TTFB). Wrote the on-chain smart contracts on BSC — signature-based withdrawals with cryptographic verification, CREATE2 deterministic deployment, batch operations. Built NestJS services with JWT auth, RBAC, and Redis pub-sub. Integrated debit-card issuance APIs including KYC verification and automated settlement. Partner with the founder on product roadmap, prioritization, and business decisions. Started the engineering team from scratch and recruited all 7 engineers across backend, frontend, and smart contracts, with zero critical post-launch incidents. Platform currently in public beta.
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
                  Lead Engineer · Origneum DWTCA
                </h3>
                <p className="mb-4">OCT 2022 - SEP 2024</p>
                <p className="text-sm leading-normal">
                  Lead Engineer on a portfolio of fintech, web3, and infrastructure projects for early-stage clients (pre-seed → Series A). Built and shipped a token private sale platform that raised $400K in 2 weeks — pivoted from Solana to EVM mid-build to handle network congestion (Next.js, Wagmi, EthersJS, Solana web3.js, Solidity). Led builds on Openland (fractionalized-NFT real estate on Moonriver) and Qlipit.io (NFT marketplace + academy on BNB Chain). Shipped full-stack web apps and APIs across fintech, web3, and ed-tech, with CI/CD pipelines and container-based deployments on Digital Ocean and AWS. Led a team of 3 engineers, partnering closely with founders/stakeholders, product, and design.
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
                  Software Engineer · Search Infrastructure · Wikimedia Foundation
                </h3>
                <p className="mb-4">OCT 2021 - OCT 2022</p>
                <p className="text-sm leading-normal">
                  Wikipedia search infrastructure at Wikimedia Foundation — the non-profit behind Wikipedia, Wiktionary, and Wikidata. My work powered search across 300+ Wikipedia language editions used by billions of monthly readers. Upgraded 7 internally-developed Elasticsearch plugins for ES7 compatibility (published to Maven Central) and improved instrumentation across the CirrusSearch frontend and Elasticsearch backend, surfacing a long-standing bug that cut error volume from ~5M errors/month to ~500K. Built a uniform query-dump system across all Search endpoints (full-text, completion, suggestions) so Search Engineers could visualize queries end-to-end to diagnose correctness and relevance issues. Also shipped reliability and recall improvements to CirrusSearch — heuristic recovery mechanisms that cut outages by 30%, and an apostrophe filter that improved possessive-query recall by 25%.
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
                  Chief Technology Officer · Decasoft Technologies
                </h3>
                <p className="mb-4">OCT 2019 - OCT 2021</p>
                <p className="text-sm leading-normal">
                  Architected and delivered Decafinance, a multi-tenant fintech loan & savings PaaS scaled to 2,000+ ride-hailing drivers and $40K+ in transactions. Built the platform on Node.js (NuxtJS frontend) with banking API integrations (Flutterwave, Paystack) for automated loan disbursement, savings, and withdrawals — reducing manual effort by 70%. Built a Docker-based provisioning service that automated tenant onboarding, cutting customer setup from days to minutes. Architected a cost-effective in-house call center on SIP trunking (replacing legacy telephony) and introduced Zoho Mail and Freshdesk company-wide as early adopters. Led a team of 4 engineers, owned hiring, code review standards, and architecture decisions across backend, frontend, and infra.
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
            {/* Code Refinery */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg">
              <div className="sm:col-span-8">
                <h3 className="text-white leading-7">
                  <a href="https://github.com/iemarjay/code-refinery" target="_blank">
                    Code Refinery ↗
                  </a>
                  <span className="ml-2 text-xs text-teal-300 font-normal">(Open source)</span>
                </h3>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Open-source agentic PR review for GitHub. Two passes (security + code quality) using Claude Code CLI in full agentic mode. Multi-provider (Anthropic, AWS Bedrock, Vertex AI, Azure), JSON-schema-constrained output, branded GitHub App via OIDC. Distilled from years of audit work into a tool that drops into any repo.
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    TypeScript
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Claude Code SDK
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    GitHub Actions
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    OIDC
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    JSON Schema
                  </span>
                </div>
              </div>
            </div>

            {/* GreenAfrica */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mt-8">
              <div className="sm:order-2 sm:col-span-5">
                <h3 className="text-white leading-7">
                  <a href="https://www.hashgraph.swiss/news-all/2025-hedera-africa-hackathon-announces-winners-officially-becomes-the-largest-web3-hackathon-globally" target="_blank">
                    GreenAfrica (Hedera) ↗
                  </a>
                  <span className="ml-2 text-xs text-teal-300 font-normal">($100K Hackathon Winner)</span>
                </h3>
                <p className="mt-4 text-sm leading-normal text-[#c4b0cf]">
                  Smart reverse-vending-machine platform on Hedera with on-chain verification of recycling actions and automated token rewards. Users recycle plastics via RVMs; each verified action is recorded on-chain (Hedera HCS) and triggers a reward distributed via Hedera Token Service — redeemable for tokens, airtime, or data bundles. Won the $100K top cross-track champion prize at the 2025 Hedera Africa Hackathon — the largest Web3 hackathon globally (45,000+ participants, 1,300+ projects, 20+ African hubs).
                </p>
                <div className="mt-2 flex flex-wrap">
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    Hedera
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    HCS
                  </span>
                  <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1.5 mt-2">
                    HTS
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

              <div className="sm:order-1 sm:col-span-3 relative aspect-video sm:aspect-auto rounded-lg overflow-hidden">
                <Image
                  src={HederaWinners}
                  alt="GreenAfrica among the winners on the official 2025 Hedera Africa Hackathon poster"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-center"
                  placeholder="blur"
                />
              </div>
            </div>

            {/* Screen3 */}
            <div className="grid gap-4 sm:gap-8 md:gap-4 sm:grid-cols-8 lg:p-4 lg:hover:bg-white lg:hover:bg-opacity-10 transition-all rounded-lg mt-8">
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
          </div>
        </section>
      </div>
    </div>
  );
}
