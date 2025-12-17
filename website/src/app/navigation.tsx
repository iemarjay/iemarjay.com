"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="max-w-4xl mx-auto px-6 md:px-24 py-4 md:py-6">
        <div className="flex items-center justify-between md:justify-start">
          {/* Desktop nav */}
          <nav className="hidden md:block divide-x">
            <Link href="/"><span className="inline-block pr-3 hover:text-[#9106dd] transition-colors">Home</span></Link>
            <Link href="/about"><span className="inline-block px-3 hover:text-[#9106dd] transition-colors">About</span></Link>
            <Link href="/services"><span className="inline-block px-3 hover:text-[#9106dd] transition-colors">Services</span></Link>
            <Link href="/post"><span className="inline-block pl-3 hover:text-[#9106dd] transition-colors">Blog</span></Link>
          </nav>

          {/* Mobile: Logo/Home */}
          <Link href="/" className="md:hidden font-gilroy font-bold text-[#180622]">
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
              className="w-6 h-6 text-[#180622]"
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
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#9106dd] transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#9106dd] transition-colors">About</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-[#9106dd] transition-colors">Services</Link>
              <Link href="/post" onClick={() => setIsOpen(false)} className="hover:text-[#9106dd] transition-colors">Blog</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
