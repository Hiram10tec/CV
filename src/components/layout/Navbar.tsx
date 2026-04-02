"use client";

import { useEffect, useState } from "react";
import { getPortfolioContent, locales, personalInfo, type Locale } from "@/data/portfolio";

type NavbarProps = {
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const copy = getPortfolioContent(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  const navItems = [
    { label: copy.nav.about, href: "#about" },
    { label: copy.nav.timeline, href: "#experience" },
    { label: copy.nav.projects, href: "#projects" },
    { label: copy.nav.skills, href: "#skills" },
    { label: copy.nav.education, href: "#education" },
    { label: copy.nav.contact, href: "#contact" },
  ];

  const withLang = (hash = "") => `/?lang=${locale}${hash}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/75 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href={withLang("#top")} className="text-sm font-semibold tracking-[0.25em] text-white uppercase md:text-base">
          {personalInfo.name}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={withLang(item.href)} className="text-base text-slate-300 transition hover:text-white">
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
                aria-label={`${copy.nav.languageLabel}: ${item.label}`}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase transition ${
                  item.code === locale ? "bg-sky-400/20 text-sky-100" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={withLang("#contact")}
            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/20 hover:text-white md:text-base"
          >
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
