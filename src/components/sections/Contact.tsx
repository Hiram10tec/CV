import { ArrowUpRight, BriefcaseBusiness, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

const icons = { Mail, Linkedin, Github } as const;

type ContactProps = {
  contact: PortfolioContent["contact"];
  location: string;
};

export function Contact({ contact, location }: ContactProps) {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <TronCard glow className="overflow-hidden rounded-[4px]">
            <div className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="relative border-b border-cyan-400/12 p-8 md:p-10 xl:border-b-0 xl:border-r">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(0,212,255,0.08) 0%, transparent 55%)" }}
                />
                <div className="relative">
                  <SectionTitle eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="border border-cyan-400/15 bg-cyan-400/3 p-5 rounded-[3px]">
                      <p className="font-tron text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-cyan-400/70">
                        {contact.basedIn}
                      </p>
                      <p className="mt-3 inline-flex items-center gap-2 text-base text-white">
                        <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                        {location}
                      </p>
                    </div>

                    <div
                      className="border border-cyan-400/25 bg-cyan-400/8 p-5 text-sm leading-7 text-cyan-100 rounded-[3px]"
                      style={{ boxShadow: "0 0 10px rgba(0,212,255,0.06)" }}
                    >
                      {contact.availabilityCard}
                    </div>
                  </div>

                  <div className="mt-5 border border-cyan-400/12 bg-cyan-400/3 p-5 rounded-[3px]">
                    <div
                      className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-tron text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-cyan-300 rounded-[2px]"
                    >
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      {contact.quickLabel}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-steel">{contact.quickText}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid gap-4">
                  {contact.links.map((item, index) => {
                    const Icon = icons[item.icon];
                    return (
                      <Reveal key={item.label} delay={index * 0.08}>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className="group tron-card-scan relative flex min-w-0 flex-col gap-5 border border-cyan-400/15 bg-cyan-400/3 p-5 transition hover:border-cyan-400/35 sm:flex-row sm:items-start sm:justify-between rounded-[3px]"
                        >
                          <div className="flex min-w-0 items-start gap-4">
                            <div
                              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-400/25 bg-cyan-400/8 text-cyan-300 transition group-hover:border-cyan-400/45 rounded-[2px]"
                              style={{ boxShadow: "0 0 8px rgba(0,212,255,0.08)" }}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-tron text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-cyan-400/70">
                                {item.label}
                              </p>
                              <p className="mt-2 break-all text-lg leading-7 text-white sm:break-words sm:text-xl">
                                {item.value}
                              </p>
                              <p className="mt-2 max-w-2xl text-sm leading-7 text-tide">{item.note}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-end sm:pt-1" aria-hidden>
                            <span
                              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400/15 bg-cyan-400/3 text-tide transition group-hover:border-cyan-400/35 group-hover:text-cyan-300 rounded-[2px]"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>
                        </a>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </TronCard>
        </Reveal>
      </div>
    </section>
  );
}
