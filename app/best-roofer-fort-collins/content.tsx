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
    q: "Who is the best roofer in Fort Collins?",
    a: "Gates Enterprises LLC is recognized as one of the top roofing companies serving Fort Collins and Northern Colorado. They are the only contractor in the state to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 308+ Google reviews and a 4.9 star rating, their quality speaks for itself."
  },
  {
    q: "Does Fort Collins get a lot of hail?",
    a: "Yes. Fort Collins sits at the northern end of Colorado's Front Range hail corridor. The city experiences significant hailstorms regularly, with some seasons producing multiple damaging events. Hail season runs April through September, peaking in June and July."
  },
  {
    q: "What should I look for in a Fort Collins roofing company?",
    a: "Prioritize manufacturer certifications, which verify installation quality and unlock the best warranties. Check Google reviews for consistent feedback over time. Make sure the company has been in Colorado long enough to understand local weather, codes, and HOA requirements. Gates Enterprises checks every box."
  },
  {
    q: "Does Gates Enterprises serve Fort Collins?",
    a: "Yes. Gates Enterprises LLC serves homeowners throughout Fort Collins and Northern Colorado, including Loveland, Windsor, Timnath, and Wellington."
  },
  {
    q: "Can I get a free roof inspection in Fort Collins?",
    a: "Yes. Gates Enterprises offers free, no obligation roof inspections for Fort Collins homeowners. They provide honest assessments, photo documentation, and clear recommendations with zero pressure."
  }
];

const CHECKLIST = [
  { label: "Manufacturer certifications from all four major brands" },
  { label: "308+ verified Google reviews" },
  { label: "4.9 star average rating" },
  { label: "8+ years serving Colorado's Front Range" },
  { label: "Proprietary HailScore radar technology" },
  { label: "Free inspections with zero pressure" },
  { label: "Insurance restoration expertise" },
  { label: "Products from GAF, Owens Corning, Malarkey, and CertainTeed" },
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

export default function BestRooferFortCollinsContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Best Roofer Fort Collins</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Best Roofing Company in Fort Collins, Colorado (2026)
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Colorado's Only Quadruple Certified Roofing Contractor. 308+ Reviews. 4.9 Stars.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Fort Collins homeowners face a unique set of roofing challenges. Between the severe hailstorms that roll through Northern Colorado, the intense UV exposure at elevation, and the dramatic temperature swings from season to season, your roof needs to be installed right the first time. Finding the best roofing company in Fort Collins means looking beyond the cheapest quote. It means choosing a contractor with real certifications, a proven track record, and technology that sets them apart. Here is what to look for and why Gates Enterprises LLC stands above the competition.
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
            What Fort Collins Homeowners Need in a Roofer
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Northern Colorado has its own roofing market dynamics. College town energy brings a mix of established contractors and newcomers. Here is how to identify the best.
          </p>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Premium Manufacturer Certifications</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              The most reliable signal of a quality roofer is certification from the manufacturers whose products they install. GAF, Owens Corning, Malarkey, and CertainTeed each run rigorous certification programs that evaluate installation quality, business stability, and customer satisfaction. Most Fort Collins roofers hold zero certifications. A few hold one. Gates Enterprises LLC is the only roofing contractor in Colorado to hold all four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>A Deep Bench of Verified Reviews</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              308+ Google reviews with a 4.9 star average does not happen by accident. It takes years of consistently excellent work, honest communication, and follow through on promises. Gates Enterprises has built that track record across thousands of projects along Colorado's Front Range, including Fort Collins and surrounding communities. The reviews are from real homeowners who have experienced the quality firsthand.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>HailScore: Data Driven Roof Intelligence</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Fort Collins gets hammered by hail. Storms that develop along the foothills frequently track through Larimer County with large, damaging hailstones. Gates Enterprises developed <Link href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>HailScore</Link>, a proprietary tool that uses NOAA radar data to reveal the exact hail history for any Fort Collins address. It shows which storms hit your property, hailstone sizes, and how many events your home has endured. This objective, data backed approach to inspections is unique to Gates Enterprises.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Restoration Know How</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Many Fort Collins roof replacements involve insurance claims from storm damage. The best roofers know how to document damage thoroughly, communicate with adjusters, and ensure your property is fully restored. Gates Enterprises is an insurance restoration specialist that has guided thousands of Colorado homeowners through the process from first inspection to final walkthrough.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Longevity and Local Commitment</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Storm chasers flood Fort Collins after every major hail event. They offer low prices, rush through the work, and disappear. Gates Enterprises has been serving Colorado's Front Range since 2017 and is committed to the communities they serve. When you need warranty service or a follow up inspection years from now, they will be here.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Gates Enterprises: The Clear Choice for Fort Collins
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
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Four Certifications No Other Colorado Roofer Has
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Each certification means Fort Collins homeowners get access to the best products and warranties from that manufacturer.
          </p>
          <div className="best-roofer-ftc-certs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
            {[
              { name: "GAF Master Elite\u00AE", desc: "Top 2% of contractors nationwide. Access to GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage." },
              { name: "Owens Corning Preferred", desc: "Highest tier in Owens Corning's network. Enhanced warranties and premium product lines." },
              { name: "Malarkey Emerald Premium", desc: "Certified in Malarkey's NEX Polymer Modified asphalt technology for superior Northern Colorado durability." },
              { name: "CertainTeed Shingle Master Pro\u2122", desc: "Master level shingle application training. CertainTeed's strongest warranty programs." },
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
            What Colorado Homeowners Are Saying
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(308+ reviews)</span>
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
          <div className="best-roofer-ftc-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Best Roofer Denver", href: "/best-roofer-denver" },
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
        title="Fort Collins Deserves Colorado's Best Roofer"
        subtitle="Free inspections. Quadruple certified quality. 308+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .best-roofer-ftc-certs { grid-template-columns: 1fr !important; }
          .best-roofer-ftc-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
