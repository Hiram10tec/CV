"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxDeg?: number;
};

export function TiltCard({ children, className, style, maxDeg = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "none";
    el.style.transform = `perspective(900px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) translateZ(6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.23,1,0.32,1)";
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ willChange: "transform", transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}
