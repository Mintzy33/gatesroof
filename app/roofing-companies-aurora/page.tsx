import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { breadcrumbSchema, faqSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Companies in Aurora CO (2026) | Gates Enterprises | 308+ Reviews",
  description: "Looking for roofing companies in Aurora, CO? Gates Enterprises is 4x manufacturer certified with 308 five-star Google reviews. Free inspections. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/roofing-companies-aurora" },
  openGraph: {
    title: "Roofing Companies in Aurora CO (2026) | 4x Certified | 308+ Reviews",
    description: "Looking for roofing companies in Aurora, CO? Gates Enterprises is 4x manufacturer certified with 308 five-star Google reviews. Free inspections. (720) 766-3377",
    url: "https://www.gatesroof.com/roofing-companies-aurora",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Roofing Companies in Aurora Colorado - Gates Enterprises" }],
  },
};

const NAVY = "#06263f";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const FAQS = [
  {
    q: "What should I look for in a roofing company in Aurora?",
    a: "Start with manufacturer certifications — they verify quality, training, and installation standards. Check Google reviews for consistent recent feedback. Confirm proper insurance and licensing. Ask about experience with Colorado hail damage specifically. Gates Enterprises holds all four major manufacturer certifications and has 308 five-star Google reviews from Aurora-area homeowners."
  },
  {
    q: "How do I know if a roofing company is legitimate in Colorado?",
    a: "Verify that the contractor holds a valid Colorado roofing license and carries both general liability and workers compensation insurance. Ask for manufacturer certifications, which require ongoing quality standards. Check their Google Business Profile for consistent, recent reviews. Avoid companies that offer to waive your deductible or guarantee insurance approval — both violate Colorado law."
  },
  {
    q: "Does Gates Enterprises serve Aurora?",
    a: "Yes. Gates Enterprises LLC provides full roofing services throughout Aurora and Arapahoe County. Services include free hail damage inspections, full roof replacements, insurance claims documentation, gutters, siding, and windows. Call (720) 766-3377 to schedule your free inspection."
  },
  {
    q: "How much does a roof replacement cost in Aurora?",
    a: "Roof replacement costs in Aurora typically range from $8,000 to $25,000 depending on roof size, pitch, and materials. Most hail-damaged roofs in Colorado are covered by homeowners insurance, with the homeowner responsible only for the deductible. Gates Enterprises provides detailed documentation to support your insurance claim."
  },
  {
    q: "How long does a roof replacement take in Aurora?",
    a: "Most residential roof replacements in Aurora are completed in one to two days. Larger or more complex roofs may take three days. Gates Enterprises schedules jobs tightly and communicates clearly throughout the process, minimizing disruption to your household."
  },
];

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Roofing Companies Aurora", url: "https://www.gatesroof.com/roofing-companies-aurora" },
]);

