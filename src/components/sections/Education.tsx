import Image from "next/image";
import { Compass, Landmark, MapPin } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

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
                <article className="glass-card overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10] border-b border-white/8">
                    <Image src={item.image} alt={item.institution} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur">
                      <Icon className="h-4 w-4" />
                      {education.badge}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-3xl font-semibold text-white">{item.institution}</h3>
                        <p className="mt-3 text-lg leading-8 text-slate-300">{item.degree}</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{item.period}</span>
                    </div>

                    <p className="mt-4 inline-flex items-center gap-2 text-base text-slate-300">
                      <MapPin className="h-4 w-4 text-sky-300" />
                      {item.location}
                    </p>

                    <p className="mt-5 text-base leading-8 text-slate-300">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
