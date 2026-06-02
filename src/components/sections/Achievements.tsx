import { CheckCircle2, Globe, Languages, Layers3, Smartphone, type LucideIcon } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

type AchievementsProps = {
  achievements: PortfolioContent["achievements"];
};

const iconMap: Record<string, LucideIcon> = {
  exchange: Globe,
  english: Languages,
  german: Languages,
  ios: Smartphone,
  cmmi: CheckCircle2,
  architecture: Layers3,
};

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={achievements.eyebrow} title={achievements.title} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.items.map((item, index) => {
            const Icon = iconMap[item.id] ?? CheckCircle2;
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <TronCard scan className="flex items-start gap-4 p-5" style={{ borderRadius: "4px" }}>
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400/25 bg-cyan-400/8 text-cyan-300"
                    style={{ borderRadius: "2px", boxShadow: "0 0 8px rgba(0,212,255,0.1)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-tron text-sm font-semibold text-white">{item.title}</h3>
                      <span
                        className="font-tron shrink-0 border border-cyan-400/25 bg-cyan-400/8 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.2em] text-cyan-300"
                        style={{ borderRadius: "2px" }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#8ab8cc]">{item.description}</p>
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
