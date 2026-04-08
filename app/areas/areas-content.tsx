"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../components/GSAPAnimations";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

/* ─── Service definitions ─── */
const SERVICES = [
  { label: "Storm Damage Restoration", slug: "storm-hail-damage" },
  { label: "Roof Replacement", slug: "roof-replacement" },
  { label: "Roof Repair", slug: "roof-repair" },
  { label: "Siding", slug: "siding-exterior" },
  { label: "Gutters", slug: "gutters-guards" },
  { label: "Insurance Claims", slug: "insurance-claims" },
];

/* ─── Cities that have area pages ─── */
const CITIES_WITH_PAGES = new Set([
  "arvada", "aurora", "brighton", "broomfield", "castle-rock", "centennial",
  "commerce-city", "conifer", "denver", "edgewater", "englewood", "evergreen",
  "federal-heights", "golden", "highlands-ranch", "lakewood", "littleton",
  "lone-tree", "morrison", "northglenn", "parker", "superior", "thornton",
  "westminster", "wheat-ridge",
]);

interface CityDef {
  name: string;
  slug: string;
}

/* ─── Featured cities with hero images ─── */
const FEATURED: (CityDef & { image: string })[] = [
  { name: "Denver", slug: "denver", image: "/images/blog/house-edited.jpg" },
  { name: "Aurora", slug: "aurora", image: "/images/blog/drone-aerial-1.jpg" },
  { name: "Lakewood", slug: "lakewood", image: "/images/blog/gates-build.jpg" },
  { name: "Parker", slug: "parker", image: "/images/blog/parker-new-roof.jpg" },
  { name: "Castle Rock", slug: "castle-rock", image: "/images/blog/castle-rock-installation.jpg" },
  { name: "Evergreen", slug: "evergreen", image: "/images/blog/evergreen-build.jpg" },
  { name: "Fort Collins", slug: "fort-collins", image: "/images/blog/finished-roof.jpg" },
  { name: "Thornton", slug: "thornton", image: "/images/blog/big-house-edited.jpg" },
];

/* ─── Region groupings ─── */
const REGIONS: { title: string; cities: CityDef[] }[] = [
  {
    title: "Denver Metro",
    cities: [
      { name: "Denver", slug: "denver" },
      { name: "Aurora", slug: "aurora" },
      { name: "Lakewood", slug: "lakewood" },
      { name: "Arvada", slug: "arvada" },
      { name: "Westminster", slug: "westminster" },
      { name: "Thornton", slug: "thornton" },
      { name: "Wheat Ridge", slug: "wheat-ridge" },
      { name: "Commerce City", slug: "commerce-city" },
      { name: "Northglenn", slug: "northglenn" },
      { name: "Federal Heights", slug: "federal-heights" },
      { name: "Englewood", slug: "englewood" },
      { name: "Sheridan", slug: "sheridan" },
    ],
  },
  {
    title: "South Metro",
    cities: [
      { name: "Parker", slug: "parker" },
      { name: "Castle Rock", slug: "castle-rock" },
      { name: "Highlands Ranch", slug: "highlands-ranch" },
      { name: "Centennial", slug: "centennial" },
      { name: "Littleton", slug: "littleton" },
      { name: "Lone Tree", slug: "lone-tree" },
    ],
  },
  {
    title: "North Colorado",
    cities: [
      { name: "Fort Collins", slug: "fort-collins" },
      { name: "Loveland", slug: "loveland" },
      { name: "Greeley", slug: "greeley" },
      { name: "Longmont", slug: "longmont" },
      { name: "Boulder", slug: "boulder" },
      { name: "Broomfield", slug: "broomfield" },
      { name: "Brighton", slug: "brighton" },
      { name: "Superior", slug: "superior" },
    ],
  },
  {
    title: "Mountain Communities",
    cities: [
      { name: "Evergreen", slug: "evergreen" },
      { name: "Conifer", slug: "conifer" },
      { name: "Morrison", slug: "morrison" },
      { name: "Golden", slug: "golden" },
    ],
  },
];

