import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSticky } from "@/components/sections/ExperienceSticky";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { defaultLocale, isLocale, type Locale } from "@/data/portfolio";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawLang = resolvedSearchParams.lang;
  const langValue = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const locale: Locale = langValue && isLocale(langValue) ? langValue : defaultLocale;

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <ExperienceSticky locale={locale} />
      <Projects locale={locale} />
      <Skills locale={locale} />
      <Education locale={locale} />
      <Philosophy locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
