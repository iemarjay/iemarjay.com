import Link from "next/link";
import { Navigation } from "@/app/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 md:px-24 pt-24 md:pt-32">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <span className="font-gilroy text-[120px] md:text-[180px] font-bold text-[#180622] opacity-5 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-[#9106dd]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="font-gilroy text-3xl md:text-4xl font-bold text-[#180622] mb-4">
            Page not found
          </h1>
          <p className="text-[#4b1d64] text-lg mb-8 max-w-md">
            Looks like you&apos;ve wandered into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/"
              className="bg-[#180622] py-3 px-8 rounded-[48px] text-white font-medium hover:bg-[#2a0e3a] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/post"
              className="text-[#4b1d64] py-3 px-6 font-medium hover:text-[#9106dd] transition-colors"
            >
              Read the Blog &rarr;
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-16 pt-8 border-t border-[#180622] border-opacity-10 w-full max-w-sm">
            <p className="text-xs text-[#4b1d64] text-opacity-60 mb-4 uppercase tracking-wider">
              Helpful Links
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/about"
                className="text-[#4b1d64] hover:text-[#9106dd] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#4b1d64] hover:text-[#9106dd] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/post"
                className="text-[#4b1d64] hover:text-[#9106dd] transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
