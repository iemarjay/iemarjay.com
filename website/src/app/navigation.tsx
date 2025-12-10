import Link from "next/link";

export function Navigation() {
  return <header className="fixed w-full bg-white">
    <div className="max-w-4xl mx-auto px-6 md:px-24 py-6 text-center md:text-left">
      <nav className="divide-x">
        <Link href="/"><span className="inline-block pr-3">Home</span></Link>
        <Link href="/about"><span className="inline-block px-3">About</span></Link>
        <Link href="/post"><span className="inline-block pl-3">Blog</span></Link>
      </nav>
    </div>
  </header>;
}
