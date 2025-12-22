"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  variant?: "light" | "dark";
}

export function Navigation({ variant = "light" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <header className={`fixed w-full z-50 ${isDark ? "bg-[#180622]/90 backdrop-blur-sm" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-24 py-4 md:py-6">
        <div className="flex items-center justify-between md:justify-start">
          {/* Desktop nav */}
          <nav className={`hidden md:block divide-x ${isDark ? "divide-white/20 text-white" : "divide-current"}`}>
            <Link href="/"><span className={`inline-block pr-3 transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Home</span></Link>
            <Link href="/about"><span className={`inline-block px-3 transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>About</span></Link>
            <Link href="/services"><span className={`inline-block px-3 transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Services</span></Link>
            <Link href="/post"><span className={`inline-block pl-3 transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Blog</span></Link>
          </nav>

          {/* Mobile: Logo/Home */}
          <Link href="/" className={`md:hidden font-gilroy font-bold ${isDark ? "text-white" : "text-[#180622]"}`}>
            EJ
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isDark ? "text-white" : "text-[#180622]"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className={`md:hidden mt-4 pb-4 border-t pt-4 ${isDark ? "border-white/20 text-white" : ""}`}>
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsOpen(false)} className={`transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className={`transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>About</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className={`transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Services</Link>
              <Link href="/post" onClick={() => setIsOpen(false)} className={`transition-colors ${isDark ? "hover:text-[#E6BAFF]" : "hover:text-[#9106dd]"}`}>Blog</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
