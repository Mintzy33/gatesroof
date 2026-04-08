import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import { breadcrumbSchema, BUSINESS_INFO } from "../../../lib/schema";
import {
  ShieldCheck,
  Award,
  MapPin,
  Star,
  Phone,
  Clock,
  Users,
  Building2,
  Hammer,
  Heart,
  FileCheck,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Gates Enterprises LLC | Colorado's Most Certified Roofing Company",
  description:
    "Gates Enterprises LLC has completed 7,200+ roofs across 65+ Colorado cities since 2014. GAF, Owens Corning, Malarkey, and CertainTeed certified.",
  alternates: {
    canonical: "https://www.gatesroof.com/about/gates-enterprises",
  },
  openGraph: {
    title: "Gates Enterprises LLC | Colorado's Most Certified Roofing Company",
    description:
      "Gates Enterprises LLC has completed 7,200+ roofs across 65+ Colorado cities since 2014. GAF, Owens Corning, Malarkey, and CertainTeed certified.",
    url: "https://www.gatesroof.com/about/gates-enterprises",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  name: "Gates Enterprises LLC",
  alternateName: "Gates Enterprises",
  url: "https://www.gatesroof.com",
  logo: "https://www.gatesroof.com/images/gates-enterprises-logo.png",
  image: "https://www.gatesroof.com/images/gates-enterprises-og.jpg",
  description:
    "Colorado's only quadruple manufacturer-certified roofing contractor. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master. Thousands of roofs completed since 2014.",
  telephone: "+17207663377",
  email: "info@gatesroof.com",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    "@id": "https://www.gatesroof.com/about/alex-chicilo#person",
    name: "Alex Chicilo",
    url: "https://www.gatesroof.com/about/alex-chicilo",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1445 Holland St",
    addressLocality: "Lakewood",
    addressRegion: "CO",
    postalCode: "80215",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7047,
    longitude: -105.0814,
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 100,
  },
  areaServed: [
    { "@type": "City", name: "Denver", addressRegion: "CO" },
    { "@type": "City", name: "Lakewood", addressRegion: "CO" },
    { "@type": "City", name: "Aurora", addressRegion: "CO" },
    { "@type": "City", name: "Arvada", addressRegion: "CO" },
    { "@type": "City", name: "Westminster", addressRegion: "CO" },
    { "@type": "City", name: "Thornton", addressRegion: "CO" },
    { "@type": "City", name: "Centennial", addressRegion: "CO" },
    { "@type": "City", name: "Littleton", addressRegion: "CO" },
    { "@type": "City", name: "Englewood", addressRegion: "CO" },
    { "@type": "City", name: "Wheat Ridge", addressRegion: "CO" },
    { "@type": "City", name: "Golden", addressRegion: "CO" },
    { "@type": "City", name: "Broomfield", addressRegion: "CO" },
    { "@type": "City", name: "Highlands Ranch", addressRegion: "CO" },
    { "@type": "City", name: "Parker", addressRegion: "CO" },
    { "@type": "City", name: "Castle Rock", addressRegion: "CO" },
    { "@type": "City", name: "Commerce City", addressRegion: "CO" },
    { "@type": "City", name: "Conifer", addressRegion: "CO" },
    { "@type": "City", name: "Edgewater", addressRegion: "CO" },
    { "@type": "City", name: "Federal Heights", addressRegion: "CO" },
    { "@type": "City", name: "Northglenn", addressRegion: "CO" },
    { "@type": "City", name: "Brighton", addressRegion: "CO" },
    { "@type": "City", name: "Superior", addressRegion: "CO" },
    { "@type": "City", name: "Lone Tree", addressRegion: "CO" },
    { "@type": "City", name: "Morrison", addressRegion: "CO" },
    { "@type": "City", name: "Evergreen", addressRegion: "CO" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing and Exterior Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement",
          url: "https://www.gatesroof.com/services/roof-replacement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storm and Hail Damage Repair",
          url: "https://www.gatesroof.com/services/storm-hail-damage",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair",
          url: "https://www.gatesroof.com/services/roof-repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Siding Installation",
          url: "https://www.gatesroof.com/services/siding-exterior",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gutter Installation",
          url: "https://www.gatesroof.com/services/gutters-guards",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insurance Restoration",
          url: "https://www.gatesroof.com/services/insurance-claims",
        },
      },
    ],
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Manufacturer Certification",
      name: "GAF Master Elite Contractor",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Manufacturer Certification",
      name: "Owens Corning Preferred Contractor",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Manufacturer Certification",
      name: "Malarkey Emerald Premium Contractor",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Manufacturer Certification",
      name: "CertainTeed Shingle Master",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount:   "308",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "00:00",
      closes: "00:00",
      description: "By appointment",
    },
  ],
  priceRange: "$$",
  knowsAbout: [
    "Residential roofing",
    "Commercial roofing",
    "Insurance restoration",
    "Hail damage repair",
    "Class 4 impact-resistant shingles",
    "GAF roofing systems",
    "Owens Corning roofing products",
    "Malarkey shingles",
    "CertainTeed roofing",
    "Siding installation",
    "Gutter installation",
  ],
  sameAs: [
    "https://www.facebook.com/GatesEnterprisesLLC/",
    "https://www.instagram.com/gatesroofing",
    "https://www.linkedin.com/company/gatesenterprisesllc/",
    "https://www.google.com/maps/place/Gates+Enterprises+LLC",
  ],
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "About", url: "https://www.gatesroof.com/about" },
  {
    name: "Gates Enterprises",
    url: "https://www.gatesroof.com/about/gates-enterprises",
  },
]);

