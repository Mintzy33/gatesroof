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
    q: "Why should I choose Gates Enterprises?",
    a: "Gates Enterprises LLC is the only roofing contractor in Colorado to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master Pro. With 306+ Google reviews, a 4.9 star rating, proprietary HailScore technology, and 8+ years on the Front Range, Gates combines credentials, track record, and innovation in a way no other Colorado roofer can."
  },
  {
    q: "What makes Gates Enterprises different from other roofers?",
    a: "Three things set Gates apart. First, quadruple manufacturer certification that no other Colorado roofer has achieved. Second, HailScore, a proprietary tool that uses NOAA radar data to show the exact hail history for any Colorado address. Third, a 4.9 star rating across 306+ Google reviews reflecting years of consistent quality."
  },
  {
    q: "What is HailScore?",
    a: "HailScore is a proprietary technology developed by Gates Enterprises that analyzes NOAA radar data to map hail impact history for any address in Colorado. It shows the exact dates, sizes, and severity of hailstorms that have affected a property, giving homeowners objective data before an inspector even climbs up."
  },
  {
    q: "Does Gates Enterprises offer warranties?",
    a: "Yes. Because Gates holds certifications from all four major manufacturers, they offer the strongest warranty programs available from GAF, Owens Corning, Malarkey, and CertainTeed. This includes GAF's Golden Pledge Limited Warranty with 25 year workmanship coverage."
  },
  {
    q: "How long has Gates Enterprises been in business?",
    a: "Gates Enterprises LLC was founded in May 2017 and has been serving Colorado's Front Range for over 8 years, completing thousands of roofing and exterior projects."
  }
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

