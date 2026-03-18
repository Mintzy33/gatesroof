// Utility: maps service slugs and city slugs to relevant blog post slugs
// Used by service×city pages, neighborhood pages, and other templates
// to auto-generate "Related Articles" sections

export interface RelatedBlogPost {
  slug: string;
  title: string;
  category: string;
}

// Service slug -> relevant blog post slugs (curated by topic relevance)
const serviceToBlogPosts: Record<string, string[]> = {
  "roof-replacement": [
    "class-4-impact-resistant-shingles-colorado",
    "roof-replacement-cost-denver",
    "roof-replacement-cost-colorado-2026",
    "signs-you-need-new-roof",
    "how-long-does-a-roof-last-colorado",
    "how-long-does-roof-last-colorado",
    "best-time-roof-replacement-colorado",
    "metal-roof-vs-shingles-colorado",
    "gaf-vs-malarkey-vs-certainteed-shingles",
    "owens-corning-vs-gaf-shingles-colorado",
    "gaf-timberline-hdz-shingles-colorado",
    "owens-corning-duration-shingles-colorado",
    "certainteed-landmark-shingles-colorado",
    "choosing-shingle-color-colorado-home",
    "class-4-impact-resistant-shingles",
    "gaf-golden-pledge-warranty-explained",
    "summer-roofing-colorado-best-time-replace",
    "roof-repair-vs-full-replacement-after-storm",
    "how-to-read-roofing-estimate",
    "colorado-building-codes-roofing-2026",
    "why-manufacturer-certifications-matter-roofer",
    "gaf-master-elite-vs-preferred-difference",
  ],
  "storm-hail-damage": [
    "colorado-hail-season-2026-homeowners-guide",
    "what-does-hail-damage-look-like-on-roof",
    "what-to-do-after-hailstorm-colorado",
    "hail-damage-insurance-claim-colorado",
    "signs-of-hail-damage-on-roof",
    "signs-of-hail-damage-from-ground",
    "hail-damage-roof-repair-cost-colorado",
    "colorado-hail-season-preparation",
    "colorado-hail-season-2026-what-to-expect",
    "2026-colorado-hail-season-forecast",
    "palmer-divide-colorado-hail-corridor",
    "storm-damage-documentation-guide",
    "what-to-do-after-hailstorm-hits-neighborhood",
    "preparing-roof-colorado-2026-hail-season",
    "post-storm-roof-inspection-checklist-colorado",
    "preparing-roof-colorado-summer-storms",
    "wind-damage-roofs-colorado",
  ],
  "roof-repair": [
    "emergency-roof-repair-after-storm",
    "emergency-roof-repair-denver-metro",
    "flat-roof-repair-denver",
    "roof-maintenance-checklist-colorado",
    "spring-roof-maintenance-checklist-colorado",
    "fall-roof-maintenance-checklist-colorado-homes",
    "fall-roof-maintenance-colorado-winter",
    "spring-roof-inspection-colorado",
    "warning-signs-roof-needs-attention",
    "roof-repair-vs-full-replacement-after-storm",
    "ice-dams-colorado-winter-roofing",
    "prevent-ice-dams-colorado-roof",
    "colorado-freeze-thaw-cycle-roof-damage",
    "freeze-thaw-cycles-colorado-roof",
    "roof-ventilation-colorado",
    "colorado-altitude-affects-roof",
    "uv-damage-roofs-colorado",
    "replace-roof-winter-colorado",
  ],
  "siding": [
    "james-hardie-siding-colorado",
    "soffit-fascia-repair-replacement-colorado",
    "wind-damage-roofs-colorado",
    "uv-damage-roofs-colorado",
    "colorado-altitude-affects-roof",
  ],
  "gutters": [
    "gutter-replacement-cost-denver",
    "when-clean-gutters-colorado",
    "ice-dams-colorado-winter-roofing",
    "prevent-ice-dams-colorado-roof",
    "fall-roof-maintenance-checklist-colorado-homes",
    "fall-roof-maintenance-colorado-winter",
  ],
  "roof-inspection": [
    "spring-roof-inspection-colorado",
    "post-storm-roof-inspection-checklist-colorado",
    "what-to-expect-roof-insurance-inspection",
    "what-does-hail-damage-look-like-on-roof",
    "signs-of-hail-damage-on-roof",
    "signs-of-hail-damage-from-ground",
    "warning-signs-roof-needs-attention",
    "roof-maintenance-checklist-colorado",
  ],
  "insurance-claims": [
    "colorado-roof-insurance-claims-guide",
    "hail-damage-insurance-claim-colorado",
    "hail-damage-roof-insurance-guide-colorado",
    "how-to-file-hail-damage-insurance-claim-colorado",
    "insurance-adjuster-roof-claim-tips",
    "insurance-adjuster-roof-inspection",
    "supplementing-roof-insurance-claim",
    "supplementing-roof-insurance-claim-guide",
    "acv-vs-rcv-roof-insurance-colorado",
    "insurance-deny-hail-damage-claim-colorado",
    "public-adjuster-vs-roofing-contractor",
    "roof-insurance-deductible-colorado",
    "roof-insurance-claim-tips-colorado",
    "roof-insurance-claim-timeline-how-long",
    "does-homeowners-insurance-cover-roof-leaks-colorado",
    "storm-damage-documentation-guide",
  ],
  "metal-roofing": [
    "metal-roof-vs-shingles-colorado",
    "standing-seam-metal-roofing-colorado",
    "class-4-impact-resistant-shingles-colorado",
    "best-time-roof-replacement-colorado",
    "roofing-high-altitude-mountain-homes-colorado",
  ],
};

