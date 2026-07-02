import Image from "next/image";
import { Code2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

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
              <TronCard className="p-7 rounded-[4px]">
                <p className="font-tron text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-cyan-400/70">
                  {about.focusLabel}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {about.pills.map((pill) => (
                    <span
                      key={pill}
                      className="font-tron border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-frost rounded-[2px]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </TronCard>

              <div className="overflow-hidden border border-cyan-400/20 bg-abyss rounded-[4px]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/60 via-transparent to-transparent" />
                </div>
                <div className="border-t border-cyan-400/15 bg-abyss/90 p-5">
                  <p className="font-tron text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cyan-400/70">
                    {about.imageCaptionTitle}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-steel">{about.imageCaptionText}</p>
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
                <TronCard scan className="h-full p-6 rounded-[4px]">
                  <div
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/8 text-cyan-300 rounded-[2px]"
                    style={{ boxShadow: "0 0 10px rgba(0,212,255,0.12)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-tron text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{card.description}</p>
                </TronCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
