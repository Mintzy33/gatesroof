import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";
import { cities as allCities, services as allServices } from "../lib/service-areas-data";

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
];

// Service parent pages (the main /services/X pages)
const serviceParents = [
  "roof-replacement",
  "storm-hail-damage",
  "roof-repair",
  "siding-exterior",
  "gutters-guards",
  "insurance-claims",
];

// Standalone landing pages
const landingPages = ["insurance-claims", "impact-resistant-shingles"];

// Static utility pages
const utilityPages = ["about", "blog", "contact", "gallery", "reviews"];

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

  // Blog posts (auto-generated from posts.ts — never miss a post again)
  const blog: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.publishDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service × City programmatic pages (400+)
  const serviceCityPages: MetadataRoute.Sitemap = allServices.flatMap((svc) =>
    allCities.map((city) => ({
      url: `${BASE}/services/${svc.slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...home, ...landing, ...servicePages, ...areaPages, ...utility, ...blog, ...serviceCityPages];
}
