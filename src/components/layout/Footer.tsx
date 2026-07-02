import type { PortfolioContent } from "@/data/portfolio";

type FooterProps = {
  footer: PortfolioContent["footer"];
  personalInfo: {
    email: string;
    fullName: string;
    linkedin: string;
  };
};

export function Footer({ footer, personalInfo }: FooterProps) {
  return (
    <footer className="border-t border-cyan-400/12 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-tron text-[0.65rem] uppercase tracking-[0.2em] text-tide">
          © 2026{" "}
          <span className="text-cyan-400/70">{personalInfo.fullName}</span>
          {" · "}
          {footer.builtWith}
        </p>

        <div className="flex items-center gap-6">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/30" />
          <a
            className="font-tron text-[0.65rem] uppercase tracking-[0.2em] text-tide transition hover:text-cyan-300"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-tron text-[0.65rem] uppercase tracking-[0.2em] text-tide transition hover:text-cyan-300"
            href={`mailto:${personalInfo.email}`}
          >
            {footer.email}
          </a>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/30" />
        </div>
      </div>
    </footer>
  );
}
