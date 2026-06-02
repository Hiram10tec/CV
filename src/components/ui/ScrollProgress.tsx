"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00d4ff 0%, #00eeff 60%, #00aadd 100%)",
        boxShadow: "0 0 10px rgba(0,212,255,0.9), 0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)",
      }}
    />
  );
}
