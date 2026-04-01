"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollReveal, StaggerCards } from "../../components/GSAPAnimations";
import { Camera, ShieldCheck, Film, Zap, CalendarCheck, Plane, Users, CloudRain, Home, HeartPulse, FileText, Mountain } from "lucide-react";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const BENEFITS = [
  { Icon: Camera, title: "Complete Coverage", desc: "Every angle, every detail. Drone cameras capture areas that are invisible from a ladder." },
  { Icon: ShieldCheck, title: "Safer for Everyone", desc: "No one needs to climb on your roof for the initial assessment. Safer for our crew and your property." },
  { Icon: Film, title: "HD Photo & Video Documentation", desc: "You get high-resolution aerial photos and video of your entire roof. Perfect for insurance claims." },
  { Icon: Zap, title: "Faster & More Accurate", desc: "A full drone inspection takes 15\u201320 minutes vs hours for traditional methods. More accurate damage assessment." },
];

const STEPS = [
  { n: "1", Icon: CalendarCheck, title: "Schedule", desc: "Call or fill out the form. We\u2019ll set up a time that works for you." },
  { n: "2", Icon: Plane, title: "We Fly", desc: "Our FAA-certified pilot captures HD imagery of your entire roof from multiple angles." },
  { n: "3", Icon: Users, title: "Review Together", desc: "We walk you through the findings with clear photos and honest recommendations." },
];

const INSURANCE_POINTS = [
  "Drone footage provides undeniable visual evidence for your insurance company",
  "Adjusters can see exactly what we see \u2014 no disputes about damage extent",
  "Timestamped, geotagged imagery that holds up in the claims process",
  "We\u2019ve handled 7,200+ roofs and know exactly what adjusters need to see",
];

const IDEAL_FOR = [
  { Icon: CloudRain, text: "Post-storm damage assessment" },
  { Icon: Home, text: "Pre-purchase home inspections" },
  { Icon: HeartPulse, text: "Annual roof health checkups" },
  { Icon: FileText, text: "Insurance documentation" },
  { Icon: Mountain, text: "Hard-to-access or steep roofs" },
];

const FAQS = [
  { q: "How long does a drone roof inspection take?", a: "A full drone inspection typically takes 15 to 20 minutes to capture HD imagery of your entire roof from multiple angles. Traditional ladder inspections can take hours by comparison." },
  { q: "Is the drone inspection really free?", a: "Yes. Our drone inspections are completely free with no obligation. We believe in honest assessments \u2014 if your roof doesn\u2019t need work, we\u2019ll tell you." },
  { q: "Are your drone pilots FAA certified?", a: "Yes. All of our drone pilots hold FAA Part 107 Remote Pilot Certificates and follow all federal aviation regulations during every inspection." },
  { q: "Can drone footage be used for insurance claims?", a: "Absolutely. Our drone footage provides timestamped, geotagged HD imagery that insurance adjusters can use to verify damage. We\u2019ve handled over 7,200 roofs and know exactly what adjusters need to see." },
  { q: "Do I get copies of the photos and video?", a: "Yes. You receive all high-resolution aerial photos and video from your inspection. This documentation is yours to keep and use for insurance claims or your own records." },
];

