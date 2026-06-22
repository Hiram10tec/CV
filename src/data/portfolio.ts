import { createTranslator } from "use-intl/core";
import { personalInfo } from "@/config/site";
import { defaultLocale, getMessages, isLocale, locales, type Locale } from "@/lib/i18n";

type ContactIcon = "Mail" | "Linkedin" | "Github";
type ProjectId = "altertex" | "wushu" | "wc2026" | "defungi";
type SkillGroupId = "frontend" | "backend" | "mobile" | "data" | "architectureQuality" | "machineLearning";

type AchievementId = "exchange" | "english" | "german" | "ios" | "cmmi" | "architecture";

export type PortfolioContent = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    timeline: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    location: string;
    profile: string;
    snapshot: string;
    quickNote: string;
    viewProjects: string;
    openCv: string;
    contactMe: string;
  };
  stats: Array<{ value: string; label: string }>;
  about: {
    eyebrow: string;
    title: string;
    description: string;
    focusLabel: string;
    imageBadge: string;
    imageCaptionTitle: string;
    imageCaptionText: string;
    pills: string[];
    cards: Array<{ title: string; description: string }>;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    stackLabel: string;
    items: Array<{
      id: ProjectId;
      company: string;
      role: string;
      location: string;
      period: string;
      summary: string;
      bullets: string[];
      stack: string[];
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    resultLabel: string;
    highlightLabel: string;
    reposLabel: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      result: string;
      highlight: string;
      tags: string[];
      image: string;
      links: Array<{ label: string; href: string }>;
      role?: string;
      company?: string;
      period?: string;
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Array<{ id: SkillGroupId; title: string; skills: string[] }>;
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    items: Array<{
      institution: string;
      degree: string;
      location: string;
      period: string;
      image: string;
      description: string;
    }>;
  };
  achievements: {
    eyebrow: string;
    title: string;
    items: Array<{ id: AchievementId; title: string; description: string; badge: string }>;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    basedIn: string;
    availabilityCard: string;
    quickLabel: string;
    quickText: string;
    links: Array<{
      label: string;
      icon: ContactIcon;
      href: string;
      value: string;
      note: string;
    }>;
  };
  footer: {
    builtWith: string;
    email: string;
  };
};

const statConfigs = [
  { value: "5", labelKey: "stats.projectsDelivered" },
  { value: "A2", labelKey: "stats.germanLevel" },
  { value: "C1", labelKey: "stats.englishLevel" },
  { value: "iOS", labelKey: "stats.iosDelivery" },
] as const;

const aboutPillKeys = [
  "about.pills.fullStackDevelopment",
  "about.pills.softwareArchitecture",
  "about.pills.apiDesign",
  "about.pills.qualityPractices",
] as const;

const aboutCardIds = [
  "architectureMindset",
  "executionAcrossLayers",
  "qualityOrientation",
  "practicalLearning",
] as const;

const timelineItems = [
  {
    id: "altertex",
    stack: ["React", "Node.js", "MySQL", "Hexagonal Architecture", "Clean Architecture", "CMMI", "DAD"],
  },
  {
    id: "wushu",
    stack: ["Swift", "SwiftUI", "MVVM", "Testing", "Scrum", "iOS"],
  },
] as const;

const timelineBulletKeys = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"] as const;

