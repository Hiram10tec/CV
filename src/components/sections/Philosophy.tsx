import type { PortfolioContent } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

type PhilosophyProps = {
  philosophy: PortfolioContent["philosophy"];
};

export function Philosophy({ philosophy }: PhilosophyProps) {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <TronCard glow className="p-8 md:p-12" style={{ borderRadius: "4px" }}>
            <p className="font-tron text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-cyan-400/70">
              {philosophy.eyebrow}
            </p>
            <h2
              className="font-tron mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ textShadow: "0 0 30px rgba(0,212,255,0.12)" }}
            >
              {philosophy.title}
            </h2>

            <div className="mt-8 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {philosophy.items.map((item, index) => (
                <Reveal key={item} delay={index * 0.08}>
                  <div
                    className="border border-cyan-400/12 bg-cyan-400/3 p-5 transition hover:border-cyan-400/22"
                    style={{ borderRadius: "2px" }}
                  >
                    <p className="text-sm leading-8 text-[#cce8f5]">
                      <span className="mr-2 font-tron text-[0.6rem] text-cyan-400/60">▸</span>
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </TronCard>
        </Reveal>
      </div>
    </section>
  );
}
