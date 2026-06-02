import type { CSSProperties, ReactNode } from "react";

type TronCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
  corners?: boolean;
  scan?: boolean;
};

export function TronCard({ children, className = "", style, glow = false, corners = true, scan = false }: TronCardProps) {
  const base = "tron-card relative";
  const glowClass = glow ? " tron-glow" : "";
  const scanClass = scan ? " tron-card-scan" : "";

  return (
    <div className={`${base}${glowClass}${scanClass} ${className}`} style={style}>
      {corners && (
        <>
          <span aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-cyan-400/60" />
          <span aria-hidden className="pointer-events-none absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 border-cyan-400/60" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-cyan-400/60" />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-cyan-400/60" />
        </>
      )}
      {children}
    </div>
  );
}
