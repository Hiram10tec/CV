import Image from "next/image";
import { ArrowUpRight, BrainCircuit, Boxes, ExternalLink, FolderKanban, FlaskConical, Layers2, Smartphone } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectSignalOverlay } from "@/components/ui/ProjectSignalOverlay";
import { TiltCard } from "@/components/ui/TiltCard";

const projectIcons: Record<PortfolioContent["projects"]["items"][number]["id"], typeof Boxes> = {
  altertex: Boxes,
  wushu: Smartphone,
  workflow: Layers2,
  wc2026: BrainCircuit,
  defungi: FlaskConical,
};

type ProjectsProps = {
  projects: PortfolioContent["projects"];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.items.map((project, index) => {
            const Icon = projectIcons[project.id];
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <TiltCard className="h-full" maxDeg={10}>
                <article
                  className="group tron-card tron-card-scan relative h-full overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-violet-500/40"
                  style={{ borderRadius: "4px" }}
                >
                  <span aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-cyan-400/55" />
                  <span aria-hidden className="pointer-events-none absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 border-cyan-400/55" />
                  <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-cyan-400/55" />
                  <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-cyan-400/55" />

                  <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan-400/15">
                    <Image
                      src={project.image}
                      alt={`${project.title} visual preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <ProjectSignalOverlay projectId={project.id} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000c14] via-transparent to-transparent" />

                    <div
                      className="absolute left-4 top-4 inline-flex items-center gap-2 border border-cyan-400/25 bg-[#000c14]/70 px-3 py-1.5 font-tron text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur"
                      style={{ borderRadius: "2px" }}
                    >
                      <FolderKanban className="h-3.5 w-3.5" />
                    </div>

                    <div
                      className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-cyan-400/25 bg-[#000c14]/70 text-cyan-300 backdrop-blur"
                      style={{ borderRadius: "2px" }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-tron text-xl font-semibold text-white">{project.title}</h3>
                      <span
                        className="border border-cyan-400/20 bg-cyan-400/5 p-2 text-cyan-400/70 transition group-hover:border-cyan-400/40 group-hover:text-cyan-300"
                        style={{ borderRadius: "2px" }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    {project.role && (
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="font-tron text-[0.6rem] uppercase tracking-[0.18em] text-cyan-300">{project.role}</span>
                        <span className="text-cyan-400/30">·</span>
                        <span className="font-tron text-[0.6rem] uppercase tracking-[0.18em] text-[#8ab8cc]">{project.company}</span>
                        <span className="text-cyan-400/30">·</span>
                        <span className="font-tron text-[0.6rem] uppercase tracking-[0.18em] text-[#8ab8cc]/60">{project.period}</span>
                      </div>
                    )}
                    <p className="mt-3 text-sm leading-7 text-[#8ab8cc]">{project.description}</p>

                    <div className="mt-5 border border-cyan-400/12 bg-cyan-400/3 p-4" style={{ borderRadius: "2px" }}>
                      <p className="font-tron text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cyan-400/70">
                        {projects.highlightLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#8ab8cc]">{project.highlight}</p>
                    </div>

                    <div className="mt-3 border border-cyan-400/12 bg-cyan-400/3 p-4" style={{ borderRadius: "2px" }}>
                      <p className="font-tron text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cyan-400/70">
                        {projects.resultLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#cce8f5]">{project.result}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-tron border border-cyan-400/18 bg-cyan-400/4 px-3 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-[#8ab8cc]"
                          style={{ borderRadius: "2px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="mt-4 border-t border-cyan-400/10 pt-4 flex flex-wrap gap-2">
                        <span className="font-tron text-[0.58rem] uppercase tracking-[0.22em] text-cyan-400/60 self-center mr-1">
                          {projects.reposLabel}
                        </span>
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-tron inline-flex items-center gap-1.5 border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                            style={{ borderRadius: "2px" }}
                          >
                            <ExternalLink className="h-3 w-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
