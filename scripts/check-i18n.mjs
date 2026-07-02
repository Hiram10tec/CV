// Smoke check: the three locale files must have identical key trees.
// Run: npm run check:i18n
import { readFileSync } from "node:fs";

const locales = ["en", "es", "de"];

function keyPaths(obj, prefix = "") {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v)
      ? keyPaths(v, `${prefix}${k}.`)
      : [`${prefix}${k}`],
  );
}

const trees = Object.fromEntries(
  locales.map((loc) => [
    loc,
    new Set(keyPaths(JSON.parse(readFileSync(new URL(`../src/messages/${loc}.json`, import.meta.url), "utf8")))),
  ]),
);

let failed = false;
const base = trees.en;
for (const loc of ["es", "de"]) {
  const missing = [...base].filter((k) => !trees[loc].has(k));
  const extra = [...trees[loc]].filter((k) => !base.has(k));
  if (missing.length) { failed = true; console.error(`${loc}: missing keys:\n  ${missing.join("\n  ")}`); }
  if (extra.length) { failed = true; console.error(`${loc}: extra keys:\n  ${extra.join("\n  ")}`); }
}

if (failed) process.exit(1);
console.log(`i18n ok — ${base.size} keys consistent across ${locales.join(", ")}`);
