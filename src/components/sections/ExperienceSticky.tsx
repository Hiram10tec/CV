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
            { opacity: index === 0 ? 1 : 0.45, y: index === 0 ? 0 : 40, scale: index === 0 ? 1 : 0.965 },
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
            borderColor: "rgba(0,212,255,0.38)",
            boxShadow: "0 0 22px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.65)",
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
          <p className="font-tron mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-cyan-400/70">
            {timeline.eyebrow}
          </p>
          <h2
            className="font-tron max-w-md text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ textShadow: "0 0 30px rgba(0,212,255,0.12)" }}
          >
            {timeline.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#8ab8cc] md:text-lg">{timeline.description}</p>

          <div className="mt-8 flex gap-2">
            {timeline.items.map((experience, index) => (
              <span
                key={experience.id}
                className="h-[2px] w-12 transition-all duration-300"
                style={
                  index === activeIndex
                    ? { background: "#00d4ff", boxShadow: "0 0 6px rgba(0,212,255,0.7)" }
                    : { background: "rgba(0,212,255,0.15)" }
                }
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {timeline.items.map((experience) => (
            <article
              key={experience.id}
              className="experience-step tron-card relative p-7 lg:min-h-[24rem] lg:p-9"
              style={{ borderRadius: "4px" }}
            >
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-cyan-400/55" />
              <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-cyan-400/55" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-cyan-400/55" />
              <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-cyan-400/55" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-tron text-[0.6rem] font-medium uppercase tracking-[0.25em] text-cyan-400/80">
                    {experience.role}
                  </p>
                  <h3 className="font-tron mt-3 text-2xl font-semibold text-white md:text-3xl">{experience.company}</h3>
                </div>
                <div
                  className="font-tron border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-[#8ab8cc]"
                  style={{ borderRadius: "2px" }}
                >
                  {experience.period}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <span
                  className="font-tron inline-flex items-center gap-2 border border-cyan-400/15 bg-cyan-400/3 px-4 py-2 text-[0.65rem] uppercase tracking-[0.15em] text-[#8ab8cc]"
                  style={{ borderRadius: "2px" }}
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  {experience.location}
                </span>
              </div>

              <p className="mt-8 text-base leading-8 text-[#8ab8cc]">{experience.summary}</p>

              <div className="mt-8 grid gap-3">
                {experience.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="border border-cyan-400/12 bg-cyan-400/3 p-4 transition hover:border-cyan-400/22"
                    style={{ borderRadius: "2px" }}
                  >
                    <p className="text-sm leading-7 text-[#cce8f5]">
                      <span className="mr-2 font-tron text-[0.6rem] text-cyan-400/60">▸</span>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="font-tron text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cyan-400/70">
                  {timeline.stackLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-tron border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.12em] text-[#8ab8cc] transition hover:border-cyan-400/35 hover:text-cyan-300"
                      style={{ borderRadius: "2px" }}
                    >
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
