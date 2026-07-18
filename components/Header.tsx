"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/trust-pricing", label: "Trust Pricing" },
  { href: "/#how", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-indigo">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-header.png"
            alt="Helprz logo"
            className="h-11 w-11 flex-shrink-0"
          />
          <div>
            <div className="font-display text-xl font-bold leading-none text-white">
              Helpr<em className="not-italic text-marigold">z</em>
            </div>
            <div className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#B9C6CE]">
              EVERY HOME &middot; EVERY HELP
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[14.5px] font-semibold text-[#D9E1E5] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#contact"
            className="rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:border-white"
          >
            Log in
          </Link>
          <a
            href="tel:+919717923266"
            className="rounded-full bg-marigold px-5 py-2.5 text-sm font-bold text-indigo-deep transition hover:bg-marigold-deep"
          >
            Book Now →
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 bg-indigo px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[#D9E1E5]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919717923266"
            className="mt-2 rounded-full bg-marigold px-5 py-2.5 text-center text-sm font-bold text-indigo-deep"
          >
            Book Now →
          </a>
        </div>
      )}
    </header>
  );
}
