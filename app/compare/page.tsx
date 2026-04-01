import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Compare Roofers | Gates vs Others ★ 4x Certified",
  description: "See how Colorado's only 4x certified roofer compares. 7,200+ roofs, 306 Reviews, 4.9★. Transparent comparisons to help you choose. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/compare" },
  openGraph: {
    title: "Compare Roofers | Gates vs Others ★ 4x Certified",
    description: "See how Colorado's only 4x certified roofer compares. 7,200+ roofs, 306 Reviews, 4.9★. Transparent comparisons to help you choose. (720) 766-3377",
    url: "https://www.gatesroof.com/compare",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Compare Gates Enterprises - Colorado Roofing" }],
  },
};

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Compare", url: "https://www.gatesroof.com/compare" },
]);

const COMPARISONS = [
  {
    title: "Gates Enterprises vs Storm Chasers",
    description: "Learn the difference between a certified local roofing contractor and out-of-state storm chasers who follow storms, knock on doors, and disappear after the job.",
    href: "/compare/storm-chasers",
  },
];

export default function ComparePage() {
  return (
    <div style={{ background: WHITE }}>
      <Script id="compare-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Compare</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Compare Gates Enterprises
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Transparent Comparisons. Informed Decisions.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 0, maxWidth: 700 }}>
            Choosing a roofing contractor is a big decision. We believe homeowners deserve clear, honest information to make the right choice. These comparisons break down what separates Gates Enterprises from other options so you can decide with confidence.
          </p>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Our Comparisons
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {COMPARISONS.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ background: WHITE, borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(13,33,55,0.08)", transition: "box-shadow 0.2s, border-color 0.2s" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{item.title}</h3>
                      <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{item.description}</p>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE DO THIS */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Why We Publish These Comparisons
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            The roofing industry has a trust problem. Homeowners often feel pressured into decisions without enough information. We publish these comparisons because we believe transparency builds trust, and trust builds lasting relationships.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            As Colorado's only quadruple certified roofing contractor with 306+ Google reviews and a 4.9 star rating, we are confident in where we stand. We would rather you compare the facts and choose us because you are convinced, not because you were pressured.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT }}>
            Have a question about how Gates Enterprises compares to a specific roofing company or approach? <Link href="/contact" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>Reach out to us</Link> and we will give you an honest answer.
          </p>
        </div>
      </section>

      <CTA
        title="Ready to Work with Colorado's Best?"
        subtitle="Free inspections. Quadruple certified quality. 306+ five star reviews. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />
    </div>
  );
}
