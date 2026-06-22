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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = ["about", "experience", "projects", "skills", "education", "contact"];
      const y = window.scrollY + 140;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  const navItems = [
    { label: nav.about, href: "#about" },
    { label: nav.projects, href: "#projects" },
    { label: nav.skills, href: "#skills" },
    { label: nav.education, href: "#education" },
    { label: nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`relative mx-auto max-w-7xl border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-cyan-400/20 bg-[#000c14]/88 shadow-[0_4px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(0,212,255,0.06)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        style={{ borderRadius: "3px" }}
      >
        {scrolled && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,212,255,0.55) 40%, rgba(0,212,255,0.55) 60%, transparent)",
            }}
          />
        )}

        <div className="flex items-center justify-between gap-4">
          <a
            href={localizedHref(locale, "#top")}
            onClick={closeMenu}
            className="font-tron text-sm font-semibold tracking-[0.3em] text-cyan-300 uppercase md:text-base"
            style={{ textShadow: "0 0 10px rgba(0,212,255,0.6)" }}
          >
            {name}
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={localizedHref(locale, item.href)}
                  className={`font-tron relative text-[0.68rem] uppercase tracking-[0.2em] transition ${active ? "text-cyan-300" : "text-[#8ab8cc] hover:text-cyan-300"}`}
                  style={active ? { textShadow: "0 0 8px rgba(0,212,255,0.6)" } : undefined}
                >
                  {item.label}
                  {active && <span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400/60" style={{ boxShadow: "0 0 4px rgba(0,212,255,0.5)" }} />}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="flex items-center gap-px border border-cyan-400/20 bg-[#001a2e]/60 p-0.5"
              style={{ borderRadius: "2px" }}
            >
              {locales.map((item) => (
                <a
                  key={item.code}
                  href={`/?lang=${item.code}`}
                  aria-label={`${nav.languageLabel}: ${item.label}`}
                  className={`font-tron px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase transition ${
                    item.code === locale
                      ? "bg-cyan-400/15 text-cyan-300"
                      : "text-[#4a7a9b] hover:text-cyan-300"
                  }`}
                  style={{ borderRadius: "2px" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={localizedHref(locale, "#contact")}
              onClick={closeMenu}
              className="font-tron hidden border border-cyan-400/35 bg-cyan-400/8 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/15 sm:inline-flex"
              style={{ borderRadius: "2px", boxShadow: "0 0 8px rgba(0,212,255,0.1)" }}
            >
              {nav.cta}
            </a>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 lg:hidden"
              style={{ borderRadius: "2px" }}
            >
              <span className="relative h-4 w-4" aria-hidden>
                <span
                  className={`absolute left-0 top-1 block h-[1px] w-4 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3 block h-[1px] w-4 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mt-4 grid gap-1 border-t border-cyan-400/15 pt-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={localizedHref(locale, item.href)}
                onClick={closeMenu}
                className="font-tron px-3 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-[#8ab8cc] transition hover:bg-cyan-400/5 hover:text-cyan-300"
                style={{ borderRadius: "2px" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={localizedHref(locale, "#contact")}
              onClick={closeMenu}
              className="font-tron mt-2 border border-cyan-400/30 bg-cyan-400/8 px-3 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/15"
              style={{ borderRadius: "2px" }}
            >
              {nav.cta}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
