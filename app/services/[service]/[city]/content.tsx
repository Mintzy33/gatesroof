"use client";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTA from "../../../components/CTA";
import {
  services,
  getCityBySlug,
  getServiceBySlug,
  getNearbyCities,
} from "../../../../lib/service-areas-data";
import type { CityData, ServiceData } from "../../../../lib/service-areas-data";
import LocalSEOInfo from "../../../components/LocalSEOInfo";
import FAQAccordion from "../../../components/FAQAccordion";
import { getServiceCityFAQItems } from "../../../../lib/faq-data";
import HailScoreCard from "../../../components/HailScoreCard";
import { getRelatedBlogPosts } from "../../../../lib/blog-links";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

// ---------------------------------------------------------------------------
// Unique content generators — these combine city + service data to produce
// genuinely different paragraphs, not just name swaps.
// ---------------------------------------------------------------------------

function getHeroIntro(city: CityData, service: ServiceData): string {
  const hailIntros: Record<string, string> = {
    high: `${city.city} sits in one of Colorado's most hail-prone corridors, making ${service.service.toLowerCase()} an essential investment for homeowners in ${city.county} County.`,
    moderate: `${city.city} homeowners in ${city.county} County deal with Colorado's unpredictable weather year-round — from spring hailstorms to winter freeze-thaw cycles that test every roofing system.`,
    low: `While ${city.city}'s mountain location in ${city.county} County provides some shelter from Front Range hail, homes here face unique challenges including heavy snow loads, extreme UV at altitude, and wind-driven ice.`,
  };

  return `${hailIntros[city.hailRisk]} Gates Enterprises brings quadruple manufacturer certification and thousands of completed projects to every ${service.service.toLowerCase()} job in ${city.city}. ${city.description}`;
}

