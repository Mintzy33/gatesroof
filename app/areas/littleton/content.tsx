"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
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
          <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Littleton</Link>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>Roofing Contractor in Littleton, CO</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: GOLD, fontWeight: 500, marginBottom: 20 }}>GAF Master Elite Certified · 7,200+ Roofs · 4.8★ Google Rating</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>Gates Enterprises brings over a decade of roofing expertise to Littleton homeowners. From downtown Littleton to Highlands Ranch adjacent neighborhoods, we deliver certified quality on every project.</p>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Get a Free Estimate →</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Your Local Littleton Roofing Experts</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>Littleton charming homes deserve a contractor who respects their character. We match architectural styles, work within HOA guidelines, and use only the best materials from manufacturers we are certified to install.</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Our Services in Littleton</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              {t:"Roof Replacement",d:"Full tear-off and certified installation with warranties up to 50 years.",h:"/services/roof-replacement"},
              {t:"Storm & Hail Damage",d:"Free inspections and complete insurance claim management.",h:"/services/storm-hail-damage"},
              {t:"Roof Repair",d:"Fast leak repair, emergency tarping, and honest assessments.",h:"/services/roof-repair"},
              {t:"Siding & Exterior",d:"James Hardie, vinyl, and wood siding installation and repair.",h:"/services/siding-exterior"},
              {t:"Gutters & Guards",d:"Seamless gutter fabrication and gutter guard systems.",h:"/services/gutters-guards"},
              {t:"Insurance Claims",d:"We fight for your full payout — Xactimate certified.",h:"/services/insurance-claims"},
            ].map((s,i)=>(
              <Link key={i} href={s.h} style={{textDecoration:"none"}}>
                <div style={{background:LIGHT_BG,borderRadius:16,padding:"24px 20px",border:"1px solid rgba(13,33,55,0.04)",height:"100%"}}>
                  <h3 style={{fontFamily:"'Playfair Display', Georgia, serif",fontSize:18,fontWeight:700,color:NAVY,marginBottom:8}}>{s.t}</h3>
                  <p style={{fontFamily:"'DM Sans', sans-serif",fontSize:14,lineHeight:1.7,color:TEXT_LIGHT,margin:0}}>{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20 }}>Why Littleton Homeowners Choose Gates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {["GAF Master Elite — top 2% of contractors nationwide","Up to 50 year manufacturer-backed warranty","Complete insurance claim management","CertainTeed Platinum Preferred certified","7,200+ roofs completed across Colorado","4.8★ Google rating from 200+ reviews","Locally owned and operated from Lakewood","Free inspections with no obligation"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginTop:2,flexShrink:0}}><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:TEXT,lineHeight:1.6}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title={"Need a roofer in Littleton?"} subtitle="Call Gates Enterprises at (720) 766-3377 for a free inspection. No obligation, no pressure — just an honest assessment of your roof." />
      <Footer />
    </div>
  );
}
