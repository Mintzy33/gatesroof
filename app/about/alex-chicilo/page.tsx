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
  Zap,
  BarChart3,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Alex Chicilo | Owner, Gates Enterprises | Colorado Roofing Expert",
  description:
    "Meet Alex Chicilo, owner of Colorado's only 4x certified roofer. 7,200+ roofs, 306 Reviews, 4.9★. Creator of HailScore. Call (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/about/alex-chicilo" },
  openGraph: {
    title: "Alex Chicilo | Owner, Gates Enterprises | Colorado Roofing Expert",
    description:
      "Meet Alex Chicilo, owner of Colorado's only 4x certified roofer. 7,200+ roofs, 306 Reviews, 4.9★. Creator of HailScore. Call (720) 766-3377",
    url: "https://www.gatesroof.com/about/alex-chicilo",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "profile",
  },
};

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.gatesroof.com/about/alex-chicilo#person",
  name: "Alex Chicilo",
  jobTitle: "Owner",
  worksFor: {
    "@type": "RoofingContractor",
    "@id": "https://www.gatesroof.com/#organization",
    name: "Gates Enterprises LLC",
    url: "https://www.gatesroof.com",
  },
  url: "https://www.gatesroof.com/about/alex-chicilo",
  image: "https://www.gatesroof.com/images/alex-chicilo.jpg",
  description:
    "Owner of Gates Enterprises LLC, Colorado's only quadruple manufacturer-certified roofing contractor. Creator of HailScore, a proprietary hail risk assessment tool analyzing 4.5M+ NOAA radar records.",
  knowsAbout: [
    "Residential roofing",
    "Commercial roofing",
    "Hail damage assessment",
    "Insurance restoration",
    "GAF roofing systems",
    "Owens Corning roofing products",
    "Malarkey shingles",
    "CertainTeed roofing",
    "Class 4 impact-resistant shingles",
    "Colorado Front Range weather patterns",
    "Roof replacement",
    "Storm damage repair",
  ],
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
  sameAs: [
    "https://www.linkedin.com/company/gatesenterprisesllc/",
    "https://www.google.com/maps/place/Gates+Enterprises+LLC",
    "https://myhailscore.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denver",
    addressRegion: "CO",
    addressCountry: "US",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "About", url: "https://www.gatesroof.com/about" },
  { name: "Alex Chicilo", url: "https://www.gatesroof.com/about/alex-chicilo" },
]);

const certifications = [
  {
    name: "GAF Master Elite",
    description:
      "Reserved for the top 2% of roofing contractors in North America. Unlocks the GAF Golden Pledge Lifetime Warranty, the strongest manufacturer warranty available.",
  },
  {
    name: "Owens Corning Preferred",
    description:
      "The highest tier in the Owens Corning contractor network. Requires ongoing training, proven installation quality, and strong customer satisfaction scores.",
  },
  {
    name: "Malarkey Emerald Premium",
    description:
      "Malarkey's top contractor designation. Demonstrates expertise in installing Malarkey's full product line, including their industry-leading impact-resistant shingles.",
  },
  {
    name: "CertainTeed Shingle Master",
    description:
      "CertainTeed's premier credential for residential roofing. Requires factory training, licensing verification, and a commitment to quality installation practices.",
  },
];

