"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#FAFBFD";
const TEXT_LIGHT = "#64748B";

const SERVICE_TYPES = [
  { label: "Minor Repair", baseLow: 300, baseHigh: 1500, usesMaterial: false, usesSize: false },
  { label: "Major Repair", baseLow: 1500, baseHigh: 5000, usesMaterial: false, usesSize: false },
  { label: "Full Replacement", baseLow: 0, baseHigh: 0, usesMaterial: true, usesSize: true },
  { label: "Gutter Replacement", baseLow: 1500, baseHigh: 4500, usesMaterial: false, usesSize: false },
  { label: "Siding Repair", baseLow: 2000, baseHigh: 8000, usesMaterial: false, usesSize: false },
];

const SIZES = [
  { label: "Small (under 1,500 sq ft)", baseLow: 8000, baseHigh: 12000 },
  { label: "Medium (1,500 - 2,500 sq ft)", baseLow: 12000, baseHigh: 18000 },
  { label: "Large (2,500 - 3,500 sq ft)", baseLow: 18000, baseHigh: 25000 },
  { label: "Very Large (3,500+ sq ft)", baseLow: 25000, baseHigh: 35000 },
];

const MATERIALS = [
  { label: "Architectural Asphalt", factor: 1.0 },
  { label: "Metal", factor: 1.8 },
  { label: "Tile", factor: 2.0 },
  { label: "Wood Shake", factor: 1.4 },
  { label: "Slate", factor: 2.5 },
  { label: "Flat/TPO", factor: 2.0 },
];

const PITCHES = [
  { label: "Low / Flat", factor: 1.0 },
  { label: "Medium", factor: 1.0 },
  { label: "Steep", factor: 1.15 },
];

const STORIES = [
  { label: "1 Story", factor: 1.0 },
  { label: "2 Stories", factor: 1.0 },
  { label: "3+ Stories", factor: 1.1 },
];

interface CostResult {
  low: number;
  high: number;
  serviceLabel: string;
  factors: string[];
}

function formatCurrency(n: number): string {
  if (n >= 1000) return "$" + (Math.round(n / 100) * 100).toLocaleString();
  return "$" + Math.round(n).toLocaleString();
}

function roundToNearest(n: number, nearest: number): number {
  return Math.round(n / nearest) * nearest;
}

