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
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Arvada</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>Roofing Contractor in Arvada, CO</h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>GAF Master Elite Certified · Jefferson County · 7,200+ Roofs Completed</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>Arvada's older ranch home neighborhoods are full of roofs from the 1950s through 1970s that are well past their serviceable life. Gates Enterprises works throughout Olde Town Arvada and surrounding neighborhoods, replacing aging roof systems and documenting hail damage that tracks through the area from storms moving in from the north.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Request a Free Inspection and Estimate →</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Your Local Arvada Roofing Experts</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Arvada has a tremendous amount of housing stock built between the 1950s and 1970s — the classic low slope ranch homes that defined suburban Colorado. Many of these roofs have never been replaced, or were last replaced thirty or more years ago with materials that no longer meet current performance standards. Gates Enterprises is experienced at assessing these aging systems and providing honest recommendations, whether that means a full replacement or targeted repairs to extend the life of an existing roof.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 24 }}>Hail storms moving southward from the north regularly track through the Arvada corridor. Jefferson County and the greater Arvada area have seen multiple significant hail events in recent years that have damaged thousands of roofs. If your home was in the path of a storm and you haven't had a professional inspection, it's worth knowing what's up there — some hail damage isn't visible from the ground but leads to premature roof failure within a few years.</p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>We pull Jefferson County building permits for every Arvada roof replacement and coordinate the inspection process from start to finish. Arvada is a growing city, and our team stays current with local code requirements so your project is done right and closed properly with no outstanding permit issues.</p>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Our Services in Arvada</h2>
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
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Why Arvada Homeowners Choose Gates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              "GAF Master Elite certified — top 2% of contractors nationwide",
              "Expert assessment of aging 1950s through 1970s roof systems",
              "Full insurance restoration support on hail and wind claims",
              "Jefferson County permit and inspection coordination",
              "7,200+ roofs completed across the Denver metro",
              "4.8 star Google rating from 293+ verified reviews",
              "Malarkey Emerald Pro and Owens Corning Preferred certified",
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
      <CTA title="Need a roofer in Arvada?" subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection. Whether your roof is thirty years old or recently storm damaged, we give you an honest assessment." />
      <Footer />
    </div>
  );
}
