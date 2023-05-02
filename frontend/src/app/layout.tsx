import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "iemarjay.com",
  description:
    "Emmanuel Joseph (iemarjay), Fullstack software engineer, blockchain engineer and serial maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Joseph Emmanuel (iemarjay)" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Full-stack software engineer, blockchain engineer and serial builder\nI have a wide range of technical experience, including building multiple products, winning numerous hackathons, and creating software solutions for various industries"
        />
        <meta property="og:url" content="https://iemarjay.com" />
        <meta
          property="og:image"
          content="/media/hire-emmanuel-joseph-iemarjay.png"
        />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
