// Generates lib/page-dates.json: a map of route -> last-modified date (YYYY-MM-DD),
// derived from git history. Prefers the page's content.tsx (true content edits) over
// page.tsx (which can change for infra reasons). Run via `npm run update:dates`.
// Committed to the repo so it doesn't depend on git history being available at build time.
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const APP = "app";
const routes = {};

function gitDate(file) {
  try {
    return execSync(`git log -1 --format=%cs -- "${file}"`, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      if (entry.startsWith("[")) continue; // skip dynamic routes
      walk(p);
    } else if (entry === "page.tsx") {
      const route = dir.slice(APP.length) || "/"; // app -> "/", app/areas/denver -> /areas/denver
      const content = join(dir, "content.tsx");
      const src = existsSync(content) ? content : p;
      const date = gitDate(src) || gitDate(p);
      if (date) routes[route] = date;
    }
  }
}

walk(APP);
const sorted = Object.fromEntries(Object.entries(routes).sort());
writeFileSync("lib/page-dates.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(`wrote lib/page-dates.json with ${Object.keys(sorted).length} routes`);
