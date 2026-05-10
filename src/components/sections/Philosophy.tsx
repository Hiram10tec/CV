import type { PortfolioContent } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

type PhilosophyProps = {
  philosophy: PortfolioContent["philosophy"];
};

export function Philosophy({ philosophy }: PhilosophyProps) {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <div className="glass-card rounded-[2.25rem] p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300/80">{philosophy.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{philosophy.title}</h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {philosophy.items.map((item, index) => (
                <Reveal key={item} delay={index * 0.08}>
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                    <p className="text-lg leading-8 text-slate-200">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
