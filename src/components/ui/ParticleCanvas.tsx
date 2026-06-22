"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  r: number; g: number; b: number;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const palettes = [
      { r: 139, g: 92,  b: 246 }, // violet
      { r: 6,   g: 182, b: 212 }, // cyan
      { r: 100, g: 130, b: 255 }, // indigo
    ];

    const COUNT = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 12000));
    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const c = palettes[Math.floor(Math.random() * palettes.length)];
      return {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.4,
        ...c,
      };
    });

    const LINK_DIST = 130;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = 0.18 * (1 - dist / LINK_DIST);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${a.r},${a.g},${a.b},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},0.65)`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
    />
  );
}
