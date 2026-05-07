import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import {GTM} from "@/app/components/GTM";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://iemarjay.com"),
  title:
    "Emmanuel Joseph (iemarjay): Engineering Lead — Backend, Web3, Security, AI",
  description:
    "Engineering Lead at pre-seed → Series A startups. Backend, web3, security, AI/LLM. 8+ years shipping production systems. Powered a $400K raise. Found 160+ vulnerabilities. Building Code Refinery (open-source agentic PR review).",
  keyword: [
    "Engineering Lead",
    "CTO",
    "Backend Engineer",
    "Web3 Engineer",
    "Smart Contract Auditor",
    "Security Engineer",
    "LLM Engineering",
    "AI Engineering",
    "Solidity",
    "Node.js",
    "TypeScript",
    "DeFi",
    "Fintech Engineering",
  ],
  icons: {
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.svg",
    },
    icon: [
      // @ts-ignore
      { url: "/icon-16x16.png", size: "16x16" },
      { url: "/icon.svg", size: "32x32" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
    android: [
      {
        url: "/icon-192x192.svg",
        size: "192x192",
      },
      {
        url: "/icon-512x512.svg",
        size: "512x512",
      },
    ],
  },

  openGraph: {
    title:
      "Emmanuel Joseph (iemarjay): Engineering Lead — Backend, Web3, Security, AI",
    description:
      "Engineering Lead at pre-seed → Series A startups. Backend, web3, security, AI/LLM. 8+ years shipping production systems. Powered a $400K raise. Found 160+ vulnerabilities. Building Code Refinery.",
    url: "https://iemarjay.com",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "/media/meet-emmanuel-joseph-iemarjay.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Joseph (iemarjay) — Engineering Lead, Backend / Web3 / Security / AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Joseph (iemarjay): Engineering Lead — Backend, Web3, Security, AI",
    description: "Engineering Lead. 8+ years shipping production systems across web2 and web3. Backend, security, AI/LLM tooling.",
    images: ["/media/meet-emmanuel-joseph-iemarjay.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body className={poppins.className}>{children}</body>

      <GTM id={"GTM-PZQZ5LX6"} />
    </html>
  );
}
