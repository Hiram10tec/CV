"use client";

import { useEffect, useRef } from "react";
import { animate, createMotionPath, createTimeline } from "animejs";
import type { PortfolioContent } from "@/data/portfolio";

type ProjectId = PortfolioContent["projects"]["items"][number]["id"];

type ProjectSignalOverlayProps = {
  projectId: ProjectId;
};

const patterns: Record<
  ProjectId,
  {
    accent: string;
    secondary: string;
    lines: Array<{ d: string; delay: number; width?: number }>;
    nodes: Array<{ cx: number; cy: number; r: number; delay: number }>;
    scanners: Array<{ x: number; y: number; width: number; delay: number }>;
  }
> = {
  altertex: {
    accent: "#00d4ff",
    secondary: "#00ffee",
    lines: [
      { d: "M218 424H430C470 424 470 338 510 338H704", delay: 0, width: 7 },
      { d: "M430 512H588C628 512 628 432 668 432H884", delay: 140, width: 6 },
      { d: "M512 604H824", delay: 280, width: 5 },
      { d: "M336 338V604", delay: 420, width: 4 },
    ],
    nodes: [
      { cx: 218, cy: 424, r: 10, delay: 0 },
      { cx: 704, cy: 338, r: 11, delay: 180 },
      { cx: 884, cy: 432, r: 11, delay: 320 },
      { cx: 824, cy: 604, r: 9, delay: 440 },
      { cx: 336, cy: 338, r: 8, delay: 540 },
    ],
    scanners: [
      { x: 150, y: 318, width: 420, delay: 0 },
      { x: 494, y: 586, width: 350, delay: 420 },
    ],
  },
  wushu: {
    accent: "#00d4ff",
    secondary: "#ff8c00",
    lines: [
      { d: "M244 300V392C244 422 290 422 318 452L390 528", delay: 0, width: 7 },
      { d: "M520 226H836C874 226 874 456 912 456H1016", delay: 160, width: 6 },
      { d: "M576 536H752", delay: 320, width: 5 },
      { d: "M390 528C484 618 722 618 816 528", delay: 460, width: 4 },
    ],
    nodes: [
      { cx: 244, cy: 300, r: 12, delay: 0 },
      { cx: 390, cy: 528, r: 10, delay: 210 },
      { cx: 1016, cy: 456, r: 12, delay: 380 },
      { cx: 752, cy: 536, r: 9, delay: 500 },
      { cx: 816, cy: 528, r: 9, delay: 620 },
    ],
    scanners: [
      { x: 500, y: 206, width: 360, delay: 80 },
      { x: 540, y: 516, width: 250, delay: 520 },
    ],
  },
  workflow: {
    accent: "#00d4ff",
    secondary: "#00aadd",
    lines: [
      { d: "M240 400H430", delay: 0, width: 7 },
      { d: "M240 270V206H430", delay: 160, width: 5 },
      { d: "M240 530V592H430", delay: 320, width: 5 },
      { d: "M880 206V592", delay: 480, width: 6 },
      { d: "M430 206C560 144 750 144 880 206", delay: 620, width: 4 },
      { d: "M430 592C560 654 750 654 880 592", delay: 760, width: 4 },
    ],
    nodes: [
      { cx: 240, cy: 400, r: 13, delay: 0 },
      { cx: 430, cy: 206, r: 10, delay: 220 },
      { cx: 430, cy: 592, r: 10, delay: 380 },
      { cx: 880, cy: 400, r: 11, delay: 540 },
      { cx: 880, cy: 206, r: 9, delay: 680 },
      { cx: 880, cy: 592, r: 9, delay: 820 },
    ],
    scanners: [
      { x: 224, y: 382, width: 245, delay: 0 },
      { x: 836, y: 188, width: 86, delay: 600 },
      { x: 836, y: 574, width: 86, delay: 820 },
    ],
  },
  wc2026: {
    accent: "#8b5cf6",
    secondary: "#06b6d4",
    lines: [
      { d: "M200 400H400C440 400 440 300 480 300H700", delay: 0, width: 7 },
      { d: "M350 500H550C590 500 590 420 630 420H830", delay: 180, width: 6 },
      { d: "M480 300V560", delay: 320, width: 4 },
    ],
    nodes: [
      { cx: 200, cy: 400, r: 10, delay: 0 },
      { cx: 700, cy: 300, r: 11, delay: 200 },
      { cx: 830, cy: 420, r: 11, delay: 360 },
      { cx: 480, cy: 560, r: 9, delay: 480 },
    ],
    scanners: [
      { x: 180, y: 382, width: 380, delay: 0 },
      { x: 580, y: 402, width: 280, delay: 400 },
    ],
  },
  defungi: {
    accent: "#10b981",
    secondary: "#8b5cf6",
    lines: [
      { d: "M300 400C300 320 400 260 512 260C624 260 724 320 724 400C724 480 624 540 512 540C400 540 300 480 300 400", delay: 0, width: 6 },
      { d: "M512 260V160", delay: 200, width: 5 },
      { d: "M724 400H860", delay: 360, width: 5 },
      { d: "M512 540V640", delay: 520, width: 4 },
    ],
    nodes: [
      { cx: 512, cy: 400, r: 13, delay: 0 },
      { cx: 512, cy: 160, r: 10, delay: 240 },
      { cx: 860, cy: 400, r: 10, delay: 400 },
      { cx: 512, cy: 640, r: 9, delay: 560 },
      { cx: 300, cy: 400, r: 9, delay: 680 },
    ],
    scanners: [
      { x: 466, y: 142, width: 92, delay: 0 },
      { x: 814, y: 382, width: 84, delay: 480 },
    ],
  },
};

