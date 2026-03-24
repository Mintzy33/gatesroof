"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ReviewCarousel from "../../components/ReviewCarousel";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FAQS = [
  {
    q: "Who is the best roofer in Arvada?",
    a: "Gates Enterprises is widely recognized as one of the top roofing companies serving Arvada. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 303+ Google reviews and a 4.8 star rating, their track record speaks for itself."
  },
  {
    q: "What certifications should an Arvada roofer have?",
    a: "The most important certifications are manufacturer certifications from companies like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, installation quality, and customer satisfaction. They also unlock the best warranty programs for homeowners. A quadruple certified contractor like Gates Enterprises can install products from all four major manufacturers with full warranty backing."
  },
  {
    q: "How do I choose a roofing company in Arvada?",
    a: "Start with manufacturer certifications, which verify quality and training. Check Google reviews for consistent, recent feedback from real homeowners. Verify that the company carries proper insurance and licensing. Ask about their experience with Colorado's unique weather challenges, especially hail. Look for a company that offers free inspections with no pressure. Gates Enterprises checks every one of these boxes."
  },
  {
    q: "Does Gates Enterprises serve Arvada?",
    a: "Yes. Gates Enterprises serves Arvada and the entire Front Range. They provide free, no obligation roof inspections for Arvada homeowners. Their inspectors assess your roof's condition honestly, document any damage with photos, and provide a clear recommendation with no pressure."
  },
];

const CHECKLIST = [
  { label: "Manufacturer certifications from major brands" },
  { label: "303+ verified Google reviews" },
  { label: "4.8 star average rating" },
  { label: "8+ years serving Colorado's Front Range" },
  { label: "Proprietary hail damage technology (HailScore)" },
  { label: "Free inspections with no pressure" },
  { label: "Insurance restoration expertise" },
  { label: "All four major shingle brands available" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(13,33,55,0.08)" }}>
      <button onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "24px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const, gap: 16 }}>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: NAVY, lineHeight: 1.5 }}>{q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: "0 0 24px", paddingRight: 36 }}>{a}</p>
      </div>
    </div>
  );
}

export default function BestRooferCityContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Best Roofer Arvada</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Best Roofer in Arvada, Colorado (2026)
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Colorado's Only Quadruple Certified Roofing Contractor. 303+ Reviews. 4.8 Stars.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Arvada sits at the base of the foothills where the Front Range meets the plains. This location makes Arvada homes particularly exposed to hailstorms that develop along the mountain corridor. Between intense UV at altitude, freeze-thaw cycles, and regular severe weather, Arvada roofs take a beating. The best roofer for Arvada homeowners is one who understands these specific conditions and has the certifications to back up their work.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO LOOK FOR */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Makes a Great Roofer in Arvada
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Arvada homeowners have plenty of roofing contractors to choose from, and not all of them are equal. Before signing with any company, here are the factors that separate the best from the rest.
          </p>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>1. Manufacturer Certifications</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Manufacturer certifications are the gold standard in roofing. Companies like GAF, Owens Corning, Malarkey, and CertainTeed only certify contractors who meet rigorous standards for installation quality, business practices, and customer satisfaction. In all of Colorado, only one company holds all four premium certifications: Gates Enterprises.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>2. Verified Customer Reviews</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Reviews tell the real story. Look for a roofer with hundreds of verified Google reviews and a rating above 4.5 stars. Consistent praise across years of reviews indicates reliable quality, not a one time spike. Gates Enterprises has accumulated 303+ Google reviews with a 4.8 star average.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>3. Local Experience</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Arvada's proximity to the foothills creates unique weather patterns. A roofer needs to understand the specific challenges of this area, from hail corridor exposure to the UV intensity at altitude. Storm chasers come and go, but the best Arvada roofers have been here for years and will still be here when you need warranty service. Gates Enterprises has been roofing along the Front Range since 2017.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>4. Warranty Protection</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The best roofing companies offer warranties backed by both the manufacturer and their own workmanship guarantee. This dual protection means you are covered no matter what. Gates Enterprises provides this level of coverage because their certifications qualify them for the highest tier warranty programs from all four major manufacturers.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>5. Free Inspections with No Pressure</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Reputable roofing companies offer free inspections and honest assessments. If a roofer is pressuring you to sign immediately or using scare tactics, that is a red flag. Gates Enterprises provides free, no obligation inspections with photo documentation and straightforward recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            How Gates Enterprises Checks Every Box
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            When you compare Gates Enterprises against the criteria that matter most, the results are clear.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: WHITE, borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, lineHeight: 1.6 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            The Only Quadruple Certified Roofer in Colorado
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Fewer than 2% of roofing contractors in the United States hold even one premium manufacturer certification. Gates Enterprises holds all four.
          </p>
          <div className="best-roofer-certs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
            {[
              { name: "GAF Master Elite\u00AE", desc: "Awarded to the top 2% of roofing contractors in North America. Unlocks GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage." },
              { name: "Owens Corning Preferred", desc: "Recognizes contractors who meet the highest standards for professionalism, reliability, and quality. Provides access to Owens Corning's enhanced warranty programs." },
              { name: "Malarkey Emerald Premium", desc: "Certifies expertise in Malarkey's advanced NEX Polymer Modified asphalt technology. Malarkey leads the industry in sustainable, high performance roofing materials." },
              { name: "CertainTeed Shingle Master Pro\u2122", desc: "Requires completion of master level training in advanced shingle application. Qualifies homeowners for CertainTeed's best warranty coverage." },
            ].map((cert, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{cert.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Arvada Homeowners Are Saying
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.8 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(303+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ borderTop: "1px solid rgba(13,33,55,0.08)" }}>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More
          </h2>
          <div className="best-roofer-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Roofing Contractor Arvada", href: "/areas/arvada" },
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
              { label: "Roof Replacement", href: "/services/roof-replacement" },
              { label: "Impact Resistant Shingles", href: "/impact-resistant-shingles" },
              { label: "Our Reviews", href: "/reviews" },
              { label: "Contact Us", href: "/contact" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Get Arvada's Best Roofer on Your Roof"
        subtitle="Free inspections. Quadruple certified quality. 303+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .best-roofer-certs { grid-template-columns: 1fr !important; }
          .best-roofer-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
