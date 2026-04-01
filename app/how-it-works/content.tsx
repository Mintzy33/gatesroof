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

/* ── Icons ─────────────────────────────────────────────────────────── */

const SearchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const SwatchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const HammerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
    <path d="M17.64 15L22 10.64" />
    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

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

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "Free Inspection",
    icon: <SearchIcon />,
    description:
      "Call (720) 766-3377 or fill out our online form to schedule your free roof inspection. A certified inspector comes to your home for a 15-minute assessment at no cost and no obligation. We use drone technology for a thorough evaluation without climbing on your roof.",
    highlights: [
      "No cost, no obligation",
      "15-minute on-site assessment",
      "Drone technology for thorough evaluation",
      "Certified inspector at your home",
    ],
  },
  {
    num: "02",
    title: "Detailed Assessment",
    icon: <ClipboardIcon />,
    description:
      "We document everything with photos and measurements. If there is storm damage, we identify it. If your roof is in good shape, we tell you that too. Honest evaluation, no upselling.",
    highlights: [
      "Photo and measurement documentation",
      "Storm damage identification",
      "Honest evaluation every time",
      "No pressure, no upselling",
    ],
  },
  {
    num: "03",
    title: "Insurance Claims Assistance",
    icon: <FileTextIcon />,
    description:
      "If storm damage is found, we help you file your insurance claim. We document the damage, meet with your adjuster, and handle the paperwork. You typically only pay your deductible.",
    highlights: [
      "Full claim documentation",
      "We meet with your adjuster",
      "Paperwork handled for you",
      "You typically pay only your deductible",
    ],
  },
  {
    num: "04",
    title: "Material Selection",
    icon: <SwatchIcon />,
    description:
      "Choose from top manufacturer options. We carry GAF, Owens Corning, Malarkey, and CertainTeed products. Your project manager walks you through colors, styles, and warranty options.",
    highlights: [
      "GAF Master Elite certified",
      "Owens Corning Preferred contractor",
      "Malarkey and CertainTeed options",
      "Project manager guides your selection",
    ],
  },
  {
    num: "05",
    title: "Professional Installation",
    icon: <HammerIcon />,
    description:
      "Our crews are manufacturer-trained and certified. Most residential roofs are completed in 1 to 2 days. We protect your property, clean up everything, and do a final walkthrough with you.",
    highlights: [
      "Manufacturer-trained crews",
      "Most roofs completed in 1-2 days",
      "Full property protection",
      "Final walkthrough with you",
    ],
  },
  {
    num: "06",
    title: "Final Inspection and Warranty",
    icon: <ShieldCheckIcon />,
    description:
      "We inspect the finished work, ensure everything meets manufacturer specifications, and activate your warranty. Up to 50 years of coverage depending on materials chosen.",
    highlights: [
      "Quality inspection on every project",
      "Manufacturer specification compliance",
      "Warranty activation included",
      "Up to 50-year coverage available",
    ],
  },
];

const STATS = [
  { value: "4x", label: "Manufacturer Certified" },
  { value: "7,200+", label: "Roofs Completed" },
  { value: "4.9", label: "Star Rating", hasStar: true },
  { value: "306", label: "Customer Reviews" },
];

const FAQS = [
  {
    q: "How long does the entire roofing process take from inspection to completion?",
    a: "The typical timeline from initial inspection to completed installation is 2 to 4 weeks. This includes the inspection, assessment, material ordering, and installation. Emergency repairs and storm damage projects may be expedited. Most residential roof installations are completed in just 1 to 2 days once materials arrive.",
  },
  {
    q: "Do I need to be home during the roof inspection?",
    a: "We recommend being home for the initial inspection so we can walk you through our findings in person. The inspection takes approximately 15 minutes. We use drone technology to assess your roof thoroughly without needing to climb on it, so there is minimal disruption to your day.",
  },
  {
    q: "Will my insurance cover the cost of a new roof?",
    a: "If your roof has storm damage, most homeowners insurance policies cover the replacement cost minus your deductible. Our team documents all damage, files the claim on your behalf, and meets with your insurance adjuster to ensure nothing is missed. You typically only pay your deductible.",
  },
  {
    q: "What happens if you inspect my roof and there is no damage?",
    a: "We tell you exactly that. Our inspections are free with no obligation, and we do not upsell or pressure homeowners into unnecessary work. If your roof is in good shape, we will let you know and recommend when to schedule your next inspection.",
  },
];

/* ── Component ─────────────────────────────────────────────────────── */

