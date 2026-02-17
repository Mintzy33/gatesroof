"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
const NAVY = "#0D2137"; const ACCENT = "#2563EB"; const WHITE = "#FFFFFF";
export default function ReviewsContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const }}>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
        <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "14px 0" }}>What Homeowners Say</h1>
        <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>Full content coming soon.</p>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