export default function Page() {
  return (
    <>
      <Script id="roofing-companies-aurora-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <Script id="roofing-companies-aurora-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div style={{ background: WHITE, minHeight: "100vh" }}>
        <Header />

        <section style={{ background: NAVY, padding: "80px 24px 64px", textAlign: "center" as const }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#60A5FA", letterSpacing: "0.2em" }}>ROOFING COMPANIES IN AURORA</span>
            <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: WHITE, margin: "16px 0 20px", lineHeight: 1.15 }}>
              Roofing Companies in Aurora, CO
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(16px, 2vw, 18px)", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: 32 }}>
              Not all Aurora roofing companies are equal. Here is what separates a certified contractor from the rest and why Gates Enterprises is the top-rated choice in the second largest city in Colorado.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
              <a href="tel:7207663377" style={{ display: "inline-block", padding: "14px 28px", background: ACCENT, color: WHITE, borderRadius: 10, fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Call (720) 766-3377</a>
              <Link href="/contact" style={{ display: "inline-block", padding: "14px 28px", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.25)", color: WHITE, borderRadius: 10, fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Free Inspection</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: NAVY, marginBottom: 16, textAlign: "center" as const }}>
              How to Choose a Roofing Company in Aurora
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT_LIGHT, lineHeight: 1.8, marginBottom: 32, textAlign: "center" as const }}>
              Aurora, Colorado sees some of the most active hail in the country. The roofing company you choose needs specific experience with storm damage, insurance documentation, and Colorado building codes.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {[
                { title: "Manufacturer Certifications", body: "Certified contractors meet strict installation and quality standards set by manufacturers like GAF, Owens Corning, and CertainTeed. These certifications unlock extended warranties you cannot get elsewhere." },
                { title: "Google Reviews", body: "Check for consistent recent reviews from real homeowners in Aurora. Look for responses to negative reviews. How a company handles problems tells you as much as the five-star reviews." },
                { title: "Insurance and Licensing", body: "Any legitimate Colorado roofing company carries general liability and workers comp insurance. Ask for certificates of insurance before work begins." },
                { title: "Hail Experience", body: "Arapahoe County sees repeated hail seasons. Your contractor should know Colorado insurance processes, adjuster documentation requirements, and local building codes." },
                { title: "Free Inspection Policy", body: "Reputable companies offer free inspections with no pressure. If a company charges for an inspection or pushes you to sign immediately, walk away." },
                { title: "No Deductible Waiver Offers", body: "Offering to waive your deductible violates Colorado law (C.R.S. § 6-22-105). Any company making this offer is a red flag and could put your claim at risk." },
              ].map((item, i) => (
                <div key={i} style={{ background: WHITE, borderRadius: 14, border: "1.5px solid rgba(13,33,55,0.08)", padding: "20px 22px" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, color: NAVY, fontSize: 15, marginBottom: 8 }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", color: TEXT_LIGHT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: WHITE }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" as const }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: NAVY, marginBottom: 12 }}>
              Why Aurora Homeowners Choose Gates Enterprises
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, color: TEXT_LIGHT, lineHeight: 1.7, marginBottom: 32 }}>
              308 five-star Google reviews. 7,200+ completed roofs. The only 4x manufacturer certified roofer in Colorado.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32, textAlign: "left" as const }}>
              {["GAF Master Elite Contractor", "Owens Corning Preferred Contractor", "Malarkey Emerald Premium Contractor", "CertainTeed Shingle Master Pro", "308 five-star Google reviews", "7,200+ roofs completed", "10+ years on the Front Range", "Free inspections, no pressure"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: TEXT, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/best-roofer-aurora" style={{ display: "inline-block", padding: "13px 26px", background: NAVY, color: WHITE, borderRadius: 10, fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>See Why We Are the Best Roofer in Aurora</Link>
              <a href="tel:7207663377" style={{ display: "inline-block", padding: "13px 26px", background: "transparent", border: "1.5px solid #06263f", color: NAVY, borderRadius: 10, fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Call (720) 766-3377</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 32, textAlign: "center" as const }}>
              Frequently Asked Questions — Roofing Companies in Aurora
            </h2>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid rgba(13,33,55,0.1)", paddingBottom: 20, marginBottom: 20 }}>
                <summary style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 15, color: NAVY, cursor: "pointer", listStyle: "none" }}>{faq.q}</summary>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: TEXT_LIGHT, lineHeight: 1.8, margin: "12px 0 0" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ padding: "48px 24px", background: WHITE }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" as const }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: NAVY, marginBottom: 20 }}>Related Pages</h2>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
              <Link href="/best-roofer-aurora" style={{ padding: "8px 20px", borderRadius: 100, border: "1.5px solid rgba(37,99,235,0.25)", background: "rgba(37,99,235,0.04)", color: ACCENT, fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Best Roofer in Aurora</Link>
              <Link href="/services/storm-hail-damage" style={{ padding: "8px 20px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.12)", color: NAVY, fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Hail Damage Inspection</Link>
              <Link href="/services/insurance-claims" style={{ padding: "8px 20px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.12)", color: NAVY, fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Insurance Claims Help</Link>
              <Link href="/services/roof-replacement" style={{ padding: "8px 20px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.12)", color: NAVY, fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Roof Replacement</Link>
              <Link href="/contact" style={{ padding: "8px 20px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.12)", color: NAVY, fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Free Inspection</Link>
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
    </>
  );
}
