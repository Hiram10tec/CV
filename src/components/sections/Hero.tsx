"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight, Download, MapPin, Sparkles } from "lucide-react";
import type { Locale, PortfolioContent } from "@/data/portfolio";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";
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
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200 md:text-base"
          >
            <Sparkles className="h-4 w-4" />
            {copy.hero.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-[5.25rem]"
          >
            {personalInfo.name}
            <span className="mt-3 block gradient-text text-4xl leading-tight md:text-6xl lg:text-[4.25rem]">{copy.hero.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-2xl text-xl leading-9 text-slate-300 md:text-2xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-base text-slate-300"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <MapPin className="h-4 w-4 text-sky-300" />
              {copy.hero.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <ArrowDownRight className="h-4 w-4 text-sky-300" />
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
              className="rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              {copy.hero.viewProjects}
            </a>
            <a
              href={personalInfo.cvPath}
              download="CV-Hiram-Mendoza.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3.5 text-base font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
            >
              <Download className="h-4 w-4" />
              {copy.hero.openCv}
            </a>
            <a
              href={localizedHref(locale, "#contact")}
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              {copy.hero.contactMe}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="relative"
        >
          <div className="glass-card soft-ring overflow-hidden rounded-[2rem] p-4 md:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.96fr_0.84fr]">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(226,232,240,0.92))]" />
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center translate-y-4 scale-[1.2]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/80">{copy.hero.profile}</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-4 text-base text-sky-100 backdrop-blur">
                  {copy.hero.quickNote}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-slate-400">
                  <span>{copy.hero.snapshot}</span>
                  <span></span>
                </div>

                <div className="mt-8 grid gap-4">
                  {copy.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-base leading-7 text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
