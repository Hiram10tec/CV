"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, MapPin, Terminal } from "lucide-react";
import type { Locale, PortfolioContent } from "@/data/portfolio";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { TronCard } from "@/components/ui/TronCard";
import { localizedHref } from "@/lib/routes";

type HeroProps = {
  copy: Pick<PortfolioContent, "hero" | "stats">;
  personalInfo: {
    name: string;
    fullName: string;
    profileImage: string;
    cvPath: string;
  };
  locale: Locale;
};

export function Hero({ copy, personalInfo, locale }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <BackgroundOrbs />

      <div className="section-shell relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1fr_1fr]">
        {/* ── Left column ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/8 px-4 py-2 font-tron text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
            style={{ borderRadius: "2px", boxShadow: "0 0 12px rgba(0,212,255,0.12)" }}
          >
            <Terminal className="h-3.5 w-3.5" />
            {copy.hero.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-4xl font-tron text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-[5rem]"
            style={{ textShadow: "0 0 40px rgba(0,212,255,0.18)" }}
          >
            <span className="glitch-text" data-text={personalInfo.name}>{personalInfo.name}</span>
            <span className="mt-3 block gradient-text font-tron text-3xl leading-tight md:text-5xl lg:text-[3.8rem]">
              {copy.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-2xl text-xl leading-9 text-[#8ab8cc] md:text-2xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span
              className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 font-tron text-[0.7rem] uppercase tracking-[0.15em] text-[#8ab8cc]"
              style={{ borderRadius: "2px" }}
            >
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              {copy.hero.location}
            </span>
            <span
              className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 font-tron text-[0.7rem] uppercase tracking-[0.15em] text-[#8ab8cc]"
              style={{ borderRadius: "2px" }}
            >
              <span
                className="h-2 w-2 rounded-full bg-cyan-400 animate-neon-pulse"
                style={{ boxShadow: "0 0 6px rgba(0,212,255,0.8)" }}
              />
              {copy.hero.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={localizedHref(locale, "#projects")}
              className="font-tron border border-cyan-400 bg-cyan-400/10 px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:bg-cyan-400/20"
              style={{
                borderRadius: "2px",
                boxShadow: "0 0 12px rgba(0,212,255,0.25), inset 0 0 12px rgba(0,212,255,0.04)",
              }}
            >
              {copy.hero.viewProjects}
            </a>
            <a
              href={personalInfo.cvPath}
              download="CV-Hiram-Mendoza.pdf"
              className="font-tron inline-flex items-center justify-center gap-2 border border-cyan-400/30 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/8"
              style={{ borderRadius: "2px" }}
            >
              <Download className="h-3.5 w-3.5" />
              {copy.hero.openCv}
            </a>
            <a
              href={localizedHref(locale, "#contact")}
              className="font-tron border border-white/10 bg-white/3 px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8ab8cc] transition hover:border-cyan-400/20 hover:text-cyan-300"
              style={{ borderRadius: "2px" }}
            >
              {copy.hero.contactMe}
            </a>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="relative"
        >
          <TronCard glow className="overflow-hidden p-4 md:p-5" style={{ borderRadius: "4px" }}>
            <div className="grid gap-4 lg:grid-cols-[0.96fr_0.84fr]">
              {/* Profile photo */}
              <div className="flex flex-col gap-4">
                <div
                  className="relative aspect-[4/5] overflow-hidden border border-cyan-400/20"
                  style={{ borderRadius: "3px", background: "linear-gradient(180deg, #001828 0%, #000c14 100%)" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 35%, transparent 65%, rgba(0,212,255,0.04) 100%)",
                    }}
                  />
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center translate-y-4 scale-[1.2]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000c14] via-[#000c14]/70 to-transparent p-5">
                    <p className="font-tron text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-cyan-400/80">
                      {copy.hero.profile}
                    </p>
                  </div>
                  <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan-400/50" />
                  <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-400/50" />
                </div>

                <div
                  className="border border-cyan-400/20 bg-cyan-400/6 p-4"
                  style={{ borderRadius: "3px" }}
                >
                  <span className="font-tron text-[0.6rem] uppercase tracking-[0.2em] text-cyan-400/60">// note</span>
                  <p className="mt-1 text-sm leading-7 text-cyan-100/90">{copy.hero.quickNote}</p>
                </div>
              </div>

              {/* Stats panel */}
              <div className="border border-cyan-400/15 bg-[#000c14]/70 p-5" style={{ borderRadius: "3px" }}>
                <div className="flex items-center justify-between font-tron text-[0.6rem] uppercase tracking-[0.28em] text-[#4a7a9b]">
                  <span>{copy.hero.snapshot}</span>
                  <span className="animate-tron-blink text-cyan-400">█</span>
                </div>

                <div className="mt-8 grid gap-3">
                  {copy.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-cyan-400/12 bg-cyan-400/3 p-4 transition hover:border-cyan-400/25"
                      style={{ borderRadius: "2px" }}
                    >
                      <p
                        className="font-tron text-2xl font-semibold text-cyan-300 md:text-3xl"
                        style={{ textShadow: "0 0 12px rgba(0,212,255,0.6)" }}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-[#8ab8cc]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TronCard>
        </motion.div>
      </div>
    </section>
  );
}