const projectItems = [
  {
    id: "altertex",
    image: "/images/project-altertex.svg",
    tags: ["React", "Node.js", "MySQL", "REST APIs", "RBAC", "2FA", "Hexagonal Arch."],
    links: [
      { label: "Frontend", href: "https://github.com/CodeAnd-Co/Frontend-Text-Lines" },
      { label: "Backend", href: "https://github.com/CodeAnd-Co/Backend-textiles" },
    ],
    roleKey: "timeline.items.altertex.role" as const,
    companyKey: "timeline.items.altertex.company" as const,
    periodKey: "timeline.items.altertex.period" as const,
  },
  {
    id: "wushu",
    image: "/images/project-wushu.svg",
    tags: ["SwiftUI", "Swift", "MVVM", "TestFlight", "Scrum", "UX"],
    links: [
      { label: "iOS App", href: "https://github.com/Academia-Mexicana-de-Wushu-Queretaro/iOS" },
    ],
    roleKey: "timeline.items.wushu.role" as const,
    companyKey: "timeline.items.wushu.company" as const,
    periodKey: "timeline.items.wushu.period" as const,
  },
  {
    id: "wc2026",
    image: "/images/project-wc2026.svg",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning", "Data Analysis"],
    links: [
      { label: "GitHub", href: "https://github.com/Hiram10tec/WC2026-ML" },
    ],
  },
  {
    id: "defungi",
    image: "/images/project-defungi.svg",
    tags: ["Python", "scikit-learn", "Classification", "Jupyter", "Feature Engineering"],
    links: [
      { label: "GitHub", href: "https://github.com/Hiram10tec/DeFungi-ML" },
    ],
  },
] as const;

const skillGroups = [
  {
    id: "frontend",
    titleKey: "skills.groups.frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    id: "backend",
    titleKey: "skills.groups.backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT / 2FA", "RBAC", "bcrypt", "Input validation"],
  },
  {
    id: "mobile",
    titleKey: "skills.groups.mobile",
    skills: ["Swift", "SwiftUI", "MVVM", "TestFlight delivery"],
  },
  {
    id: "data",
    titleKey: "skills.groups.data",
    skills: ["SQL", "MySQL", "Data modeling", "AWS S3"],
  },
  {
    id: "architectureQuality",
    titleKey: "skills.groups.architectureQuality",
    skills: ["Hexagonal", "Clean Architecture", "MVVM", "CMMI", "Scrum", "DAD", "Swagger", "IEEE 829"],
  },
  {
    id: "machineLearning",
    titleKey: "skills.groups.machineLearning",
    skills: ["Python", "scikit-learn", "Pandas", "NumPy", "Jupyter", "Classification", "Feature Engineering"],
  },
] as const;

const educationItems = [
  { id: "tec", image: "/images/education-tec.jpg" },
  { id: "twente", image: "/images/education-twente.jpg" },
] as const;

const achievementIds: AchievementId[] = ["exchange", "english", "german", "ios", "cmmi", "architecture"];

const contactLinkConfigs = [
  {
    id: "email",
    icon: "Mail" as const,
    href: `mailto:${personalInfo.email}`,
    value: personalInfo.email,
  },
  {
    id: "linkedin",
    icon: "Linkedin" as const,
    href: personalInfo.linkedin,
    value: "Hiram Mendoza",
  },
  {
    id: "github",
    icon: "Github" as const,
    href: personalInfo.github,
    value: "Hiram10tec",
  },
] as const;

const philosophyKeys = [
  "philosophy.item1",
  "philosophy.item2",
  "philosophy.item3",
  "philosophy.item4",
] as const;