export function ProjectSignalOverlay({ projectId }: ProjectSignalOverlayProps) {
  const overlayRef = useRef<SVGSVGElement | null>(null);
  const pattern = patterns[projectId];

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const lines = overlay.querySelectorAll<SVGPathElement>("[data-signal-line]");
    const streams = overlay.querySelectorAll<SVGPathElement>("[data-signal-stream]");
    const nodes = overlay.querySelectorAll<SVGCircleElement>("[data-signal-node]");
    const rings = overlay.querySelectorAll<SVGCircleElement>("[data-signal-ring]");
    const packets = overlay.querySelectorAll<SVGCircleElement>("[data-signal-packet]");
    const scanners = overlay.querySelectorAll<SVGRectElement>("[data-signal-scanner]");

    lines.forEach((line) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
    });

    streams.forEach((line) => {
      line.style.strokeDasharray = "18 28";
      line.style.strokeDashoffset = "80";
    });

    const timeline = createTimeline({
      defaults: {
        ease: "inOutSine",
        loop: true,
        loopDelay: 900,
      },
    });

    timeline
      .add(lines, {
        strokeDashoffset: 0,
        opacity: [0, 0.92],
        duration: 1200,
        delay: (_line: SVGPathElement, index: number) => pattern.lines[index]?.delay ?? 0,
      })
      .add(
        streams,
        {
          opacity: [0, 0.62],
          strokeDashoffset: [80, 0],
          duration: 900,
          delay: (_line: SVGPathElement, index: number) => pattern.lines[index]?.delay ?? 0,
        },
        160
      )
      .add(
        nodes,
        {
          opacity: [0, 1],
          scale: [0.35, 1],
          duration: 620,
          delay: (_node: SVGCircleElement, index: number) => pattern.nodes[index]?.delay ?? 0,
        },
        120
      )
      .add(
        rings,
        {
          opacity: [0, 0.58],
          scale: [0.45, 1],
          duration: 700,
          delay: (_ring: SVGCircleElement, index: number) => pattern.nodes[index]?.delay ?? 0,
        },
        150
      );

    const streamLoops = Array.from(streams).map((stream, index) =>
      animate(stream, {
        strokeDashoffset: [0, -138],
        duration: 2200 + index * 120,
        delay: pattern.lines[index]?.delay ?? 0,
        loop: true,
        ease: "linear",
      })
    );

    const pulses = Array.from(rings).map((ring, index) =>
      animate(ring, {
        opacity: [0.18, 0.7, 0.18],
        scale: [0.92, 1.52, 0.92],
        duration: 1900,
        delay: pattern.nodes[index]?.delay ?? 0,
        loop: true,
        ease: "inOutSine",
      })
    );

    const nodeGlints = Array.from(nodes).map((node, index) =>
      animate(node, {
        opacity: [0.65, 1, 0.65],
        scale: [0.9, 1.18, 0.9],
        duration: 1400,
        delay: pattern.nodes[index]?.delay ?? 0,
        loop: true,
        ease: "inOutSine",
      })
    );

    const packetLoops = Array.from(packets).map((packet, index) => {
      const line = lines[index % lines.length];
      const motionPath = line ? createMotionPath(line) : null;

      return animate(packet, {
        ...(motionPath ?? {}),
        opacity: [0, 1, 0],
        scale: [0.6, 1.25, 0.6],
        duration: 1800 + (index % 3) * 180,
        delay: (pattern.lines[index % pattern.lines.length]?.delay ?? 0) + 300,
        loop: true,
        loopDelay: 600,
        ease: "inOutSine",
      });
    });

    const scannerLoops = Array.from(scanners).map((scanner, index) =>
      animate(scanner, {
        x: [
          pattern.scanners[index]?.x ?? 0,
          (pattern.scanners[index]?.x ?? 0) + (pattern.scanners[index]?.width ?? 120),
        ],
        opacity: [0, 0.46, 0],
        duration: 1700,
        delay: pattern.scanners[index]?.delay ?? 0,
        loop: true,
        loopDelay: 1400,
        ease: "inOutQuad",
      })
    );

    return () => {
      timeline.revert();
      streamLoops.forEach((stream) => stream.revert());
      pulses.forEach((pulse) => pulse.revert());
      nodeGlints.forEach((glint) => glint.revert());
      packetLoops.forEach((packet) => packet.revert());
      scannerLoops.forEach((scanner) => scanner.revert());
    };
  }, [pattern]);

  return (
    <svg
      ref={overlayRef}
      viewBox="0 0 1200 800"
      className="pointer-events-none absolute inset-0 h-full w-full mix-blend-screen"
      aria-hidden
    >
      <defs>
        <filter id={`signal-glow-${projectId}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={`signal-gradient-${projectId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={pattern.secondary} stopOpacity="0" />
          <stop offset="45%" stopColor={pattern.secondary} stopOpacity="0.9" />
          <stop offset="100%" stopColor={pattern.accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity="0.28">
        {pattern.scanners.map((scanner) => (
          <rect
            key={`${scanner.x}-${scanner.y}`}
            data-signal-scanner
            x={scanner.x}
            y={scanner.y}
            width="82"
            height="10"
            rx="5"
            fill={`url(#signal-gradient-${projectId})`}
            opacity="0"
          />
        ))}
      </g>
      <g opacity="0.36">
        {pattern.lines.map((line) => (
          <path
            key={`bed-${line.d}`}
            d={line.d}
            stroke={pattern.accent}
            strokeWidth={(line.width ?? 6) + 10}
            strokeLinecap="round"
            opacity="0.08"
            fill="none"
          />
        ))}
      </g>
      <g filter={`url(#signal-glow-${projectId})`}>
        {pattern.lines.map((line) => (
          <path
            key={line.d}
            data-signal-line
            d={line.d}
            stroke={pattern.accent}
            strokeWidth={line.width ?? 6}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
            fill="none"
          />
        ))}
        {pattern.lines.map((line) => (
          <path
            key={`stream-${line.d}`}
            data-signal-stream
            d={line.d}
            stroke={pattern.secondary}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
            fill="none"
          />
        ))}
        {pattern.nodes.map((node) => (
          <circle
            key={`ring-${node.cx}-${node.cy}`}
            data-signal-ring
            cx={node.cx}
            cy={node.cy}
            r={node.r + 10}
            fill="none"
            stroke={pattern.secondary}
            strokeWidth="3"
            opacity="0"
          />
        ))}
        {pattern.nodes.map((node) => (
          <circle
            key={`${node.cx}-${node.cy}`}
            data-signal-node
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={pattern.accent}
            opacity="0"
          />
        ))}
        {pattern.lines.map((line, index) => (
          <circle
            key={`packet-${line.d}`}
            data-signal-packet
            r={index % 2 === 0 ? 8 : 6}
            fill={index % 2 === 0 ? pattern.secondary : pattern.accent}
            opacity="0"
          />
        ))}
      </g>
    </svg>
  );
}
