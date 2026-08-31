import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { blogPosts } from "./blog/posts";
import { cities as allCities, services as allServices } from "../lib/service-areas-data";
import { neighborhoods as allNeighborhoods } from "../lib/neighborhoods";
import { shouldIndexServiceCity } from "../lib/seo-config";

const BASE = "https://www.gatesroof.com";

// All area pages (add new cities here and they auto-appear in sitemap)
const areas = [
  "lakewood",
  "denver",
  "aurora",
  "arvada",
  "westminster",
  "thornton",
  "centennial",
  "littleton",
  "englewood",
  "wheat-ridge",
  "golden",
  "broomfield",
  "highlands-ranch",
  "parker",
  "castle-rock",
  "commerce-city",
  "conifer",
  "edgewater",
  "federal-heights",
  "northglenn",
  "brighton",
  "superior",
  "lone-tree",
  "morrison",
  "evergreen",
  "colorado-springs",
  "fort-collins",
];

// Service parent pages (the main /services/X pages)
// Standalone /services/<slug> pages. NOTE: these are DIRECTORY slugs and are deliberately not
// the same vocabulary as `services[]` in lib/service-areas-data.ts, which drives the per-city
// /services/<slug>/<city> routes below ("siding" vs "siding-exterior"). Do not unify them
// without changing the routes — mixing the two is what shipped 48 dead links (fixed 2026-08-31).
const serviceParents = [
  "roof-replacement",
  "storm-hail-damage",
  "roof-repair",
  "siding-exterior",
  "gutters-guards",
  "insurance-claims",
  // Added 2026-08-31 — live pages on disk that had never been listed (all verified 200).
  "drone-inspections",
  "paint",
  "windows",
];

// Standalone landing pages
const landingPages = [
  "insurance-claims",
  "impact-resistant-shingles",
  "why-gates-enterprises",
  "insurance-restoration",
  "emergency-roofing",
];

// Tool pages
const toolPages = [
  "tools",
  "tools/roof-age-calculator",
  // repair-cost-estimator removed 2026-08-31: it is a 307 redirect stub with zero inbound
  // links, so it spent crawl budget to teach Google a redirect. Its live successor is below.
  "tools/insurance-coverage-estimator",
  "tools/hail-risk-check",
];

// Static utility pages
// Added 2026-08-31 (all verified HTTP 200 before listing): areas, faq, how-it-works, referral.
// /how-it-works was the one genuinely invisible page on the site — absent from the sitemap AND
// carrying zero inbound links across a 326-page crawl.
const utilityPages = ["about", "about/alex-chicilo", "about/gates-enterprises", "areas", "blog", "contact", "faq", "gallery", "how-it-works", "referral", "reviews", "services", "financing", "warranty", "compare", "compare/storm-chasers"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  // Homepage
  const home: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Service parent pages
  const servicePages: MetadataRoute.Sitemap = serviceParents.map((s) => ({
    url: `${BASE}/services/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s === "roof-replacement" || s === "storm-hail-damage" || s === "insurance-claims" ? 0.9 : 0.8,
  }));

  // Area/city pages
  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${BASE}/areas/${a}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: ["lakewood", "denver", "aurora", "arvada"].includes(a) ? 0.8 : 0.7,
  }));

  // Landing pages
  const landing: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${BASE}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Utility pages
  const utility: MetadataRoute.Sitemap = utilityPages.map((p) => ({
    url: `${BASE}/${p}`,
    lastModified: now,
    changeFrequency: p === "blog" ? ("weekly" as const) : ("monthly" as const),
    priority: p === "contact" ? 0.8 : 0.7,
  }));

  // Blog posts (auto-generated from posts.ts — never miss a post again).
  // Deduped by slug: two slugs are currently defined twice in posts.ts
  // (how-to-choose-roofing-contractor-colorado, how-to-file-hail-damage-insurance-claim-colorado),
  // which listed the same URL twice in the sitemap. The underlying duplicate posts still need
  // resolving in posts.ts — only one body of each pair is reachable — but the sitemap must never
  // advertise one URL twice regardless. Keeps the FIRST occurrence, which is the one the route
  // actually serves.
  const seenSlugs = new Set<string>();
  const blog: MetadataRoute.Sitemap = blogPosts
    .filter((post) => {
      if (seenSlugs.has(post.slug)) return false;
      seenSlugs.add(post.slug);
      return true;
    })
    .map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.updatedDate || post.publishDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Service × City programmatic pages (only indexed combos)
  const serviceCityPages: MetadataRoute.Sitemap = allServices.flatMap((svc) =>
    allCities
      .filter((city) => shouldIndexServiceCity(svc.slug, city.slug))
      .map((city) => ({
        url: `${BASE}/services/${svc.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  // Tool pages
  const tools: MetadataRoute.Sitemap = toolPages.map((p) => ({
    url: `${BASE}/${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "tools" ? 0.8 : 0.7,
  }));

  // Programmatic landing pages (best-roofer-*, roofing-companies-*) — filesystem-derived
  // so the sitemap never drifts from the actual pages on disk.
  const programmaticSlugs = readdirSync(join(process.cwd(), "app"), { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        (d.name.startsWith("best-roofer-") || d.name.startsWith("roofing-companies-"))
    )
    .map((d) => d.name)
    .sort();
  const programmatic: MetadataRoute.Sitemap = programmaticSlugs.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Neighborhood pages are noindexed — excluded from sitemap
  // They still exist and pass link equity via follow directive

  return [...home, ...landing, ...servicePages, ...areaPages, ...utility, ...tools, ...blog, ...serviceCityPages, ...programmatic];
}
