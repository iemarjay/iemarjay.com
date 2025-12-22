import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import {GTM} from "@/app/components/GTM";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Emmanuel Joseph (iemarjay): Full-stack software engineer, blockchain engineer",
  description:
    "Full-stack software engineer, blockchain engineer and serial builder\n\nI have a wide range of technical experience, including building multiple products, winning numerous hackathons, and creating software solutions for various industries",
  keyword: [
    "Engineer",
    "Full-stack software engineer",
    "Software",
    "Blockchain",
    "Web3",
    "Career",
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
      "Emmanuel Joseph (iemarjay): Full-stack software engineer, blockchain engineer",
    description:
      "Full-stack software engineer, blockchain engineer and serial builder. I have a wide range of technical experience, including building multiple products, winning numerous hackathons, and creating software solutions for various industries.",
    url: "https://iemarjay.com",
    siteName: "Emmanuel Joseph (iemarjay)",
    images: [
      {
        url: "https://iemarjay.com/media/meet-emmanuel-joseph-iemarjay.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Joseph (iemarjay): Full-stack software engineer, blockchain engineer",
    description: "Full-stack software engineer, blockchain engineer and serial builder. 8 years building production systems across web2 and web3.",
    images: ["https://iemarjay.com/media/meet-emmanuel-joseph-iemarjay.png"],
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