// City slug -> relevant blog post slugs (city-specific posts)
const cityToBlogPosts: Record<string, string[]> = {
  "denver": [
    "roof-replacement-cost-denver",
    "how-to-choose-roofing-contractor-denver",
    "emergency-roof-repair-denver-metro",
    "flat-roof-repair-denver",
    "gutter-replacement-cost-denver",
    "hoa-roofing-requirements-denver",
  ],
  "lakewood": [
    "best-roofing-company-lakewood-co",
    "hail-damage-roof-repair-lakewood-colorado",
    "roof-replacement-cost-lakewood-co",
    "lakewood-roofing-companies-how-to-choose",
  ],
  "parker": [
    "best-roofing-companies-parker-colorado",
    "palmer-divide-colorado-hail-corridor",
  ],
  "highlands-ranch": [
    "roofing-highlands-ranch-homeowners-guide",
  ],
  "castle-rock": [
    "castle-rock-roofing-guide-hail-wind-weather",
    "palmer-divide-colorado-hail-corridor",
  ],
  "aurora": [
    "aurora-colorado-roofing-homeowner-guide",
  ],
  "arvada": [
    "arvada-roofing-front-range-storms",
  ],
  "fort-collins": [
    "fort-collins-roofing-weather-challenges-solutions",
  ],
  "colorado-springs": [
    "colorado-springs-roofing-military-community-guide",
  ],
};

