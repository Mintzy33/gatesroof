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

const MATERIALS: { label: string; minLife: number; maxLife: number }[] = [
  { label: "Architectural Asphalt", minLife: 25, maxLife: 30 },
  { label: "Metal", minLife: 40, maxLife: 70 },
  { label: "Tile", minLife: 50, maxLife: 100 },
  { label: "Wood Shake", minLife: 20, maxLife: 30 },
  { label: "Slate", minLife: 75, maxLife: 200 },
  { label: "Flat/TPO", minLife: 15, maxLife: 25 },
];

type RiskLevel = "Good" | "Fair" | "Replace Soon" | "Overdue";

interface Result {
  age: number;
  material: string;
  minLife: number;
  maxLife: number;
  remainingMin: number;
  remainingMax: number;
  risk: RiskLevel;
  pct: number;
}

function getRisk(age: number, minLife: number, maxLife: number): { risk: RiskLevel; pct: number } {
  const avgLife = (minLife + maxLife) / 2;
  const pct = Math.min(100, Math.round((age / avgLife) * 100));
  if (age < minLife * 0.6) return { risk: "Good", pct };
  if (age < minLife) return { risk: "Fair", pct };
  if (age < maxLife) return { risk: "Replace Soon", pct };
  return { risk: "Overdue", pct };
}

const riskColors: Record<RiskLevel, string> = {
  Good: "#16A34A",
  Fair: "#EAB308",
  "Replace Soon": "#F97316",
  Overdue: "#DC2626",
};

const recommendations: Record<RiskLevel, string> = {
  Good: "Your roof is in its prime. Schedule a maintenance inspection to keep it that way.",
  Fair: "Your roof is aging. A professional inspection can catch small issues before they become expensive.",
  "Replace Soon": "Your roof is nearing end of life. Get a free inspection to plan your replacement.",
  Overdue: "Your roof is past its expected lifespan. A free inspection is critical to avoid leaks and damage.",
};

