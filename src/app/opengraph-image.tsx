import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const bgBuffer = readFileSync(join(process.cwd(), "public", "images", "og-background.png"));
  const bgBase64 = `data:image/png;base64,${bgBuffer.toString("base64")}`;

  // Fetch Inter Bold as WOFF (Satori supports WOFF/TTF/OTF but not WOFF2)
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)" } }
  ).then((r) => r.text());
  const fontUrl = css.match(/url\(([^)]+)\)/)?.[1] ?? "";
  const fontData = fontUrl ? await fetch(fontUrl).then((r) => r.arrayBuffer()) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        {/* Background */}
        <img
          src={bgBase64}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,12,20,0.85) 0%, rgba(0,12,20,0.55) 50%, rgba(0,12,20,0.82) 100%)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent lines top/bottom */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff 30%, #00d4ff 70%, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #00d4ff 30%, #00d4ff 70%, transparent)" }} />

        {/* HUD corners */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 36, height: 36, borderTop: "2px solid rgba(0,212,255,0.65)", borderLeft: "2px solid rgba(0,212,255,0.65)" }} />
        <div style={{ position: "absolute", top: 28, right: 28, width: 36, height: 36, borderTop: "2px solid rgba(0,212,255,0.65)", borderRight: "2px solid rgba(0,212,255,0.65)" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 36, height: 36, borderBottom: "2px solid rgba(0,212,255,0.65)", borderLeft: "2px solid rgba(0,212,255,0.65)" }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 36, height: 36, borderBottom: "2px solid rgba(0,212,255,0.65)", borderRight: "2px solid rgba(0,212,255,0.65)" }} />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "rgba(0,212,255,0.65)",
              fontSize: 13,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            <span>▸</span>
            <span>PORTFOLIO · 2026</span>
            <span>◂</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textShadow: "0 0 50px rgba(0,212,255,0.55), 0 0 100px rgba(0,212,255,0.2)",
              lineHeight: 1,
              marginBottom: 18,
            }}
          >
            HIRAM MENDOZA
          </div>

          {/* Cyan divider */}
          <div
            style={{
              width: 200,
              height: 2,
              background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
              marginBottom: 18,
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: "#ffffff",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 30,
              textAlign: "center",
            }}
          >
            Computer Engineering Graduate &amp; Full Stack Developer
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
            {["React", "Node.js", "Swift", "Clean Architecture", "iOS", "Python", "JavaScript"].map((tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid rgba(0,212,255,0.3)",
                  background: "rgba(0,212,255,0.08)",
                  color: "#ffffff",
                  padding: "5px 14px",
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* GitHub */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 16,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            github.com/Hiram10tec
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData ? [{ name: "Inter", data: fontData, weight: 700 }] : [],
    }
  );
}
