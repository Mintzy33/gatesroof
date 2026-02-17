"use client";
import { useState, useEffect, useLayoutEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global { interface Window { fbq: (...args: unknown[]) => void } }
const NAVY = "#0D2137";
const ACCENT = "#3B7DD8";
const GOLD = "#C9A54E";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/v1771207837/gatesroof.com_Header_on1ccl.mov";

const Icons = {
  home: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  storm: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  wrench: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>),
  siding: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>),
  gutter: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>),
  clipboard: (c = ACCENT) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>),
  star: (c = GOLD) => (<svg width="14" height="14" viewBox="0 0 24 24" fill={c} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  check: (c = ACCENT) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>),
};

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, v] as const;
}

function FadeIn({ children, delay = 0, d = "up" }: { children: ReactNode; delay?: number; d?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const x = d === "left" ? 60 : 0;
    const y = d === "up" ? 50 : 0;
    gsap.fromTo(el,
      { opacity: 0, x, y },
      { opacity: 1, x: 0, y: 0, duration: 0.8, delay, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
      }
    );
  }, [delay, d]);
  return (<div ref={ref} style={{ opacity: 0 }}>{children}</div>);
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: end, duration: 2, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      onUpdate: () => setCount(Math.floor(obj.val)),
    });
  }, [end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Parallax effect on hero video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }

    // Stagger service cards on scroll
    const cards = document.querySelectorAll(".service-card");
    if (cards.length) {
      gsap.fromTo(cards, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%", toggleActions: "play none none none" },
      });
    }

    // Stagger why-cards
    const whyCards = document.querySelectorAll(".why-cards > div > div");
    if (whyCards.length) {
      gsap.fromTo(whyCards, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".why-cards", start: "top 80%", toggleActions: "play none none none" },
      });
    }

    // Stagger review cards
    const reviewCards = document.querySelectorAll(".reviews-grid > div > div");
    if (reviewCards.length) {
      gsap.fromTo(reviewCards, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".reviews-grid", start: "top 80%", toggleActions: "play none none none" },
      });
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div style={{ background: WHITE, minHeight: "100vh", overflowX: "hidden" }}>
      <Header />

      {/* HERO */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", background: NAVY, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <video ref={videoRef} autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,33,55,0.85) 0%, rgba(13,33,55,0.55) 40%, rgba(13,33,55,0.75) 100%)" }} />
        <div className="hero-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 20px 80px", position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <FadeIn delay={0.1}>
              <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, padding: "7px 16px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>GAF Master Elite — Top 2% in North America</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="hero-h1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 800, color: WHITE, lineHeight: 1.06, margin: "0 0 20px" }}>
                Colorado&apos;s Most{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trusted</span><br />Roofing Team
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="hero-sub" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px", maxWidth: 460 }}>7,200+ roofs completed across the Denver metro. From hail damage claims to full exterior restoration.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="hero-btns" style={{ display: "flex", gap: 12 }}>
                <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Free Inspection →</Link>
                <a href="tel:7207663377" onClick={()=>{if(window.fbq)window.fbq('track','Contact',{content_name:'phone_call'})}} style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</a>
              </div>
            </FadeIn>
          </div>
          <div className="hero-right">
            <FadeIn delay={0.3} d="left">
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 28px", backdropFilter: "blur(10px)", marginBottom: 16 }}>
                <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                  {[{ n: 7204, s: "+", l: "Roofs" }, { n: 10, s: "+", l: "Years" }, { n: 0, s: "", l: "Rating", d: "4.8★" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center" as const }}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: WHITE, lineHeight: 1 }}>{s.d || <Counter end={s.n} suffix={s.s} />}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.45} d="left">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[{ t: "4x Certified", d: "GAF · Malarkey · CertainTeed · Emerald" }, { t: "Insurance Experts", d: "Inspection to payment — we handle it all" }].map((c, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 18px" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: WHITE, marginBottom: 4 }}>{c.t}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="mobile-hero-stats" style={{ display: "none", position: "relative", zIndex: 1, padding: "0 20px 60px", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" as const }}>
            {[{ v: "7,200+", l: "Roofs" }, { v: "10+", l: "Years" }, { v: "4.8★", l: "Rating" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" as const }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 800, color: WHITE }}>{s.v}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 2, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" style={{ background: WHITE, padding: "20px 16px", borderBottom: "1px solid rgba(13,33,55,0.04)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, flexWrap: "nowrap" as const, whiteSpace: "nowrap" as const }}>
          {["GAF MASTER ELITE", "PLATINUM PREFERRED", "MALARKEY", "EMERALD PREMIUM", "BBB A+"].map((b) => (
            <span key={b} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: NAVY, letterSpacing: "0.12em", opacity: 0.35, flexShrink: 0 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHAT WE DO</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Complete Exterior Solutions</h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>One contractor for everything above your foundation.</p>
            </div>
          </FadeIn>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: Icons.home(), t: "Roof Replacement", d: "Full tear-off with Class 4 shingles. GAF Golden Pledge warranty.", h: "/services/roof-replacement" },
              { icon: Icons.storm(), t: "Storm & Hail Damage", d: "Insurance claim experts. Inspection to final payment.", h: "/services/storm-hail-damage" },
              { icon: Icons.wrench(), t: "Roof Repair", d: "Leak repair, flashing, emergency tarping. Fast response.", h: "/services/roof-repair" },
              { icon: Icons.siding(), t: "Siding & Exterior", d: "James Hardie, vinyl, and wood siding installation.", h: "/services/siding-exterior" },
              { icon: Icons.gutter(), t: "Gutters & Guards", d: "Seamless gutters and leaf guard systems.", h: "/services/gutters-guards" },
              { icon: Icons.clipboard(), t: "Insurance Claims", d: "Supplements, O&P negotiations — we fight for your payout.", h: "/services/insurance-claims" },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Link href={s.h} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="service-card" style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.05)", height: "100%", transition: "all 0.3s", cursor: "pointer" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{s.t}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{s.d}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GATES */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
            <div>
              <FadeIn>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHY GATES</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: NAVY, margin: "10px 0 16px", lineHeight: 1.12 }}>Not Your Average<br />Roofing Company</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: TEXT_LIGHT, marginBottom: 32 }}>While storm chasers come and go, we&apos;ve been protecting Colorado homes for over a decade. Our four manufacturer certifications mean access to the best warranties in the industry.</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div style={{ display: "flex", gap: 28 }}>
                  {[{ v: "7,204+", l: "Roofs" }, { v: "10+", l: "Years" }, { v: "4.8★", l: "Rating" }].map((s, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 800, color: NAVY }}>{s.v}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: TEXT_LIGHT, marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="why-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { n: "01", t: "Top 2% Nationwide", d: "GAF Master Elite — highest training, best warranties.", c: ACCENT },
                { n: "02", t: "Insurance Fighters", d: "Recovered millions in supplements. We know what adjusters miss.", c: GOLD },
                { n: "03", t: "One-Stop Exterior", d: "Roof, siding, gutters — one company, one warranty.", c: ACCENT },
                { n: "04", t: "Lakewood Local", d: "Not a storm chaser. We live and work here.", c: GOLD },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.08 + i * 0.06}>
                  <div style={{ background: LIGHT_BG, borderRadius: 18, padding: "24px 20px", border: "1px solid rgba(13,33,55,0.04)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.c, letterSpacing: "0.15em" }}>{item.n}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: "8px 0 6px" }}>{item.t}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.65, color: TEXT_LIGHT, margin: 0 }}>{item.d}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center" as const, marginBottom: "clamp(32px, 5vw, 56px)" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>REVIEWS</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 10px" }}>What Homeowners Say</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i}>{Icons.star()}</span>)}</div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>4.8 · 200+ reviews</span>
              </div>
            </div>
          </FadeIn>
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { n: "Sarah M.", loc: "Lakewood, CO", t: "Gates handled our entire insurance claim after the hail storm. They found damage the first adjuster missed and got us an extra $8,000." },
              { n: "James R.", loc: "Arvada, CO", t: "Best contractor experience we've ever had. On time, on budget, and they cleaned up everything. The GAF warranty gives us real peace of mind." },
              { n: "Mike & Linda C.", loc: "Golden, CO", t: "We got quotes from 5 companies. Gates was the only one who walked us through the insurance process step by step." },
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{ background: WHITE, borderRadius: 18, padding: "28px 24px", border: "1px solid rgba(13,33,55,0.04)", height: "100%", display: "flex", flexDirection: "column" as const }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[1,2,3,4,5].map(j => <span key={j}>{Icons.star()}</span>)}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: "0 0 20px", flex: 1, fontStyle: "italic" }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, ${ACCENT})`, display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700 }}>{r.n[0]}</div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY }}>{r.n}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{r.loc}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "clamp(56px, 10vw, 100px) 20px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
          <FadeIn>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>SERVICE AREAS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Proudly Serving Denver Metro</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", color: TEXT_LIGHT, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>Based in Lakewood. Serving every community along the Front Range.</p>
          </FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, justifyContent: "center" }}>
            {[
              {n:"Lakewood",s:"lakewood"},{n:"Denver",s:"denver"},{n:"Aurora",s:"aurora"},{n:"Arvada",s:"arvada"},{n:"Westminster",s:"westminster"},
              {n:"Thornton",s:"thornton"},{n:"Centennial",s:"centennial"},{n:"Littleton",s:"littleton"},{n:"Englewood",s:"englewood"},{n:"Wheat Ridge",s:"wheat-ridge"},
              {n:"Golden",s:"golden"},{n:"Broomfield",s:"broomfield"},{n:"Highlands Ranch",s:"highlands-ranch"},{n:"Parker",s:"parker"},{n:"Castle Rock",s:"castle-rock"},
              {n:"Commerce City",s:"commerce-city"},{n:"Conifer",s:"conifer"},{n:"Edgewater",s:"edgewater"},{n:"Federal Heights",s:"federal-heights"},{n:"Northglenn",s:"northglenn"},
            ].map((c) => (
              <Link key={c.n} href={`/areas/${c.s}`} style={{ display: "inline-block", padding: "8px 18px", borderRadius: 100, border: "1.5px solid rgba(13,33,55,0.1)", background: "transparent", color: NAVY, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}>{c.n}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(56px, 8vw, 80px) 20px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)` }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
              Ready to Protect{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Home?</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>Free inspections. No-pressure estimates. Colorado&apos;s most thorough roof evaluation.</p>
            <div className="home-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, textAlign: "center" }}>Get Free Estimate</Link>
              <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, textAlign: "center" }}>(720) 766-3377</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

      <style>{`
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(13,33,55,0.08); }
        @media (max-width: 768px) {
          .hero-wrap { grid-template-columns: 1fr !important; gap: 0 !important; padding: 100px 20px 20px !important; }
          .hero-right { display: none !important; }
          .mobile-hero-stats { display: flex !important; }
          .hero-h1 { font-size: 34px !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 28px !important; }
          .hero-badge { margin-bottom: 18px !important; }
          .hero-badge span:last-child { font-size: 11px !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { text-align: center !important; padding: 16px 28px !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .service-card { padding: 22px 18px !important; }
          .service-card h3 { font-size: 16px !important; }
          .service-card p { font-size: 13px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .why-cards { grid-template-columns: 1fr 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .trust-bar { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .home-cta-btns { flex-direction: column !important; }
          .home-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 400px) {
          .hero-wrap { padding: 90px 16px 16px !important; }
          .hero-h1 { font-size: 30px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