// Blog post title lookup (for display in related articles sections)
const blogPostTitles: Record<string, { title: string; category: string }> = {
  "class-4-impact-resistant-shingles-colorado": { title: "Class 4 Impact Resistant Shingles: Are They Worth It in Colorado?", category: "Roofing Materials" },
  "colorado-hail-season-2026-homeowners-guide": { title: "Colorado Hail Season 2026: Complete Homeowner's Guide", category: "Storm Damage" },
  "what-does-hail-damage-look-like-on-roof": { title: "What Does Hail Damage Look Like on a Roof?", category: "Storm Damage" },
  "flat-roof-vs-pitched-roof-colorado": { title: "Flat Roof vs Pitched Roof in Colorado", category: "Roofing Materials" },
  "colorado-roof-insurance-claims-guide": { title: "Colorado Roof Insurance Claims: Complete Guide", category: "Insurance" },
  "how-to-choose-roofing-contractor-denver": { title: "How to Choose a Roofing Contractor in Denver", category: "Hiring Tips" },
  "what-to-do-after-hailstorm-colorado": { title: "What to Do After a Hailstorm in Colorado", category: "Storm Damage" },
  "manufacturer-certified-roofer-colorado": { title: "Why Manufacturer Certifications Matter for Colorado Roofers", category: "Hiring Tips" },
  "hail-damage-insurance-claim-colorado": { title: "Hail Damage Insurance Claims in Colorado", category: "Insurance" },
  "class-4-impact-resistant-shingles": { title: "Class 4 Impact Resistant Shingles Guide", category: "Roofing Materials" },
  "colorado-hail-season-preparation": { title: "Preparing for Colorado Hail Season", category: "Storm Damage" },
  "roof-replacement-cost-denver": { title: "Roof Replacement Cost in Denver (2026)", category: "Cost Guides" },
  "signs-you-need-new-roof": { title: "Signs You Need a New Roof", category: "Roof Repair" },
  "gaf-vs-malarkey-vs-certainteed-shingles": { title: "GAF vs Malarkey vs CertainTeed Shingles", category: "Roofing Materials" },
  "insurance-adjuster-roof-claim-tips": { title: "Insurance Adjuster Roof Claim Tips", category: "Insurance" },
  "hoa-roofing-requirements-denver": { title: "HOA Roofing Requirements in Denver", category: "Regulations" },
  "emergency-roof-repair-after-storm": { title: "Emergency Roof Repair After a Storm", category: "Roof Repair" },
  "roof-maintenance-checklist-colorado": { title: "Roof Maintenance Checklist for Colorado", category: "Maintenance" },
  "how-long-does-a-roof-last-colorado": { title: "How Long Does a Roof Last in Colorado?", category: "Roofing Materials" },
  "gaf-golden-pledge-warranty-explained": { title: "GAF Golden Pledge Warranty Explained", category: "Roofing Materials" },
  "ice-dams-colorado-winter-roofing": { title: "Ice Dams and Colorado Winter Roofing", category: "Maintenance" },
  "roof-insurance-deductible-colorado": { title: "Roof Insurance Deductibles in Colorado", category: "Insurance" },
  "james-hardie-siding-colorado": { title: "James Hardie Siding for Colorado Homes", category: "Siding" },
  "choosing-shingle-color-colorado-home": { title: "Choosing the Right Shingle Color for Your Colorado Home", category: "Roofing Materials" },
  "flat-roof-repair-denver": { title: "Flat Roof Repair in Denver", category: "Roof Repair" },
  "storm-damage-documentation-guide": { title: "Storm Damage Documentation Guide", category: "Insurance" },
  "gutter-replacement-cost-denver": { title: "Gutter Replacement Cost in Denver", category: "Gutters" },
  "owens-corning-vs-gaf-shingles-colorado": { title: "Owens Corning vs GAF Shingles in Colorado", category: "Roofing Materials" },
  "roof-ventilation-colorado": { title: "Roof Ventilation in Colorado", category: "Maintenance" },
  "best-roofing-company-lakewood-co": { title: "Best Roofing Company in Lakewood, CO", category: "Local Guides" },
  "hail-damage-roof-repair-lakewood-colorado": { title: "Hail Damage Roof Repair in Lakewood, Colorado", category: "Local Guides" },
  "roof-replacement-cost-lakewood-co": { title: "Roof Replacement Cost in Lakewood, CO", category: "Local Guides" },
  "best-time-roof-replacement-colorado": { title: "Best Time for Roof Replacement in Colorado", category: "Roofing Materials" },
  "metal-roof-vs-shingles-colorado": { title: "Metal Roof vs Shingles in Colorado", category: "Roofing Materials" },
  "how-to-read-roofing-estimate": { title: "How to Read a Roofing Estimate", category: "Hiring Tips" },
  "colorado-hail-season-2026-what-to-expect": { title: "Colorado Hail Season 2026: What to Expect", category: "Storm Damage" },
  "emergency-roof-repair-denver-metro": { title: "Emergency Roof Repair in Denver Metro", category: "Roof Repair" },
  "signs-of-hail-damage-on-roof": { title: "Signs of Hail Damage on Your Roof", category: "Storm Damage" },
  "roof-insurance-claim-tips-colorado": { title: "Roof Insurance Claim Tips for Colorado", category: "Insurance" },
  "spring-roof-maintenance-checklist-colorado": { title: "Spring Roof Maintenance Checklist for Colorado", category: "Maintenance" },
  "2026-colorado-hail-season-forecast": { title: "2026 Colorado Hail Season Forecast", category: "Storm Damage" },
  "roof-replacement-cost-colorado-2026": { title: "Roof Replacement Cost in Colorado (2026)", category: "Cost Guides" },
  "how-to-file-hail-damage-insurance-claim-colorado": { title: "How to File a Hail Damage Insurance Claim in Colorado", category: "Insurance" },
  "how-long-does-roof-last-colorado": { title: "How Long Does a Roof Last in Colorado?", category: "Roofing Materials" },
  "soffit-fascia-repair-replacement-colorado": { title: "Soffit and Fascia Repair in Colorado", category: "Siding" },
  "what-to-do-after-hailstorm-hits-neighborhood": { title: "What to Do After a Hailstorm Hits Your Neighborhood", category: "Storm Damage" },
  "hail-damage-roof-repair-cost-colorado": { title: "Hail Damage Roof Repair Cost in Colorado", category: "Cost Guides" },
  "signs-of-hail-damage-from-ground": { title: "Signs of Hail Damage You Can See From the Ground", category: "Storm Damage" },
  "gaf-timberline-hdz-shingles-colorado": { title: "GAF Timberline HDZ Shingles for Colorado", category: "Roofing Materials" },
  "owens-corning-duration-shingles-colorado": { title: "Owens Corning Duration Shingles for Colorado", category: "Roofing Materials" },
  "tile-roofing-colorado-pros-cons": { title: "Tile Roofing in Colorado: Pros and Cons", category: "Roofing Materials" },
  "wood-shake-roofs-colorado": { title: "Wood Shake Roofs in Colorado", category: "Roofing Materials" },
  "standing-seam-metal-roofing-colorado": { title: "Standing Seam Metal Roofing in Colorado", category: "Roofing Materials" },
  "synthetic-slate-roofing-colorado": { title: "Synthetic Slate Roofing in Colorado", category: "Roofing Materials" },
  "certainteed-landmark-shingles-colorado": { title: "CertainTeed Landmark Shingles for Colorado", category: "Roofing Materials" },
  "insurance-adjuster-roof-inspection": { title: "What to Expect During an Insurance Adjuster Roof Inspection", category: "Insurance" },
  "supplementing-roof-insurance-claim": { title: "Supplementing Your Roof Insurance Claim", category: "Insurance" },
  "acv-vs-rcv-roof-insurance-colorado": { title: "ACV vs RCV Roof Insurance in Colorado", category: "Insurance" },
  "insurance-deny-hail-damage-claim-colorado": { title: "When Insurance Denies Your Hail Damage Claim in Colorado", category: "Insurance" },
  "public-adjuster-vs-roofing-contractor": { title: "Public Adjuster vs Roofing Contractor", category: "Insurance" },
  "prevent-ice-dams-colorado-roof": { title: "How to Prevent Ice Dams on Your Colorado Roof", category: "Maintenance" },
  "when-clean-gutters-colorado": { title: "When to Clean Gutters in Colorado", category: "Gutters" },
  "warning-signs-roof-needs-attention": { title: "Warning Signs Your Roof Needs Attention", category: "Maintenance" },
  "colorado-altitude-affects-roof": { title: "How Colorado's Altitude Affects Your Roof", category: "Climate" },
  "uv-damage-roofs-colorado": { title: "UV Damage to Roofs in Colorado", category: "Climate" },
  "freeze-thaw-cycles-colorado-roof": { title: "Freeze-Thaw Cycles and Your Colorado Roof", category: "Climate" },
  "wind-damage-roofs-colorado": { title: "Wind Damage to Roofs in Colorado", category: "Climate" },
  "palmer-divide-colorado-hail-corridor": { title: "The Palmer Divide: Colorado's Hail Corridor", category: "Storm Damage" },
  "roofing-high-altitude-mountain-homes-colorado": { title: "Roofing for High Altitude Mountain Homes in Colorado", category: "Roofing Materials" },
  "colorado-building-codes-roofing-2026": { title: "Colorado Building Codes for Roofing (2026)", category: "Regulations" },
  "spring-roof-inspection-colorado": { title: "Spring Roof Inspection in Colorado", category: "Maintenance" },
  "preparing-roof-colorado-summer-storms": { title: "Preparing Your Roof for Colorado Summer Storms", category: "Maintenance" },
  "fall-roof-maintenance-colorado-winter": { title: "Fall Roof Maintenance for Colorado Winter", category: "Maintenance" },
  "replace-roof-winter-colorado": { title: "Can You Replace a Roof in Winter in Colorado?", category: "Roofing Materials" },
  "best-roofing-companies-parker-colorado": { title: "Best Roofing Companies in Parker, Colorado", category: "Local Guides" },
  "roofing-highlands-ranch-homeowners-guide": { title: "Roofing in Highlands Ranch: Homeowner's Guide", category: "Local Guides" },
  "castle-rock-roofing-guide-hail-wind-weather": { title: "Castle Rock Roofing Guide: Hail, Wind, and Weather", category: "Local Guides" },
  "aurora-colorado-roofing-homeowner-guide": { title: "Aurora Colorado Roofing Homeowner Guide", category: "Local Guides" },
  "lakewood-roofing-companies-how-to-choose": { title: "Lakewood Roofing Companies: How to Choose", category: "Local Guides" },
  "fort-collins-roofing-weather-challenges-solutions": { title: "Fort Collins Roofing: Weather Challenges and Solutions", category: "Local Guides" },
  "colorado-springs-roofing-military-community-guide": { title: "Colorado Springs Roofing: Military Community Guide", category: "Local Guides" },
  "arvada-roofing-front-range-storms": { title: "Arvada Roofing: Front Range Storms", category: "Local Guides" },
  "what-to-expect-roof-insurance-inspection": { title: "What to Expect During a Roof Insurance Inspection", category: "Insurance" },
  "roof-insurance-claim-timeline-how-long": { title: "Roof Insurance Claim Timeline: How Long Does It Take?", category: "Insurance" },
  "supplementing-roof-insurance-claim-guide": { title: "Supplementing Your Roof Insurance Claim: Complete Guide", category: "Insurance" },
  "does-homeowners-insurance-cover-roof-leaks-colorado": { title: "Does Homeowners Insurance Cover Roof Leaks in Colorado?", category: "Insurance" },
  "roof-repair-vs-full-replacement-after-storm": { title: "Roof Repair vs Full Replacement After a Storm", category: "Roof Repair" },
  "preparing-roof-colorado-2026-hail-season": { title: "Preparing Your Roof for Colorado's 2026 Hail Season", category: "Storm Damage" },
  "post-storm-roof-inspection-checklist-colorado": { title: "Post-Storm Roof Inspection Checklist for Colorado", category: "Storm Damage" },
  "summer-roofing-colorado-best-time-replace": { title: "Summer Roofing in Colorado: Best Time to Replace", category: "Roofing Materials" },
  "fall-roof-maintenance-checklist-colorado-homes": { title: "Fall Roof Maintenance Checklist for Colorado Homes", category: "Maintenance" },
  "colorado-freeze-thaw-cycle-roof-damage": { title: "Colorado Freeze-Thaw Cycles and Roof Damage", category: "Climate" },
  "why-manufacturer-certifications-matter-roofer": { title: "Why Manufacturer Certifications Matter When Hiring a Roofer", category: "Hiring Tips" },
  "gaf-master-elite-vs-preferred-difference": { title: "GAF Master Elite vs Preferred: What's the Difference?", category: "Hiring Tips" },
  "questions-ask-before-hiring-roofing-contractor-colorado": { title: "Questions to Ask Before Hiring a Roofing Contractor in Colorado", category: "Hiring Tips" },
  "spot-storm-chaser-vs-legitimate-roofing-company": { title: "How to Spot a Storm Chaser vs a Legitimate Roofing Company", category: "Hiring Tips" },
  "hail-damage-roof-insurance-guide-colorado": { title: "Hail Damage Roof Insurance Guide for Colorado", category: "Insurance" },
  "how-to-choose-roofing-contractor-colorado": { title: "How to Choose a Roofing Contractor in Colorado", category: "Hiring Tips" },
};

