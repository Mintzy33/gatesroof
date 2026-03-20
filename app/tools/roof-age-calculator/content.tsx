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

/* ── Pricing Data ── */
const MATERIALS = [
  { label: "Asphalt Architectural Shingles", minPerSq: 350, maxPerSq: 500 },
  { label: "Impact-Resistant (Class 4)", minPerSq: 450, maxPerSq: 650 },
  { label: "Metal Standing Seam", minPerSq: 800, maxPerSq: 1200 },
  { label: "Tile / Slate", minPerSq: 1000, maxPerSq: 1800 },
  { label: "Flat (TPO / EPDM)", minPerSq: 300, maxPerSq: 450 },
];

const HOME_SIZES = [
  { label: "Small (under 1,500 sq ft)", minSq: 15, maxSq: 20 },
  { label: "Medium (1,500 - 2,500 sq ft)", minSq: 20, maxSq: 30 },
  { label: "Large (2,500 - 4,000 sq ft)", minSq: 30, maxSq: 45 },
  { label: "Very Large (4,000+ sq ft)", minSq: 45, maxSq: 65 },
];

const STORIES = [
  { label: "1 Story", multiplier: 1.0 },
  { label: "2 Story", multiplier: 1.1 },
  { label: "3+ Story", multiplier: 1.2 },
];

const COMPLEXITIES = [
  { label: "Simple (basic hip/gable)", multiplier: 1.0 },
  { label: "Moderate (some dormers/valleys)", multiplier: 1.1 },
  { label: "Complex (steep pitch, many penetrations)", multiplier: 1.25 },
];

const AREAS = [
  { label: "Denver Metro", multiplier: 1.0 },
  { label: "Colorado Springs", multiplier: 1.0 },
  { label: "Fort Collins / NoCo", multiplier: 1.0 },
  { label: "Mountain Areas", multiplier: 1.15 },
  { label: "Eastern Plains", multiplier: 0.95 },
];

interface EstimateResult {
  low: number;
  high: number;
  material: string;
  homeSize: string;
}

