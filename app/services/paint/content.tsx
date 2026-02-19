"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollReveal, StaggerCards, CounterGSAP } from "../../components/GSAPAnimations";
import { Palette, Hammer, Paintbrush, CheckCircle, ShieldCheck, Sparkles, Home, FileText } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const PROCESS_STEPS = [
  { Icon: Palette, step: "01", title: "Free Color Consultation", desc: "We visit your home, discuss your vision, and provide a detailed estimate with no obligation." },
  { Icon: Hammer, step: "02", title: "Surface Preparation", desc: "We wash, scrape, sand, patch, caulk, and prime every surface. This is where lasting results begin." },
  { Icon: Paintbrush, step: "03", title: "Professional Application", desc: "Premium paints applied with even coverage, sharp edges, and a durable finish built to last." },
  { Icon: CheckCircle, step: "04", title: "Walkthrough and Touch Ups", desc: "We inspect every surface and address any details before the job is complete." },
];

const WHY_GATES = [
  { Icon: ShieldCheck, bold: "Thorough surface preparation.", rest: "We never skip prep. Proper prep is the difference between a paint job that lasts three years and one that lasts eight." },
  { Icon: Sparkles, bold: "Premium materials only.", rest: "We use low VOC paints from trusted brands formulated for Colorado\u2019s climate." },
  { Icon: Home, bold: "Full exterior services.", rest: "Painting, siding, roofing, gutters, and windows all under one roof." },
  { Icon: FileText, bold: "Insurance restoration support.", rest: "If your exterior paint was damaged by hail, we can include it in your storm damage restoration." },
];

const FAQS = [
  { q: "How long does a typical paint job take?", a: "Most interior rooms take 1 to 2 days. Full exterior projects take 3 to 5 days depending on size and condition." },
  { q: "Do you handle surface repairs before painting?", a: "Yes. We repair cracks, holes, peeling, and other damage during prep. Proper preparation is essential." },
  { q: "What kind of paint do you use?", a: "Premium, low VOC paints from trusted brands formulated for Colorado\u2019s climate." },
  { q: "Can you paint my home\u2019s exterior after a hail storm?", a: "Absolutely. We can repair and repaint, and assist with insurance restoration if covered." },
];

export default function PaintContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section className="pt-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Painting
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Interior and Exterior Painting for Colorado Homes
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Refresh your home inside and out with professional painting from a team you can trust.
          </p>
          <div className="pt-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection & Estimate &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" as const }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>PAINTING EXPERTS</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 24px", lineHeight: 1.15 }}>
              More Than Just a Fresh Coat
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 700, margin: "0 auto" }}>
              A quality paint job does more than change a color. It protects your surfaces, increases your home&apos;s value, and transforms the way a space feels. Gates Enterprises provides professional interior and exterior painting across Colorado&apos;s Front Range.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(40px, 6vw, 56px) 24px", background: NAVY }}>
        <div className="pt-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={7204} suffix="+" duration={2.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Projects Completed</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={10} suffix="+" duration={2} delay={0.2} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Years in Colorado</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>4.8</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Google Rating</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 44, fontWeight: 800, color: GOLD }}>
              <CounterGSAP end={293} suffix="+" duration={2} delay={0.4} />
            </div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Five Star Reviews</div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Our Process</h2>
        </div>

        <StaggerCards
          className="pt-process-desktop"
          style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
          stagger={0.1}
          distance={40}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" as const, position: "relative", padding: "0 4px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", position: "relative", zIndex: 2 }}>
                <s.Icon size={26} color={ACCENT} strokeWidth={1.8} />
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div style={{ position: "absolute", top: 30, left: "calc(50% + 34px)", width: "calc(100% - 52px)", height: 2, background: "rgba(37,99,235,0.15)", zIndex: 1 }} />
              )}
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{s.step}</div>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: DEEP, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerCards>

        <div className="pt-process-mobile" style={{ maxWidth: 600, margin: "0 auto" }}>
          <StaggerCards style={{ position: "relative", paddingLeft: 48 }} stagger={0.1} distance={40}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, ${ACCENT}, #60A5FA)`, borderRadius: 2 }} />
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} style={{ position: "relative", marginBottom: i < PROCESS_STEPS.length - 1 ? 36 : 0, paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: -40, top: 2, width: 42, height: 42, borderRadius: "50%", background: WHITE, border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                  <s.Icon size={20} color={ACCENT} strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{s.step}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: DEEP, margin: "0 0 6px", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── WHY GATES ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>THE GATES DIFFERENCE</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Why Gates Enterprises</h2>
          </div>
          <StaggerCards
            className="pt-why-grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            stagger={0.1}
          >
            {WHY_GATES.map((item, i) => (
              <div key={i} className="pt-why-card" style={{ background: LIGHT_BG, borderRadius: 20, padding: "32px 24px", border: "2px solid transparent", transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease", display: "flex", flexDirection: "column" as const, gap: 12, cursor: "default" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={24} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: DEEP, marginBottom: 0, lineHeight: 1.3 }}>{item.bold}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.rest}</p>
              </div>
            ))}
          </StaggerCards>
        </section>
      </ScrollReveal>

      {/* ─── MID CTA ─── */}
      <section className="pt-mid-cta" style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: ACCENT, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: WHITE, margin: "0 0 12px", lineHeight: 1.1 }}>
            Give Your Home a Fresh Look
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.9)", margin: "0 0 32px", lineHeight: 1.7 }}>
            Call Gates Enterprises at (720) 766-3377 for a free painting consultation.
          </p>
          <div className="pt-mid-cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="tel:7207663377" style={{ background: WHITE, color: ACCENT, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700 }}>
              (720) 766-3377
            </a>
            <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: WHITE, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Request a Free Inspection & Estimate &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <ScrollReveal>
        <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>COMMON QUESTIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0 }}>Frequently Asked Questions</h2>
            </div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, marginBottom: 12, border: "1px solid rgba(13,33,55,0.05)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: DEEP, margin: 0, lineHeight: 1.4 }}>{faq.q}</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: 16, transition: "transform 0.3s ease", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, padding: "0 28px 24px", margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── BOTTOM CTA ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: NAVY, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
            Give Your Home a Fresh Look
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 36px", lineHeight: 1.75 }}>
            Contact Gates Enterprises today for a free painting consultation and estimate. Call (720) 766-3377.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 40px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700 }}>
            Request a Free Inspection & Estimate &rarr;
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .pt-process-mobile { display: none; }
        .pt-why-card:hover {
          border-color: #2563EB !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 768px) {
          .pt-process-desktop { display: none !important; }
          .pt-process-mobile { display: block !important; }
          .pt-hero { min-height: 65vh !important; }
          .pt-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .pt-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .pt-mid-cta-btns { flex-direction: column !important; }
          .pt-mid-cta-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .pt-stats { gap: 20px !important; }
          .pt-hero-btns { flex-direction: column !important; }
          .pt-hero-btns a { text-align: center !important; }
        }
      `}</style>
    </div>
  );
}
