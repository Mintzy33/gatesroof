import Link from "next/link";
import Image from "next/image";
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const TEXT_LIGHT = "#64748B";

export default function Footer() {
  return (
    <footer style={{ padding: "56px 20px 32px", background: "#F8F9FA", borderTop: "1px solid rgba(13,33,55,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <Link href="/"><Image src="/logo.png" alt="Gates Enterprises" width={180} height={54} style={{ height: 40, width: "auto", objectFit: "contain" }} /></Link>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, maxWidth: 280 }}>1445 Holland St, Lakewood, CO 80215<br />Colorado Licensed General Contractor<br />GAF Master Elite Certified</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Services</h3>
            {[{l:"Roof Replacement",h:"/services/roof-replacement"},{l:"Storm & Hail Damage",h:"/services/storm-hail-damage"},{l:"Roof Repair",h:"/services/roof-repair"},{l:"Siding & Exterior",h:"/services/siding-exterior"},{l:"Gutters & Guards",h:"/services/gutters-guards"},{l:"Insurance Claims",h:"/services/insurance-claims"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Company</h3>
            {[{l:"About Us",h:"/about"},{l:"Gallery",h:"/gallery"},{l:"Reviews",h:"/reviews"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Contact</h3>
            <a href="tel:7207663377" style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>(720) 766-3377</a>
            <a href="mailto:info@gatesroof.com" style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>info@gatesroof.com</a>
            <Link href="/contact" style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:ACCENT, textDecoration:"none", marginBottom:12, fontWeight:600 }}>Free Estimate →</Link>
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(13,33,55,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>© 2026 Gates Enterprises LLC</span>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>Lakewood, Colorado</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .footer-bottom { flex-direction: column !important; gap: 6px !important; align-items: center !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .footer-grid p { margin: 0 auto; }
        }
      `}</style>
    </footer>
  );
}
