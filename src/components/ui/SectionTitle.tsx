type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/80">{eyebrow}</p>
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-300 md:text-xl">{description}</p> : null}
    </div>
  );
}
