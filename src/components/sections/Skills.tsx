import {
  Blocks,
  Braces,
  Building2,
  CheckCheck,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileJson2,
  GitBranch,
  Hexagon,
  KanbanSquare,
  KeyRound,
  LayoutTemplate,
  Lock,
  MonitorSmartphone,
  Smartphone,
  TabletSmartphone,
  UsersRound,
  Waypoints,
  Webhook,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TronCard } from "@/components/ui/TronCard";

type SkillsProps = {
  skills: PortfolioContent["skills"];
};

const groupIcons: Record<PortfolioContent["skills"]["groups"][number]["id"], LucideIcon> = {
  frontend: MonitorSmartphone,
  backend: Webhook,
  mobile: Smartphone,
  data: Database,
  architectureQuality: GitBranch,
};

function normalize(value: string) {
  return value.toLowerCase();
}

function getSkillIcon(skill: string): LucideIcon {
  const n = normalize(skill);
  if (n.includes("react")) return Blocks;
  if (n.includes("javascript")) return FileCode2;
  if (n.includes("typescript")) return Braces;
  if (n.includes("tailwind")) return Wind;
  if (n.includes("responsive")) return MonitorSmartphone;
  if (n.includes("interface") || n.includes("ui")) return LayoutTemplate;
  if (n.includes("node")) return Waypoints;
  if (n.includes("express") || n.includes("rest")) return Webhook;
  if (n.includes("valid")) return CheckCheck;
  if (n.includes("permission") || n.includes("permiso") || n.includes("berecht")) return KeyRound;
  if (n.includes("security") || n.includes("seguridad") || n.includes("sicher")) return Lock;
  if (n.includes("swiftui")) return TabletSmartphone;
  if (n === "swift") return Smartphone;
  if (n.includes("ios")) return Smartphone;
  if (n.includes("mvvm")) return GitBranch;
  if (n.includes("sql") || n.includes("mysql")) return Database;
  if (n.includes("model")) return Building2;
  if (n.includes("aws") || n.includes("s3") || n.includes("cloud")) return Cloud;
  if (n.includes("hex")) return Hexagon;
  if (n.includes("clean")) return GitBranch;
  if (n.includes("cmmi")) return Building2;
  if (n.includes("scrum")) return UsersRound;
  if (n === "dad") return KanbanSquare;
  if (n.includes("swagger")) return FileJson2;
  if (n.includes("ieee")) return CheckCheck;
  return Code2;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={skills.eyebrow} title={skills.title} description={skills.description} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.groups.map((group, index) => {
            const GroupIcon = groupIcons[group.id] ?? Wrench;
            return (
              <Reveal key={group.title} delay={index * 0.07}>
                <TronCard scan className="p-6" style={{ borderRadius: "4px" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center border border-cyan-400/25 bg-cyan-400/8 text-cyan-300"
                      style={{ borderRadius: "2px", boxShadow: "0 0 10px rgba(0,212,255,0.12)" }}
                    >
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-tron text-sm font-semibold uppercase tracking-[0.15em] text-white">{group.title}</h3>
                  </div>

                  <div className="my-4 h-px bg-gradient-to-r from-cyan-400/20 via-cyan-400/8 to-transparent" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill);
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 border border-cyan-400/18 bg-cyan-400/4 px-3 py-1.5 text-[0.68rem] text-[#8ab8cc] transition hover:border-cyan-400/32 hover:text-cyan-300"
                          style={{ borderRadius: "2px" }}
                        >
                          <SkillIcon className="h-3 w-3 text-cyan-400/70" />
                          {skill}
                        </span>
                      );
                    })}
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