export default function WhyGatesContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Why Gates Enterprises</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Why Choose Gates Enterprises Over Other Colorado Roofers
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Certified. Data Driven. Proven by 306+ Five Star Reviews.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Colorado has thousands of roofing contractors. Many are good. Some are great. But when you look at the full picture, certifications, reviews, technology, and track record, one company stands apart. Gates Enterprises LLC has built something no other Colorado roofer has: quadruple manufacturer certification, a proprietary data platform, and a reputation backed by 306+ verified Google reviews. Here is exactly what sets us apart and why it matters for your home.
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

      {/* WHAT SETS US APART - CERTIFICATIONS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Sets Us Apart: Four Certifications No Other Colorado Roofer Has
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Manufacturer certifications are the roofing industry's highest endorsement. They are not purchased. They are earned through demonstrated installation excellence, business stability, customer satisfaction, and ongoing training. Fewer than 2% of roofers nationwide hold even one premium certification. Gates Enterprises holds all four.
          </p>

          <div className="why-gates-certs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
            {[
              {
                name: "GAF Master Elite\u00AE",
                detail: "Top 2% of contractors in North America",
                desc: "GAF is the largest roofing manufacturer in North America. Their Master Elite program is the highest contractor tier, reserved for roofers who demonstrate exceptional installation quality and customer satisfaction. Gates Enterprises' Master Elite status unlocks GAF's Golden Pledge Limited Warranty, which includes 25 years of workmanship coverage. Only Master Elite contractors can offer this warranty."
              },
              {
                name: "Owens Corning Preferred",
                detail: "Highest tier in Owens Corning's network",
                desc: "Owens Corning's Preferred designation recognizes contractors who meet the most stringent standards for professionalism, reliability, and installation quality. This certification gives Gates Enterprises' customers access to Owens Corning's enhanced warranty programs and their full premium product line, including the popular Duration and TruDefinition series."
              },
              {
                name: "Malarkey Emerald Premium",
                detail: "Advanced polymer modified technology specialists",
                desc: "Malarkey Roofing Products leads the industry in sustainable, high performance roofing materials. As an Emerald Premium contractor, Gates Enterprises is specially trained to install Malarkey's advanced NEX Polymer Modified asphalt shingles, which deliver superior flexibility, adhesion, and durability in Colorado's extreme weather conditions."
              },
              {
                name: "CertainTeed Shingle Master Pro\u2122",
                detail: "Master level installation training",
                desc: "CertainTeed's Shingle Master Pro credential requires completion of master level training in advanced shingle application techniques. This certification ensures every installation meets CertainTeed's highest standards, qualifying homeowners for their most comprehensive warranty coverage. Gates Enterprises' crews are trained to handle even the most complex roof configurations."
              },
            ].map((cert, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{cert.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: ACCENT, marginBottom: 12 }}>{cert.detail}</p>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{cert.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            What does quadruple certification mean for you? It means you are never locked into one manufacturer. Gates Enterprises can recommend the ideal product for your specific roof, budget, and goals. Whether you prefer GAF's Timberline HDZ, Owens Corning's Duration FLEX, Malarkey's Vista AR, or CertainTeed's Landmark IR, you get the best warranty coverage and the best installation quality. No compromises.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY ADVANTAGE */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Our Technology Advantage: HailScore
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Most roofing companies rely on visual inspections alone. Gates Enterprises starts with data.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            <Link href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>HailScore</Link> is a proprietary platform built by Gates Enterprises that analyzes NOAA radar data to map hail impact history for any address in Colorado. It reveals:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
            {[
              "Exact dates of hailstorms that impacted your property",
              "Hailstone sizes recorded by NOAA radar",
              "Number of hail events your home has endured",
              "Cumulative exposure over the life of your roof",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            This matters because hail damage is cumulative. A roof that has been hit by multiple storms may look acceptable from the ground but have compromised shingles that will fail during the next event. HailScore gives you an objective, data backed understanding of your roof's condition before any sales conversation begins.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            No other roofing company in Colorado has built anything like HailScore. It represents a fundamentally different approach to roof inspections: transparent, data driven, and focused on giving homeowners the information they need to make confident decisions.
          </p>
          <Link href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Check Your HailScore &rarr;
          </Link>
        </div>
      </section>

      {/* OUR TRACK RECORD */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Our Track Record: 306+ Reviews, Thousands of Roofs
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Numbers tell a story that marketing cannot fake.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 32 }}>
            {[
              { num: "306+", label: "Google Reviews" },
              { num: "4.9", label: "Star Rating" },
              { num: "8+", label: "Years in Colorado" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" as const, padding: "32px 16px", background: LIGHT_BG, borderRadius: 16, border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 40, fontWeight: 800, color: NAVY, lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 8 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Gates Enterprises LLC was founded in May 2017 and has completed thousands of roofing and exterior projects across Colorado's Front Range. From Denver and Lakewood to Parker, Aurora, and Colorado Springs, homeowners have trusted Gates with their most valuable asset: their home.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            The 306+ Google reviews with a 4.9 star average did not accumulate overnight. They represent years of showing up on time, communicating honestly, installing correctly, and following through on promises. When you read through the reviews, you will notice consistent themes: professionalism, quality, transparency, and genuine care for the homeowner's experience.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            Unlike storm chasers who appear after a hail event and disappear months later, Gates Enterprises is rooted in the community. They are headquartered in Lakewood and serve the entire Front Range. When you need warranty service, a follow up inspection, or help with a future project, they will be here.
          </p>
        </div>
      </section>

      {/* COMPARISON FRAMEWORK */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            How to Compare Roofing Companies in Colorado
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            When evaluating any roofing contractor, these are the factors that matter most. Here is how Gates Enterprises measures up.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { factor: "Manufacturer Certifications", gates: "All four major brands (GAF, Owens Corning, Malarkey, CertainTeed)", typical: "Zero to one" },
              { factor: "Google Reviews", gates: "306+ reviews, 4.9 star average", typical: "Under 100, varying ratings" },
              { factor: "Hail Data Technology", gates: "Proprietary HailScore platform with NOAA radar data", typical: "None" },
              { factor: "Warranty Access", gates: "Best warranties from all four manufacturers", typical: "Limited to one manufacturer's standard warranty" },
              { factor: "Insurance Restoration Experience", gates: "Thousands of claims guided, specialist level", typical: "Varies widely" },
              { factor: "Years in Colorado", gates: "8+ years, headquartered in Lakewood", typical: "Many are out of state storm chasers" },
              { factor: "Product Selection", gates: "Full lines from four manufacturers", typical: "One or two brands" },
            ].map((row, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 12, padding: "24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{row.factor}</h3>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", marginBottom: 4 }}>GATES ENTERPRISES</div>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.6, margin: 0 }}>{row.gates}</p>
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: TEXT_LIGHT, letterSpacing: "0.1em", marginBottom: 4 }}>TYPICAL CONTRACTOR</div>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.6, margin: 0 }}>{row.typical}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Hear It from Colorado Homeowners
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
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
      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More
          </h2>
          <div className="why-gates-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Best Roofer Denver", href: "/best-roofer-denver" },
              { label: "Best Roofer Colorado Springs", href: "/best-roofer-colorado-springs" },
              { label: "Best Roofer Parker", href: "/best-roofer-parker" },
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Storm Damage Restoration", href: "/services/storm-hail-damage" },
              { label: "Impact Resistant Shingles", href: "/impact-resistant-shingles" },
              { label: "About Gates Enterprises", href: "/about/gates-enterprises" },
              { label: "Our Reviews", href: "/reviews" },
              { label: "Contact Us", href: "/contact" },
              { label: "Check Your HailScore", href: "https://myhailscore.com" },
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
        title="See the Difference for Yourself"
        subtitle="Free inspections. Quadruple certified quality. 306+ five star reviews. Proprietary HailScore technology. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .why-gates-certs { grid-template-columns: 1fr !important; }
          .why-gates-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
