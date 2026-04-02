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
import { getPortfolioContent, type Locale } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

type SkillsProps = {
  locale: Locale;
};

const groupIcons: Record<string, LucideIcon> = {
  frontend: MonitorSmartphone,
  backend: Webhook,
  mobile: Smartphone,
  data: Database,
  architecture: GitBranch,
  habilidades: Wrench,
  skills: Wrench,
};

function normalize(value: string) {
  return value.toLowerCase();
}

function getGroupIcon(title: string) {
  const normalized = normalize(title);

  if (normalized.includes("front")) return groupIcons.frontend;
  if (normalized.includes("back")) return groupIcons.backend;
  if (normalized.includes("mobil")) return groupIcons.mobile;
  if (normalized.includes("data") || normalized.includes("dato")) return groupIcons.data;
  if (normalized.includes("architect") || normalized.includes("arquitect") || normalized.includes("qualität")) {
    return groupIcons.architecture;
  }

  return groupIcons.skills;
}

function getSkillIcon(skill: string): LucideIcon {
  const normalized = normalize(skill);

  if (normalized.includes("react")) return Blocks;
  if (normalized.includes("javascript")) return FileCode2;
  if (normalized.includes("typescript")) return Braces;
  if (normalized.includes("tailwind")) return Wind;
  if (normalized.includes("responsive")) return MonitorSmartphone;
  if (normalized.includes("interface") || normalized.includes("ui")) return LayoutTemplate;
  if (normalized.includes("node")) return Waypoints;
  if (normalized.includes("express")) return Webhook;
  if (normalized.includes("rest")) return Webhook;
  if (normalized.includes("valid")) return CheckCheck;
  if (normalized.includes("permission") || normalized.includes("permiso") || normalized.includes("berecht")) return KeyRound;
  if (normalized.includes("security") || normalized.includes("seguridad") || normalized.includes("sicher")) return Lock;
  if (normalized.includes("swiftui")) return TabletSmartphone;
  if (normalized === "swift") return Smartphone;
  if (normalized.includes("ios")) return Smartphone;
  if (normalized.includes("mvvm")) return GitBranch;
  if (normalized.includes("sql") || normalized.includes("mysql")) return Database;
  if (normalized.includes("model")) return Building2;
  if (normalized.includes("aws") || normalized.includes("s3") || normalized.includes("cloud")) return Cloud;
  if (normalized.includes("hex")) return Hexagon;
  if (normalized.includes("clean architecture") || normalized.includes("clean")) return GitBranch;
  if (normalized.includes("cmmi")) return Building2;
  if (normalized.includes("scrum")) return UsersRound;
  if (normalized === "dad") return KanbanSquare;
  if (normalized.includes("swagger")) return FileJson2;
  if (normalized.includes("ieee")) return CheckCheck;

  return Code2;
}
export function Skills({ locale }: SkillsProps) {
  const copy = getPortfolioContent(locale);

  return (
    <section id="skills" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow={copy.skills.eyebrow} title={copy.skills.title} description={copy.skills.description} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {copy.skills.groups.map((group, index) => {
            const GroupIcon = getGroupIcon(group.title);

            return (
              <Reveal key={group.title} delay={index * 0.07}>
                <article className="glass-card rounded-[1.75rem] p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill);

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-base text-slate-200"
                        >
                          <SkillIcon className="h-4 w-4 text-sky-300" />
                          {skill}
                        </span>
                      );
                    })}
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
