import Link from "next/link";
import Image from "next/image";
const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const TEXT_LIGHT = "#64748B";

export default function Footer() {
  return (
    <footer style={{ padding: "56px 20px 32px", background: "#F8F9FA", borderTop: "1px solid rgba(13,33,55,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <Link href="/"><Image src="/logo.png" alt="Gates Enterprises" width={180} height={54} style={{ height: 40, width: "auto", objectFit: "contain" }} /></Link>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, maxWidth: 280, marginBottom: 20 }}>1445 Holland St, Lakewood, CO 80215<br />Colorado Licensed General Contractor</p>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <a href="https://www.instagram.com/gatesroofing" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/GatesEnterprisesLLC/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/gatesenterprisesllc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Services</h3>
            {[{l:"Roof Replacement",h:"/services/roof-replacement"},{l:"Storm & Hail Damage",h:"/services/storm-hail-damage"},{l:"Roof Repair",h:"/services/roof-repair"},{l:"Siding & Exterior",h:"/services/siding-exterior"},{l:"Gutters & Guards",h:"/services/gutters-guards"},{l:"Windows",h:"/services/windows"},{l:"Paint",h:"/services/paint"},{l:"Insurance Restoration",h:"/services/insurance-claims"},{l:"Drone Inspections",h:"/services/drone-inspections"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Company</h3>
            {[{l:"About Us",h:"/about"},{l:"Alex Chicilo",h:"/about/alex-chicilo"},{l:"Gallery",h:"/gallery"},{l:"Reviews",h:"/reviews"},{l:"Free Tools",h:"/tools"},{l:"Blog",h:"/blog"},{l:"FAQ",h:"/faq"},{l:"Financing",h:"/financing"},{l:"Warranty",h:"/warranty"},{l:"Compare",h:"/compare"},{l:"Contact",h:"/contact"},{l:"Referral Program",h:"/referral"}].map(lk=>(
              <Link key={lk.l} href={lk.h} style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>{lk.l}</Link>
            ))}
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Contact</h3>
            <p style={{ margin:"0 0 16px 0" }}><a href="tel:7207663377" style={{ fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none" }}>(720) 766-3377</a></p>
            <p style={{ margin:"0 0 16px 0" }}><a href="mailto:info@gatesroof.com" style={{ fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none" }}>info@gatesroof.com</a></p>
            <p style={{ margin:"0 0 16px 0" }}><Link href="/contact" style={{ fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:ACCENT, textDecoration:"none", fontWeight:600 }}>Request a Free Inspection & Estimate →</Link></p>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: 18 }}>Service Areas</h3>
            {[{l:"Denver",s:"denver"},{l:"Aurora",s:"aurora"},{l:"Lakewood",s:"lakewood"},{l:"Arvada",s:"arvada"},{l:"Westminster",s:"westminster"},{l:"Thornton",s:"thornton"},{l:"Centennial",s:"centennial"},{l:"Parker",s:"parker"},{l:"Littleton",s:"littleton"},{l:"Highlands Ranch",s:"highlands-ranch"},{l:"Broomfield",s:"broomfield"},{l:"Golden",s:"golden"},{l:"Castle Rock",s:"castle-rock"},{l:"Commerce City",s:"commerce-city"},{l:"Brighton",s:"brighton"},{l:"Superior",s:"superior"},{l:"Lone Tree",s:"lone-tree"},{l:"Morrison",s:"morrison"},{l:"Evergreen",s:"evergreen"},{l:"Englewood",s:"englewood"}].map(c=>(
              <Link key={c.l} href={`/areas/${c.s}`} style={{ display:"block", fontFamily:"var(--font-dm-sans), 'DM Sans', sans-serif", fontSize:14, color:TEXT_LIGHT, textDecoration:"none", marginBottom:12 }}>{c.l}</Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(13,33,55,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>© 2026 Gates Enterprises LLC</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/privacy" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, textDecoration: "none" }}>Terms of Service</Link>
          </div>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>Lakewood, Colorado</span>
        </div>
      </div>
      <style>{`
        .footer-social-link { color: #64748B; transition: color 0.2s ease, transform 0.2s ease; display: flex; align-items: center; }
        .footer-social-link:hover { color: #2563EB; transform: translateY(-2px); }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 28px !important; }
          .footer-bottom { flex-direction: column !important; gap: 12px !important; align-items: center !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .footer-grid p { margin: 0 auto; }
        }
      `}</style>
    </footer>
  );
}
