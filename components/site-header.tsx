"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, waLink } from "@/lib/site";
import { Logo } from "./logo";
import { Close, Menu } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = pathname === "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-40 text-white" : "relative z-40 text-ink"}>
      {overlay && (
        <p className="bg-ink/90 px-4 py-2 text-center text-[11px] leading-snug text-white/80 sm:text-xs">
          Bingung mulai diet dari mana? Konsultasikan kebutuhanmu GRATIS bersama HappySlim melalui{" "}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline underline-offset-2">
            WhatsApp!
          </a>
        </p>
      )}

      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label="HappySlim.id — Beranda" className="text-3xl md:text-[2.1rem]">
          <Logo />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs tracking-wide uppercase">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="relative py-1 opacity-85 transition-opacity hover:opacity-100 aria-[current=page]:opacity-100 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-px aria-[current=page]:after:bg-current"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-dashed hidden px-4 py-2 text-xs tracking-wide uppercase transition-colors hover:bg-current/10 md:inline-block"
        >
          Hubungi Kami
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="-mr-2 p-2 md:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi utama"
          onClick={(e) => {
            // Close the menu once a link is chosen.
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
          className="border-y border-line bg-cream text-ink md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="block border-b border-line/70 py-3 text-sm tracking-wide uppercase aria-[current=page]:font-semibold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-espresso py-3 text-center text-sm tracking-wide text-cream uppercase">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
