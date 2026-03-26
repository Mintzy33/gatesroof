#!/usr/bin/env node
/**
 * SEO SERP Snippet Overhaul Script
 * Rewrites title tags and meta descriptions for maximum CTR
 * Only modifies metadata — no content or layout changes
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const changes = [];

function editFile(relPath, replacements) {
  const fullPath = resolve(ROOT, relPath);
  let content = readFileSync(fullPath, 'utf-8');
  let original = content;
  
  for (const [oldStr, newStr] of replacements) {
    if (!content.includes(oldStr)) {
      console.warn(`⚠️  Pattern not found in ${relPath}: "${oldStr.substring(0, 60)}..."`);
      continue;
    }
    content = content.replace(oldStr, newStr);
  }
  
  if (content !== original) {
    writeFileSync(fullPath, content, 'utf-8');
    console.log(`✅ ${relPath}`);
  } else {
    console.log(`⏭️  No changes: ${relPath}`);
  }
}

// ============================================================
// 1. LAYOUT.TSX (Homepage / Root metadata)
// ============================================================
editFile('app/layout.tsx', [
  // Title
  [
    'title: "Lakewood Roofing Contractor | Gates Enterprises LLC | Colorado\'s Most Certified Roofer"',
    'title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs"'
  ],
  // Description
  [
    'description: "Gates Enterprises is Denver\'s quadruple manufacturer-certified roofing company. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master. 305+ reviews, 4.8 stars. Free inspections. (720) 766-3377."',
    'description: "Colorado\'s only 4x manufacturer certified roofer. 7,200+ roofs completed, 4.8★ from 305 reviews. GAF Master Elite certified. Free inspections. (720) 766-3377"'
  ],
  // Canonical — add trailing slash
  [
    'alternates: { canonical: "https://www.gatesroof.com" }',
    'alternates: { canonical: "https://www.gatesroof.com/" }'
  ],
  // OG title
  [
    'title: "Gates Enterprises | Denver\'s Quadruple Certified Roofing Company"',
    'title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs"'
  ],
  // OG description
  [
    `description: "Gates Enterprises is Denver's quadruple manufacturer-certified roofing company. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master. 305+ reviews, 4.8 stars. Free inspections. (720) 766-3377.",`,
    `description: "Colorado's only 4x manufacturer certified roofer. 7,200+ roofs completed, 4.8★ from 305 reviews. GAF Master Elite certified. Free inspections. (720) 766-3377",`
  ],
  // Twitter title
  [
    'title: "Gates Enterprises | Denver\'s Quadruple Certified Roofing Company",',
    'title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs",'
  ],
  // Twitter description
  [
    'description: "Gates Enterprises is Denver\'s quadruple manufacturer-certified roofing company. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master. 305+ reviews, 4.8 stars.",',
    'description: "Colorado\'s only 4x manufacturer certified roofer. 7,200+ roofs completed, 4.8★ from 305 reviews. Free inspections. (720) 766-3377",'
  ],
]);

// ============================================================
// 2. AREA PAGES — CTR-optimized titles & descriptions
// ============================================================
const areaPages = {
  'arvada': {
    oldTitle: 'Arvada Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Arvada CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Arvada's top-rated roofer. 305 Google reviews, 4.8 stars, quadruple certified. Free storm damage inspections for Arvada homeowners. Call (720) 766-3377.",
    newDesc: "Arvada's #1 certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more certs. Free storm damage inspections. Call (720) 766-3377",
  },
  'aurora': {
    oldTitle: '#1 Rated Aurora CO Roofer | Free Inspections | Gates Enterprises',
    newTitle: '#1 Aurora CO Roofer | 4x Certified ★ Free Inspection',
    oldDesc: "Aurora trusts Gates Enterprises for roofing. 305 reviews, 4.8 stars, 4x manufacturer certified. Book your free roof inspection today. (720) 766-3377.",
    newDesc: "Aurora's most certified roofing contractor. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free inspections. Call (720) 766-3377 today",
  },
  'brighton': {
    oldTitle: 'Brighton Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Brighton CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Brighton's 4x certified roofer with 305 Google reviews and 4.8 stars. Free inspections, storm damage experts. Call Gates Enterprises at (720) 766-3377.",
    newDesc: "Brighton's trusted 4x certified roofer. 7,200+ roofs completed, 4.8★ from 305 reviews. Free storm damage inspections. Call (720) 766-3377 today",
  },
  'broomfield': {
    oldTitle: 'Trusted Broomfield Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Broomfield CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Broomfield homeowners trust Gates Enterprises. 305 reviews, 4.8 stars, quadruple certified. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Broomfield's most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite certified. Free storm inspections. Call (720) 766-3377 today",
  },
  'castle-rock': {
    oldTitle: 'Castle Rock Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Castle Rock CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Castle Rock's most trusted roofer. 305 Google reviews, 4.8 stars, 4x certified. Free roof inspections for storm damage. Call (720) 766-3377 today.",
    newDesc: "Castle Rock's top-rated roofer. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free hail damage inspections. Call (720) 766-3377",
  },
  'centennial': {
    oldTitle: 'Centennial CO Roofing Contractor | Roof Replacement, Hail Repair | Gates Enterprises',
    newTitle: 'Centennial CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Top rated roofer in Centennial, Colorado. 305 Google reviews, 4.8 stars, quadruple certified. Free hail damage inspections for Centennial homeowners. (720) 766-3377.",
    newDesc: "Centennial's #1 certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more. Free hail damage inspections. Call (720) 766-3377",
  },
  'commerce-city': {
    oldTitle: 'Commerce City Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Commerce City Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Commerce City's 4x certified roofing contractor. 305 Google reviews, 4.8 stars. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Commerce City's trusted 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free storm damage inspections. Call (720) 766-3377 today",
  },
  'conifer': {
    oldTitle: 'Trusted Conifer Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Conifer CO Roofer | 4x Certified ★ Mountain Experts',
    oldDesc: "Conifer's trusted mountain roofer. 305 reviews, 4.8 stars, quadruple certified. Free inspections for hail and storm damage. Call (720) 766-3377.",
    newDesc: "Conifer's trusted mountain roofing experts. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free storm inspections. (720) 766-3377",
  },
  'denver': {
    oldTitle: 'Denver Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: '#1 Denver CO Roofer | 4x Certified, 7,200+ Roofs ★',
    oldDesc: "Denver's top-rated roofing contractor. 305 Google reviews, 4.8 stars, 4x manufacturer certified. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Denver's most certified roofing contractor. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more. Free inspections. Call (720) 766-3377",
  },
  'edgewater': {
    oldTitle: 'Edgewater Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Edgewater CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Edgewater's 4x certified roofer with 305 Google reviews. Free inspections, storm damage restoration. Call Gates Enterprises at (720) 766-3377.",
    newDesc: "Edgewater's trusted 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free storm damage inspections and restoration. Call (720) 766-3377",
  },
  'englewood': {
    oldTitle: 'Trusted Englewood Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Englewood CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Englewood homeowners trust Gates Enterprises. 305 reviews, 4.8 stars, quadruple certified. Free roof inspections. Call (720) 766-3377 today.",
    newDesc: "Englewood's #1 certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite certified. Free roof inspections. Call (720) 766-3377 today",
  },
  'evergreen': {
    oldTitle: 'Evergreen Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Evergreen CO Roofer | 4x Certified ★ Mountain Experts',
    oldDesc: "Evergreen's most trusted roofer. 305 Google reviews, 4.8 stars, 4x certified. Free mountain home roof inspections. Call (720) 766-3377.",
    newDesc: "Evergreen's trusted mountain roofer. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free roof inspections. Call (720) 766-3377",
  },
  'federal-heights': {
    oldTitle: '#1 Rated Federal Heights CO Roofer | Free Inspections | Gates Enterprises',
    newTitle: 'Federal Heights Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Federal Heights trusts Gates Enterprises. 305 reviews, 4.8 stars, quadruple certified. Book your free roof inspection today. (720) 766-3377.",
    newDesc: "Federal Heights' most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free inspections. Call (720) 766-3377",
  },
  'golden': {
    oldTitle: 'Golden Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Golden CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Golden's 4x certified roofing contractor. 305 Google reviews, 4.8 stars. Free storm damage inspections for Golden homeowners. (720) 766-3377.",
    newDesc: "Golden's top-rated 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free storm damage inspections for Golden homeowners. (720) 766-3377",
  },
  'highlands-ranch': {
    oldTitle: 'Highlands Ranch Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Highlands Ranch Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Highlands Ranch's top-rated roofer. 305 Google reviews, 4.8 stars, 4x certified. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Highlands Ranch's #1 certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite certified. Free inspections. Call (720) 766-3377",
  },
  'lakewood': {
    oldTitle: 'Trusted Lakewood Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Lakewood Roofer | Local HQ, 4x Certified, 305+ Reviews ★',
    oldDesc: "Lakewood's own roofing company. 305 Google reviews, 4.8 stars, quadruple certified. Free inspections at our HQ city. Call (720) 766-3377.",
    newDesc: "Lakewood's hometown roofer, headquartered here. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free inspections. (720) 766-3377",
  },
  'littleton': {
    oldTitle: '#1 Rated Littleton CO Roofer | Free Inspections | Gates Enterprises',
    newTitle: 'Littleton CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Littleton homeowners choose Gates Enterprises. 305 reviews, 4.8 stars, 4x certified. Schedule your free roof inspection. (720) 766-3377.",
    newDesc: "Littleton's most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more certs. Free roof inspections. (720) 766-3377",
  },
  'lone-tree': {
    oldTitle: 'Lone Tree Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Lone Tree CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Lone Tree's 4x certified roofer. 305 Google reviews, 4.8 stars. Free storm damage inspections for Lone Tree homeowners. (720) 766-3377.",
    newDesc: "Lone Tree's trusted 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free storm damage inspections. Call (720) 766-3377 today",
  },
  'morrison': {
    oldTitle: 'Trusted Morrison Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Morrison CO Roofer | 4x Certified ★ Mountain Experts',
    oldDesc: "Morrison trusts Gates Enterprises for roofing. 305 reviews, 4.8 stars, quadruple certified. Free mountain home inspections. Call (720) 766-3377.",
    newDesc: "Morrison's trusted mountain roofer. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free mountain home inspections. (720) 766-3377",
  },
  'northglenn': {
    oldTitle: 'Northglenn Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Northglenn CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Northglenn's top-rated roofer. 305 Google reviews, 4.8 stars, 4x manufacturer certified. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Northglenn's most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more. Free storm inspections. Call (720) 766-3377",
  },
  'parker': {
    oldTitle: 'Parker CO Roofing Contractor | Roof Replacement, Hail Repair | Gates Enterprises',
    newTitle: 'Parker CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Top rated roofer in Parker, Colorado. 305 Google reviews, 4.8 stars, quadruple certified. Free hail damage inspections for Parker homeowners. (720) 766-3377.",
    newDesc: "Parker's #1 certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more certs. Free hail inspections. Call (720) 766-3377",
  },
  'superior': {
    oldTitle: '#1 Rated Superior CO Roofer | Free Inspections | Gates Enterprises',
    newTitle: 'Superior CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Superior homeowners choose Gates Enterprises. 305 reviews, 4.8 stars, 4x certified. Book your free roof inspection today. (720) 766-3377.",
    newDesc: "Superior's most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. 4x manufacturer certified. Free roof inspections. Call (720) 766-3377 today",
  },
  'thornton': {
    oldTitle: 'Thornton Roof Repair & Replacement | 4x Certified | Gates Enterprises',
    newTitle: 'Thornton CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Thornton's 4x certified roofing contractor. 305 Google reviews, 4.8 stars. Free storm damage inspections. Call (720) 766-3377 today.",
    newDesc: "Thornton's trusted 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free storm damage inspections. Call (720) 766-3377 today",
  },
  'westminster': {
    oldTitle: 'Westminster Roofing Contractor | 305 Reviews, 4.8 Stars | Gates Enterprises',
    newTitle: 'Westminster CO Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Westminster's top-rated roofer. 305 Google reviews, 4.8 stars, quadruple certified. Free storm damage inspections. Call (720) 766-3377.",
    newDesc: "Westminster's most certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite certified. Free storm inspections. Call (720) 766-3377",
  },
  'wheat-ridge': {
    oldTitle: 'Trusted Wheat Ridge Roofing Company | Storm Damage Experts | Gates Enterprises',
    newTitle: 'Wheat Ridge Roofer | 4x Certified, 305+ Reviews ★',
    oldDesc: "Wheat Ridge homeowners trust Gates Enterprises. 305 reviews, 4.8 stars, 4x certified. Free roof inspections. Call (720) 766-3377 today.",
    newDesc: "Wheat Ridge's trusted 4x certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Free roof inspections. Call (720) 766-3377 today",
  },
};

for (const [slug, meta] of Object.entries(areaPages)) {
  const filePath = `app/areas/${slug}/page.tsx`;
  const replacements = [];
  
  // Replace title (appears in both metadata and OG)
  replacements.push([`title: "${meta.oldTitle}"`, `title: "${meta.newTitle}"`]);
  // Replace description (appears in both metadata and OG)  
  replacements.push([`description: "${meta.oldDesc}"`, `description: "${meta.newDesc}"`]);
  
  // OG uses same title/desc — do second occurrence
  // Since editFile replaces first occurrence only, we need a different approach
  // Actually, let's just replace ALL occurrences
  editFile(filePath, replacements);
}

// ============================================================
// 3. SERVICE PAGES
// ============================================================
const servicePages = {
  'services/page.tsx': {
    oldTitle: 'Roofing Services | Gates Enterprises',
    newTitle: 'Roofing Services CO | 4x Certified | Gates Enterprises',
    oldDesc: 'Full-service roofing contractor in Denver. Roof replacement, storm damage repair, siding, gutters, windows, and insurance claims. 305 reviews, 4.8 stars. Free inspections.',
    newDesc: 'Full-service Colorado roofer: replacement, hail repair, siding, gutters & windows. 7,200+ roofs, 305 reviews, 4.8★. Free inspections. (720) 766-3377',
  },
  'services/roof-replacement/page.tsx': {
    oldTitle: 'Roof Replacement Colorado | Gates Enterprises LLC',
    newTitle: 'Roof Replacement CO | 4x Certified ★ Free Estimates',
    oldDesc: 'Expert roof replacement with GAF, CertainTeed, Owens Corning, and Malarkey shingles. Warranties up to 50 years. Quadruple certified. Free estimates.',
    newDesc: '4x certified roof replacement in Colorado. 7,200+ roofs, warranties up to 50 years. GAF, Owens Corning, Malarkey & CertainTeed. Free estimates. (720) 766-3377',
  },
  'services/storm-hail-damage/page.tsx': {
    oldTitle: 'Storm Damage & Hail Repair Colorado | Gates Enterprises',
    newTitle: 'Hail Damage Repair CO | 4x Certified ★ Free Inspection',
    oldDesc: 'Colorado storm damage and hail repair from a quadruple certified roofing company. Free inspections, insurance restoration support, and warranties up to 50 years. Call (720) 766-3377.',
    newDesc: 'Colorado hail & storm damage experts. 7,200+ roofs restored, 4.8★ from 305 reviews. Free inspections + insurance claim help. Call (720) 766-3377 today',
  },
  'services/roof-repair/page.tsx': {
    oldTitle: 'Roof Repair Colorado | Gates Enterprises LLC',
    newTitle: 'Roof Repair CO | Fast, Certified ★ Free Inspection',
    oldDesc: 'Fast, reliable roof repairs for leaks, missing shingles, and wind damage. Same week scheduling. Certified Colorado roofers. Free inspections.',
    newDesc: 'Fast Colorado roof repair by 4x certified experts. 7,200+ roofs, same-week scheduling. Leaks, storm damage, missing shingles. Free inspections. (720) 766-3377',
  },
  'services/siding-exterior/page.tsx': {
    oldTitle: 'Siding Installation Colorado | Gates Enterprises LLC',
    newTitle: 'Siding Installation CO | Certified ★ Free Estimates',
    oldDesc: 'Professional siding installation and repair in Colorado. James Hardie, vinyl, and engineered wood. Free estimates from Gates Enterprises.',
    newDesc: 'Expert siding installation in Colorado. James Hardie, vinyl & engineered wood. 7,200+ exterior projects, 4.8★ reviews. Free estimates. (720) 766-3377',
  },
  'services/gutters-guards/page.tsx': {
    oldTitle: 'Gutter Installation Colorado | Gates Enterprises LLC',
    newTitle: 'Gutter Installation CO | Seamless ★ Free Estimates',
    oldDesc: 'Seamless gutter installation and gutter guards in Colorado. Protect your home from water damage. Free estimates.',
    newDesc: 'Seamless gutter installation & guards in Colorado. 7,200+ projects, 4.8★ from 305 reviews. Protect your home from water damage. Free estimates. (720) 766-3377',
  },
  'services/insurance-claims/page.tsx': {
    oldTitle: 'Insurance Restoration | Gates Enterprises LLC',
    newTitle: 'Roof Insurance Claims CO | We Handle Everything',
    oldDesc: 'Full service insurance restoration for storm damage in Colorado. We work with your insurance company from inspection to completion. Call (720) 766-3377.',
    newDesc: 'We handle your entire roof insurance claim. 7,200+ restorations, 4.8★ from 305 reviews. Free inspection, adjuster meetings & paperwork. (720) 766-3377',
  },
  'services/paint/page.tsx': {
    oldTitle: 'Exterior Painting Colorado | Gates Enterprises LLC',
    newTitle: 'Exterior Painting CO | Certified ★ Free Estimates',
    oldDesc: 'Professional interior and exterior painting in Colorado. Boost curb appeal and protect your home. Free estimates from Gates Enterprises.',
    newDesc: 'Professional exterior painting in Colorado by Gates Enterprises. 7,200+ projects, 4.8★ reviews. Boost curb appeal & protect your home. Free estimates. (720) 766-3377',
  },
  'services/windows/page.tsx': {
    oldTitle: 'Window Replacement Colorado | Gates Enterprises LLC',
    newTitle: 'Window Replacement CO | Energy Efficient ★ Free Quote',
    oldDesc: 'Energy efficient window replacement in Colorado. Vinyl, fiberglass, and wood options. Free estimates from Gates Enterprises.',
    newDesc: 'Energy efficient window replacement in Colorado. Vinyl, fiberglass & wood options. 7,200+ projects, 4.8★ reviews. Free estimates. (720) 766-3377',
  },
};

for (const [filePath, meta] of Object.entries(servicePages)) {
  editFile(`app/${filePath}`, [
    [`title: "${meta.oldTitle}"`, `title: "${meta.newTitle}"`],
    [`description: "${meta.oldDesc}"`, `description: "${meta.newDesc}"`],
    // Handle multiline descriptions too
    [`description:\n    "${meta.oldDesc}"`, `description:\n    "${meta.newDesc}"`],
  ]);
}

// ============================================================
// 4. BEST-ROOFER PAGES
// ============================================================
const bestRooferPages = {
  'best-roofer-aurora/page.tsx': {
    oldTitle: 'Best Roofing Company in Aurora, Colorado (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Aurora CO (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Aurora, CO? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
    newDesc: "Aurora's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite. Free storm inspections. Call (720) 766-3377",
  },
  'best-roofer-colorado-springs/page.tsx': {
    oldTitle: 'Best Roofing Company in Colorado Springs, CO (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Colorado Springs (2026) | 4x Certified ★',
    oldDesc: "Looking for the best roofer in Colorado Springs? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
    newDesc: "Colorado Springs' top roofer: 4x certified, 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more. Free inspections. (720) 766-3377",
  },
  'best-roofer-denver/page.tsx': {
    oldTitle: 'Best Roofing Company in Denver, Colorado (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Denver CO (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Denver? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, proprietary HailScore technology. Free inspections. (720) 766-3377.",
    newDesc: "Denver's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite. Free storm inspections. (720) 766-3377",
  },
  'best-roofer-fort-collins/page.tsx': {
    oldTitle: 'Best Roofing Company in Fort Collins, Colorado (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Fort Collins (2026) | 4x Certified ★',
    oldDesc: "Looking for the best roofer in Fort Collins? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
    newDesc: "Fort Collins' best roofer: 4x certified, 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite + 3 more. Free inspections. (720) 766-3377",
  },
  'best-roofer-lakewood/page.tsx': {
    oldTitle: 'Best Roofing Company in Lakewood, Colorado (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Lakewood CO (2026) | Local HQ ★ 4x Certified',
    oldDesc: "Looking for the best roofer in Lakewood, CO? Gates Enterprises is headquartered in Lakewood and is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars. (720) 766-3377.",
    newDesc: "Lakewood's best roofer, headquartered here. 4x certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377",
  },
  'best-roofer-parker/page.tsx': {
    oldTitle: 'Best Roofing Company in Parker, Colorado (2026) | Gates Enterprises',
    newTitle: 'Best Roofer Parker CO (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Parker, CO? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, HailScore technology. Free inspections. (720) 766-3377.",
    newDesc: "Parker's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. GAF Master Elite. Free hail inspections. (720) 766-3377",
  },
  'best-roofer/arvada/page.tsx': {
    oldTitle: 'Best Roofer in Arvada 2026 | Gates Enterprises',
    newTitle: 'Best Roofer Arvada CO (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Arvada? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
    newDesc: "Arvada's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377 today",
  },
  'best-roofer/broomfield/page.tsx': {
    oldTitle: 'Best Roofer in Broomfield 2026 | Gates Enterprises',
    newTitle: 'Best Roofer Broomfield (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Broomfield? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
    newDesc: "Broomfield's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377 today",
  },
  'best-roofer/littleton/page.tsx': {
    oldTitle: 'Best Roofer in Littleton 2026 | Gates Enterprises',
    newTitle: 'Best Roofer Littleton (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Littleton? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
    newDesc: "Littleton's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377 today",
  },
  'best-roofer/thornton/page.tsx': {
    oldTitle: 'Best Roofer in Thornton 2026 | Gates Enterprises',
    newTitle: 'Best Roofer Thornton (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Thornton? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
    newDesc: "Thornton's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377 today",
  },
  'best-roofer/westminster/page.tsx': {
    oldTitle: 'Best Roofer in Westminster 2026 | Gates Enterprises',
    newTitle: 'Best Roofer Westminster (2026) | 4x Certified ★ 305+ Reviews',
    oldDesc: "Looking for the best roofer in Westminster? Gates Enterprises is Colorado's only quadruple certified roofing contractor. 305+ Google reviews, 4.8 stars, free inspections. (720) 766-3377.",
    newDesc: "Westminster's best roofer: 4x manufacturer certified, 7,200+ roofs, 4.8★ from 305 reviews. Free storm inspections. Call (720) 766-3377 today",
  },
};

for (const [filePath, meta] of Object.entries(bestRooferPages)) {
  editFile(`app/${filePath}`, [
    [`title: "${meta.oldTitle}"`, `title: "${meta.newTitle}"`],
    [`description: "${meta.oldDesc}"`, `description: "${meta.newDesc}"`],
    // Handle multiline descriptions
    [`description:\n    "${meta.oldDesc}"`, `description:\n    "${meta.newDesc}"`],
  ]);
}

// ============================================================
// 5. OTHER PAGES
// ============================================================
const otherPages = {
  'about/page.tsx': {
    oldTitle: "About Gates Enterprises | Colorado's Most Certified Roofer",
    newTitle: "About Gates Enterprises | 4x Certified CO Roofer",
    oldDesc: "Meet Gates Enterprises, Colorado's most certified roofing company. Owner Alex Chicilo built the company on quality craftsmanship and manufacturer certifications that less than 1% of roofers hold.",
    newDesc: "Meet Colorado's only 4x manufacturer certified roofer. 7,200+ roofs, 4.8★ from 305 reviews. Certifications less than 1% of roofers hold. (720) 766-3377",
  },
  'about/gates-enterprises/page.tsx': {
    oldTitle: "Gates Enterprises LLC | Colorado's Most Certified Roofing Company",
    newTitle: "Gates Enterprises LLC | 4x Certified, 7,200+ Roofs",
    oldDesc: "Gates Enterprises is Colorado's only quadruple manufacturer-certified roofing company. Founded in 2014, serving 65+ cities across the Front Range. 305+ Google reviews, 4.8 stars. Licensed and insured.",
    newDesc: "Colorado's only 4x manufacturer certified roofer since 2014. 7,200+ roofs, 305 reviews, 4.8★. Serving 65+ Front Range cities. Free inspections. (720) 766-3377",
  },
  'about/alex-chicilo/page.tsx': {
    oldTitle: "Alex Chicilo | Owner, Gates Enterprises | Colorado Roofing Expert",
    newTitle: "Alex Chicilo | Owner, Gates Enterprises | 4x Certified",
    oldDesc: "Alex Chicilo is the owner of Gates Enterprises, Colorado's only quadruple manufacturer-certified roofing company. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master certified. Creator of HailScore.",
    newDesc: "Meet Alex Chicilo, owner of Colorado's only 4x certified roofer. 7,200+ roofs, 305 reviews, 4.8★. Creator of HailScore. Call (720) 766-3377",
  },
  'contact/page.tsx': {
    oldTitle: "Contact Gates Enterprises | Free Roof Inspection Colorado",
    newTitle: "Contact Us | Free Roof Inspection ★ (720) 766-3377",
    oldDesc: "Get in touch with Gates Enterprises for a free roof inspection. Call (720) 766-3377 or schedule online.",
    newDesc: "Schedule your free roof inspection with Colorado's only 4x certified roofer. 7,200+ roofs, 305 reviews, 4.8★. Call (720) 766-3377 or book online",
  },
  'faq/page.tsx': {
    oldTitle: "Roofing FAQ | Gates Enterprises LLC | Colorado's Most Certified Roofer",
    newTitle: "Roofing FAQ | 4x Certified Colorado Roofer",
    oldDesc: "Answers to common roofing questions. Cost, insurance claims, hail damage, warranties, and more. Quadruple certified Colorado roofer. Free inspections.",
    newDesc: "Get answers on roofing costs, insurance claims, hail damage & warranties from Colorado's 4x certified roofer. 7,200+ roofs completed. Free inspections",
  },
  'financing/page.tsx': {
    oldTitle: "Roofing Financing & Payment Options | Gates Enterprises",
    newTitle: "Roof Financing | $0 Down Options ★ Gates Enterprises",
    oldDesc: "Flexible payment options for your roofing project. Insurance claim assistance, payment plans, and free estimates. Gates Enterprises, Denver's most certified roofer.",
    newDesc: "Flexible roof financing with $0 down payment options. Insurance claim help included. 7,200+ roofs, 4.8★ from 305 reviews. Free estimates. (720) 766-3377",
  },
  'gallery/page.tsx': {
    oldTitle: "Project Gallery | Gates Enterprises LLC",
    newTitle: "Roofing Photo Gallery | 7,200+ Projects ★ Gates",
    oldDesc: "See our work. Before and after photos of roof replacements, siding, gutters, and more across Colorado's Front Range.",
    newDesc: "See 7,200+ completed roofing projects across Colorado. Before & after photos of roof replacements, siding, gutters & more. 4.8★ from 305 reviews",
  },
  'reviews/page.tsx': {
    oldTitle: "Customer Reviews | Gates Enterprises LLC",
    newTitle: "305+ Reviews, 4.8★ | Gates Enterprises LLC",
    oldDesc: "300+ five star reviews from Colorado homeowners. See why Gates Enterprises is the most trusted roofer on the Front Range.",
    newDesc: "Read 305+ five-star reviews from Colorado homeowners. 7,200+ roofs completed. See why Gates Enterprises is the Front Range's most trusted roofer",
  },
  'warranty/page.tsx': {
    oldTitle: "Roofing Warranty Information | Gates Enterprises",
    newTitle: "Roof Warranty | Up to 50 Years ★ Gates Enterprises",
    oldDesc: "Industry-leading warranty coverage on every roofing project. Manufacturer warranties from GAF, Owens Corning, Malarkey, and CertainTeed plus workmanship guarantees.",
    newDesc: "Up to 50-year warranties from GAF, Owens Corning, Malarkey & CertainTeed. 4x certified means better coverage. 7,200+ roofs backed. (720) 766-3377",
  },
  'compare/page.tsx': {
    oldTitle: "Compare Gates Enterprises | See How We Stack Up",
    newTitle: "Compare Roofers | Gates vs Others ★ 4x Certified",
    oldDesc: "See how Gates Enterprises compares to other roofing options in Colorado. Transparent comparisons to help homeowners make informed decisions about their roof.",
    newDesc: "See how Colorado's only 4x certified roofer compares. 7,200+ roofs, 305 reviews, 4.8★. Transparent comparisons to help you choose. (720) 766-3377",
  },
  'compare/storm-chasers/page.tsx': {
    oldTitle: "Gates Enterprises vs Storm Chasers | Why Local Matters",
    newTitle: "Local Roofer vs Storm Chasers | Why It Matters",
    oldDesc: "Learn the difference between Gates Enterprises, a certified local Colorado roofing contractor, and out-of-state storm chasers. Protect your home and your investment.",
    newDesc: "Storm chasers disappear after the job. Gates Enterprises is local, 4x certified, 7,200+ roofs, 305 reviews. Protect your home with a trusted roofer",
  },
  'impact-resistant-shingles/page.tsx': {
    oldTitle: "Impact Resistant Shingles Colorado | Class 4 Shingles Denver | Gates Enterprises",
    newTitle: "Class 4 Impact Resistant Shingles CO | Save 28%",
    oldDesc: "Class 4 impact resistant shingles installed by a quadruple certified Colorado roofer. Many homeowners save up to 28% on insurance premiums. GAF, Owens Corning, Malarkey, CertainTeed. Call (720) 766-3377.",
    newDesc: "Save up to 28% on insurance with Class 4 impact resistant shingles. Installed by Colorado's 4x certified roofer. 7,200+ roofs. Free estimates. (720) 766-3377",
  },
  'insurance-claims/page.tsx': {
    oldTitle: "Roof Insurance Claims Colorado | Gates Enterprises LLC",
    newTitle: "Roof Insurance Claims CO | We Fight for You ★",
    oldDesc: "Gates Enterprises assists with your entire roof insurance claim process. We meet your adjuster, handle supplements, and advocate for fair coverage. Most homeowners pay only their deductible. Call (720) 766-3377.",
    newDesc: "We handle your entire roof insurance claim: adjuster meetings, supplements & advocacy. Most pay only their deductible. 7,200+ claims. (720) 766-3377",
  },
  'insurance-restoration/page.tsx': {
    oldTitle: "Colorado's Premier Insurance Restoration Roofer | Gates Enterprises",
    newTitle: "Insurance Restoration Roofer CO | 4x Certified ★",
    oldDesc: "Gates Enterprises is Colorado's leading insurance restoration roofing contractor. Quadruple certified, 305+ reviews, 4.8 stars. We document damage so your insurance company can process your claim accurately. Free inspections. (720) 766-3377.",
    newDesc: "Colorado's top insurance restoration roofer. 4x certified, 7,200+ restorations, 4.8★ from 305 reviews. Free inspections + full claim support. (720) 766-3377",
  },
  'why-gates-enterprises/page.tsx': {
    oldTitle: "Why Choose Gates Enterprises Over Other Colorado Roofers | Gates Enterprises",
    newTitle: "Why Gates Enterprises? | 4x Certified, 7,200+ Roofs",
    oldDesc: "What makes Gates Enterprises different? Colorado's only quadruple certified roofing contractor with 305+ Google reviews, 4.8 stars, and proprietary HailScore technology. See how we compare.",
    newDesc: "Colorado's only 4x manufacturer certified roofer. 7,200+ roofs, 4.8★ from 305 reviews, plus HailScore technology. See why homeowners choose us",
  },
};

for (const [filePath, meta] of Object.entries(otherPages)) {
  const replacements = [
    [`title: "${meta.oldTitle}"`, `title: "${meta.newTitle}"`],
    [`description: "${meta.oldDesc}"`, `description: "${meta.newDesc}"`],
  ];
  // Handle multiline descriptions (some files have description:\n    "...")
  replacements.push([`description:\n    "${meta.oldDesc}"`, `description:\n    "${meta.newDesc}"`]);
  editFile(`app/${filePath}`, replacements);
}

// ============================================================
// 6. TOOLS PAGES
// ============================================================
const toolPages = {
  'tools/page.tsx': {
    oldTitle: 'Free Roofing Tools | Cost Estimator, Insurance Coverage & Hail Risk Check | Gates Enterprises',
    newTitle: 'Free Roofing Tools | Cost & Hail Risk ★ Gates',
    oldDesc: 'Free roofing tools for Colorado homeowners. Calculate your roof\'s age and remaining life, estimate insurance coverage value, and check your home\'s hail risk score. No signup required.',
    newDesc: 'Free roofing tools: estimate costs, check hail risk & insurance coverage. No signup required. Built by Colorado\'s 4x certified roofer. (720) 766-3377',
  },
  'tools/hail-risk-check/page.tsx': {
    oldTitle: "Hail Risk Check | Check Your Home's Hail Score | Gates Enterprises",
    newTitle: "Free Hail Risk Check | Your Home's Score ★ Gates",
    oldDesc: "Look up your home's hail risk score powered by HailScore, a Gates Enterprises company. 4.5 million+ hail records, 10 years of data, all 50 states. Free instant results.",
    newDesc: "Check your home's hail risk score free. 4.5M+ hail records, 10 years of data, all 50 states. Instant results. Powered by HailScore. (720) 766-3377",
  },
  'tools/insurance-coverage-estimator/page.tsx': {
    oldTitle: "Is Your Roof Covered by Insurance? | Free Coverage Estimator | Gates Enterprises",
    newTitle: "Free Roof Insurance Estimator | Gates Enterprises",
    oldDesc: "Find out how much your roof replacement could be worth through insurance. Most Colorado homeowners pay only their deductible. Free estimator tool.",
    newDesc: "See what your roof replacement could be worth through insurance. Most CO homeowners pay only their deductible. Free tool, instant results. (720) 766-3377",
  },
  'tools/roof-age-calculator/page.tsx': {
    oldTitle: "Roof Replacement Cost Estimator | Colorado 2025/2026 Pricing | Gates Enterprises",
    newTitle: "Roof Cost Estimator CO (2026) | Free ★ Gates",
    oldDesc: 'Estimate your Colorado roof replacement cost instantly. Select your material, home size, and location for a realistic price range. Free tool for Colorado homeowners from Gates Enterprises.',
    newDesc: 'Estimate your Colorado roof replacement cost instantly. Select material, home size & location. Free tool with 2026 pricing. 4x certified roofer. (720) 766-3377',
  },
};

for (const [filePath, meta] of Object.entries(toolPages)) {
  editFile(`app/${filePath}`, [
    [`title: "${meta.oldTitle}"`, `title: "${meta.newTitle}"`],
    [`description: "${meta.oldDesc}"`, `description: "${meta.newDesc}"`],
    [`description:\n    "${meta.oldDesc}"`, `description:\n    "${meta.newDesc}"`],
  ]);
}

// ============================================================
// 7. Update dynamic service-city page titles in service-meta.ts
// ============================================================
editFile('lib/service-meta.ts', [
  // Make titles more CTR-friendly
  [
    `"roof-replacement": (c) => \`Roof Replacement in \${c}, CO | Gates Enterprises\``,
    `"roof-replacement": (c) => \`\${c} Roof Replacement | 4x Certified ★ Gates\``
  ],
  [
    `"storm-hail-damage": (c) => \`Storm Damage Restoration \${c} CO | Gates Enterprises\``,
    `"storm-hail-damage": (c) => \`\${c} Hail & Storm Repair | 4x Certified ★ Gates\``
  ],
  [
    `"roof-repair": (c) => \`\${c} Roof Repair Services | Gates Enterprises\``,
    `"roof-repair": (c) => \`\${c} Roof Repair | Fast, 4x Certified ★ Gates\``
  ],
  [
    `"siding": (c) => \`Siding Installation & Repair \${c} | Gates Enterprises\``,
    `"siding": (c) => \`\${c} Siding Installation | Certified ★ Gates\``
  ],
  [
    `"gutters": (c) => \`Gutter Installation \${c} Colorado | Gates Enterprises\``,
    `"gutters": (c) => \`\${c} Gutter Installation | Seamless ★ Gates\``
  ],
  [
    `"roof-inspection": (c) => \`Free Roof Inspection \${c}, CO | Gates Enterprises\``,
    `"roof-inspection": (c) => \`Free Roof Inspection \${c} CO | 4x Certified ★\``
  ],
  [
    `"insurance-claims": (c) => \`Roof Insurance Claims \${c}, CO | Gates Enterprises\``,
    `"insurance-claims": (c) => \`\${c} Roof Insurance Claims | We Handle It All ★\``
  ],
  [
    `"metal-roofing": (c) => \`Metal Roofing \${c}, Colorado | Gates Enterprises\``,
    `"metal-roofing": (c) => \`\${c} Metal Roofing | 50-Year Warranty ★ Gates\``
  ],
]);

console.log('\n✅ SEO overhaul complete!');
