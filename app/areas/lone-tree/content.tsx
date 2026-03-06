"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
export default function CityContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Lone Tree</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>Roofing Contractor in Lone Tree, CO</h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>Douglas County · Premium Homes · GAF Master Elite Certified · 7,200+ Roofs</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>Lone Tree is home to some of the most refined neighborhoods along the south I-25 corridor. From the Ridgegate community to Heritage Hills, homeowners here expect premium materials, flawless installation, and contractors who respect their property. Gates Enterprises meets that standard with quadruple manufacturer certification and meticulous project management.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Request a Free Inspection and Estimate →</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Your Local Lone Tree Roofing Experts</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Lone Tree is one of the most desirable communities in the south Denver metro. The city's homes range from upscale townhomes near Park Meadows and the RidgeGate development to custom estates in established neighborhoods. Many of these properties feature complex rooflines with multiple valleys, dormers, and steep pitches that require experienced crews and precise workmanship.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Hail is a consistent concern in Douglas County. Lone Tree sits along the same storm corridor that affects Highlands Ranch, Parker, and Castle Rock. When large hail events hit the south metro, the damage can be substantial, and homeowners with premium properties need a contractor who understands both the insurance restoration process and the higher end materials these homes deserve.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>Gates Enterprises has completed thousands of roofing projects across the Denver metro, including extensive work in Douglas County communities. Our four manufacturer certifications give Lone Tree homeowners access to the best warranty programs in the industry, and our crews are trained to work on complex, high end rooflines with the care and precision they demand.</p>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Our Services in Lone Tree</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              { t: "Roof Replacement", d: "Full tear off and certified installation with warranties up to 50 years.", h: "/services/roof-replacement" },
              { t: "Storm and Hail Damage", d: "Free inspections and full insurance restoration support.", h: "/services/storm-hail-damage" },
              { t: "Roof Repair", d: "Fast leak repair, emergency tarping, and honest assessments.", h: "/services/roof-repair" },
              { t: "Siding and Exterior", d: "James Hardie, vinyl, and wood siding installation and repair.", h: "/services/siding-exterior" },
              { t: "Gutters and Guards", d: "Seamless gutter fabrication and gutter guard systems.", h: "/services/gutters-guards" },
              { t: "Insurance Restoration", d: "We work directly with your insurance company. Xactimate certified.", h: "/services/insurance-claims" },
            ].map((s, i) => (
              <Link key={i} href={s.h} style={{ textDecoration: "none" }}>
                <div style={{ background: LIGHT_BG, borderRadius: 16, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.04)", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Why Lone Tree Homeowners Choose Gates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              "GAF Master Elite certified — top 2% of contractors nationwide",
              "Specialists in complex, high end residential rooflines",
              "Full insurance restoration support on hail and storm claims",
              "Douglas County permit and inspection coordination",
              "7,200+ roofs completed across the Denver metro",
              "4.8 star Google rating from 300+ verified reviews",
              "Premium material options from all four major manufacturers",
              "Free inspections with no obligation and no pressure",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Need a roofer in Lone Tree?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection. Lone Tree homes deserve premium roofing from a contractor certified by all four major manufacturers." />
      <Footer />
    </div>
  );
}