export default function DroneContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden", background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(6,38,63,0.85) 0%, rgba(13,33,55,0.95) 60%, rgba(13,33,55,0.98) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "160px 24px 80px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Home &rarr; Services &rarr; Drone Inspections
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Drone Roof Inspections
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            See your roof like never before. Our FAA-certified drone inspections deliver detailed aerial imagery of every inch of your roof &mdash; no ladders, no risk, no guesswork.
          </p>
          <div className="drone-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Drone Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>WHY DRONE INSPECTIONS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 16px", lineHeight: 1.15 }}>
                Technology That Protects Your Home
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: TEXT, maxWidth: 600, margin: "0 auto" }}>
                Most Colorado roofers still rely on ladders alone. We use cutting-edge drone technology to give you the most complete picture of your roof&apos;s condition.
              </p>
            </div>
          </ScrollReveal>
          <StaggerCards className="drone-benefits-grid" stagger={0.1} distance={40}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ background: LIGHT_BG, borderRadius: 18, padding: "32px 24px", border: "1px solid rgba(13,33,55,0.06)", borderTop: `3px solid ${ACCENT}`, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `rgba(37,99,235,0.08)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <b.Icon size={26} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>HOW IT WORKS</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 16px", lineHeight: 1.15 }}>
                Three Simple Steps
              </h2>
            </div>
          </ScrollReveal>
          <StaggerCards className="drone-steps-grid" stagger={0.15} distance={40}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: ACCENT, color: WHITE, fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(37,99,235,0.25)" }}>{step.n}</div>
                {i < 2 && <div className="drone-step-connector" style={{ position: "absolute", top: 32, left: "calc(50% + 44px)", width: "calc(100% - 88px)", height: 2, background: `linear-gradient(90deg, ${ACCENT}, rgba(37,99,235,0.2))` }} />}
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}>{step.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* ─── INSURANCE CLAIMS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: NAVY }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>INSURANCE ADVANTAGE</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.15 }}>
                Why It Matters for Insurance Claims
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto" }}>
                Drone documentation gives you and your insurance company indisputable evidence. No more guesswork, no more disputes.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {INSURANCE_POINTS.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 24px", background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "rgba(74,222,128,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: 0 }}>{point}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/services/insurance-claims" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
                Learn more about our insurance claim process &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── IDEAL FOR ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>IDEAL FOR</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: "0 0 16px", lineHeight: 1.15 }}>
                When a Drone Inspection Makes Sense
              </h2>
            </div>
          </ScrollReveal>
          <StaggerCards className="drone-ideal-grid" stagger={0.1} distance={30}>
            {IDEAL_FOR.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", background: LIGHT_BG, borderRadius: 14, border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <item.Icon size={22} color={ACCENT} strokeWidth={1.8} />
                </div>
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY }}>{item.text}</span>
              </div>
            ))}
          </StaggerCards>
          <ScrollReveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, lineHeight: 1.7 }}>
                Been through a recent storm?{" "}
                <a href="https://myhailscore.com" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
                  Check if storms have hit your area at myhailscore.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CROSS-LINKS ─── */}
      <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>RELATED SERVICES</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: DEEP, margin: 0, lineHeight: 1.15 }}>
                Explore More From Gates
              </h2>
            </div>
          </ScrollReveal>
          <StaggerCards className="drone-related-grid" stagger={0.12} distance={30}>
            <Link href="/services/storm-hail-damage" style={{ textDecoration: "none" }}>
              <div style={{ background: WHITE, borderRadius: 16, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.06)", borderTop: `3px solid ${ACCENT}`, transition: "box-shadow 0.2s", cursor: "pointer" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Storm & Hail Damage</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>Fast response and expert repair from Colorado&apos;s most certified storm damage team.</p>
              </div>
            </Link>
            <Link href="/services/insurance-claims" style={{ textDecoration: "none" }}>
              <div style={{ background: WHITE, borderRadius: 16, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.06)", borderTop: `3px solid ${ACCENT}`, transition: "box-shadow 0.2s", cursor: "pointer" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Insurance Restoration</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>We assist you through the insurance process so you don&apos;t have to. 7,200+ claims navigated.</p>
              </div>
            </Link>
          </StaggerCards>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>FAQ</span>
              <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: DEEP, margin: 0, lineHeight: 1.15 }}>
                Common Questions
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  style={{ borderRadius: 16, border: "1px solid rgba(13,33,55,0.06)", overflow: "hidden", background: LIGHT_BG, cursor: "pointer" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: 0 }}>{faq.q}</h3>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 22, color: TEXT_LIGHT, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </div>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
              Ready to See Your Roof{" "}
              <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                From Above?
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px" }}>
              Schedule your free drone inspection today. No cost, no obligation, no one on your roof.
            </p>
            <div className="drone-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>
                Schedule Your Free Inspection &rarr;
              </Link>
              <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>
                (720) 766-3377
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        .drone-benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .drone-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; position: relative; }
        .drone-ideal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .drone-related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        @media (max-width: 768px) {
          .drone-benefits-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .drone-steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .drone-step-connector { display: none !important; }
          .drone-ideal-grid { grid-template-columns: 1fr !important; }
          .drone-related-grid { grid-template-columns: 1fr !important; }
          .drone-hero-btns { flex-direction: column !important; }
          .drone-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .drone-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 480px) {
          .drone-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