export default function RoofAgeContent() {
  const [buildYear, setBuildYear] = useState("");
  const [materialIdx, setMaterialIdx] = useState("");
  const [replaced, setReplaced] = useState("no");
  const [replaceYear, setReplaceYear] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentYear = new Date().getFullYear();

  function calculate() {
    const idx = parseInt(materialIdx);
    if (isNaN(idx)) return;
    const mat = MATERIALS[idx];
    const baseYear = replaced === "yes" && replaceYear ? parseInt(replaceYear) : parseInt(buildYear);
    if (!baseYear || baseYear < 1900 || baseYear > currentYear) return;
    const age = currentYear - baseYear;
    const { risk, pct } = getRisk(age, mat.minLife, mat.maxLife);
    const remainingMin = Math.max(0, mat.minLife - age);
    const remainingMax = Math.max(0, mat.maxLife - age);
    setResult({
      age,
      material: mat.label,
      minLife: mat.minLife,
      maxLife: mat.maxLife,
      remainingMin,
      remainingMax,
      risk,
      pct,
    });
    setShowResult(false);
    setTimeout(() => setShowResult(true), 50);
  }

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
            <span style={{ color: NAVY }}>Roof Age Calculator</span>
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
            How Old Is Your Roof?
          </h1>
          <p style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 17,
            color: TEXT_LIGHT,
            lineHeight: 1.7,
          }}>
            Enter your details below to estimate your roof's remaining lifespan and get a personalized risk assessment.
          </p>
        </section>

        {/* Calculator */}
        <section style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px 60px" }}>
          <div style={{
            background: WHITE,
            borderRadius: 20,
            padding: "32px 28px",
            border: "1px solid rgba(13,33,55,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Year Home Was Built</label>
              <input
                type="number"
                placeholder="e.g. 1998"
                min={1900}
                max={currentYear}
                value={buildYear}
                onChange={(e) => setBuildYear(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Roof Material</label>
              <select
                value={materialIdx}
                onChange={(e) => setMaterialIdx(e.target.value)}
                style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
              >
                <option value="">Select material...</option>
                {MATERIALS.map((m, i) => (
                  <option key={m.label} value={i}>{m.label} ({m.minLife}-{m.maxLife} year lifespan)</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Has the roof been replaced?</label>
              <div style={{ display: "flex", gap: 12 }}>
                {["no", "yes"].map((val) => (
                  <button
                    key={val}
                    onClick={() => setReplaced(val)}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: `2px solid ${replaced === val ? ACCENT : "rgba(13,33,55,0.12)"}`,
                      background: replaced === val ? "rgba(37,99,235,0.06)" : WHITE,
                      color: replaced === val ? ACCENT : TEXT_LIGHT,
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {val === "yes" ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>

            {replaced === "yes" && (
              <div style={{ marginBottom: 20, opacity: 1, transition: "opacity 0.3s" }}>
                <label style={labelStyle}>Year Roof Was Replaced</label>
                <input
                  type="number"
                  placeholder="e.g. 2015"
                  min={1900}
                  max={currentYear}
                  value={replaceYear}
                  onChange={(e) => setReplaceYear(e.target.value)}
                  style={inputStyle}
                />
              </div>
            )}

            <button
              onClick={calculate}
              disabled={!buildYear || !materialIdx}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: 12,
                border: "none",
                background: !buildYear || !materialIdx ? "rgba(37,99,235,0.4)" : ACCENT,
                color: WHITE,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: !buildYear || !materialIdx ? "not-allowed" : "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseDown={(e) => {
                if (buildYear && materialIdx) e.currentTarget.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Calculate Roof Age
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
              {/* Risk Badge */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <span style={{
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: 100,
                  background: `${riskColors[result.risk]}18`,
                  color: riskColors[result.risk],
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}>
                  {result.risk}
                </span>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  { label: "Roof Age", value: `${result.age} yrs` },
                  { label: "Typical Lifespan", value: `${result.minLife}-${result.maxLife} yrs` },
                  { label: "Remaining Life", value: result.remainingMax === 0 ? "0 yrs" : `${result.remainingMin}-${result.remainingMax} yrs` },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: NAVY,
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: 12,
                      color: TEXT_LIGHT,
                      marginTop: 4,
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Gauge Bar */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  height: 10,
                  borderRadius: 5,
                  background: "rgba(13,33,55,0.06)",
                  overflow: "hidden",
                  position: "relative",
                }}>
                  <div style={{
                    width: showResult ? `${Math.min(result.pct, 100)}%` : "0%",
                    height: "100%",
                    borderRadius: 5,
                    background: `linear-gradient(90deg, #16A34A 0%, #EAB308 50%, #F97316 75%, #DC2626 100%)`,
                    transition: "width 1s ease-out",
                  }} />
                </div>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 11,
                  color: TEXT_LIGHT,
                  marginTop: 6,
                }}>
                  <span>New</span>
                  <span>End of Life</span>
                </div>
              </div>

              {/* Recommendation */}
              <div style={{
                background: LIGHT_BG,
                borderRadius: 12,
                padding: "18px 20px",
                borderLeft: `4px solid ${riskColors[result.risk]}`,
                marginBottom: 24,
              }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  color: NAVY,
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {recommendations[result.risk]}
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
                  transition: "transform 0.15s",
                }}
              >
                Get a Free Professional Roof Inspection
              </Link>
            </div>
          )}
        </section>

        {/* Info Section */}
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
              Understanding Your Roof's Lifespan
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              Your roof's actual lifespan depends on several factors beyond material type: installation quality, attic ventilation, Colorado's intense UV exposure, and of course, hail damage. A roof that's been hit by hail may have hidden damage that shortens its life by years.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 16 }}>
              Gates Enterprises has replaced thousands of roofs across Colorado's Front Range. As the state's only quadruple manufacturer certified roofer (GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, CertainTeed Shingle Master), we know exactly what to look for during an inspection.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7 }}>
              If your roof is aging or you've had a recent hailstorm, a professional inspection can save you thousands by catching problems early. <Link href="/services/roof-repair" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Learn about our repair services</Link> or <Link href="/services/storm-hail-damage" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>check if you have storm damage</Link>.
            </p>
          </div>
        </section>

        {/* ─── DISCLAIMER ─── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 48px" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, lineHeight: 1.7, fontStyle: "italic" }}>
            This tool provides estimates based on typical material lifespans. Actual roof condition depends on many factors including installation quality, weather exposure, and maintenance. Schedule a professional inspection for an accurate assessment.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
