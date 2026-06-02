type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const wrapper = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={wrapper}>
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400/80">
        <span className="text-cyan-400/50">▸</span>
        {eyebrow}
        <span className="text-cyan-400/50">◂</span>
      </p>
      <h2
        className="font-tron text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
        style={{ textShadow: "0 0 30px rgba(0,212,255,0.15)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[#8ab8cc] md:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
