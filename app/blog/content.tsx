"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
const NAVY = "#0D2137"; const GOLD = "#C9A54E"; const WHITE = "#FFFFFF";
export default function BlogContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.2em" }}>BLOG</span>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "14px 0" }}>Roofing Tips & News</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>Full content coming soon.</p>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