function formatCurrency(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function RoofCostEstimatorContent() {
  const [materialIdx, setMaterialIdx] = useState("");
  const [sizeIdx, setSizeIdx] = useState("");
  const [storyIdx, setStoryIdx] = useState("");
  const [complexIdx, setComplexIdx] = useState("");
  const [areaIdx, setAreaIdx] = useState("");
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  function calculate() {
    const mi = parseInt(materialIdx);
    const si = parseInt(sizeIdx);
    const sti = parseInt(storyIdx);
    const ci = parseInt(complexIdx);
    const ai = parseInt(areaIdx);
    if ([mi, si, sti, ci, ai].some(isNaN)) return;

    const mat = MATERIALS[mi];
    const size = HOME_SIZES[si];
    const storyMult = STORIES[sti].multiplier;
    const complexMult = COMPLEXITIES[ci].multiplier;
    const areaMult = AREAS[ai].multiplier;

    const low = mat.minPerSq * size.minSq * storyMult * complexMult * areaMult;
    const high = mat.maxPerSq * size.maxSq * storyMult * complexMult * areaMult;

    setResult({ low, high, material: mat.label, homeSize: size.label });
    setShowResult(false);
    setTimeout(() => setShowResult(true), 50);
  }

  const allFilled = materialIdx !== "" && sizeIdx !== "" && storyIdx !== "" && complexIdx !== "" && areaIdx !== "";

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: NAVY,
    marginBottom: 6,
    display: "block",
  };

  const selectStyle: React.CSSProperties = {
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
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
  };

  function RadioGroup({
    options,
    value,
    onChange,
  }: {
    options: { label: string; value: string }[];
    value: string;
    onChange: (v: string) => void;
  }) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: `2px solid ${value === opt.value ? ACCENT : "rgba(13,33,55,0.12)"}`,
              background: value === opt.value ? "rgba(37,99,235,0.06)" : WHITE,
              color: value === opt.value ? ACCENT : TEXT_LIGHT,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap" as const,
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 20px 0" }}>
          <nav
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              color: TEXT_LIGHT,
            }}
          >
            <Link href="/" style={{ color: TEXT_LIGHT, textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link href="/tools" style={{ color: TEXT_LIGHT, textDecoration: "none" }}>
              Free Tools
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: NAVY }}>Roof Replacement Cost Estimator</span>
          </nav>
        </div>

        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            padding: "48px 20px 32px",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 700,
              color: NAVY,
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Roof Replacement Cost Estimator
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 17,
              color: TEXT_LIGHT,
              lineHeight: 1.7,
            }}
          >
            Get a quick estimate for your Colorado roof replacement. Select your
            details below for an instant cost range based on 2025/2026 pricing.
          </p>
        </section>

        {/* Calculator */}
        <section style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px 60px" }}>
          <div
            style={{
              background: WHITE,
              borderRadius: 20,
              padding: "32px 28px",
              border: "1px solid rgba(13,33,55,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Material */}
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>Roof Material</label>
              <select
                value={materialIdx}
                onChange={(e) => setMaterialIdx(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select material...</option>
                {MATERIALS.map((m, i) => (
                  <option key={m.label} value={i}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Home Size */}
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>Home Size</label>
              <RadioGroup
                options={HOME_SIZES.map((s, i) => ({ label: s.label, value: String(i) }))}
                value={sizeIdx}
                onChange={setSizeIdx}
              />
            </div>

            {/* Stories */}
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>Number of Stories</label>
              <RadioGroup
                options={STORIES.map((s, i) => ({ label: s.label, value: String(i) }))}
                value={storyIdx}
                onChange={setStoryIdx}
              />
            </div>

            {/* Complexity */}
            <div style={{ marginBottom: 22 }}>
              <label style={labelStyle}>Roof Complexity</label>
              <RadioGroup
                options={COMPLEXITIES.map((c, i) => ({ label: c.label, value: String(i) }))}
                value={complexIdx}
                onChange={setComplexIdx}
              />
            </div>

            {/* Area */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Colorado Area</label>
              <select
                value={areaIdx}
                onChange={(e) => setAreaIdx(e.target.value)}
                style={selectStyle}
              >
                <option value="">Select your area...</option>
                {AREAS.map((a, i) => (
                  <option key={a.label} value={i}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!allFilled}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: 12,
                border: "none",
                background: !allFilled ? "rgba(37,99,235,0.4)" : ACCENT,
                color: WHITE,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: !allFilled ? "not-allowed" : "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseDown={(e) => {
                if (allFilled) e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Estimate My Cost
            </button>
          </div>

          {/* Result */}
          {result && (
            <div
              style={{
                marginTop: 28,
                background: WHITE,
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid rgba(13,33,55,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                opacity: showResult ? 1 : 0,
                transform: showResult ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Cost Range */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: TEXT_LIGHT,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  Estimated Replacement Cost
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontSize: "clamp(28px, 5vw, 40px)",
                    fontWeight: 700,
                    color: NAVY,
                    lineHeight: 1.2,
                  }}
                >
                  {formatCurrency(result.low)} &ndash; {formatCurrency(result.high)}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 13,
                    color: TEXT_LIGHT,
                    marginTop: 8,
                  }}
                >
                  {result.material} &middot; {result.homeSize}
                </p>
              </div>

              {/* Insurance note */}
              <div
                style={{
                  background: "rgba(22,163,74,0.06)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  borderLeft: "4px solid #16A34A",
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    color: NAVY,
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Most Colorado homeowners with storm damage pay $0 - $2,000 out of pocket after insurance.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    color: TEXT_LIGHT,
                    lineHeight: 1.6,
                    margin: "8px 0 0",
                  }}
                >
                  Your deductible is typically your only cost.
                </p>
              </div>

              {/* Trust line */}
              <div
                style={{
                  background: LIGHT_BG,
                  borderRadius: 12,
                  padding: "18px 20px",
                  borderLeft: `4px solid ${ACCENT}`,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 14,
                    color: NAVY,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Gates Enterprises has helped thousands of Colorado homeowners navigate
                  insurance claims. As Colorado&apos;s only quadruple manufacturer
                  certified roofer (GAF Master Elite, Owens Corning Preferred, Malarkey
                  Emerald Pro, CertainTeed Shingle Master), we ensure your replacement
                  meets the highest standards.
                </p>
              </div>

              {/* CTAs */}
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
                  fontSize: 16,
                  fontWeight: 600,
                  transition: "transform 0.15s",
                  marginBottom: 12,
                }}
              >
                Get a Free Inspection
              </Link>
              <a
                href="https://www.myhailscore.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "transparent",
                  color: ACCENT,
                  borderRadius: 12,
                  padding: "14px",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  border: `2px solid ${ACCENT}`,
                  transition: "background 0.2s",
                }}
              >
                Check Your Hail Risk Score
              </a>
            </div>
          )}
        </section>

        {/* FAQ / Info Section */}
        <section style={{ background: LIGHT_BG, padding: "60px 20px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: 28,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 24,
                textAlign: "center",
              }}
            >
              Roof Replacement Cost FAQ
            </h2>

            {[
              {
                q: "How much does a roof replacement cost in Colorado?",
                a: "Most Colorado roof replacements cost between $8,000 and $25,000 for asphalt shingles, depending on home size, roof complexity, and material choice. Impact-resistant (Class 4) shingles, which may qualify for insurance discounts, typically run $9,000 to $40,000. Premium materials like metal or tile could cost significantly more.",
              },
              {
                q: "Could my insurance cover roof replacement?",
                a: "If your roof has storm damage from hail or wind, your homeowner's insurance policy may cover the full replacement cost minus your deductible. Many Colorado homeowners pay only $1,000 to $2,000 out of pocket for a new roof after a qualifying storm event.",
              },
              {
                q: "What factors affect roof replacement cost?",
                a: "The biggest factors include roof material, home square footage (which determines the number of roofing squares), number of stories (taller homes require more labor and safety equipment), roof complexity (dormers, valleys, steep pitch), and your location in Colorado. Mountain area projects may cost more due to access and logistics.",
              },
              {
                q: "Why choose Gates Enterprises for roof replacement?",
                a: "Gates Enterprises is Colorado's only quadruple manufacturer certified roofer, holding GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master certifications. This means access to the best warranty options and installation standards from every major manufacturer.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 24,
                  background: WHITE,
                  borderRadius: 14,
                  padding: "22px 24px",
                  border: "1px solid rgba(13,33,55,0.06)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 8,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15,
                    color: TEXT_LIGHT,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 48px" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 12,
              color: TEXT_LIGHT,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            This tool provides rough estimates based on typical Colorado pricing
            for 2025/2026. Actual costs may vary based on specific roof
            conditions, material availability, permit requirements, and
            contractor pricing. This is not a quote or guarantee of pricing.
            Contact Gates Enterprises at (720) 766-3377 for a free inspection
            and accurate estimate.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
