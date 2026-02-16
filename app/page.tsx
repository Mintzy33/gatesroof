"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/v1771207837/gatesroof.com_Header_on1ccl.mov";

const Icons = {
  home: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>),
  storm: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  wrench: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>),
  siding: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="9" /><line x1="15" y1="9" x2="15" y2="15" /><line x1="9" y1="15" x2="9" y2="21" /></svg>),
  gutter: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>),
  clipboard: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="15" y2="16" /></svg>),
  award: (color = GOLD) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>),
  shield: (color = ACCENT) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>),
  star: (color = GOLD) => (<svg width="16" height="16" viewBox="0 0 24 24" fill={color} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>),
  trustDot: (color = GOLD) => (<svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={color} /></svg>),
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, direction = "up" }: { children: ReactNode; delay?: number; direction?: string }) {
  const [ref, visible] = useInView();
  const dirs: Record<string, string> = { up: "translateY(32px)", down: "translateY(-32px)", left: "translateX(32px)", right: "translateX(-32px)", none: "none" };
  return (<div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : dirs[direction], transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>{children}</div>);
}

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0; const step = end / (duration / 16);
    const timer = setInterval(() => { start += step; if (start >= end) { setCount(end); clearInterval(timer); } else setCount(Math.floor(start)); }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function ServiceCard({ icon, title, desc, delay, href }: { icon: ReactNode; title: string; desc: string; delay: number; href?: string }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        background: WHITE, borderRadius: 20, padding: "36px 28px", cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: h ? "translateY(-6px)" : "none",
        boxShadow: h ? "0 20px 50px rgba(13,33,55,0.1)" : "0 2px 12px rgba(13,33,55,0.04)",
        border: `1px solid ${h ? "rgba(59,125,216,0.15)" : "rgba(13,33,55,0.05)"}`,
        position: "relative" as const, overflow: "hidden" as const, height: "100%",
      }}>
        <div style={{ position: "absolute" as const, top: 0, left: 0, width: "100%", height: 3, background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, transform: h ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }} />
        <div style={{ width: 52, height: 52, borderRadius: 14, background: h ? `${ACCENT}12` : LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, transition: "background 0.3s" }}>{icon}</div>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{desc}</p>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8, color: ACCENT, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, opacity: h ? 1 : 0, transform: h ? "translateX(0)" : "translateX(-8px)", transition: "all 0.35s" }}>Learn more <span style={{ fontSize: 18 }}>→</span></div>
        {href && <a href={href} style={{ position: "absolute", inset: 0 }} />}
      </div>
    </FadeIn>
  );
}

