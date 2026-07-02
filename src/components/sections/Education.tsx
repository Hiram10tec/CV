import Image from "next/image";
import { Compass, Landmark, MapPin } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

const educationIcons = [Landmark, Compass];

type EducationProps = {
  education: PortfolioContent["education"];
};

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={education.eyebrow} title={education.title} description={education.description} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.items.map((item, index) => {
            const Icon = educationIcons[index % educationIcons.length];
            return (
              <Reveal key={item.institution} delay={index * 0.08}>
                <TronCard className="overflow-hidden rounded-[4px]">
                  <div className="relative aspect-[16/10] border-b border-cyan-400/15">
                    <Image
                      src={item.image}
                      alt={item.institution}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />

                    <div
                      className="absolute left-4 top-4 inline-flex items-center gap-2 border border-cyan-400/25 bg-abyss/70 px-3 py-1.5 font-tron text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur rounded-[2px]"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {education.badge}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-tron text-2xl font-semibold text-white">{item.institution}</h3>
                        <p className="mt-2 text-base leading-7 text-steel">{item.degree}</p>
                      </div>
                      <span
                        className="font-tron border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.15em] text-steel rounded-[2px]"
                      >
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-steel">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                      {item.location}
                    </p>

                    <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/18 via-cyan-400/6 to-transparent" />

                    <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
                  </div>
                </TronCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
