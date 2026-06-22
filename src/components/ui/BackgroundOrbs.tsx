export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <div className="grid-overlay absolute inset-0 opacity-50" />

      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: "perspective(600px) rotateX(58deg)",
          transformOrigin: "bottom center",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
        }}
      />

      {/* Scanline */}
      <div
        className="animate-scanline absolute left-0 right-0 h-[2px] top-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.25) 25%, rgba(139,92,246,0.55) 50%, rgba(139,92,246,0.25) 75%, transparent 100%)",
        }}
      />

      {/* Nebula glow orbs */}
      <div className="absolute left-[4%]  top-[8%]  h-96 w-96 rounded-full bg-violet-500/6 blur-[120px]" />
      <div className="absolute right-[4%] top-[15%] h-80 w-80 rounded-full bg-cyan-500/5  blur-[100px]" />
      <div className="absolute bottom-[5%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[110px]" />

      {/* Vertical light beams */}
      <div className="absolute left-[22%] top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-400/6 to-transparent" />
      <div className="absolute right-[28%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/5  to-transparent" />
    </div>
  );
}
