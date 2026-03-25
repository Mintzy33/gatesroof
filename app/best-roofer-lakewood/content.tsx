"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ReviewCarousel from "../components/ReviewCarousel";

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
    q: "Who is the best roofer in Lakewood, Colorado?",
    a: "Gates Enterprises LLC is headquartered in Lakewood and is recognized as one of the top roofing companies in the area. They are the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 305+ Google reviews and a 4.8 star rating, they are a proven choice."
  },
  {
    q: "Why choose a Lakewood based roofing company?",
    a: "Choosing a locally headquartered roofer means faster response times, familiarity with local building codes and HOA requirements, and a company invested in the community. Gates Enterprises is based right here in Lakewood. Your neighborhood is their neighborhood."
  },
  {
    q: "How do I know if my Lakewood roof has hail damage?",
    a: "Hail damage is not always visible from the ground. Look for dented gutters, cracked siding, or dings on outdoor AC units as indicators. On the roof, hail creates circular dents in shingles. The best approach is a free professional inspection. Gates Enterprises also offers HailScore, which shows exact hail history for your address."
  },
  {
    q: "Does Gates Enterprises offer free inspections in Lakewood?",
    a: "Yes. As a Lakewood based company, Gates Enterprises provides free, no obligation roof inspections throughout the city. They assess your roof honestly, document findings with photos, and give you a clear recommendation."
  },
  {
    q: "What is the best roofing material for Lakewood homes?",
    a: "Class 4 impact resistant shingles provide the best protection for Lakewood homes while potentially reducing insurance premiums. Gates Enterprises installs impact resistant products from all four major manufacturers, giving you the widest selection."
  }
];

const CHECKLIST = [
  { label: "Headquartered right here in Lakewood, CO" },
  { label: "Manufacturer certifications from all four major brands" },
  { label: "305+ verified Google reviews" },
  { label: "4.8 star average rating" },
  { label: "8+ years serving Colorado's Front Range" },
  { label: "Proprietary HailScore radar technology" },
  { label: "Free inspections with zero pressure" },
  { label: "Insurance restoration expertise" },
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

export default function BestRooferLakewoodContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Best Roofer Lakewood</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Best Roofing Company in Lakewood, Colorado (2026)
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Lakewood's Own Quadruple Certified Roofing Contractor. 305+ Reviews. 4.8 Stars.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            When it comes to roofing in Lakewood, you have a distinct advantage: Colorado's most certified roofing company is headquartered right in your city. Gates Enterprises LLC is based in Lakewood and serves the community with a level of expertise, technology, and quality that no other local roofer can match. From the historic homes near Belmar to the newer developments in Green Mountain, Lakewood homes face the same hail, wind, and UV challenges as the rest of the Front Range. Here is why your neighbors keep choosing Gates.
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

      {/* YOUR LOCAL ROOFER */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why Lakewood's Best Roofer is Already in Your Backyard
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Gates Enterprises is headquartered in Lakewood, which means faster response times, deeper knowledge of local building codes and HOA requirements, and a genuine investment in the community. When a hailstorm hits, they are not driving in from out of state. They are already here, ready to inspect, document, and restore your home.
          </p>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Four Manufacturer Certifications</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises LLC holds certifications from all four major shingle manufacturers: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. Fewer than 2% of roofers in the country hold even one of these. No other Colorado roofer holds all four. For Lakewood homeowners, this means the widest selection of premium products and the strongest warranty coverage available.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>305+ Reviews and Counting</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              With 305+ Google reviews and a 4.8 star average, Gates Enterprises has one of the strongest reputations of any roofing company in the Denver metro. Many of those reviews come from Lakewood homeowners who have seen the quality of their work firsthand. Consistent, verified reviews over years of service tell a much more reliable story than a handful of perfect ratings.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>HailScore: Know Your Roof's History</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              <Link href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>HailScore</Link> is a proprietary tool built by Gates Enterprises that uses NOAA radar data to map hail impact history for any address. For Lakewood homeowners, this means knowing exactly which storms have hit your property, the size of hailstones, and whether your roof has taken cumulative damage over the years. It is the most transparent approach to roof inspections available anywhere in Colorado.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Specialists</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Lakewood sits in the heart of Colorado's hail corridor, and many roof replacements involve insurance claims. Gates Enterprises is an insurance restoration specialist. They document damage thoroughly, communicate directly with insurance adjusters, and ensure your property is fully restored. Their experience with the process makes a stressful situation much more manageable.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Free Inspections, Honest Advice</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates Enterprises provides free, no obligation roof inspections for Lakewood homeowners. Their inspectors assess your roof honestly, show you what they find with photos, and give you a straight recommendation. No pressure. No scare tactics. Just the facts about your roof's condition.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why Lakewood Homeowners Choose Gates
          </h2>
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
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Quadruple Certified, Lakewood Based
          </h2>
          <div className="best-roofer-lkwd-certs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
            {[
              { name: "GAF Master Elite\u00AE", desc: "Top 2% of contractors nationwide. GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage." },
              { name: "Owens Corning Preferred", desc: "Highest tier contractor status. Enhanced warranty programs and premium product access." },
              { name: "Malarkey Emerald Premium", desc: "Certified in Malarkey's advanced NEX Polymer Modified technology for Colorado's demanding climate." },
              { name: "CertainTeed Shingle Master Pro\u2122", desc: "Master level installation training. CertainTeed's strongest warranty programs." },
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
            What Lakewood Homeowners Are Saying
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.8 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(305+ reviews)</span>
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
          <div className="best-roofer-lkwd-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Roofing Contractor Lakewood", href: "/areas/lakewood" },
              { label: "Best Roofer Denver", href: "/best-roofer-denver" },
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
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
        title="Your Lakewood Neighbor. Colorado's Best Roofer."
        subtitle="Free inspections from the quadruple certified roofer headquartered right here in Lakewood. 305+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .best-roofer-lkwd-certs { grid-template-columns: 1fr !important; }
          .best-roofer-lkwd-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