const timeline = [
  {
    year: "2014",
    title: "Gates Enterprises Founded",
    desc: "Alex Chicilo started Gates Enterprises with one truck, one ladder, and one rule: treat every roof like it belongs to your own family.",
  },
  {
    year: "2016",
    title: "1,000 Roofs Completed",
    desc: "Grew entirely through referrals and word of mouth. No advertising, no gimmicks. Just quality work and honest communication.",
  },
  {
    year: "2018",
    title: "GAF Master Elite Certified",
    desc: "Earned the most prestigious certification in residential roofing. Only the top 2% of contractors in North America qualify.",
  },
  {
    year: "2020",
    title: "Quadruple Manufacturer Certified",
    desc: "Earned certifications from GAF, Owens Corning, Malarkey, and CertainTeed. Fewer than 1% of contractors hold all four.",
  },
  {
    year: "2022",
    title: "5,000+ Roofs Completed",
    desc: "Surpassed 5,000 completed projects. Recovered millions in insurance supplements for Colorado homeowners.",
  },
  {
    year: "2024",
    title: "Full Exterior Services",
    desc: "Expanded into siding, gutters, windows, and paint. One contractor for everything above the foundation.",
  },
  {
    year: "2026",
    title: "100+ Employees Strong",
    desc: "Grew to over 100 team members with dedicated facilities. Still based in Lakewood. Still answering our own phones.",
  },
];

const serviceAreas = [
  "Denver",
  "Lakewood",
  "Aurora",
  "Arvada",
  "Westminster",
  "Thornton",
  "Centennial",
  "Littleton",
  "Englewood",
  "Wheat Ridge",
  "Golden",
  "Broomfield",
  "Highlands Ranch",
  "Parker",
  "Castle Rock",
  "Commerce City",
  "Conifer",
  "Edgewater",
  "Federal Heights",
  "Northglenn",
  "Brighton",
  "Superior",
  "Lone Tree",
  "Morrison",
  "Evergreen",
];

