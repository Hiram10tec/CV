"use client";

import { useEffect, useState } from "react";
import type { Locale, PortfolioContent } from "@/data/portfolio";
import { localizedHref } from "@/lib/routes";

type NavbarProps = {
  locale: Locale;
  locales: Array<{ code: Locale; label: string }>;
  nav: PortfolioContent["nav"];
  name: string;
};

export function Navbar({ locale, locales, nav, name }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  const navItems = [
    { label: nav.about, href: "#about" },
    { label: nav.timeline, href: "#experience" },
    { label: nav.projects, href: "#projects" },
    { label: nav.skills, href: "#skills" },
    { label: nav.education, href: "#education" },
    { label: nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-[2rem] border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/75 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href={localizedHref(locale, "#top")} onClick={closeMenu} className="text-sm font-semibold tracking-[0.25em] text-white uppercase md:text-base">
            {name}
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={localizedHref(locale, item.href)} className="text-base text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {locales.map((item) => (
                <a
                  key={item.code}
                  href={`/?lang=${item.code}`}
                  aria-label={`${nav.languageLabel}: ${item.label}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase transition ${
                    item.code === locale ? "bg-sky-400/20 text-sky-100" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={localizedHref(locale, "#contact")}
              onClick={closeMenu}
              className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/20 hover:text-white sm:inline-flex md:text-base"
            >
              {nav.cta}
            </a>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 lg:hidden"
            >
              <span className="relative h-4 w-4" aria-hidden>
                <span className={`absolute left-0 top-1 block h-0.5 w-4 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-3 block h-0.5 w-4 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mt-4 grid gap-1 border-t border-white/10 pt-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={localizedHref(locale, item.href)}
                onClick={closeMenu}
                className="rounded-2xl px-3 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={localizedHref(locale, "#contact")}
              onClick={closeMenu}
              className="mt-2 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-3 py-3 text-base font-medium text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
            >
              {nav.cta}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
