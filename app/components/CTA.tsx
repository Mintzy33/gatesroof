import Link from "next/link";
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const WHITE = "#FFFFFF";
export default function CTA({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="cta-section" style={{ padding: "72px 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)` }} />
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
          {title || <>Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span></>}
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2.5vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px" }}>{subtitle || "Free inspections. No-pressure estimates. Colorado's most thorough roof evaluation."}</p>
        <div className="cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
          <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Get Free Estimate</Link>
          <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .cta-section { padding: 56px 20px !important; }
          .cta-btns { flex-direction: column !important; }
          .cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </section>
  );
}
