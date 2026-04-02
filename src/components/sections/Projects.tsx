import Image from "next/image";
import { ArrowUpRight, Boxes, FolderKanban, Layers2, Smartphone } from "lucide-react";
import { getPortfolioContent, type Locale } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const projectIcons = [Boxes, Smartphone, Layers2];

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const copy = getPortfolioContent(locale);

  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={copy.projects.eyebrow} title={copy.projects.title} description={copy.projects.description} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {copy.projects.items.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="group glass-card h-full overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
                    <Image
                      src={project.image}
                      alt={`${project.title} visual preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur">
                      <FolderKanban className="h-4 w-4" />
                    </div>
                    <div className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/55 text-sky-200 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-8 text-slate-300">{project.description}</p>

                    <div className="mt-5 rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/80">{copy.projects.resultLabel}</p>
                      <p className="mt-3 text-base leading-8 text-slate-200">{project.result}</p>
                    </div>

                    <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/80">{copy.projects.highlightLabel}</p>
                      <p className="mt-3 text-base leading-8 text-slate-300">{project.highlight}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
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
