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

const NumIcon = ({ num }: { num: number }) => (
  <div style={{ width: 36, height: 36, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: WHITE }}>{num}</span>
  </div>
);

const FAQS = [
  {
    q: "Does homeowners insurance cover hail damage to my roof?",
    a: "Most standard homeowners insurance policies in Colorado cover hail damage to your roof, siding, and gutters under dwelling coverage. You are typically responsible for your deductible, and the insurance company may cover the remaining cost. Coverage details vary by carrier and policy, so reviewing your specific policy is important. Gates Enterprises provides free inspections and thorough documentation to help support your claim."
  },
  {
    q: "How does the insurance claim process work for roof damage?",
    a: "The process typically begins with a professional roof inspection to identify and document storm damage. You file a claim with your insurance company. An adjuster assesses the damage. Your roofing contractor meets with the adjuster to ensure all damage is documented. Once approved, the insurance company issues payment and restoration work begins. Gates Enterprises guides you through each step."
  },
  {
    q: "What do I pay out of pocket for insurance restoration?",
    a: "For an approved claim, homeowners are typically responsible for their deductible. The insurance company may cover the remaining restoration cost. The exact amount depends on your policy, deductible, and scope of damage. Gates Enterprises provides detailed documentation to help ensure your claim reflects the full extent of the damage."
  },
  {
    q: "How long does the insurance restoration process take?",
    a: "From initial inspection to project completion, the process typically takes several weeks to a few months depending on complexity and insurance company response times. The actual roof replacement is usually completed in one to three days. Gates Enterprises coordinates the timeline and keeps you informed throughout."
  },
  {
    q: "What if my insurance company denies my claim?",
    a: "A denial does not necessarily mean the damage is not covered. Denials can result from incomplete documentation or adjuster oversight. Gates Enterprises provides thorough documentation and may recommend a re-inspection or supplement. You also have the right to request a second opinion or file an appeal."
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

export default function InsuranceRestorationContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Insurance Restoration</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Colorado's Premier Insurance Restoration Roofer
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Certified. Data Driven Documentation. 306+ Five Star Reviews.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Colorado ranks number one in the nation for insured hail losses. Every year, tens of thousands of homeowners along the Front Range file insurance claims for storm damage to their roofs, siding, and gutters. The insurance restoration process can feel overwhelming, but it does not have to be. Gates Enterprises LLC has guided thousands of Colorado homeowners through the process, providing thorough documentation, clear communication, and quality restoration work backed by four manufacturer certifications.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Storm Damage Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS INSURANCE RESTORATION */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What is Insurance Restoration?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Insurance restoration is the process of repairing or replacing storm damaged components of your home using your homeowners insurance coverage. In Colorado, this most commonly involves damage from hailstorms, though wind, fallen trees, and other covered events also qualify.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            The goal of insurance restoration is to return your home to its pre-storm condition. This may include replacing your roof, repairing or replacing siding, installing new gutters, and addressing any other covered damage. The process involves coordination between you, your insurance company, and your roofing contractor.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            Choosing the right contractor for insurance restoration is critical. You need a company that understands how to document damage thoroughly, communicate effectively with insurance adjusters, and perform quality restoration work. Gates Enterprises has been doing exactly this for Colorado homeowners since 2017.
          </p>
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            The Insurance Restoration Process with Gates Enterprises
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            We have streamlined the insurance restoration process to make it as smooth as possible for Colorado homeowners. Here is how it works.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                num: 1,
                title: "Free Storm Damage Inspection",
                desc: "Our inspector performs a comprehensive assessment of your roof, siding, gutters, and other exterior components. We document every instance of damage with detailed photos and measurements. This inspection is completely free and carries no obligation."
              },
              {
                num: 2,
                title: "HailScore Data Analysis",
                desc: "Before we even climb your roof, we use our proprietary HailScore technology to pull NOAA radar data for your specific address. This shows the exact hail events that have impacted your property, including hailstone sizes and dates. This objective data strengthens the documentation we provide."
              },
              {
                num: 3,
                title: "Filing Your Claim",
                desc: "Once we have documented the damage, we help you understand your options. If you choose to file a claim, we provide guidance on what to tell your insurance company and what to expect from the process."
              },
              {
                num: 4,
                title: "Insurance Adjuster Meeting",
                desc: "When your insurance company sends an adjuster, a Gates Enterprises representative meets them at your property. We walk through every item of damage we documented, ensuring nothing is overlooked. Our thorough documentation and professional approach help ensure the adjuster has a complete picture of the damage."
              },
              {
                num: 5,
                title: "Supplementing When Necessary",
                desc: "Sometimes the initial insurance estimate does not capture the full scope of damage. When additional damage is discovered during the project or when line items are missed, we prepare and submit supplements to your insurance company. This process helps ensure your property is fully restored, not partially patched."
              },
              {
                num: 6,
                title: "Quality Restoration",
                desc: "Once the claim is approved, our certified crews perform the restoration work. As a quadruple manufacturer certified contractor, we install products from GAF, Owens Corning, Malarkey, and CertainTeed at the highest standards. Your restored roof comes with the strongest warranties available in the industry."
              },
              {
                num: 7,
                title: "Final Walkthrough and Documentation",
                desc: "After the work is complete, we conduct a final walkthrough with you to ensure everything meets your expectations. We provide completion photos and all warranty documentation for your records."
              },
            ].map((step) => (
              <div key={step.num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <NumIcon num={step.num} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GATES FOR INSURANCE RESTORATION */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why Gates Enterprises for Insurance Restoration
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Not all roofing contractors approach insurance restoration the same way. Here is what makes Gates Enterprises the right choice.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              "Thorough documentation with detailed photos, measurements, and written descriptions of every damaged component",
              "HailScore data analysis providing objective, NOAA radar backed evidence of storm impacts at your address",
              "Professional adjuster meetings where a Gates representative walks through every line item",
              "Supplementing expertise to capture damage that initial estimates may miss",
              "Quadruple manufacturer certification ensuring the highest quality installation regardless of which brand you choose",
              "306+ Google reviews and a 4.8 star rating reflecting years of trusted insurance restoration work",
              "8+ years of experience navigating Colorado's insurance restoration landscape",
              "Clear communication throughout every stage of the process",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION MATTERS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why Documentation Makes All the Difference
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            The outcome of your insurance claim often depends on the quality of documentation provided. A quick walk around your property with a few phone photos is not enough. Gates Enterprises takes a comprehensive approach.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            We document every damaged shingle, every dented gutter section, every cracked piece of siding. We include measurements, overhead diagrams, and close up photos that clearly show the nature and extent of the damage. Our HailScore data adds an additional layer of objective evidence, showing that significant hail events have indeed impacted your property.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
            This level of documentation helps ensure your insurance company can process your claim accurately and completely. When adjusters see professional, thorough documentation, the process typically moves more smoothly for everyone involved.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Colorado Homeowners Say About Our Insurance Restoration Work
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.8 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306+ reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Insurance Restoration FAQ
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
          <div className="insurance-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Storm & Hail Damage Services", href: "/services/storm-hail-damage" },
              { label: "Insurance Claims Services", href: "/services/insurance-claims" },
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
              { label: "Best Roofer Denver", href: "/best-roofer-denver" },
              { label: "Impact Resistant Shingles", href: "/impact-resistant-shingles" },
              { label: "Roof Replacement", href: "/services/roof-replacement" },
              { label: "Check Your HailScore", href: "https://myhailscore.com" },
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
        title="Storm Damage? Let Colorado's Most Certified Roofer Help."
        subtitle="Free storm damage inspections. Thorough documentation. Quadruple certified quality. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .insurance-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
