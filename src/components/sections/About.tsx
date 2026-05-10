import Image from "next/image";
import { Code2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Layers3, Code2, ShieldCheck, Sparkles];

type AboutProps = {
  about: PortfolioContent["about"];
  personalInfo: {
    fullName: string;
    profileImage: string;
  };
};

export function About({ about, personalInfo }: AboutProps) {
  return (
    <section id="about" className="section-spacing">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <Reveal>
          <div>
            <SectionTitle eyebrow={about.eyebrow} title={about.title} description={about.description} />

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/80">{about.focusLabel}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {about.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium tracking-[0.12em] text-slate-100"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03]">
                <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(226,232,240,0.88))]">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="border-t border-white/8 bg-slate-950/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">{about.imageCaptionTitle}</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">{about.imageCaptionText}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {about.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="glass-card h-full rounded-[1.75rem] p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/25 to-fuchsia-400/20 text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
