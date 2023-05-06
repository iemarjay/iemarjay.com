import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Default({ children }: { children: JSX.Element }) {
  return (
    <main className="flex min-h-screen flex-col justify-between p-6 md:p-24 md:pt-6 bg-[#0A010F] text-[#E7D9EF] text-base md:text-lg leading-normal">
      <div className="">
        <div className="flex justify-center gap-5 md:gap-8 mb-6 md:mb-20">
          <a
            href="https://linkedin.com/in/iemarjay"
            title={"LinkedIn"}
            target={"_blank"}
          >
            <Icon
              name={"linked-in"}
              className={"text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"}
            />
          </a>
          <a
            href="https://github.com/iemarjay"
            title={"Github"}
            target={"_blank"}
          >
            <Icon
              name={"github"}
              className={"text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"}
            />
          </a>
          <a
            href="https://twitter.com/iemarjay"
            title={"Twitter"}
            target={"_blank"}
          >
            <Icon
              name={"twitter"}
              className={"text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"}
            />
          </a>
          <a
            href="https://youtube.com/@iemarjay"
            title={"Youtube"}
            target={"_blank"}
          >
            <Icon
              name={"youtube"}
              className={"text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"}
            />
          </a>
          <a
            href="https://instagram.com/iemarjay"
            title={"Instagram"}
            target={"_blank"}
          >
            <Icon
              name={"instagram"}
              className={"text-[#E7D9EF] text-opacity-60 hover:text-[#E6BAFF]"}
            />
          </a>
        </div>

        <div className="h-20 relative text-left">
          <Image
            src={"/media/emar.png"}
            fill={true}
            className={"object-contain object-left"}
            alt={"Emmanuel Joseph"}
          />
        </div>
        <h1 className="font-gilroy font-medium text-xl md:text-2xl text-[#E7D9EF] mt-5 mb-3">
          Hi, I&#39;m{" "}
          <span className="text-[#E6BAFF] font-semibold">Emmanuel Joseph</span>
        </h1>
        <div className="max-w-xl text-justify">
          <p className="mb-3">
            Full-stack software engineer, blockchain engineer and serial builder
          </p>
          <p className="mb-3">
            I have a wide range of technical experience, including building
            multiple products, winning numerous hackathons, and creating
            software solutions for various industries
          </p>

          <div className="">
            <a
              href="mailto:emarjay921@gmail.com"
              className="text-[#B54FED] font-medium transition hover:opacity-60 inline-block font-gilroy spread-on-hover"
            >
              <span className="underline">Hire Me</span>{" "}
              <span className={"transition child"}>↗</span>
            </a>
          </div>
        </div>

        <nav className="flex font-gilroy font-medium mt-16 mb-8 border-b border-[#252525]">
          <NavLink href={"/"}>Products</NavLink>
          {/*<NavLink href={"/projects"}>Projects</NavLink>*/}
          <NavLink href={"/about"}>About</NavLink>
          <a
            href={
              "https://docs.google.com/document/d/129OPS9dKhkD2wrwwEcE-auKGZPgWHKJPDmE4jM-TdHI/edit?usp=sharing"
            }
            target={"_blank"}
            className={`mr-8 pt-2 pb-4 transition hover:opacity-90 opacity-50`}
          >
            Resume <span className={"transition child"}>↗</span>
          </a>
        </nav>

        {children}
      </div>

      <div className="border-t border-[#252525] font-gilroy text-sm pt-8 mt-10">
        Emmanuel Joseph © {new Date().getFullYear()}
      </div>
    </main>
  );
}