function getWhySection(city: CityData, service: ServiceData): string {
  const serviceReasons: Record<string, Record<string, string>> = {
    "roof-replacement": {
      high: `In ${city.city}, hail damage is not a matter of if — it's a matter of when. ${city.county} County records show that most homes in this area experience at least one significant hail event every three to five years. When your roof reaches the point where repair no longer makes sense, a full certified replacement with impact-resistant materials is the smartest long-term investment. Gates Enterprises installs Class 4 impact-resistant shingle systems from GAF, Owens Corning, Malarkey, and CertainTeed — the only shingles that qualify for insurance discounts on your Colorado homeowners policy.${city.neighborhoods ? ` From ${city.neighborhoods.slice(0, 3).join(" to ")} and beyond, we've completed roof replacements throughout ${city.city}.` : ""}`,
      moderate: `${city.city}'s position in the Denver metro means your roof takes steady punishment from Colorado weather — hail in spring, UV damage in summer, freeze-thaw cycles in winter, and occasional high winds year-round. When the cumulative damage exceeds what repair can address, a certified roof replacement protects your home for decades. ${city.county} County permitting requirements ensure every replacement meets current building codes, and Gates Enterprises handles the entire permit process.${city.neighborhoods ? ` Whether your home is in ${city.neighborhoods.slice(0, 3).join(", ")} or another ${city.city} neighborhood, we bring the same certified quality.` : ""}`,
      low: `${city.city}'s mountain elevation in ${city.county} County means your roof faces challenges that lowland homes don't — heavy snow accumulation that can exceed 100 inches annually, extreme UV radiation at altitude that accelerates shingle degradation, and temperature swings of 40+ degrees in a single day. These conditions can shorten a standard asphalt roof's lifespan by years. A certified roof replacement with materials selected for mountain conditions protects your home and your investment.${city.neighborhoods ? ` We serve homeowners throughout ${city.city}, including ${city.neighborhoods.slice(0, 3).join(" and ")}.` : ""}`,
    },
    "storm-hail-damage": {
      high: `${city.city} is located in ${city.county} County along one of the most active hail corridors in the United States. The geography here — ${city.lat > 39.5 ? "open plains with no natural barriers" : "the Palmer Divide's elevated terrain"} — creates conditions where supercell thunderstorms produce large, damaging hail with regularity. After a storm, every hour you wait is an hour that damaged shingles, compromised flashing, and exposed underlayment are letting moisture into your home. Gates Enterprises provides free storm damage inspections and handles the entire insurance restoration process.${city.neighborhoods ? ` We've completed storm damage restorations throughout ${city.city}, including ${city.neighborhoods.slice(0, 3).join(", ")}.` : ""}`,
      moderate: `While ${city.city} doesn't sit directly on the Palmer Divide, ${city.county} County receives its share of damaging hail events — particularly during the May through August storm season when cells develop along the foothills and move east across the metro. Even moderate hail (1 inch or larger) can compromise your roof's integrity in ways that aren't visible from the ground. Our free inspections document every point of damage with the photographs and measurements your insurance company needs.${city.neighborhoods ? ` From ${city.neighborhoods.slice(0, 3).join(" to ")}, we've helped ${city.city} homeowners recover from storm damage.` : ""}`,
      low: `${city.city}'s mountain location in ${city.county} County means hail events are less frequent, but when they happen, the combination of hail, wind, and often heavy rain can be especially damaging. Mountain storms also bring hazards that valley homes rarely face — wind-driven debris from surrounding trees, ice damage from rapid freezing, and heavy snow loads that stress already-compromised roofing systems. Our inspectors understand mountain roofing conditions and know what to look for.`,
    },
    "roof-repair": {
      high: `In ${city.city}'s high-hail environment, roof damage accumulates faster than in most areas. A missing shingle after one storm, a lifted flashing seal after another — over time, these small issues compound into serious problems. Not every issue requires a full replacement, and Gates Enterprises will tell you honestly whether repair makes sense for your ${city.county} County home. We fix the specific problem using the same manufacturer-specified materials we use on full installations.${city.neighborhoods ? ` Whether your home is in ${city.neighborhoods[0]} or anywhere else in ${city.city}, we respond quickly.` : ""}`,
      moderate: `${city.city} homes in ${city.county} County face the full range of Colorado weather stress — and sometimes a targeted repair is all you need. Leaks around chimneys, failed pipe boot seals, wind-lifted shingles, and minor hail damage can often be addressed without replacing the entire roof. Gates Enterprises provides honest assessments. If repair is the right call, we fix it properly. If your roof is past the point of cost-effective repair, we'll show you the evidence and explain your options.`,
      low: `Mountain homes in ${city.city} face repair needs that are different from their Front Range counterparts. Pine needle accumulation in valleys and behind chimneys, ice dam formation at eaves, heavy snow loads that stress flashing details, and UV degradation that's 20-30% faster at ${city.lat < 39.5 ? "this" : "mountain"} elevation — these are the issues we see most often in ${city.county} County. Our repair approach addresses the root cause, not just the symptom.`,
    },
    "siding": {
      high: `Hail doesn't just damage roofs — it destroys siding. In ${city.city}'s high-hail zone in ${city.county} County, vinyl siding cracks, wood siding splinters, and even fiber cement can be pockmarked by large stones. After a significant hail event, siding damage is often more visually obvious than roof damage, and your insurance claim should include every affected surface. Gates Enterprises inspects and documents siding damage as part of our comprehensive storm assessments.${city.neighborhoods ? ` We've completed siding projects throughout ${city.city}, from ${city.neighborhoods[0]} to ${city.neighborhoods[Math.min(2, city.neighborhoods.length - 1)]}.` : ""}`,
      moderate: `${city.city} homes in ${city.county} County need siding that can handle more than just hail. Colorado's intense UV radiation fades and degrades siding faster than in most states, winter temperature swings cause expansion and contraction stress, and driving rain from summer thunderstorms tests every seal and joint. James Hardie fiber cement siding is our top recommendation for ${city.city} homes because it handles all of these conditions without the maintenance headaches of wood or the brittleness of vinyl.`,
      low: `Siding on mountain homes in ${city.city} faces a unique set of challenges. ${city.county} County's elevation means more UV exposure, wider temperature swings, and for many properties, wildfire risk that makes fire-rated siding materials essential. James Hardie fiber cement carries a Class A fire rating and performs exceptionally well at altitude. We also install wood siding for homeowners who prefer a natural mountain aesthetic, with proper detailing to handle ${city.city}'s moisture and temperature conditions.`,
    },
    "gutters": {
      high: `In ${city.city}, gutters take a double hit — they need to handle the intense rainfall from the same thunderstorms that produce damaging hail, and the hail itself can dent, bend, and destroy gutter systems. ${city.county} County homeowners frequently need gutter replacement alongside roof and siding restoration after significant storm events. Gates Enterprises fabricates seamless aluminum gutters on-site and installs them with heavy-duty brackets designed for Colorado conditions.`,
      moderate: `Properly functioning gutters are critical for ${city.city} homes in ${city.county} County. Summer thunderstorms can dump over an inch of rain in under an hour, and without adequate gutters and downspouts, that water pools against your foundation, erodes landscaping, and causes basement or crawlspace issues. Colorado's freeze-thaw cycles make the problem worse — standing water in damaged gutters becomes ice, expanding and destroying the system from inside.`,
      low: `Gutter systems in ${city.city} face challenges unique to mountain living. Heavy snowfall and ice formation can tear gutters off the fascia if they're not properly secured. Pine needles and mountain debris clog gutters quickly, creating ice dams in winter that back water under shingles and cause interior damage. Gates Enterprises installs gutters with reinforced brackets and offers gutter guard systems specifically suited for ${city.county} County mountain conditions.`,
    },
    "roof-inspection": {
      high: `Given ${city.city}'s position in one of America's most active hail corridors, regular roof inspections are essential — not optional. ${city.county} County homes often have damage from storms that homeowners didn't even realize were significant. Our inspectors know exactly what hail damage looks like on every major shingle brand and can differentiate genuine storm damage from normal wear, which is critical for insurance documentation.${city.neighborhoods ? ` We provide inspections throughout ${city.city}, including ${city.neighborhoods.slice(0, 3).join(", ")}.` : ""}`,
      moderate: `${city.city} homeowners in ${city.county} County should have their roofs inspected annually and after any significant weather event. Even moderate hail and wind can compromise your roof's integrity in ways that aren't visible from the ground. Catching a $500 repair early prevents a $15,000 problem later. Gates Enterprises provides detailed, documented inspections that give you — and your insurance company — a clear picture of your roof's condition.`,
      low: `Mountain roofs in ${city.city} age differently than metro roofs. While hail is less frequent in ${city.county} County, the combination of heavy snow, ice dams, UV degradation at elevation, and wind stress creates issues that are best caught early. Our mountain-experienced inspectors know where to look — behind chimneys where snow drifts, at eave transitions where ice dams form, and at exposed ridgelines where wind damage concentrates.`,
    },
    "insurance-claims": {
      high: `${city.city} homeowners file more insurance claims per capita than almost any other community in Colorado — that's what happens when you live in ${city.county} County's hail corridor. But filing a claim and getting the full scope of work approved are two different things. Insurance adjusters often miss damage or undervalue repairs. Gates Enterprises has managed thousands of claims in high-hail markets and knows how to document damage in the format adjusters need to approve the full scope.${city.neighborhoods ? ` We've guided homeowners throughout ${city.city} — from ${city.neighborhoods[0]} to ${city.neighborhoods[Math.min(2, city.neighborhoods.length - 1)]} — through the insurance process.` : ""}`,
      moderate: `When a storm damages your ${city.city} home, the insurance process can feel overwhelming. ${city.county} County homeowners need an advocate who understands both roofing and insurance. Gates Enterprises prepares Xactimate-formatted estimates, meets adjusters on-site, and handles supplements when the initial approval falls short. We've recovered hundreds of thousands in supplemental approvals that homeowners would have lost without professional representation.`,
      low: `Insurance claims in mountain communities like ${city.city} have unique considerations. ${city.county} County homes often have more complex roof systems, steeper pitches, and harder access — all factors that increase the legitimate cost of restoration but that adjusters sometimes undervalue. Our team understands mountain-specific pricing and access factors and documents them properly in every claim.`,
    },
    "metal-roofing": {
      high: `For ${city.city} homeowners tired of replacing their asphalt roof every time a major hailstorm sweeps through ${city.county} County, metal roofing is the long-term answer. Standing seam metal roofing exceeds Class 4 impact resistance standards and maintains its waterproofing integrity through impacts that would destroy conventional shingles. While the upfront cost is higher, ${city.city} homeowners often recoup the difference within two hail cycles that would have required full asphalt replacement.${city.neighborhoods ? ` We've installed metal roofing systems in ${city.neighborhoods[0]}, ${city.neighborhoods[Math.min(1, city.neighborhoods.length - 1)]}, and across ${city.city}.` : ""}`,
      moderate: `Metal roofing is gaining popularity in ${city.city} and throughout ${city.county} County because it solves multiple problems at once — it handles hail better than asphalt, reflects Colorado's intense UV radiation to reduce cooling costs, and lasts 50+ years compared to 15-25 years for conventional shingles. For ${city.city} homeowners planning to stay in their home long-term, the math strongly favors metal.`,
      low: `Mountain homes in ${city.city} are ideal candidates for metal roofing. The steep pitches common in ${city.county} County mountain construction work perfectly with standing seam systems, allowing snow to shed efficiently. Metal's fire resistance is critical in wildfire-prone mountain areas, and its 50+ year lifespan means you won't be re-roofing in the harsh conditions that make mountain roofing projects more difficult and expensive than metro jobs.`,
    },
  };

  const reasons = serviceReasons[service.slug];
  if (reasons) return reasons[city.hailRisk] || reasons.moderate;

  // Fallback for any unmapped service
  return `${city.city} homeowners in ${city.county} County need contractors who understand local conditions and stand behind their work with manufacturer-backed warranties. Gates Enterprises provides ${service.service.toLowerCase()} with the same quadruple-certified standards we bring to every project across the Front Range.`;
}