export function getPortfolioContent(locale: Locale): PortfolioContent {
  const t = createTranslator({
    locale,
    messages: getMessages(locale),
  });

  return {
    metadata: {
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
    nav: {
      about: t("nav.about"),
      timeline: t("nav.timeline"),
      projects: t("nav.projects"),
      skills: t("nav.skills"),
      education: t("nav.education"),
      contact: t("nav.contact"),
      cta: t("nav.cta"),
      languageLabel: t("nav.languageLabel"),
    },
    hero: {
      tagline: t("hero.tagline"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      location: t("hero.location"),
      profile: t("hero.profile"),
      snapshot: t("hero.snapshot"),
      quickNote: t("hero.quickNote"),
      viewProjects: t("hero.viewProjects"),
      openCv: t("hero.openCv"),
      contactMe: t("hero.contactMe"),
    },
    stats: statConfigs.map((item) => ({
      value: item.value,
      label: t(item.labelKey),
    })),
    about: {
      eyebrow: t("about.eyebrow"),
      title: t("about.title"),
      description: t("about.description"),
      focusLabel: t("about.focusLabel"),
      imageBadge: t("about.imageBadge"),
      imageCaptionTitle: t("about.imageCaptionTitle"),
      imageCaptionText: t("about.imageCaptionText"),
      pills: aboutPillKeys.map((key) => t(key)),
      cards: aboutCardIds.map((id) => ({
        title: t(`about.cards.${id}.title`),
        description: t(`about.cards.${id}.description`),
      })),
    },
    timeline: {
      eyebrow: t("timeline.eyebrow"),
      title: t("timeline.title"),
      description: t("timeline.description"),
      stackLabel: t("timeline.stackLabel"),
      items: timelineItems.map((item) => ({
        id: item.id,
        company: t(`timeline.items.${item.id}.company`),
        role: t(`timeline.items.${item.id}.role`),
        location: t(`timeline.items.${item.id}.location`),
        period: t(`timeline.items.${item.id}.period`),
        summary: t(`timeline.items.${item.id}.summary`),
        bullets: timelineBulletKeys.map((bulletKey) => t(`timeline.items.${item.id}.${bulletKey}`)),
        stack: [...item.stack],
      })),
    },
    projects: {
      eyebrow: t("projects.eyebrow"),
      title: t("projects.title"),
      description: t("projects.description"),
      badge: t("projects.badge"),
      resultLabel: t("projects.resultLabel"),
      highlightLabel: t("projects.highlightLabel"),
      reposLabel: t("projects.reposLabel"),
      items: projectItems.map((item) => ({
        id: item.id,
        title: t(`projects.items.${item.id}.title`),
        description: t(`projects.items.${item.id}.description`),
        result: t(`projects.items.${item.id}.result`),
        highlight: t(`projects.items.${item.id}.highlight`),
        tags: [...item.tags],
        image: item.image,
        links: [...item.links] as Array<{ label: string; href: string }>,
        ...("roleKey" in item ? {
          role: t(item.roleKey),
          company: t(item.companyKey),
          period: t(item.periodKey),
        } : {}),
      })),
    },
    skills: {
      eyebrow: t("skills.eyebrow"),
      title: t("skills.title"),
      description: t("skills.description"),
      groups: skillGroups.map((group) => ({
        id: group.id,
        title: t(group.titleKey),
        skills: [...group.skills],
      })),
    },
    education: {
      eyebrow: t("education.eyebrow"),
      title: t("education.title"),
      description: t("education.description"),
      badge: t("education.badge"),
      items: educationItems.map((item) => ({
        institution: t(`education.items.${item.id}.institution`),
        degree: t(`education.items.${item.id}.degree`),
        location: t(`education.items.${item.id}.location`),
        period: t(`education.items.${item.id}.period`),
        image: item.image,
        description: t(`education.items.${item.id}.description`),
      })),
    },
    achievements: {
      eyebrow: t("achievements.eyebrow"),
      title: t("achievements.title"),
      items: achievementIds.map((id) => ({
        id,
        title: t(`achievements.items.${id}.title`),
        description: t(`achievements.items.${id}.description`),
        badge: t(`achievements.items.${id}.badge`),
      })),
    },
    philosophy: {
      eyebrow: t("philosophy.eyebrow"),
      title: t("philosophy.title"),
      items: philosophyKeys.map((key) => t(key)),
    },
    contact: {
      eyebrow: t("contact.eyebrow"),
      title: t("contact.title"),
      description: t("contact.description"),
      basedIn: t("contact.basedIn"),
      availabilityCard: t("contact.availabilityCard"),
      quickLabel: t("contact.quickLabel"),
      quickText: t("contact.quickText"),
      links: contactLinkConfigs.map((item) => ({
        label: t(`contact.links.${item.id}.label`),
        icon: item.icon,
        href: item.href,
        value: item.value,
        note: t(`contact.links.${item.id}.note`),
      })),
    },
    footer: {
      builtWith: t("footer.builtWith"),
      email: t("footer.email"),
    },
  };
}

export { personalInfo, locales, defaultLocale, isLocale, type Locale };