export default function GatesEnterprisesPage() {
  return (
    <div style={{ background: WHITE, minHeight: "100vh" }}>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />

      {/* Hero */}
      <section
        style={{
          padding: "140px 24px 80px",
          background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            Company Credentials
          </p>
          <h1
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: WHITE,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Gates Enterprises LLC
          </h1>
          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Colorado&apos;s only quadruple manufacturer-certified roofing
            company. Founded in 2014. Thousands of roofs completed. 65+
            cities served.
          </p>
        </div>
      </section>

      {/* Company History Timeline */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 32,
              fontWeight: 700,
              color: NAVY,
              margin: "0 0 48px",
              textAlign: "center",
            }}
          >
            Our Story
          </h2>

          <div
            style={{
              position: "relative",
              paddingLeft: 40,
              borderLeft: `3px solid ${ACCENT}`,
            }}
          >
            {timeline.map((item, i) => (
              <div
                key={item.year}
                style={{
                  marginBottom: i === timeline.length - 1 ? 0 : 40,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -52,
                    top: 4,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: ACCENT,
                    border: `3px solid ${WHITE}`,
                  }}
                />
                <p
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: ACCENT,
                    margin: "0 0 4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.year}
                </p>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: NAVY,
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Detailed */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              Industry Credentials
            </p>
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 32,
                fontWeight: 700,
                color: NAVY,
                margin: 0,
              }}
            >
              Certifications and Standards
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: <Award size={32} color={ACCENT} />,
                title: "GAF Master Elite",
                desc: "The highest contractor designation from GAF, North America's largest shingle manufacturer. Only 2% of roofers qualify. Unlocks the Golden Pledge Lifetime Warranty with 25-year workmanship coverage, the strongest in the industry.",
              },
              {
                icon: <Award size={32} color={ACCENT} />,
                title: "Owens Corning Preferred",
                desc: "Owens Corning's top-tier contractor program. Requires ongoing training, verified installation quality, and documented customer satisfaction. Allows us to offer Owens Corning's Preferred Protection Limited Warranty.",
              },
              {
                icon: <Award size={32} color={ACCENT} />,
                title: "Malarkey Emerald Premium",
                desc: "Malarkey Roofing Products' premier contractor credential. Demonstrates expertise across Malarkey's entire product line, including their industry-leading Vista AR impact-resistant shingles with rubberized SBS polymer technology.",
              },
              {
                icon: <Award size={32} color={ACCENT} />,
                title: "CertainTeed Shingle Master",
                desc: "CertainTeed's premier residential roofing certification. Requires factory-level training, licensing verification, and documented commitment to quality installation. Enables CertainTeed's strongest warranty options.",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                style={{
                  background: WHITE,
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid rgba(13,33,55,0.06)",
                }}
              >
                <div style={{ marginBottom: 16 }}>{cert.icon}</div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: NAVY,
                    margin: "0 0 12px",
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <MapPin
              size={32}
              color={ACCENT}
              style={{ marginBottom: 12 }}
            />
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 32,
                fontWeight: 700,
                color: NAVY,
                margin: "0 0 12px",
              }}
            >
              Service Area
            </h2>
            <p
              style={{
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                color: TEXT_LIGHT,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Gates Enterprises serves the entire Colorado Front Range,
              from Castle Rock in the south to Brighton in the north, and
              from Evergreen in the foothills to Aurora in the east. Over
              65 cities and communities.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {serviceAreas.map((city) => {
              const slug = city
                .toLowerCase()
                .replace(/\s+/g, "-");
              return (
                <Link
                  key={city}
                  href={`/areas/${slug}`}
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: NAVY,
                    background: LIGHT_BG,
                    padding: "10px 18px",
                    borderRadius: 100,
                    textDecoration: "none",
                    border: "1px solid rgba(13,33,55,0.08)",
                    transition: "background 0.2s",
                  }}
                >
                  {city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance and Licensing */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 32,
                fontWeight: 700,
                color: NAVY,
                margin: 0,
              }}
            >
              Insurance and Licensing
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                background: WHITE,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <FileCheck
                size={28}
                color={ACCENT}
                style={{ marginBottom: 16 }}
              />
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Licensed in Colorado
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Gates Enterprises is fully licensed to perform roofing
                and exterior construction work in the state of Colorado.
                We maintain all required local permits and comply with
                Colorado building codes on every project.
              </p>
            </div>

            <div
              style={{
                background: WHITE,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <ShieldCheck
                size={28}
                color={ACCENT}
                style={{ marginBottom: 16 }}
              />
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Fully Insured
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                We carry comprehensive general liability insurance and
                workers&apos; compensation coverage. This may protect
                homeowners from liability in the event of an accident on
                their property. Proof of insurance is available upon
                request.
              </p>
            </div>

            <div
              style={{
                background: WHITE,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <Hammer
                size={28}
                color={ACCENT}
                style={{ marginBottom: 16 }}
              />
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Warranty Backed
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Every project is backed by manufacturer warranties and
                our own workmanship guarantee. Our quadruple
                certification unlocks the strongest warranty options from
                GAF, Owens Corning, Malarkey, and CertainTeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Heart
              size={32}
              color={ACCENT}
              style={{ marginBottom: 12 }}
            />
            <h2
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 32,
                fontWeight: 700,
                color: NAVY,
                margin: "0 0 12px",
              }}
            >
              Community Involvement
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                background: LIGHT_BG,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Local Hiring
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Gates Enterprises employs over 100 people from across
                the Front Range. We invest in training, career
                development, and competitive compensation because great
                roofing starts with great people.
              </p>
            </div>

            <div
              style={{
                background: LIGHT_BG,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Storm Response
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                When major storms hit the Front Range, our team is among
                the first to respond. We prioritize emergency repairs for
                homeowners with active leaks or structural damage, often
                completing temporary tarps and fixes within 24 hours.
              </p>
            </div>

            <div
              style={{
                background: LIGHT_BG,
                borderRadius: 16,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: NAVY,
                  margin: "0 0 12px",
                }}
              >
                Homeowner Education
              </h3>
              <p
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Through our{" "}
                <Link
                  href="/blog"
                  style={{ color: ACCENT, textDecoration: "underline" }}
                >
                  blog
                </Link>
                ,{" "}
                <Link
                  href="/tools"
                  style={{ color: ACCENT, textDecoration: "underline" }}
                >
                  free tools
                </Link>
                , and{" "}
                <a
                  href="https://myhailscore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: ACCENT, textDecoration: "underline" }}
                >
                  HailScore
                </a>
                , we provide Colorado homeowners with the information
                they need to make smart decisions about their roofs,
                insurance, and home protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ padding: "60px 24px 80px", background: LIGHT_BG }}>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 28,
              fontWeight: 700,
              color: NAVY,
              margin: "0 0 24px",
            }}
          >
            Get in Touch
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Phone size={20} color={ACCENT} />
              <a
                href="tel:+17207663377"
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: NAVY,
                  textDecoration: "none",
                }}
              >
                (720) 766-3377
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <MapPin size={20} color={ACCENT} />
              <span
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 16,
                  color: TEXT,
                }}
              >
                Denver, CO
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Clock size={20} color={ACCENT} />
              <span
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 16,
                  color: TEXT,
                }}
              >
                Mon-Fri 8am-5pm, Sat by appointment
              </span>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 16 }}>
              <Link
                href="/about/alex-chicilo"
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: ACCENT,
                  textDecoration: "underline",
                }}
              >
                Meet the Owner
              </Link>
              <Link
                href="/contact"
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: ACCENT,
                  textDecoration: "underline",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/reviews"
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: ACCENT,
                  textDecoration: "underline",
                }}
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready for a Free Inspection?"
        subtitle="Colorado's most certified roofing team is ready to help. Call (720) 766-3377 or schedule online."
      />
      <Footer />
    </div>
  );
}
