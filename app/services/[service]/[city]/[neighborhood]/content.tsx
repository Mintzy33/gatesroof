"use client";
import Link from "next/link";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CTA from "../../../../components/CTA";
import {
  services,
  getCityBySlug,
  getServiceBySlug,
} from "../../../../../lib/service-areas-data";
import {
  getNeighborhoodBySlug,
  getRelatedNeighborhoods,
  getNeighborhoodsByCity,
} from "../../../../../lib/neighborhoods";
import HailScoreCard from "../../../../components/HailScoreCard";
import FAQAccordion from "../../../../components/FAQAccordion";
import { getRelatedBlogPosts } from "../../../../../lib/blog-links";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

// ---------------------------------------------------------------------------
// Unique content generators per neighborhood + service
// ---------------------------------------------------------------------------

function getNeighborhoodHeroIntro(
  neighborhoodName: string,
  neighborhoodDesc: string,
  serviceName: string,
  cityName: string,
  housingAge: string,
  commonRoofTypes: string,
): string {
  return `${neighborhoodDesc} Homes built during the ${housingAge} era in ${neighborhoodName} typically feature ${commonRoofTypes.toLowerCase()}, each requiring specific expertise for proper ${serviceName.toLowerCase()}. Gates Enterprises brings quadruple manufacturer certification and thousands of completed projects to every job in ${neighborhoodName}, ${cityName}.`;
}

function getNeighborhoodWhySection(
  neighborhoodName: string,
  cityName: string,
  housingAge: string,
  commonRoofTypes: string,
  uniqueFact: string,
  serviceName: string,
  avgHomeValue: string,
): string {
  return `${neighborhoodName} homeowners face roofing challenges shaped by the neighborhood's ${housingAge} housing stock. ${uniqueFact} With home values averaging ${avgHomeValue} in ${neighborhoodName}, protecting your roof investment is critical. Colorado's combination of hail, UV radiation, freeze-thaw cycles, and wind means your ${commonRoofTypes.toLowerCase()} roof system needs a contractor who understands both the materials and the local conditions. Gates Enterprises provides ${serviceName.toLowerCase()} in ${neighborhoodName} with the same manufacturer-certified quality we bring to every project across ${cityName} and the Front Range.`;
}