/**
 * Get related blog posts for a service × city combination
 * Returns up to `limit` posts, prioritizing city-specific posts first
 */
export function getRelatedBlogPosts(
  serviceSlug: string,
  citySlug?: string,
  limit: number = 5,
): RelatedBlogPost[] {
  const seen = new Set<string>();
  const results: RelatedBlogPost[] = [];

  // City-specific posts first (highest relevance)
  if (citySlug && cityToBlogPosts[citySlug]) {
    for (const slug of cityToBlogPosts[citySlug]) {
      if (seen.has(slug)) continue;
      const info = blogPostTitles[slug];
      if (!info) continue;
      seen.add(slug);
      results.push({ slug, title: info.title, category: info.category });
      if (results.length >= limit) return results;
    }
  }

  // Service-specific posts
  const servicePosts = serviceToBlogPosts[serviceSlug] || [];
  for (const slug of servicePosts) {
    if (seen.has(slug)) continue;
    const info = blogPostTitles[slug];
    if (!info) continue;
    seen.add(slug);
    results.push({ slug, title: info.title, category: info.category });
    if (results.length >= limit) return results;
  }

  // Fallback: general popular posts
  const fallbacks = [
    "class-4-impact-resistant-shingles-colorado",
    "colorado-hail-season-2026-homeowners-guide",
    "how-to-choose-roofing-contractor-colorado",
    "signs-you-need-new-roof",
    "what-to-do-after-hailstorm-colorado",
  ];
  for (const slug of fallbacks) {
    if (seen.has(slug)) continue;
    const info = blogPostTitles[slug];
    if (!info) continue;
    seen.add(slug);
    results.push({ slug, title: info.title, category: info.category });
    if (results.length >= limit) return results;
  }

  return results;
}

/**
 * Get the 5 latest blog post slugs (for homepage)
 */
export function getLatestBlogSlugs(): RelatedBlogPost[] {
  return [
    { slug: "class-4-impact-resistant-shingles-colorado", title: "Class 4 Impact Resistant Shingles: Are They Worth It in Colorado?", category: "Roofing Materials" },
    { slug: "colorado-hail-season-2026-homeowners-guide", title: "Colorado Hail Season 2026: Complete Homeowner's Guide", category: "Storm Damage" },
    { slug: "what-does-hail-damage-look-like-on-roof", title: "What Does Hail Damage Look Like on a Roof?", category: "Storm Damage" },
    { slug: "colorado-roof-insurance-claims-guide", title: "Colorado Roof Insurance Claims: Complete Guide", category: "Insurance" },
    { slug: "how-to-choose-roofing-contractor-denver", title: "How to Choose a Roofing Contractor in Denver", category: "Hiring Tips" },
  ];
}