export default function AlexChiciloPage() {
  return (
    <div style={{ background: WHITE, minHeight: "100vh" }}>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
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
              Meet the Owner
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
              Alex Chicilo
            </h1>
            <p
              style={{
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Owner of Gates Enterprises LLC. Quadruple
              manufacturer-certified roofing expert. Creator of{" "}
              <a
                href="https://myhailscore.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: ACCENT, textDecoration: "underline" }}
              >
                HailScore
              </a>
              . Serving Colorado&apos;s Front Range since 2014.
            </p>
          </div>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 64,
              fontWeight: 800,
              color: WHITE,
              flexShrink: 0,
            }}
          >
            AC
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 32,
              fontWeight: 700,
              color: NAVY,
              margin: "0 0 32px",
            }}
          >
            About Alex
          </h2>

          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 24px",
            }}
          >
            Alex Chicilo founded Gates Enterprises in 2014 with a single
            truck and a straightforward philosophy: treat every roof like
            it belongs to your own family. What started as a one-person
            operation in Lakewood, Colorado has grown into one of the
            most trusted roofing companies on the Front Range, with over
            100 employees and thousands of completed projects across 65+
            cities.
          </p>

          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 24px",
            }}
          >
            Under Alex&apos;s leadership, Gates Enterprises has earned
            quadruple manufacturer certification from the four largest
            shingle manufacturers in North America: GAF, Owens Corning,
            Malarkey, and CertainTeed. Fewer than 1% of roofing
            contractors in the country hold all four certifications. Each
            one requires rigorous training, verified installation
            quality, and ongoing commitment to manufacturer standards.
            These certifications allow Gates Enterprises to offer the
            strongest warranties in the industry, including GAF&apos;s
            Golden Pledge Lifetime Warranty.
          </p>

          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 24px",
            }}
          >
            Alex also created{" "}
            <a
              href="https://myhailscore.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: ACCENT,
                textDecoration: "underline",
                fontWeight: 500,
              }}
            >
              HailScore
            </a>
            , a proprietary hail risk assessment tool that analyzes over
            4.5 million NOAA radar records to help Colorado homeowners
            understand their property&apos;s hail exposure. HailScore
            gives homeowners data-driven insight into storm history at
            their address, helping them make informed decisions about
            roofing materials, insurance coverage, and when to schedule
            inspections.
          </p>

          <p
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 0",
            }}
          >
            With over 306 Google reviews and a 4.9-star average rating,
            Alex and the Gates Enterprises team have built their
            reputation on honest assessments, quality workmanship, and
            straightforward communication. Whether it is a{" "}
            <Link
              href="/services/roof-replacement"
              style={{ color: ACCENT, textDecoration: "underline" }}
            >
              full roof replacement
            </Link>
            , a{" "}
            <Link
              href="/services/storm-hail-damage"
              style={{ color: ACCENT, textDecoration: "underline" }}
            >
              storm damage repair
            </Link>
            , or navigating the{" "}
            <Link
              href="/services/insurance-claims"
              style={{ color: ACCENT, textDecoration: "underline" }}
            >
              insurance claims process
            </Link>
            , the goal is always the same: get the homeowner the best
            possible outcome.
          </p>
        </div>
      </section>

      {/* Certifications */}
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
              Manufacturer Certifications
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
              Quadruple Certified
            </h2>
            <p
              style={{
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                color: TEXT_LIGHT,
                marginTop: 12,
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Only 1% of roofing contractors in North America hold
              certifications from all four major shingle manufacturers.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{
                  background: WHITE,
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid rgba(13,33,55,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <Award size={28} color={ACCENT} />
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: NAVY,
                      margin: 0,
                    }}
                  >
                    {cert.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section style={{ padding: "80px 24px" }}>
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
              Why Homeowners Trust Us
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
              Why Trust Gates Enterprises
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: <ShieldCheck size={28} color={ACCENT} />,
                title: "Quadruple Certified",
                desc: "Certified by GAF, Owens Corning, Malarkey, and CertainTeed. We install every major shingle brand to factory specifications.",
              },
              {
                icon: <Star size={28} color={ACCENT} />,
                title: "306+ Reviews, 4.9 Stars",
                desc: "Over 306 verified Google reviews with a 4.9-star average. Real homeowners sharing real results.",
              },
              {
                icon: <BarChart3 size={28} color={ACCENT} />,
                title: "HailScore Technology",
                desc: "Alex built HailScore to analyze 4.5M+ NOAA radar records, giving homeowners data-driven hail risk assessments at their address.",
              },
              {
                icon: <MapPin size={28} color={ACCENT} />,
                title: "65+ Cities Served",
                desc: "From Denver to Castle Rock, Evergreen to Brighton. We know Colorado's Front Range better than anyone.",
              },
              {
                icon: <Users size={28} color={ACCENT} />,
                title: "100+ Team Members",
                desc: "Dedicated crews, project managers, and insurance specialists. Not subcontractors. Our people, our standards.",
              },
              {
                icon: <Zap size={28} color={ACCENT} />,
                title: "Licensed and Insured",
                desc: "Fully licensed and insured in the state of Colorado. Every project is backed by manufacturer warranties and our own workmanship guarantee.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: LIGHT_BG,
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: "1px solid rgba(13,33,55,0.06)",
                }}
              >
                <div style={{ marginBottom: 16 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 17,
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
                    fontSize: 15,
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

          {/* Google Reviews Link */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href="https://www.google.com/maps/place/Gates+Enterprises+LLC"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: WHITE,
                background: ACCENT,
                padding: "14px 32px",
                borderRadius: 100,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read Our 306+ Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section style={{ padding: "60px 24px 80px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 28,
              fontWeight: 700,
              color: NAVY,
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            Explore Our Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                label: "Roof Replacement",
                href: "/services/roof-replacement",
              },
              {
                label: "Storm and Hail Damage",
                href: "/services/storm-hail-damage",
              },
              { label: "Roof Repair", href: "/services/roof-repair" },
              {
                label: "Insurance Claims",
                href: "/services/insurance-claims",
              },
              {
                label: "Siding and Exteriors",
                href: "/services/siding-exterior",
              },
              {
                label: "Gutters and Guards",
                href: "/services/gutters-guards",
              },
              {
                label: "Impact Resistant Shingles",
                href: "/impact-resistant-shingles",
              },
              {
                label: "About Gates Enterprises",
                href: "/about/gates-enterprises",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: NAVY,
                  background: WHITE,
                  padding: "16px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  border: "1px solid rgba(13,33,55,0.06)",
                  textAlign: "center",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Get a Free Roof Inspection"
        subtitle="Schedule your no-obligation inspection with Colorado's most certified roofing team. Call (720) 766-3377."
      />
      <Footer />
    </div>
  );
}
