"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, MapPin, Sparkles } from "lucide-react";
import type { Locale, PortfolioContent } from "@/data/portfolio";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
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
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <BackgroundOrbs />

      <div className="section-shell relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/8 px-4 py-2 font-tron text-xs font-semibold uppercase tracking-[0.28em] text-violet-300"
            style={{ borderRadius: "2px", boxShadow: "0 0 14px rgba(139,92,246,0.14)" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {copy.hero.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-tron text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-[4.5rem] leading-[1.08]"
            style={{ textShadow: "0 0 40px rgba(139,92,246,0.18)" }}
          >
            <span className="glitch-text" data-text={personalInfo.name}>{personalInfo.name}</span>
            <span className="mt-3 block gradient-text font-tron text-2xl leading-tight md:text-4xl lg:text-[3rem]">
              {copy.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#9aaccf] md:text-xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span
              className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/5 px-4 py-2 font-tron text-[0.68rem] uppercase tracking-[0.15em] text-violet-300/80"
              style={{ borderRadius: "2px" }}
            >
              <MapPin className="h-3 w-3 text-violet-400" />
              {copy.hero.location}
            </span>
            <span
              className="inline-flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 font-tron text-[0.68rem] uppercase tracking-[0.15em] text-cyan-300/80"
              style={{ borderRadius: "2px" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-neon-pulse" />
              {copy.hero.availability}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={localizedHref(locale, "#projects")}
              className="font-tron border border-violet-500 bg-violet-500/12 px-7 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 transition hover:bg-violet-500/22"
              style={{
                borderRadius: "2px",
                boxShadow: "0 0 18px rgba(139,92,246,0.28), inset 0 0 12px rgba(139,92,246,0.06)",
              }}
            >
              {copy.hero.viewProjects}
            </a>
            <a
              href={personalInfo.cvPath}
              download="CV-Hiram-Mendoza.pdf"
              className="font-tron inline-flex items-center justify-center gap-2 border border-cyan-500/30 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-500/8"
              style={{ borderRadius: "2px" }}
            >
              <Download className="h-3.5 w-3.5" />
              {copy.hero.openCv}
            </a>
            <a
              href={localizedHref(locale, "#contact")}
              className="font-tron border border-white/10 bg-white/2 px-7 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8ab8cc] transition hover:border-violet-500/25 hover:text-violet-300"
              style={{ borderRadius: "2px" }}
            >
              {copy.hero.contactMe}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {copy.stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-violet-500/15 bg-violet-500/4 p-3 text-center transition hover:border-violet-500/30"
                style={{ borderRadius: "3px" }}
              >
                <p
                  className="font-tron text-xl font-semibold text-violet-300 md:text-2xl"
                  style={{ textShadow: "0 0 14px rgba(139,92,246,0.55)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.65rem] leading-5 text-[#7a8eaa]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D Orbital photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="relative flex items-center justify-center py-16"
        >
          <div
            className="relative animate-float"
            style={{ width: "320px", height: "320px" }}
          >
            {/* Outer nebula glow */}
            <div
              className="pointer-events-none absolute inset-[-70px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.08) 50%, transparent 72%)",
                filter: "blur(22px)",
              }}
            />

            {/* Ring 1 — violet, X-tilted */}
            <div
              className="animate-orbit-x absolute inset-[-28px] rounded-full"
              style={{
                border: "1px solid rgba(139,92,246,0.5)",
                boxShadow: "0 0 22px rgba(139,92,246,0.14)",
              }}
            />

            {/* Ring 2 — cyan, Y-tilted */}
            <div
              className="animate-orbit-y absolute inset-[-10px] rounded-full"
              style={{
                border: "1px solid rgba(6,182,212,0.42)",
                boxShadow: "0 0 16px rgba(6,182,212,0.10)",
              }}
            />

            {/* Ring 3 — dim violet, free */}
            <div
              className="animate-orbit-free absolute inset-[16px] rounded-full"
              style={{ border: "1px dashed rgba(139,92,246,0.22)" }}
            />

            {/* Profile photo */}
            <div
              className="absolute inset-[28px] overflow-hidden rounded-full"
              style={{
                border: "2px solid rgba(139,92,246,0.55)",
                boxShadow:
                  "0 0 0 4px rgba(139,92,246,0.08), 0 0 45px rgba(139,92,246,0.28), inset 0 0 30px rgba(139,92,246,0.08)",
                background: "linear-gradient(160deg, #0d0828 0%, #050410 100%)",
              }}
            >
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                fill
                sizes="264px"
                className="object-cover object-top"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(139,92,246,0.08) 0%, transparent 40%, rgba(6,182,212,0.05) 100%)",
                }}
              />
            </div>

            {/* Name badge */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap border border-violet-500/32 bg-[var(--bg)]/90 px-5 py-2 font-tron text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-violet-300 backdrop-blur-sm"
              style={{ borderRadius: "2px", boxShadow: "0 0 14px rgba(139,92,246,0.18)" }}
            >
              {personalInfo.name}
            </div>
          </div>

          {/* Quick-note card */}
          <div
            className="absolute -right-4 bottom-2 max-w-[190px] border border-violet-500/18 bg-[var(--bg-soft)]/90 p-3.5 backdrop-blur-sm"
            style={{ borderRadius: "3px" }}
          >
            <span className="font-tron text-[0.52rem] uppercase tracking-[0.2em] text-violet-400/55">// note</span>
            <p className="mt-1.5 text-[0.7rem] leading-5 text-[#9aaccf]">{copy.hero.quickNote}</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom particle accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 overflow-hidden opacity-60">
        <ParticleCanvas />
      </div>
    </section>
  );
}