/* ─── Small arrow icon ─── */
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ─── City Card with expandable services ─── */
function CityCard({ city }: { city: CityDef }) {
  const [expanded, setExpanded] = useState(false);
  const hasPage = CITIES_WITH_PAGES.has(city.slug);

  return (
    <div
      className="area-city-card"
      style={{
        background: WHITE,
        border: "1px solid rgba(13,33,55,0.08)",
        borderRadius: 16,
        padding: "24px 20px",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(!expanded); } }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          {hasPage ? (
            <Link
              href={`/areas/${city.slug}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: NAVY,
                textDecoration: "none",
              }}
            >
              {city.name}
            </Link>
          ) : (
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                fontWeight: 600,
                color: NAVY,
              }}
            >
              {city.name}
            </span>
          )}
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 13,
            color: TEXT_LIGHT,
            margin: "4px 0 0",
          }}>
            {SERVICES.length} services available
          </p>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: expanded ? ACCENT : "rgba(37,99,235,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={expanded ? WHITE : ACCENT}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Service links — always in DOM for SEO, visually hidden until expanded */}
      <div
        className="area-card-services"
        style={{
          maxHeight: expanded ? 300 : 0,
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
          marginTop: expanded ? 16 : 0,
          borderTop: expanded ? "1px solid rgba(13,33,55,0.06)" : "1px solid transparent",
          paddingTop: expanded ? 16 : 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              href={hasPage ? `/services/${svc.slug}/${city.slug}` : `/services/${svc.slug}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                color: ACCENT,
                textDecoration: "none",
                fontWeight: 500,
                padding: "4px 0",
              }}
            >
              <ChevronRight />
              {svc.label} in {city.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Hidden service links for SEO when card is collapsed — screen reader accessible */}
      <noscript>
        <div style={{ marginTop: 16 }}>
          {SERVICES.map((svc) => (
            <a
              key={svc.slug}
              href={hasPage ? `/services/${svc.slug}/${city.slug}` : `/services/${svc.slug}`}
              style={{ display: "block", padding: "4px 0" }}
            >
              {svc.label} in {city.name}
            </a>
          ))}
        </div>
      </noscript>
    </div>
  );
}

/* ─── Featured City Card ─── */
function FeaturedCard({ city }: { city: (typeof FEATURED)[number] }) {
  const hasPage = CITIES_WITH_PAGES.has(city.slug);

  const inner = (
    <div
      className="area-featured-card"
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        height: 280,
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <Image
        src={city.image}
        alt={`Roofing services in ${city.name}, Colorado`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(13,33,55,0.15) 0%, rgba(13,33,55,0.75) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: 28,
            fontWeight: 800,
            color: WHITE,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {city.name}
        </h3>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: WHITE,
            background: ACCENT,
            borderRadius: 100,
            padding: "8px 18px",
            width: "fit-content",
          }}
        >
          View Area
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );

  if (hasPage) {
    return (
      <Link href={`/areas/${city.slug}`} style={{ textDecoration: "none" }}>
        {inner}
      </Link>
    );
  }

  return inner;
}

/* ─── Main Page Content ─── */
export default function AreasContent() {
  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          background: NAVY,
          padding: "160px 24px 80px",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <ScrollReveal>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16,
              }}
            >
              SERVICE AREAS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: WHITE,
                lineHeight: 1.1,
                margin: "0 0 20px",
              }}
            >
              Serving the Entire Colorado{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Front Range
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                maxWidth: 560,
                margin: "0 auto 40px",
              }}
            >
              From Fort Collins to Castle Rock, Gates Enterprises is Colorado&apos;s most certified roofing contractor. Find your city below.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div
              className="areas-hero-stats"
              style={{
                display: "inline-flex",
                gap: 0,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {[
                { value: 30, suffix: "+", label: "Cities Served" },
                { value: 7200, suffix: "+", label: "Roofs Completed" },
                { value: 308, suffix: "", label: "Reviews" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px 36px",
                    textAlign: "center",
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 32,
                      fontWeight: 800,
                      color: WHITE,
                      lineHeight: 1,
                    }}
                  >
                    <CounterGSAP end={stat.value} suffix={stat.suffix} duration={2.2} delay={0.5} />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      marginTop: 6,
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED CITIES ─── */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 10,
              }}
            >
              POPULAR AREAS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 800,
                color: NAVY,
                margin: "0 0 40px",
                lineHeight: 1.15,
              }}
            >
              Our Most Requested Cities
            </h2>
          </ScrollReveal>
          <StaggerCards
            className="areas-featured-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            direction="scale"
            stagger={0.08}
          >
            {FEATURED.map((city) => (
              <FeaturedCard key={city.slug} city={city} />
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── ALL REGIONS ─── */}
      {REGIONS.map((region, regionIdx) => (
        <section
          key={region.title}
          style={{
            padding: "72px 24px",
            background: regionIdx % 2 === 0 ? WHITE : LIGHT_BG,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontSize: "clamp(24px, 3.5vw, 32px)",
                    fontWeight: 800,
                    color: NAVY,
                    margin: "0 0 8px",
                    lineHeight: 1.2,
                  }}
                >
                  {region.title}
                </h2>
                <div
                  style={{
                    width: 48,
                    height: 3,
                    background: `linear-gradient(90deg, ${ACCENT}, #60A5FA)`,
                    borderRadius: 2,
                  }}
                />
              </div>
            </ScrollReveal>
            <StaggerCards
              className="areas-region-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
              direction="up"
              stagger={0.06}
              distance={30}
            >
              {region.cities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </StaggerCards>
          </div>
        </section>
      ))}

      {/* ─── BOTTOM CTA ─── */}
      <section style={{ padding: "80px 24px", background: NAVY, textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 800,
                color: WHITE,
                margin: "0 0 16px",
                lineHeight: 1.15,
              }}
            >
              Don&apos;t See Your City?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                margin: "0 0 32px",
              }}
            >
              We serve communities across Colorado&apos;s Front Range. If your city isn&apos;t listed, reach out and we&apos;ll let you know if we can help.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: ACCENT,
                color: WHITE,
                borderRadius: 14,
                padding: "16px 36px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Request a Free Inspection
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        .area-city-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13,33,55,0.08);
          border-color: rgba(37,99,235,0.15);
        }
        .area-featured-card:hover {
          transform: scale(1.02);
          box-shadow: 0 16px 40px rgba(13,33,55,0.2);
        }
        @media (max-width: 1024px) {
          .areas-featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .areas-region-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .areas-featured-grid {
            grid-template-columns: 1fr !important;
          }
          .areas-region-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .areas-hero-stats {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 280px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .areas-hero-stats > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding: 16px 24px !important;
          }
          .areas-hero-stats > div:last-child {
            border-bottom: none;
          }
        }
        @media (max-width: 480px) {
          .areas-region-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
