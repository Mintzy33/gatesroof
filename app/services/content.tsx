"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Home, CloudLightning, Wrench, Layers, Droplets, Square, Paintbrush, FileText } from "lucide-react";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const SERVICES = [
  {
    title: "Roof Replacement",
    href: "/services/roof-replacement",
    icon: Home,
    desc: "Full tear-off and replacement with GAF, Owens Corning, Malarkey, or CertainTeed shingles. Warranties up to 50 years.",
  },
  {
    title: "Storm & Hail Damage",
    href: "/services/storm-hail-damage",
    icon: CloudLightning,
    desc: "Free storm damage inspections. We document the damage, file your claim, and handle every step of the insurance process.",
  },
  {
    title: "Roof Repair",
    href: "/services/roof-repair",
    icon: Wrench,
    desc: "Pipe boots, flashing, missing shingles, leaks. Fast response. Same-day repairs when possible. Emergency tarping available.",
  },
  {
    title: "Siding & Exterior",
    href: "/services/siding-exterior",
    icon: Layers,
    desc: "James Hardie fiber cement, vinyl, and engineered wood siding. Full exterior transformations with color matching.",
  },
  {
    title: "Gutters & Guards",
    href: "/services/gutters-guards",
    icon: Droplets,
    desc: "Seamless aluminum gutters, gutter guards, and downspout systems. Custom fabricated on site to fit your home.",
  },
  {
    title: "Windows",
    href: "/services/windows",
    icon: Square,
    desc: "Energy-efficient window replacement. Impact-resistant options available. Professional installation with clean finishing.",
  },
  {
    title: "Paint",
    href: "/services/paint",
    icon: Paintbrush,
    desc: "Interior and exterior painting. Proper prep, premium materials, clean lines. Often bundled with siding and trim work.",
  },
  {
    title: "Insurance Claims",
    href: "/services/insurance-claims",
    icon: FileText,
    desc: "We assist you through the claims process. Adjuster meetings, supplements, documentation. Helping Colorado homeowners navigate insurance claims.",
  },
];

export default function ServicesContent() {
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
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
            }}
          >
            Home → Services
          </Link>
          <h1
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: WHITE,
              margin: "20px 0 16px",
              lineHeight: 1.1,
            }}
          >
            Full-Service Roofing and Exteriors
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
            Colorado&apos;s only quadruple manufacturer certified contractor
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
            Gates Enterprises handles everything above your foundation. Roofing,
            siding, gutters, windows, paint, and insurance claims. 306 Reviews,
            4.9 stars, and certifications from all four major shingle
            manufacturers. One call, one contractor, one standard of work.
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
              Request a Free Inspection →
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

      {/* Services Grid */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: NAVY,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 16,
              color: TEXT_LIGHT,
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Every service backed by manufacturer certifications that less than
            1% of contractors hold.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    background: WHITE,
                    borderRadius: 16,
                    padding: "32px 28px",
                    textDecoration: "none",
                    border: "1px solid rgba(0,0,0,0.06)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 30px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `${ACCENT}14`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={ACCENT} />
                  </div>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 19,
                      fontWeight: 700,
                      color: NAVY,
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 15,
                      color: TEXT_LIGHT,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: ACCENT,
                      marginTop: "auto",
                    }}
                  >
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 700,
              color: NAVY,
              marginBottom: 24,
            }}
          >
            Quadruple Manufacturer Certified
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 16,
              color: TEXT,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Gates Enterprises holds certifications from all four major shingle
            manufacturers. That means access to the strongest warranties in the
            industry and installation crews trained to each manufacturer&apos;s
            exact specifications.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {[
              "GAF Master Elite",
              "Owens Corning Preferred",
              "Malarkey Emerald Premium",
              "CertainTeed Shingle Master",
            ].map((cert) => (
              <div
                key={cert}
                style={{
                  background: LIGHT_BG,
                  borderRadius: 100,
                  padding: "12px 24px",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: NAVY,
                }}
              >
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 700,
              color: NAVY,
              marginBottom: 16,
            }}
          >
            More Resources
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 16,
              color: TEXT_LIGHT,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Explore financing options, warranty coverage, and see how we compare to other contractors.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/financing"
              style={{
                background: WHITE,
                border: `1px solid rgba(0,0,0,0.08)`,
                borderRadius: 12,
                padding: "20px 28px",
                textDecoration: "none",
                flex: "1 1 220px",
                maxWidth: 280,
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, display: "block", marginBottom: 6 }}>Financing Options</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.5 }}>Flexible payment plans to fit your budget. View financing options →</span>
            </Link>
            <Link
              href="/warranty"
              style={{
                background: WHITE,
                border: `1px solid rgba(0,0,0,0.08)`,
                borderRadius: 12,
                padding: "20px 28px",
                textDecoration: "none",
                flex: "1 1 220px",
                maxWidth: 280,
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, display: "block", marginBottom: 6 }}>Warranty Coverage</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.5 }}>Learn about our warranty coverage and what&apos;s protected →</span>
            </Link>
            <Link
              href="/compare"
              style={{
                background: WHITE,
                border: `1px solid rgba(0,0,0,0.08)`,
                borderRadius: 12,
                padding: "20px 28px",
                textDecoration: "none",
                flex: "1 1 220px",
                maxWidth: 280,
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, display: "block", marginBottom: 6 }}>Compare Contractors</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.5 }}>See how Gates Enterprises stacks up against other roofers →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 24px",
          background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: WHITE,
              marginBottom: 16,
            }}
          >
            Ready to get started?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Schedule a free inspection or call us directly. We&apos;ll get on
            your roof, give you an honest assessment, and put together a plan
            that makes sense.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              Schedule Free Inspection →
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

      <Footer />
    </div>
  );
}
