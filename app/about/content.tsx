"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT_LIGHT = "#64748B";
export default function AboutContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.2em" }}>ABOUT US</span>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "14px 0 20px" }}>Built on Trust. Backed by Results.</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>Gates Enterprises has been protecting Colorado homes and businesses for over a decade. We&apos;re not storm chasers — we&apos;re your neighbors.</p>
      </section>
      <section style={{ padding: "100px 24px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR STORY</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 800, color: NAVY, margin: "14px 0 20px", lineHeight: 1.15 }}>From Day One, We Do It Right</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>Gates Enterprises started with a simple belief: homeowners deserve a contractor who treats their home like their own. Based out of Lakewood, we&apos;ve grown from a small crew to one of Colorado&apos;s most respected exterior contractors.</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>With over 7,200 roofs completed, four manufacturer certifications, and a 4.8-star Google rating, our track record speaks for itself. We specialize in storm damage restoration and insurance claims — and we&apos;ve recovered millions for Colorado homeowners who were initially underpaid.</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>Every project gets the same attention to detail, whether it&apos;s a full roof replacement or a gutter repair. That&apos;s the Gates standard.</p>
          </div>
          <div style={{ background: LIGHT_BG, borderRadius: 24, padding: 48, border: "1px solid rgba(13,33,55,0.05)" }}>
            {[{v:"7,204+",l:"Roofs completed across Colorado"},{v:"10+",l:"Years serving the Denver metro"},{v:"4.8★",l:"Google rating from 200+ reviews"},{v:"4",l:"Manufacturer certifications"}].map((s,i)=>(
              <div key={i} style={{ marginBottom: i < 3 ? 36 : 0 }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 800, color: NAVY }}>{s.v}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "100px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>CERTIFICATIONS</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "14px 0 48px" }}>Quadruple Manufacturer Certified</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              {name:"GAF Master Elite",desc:"Top 2% of all roofing contractors in North America. Access to Golden Pledge warranty.",hl:true},
              {name:"CertainTeed Platinum Preferred",desc:"CertainTeed's highest contractor tier. SureStart PLUS extended warranty program.",hl:false},
              {name:"Malarkey Certified",desc:"Factory-certified installer of Malarkey's premium roofing products.",hl:false},
              {name:"Emerald Premium",desc:"Premium certification demonstrating excellence in installation and service.",hl:false},
            ].map((c,i)=>(
              <div key={i} style={{ background: WHITE, borderRadius: 20, padding: "36px 28px", border: c.hl ? `2px solid ${ACCENT}` : "1px solid rgba(13,33,55,0.05)", boxShadow: c.hl ? "0 8px 30px rgba(59,125,216,0.1)" : "0 2px 12px rgba(13,33,55,0.03)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: c.hl ? `${ACCENT}10` : LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c.hl ? ACCENT : NAVY} strokeWidth="1.8"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{c.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
