"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import type { PortfolioContent } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ExperienceStickyProps = {
  timeline: PortfolioContent["timeline"];
};

export function ExperienceSticky({ timeline }: ExperienceStickyProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".experience-step");

        setActiveIndex(0);

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: index === 0 ? 1 : 0.45,
              y: index === 0 ? 0 : 40,
              scale: index === 0 ? 1 : 0.965,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                end: "top 34%",
                scrub: 0.5,
                onToggle: (self) => {
                  if (self.isActive) setActiveIndex(index);
                },
              },
            }
          );
          gsap.to(card, {
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 18px 70px rgba(15,23,42,0.22)",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 34%",
              scrub: 0.5,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [timeline] }
  );

  return (
    <section ref={sectionRef} id="experience" className="section-spacing relative">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start lg:pt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-sky-300/80">{timeline.eyebrow}</p>
          <h2 className="max-w-md text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{timeline.title}</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300 md:text-xl">{timeline.description}</p>

          <div className="mt-8 flex gap-3">
            {timeline.items.map((experience, index) => (
              <span
                key={experience.id}
                className={`h-1.5 w-12 rounded-full transition ${index === activeIndex ? "bg-sky-400" : "bg-white/10"}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {timeline.items.map((experience) => (
            <article key={experience.id} className="experience-step glass-card rounded-[2rem] p-7 lg:min-h-[24rem] lg:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-200/80">{experience.role}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{experience.company}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{experience.period}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-base text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <MapPin className="h-4 w-4 text-sky-300" />
                  {experience.location}
                </span>
              </div>

              <p className="mt-8 text-lg leading-8 text-slate-300">{experience.summary}</p>

              <div className="mt-8 grid gap-3">
                {experience.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-base leading-8 text-slate-200">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">{timeline.stackLabel}</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {experience.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