export default function CostEstimatorContent() {
  const [serviceIdx, setServiceIdx] = useState("");
  const [sizeIdx, setSizeIdx] = useState("");
  const [pitchIdx, setPitchIdx] = useState("");
  const [materialIdx, setMaterialIdx] = useState("");
  const [storiesIdx, setStoriesIdx] = useState("");
  const [result, setResult] = useState<CostResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  function calculate() {
    const svcI = parseInt(serviceIdx);
    if (isNaN(svcI)) return;
    const svc = SERVICE_TYPES[svcI];

    let low: number, high: number;
    const factors: string[] = [];

    if (svc.usesSize) {
      const szI = parseInt(sizeIdx);
      const matI = parseInt(materialIdx);
      const pitI = parseInt(pitchIdx);
      const stI = parseInt(storiesIdx);
      if (isNaN(szI) || isNaN(matI) || isNaN(pitI) || isNaN(stI)) return;

      const size = SIZES[szI];
      const mat = MATERIALS[matI];
      const pitch = PITCHES[pitI];
      const stories = STORIES[stI];

      low = size.baseLow * mat.factor * pitch.factor * stories.factor;
      high = size.baseHigh * mat.factor * pitch.factor * stories.factor;

      factors.push(`Base cost for ${size.label.toLowerCase()} home: $${size.baseLow.toLocaleString()} - $${size.baseHigh.toLocaleString()}`);
      if (mat.factor !== 1.0) factors.push(`${mat.label} material: ${mat.factor > 1 ? "+" : ""}${Math.round((mat.factor - 1) * 100)}% adjustment`);
      if (pitch.factor > 1.0) factors.push(`${pitch.label} pitch: +${Math.round((pitch.factor - 1) * 100)}% (more labor intensive)`);
      if (stories.factor > 1.0) factors.push(`${stories.label}: +${Math.round((stories.factor - 1) * 100)}% (additional safety and logistics)`);
    } else {
      low = svc.baseLow;
      high = svc.baseHigh;
      factors.push(`Typical range for ${svc.label.toLowerCase()} in Colorado`);
    }

    low = roundToNearest(low, 100);
    high = roundToNearest(high, 100);

    setResult({ low, high, serviceLabel: svc.label, factors });
    setShowResult(false);
    setTimeout(() => setShowResult(true), 50);
  }

  const svcI = parseInt(serviceIdx);
  const isReplacement = !isNaN(svcI) && SERVICE_TYPES[svcI].usesSize;
  const canCalc = !isNaN(svcI) && (!isReplacement || (sizeIdx && materialIdx && pitchIdx && storiesIdx));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(13,33,55,0.15)",
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 15,
    color: NAVY,
    background: WHITE,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
    cursor: "pointer",
    appearance: "none" as const,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: NAVY,
    marginBottom: 6,
    display: "block",
  };

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
            <span style={{ color: NAVY }}>Repair Cost Estimator</span>
          </nav>
        </div>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "48px 20px 32px", maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            color: NAVY,
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Roof Repair Cost Estimator
          </h1>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 17,
            color: TEXT_LIGHT,
            lineHeight: 1.7,
          }}>
            Get a ballpark cost for your roofing project based on real Colorado 2026 pricing.
          </p>
        </section>

        {/* Estimator */}
        <section style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 60px" }}>
          <div style={{
            background: WHITE,
            borderRadius: 20,
            padding: "32px 28px",
            border: "1px solid rgba(13,33,55,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Service Type</label>
              <select value={serviceIdx} onChange={(e) => setServiceIdx(e.target.value)} style={inputStyle}>
                <option value="">Select service...</option>
                {SERVICE_TYPES.map((s, i) => (
                  <option key={s.label} value={i}>{s.label}</option>
                ))}
              </select>
            </div>

            {isReplacement && (
              <>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Roof Size</label>
                  <select value={sizeIdx} onChange={(e) => setSizeIdx(e.target.value)} style={inputStyle}>
                    <option value="">Select size...</option>
                    {SIZES.map((s, i) => (
                      <option key={s.label} value={i}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Roof Material</label>
                  <select value={materialIdx} onChange={(e) => setMaterialIdx(e.target.value)} style={inputStyle}>
                    <option value="">Select material...</option>
                    {MATERIALS.map((m, i) => (
                      <option key={m.label} value={i}>{m.label}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Roof Pitch</label>
                    <select value={pitchIdx} onChange={(e) => setPitchIdx(e.target.value)} style={inputStyle}>
                      <option value="">Select...</option>
                      {PITCHES.map((p, i) => (
                        <option key={p.label} value={i}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Stories</label>
                    <select value={storiesIdx} onChange={(e) => setStoriesIdx(e.target.value)} style={inputStyle}>
                      <option value="">Select...</option>
                      {STORIES.map((s, i) => (
                        <option key={s.label} value={i}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            <button
              onClick={calculate}
              disabled={!canCalc}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: 12,
                border: "none",
                background: !canCalc ? "rgba(37,99,235,0.4)" : ACCENT,
                color: WHITE,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: !canCalc ? "not-allowed" : "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseDown={(e) => { if (canCalc) e.currentTarget.style.transform = "scale(0.98)"; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Estimate Cost
            </button>
          </div>

          {/* Result */}
          {result && (
            <div style={{
              marginTop: 28,
              background: WHITE,
              borderRadius: 20,
              padding: "32px 28px",
              border: "1px solid rgba(13,33,55,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              opacity: showResult ? 1 : 0,
              transform: showResult ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}>
              {/* Price Range */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  color: TEXT_LIGHT,
                  marginBottom: 8,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}>
                  Estimated Cost Range
                </div>
                <div style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(32px, 6vw, 44px)",
                  fontWeight: 700,
                  color: NAVY,
                  lineHeight: 1.2,
                }}>
                  ${result.low.toLocaleString()} - ${result.high.toLocaleString()}
                </div>
              </div>

              {/* Factors Breakdown */}
              <div style={{
                background: LIGHT_BG,
                borderRadius: 12,
                padding: "18px 20px",
                marginBottom: 16,
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 10,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.04em",
                }}>
                  What affects your cost
                </div>
                {result.factors.map((f, i) => (
                  <div key={i} style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    color: TEXT_LIGHT,
                    padding: "6px 0",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}>
                    <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>&#8226;</span>
                    {f}
                  </div>
                ))}
              </div>

              {/* Colorado note */}
              <p style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                color: NAVY,
                lineHeight: 1.6,
                marginBottom: 12,
                padding: "0 4px",
              }}>
                Most homeowners in Colorado pay between <strong>${result.low.toLocaleString()}</strong> and <strong>${result.high.toLocaleString()}</strong> for this type of work.
              </p>

              {/* Insurance note */}
              <div style={{
                background: "rgba(37,99,235,0.06)",
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 24,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  color: NAVY,
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  Insurance may cover some or all of this cost if damage was storm-related. <Link href="/services/insurance-claims" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Learn about insurance claims</Link>.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: ACCENT,
                  color: WHITE,
                  borderRadius: 12,
                  padding: "16px",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Get an Exact Quote - Free Inspection
              </Link>
            </div>
          )}
        </section>

        {/* Info */}
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
              What Determines Roofing Costs in Colorado?
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              Colorado roofing costs are influenced by material choice, roof complexity (pitch, valleys, dormers), home height, and local labor rates. Hail-prone areas like Denver, Lakewood, and Aurora see higher demand after storm season, which can affect scheduling.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              Class 4 impact-resistant shingles cost slightly more upfront but qualify for insurance premium discounts of 15-28% in Colorado. Over the life of your roof, they often pay for themselves. <Link href="/impact-resistant-shingles" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Learn about impact-resistant shingles</Link>.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7 }}>
              This estimator provides ballpark figures based on typical Colorado pricing. For an exact quote, <Link href="/contact" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>schedule a free inspection</Link> with Gates Enterprises. We'll measure your roof, assess its condition, and provide a detailed written estimate at no cost.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
