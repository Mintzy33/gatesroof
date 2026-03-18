"use client";
import { useState } from "react";
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
  const [address, setAddress] = useState("");

  function handleSearch() {
    if (!address.trim()) return;
    const encoded = encodeURIComponent(address.trim());
    window.open(`https://myhailscore.com/?address=${encoded}`, "_blank", "noopener,noreferrer");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

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

        {/* Search */}
        <section style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 40px" }}>
          <div style={{
            background: WHITE,
            borderRadius: 20,
            padding: "32px 28px",
            border: "1px solid rgba(13,33,55,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            <label style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: NAVY,
              marginBottom: 8,
              display: "block",
            }}>
              Enter your address
            </label>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="text"
                placeholder="123 Main St, Denver, CO 80202"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  flex: 1,
                  padding: "14px 16px",
                  borderRadius: 12,
                  border: "1px solid rgba(13,33,55,0.15)",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  color: NAVY,
                  background: WHITE,
                  outline: "none",
                }}
              />
              <button
                onClick={handleSearch}
                disabled={!address.trim()}
                style={{
                  padding: "14px 24px",
                  borderRadius: 12,
                  border: "none",
                  background: !address.trim() ? "rgba(37,99,235,0.4)" : ACCENT,
                  color: WHITE,
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: !address.trim() ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap" as const,
                  transition: "background 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
            </div>
            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 12,
              color: TEXT_LIGHT,
              marginTop: 10,
            }}>
              Opens myhailscore.com with your address for a full hail risk report.
            </p>
          </div>
        </section>

        {/* Sample Score Card */}
        <section style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 40px" }}>
          <div style={{
            background: "linear-gradient(135deg, #0D2137 0%, #1a3a5c 100%)",
            borderRadius: 20,
            padding: "32px 28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />

            <div style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              marginBottom: 8,
            }}>
              Sample Score
            </div>
            <div style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 16,
            }}>
              Denver, Colorado
            </div>
            <div style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "rgba(249,115,22,0.2)",
              border: "3px solid #F97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 44,
                  fontWeight: 700,
                  color: WHITE,
                  lineHeight: 1,
                }}>
                  82
                </div>
                <div style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                }}>
                  / 100
                </div>
              </div>
            </div>
            <div style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(249,115,22,0.2)",
              color: "#F97316",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
            }}>
              High Risk
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ padding: "0 20px 48px" }}>
          <div style={{
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 48px)",
            flexWrap: "wrap" as const,
          }}>
            {[
              { value: "4.5M+", label: "Hail Records" },
              { value: "10 Years", label: "of Data" },
              { value: "All 50", label: "States" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: NAVY,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  color: TEXT_LIGHT,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
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
