"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";
import AnswerCapsule from "./AnswerCapsule";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

interface ServiceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServicePageProps {
  breadcrumb: string;
  h1: string;
  subheadline?: string;
  heroCopy: string;
  images?: ServiceImage[];
  sections: { title: string; content: string[] }[];
  process: { step: string; title: string; desc: string }[];
  whyGates: { bold: string; rest: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  serviceAreasSlug?: string;
  serviceAreasLabel?: string;
  answerCapsule?: string;
}

export default function ServicePageLayout({
  breadcrumb, h1, subheadline, heroCopy, images, sections, process, whyGates, faqs, ctaTitle, ctaSubtitle, serviceAreasSlug, serviceAreasLabel, answerCapsule
}: ServicePageProps) {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home → Services → {breadcrumb}
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>{h1}</h1>
          {subheadline && <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>{subheadline}</p>}
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>{heroCopy}</p>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Request a Free Inspection & Estimate →</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>

      {/* Service Images */}
      {images && images.length > 0 && (
        <section style={{ padding: "64px 24px 0", background: WHITE }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: images.length >= 3 ? "1fr 1fr 1fr" : images.length === 2 ? "1fr 1fr" : "1fr", gap: 20 }}>
            {images.map((img, i) => (
              <div key={i} style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Answer Capsule */}
      {answerCapsule && <AnswerCapsule text={answerCapsule} />}

      {/* Content Sections */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 20, lineHeight: 1.2 }}>{sec.title}</h2>
              {sec.content.map((p, j) => (
                <p key={j} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY, marginBottom: 40, textAlign: "center" as const }}>Our Process</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
            {process.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ minWidth: 48, height: 48, borderRadius: 14, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: ACCENT, border: "1px solid rgba(59,125,216,0.1)" }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gates */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY, marginBottom: 32, textAlign: "center" as const }}>Why Gates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {whyGates.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: LIGHT_BG, borderRadius: 16, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.04)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.6 }}><strong style={{ color: NAVY }}>{item.bold}</strong> {item.rest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY, marginBottom: 40, textAlign: "center" as const }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "28px 32px", marginBottom: 16, border: "1px solid rgba(13,33,55,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: NAVY, marginBottom: 10 }}>{faq.q}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Blog Articles */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>FROM THE BLOG</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>{breadcrumb} Resources and Guides</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Expert roofing articles from the Gates Enterprises blog.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { t: "Class 4 Impact Resistant Shingles: Worth It?", h: "/blog/class-4-impact-resistant-shingles-colorado" },
              { t: "Colorado Hail Season 2026: Homeowner's Guide", h: "/blog/colorado-hail-season-2026-homeowners-guide" },
              { t: "How to Choose a Roofing Contractor", h: "/blog/how-to-choose-roofing-contractor-colorado" },
              { t: "Signs You Need a New Roof", h: "/blog/signs-you-need-new-roof" },
              { t: "Emergency Roof Repair After a Storm", h: "/blog/emergency-roof-repair-after-storm" },
              { t: "Roof Maintenance Checklist for Colorado", h: "/blog/roof-maintenance-checklist-colorado" },
              { t: "Warning Signs Your Roof Needs Attention", h: "/blog/warning-signs-roof-needs-attention" },
              { t: "Colorado Roof Insurance Claims Guide", h: "/blog/colorado-roof-insurance-claims-guide" },
            ].map((p) => (
              <Link key={p.h} href={p.h} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {p.t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {serviceAreasSlug && (
        <section style={{ padding: "64px 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>{serviceAreasLabel || breadcrumb} Service Areas</h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>We provide {(serviceAreasLabel || breadcrumb).toLowerCase()} across the Colorado Front Range.</p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
              {[
                { n: "Denver", s: "denver" }, { n: "Aurora", s: "aurora" }, { n: "Lakewood", s: "lakewood" },
                { n: "Arvada", s: "arvada" }, { n: "Westminster", s: "westminster" }, { n: "Thornton", s: "thornton" },
                { n: "Broomfield", s: "broomfield" }, { n: "Northglenn", s: "northglenn" }, { n: "Federal Heights", s: "federal-heights" },
                { n: "Commerce City", s: "commerce-city" }, { n: "Brighton", s: "brighton" }, { n: "Henderson", s: "henderson" },
                { n: "Littleton", s: "littleton" }, { n: "Englewood", s: "englewood" }, { n: "Sheridan", s: "sheridan" },
                { n: "Centennial", s: "centennial" }, { n: "Highlands Ranch", s: "highlands-ranch" }, { n: "Parker", s: "parker" },
                { n: "Castle Rock", s: "castle-rock" }, { n: "Castle Pines", s: "castle-pines" }, { n: "Lone Tree", s: "lone-tree" },
                { n: "Greenwood Village", s: "greenwood-village" }, { n: "Cherry Hills Village", s: "cherry-hills-village" },
                { n: "Columbine", s: "columbine" }, { n: "Ken Caryl", s: "ken-caryl" }, { n: "Morrison", s: "morrison" },
                { n: "Golden", s: "golden" }, { n: "Wheat Ridge", s: "wheat-ridge" }, { n: "Edgewater", s: "edgewater" },
                { n: "Mountain View", s: "mountain-view" }, { n: "Superior", s: "superior" }, { n: "Louisville", s: "louisville" },
                { n: "Lafayette", s: "lafayette" }, { n: "Erie", s: "erie" }, { n: "Longmont", s: "longmont" },
                { n: "Loveland", s: "loveland" }, { n: "Fort Collins", s: "fort-collins" }, { n: "Windsor", s: "windsor" },
                { n: "Greeley", s: "greeley" }, { n: "Firestone", s: "firestone" }, { n: "Frederick", s: "frederick" },
                { n: "Conifer", s: "conifer" }, { n: "Evergreen", s: "evergreen" }, { n: "Bailey", s: "bailey" },
                { n: "Monument", s: "monument" }, { n: "Palmer Lake", s: "palmer-lake" }, { n: "Fountain", s: "fountain" },
                { n: "Colorado Springs", s: "colorado-springs" }, { n: "Pueblo", s: "pueblo" }, { n: "Boulder", s: "boulder" },
              ].map((c) => (
                <Link key={c.s} href={`/services/${serviceAreasSlug}/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title={ctaTitle} subtitle={ctaSubtitle} />
      <Footer />
    </div>
  );
}
