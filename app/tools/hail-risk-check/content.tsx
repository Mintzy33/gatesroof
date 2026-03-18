"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#FAFBFD";
const TEXT_LIGHT = "#64748B";

export default function HailRiskContent() {

  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 20px 0" }}>
          <nav style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>
            <Link href="/" style={{ color: TEXT_LIGHT, textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link href="/tools" style={{ color: TEXT_LIGHT, textDecoration: "none" }}>Free Tools</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: NAVY }}>Hail Risk Check</span>
          </nav>
        </div>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "48px 20px 12px", maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            color: NAVY,
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Check Your Home's Hail Risk Score
          </h1>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 17,
            color: TEXT_LIGHT,
            lineHeight: 1.7,
            marginBottom: 16,
          }}>
            Powered by HailScore, a Gates Enterprises company
          </p>
          {/* HailScore wordmark */}
          <div style={{ marginBottom: 32 }}>
            <Image
              src="/hailscore-wordmark.png"
              alt="HailScore"
              width={200}
              height={48}
              style={{ height: 40, width: "auto", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* HailScore CTA Card */}
        <section style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px 48px" }}>
          <div style={{
            background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f0f4ff 100%)",
            borderRadius: 24,
            padding: "40px 32px",
            textAlign: "center",
            border: "1px solid rgba(37,99,235,0.1)",
            boxShadow: "0 8px 32px rgba(37,99,235,0.06)",
          }}>
            <Image
              src="/hailscore-wordmark.png"
              alt="HailScore"
              width={220}
              height={52}
              style={{ height: 44, width: "auto", objectFit: "contain", marginBottom: 20 }}
            />

            {/* Stats */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(20px, 4vw, 40px)",
              flexWrap: "wrap" as const,
              marginBottom: 28,
            }}>
              {[
                { value: "4.5M+", label: "Hail Records" },
                { value: "10 Years", label: "of Data" },
                { value: "All 50", label: "States" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: NAVY,
                    lineHeight: 1.2,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 13,
                    color: TEXT_LIGHT,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              color: TEXT_LIGHT,
              lineHeight: 1.7,
              marginBottom: 24,
              maxWidth: 420,
              margin: "0 auto 24px",
            }}>
              Enter your address on HailScore to get a free, instant hail risk report based on real NOAA radar data.
            </p>

            <a
              href="https://myhailscore.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: ACCENT,
                color: WHITE,
                borderRadius: 100,
                padding: "16px 36px",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Check Your Hail Risk Score
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>

            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 12,
              color: TEXT_LIGHT,
              marginTop: 14,
              opacity: 0.7,
            }}>
              100% free. No signup required.
            </p>
          </div>
        </section>

        {/* What is HailScore */}
        <section style={{ background: LIGHT_BG, padding: "60px 20px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 28,
              fontWeight: 700,
              color: NAVY,
              marginBottom: 16,
              textAlign: "center",
            }}>
              What Is HailScore?
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              HailScore is a proprietary hail risk intelligence platform built by Gates Enterprises. It analyzes over 4.5 million NOAA radar hail records spanning 10+ years to calculate a risk score for any address in the United States. Your score (0-100) reflects how frequently and severely hail has impacted your area.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              Colorado's Front Range is one of the most hail-prone regions in the country. Cities like Denver, Lakewood, Aurora, and Arvada regularly see hailstones large enough to damage roofs, siding, and gutters. Knowing your hail risk helps you make informed decisions about <Link href="/impact-resistant-shingles" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>impact-resistant shingles</Link>, insurance coverage, and inspection timing.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7 }}>
              A high HailScore means your home has been in the path of significant hail events. Even if your roof looks fine from the ground, hidden damage from past storms can shorten your roof's lifespan and lead to leaks. <Link href="/services/storm-hail-damage" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Learn about storm and hail damage</Link>.
            </p>
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
            High Score? Get a Free Roof Inspection
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 28,
            maxWidth: 500,
            margin: "0 auto 28px",
          }}>
            If your HailScore is above 50, your roof has likely been impacted by hail. A free professional inspection from Gates Enterprises can uncover hidden damage before it becomes a costly problem.
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
            }}
          >
            Get a Free Roof Inspection from Gates Enterprises
          </Link>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 48px" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, lineHeight: 1.7, fontStyle: "italic" }}>
            HailScore data is based on historical NOAA radar records and does not guarantee future hail activity or predict specific damage to any property.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
