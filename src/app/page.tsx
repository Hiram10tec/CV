import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { TronCursor } from "@/components/ui/TronCursor";
import { BackToTop } from "@/components/ui/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSticky } from "@/components/sections/ExperienceSticky";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { defaultLocale, getPortfolioContent, isLocale, locales, personalInfo, type Locale } from "@/data/portfolio";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawLang = resolvedSearchParams.lang;
  const langValue = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const locale: Locale = langValue && isLocale(langValue) ? langValue : defaultLocale;
  const copy = getPortfolioContent(locale);

  return (
    <main className="relative overflow-x-hidden">
      <TronCursor />
      <BackToTop />
      <ScrollProgress />
      <Navbar locale={locale} locales={locales} nav={copy.nav} name={personalInfo.name} />
      <Hero copy={{ hero: copy.hero, stats: copy.stats }} personalInfo={personalInfo} locale={locale} />
      <About about={copy.about} personalInfo={personalInfo} />
      <ExperienceSticky timeline={copy.timeline} />
      <Projects projects={copy.projects} />
      <Skills skills={copy.skills} />
      <Education education={copy.education} />
      <Achievements achievements={copy.achievements} />
      <Philosophy philosophy={copy.philosophy} />
      <Contact contact={copy.contact} location={copy.hero.location} />
      <Footer footer={copy.footer} personalInfo={personalInfo} />
    </main>
  );
}
