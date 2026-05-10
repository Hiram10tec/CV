import { ArrowUpRight, BriefcaseBusiness, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  Mail,
  Linkedin,
  Phone,
  Instagram,
} as const;

type ContactProps = {
  contact: PortfolioContent["contact"];
  location: string;
};

export function Contact({ contact, location }: ContactProps) {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <div className="glass-card overflow-hidden rounded-[2.25rem] border border-white/10">
            <div className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="relative border-b border-white/8 p-8 md:p-10 xl:border-r xl:border-b-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_34%)]" />
                <div className="relative">
                  <SectionTitle eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/80">{contact.basedIn}</p>
                      <p className="mt-3 inline-flex items-center gap-2 text-lg text-white">
                        <MapPin className="h-4 w-4 text-sky-300" />
                        {location}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-5 text-base leading-8 text-sky-100">
                      {contact.availabilityCard}
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 text-base leading-8 text-slate-300">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      {contact.quickLabel}
                    </div>
                    <p className="mt-4">{contact.quickText}</p>
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
                          className="group flex min-w-0 flex-col gap-5 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05] sm:flex-row sm:items-start sm:justify-between"
                        >
                          <div className="flex min-w-0 items-start gap-4">
                            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/80">{item.label}</p>
                              <p className="mt-3 break-all text-xl leading-8 text-white sm:break-words sm:text-2xl">{item.value}</p>
                              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-400">{item.note}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-end sm:pt-1">
                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:text-white">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
