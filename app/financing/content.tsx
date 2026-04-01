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

const NumIcon = ({ num }: { num: number }) => (
  <div style={{ width: 36, height: 36, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: WHITE }}>{num}</span>
  </div>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default function FinancingContent() {
  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home &rarr; Financing</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Flexible Payment Options for Your Roof
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Quadruple Certified. 306+ Five Star Reviews. 4.9 Star Rating.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            A new roof is one of the most important investments you can make in your home. At Gates Enterprises, we believe cost should never prevent you from protecting your property. That is why we offer multiple payment options and work closely with insurance companies to help make the process as affordable as possible.
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

      {/* SOCIAL PROOF BAR */}
      <section style={{ padding: "32px 24px", background: LIGHT_BG, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>4.9 out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>(306+ reviews)</span>
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(13,33,55,0.12)" }} />
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>GAF Master Elite &bull; Owens Corning Preferred &bull; Malarkey Emerald Premium &bull; CertainTeed Shingle Master</span>
        </div>
      </section>

      {/* INSURANCE RESTORATION */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Insurance Restoration
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            The majority of roofing projects we complete in Colorado are insurance restoration jobs. Colorado ranks among the top states in the nation for hail damage claims, and most standard homeowners insurance policies cover storm damage to your roof, siding, and gutters under dwelling coverage.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Gates Enterprises may assist you with navigating the insurance claim process from start to finish. Our team can help document storm damage thoroughly, coordinate with your insurance adjuster, and ensure that all covered damage is accurately represented in your claim. This assistance could help reduce confusion and streamline the restoration timeline.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            For an approved insurance claim, homeowners are typically responsible for their deductible. The insurance company may then cover the remaining cost of the restoration. The exact out of pocket amount depends on your specific policy, deductible, and the scope of damage documented.
          </p>

          <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 16 }}>How We Assist with Insurance Claims</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { num: 1, title: "Free Storm Damage Inspection", desc: "We perform a comprehensive roof inspection at no cost to you, documenting every instance of damage with detailed photos and measurements." },
              { num: 2, title: "Claim Filing Guidance", desc: "We help you understand the claim process and provide guidance on what to communicate to your insurance company." },
              { num: 3, title: "Adjuster Coordination", desc: "A Gates Enterprises representative meets with your insurance adjuster to walk through all documented damage and help ensure nothing is overlooked." },
              { num: 4, title: "Supplement Support", desc: "If the initial estimate does not capture the full scope of damage, we prepare and submit supplements to your insurance company on your behalf." },
              { num: 5, title: "Quality Restoration", desc: "Once approved, our certified crews complete the work to manufacturer specifications, backed by the strongest warranties in the industry." },
            ].map((step) => (
              <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <NumIcon num={step.num} />
                <div>
                  <h4 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{step.title}</h4>
                  <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Payment Options
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            We offer several ways to pay for your roofing project, so you can choose the option that works best for your situation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                title: "Insurance Claims",
                desc: "Most of our projects are covered by homeowners insurance. You typically pay only your deductible, and the insurance company may cover the rest. We assist with the entire claim process.",
                icon: <ShieldIcon />,
              },
              {
                title: "Cash or Check",
                desc: "For homeowners paying out of pocket, we accept cash and check payments. We provide a detailed written estimate before any work begins so you know exactly what to expect.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Credit Card",
                desc: "We accept major credit cards for your convenience. This can be a good option for smaller repairs or for homeowners who prefer the flexibility of credit card payments.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Third Party Financing",
                desc: "We work with trusted third party lenders who offer financing plans for roofing projects. This allows you to spread payments over time with competitive rates and flexible terms.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
            ].map((option, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, padding: 28, border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ marginBottom: 16 }}>{option.icon}</div>
                <h3 style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{option.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, margin: 0 }}>{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE INSPECTION & ESTIMATE */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Free Inspection and Estimate
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Every roofing project starts with a free, no obligation inspection. Our certified inspectors thoroughly evaluate the condition of your roof, document any damage or wear, and provide you with a clear, written estimate before any work begins.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 20 }}>
            Whether you suspect storm damage, are planning a proactive replacement, or just want to know the condition of your roof, our inspection gives you the information you need to make a confident decision. There is never any pressure to commit.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              "Comprehensive roof, gutter, and exterior evaluation",
              "Detailed photo documentation of any damage found",
              "Written estimate with clear line items and pricing",
              "Insurance claim guidance if storm damage is present",
              "No cost, no pressure, no obligation",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <CheckIcon />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Schedule Your Free Inspection &rarr;
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(13,33,55,0.04)", color: NAVY, border: "1px solid rgba(13,33,55,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More
          </h2>
          <div className="financing-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {[
              { label: "Insurance Restoration", href: "/insurance-restoration" },
              { label: "Insurance Claims Services", href: "/services/insurance-claims" },
              { label: "Warranty Information", href: "/warranty" },
              { label: "Roof Replacement", href: "/services/roof-replacement" },
              { label: "Why Choose Gates Enterprises", href: "/why-gates-enterprises" },
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
        title="Ready to Discuss Your Roofing Project?"
        subtitle="Free inspections. Flexible payment options. Colorado's most certified roofer. Call (720) 766-3377 or request your free inspection online."
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .financing-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