function getWhyChoose(city: CityData, service: ServiceData): string[] {
  const base = [
    `GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master certified`,
    `301 Google reviews with a 4.8-star rating from Colorado homeowners`,
    `Over thousands of roofing projects completed across the Front Range`,
    `Free inspections with no obligation and no pressure`,
    `${city.county} County permit and inspection coordination included`,
    `Full manufacturer warranty options on every certified installation`,
  ];

  const hailSpecific: Record<string, string[]> = {
    high: [
      `Experienced with high-frequency hail claims in ${city.city} and ${city.county} County`,
      `Class 4 impact-resistant material options that qualify for insurance premium discounts`,
    ],
    moderate: [
      `Familiar with ${city.county} County permitting requirements and inspection processes`,
      `Serving ${city.city} and surrounding communities from our Lakewood headquarters`,
    ],
    low: [
      `Mountain roofing specialists experienced with snow loads, ice dams, and altitude conditions`,
      `Understanding of ${city.county} County mountain access and scheduling requirements`,
    ],
  };

  return [...base, ...(hailSpecific[city.hailRisk] || hailSpecific.moderate)];
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function ServiceCityContent({
  serviceSlug,
  citySlug,
}: {
  serviceSlug: string;
  citySlug: string;
}) {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) return null;

  const nearbyCities = getNearbyCities(citySlug, 30, 8);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const whyChooseItems = getWhyChoose(city, service);
  const faqItems = getServiceCityFAQItems(citySlug, serviceSlug);
  const relatedBlogPosts = getRelatedBlogPosts(service.slug, city.slug, 5);

  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* ── Hero ── */}
      <section
        style={{
          padding: "160px 24px 80px",
          background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
            }}
          >
            Home → Services →{" "}
            <Link
              href={`/services/${service.parentSlug}`}
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              {service.service}
            </Link>{" "}
            → {city.city}
          </Link>

          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: WHITE,
              margin: "20px 0 16px",
              lineHeight: 1.1,
            }}
          >
            {service.service} in {city.city}, CO
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              color: ACCENT,
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            {city.county} County · Quadruple Manufacturer Certified · 301 Reviews · 4.8★
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 700,
            }}
          >
            {getHeroIntro(city, service)}
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: ACCENT,
                color: WHITE,
                borderRadius: 100,
                padding: "16px 32px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Request a Free Estimate →
            </Link>
            <a
              href="tel:7207663377"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: WHITE,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "16px 32px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ── Why City Needs This Service ── */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Why {city.city} Homeowners Need {service.service}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.85,
              color: TEXT_LIGHT,
              marginBottom: 40,
            }}
          >
            {getWhySection(city, service)}
          </p>

          {/* ── Process ── */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Our {service.service} Process
          </h2>
          <div style={{ marginBottom: 48 }}>
            {service.process.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 24,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: ACCENT,
                    color: WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: 4,
                      marginTop: 0,
                    }}
                  >
                    {step.step}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: TEXT_LIGHT,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Why Choose Gates ── */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Why Choose Gates Enterprises for {service.service} in {city.city}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
            {whyChooseItems.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginTop: 2, flexShrink: 0 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    color: TEXT,
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ── Other Services in This City ── */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Our Services in {city.city}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {otherServices.map((s, i) => (
              <Link
                key={i}
                href={`/services/${s.slug}/${city.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: LIGHT_BG,
                    borderRadius: 16,
                    padding: "24px 20px",
                    border: "1px solid rgba(13,33,55,0.04)",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: 8,
                    }}
                  >
                    {s.service}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: TEXT_LIGHT,
                      margin: 0,
                    }}
                  >
                    {s.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Related Articles ── */}
          {relatedBlogPosts.length > 0 && (
            <>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 30,
                  fontWeight: 800,
                  color: NAVY,
                  marginBottom: 20,
                }}
              >
                {service.service} Resources for {city.city} Homeowners
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: TEXT_LIGHT,
                  marginBottom: 20,
                }}
              >
                Learn more about {service.service.toLowerCase()} in Colorado with these guides from the Gates Enterprises blog:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 12,
                  marginBottom: 48,
                }}
              >
                {relatedBlogPosts.map((post, i) => (
                  <Link
                    key={i}
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      textDecoration: "none",
                      background: LIGHT_BG,
                      borderRadius: 12,
                      padding: "16px 20px",
                      border: "1px solid rgba(13,33,55,0.06)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={ACCENT}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    </svg>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          color: ACCENT,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                        }}
                      >
                        {post.category}
                      </span>
                      <div
                        style={{
                          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                          fontSize: 15,
                          fontWeight: 600,
                          color: NAVY,
                          lineHeight: 1.4,
                        }}
                      >
                        {post.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* ── Nearby Cities ── */}
          {nearbyCities.length > 0 && (
            <>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 30,
                  fontWeight: 800,
                  color: NAVY,
                  marginBottom: 20,
                }}
              >
                Serving {city.city} and Surrounding Areas
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: TEXT_LIGHT,
                  marginBottom: 20,
                }}
              >
                In addition to {city.city}, Gates Enterprises provides {service.service.toLowerCase()}{" "}
                services throughout {city.county} County and the surrounding area:
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 48,
                }}
              >
                {nearbyCities.map((nc, i) => (
                  <Link
                    key={i}
                    href={`/services/${service.slug}/${nc.slug}`}
                    style={{
                      background: LIGHT_BG,
                      borderRadius: 100,
                      padding: "10px 20px",
                      textDecoration: "none",
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: ACCENT,
                      border: "1px solid rgba(37,99,235,0.12)",
                    }}
                  >
                    {service.service} in {nc.city} →
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* FAQs moved to FAQAccordion below */}
        </div>
      </section>

      <HailScoreCard
        citySlug={city.slug}
        cityName={city.city}
        serviceSlug={service.slug}
        serviceName={service.service}
      />

      <FAQAccordion
        items={faqItems}
        title={`${service.service} in ${city.city}: Frequently Asked Questions`}
      />

      <LocalSEOInfo citySlug={city.slug} cityName={city.city} />

      {/* ── Other Services in This City ── */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>ALL SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>
            Other Services in {city.city}, CO
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>
            Gates Enterprises provides a full range of roofing and exterior services in {city.city}.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {services.filter((s) => s.slug !== service.slug).map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}/${city.slug}`}
                style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.service} in {city.city}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href={`/services/${service.parentSlug}`}
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}
            >
              ← All {service.service} Locations
            </Link>
            <Link
              href={`/areas/${city.slug}`}
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}
            >
              ← {city.city} Main Page
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title={`Need ${service.service.toLowerCase()} in ${city.city}?`}
        subtitle={`Call Gates Enterprises at (720) 766-3377 for a free inspection and estimate. Quadruple manufacturer certified. 301 Google reviews, 4.8 stars. Serving ${city.city} and all of ${city.county} County.`}
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
