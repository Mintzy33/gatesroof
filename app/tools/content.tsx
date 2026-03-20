"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#FAFBFD";
const TEXT_LIGHT = "#64748B";

const tools = [
  {
    title: "Roof Replacement Cost Estimator",
    desc: "Get an instant cost estimate for your Colorado roof replacement. Select your material, home size, and area for a realistic price range based on 2025/2026 rates.",
    href: "/tools/roof-age-calculator",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Insurance Coverage Estimator",
    desc: "Find out how much your roof replacement could be worth through insurance. Most Colorado homeowners pay only their deductible.",
    href: "/tools/insurance-coverage-estimator",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Hail Risk Check",
    desc: "Look up your home's hail risk score powered by HailScore, a Gates Enterprises company. 4.5 million+ hail records across all 50 states.",
    href: "/tools/hail-risk-check",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
        <line x1="8" y1="16" x2="8" y2="16.01" />
        <line x1="8" y1="20" x2="8" y2="20.01" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <line x1="12" y1="22" x2="12" y2="22.01" />
        <line x1="16" y1="16" x2="16" y2="16.01" />
        <line x1="16" y1="20" x2="16" y2="20.01" />
      </svg>
    ),
  },
];

export default function ToolsContent() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 20px 0" }}>
          <nav style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>
            <Link href="/" style={{ color: TEXT_LIGHT, textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: NAVY }}>Free Tools</span>
          </nav>
        </div>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "60px 20px 40px", maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: NAVY,
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            Free Roofing Tools
          </h1>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 18,
            color: TEXT_LIGHT,
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            Colorado homeowners: use these free tools to understand your roof's condition, estimate costs, and check your hail risk. No signup required.
          </p>
        </section>

        {/* Tools Grid */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}>
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: WHITE,
                  borderRadius: 16,
                  padding: 32,
                  border: "1px solid rgba(13,33,55,0.08)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(37,99,235,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}>
                  {tool.icon}
                </div>
                <h2 style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 10,
                }}>
                  {tool.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  color: TEXT_LIGHT,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  {tool.desc}
                </p>
                <span style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: ACCENT,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                  Try it free
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: NAVY, padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            color: WHITE,
            marginBottom: 16,
          }}>
            Ready for a Professional Assessment?
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 28,
            maxWidth: 500,
            margin: "0 auto 28px",
          }}>
            These tools give you a starting point. A free professional inspection from Gates Enterprises gives you the full picture.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: ACCENT,
              color: WHITE,
              borderRadius: 100,
              padding: "14px 32px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              transition: "transform 0.2s",
            }}
          >
            Get a Free Inspection
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