export default function HowItWorksContent() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{ padding: "100px 20px 60px", background: NAVY, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,125,216,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,125,216,0.06) 0%, transparent 40%)` }} />
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: ACCENT, marginBottom: 16 }}>
              Our Roofing Process
            </p>
            <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800, color: WHITE, margin: "0 0 20px", lineHeight: 1.1 }}>
              How It{" "}
              <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Works
              </span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto 32px" }}>
              From your first call to your finished roof, here is exactly what to expect when you work with Gates Enterprises. No surprises. No pressure. Just honest, professional roofing.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontSize: 15, fontWeight: 600, display: "inline-block" }}>
                Schedule Your Free Inspection
              </Link>
              <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontSize: 15, fontWeight: 500, display: "inline-block" }}>
                (720) 766-3377
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 480px) {
              .hero-btns { flex-direction: column !important; }
              .hero-btns a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
            }
          `}</style>
        </section>

        {/* ── Steps ────────────────────────────────────────────── */}
        <section style={{ padding: "80px 20px", background: WHITE }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, textAlign: "center", margin: "0 0 12px" }}>
              Your Roof Replacement, Step by Step
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT, textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
              Every Gates project follows the same proven process. Here is what to expect at each stage.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {STEPS.map((step, i) => (
                <div key={step.num} className="step-card" style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                  {/* Step number + connector */}
                  <div className="step-num-col" style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 56 }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 800, fontSize: 18, fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", flexShrink: 0 }}>
                      {step.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 48, background: `linear-gradient(to bottom, ${ACCENT}40, transparent)`, marginTop: 8 }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingBottom: i < STEPS.length - 1 ? 0 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {step.icon}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 700, color: NAVY, margin: 0 }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: TEXT, margin: "0 0 16px" }}>
                      {step.description}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
                      {step.highlights.map((h) => (
                        <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: TEXT }}>
                          <CheckIcon />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .step-card { flex-direction: column !important; gap: 16px !important; }
              .step-num-col { flex-direction: row !important; gap: 12px !important; min-width: auto !important; }
              .step-num-col > div:last-child { display: none !important; }
            }
          `}</style>
        </section>

        {/* ── What Makes Gates Different ───────────────────────── */}
        <section style={{ padding: "72px 20px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, textAlign: "center", margin: "0 0 12px" }}>
              What Makes Gates Different
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT, textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
              Colorado's only quadruple manufacturer certified roofing contractor. The numbers speak for themselves.
            </p>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {STATS.map((stat) => (
                <div key={stat.label} style={{ background: WHITE, borderRadius: 16, padding: "32px 20px", textAlign: "center", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: NAVY }}>
                      {stat.value}
                    </span>
                    {stat.hasStar && <StarIcon />}
                  </div>
                  <p style={{ fontSize: 14, color: TEXT_LIGHT, margin: 0, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, background: WHITE, borderRadius: 16, padding: "32px", border: "1px solid rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: "0 0 20px" }}>
                Four Manufacturer Certifications
              </h3>
              <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  { name: "GAF Master Elite", detail: "Top 2% of roofers nationwide" },
                  { name: "Owens Corning Preferred", detail: "Preferred contractor network" },
                  { name: "Malarkey Emerald Premium", detail: "Highest Malarkey tier" },
                  { name: "CertainTeed Shingle Master", detail: "Advanced certification" },
                ].map((cert) => (
                  <div key={cert.name} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon />
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: NAVY, margin: "0 0 2px" }}>{cert.name}</p>
                      <p style={{ fontSize: 13, color: TEXT_LIGHT, margin: 0 }}>{cert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .certs-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <section style={{ padding: "72px 20px", background: WHITE }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, margin: "0 0 12px" }}>
              Timeline Expectations
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT, maxWidth: 600, margin: "0 auto 48px" }}>
              We respect your time. Here is what a typical project timeline looks like.
            </p>
            <div className="timeline-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { phase: "Inspection to Approval", time: "1-3 Days", desc: "Free inspection, detailed assessment, and estimate delivery." },
                { phase: "Materials and Scheduling", time: "1-2 Weeks", desc: "Material selection, ordering, and installation scheduling." },
                { phase: "Installation", time: "1-2 Days", desc: "Professional installation, cleanup, and final walkthrough." },
              ].map((t) => (
                <div key={t.phase} style={{ background: LIGHT_BG, borderRadius: 16, padding: "28px 24px", textAlign: "left", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: ACCENT, margin: "0 0 8px" }}>{t.time}</p>
                  <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 8px" }}>{t.phase}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: TEXT, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: TEXT_LIGHT, marginTop: 32 }}>
              Total typical timeline: <strong style={{ color: NAVY }}>2 to 4 weeks</strong> from inspection to completion. Emergency and storm damage work can be expedited.
            </p>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .timeline-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section style={{ padding: "72px 20px", background: LIGHT_BG }}>
          <div style={{ maxWidth: 740, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, textAlign: "center", margin: "0 0 12px" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT, textAlign: "center", margin: "0 0 48px" }}>
              Common questions about our roofing process.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {FAQS.map((faq) => (
                <details key={faq.q} style={{ background: WHITE, borderRadius: 14, border: "1px solid rgba(0,0,0,0.06)", overflow: "hidden" }}>
                  <summary style={{ padding: "20px 24px", fontSize: 16, fontWeight: 600, color: NAVY, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                    {faq.q}
                    <span style={{ flexShrink: 0, marginLeft: 12, transition: "transform 0.2s" }}>
                      <ChevronIcon />
                    </span>
                  </summary>
                  <div style={{ padding: "0 24px 20px", fontSize: 15, lineHeight: 1.8, color: TEXT }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <style>{`
            details[open] summary span { transform: rotate(180deg); }
            summary::-webkit-details-marker { display: none; }
          `}</style>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <CTA
          title="Ready to Get Started?"
          subtitle="Schedule your free roof inspection today. No cost, no obligation, no pressure."
        />
      </main>
      <Footer />
    </>
  );
}
