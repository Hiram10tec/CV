"use client";

import { useEffect, useRef } from "react";

export function TronCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const onMove = (e: MouseEvent) => {
      ring.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    };
    const onDown = () => { ring.style.scale = "0.7"; };
    const onUp = () => { ring.style.scale = "1"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border border-cyan-400/70"
        style={{ boxShadow: "0 0 6px rgba(0,212,255,0.5)", transition: "transform 0.05s linear, scale 0.1s ease" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1 w-1 rounded-full bg-cyan-400"
        style={{ boxShadow: "0 0 4px rgba(0,212,255,0.9)", transition: "transform 0.02s linear" }}
      />
    </>
  );
}