function TestimonialCard({ name, location, text, stars, delay }: { name: string; location: string; text: string; stars: number; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div style={{ background: WHITE, borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(13,33,55,0.05)", boxShadow: "0 2px 12px rgba(13,33,55,0.03)", height: "100%", display: "flex", flexDirection: "column" as const }}>
        <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>{Array(stars).fill(0).map((_, i) => <span key={i}>{Icons.star()}</span>)}</div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: TEXT, margin: "0 0 24px", flex: 1, fontStyle: "italic" }}>&ldquo;{text}&rdquo;</p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, ${ACCENT})`, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700 }}>{name[0]}</div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY }}>{name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>{location}</div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function CityPill({ name, slug, delay }: { name: string; slug: string; delay: number }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay} direction="none">
      <Link href={`/areas/${slug}`} style={{ textDecoration: "none" }}>
        <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
          display: "inline-block", padding: "10px 22px", borderRadius: 100,
          border: `1.5px solid ${h ? ACCENT : "rgba(13,33,55,0.12)"}`,
          background: h ? ACCENT : "transparent", color: h ? WHITE : NAVY,
          fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
          cursor: "pointer", transition: "all 0.3s",
        }}>{name}</span>
      </Link>
    </FadeIn>
  );
}

export default function Home() {
  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", background: NAVY, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(13,33,55,0.55) 0%, rgba(10,31,51,0.45) 50%, rgba(13,33,55,0.6) 100%)" }} />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 20px 100px", position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <FadeIn delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,125,216,0.08)", border: "1px solid rgba(59,125,216,0.15)", borderRadius: 100, padding: "8px 18px", marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 10px rgba(74,222,128,0.4)", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>GAF Master Elite — Top 2% in North America</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 800, color: WHITE, lineHeight: 1.08, margin: "0 0 24px" }}>
                Colorado&apos;s Most{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trusted</span><br />Roofing Team
              </h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", maxWidth: 480 }}>From hail damage claims to full exterior restoration — 7,200+ roofs completed across the Denver metro. Your roof. Our reputation.</p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className="hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap" as const }}>
                <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, boxShadow: "0 8px 30px rgba(59,125,216,0.3)", textAlign: "center" }}>Get Your Free Inspection →</Link>
                <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</a>
              </div>
            </FadeIn>
          </div>
          <div className="hero-stats-col" style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
            <FadeIn delay={0.3} direction="left">
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 32px", backdropFilter: "blur(10px)" }}>
                <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
                  {[{ num: 7204, suffix: "+", label: "Roofs Completed" }, { num: 10, suffix: "+", label: "Years in Business" }, { num: 0, suffix: "", label: "Google Rating", display: "4.8★" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800, color: WHITE, lineHeight: 1 }}>{s.display ? s.display : <Counter end={s.num} suffix={s.suffix} />}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.45} direction="left">
              <div className="hero-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ marginBottom: 12 }}>{Icons.award(WHITE)}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE }}>4x Manufacturer Certified</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>GAF • Malarkey • CertainTeed • Emerald</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ marginBottom: 12 }}>{Icons.shield(WHITE)}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE }}>Insurance Claim Experts</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Inspection to payment — we handle it all</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" style={{ background: WHITE, padding: "28px 20px", borderBottom: "1px solid rgba(13,33,55,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 36, flexWrap: "wrap" as const }}>
          {["GAF MASTER ELITE", "PLATINUM PREFERRED", "MALARKEY CERTIFIED", "EMERALD PREMIUM", "BBB A+ RATED"].map((badge) => (
            <div key={badge} style={{ display: "flex", alignItems: "center", gap: 10, opacity: 0.45 }}>
              {Icons.trustDot()}
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.12em" }}>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "clamp(60px, 10vw, 110px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(36px, 6vw, 64px)" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHAT WE DO</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 16px" }}>Complete Exterior Solutions</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>One contractor for everything above your foundation. No subcontractor runaround.</p>
            </div>
          </FadeIn>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <ServiceCard href="/services/roof-replacement" icon={Icons.home()} title="Roof Replacement" desc="Full tear-off and install with impact-resistant Class 4 shingles. GAF Golden Pledge warranty available." delay={0.05} />
            <ServiceCard href="/services/storm-hail-damage" icon={Icons.storm()} title="Storm & Hail Damage" desc="Colorado's insurance claim experts. We handle the entire process from inspection to final payment." delay={0.1} />
            <ServiceCard href="/services/roof-repair" icon={Icons.wrench()} title="Roof Repair" desc="Leak repair, flashing, vent replacement, and emergency tarping. Fast response across Denver metro." delay={0.15} />
            <ServiceCard href="/services/siding-exterior" icon={Icons.siding()} title="Siding & Exterior" desc="James Hardie, vinyl, and wood siding installation. Plus professional exterior painting." delay={0.2} />
            <ServiceCard href="/services/gutters-guards" icon={Icons.gutter()} title="Gutters & Guards" desc="Seamless gutter installation, downspouts, and leaf guard systems to protect your foundation." delay={0.25} />
            <ServiceCard href="/services/insurance-claims" icon={Icons.clipboard()} title="Insurance Claims" desc="We speak adjuster. From supplement requests to O&P negotiations — we fight for your full payout." delay={0.3} />
          </div>
        </div>
      </section>

      {/* WHY GATES */}
      <section id="about" style={{ padding: "clamp(60px, 10vw, 110px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHY GATES</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "14px 0 20px", lineHeight: 1.12 }}>Not Your Average<br />Roofing Company</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: TEXT_LIGHT, marginBottom: 36 }}>While storm chasers come and go, we&apos;ve been protecting Colorado homes for over a decade. Our four manufacturer certifications mean access to the best warranties in the industry.</p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mini-stats" style={{ display: "flex", gap: 32 }}>
                  {[{ v: "7,204+", l: "Roofs" }, { v: "10+", l: "Years" }, { v: "4.8★", l: "Rating" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800, color: NAVY }}>{s.v}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT, marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="why-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { n: "01", title: "Top 2% Nationwide", desc: "GAF Master Elite means the highest training, best warranties, and manufacturer backing.", c: ACCENT },
                { n: "02", title: "Insurance Fighters", desc: "We've recovered millions in supplements. We know what adjusters miss.", c: GOLD },
                { n: "03", title: "One-Stop Exterior", desc: "Roof, siding, gutters, windows, paint — one company, one warranty, one contact.", c: ACCENT },
                { n: "04", title: "Lakewood Local", desc: "Not a storm chaser. We live here, work here, and we'll be here next time.", c: GOLD },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.08}>
                  <div style={{ background: LIGHT_BG, borderRadius: 20, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.04)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: item.c, letterSpacing: "0.15em" }}>{item.n}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: NAVY, margin: "10px 0 8px" }}>{item.title}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" style={{ padding: "clamp(60px, 10vw, 110px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(36px, 6vw, 64px)" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 12px" }}>What Homeowners Say</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" as const }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i}>{Icons.star()}</span>)}</div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT }}>4.8 average · 200+ Google reviews</span>
              </div>
            </div>
          </FadeIn>
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <TestimonialCard delay={0.05} name="Sarah Mitchell" location="Lakewood, CO" stars={5} text="Gates handled our entire insurance claim after the hail storm. They found damage the first adjuster missed and got us an extra $8,000. Roof looks incredible." />
            <TestimonialCard delay={0.12} name="James Rodriguez" location="Arvada, CO" stars={5} text="Best contractor experience we've ever had. On time, on budget, and they cleaned up everything. The GAF warranty gives us real peace of mind." />
            <TestimonialCard delay={0.19} name="Mike & Linda Chen" location="Golden, CO" stars={5} text="We got quotes from 5 companies. Gates was the only one who walked us through the insurance process step by step. They even negotiated directly with our adjuster." />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "clamp(60px, 10vw, 110px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" as const }}>
          <FadeIn>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: NAVY, margin: "14px 0 16px" }}>Proudly Serving Denver Metro</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", color: TEXT_LIGHT, maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7 }}>Based in Lakewood. Serving every community along the Front Range.</p>
          </FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
            {[
              {n:"Lakewood",s:"lakewood"},{n:"Denver",s:"denver"},{n:"Aurora",s:"aurora"},{n:"Arvada",s:"arvada"},{n:"Westminster",s:"westminster"},
              {n:"Thornton",s:"thornton"},{n:"Centennial",s:"centennial"},{n:"Littleton",s:"littleton"},{n:"Englewood",s:"englewood"},{n:"Wheat Ridge",s:"wheat-ridge"},
              {n:"Golden",s:"golden"},{n:"Broomfield",s:"broomfield"},{n:"Highlands Ranch",s:"highlands-ranch"},{n:"Parker",s:"parker"},{n:"Castle Rock",s:"castle-rock"},
              {n:"Commerce City",s:"commerce-city"},{n:"Conifer",s:"conifer"},{n:"Edgewater",s:"edgewater"},{n:"Federal Heights",s:"federal-heights"},{n:"Northglenn",s:"northglenn"},
            ].map((city, i) => (
              <CityPill key={city.n} name={city.n} slug={city.s} delay={0.02 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="estimate" style={{ padding: "80px 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(201,165,78,0.06) 0%, transparent 40%)` }} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800, color: WHITE, margin: "0 0 20px", lineHeight: 1.1 }}>
              Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>Free inspections. No-pressure estimates. Colorado&apos;s most thorough roof evaluation.</p>
            <div className="cta-buttons-home" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 600, boxShadow: "0 8px 30px rgba(59,125,216,0.3)", textAlign: "center" }}>Schedule Free Inspection</Link>
              <a href="tel:7207663377" style={{ background: "transparent", color: WHITE, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "18px 36px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 500, textAlign: "center" }}>Call (720) 766-3377</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 120px !important; }
          .hero-stats-col { order: -1; }
          .services-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-cards { grid-template-columns: 1fr 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .trust-bar { overflow-x: auto; }
          .mini-stats { justify-content: flex-start !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 100px 16px 60px !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { text-align: center !important; }
          .hero-cards { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .cta-buttons-home { flex-direction: column !important; }
          .cta-buttons-home a { text-align: center !important; }
          .mini-stats { flex-wrap: wrap !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}
