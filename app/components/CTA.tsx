import Link from "next/link";
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const WHITE = "#FFFFFF";

export default function CTA({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section style={{ padding: "80px 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(201,165,78,0.06) 0%, transparent 40%)` }} />
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800, color: WHITE, margin: "0 0 20px", lineHeight: 1.1 }}>
          {title || <>Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span></>}
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>{subtitle || "Free inspections. No-pressure estimates. Colorado's most thorough roof evaluation."}</p>
        <div className="cta-buttons" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
          <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 600, boxShadow: "0 8px 30px rgba(59,125,216,0.3)" }}>Schedule Free Inspection</Link>
          <a href="tel:7207663377" style={{ background: "transparent", color: WHITE, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 500 }}>Call (720) 766-3377</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .cta-buttons { flex-direction: column !important; }
          .cta-buttons a { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
