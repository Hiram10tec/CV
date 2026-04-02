import { getPortfolioContent, personalInfo, type Locale } from "@/data/portfolio";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = getPortfolioContent(locale);

  return (
    <footer className="border-t border-white/6 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-base text-slate-400 md:flex-row md:text-left">
        <p>
          © 2026 {personalInfo.fullName}. {copy.footer.builtWith}
        </p>
        <div className="flex items-center gap-5">
          <a className="transition hover:text-white" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition hover:text-white" href={`mailto:${personalInfo.email}`}>
            {copy.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
