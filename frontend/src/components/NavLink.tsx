"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(props: {
  href: string;
  pattern?: string | RegExp;
  children: JSX.Element | string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      className={`mr-8 pt-2 pb-4 transition ${
        props.pattern && pathname.match(props.pattern)
          ? "opacity-70"
          : "opacity-50 hover:opacity-90"
      }`}
    >
      {props.children}
    </Link>
  );
}
