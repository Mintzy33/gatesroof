#!/usr/bin/env node
/**
 * check-city-links.mjs — READ-ONLY guard. No network, no DB, no writes.
 *
 * lib/city-links.ts hardcodes which cities have an /areas hub and which have a
 * /best-roofer landing page, because the resolver runs in client components that
 * cannot read the filesystem. Hardcoded lists drift; this asserts them against the
 * actual directories on disk.
 *
 * The drift it exists to catch is the bug that shipped: a city listed as having an
 * /areas hub when the directory does not exist sends every link to a 404. On
 * 2026-08-31 a production crawl found dead /areas/ links on 36 indexed pages.
 *
 * Run: node scripts/check-city-links.mjs   (also `npm run check:city-links`)
 * Exit 0 = in sync. Exit 1 = drift, with the exact slugs to fix.
 */
import { readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "lib/city-links.ts"), "utf8");

function declaredSet(name) {
  const m = src.match(new RegExp(`export const ${name}[^=]*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)`));
  if (!m) throw new Error(`could not parse ${name} out of lib/city-links.ts`);
  return new Set([...m[1].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1]));
}

const dirs = (p, pred) =>
  new Set(readdirSync(join(root, p), { withFileTypes: true })
    .filter((d) => d.isDirectory() && pred(d.name))
    .map((d) => d.name));

const declaredHubs = declaredSet("AREA_HUB_SLUGS");
const declaredBest = declaredSet("BEST_ROOFER_SLUGS");

const realHubs = dirs("app/areas", (n) => !n.startsWith("[") && !n.startsWith("."));
const realBest = new Set(
  [...dirs("app", (n) => n.startsWith("best-roofer-"))].map((n) => n.replace("best-roofer-", ""))
);

const problems = [];
const diff = (label, declared, real, fix) => {
  for (const s of declared) if (!real.has(s)) problems.push(`${label}: "${s}" is declared but ${fix} does not exist — every link to it 404s`);
  for (const s of real) if (!declared.has(s)) problems.push(`${label}: ${fix} exists but "${s}" is not declared — the page gets no internal links`);
};

diff("AREA_HUB_SLUGS", declaredHubs, realHubs, "app/areas/<slug>/");
// A city may legitimately have BOTH a hub and a best-roofer page; only flag best-roofer
// slugs that are declared without the directory, and undeclared ones that have no hub.
for (const s of declaredBest) {
  if (!realBest.has(s)) problems.push(`BEST_ROOFER_SLUGS: "${s}" is declared but app/best-roofer-${s}/ does not exist — every link to it 404s`);
}
for (const s of realBest) {
  if (!declaredBest.has(s) && !declaredHubs.has(s)) {
    problems.push(`BEST_ROOFER_SLUGS: app/best-roofer-${s}/ exists and the city has no hub, but "${s}" is not declared — cityHref() will send it to a service page instead`);
  }
}

if (problems.length) {
  console.error("city-link drift detected:\n");
  for (const p of problems) console.error("  - " + p);
  console.error("\nFix lib/city-links.ts (or add the missing page), then re-run.");
  process.exit(1);
}
console.log(`city-links in sync — ${realHubs.size} area hubs, ${realBest.size} best-roofer pages.`);
