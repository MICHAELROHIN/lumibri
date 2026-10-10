"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "./nav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-white">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link href="/" aria-label="Lumibri ABA Services home">
          <Image src="/lumibri logo.png" alt="Lumibri ABA Services" width={176} height={108} priority className="h-auto w-32 sm:w-35" />
        </Link>
        <nav className="flex items-center gap-3 text-[15px] font-medium text-muted sm:gap-5 lg:gap-8">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="hidden transition hover:text-navy lg:block">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-2xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a2f72] sm:px-6 sm:py-3 sm:text-base">
            Start Intake
          </Link>
          <div className="relative lg:hidden">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-navy/10 text-navy"
            >
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
            {menuOpen && <div id="mobile-navigation" className="absolute right-0 top-14 z-40 w-48 rounded-2xl bg-white p-2 text-left shadow-xl shadow-navy/15 ring-1 ring-navy/10">
              {nav.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-3 text-navy transition hover:bg-[#f5f1eb]">
                  {item.label}
                </Link>
              ))}
            </div>}
          </div>
        </nav>
      </div>
    </header>
  );
}