function getNeighborhoodWhyChoose(neighborhoodName: string, cityName: string, housingAge: string): string[] {
  return [
    "GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master certified",
    "301 Google reviews with a 4.8-star rating from Colorado homeowners",
    "Over thousands of roofing projects completed across the Front Range",
    "Free inspections with no obligation and no pressure",
    `Experience with ${housingAge} homes common in ${neighborhoodName}`,
    `Local knowledge of ${cityName} permitting and inspection requirements`,
    "Full manufacturer warranty options on every certified installation",
    `Free HailScore risk assessment for your ${neighborhoodName} property`,
  ];
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function NeighborhoodContent({
  serviceSlug,
  citySlug,
  neighborhoodSlug,
  faqItems,
}: {
  serviceSlug: string;
  citySlug: string;
  neighborhoodSlug: string;
  faqItems: { q: string; a: string }[];
}) {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);

  if (!city || !service || !neighborhood) return null;

  const relatedNeighborhoods = getRelatedNeighborhoods(neighborhoodSlug, 5);
  const allCityNeighborhoods = getNeighborhoodsByCity(citySlug);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const whyChooseItems = getNeighborhoodWhyChoose(neighborhood.name, city.city, neighborhood.housingAge);
  const relatedBlogPosts = getRelatedBlogPosts(serviceSlug, citySlug, 4);

  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          padding: "160px 24px 80px",
          background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <nav
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              Home
            </Link>
            {" \u2192 "}
            <Link
              href={`/services/${service.parentSlug}`}
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              {service.service}
            </Link>
            {" \u2192 "}
            <Link
              href={`/services/${service.slug}/${city.slug}`}
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              {city.city}
            </Link>
            {" \u2192 "}
            <span style={{ color: "rgba(255,255,255,0.7)" }}>{neighborhood.name}</span>
          </nav>

          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 800,
              color: WHITE,
              margin: "20px 0 16px",
              lineHeight: 1.1,
            }}
          >
            {service.service} in {neighborhood.name}, {city.city} CO
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
            {neighborhood.housingAge} Homes · {neighborhood.population} Residents · Quadruple Certified · 4.8&#9733;
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
            {getNeighborhoodHeroIntro(
              neighborhood.name,
              neighborhood.description,
              service.service,
              city.city,
              neighborhood.housingAge,
              neighborhood.commonRoofTypes,
            )}
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
              Request a Free Estimate
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

      {/* Why This Neighborhood Needs This Service */}
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
            Why {neighborhood.name} Homeowners Need {service.service}
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
            {getNeighborhoodWhySection(
              neighborhood.name,
              city.city,
              neighborhood.housingAge,
              neighborhood.commonRoofTypes,
              neighborhood.uniqueFact,
              service.service,
              neighborhood.avgHomeValue,
            )}
          </p>

          {/* Neighborhood Details Card */}
          <div
            style={{
              background: LIGHT_BG,
              borderRadius: 16,
              padding: "28px 24px",
              marginBottom: 48,
              border: "1px solid rgba(13,33,55,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 20,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              {neighborhood.name} at a Glance
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
              {[
                { label: "Housing Era", value: neighborhood.housingAge },
                { label: "Population", value: neighborhood.population },
                { label: "Average Home Value", value: neighborhood.avgHomeValue },
                { label: "Common Roof Types", value: neighborhood.commonRoofTypes },
              ].map((item, i) => (
                <div key={i}>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: ACCENT,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {item.label}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      color: TEXT,
                      margin: "4px 0 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
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

          {/* Why Choose Gates */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Why Choose Gates Enterprises in {neighborhood.name}
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

          {/* Other Services in This Neighborhood */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 800,
              color: NAVY,
              marginBottom: 20,
            }}
          >
            Our Services in {neighborhood.name}
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
                href={`/services/${s.slug}/${city.slug}/${neighborhood.slug}`}
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

          {/* ── Related Blog Articles ── */}
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
                Helpful Resources for {neighborhood.name} Homeowners
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 12,
                  marginBottom: 32,
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
                    <div>
                      <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>{post.category}</span>
                      <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{post.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                <Link
                  href={`/areas/${city.slug}`}
                  style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", background: "rgba(37,99,235,0.06)", padding: "8px 16px", borderRadius: 8 }}
                >
                  Roofing in {city.city} →
                </Link>
                <Link
                  href={`/services/${service.parentSlug}`}
                  style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", background: "rgba(37,99,235,0.06)", padding: "8px 16px", borderRadius: 8 }}
                >
                  All {service.service} Locations →
                </Link>
                <Link
                  href="/blog"
                  style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none", background: "rgba(37,99,235,0.06)", padding: "8px 16px", borderRadius: 8 }}
                >
                  Read Our Blog →
                </Link>
              </div>
            </>
          )}

          {/* Related Neighborhoods */}
          {relatedNeighborhoods.length > 0 && (
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
                Nearby {city.city} Neighborhoods We Serve
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 48,
                }}
              >
                {relatedNeighborhoods.map((rn, i) => (
                  <Link
                    key={i}
                    href={`/services/${service.slug}/${city.slug}/${rn.slug}`}
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
                    {service.service} in {rn.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* HailScore Card */}
      <HailScoreCard
        citySlug={city.slug}
        cityName={city.city}
        serviceSlug={service.slug}
        serviceName={service.service}
      />

      {/* FAQ */}
      <FAQAccordion
        items={faqItems.map((f) => ({ question: f.q, answer: f.a }))}
        title={`${service.service} in ${neighborhood.name}: Frequently Asked Questions`}
      />

      {/* All Services + Navigation Links */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.2em",
            }}
          >
            ALL SERVICES
          </span>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 30px)",
              fontWeight: 800,
              color: NAVY,
              margin: "10px 0 12px",
            }}
          >
            Other Services in {neighborhood.name}, {city.city}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              color: TEXT_LIGHT,
              marginBottom: 24,
              lineHeight: 1.7,
            }}
          >
            Gates Enterprises provides a full range of roofing and exterior services in{" "}
            {neighborhood.name} and throughout {city.city}.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {services
              .filter((s) => s.slug !== service.slug)
              .map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}/${city.slug}/${neighborhood.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    color: ACCENT,
                    textDecoration: "none",
                    fontWeight: 500,
                    padding: "8px 0",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {svc.service} in {neighborhood.name}
                </Link>
              ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href={`/services/${service.slug}/${city.slug}`}
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: ACCENT,
                textDecoration: "none",
              }}
            >
              &#8592; {service.service} in {city.city}
            </Link>
            <Link
              href={`/services/${service.parentSlug}`}
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: ACCENT,
                textDecoration: "none",
              }}
            >
              &#8592; All {service.service} Locations
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: ACCENT,
                textDecoration: "none",
              }}
            >
              &#8592; Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title={`Need ${service.service.toLowerCase()} in ${neighborhood.name}?`}
        subtitle={`Call Gates Enterprises at (720) 766-3377 for a free inspection and estimate in ${neighborhood.name}, ${city.city}. Quadruple manufacturer certified. 301 Google reviews, 4.8 stars.`}
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
