"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

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

const ShieldIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MANUFACTURERS = [
  {
    name: "GAF Master Elite",
    color: "#1E3A5F",
    warranty: "Golden Pledge Warranty",
    details: [
      "50 year non prorated coverage on materials",
      "25 year workmanship coverage included",
      "Covers both manufacturing defects and installation errors",
      "Transferable to subsequent homeowner",
      "Only available through GAF Master Elite certified contractors",
    ],
    description: "The Golden Pledge Warranty is the strongest warranty GAF offers. It provides 50 years of non prorated coverage on materials and 25 years of workmanship coverage, all at no additional cost when installed by a Master Elite contractor like Gates Enterprises. Less than 2% of roofing contractors in North America qualify for this certification.",
  },
  {
    name: "Owens Corning Preferred",
    color: "#D4447C",
    warranty: "Preferred Protection Warranty",
    details: [
      "Extended coverage on roofing materials",
      "Workmanship coverage included at no extra cost",
      "Covers manufacturing defects and labor",
      "Non prorated material coverage",
      "Exclusive to Owens Corning Preferred contractors",
    ],
    description: "The Preferred Protection Warranty from Owens Corning provides comprehensive coverage on both materials and workmanship. This enhanced warranty is only available when your roof is installed by a Preferred contractor. It goes well beyond the standard limited warranty that any roofer can offer, giving you additional peace of mind at no extra cost.",
  },
  {
    name: "Malarkey Emerald Premium",
    color: "#2D7D46",
    warranty: "Enhanced Warranty Coverage",
    details: [
      "Enhanced material warranty coverage",
      "Workmanship protection included",
      "Covers Malarkey's full product line",
      "Extended coverage period beyond standard warranty",
      "Only through Emerald Premium certified installers",
    ],
    description: "Malarkey Roofing Products offers enhanced warranty coverage exclusively through their Emerald Premium certified contractors. This certification means Gates Enterprises has met Malarkey's strict standards for installation quality and business practices. The result is stronger, longer warranty protection for every Malarkey roof we install.",
  },
  {
    name: "CertainTeed Shingle Master",
    color: "#1B4D8E",
    warranty: "SureStart Plus Warranty",
    details: [
      "Extended SureStart Plus coverage period",
      "Includes workmanship coverage",
      "Non prorated material protection",
      "Covers both materials and installation",
      "Exclusive to Shingle Master certified contractors",
    ],
    description: "CertainTeed's SureStart Plus Warranty provides an extended period of coverage that goes beyond their standard warranty. As a Shingle Master certified contractor, Gates Enterprises unlocks this enhanced warranty for every CertainTeed roof we install. The SureStart Plus warranty covers both materials and workmanship, providing comprehensive protection.",
  },
];

export default function WarrantyContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Warranty</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Industry-Leading Warranty Protection
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Certified. Four Enhanced Warranties. One Contractor.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Gates Enterprises is one of the only roofing contractors in Colorado certified by all four major shingle manufacturers. This quadruple certification means every roof we install comes with an enhanced manufacturer warranty that most roofers simply cannot offer. Better protection for your home, at no additional cost to you.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section style={{ padding: "32px 24px", background: LIGHT_BG, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306+ reviews)</span>
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(13,33,55,0.12)" }} />
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Colorado's Only Quadruple Certified Roofer</span>
        </div>
      </section>

      {/* MANUFACTURER WARRANTIES */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Manufacturer Warranty Coverage
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Each of the four major shingle manufacturers offers an enhanced warranty tier that is only available through their top certified contractors. As a quadruple certified installer, Gates Enterprises unlocks the best warranty from whichever brand you choose.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {MANUFACTURERS.map((mfr, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 16, padding: 32, borderLeft: `4px solid ${mfr.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <ShieldIcon color={mfr.color} />
                  <div>
                    <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: 0 }}>{mfr.name}</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: mfr.color, margin: "4px 0 0" }}>{mfr.warranty}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
                  {mfr.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {mfr.details.map((detail, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckIcon />
                      <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.7 }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CERTIFICATION MATTERS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why Certification Matters for Your Warranty
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Most roofing contractors can only offer a standard manufacturer limited warranty. These basic warranties typically cover manufacturing defects only, do not include workmanship, and are often prorated, meaning coverage decreases over time.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Certified contractors like Gates Enterprises unlock an entirely different tier of warranty protection. These enhanced warranties cover both materials and workmanship, are often non prorated, and provide significantly longer coverage periods. The best part: this upgraded protection comes at no additional cost to the homeowner.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Manufacturers only grant these certifications to contractors who meet strict standards for installation quality, business practices, customer satisfaction, and ongoing training. Less than 1% of roofing contractors in the country hold all four major manufacturer certifications.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#DC2626", marginBottom: 12 }}>Standard Warranty</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT, marginBottom: 4 }}>What most roofers offer</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                {[
                  "Manufacturing defects only",
                  "No workmanship coverage",
                  "Prorated coverage (decreases over time)",
                  "Available from any contractor",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3, flexShrink: 0 }}>
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: WHITE, borderRadius: 16, padding: 24, border: `2px solid ${ACCENT}` }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Enhanced Warranty</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT, marginBottom: 4 }}>What Gates Enterprises offers</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                {[
                  "Materials and workmanship covered",
                  "Non prorated coverage periods",
                  "Up to 50 years of protection",
                  "Exclusive to certified contractors",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <CheckIcon />
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKMANSHIP GUARANTEE */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Our Workmanship Guarantee
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Beyond manufacturer warranties, Gates Enterprises stands behind the quality of every installation we perform. Our workmanship guarantee means that if any issue arises due to installation, we will return to make it right. No questions asked.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            We have built our reputation on doing the job right the first time. With thousands of completed roofing projects across the Front Range, a 4.9 star rating from 306+ reviews, and four manufacturer certifications, our track record speaks for itself.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            When you choose Gates Enterprises, you get the confidence of knowing that your roof is protected by both the manufacturer and the contractor who installed it. That is the kind of double coverage most homeowners never get.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Every installation backed by our workmanship guarantee",
              "Certified crews trained to manufacturer specifications",
              "Thousands of completed projects across Colorado's Front Range",
              "4.9 star rating from 306+ verified Google reviews",
              "Responsive service team for any post installation questions",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More
          </h2>
          <div className="warranty-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Financing and Payment Options", href: "/financing" },
              { label: "Impact Resistant Shingles", href: "/impact-resistant-shingles" },
              { label: "Roof Replacement", href: "/services/roof-replacement" },
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
        title="Get the Strongest Warranty in Colorado"
        subtitle="Free inspections. Quadruple certified quality. Enhanced manufacturer warranties at no extra cost. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .warranty-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
