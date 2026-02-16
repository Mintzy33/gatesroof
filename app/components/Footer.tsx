import Link from "next/link";
const NAVY = "#0D2137";
const WHITE = "#FFFFFF";
const TEXT_LIGHT = "#64748B";
export default function Footer() {
  return (
    <footer style={{ padding: "64px 24px 36px", background: "#F8F9FA", borderTop: "1px solid rgba(13,33,55,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: WHITE, fontSize: 17, fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif" }}>G</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY }}>GATES ENTERPRISES</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, maxWidth: 280 }}>1445 Holland St, Lakewood, CO 80215<br />Colorado Licensed General Contractor<br />GAF Master Elite Certified</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Services</h4>
            {[{l:"Roof Replacement",h:"/services/roof-replacement"},{l:"Storm & Hail Damage",h:"/services/storm-hail-damage"},{l:"Roof Repair",h:"/services/roof-repair"},{l:"Siding & Exterior",h:"/services/siding-exterior"},{l:"Gutters & Guards",h:"/services/gutters-guards"},{l:"Insurance Claims",h:"/services/insurance-claims"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:14 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Company</h4>
            {[{l:"About Us",h:"/about"},{l:"Gallery",h:"/gallery"},{l:"Reviews",h:"/reviews"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:14 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 20 }}>Contact</h4>
            <a href="tel:7207663377" style={{ display:"block", fontFamily:"'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:14 }}>(720) 766-3377</a>
            <a href="mailto:info@gatesroof.com" style={{ display:"block", fontFamily:"'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:14 }}>info@gatesroof.com</a>
            <Link href="/contact" style={{ display:"block", fontFamily:"'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:14 }}>Free Estimate</Link>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(13,33,55,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>© 2026 Gates Enterprises LLC. All rights reserved.</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>Lakewood, Colorado</span>
        </div>
      </div>
    </footer>
  );
}
