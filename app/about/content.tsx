"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAVY = "#0D2137";
const DEEP = "#06263f";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

export default function AboutContent() {
  const heroImgRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on hero image
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: heroImgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Stagger timeline items
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".tl-item");
      gsap.from(items, {
        opacity: 0,
        x: -30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", minHeight: "85vh", background: DEEP, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* Parallax image */}
        <div ref={heroImgRef} style={{ position: "absolute", inset: "-80px 0 0 0" }}>
          <Image
            src="/team-austin.jpg"
            alt="Austin — Senior Project Manager at Gates Enterprises"
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,38,63,0.3) 0%, rgba(6,38,63,0.1) 30%, rgba(6,38,63,0.6) 70%, rgba(6,38,63,0.95) 100%)" }} />
        </div>
        {/* Text overlay at bottom */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>ABOUT GATES ENTERPRISES</span>
          <h1 className="about-h1" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: WHITE, lineHeight: 1.08, margin: "0 0 16px", maxWidth: 700 }}>
            Meet the Team<br />Behind Your Roof
          </h1>
          <p className="about-hero-sub" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: 0, lineHeight: 1.7 }}>
            We&apos;re not a corporation. We&apos;re a crew of people who care about doing things right, for your home, your family, and your neighborhood.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER LETTER ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 120px) 24px", background: WHITE }}>
        <div className="founder-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR STORY</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 24px", lineHeight: 1.12 }}>
              We Started With a Truck,<br />a Ladder, and a Promise
            </h2>
            <div style={{ width: 48, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 28 }} />
          </div>
          <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.9, color: TEXT }}>
            <p style={{ marginTop: 0, marginBottom: 20 }}>
              I started Gates Enterprises because I was tired of watching storm chasers roll through Colorado, collect checks, and disappear. Homeowners deserved better. They deserved someone who&apos;d answer their call on a Saturday, fight their insurance company like it was personal, and still be here seven years later when the workmanship warranty kicks in.
            </p>
            <p style={{ marginBottom: 20 }}>
              That&apos;s what we built. We grew from a two man crew in a basement to a team of over 100 employees with buildings dedicated to each step of the process. We earned four manufacturer certifications (GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master), not because they look good on a website, but because they give our customers the strongest warranties in the industry.
            </p>
            <p style={{ marginBottom: 20 }}>
              We&apos;ve recovered millions in insurance supplements that adjusters tried to short change. We&apos;ve replaced roofs on houses where grandma was told her damage &ldquo;wasn&apos;t enough.&rdquo; We show up, we do the work, and we don&apos;t leave until it&apos;s right.
            </p>
            <p style={{ marginBottom: 0, fontWeight: 600, color: NAVY }}>
              — Andrew Gates, Founder
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── Navy accent section */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: DEEP, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" as const, marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>WHAT DRIVES US</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: WHITE, margin: "12px 0 0" }}>Our Core Values</h2>
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: "🛡️", t: "Integrity First", d: "We tell you what your roof needs, not what makes us the most money. Honest assessments, always." },
              { icon: "⚡", t: "Relentless Work Ethic", d: "First ones on site, last ones to leave. Every project gets our full attention until the final nail." },
              { icon: "🤝", t: "Fight For the Homeowner", d: "Insurance companies have adjusters. You have us. We negotiate, supplement, and recover what you're owed." },
              { icon: "📍", t: "Local Roots", d: "We live in Lakewood. Our kids go to school here. When a hailstorm hits, it hits our neighborhood too." },
            ].map((v, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "32px 24px", backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: WHITE, marginBottom: 10 }}>{v.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>CERTIFICATIONS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 48px" }}>Quadruple Manufacturer Certified</h2>
          <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { name: "GAF Master Elite", desc: "Top 2% of roofing contractors in North America. Golden Pledge warranty access.", hl: true },
              { name: "CertainTeed Platinum", desc: "CertainTeed's highest tier. SureStart PLUS extended warranty.", hl: false },
              { name: "Malarkey Certified", desc: "Factory-certified installer of Malarkey's premium roofing line.", hl: false },
              { name: "Emerald Premium", desc: "Premium certification for excellence in installation and service.", hl: false },
            ].map((c, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 20, padding: "32px 24px", border: c.hl ? `2px solid ${ACCENT}` : "1px solid rgba(13,33,55,0.05)", boxShadow: c.hl ? "0 8px 30px rgba(59,125,216,0.1)" : "0 2px 12px rgba(13,33,55,0.03)" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: c.hl ? "rgba(37,99,235,0.08)" : LIGHT_BG, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={c.hl ? ACCENT : NAVY} strokeWidth="1.8"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{c.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR JOURNEY</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 0" }}>Milestones That Matter</h2>
          </div>
          <div ref={timelineRef} style={{ position: "relative", paddingLeft: 32 }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: `linear-gradient(180deg, ${ACCENT}, #60A5FA)`, borderRadius: 2 }} />
            {[
              { y: "2014", t: "Gates Enterprises Founded", d: "Started with a truck, a ladder, and a commitment to doing right by Colorado homeowners." },
              { y: "2016", t: "1,000th Roof Completed", d: "Hit our first major milestone. Word of mouth became our biggest marketing channel." },
              { y: "2018", t: "GAF Master Elite Certification", d: "Earned the roofing industry's most prestigious contractor credential. Top 2% nationally." },
              { y: "2020", t: "Quadruple Certified", d: "Added CertainTeed Platinum Preferred, Malarkey, and Emerald certifications." },
              { y: "2022", t: "5,000th Roof & Insurance Milestone", d: "Surpassed 5,000 completed projects and $10M+ recovered in insurance supplements for homeowners." },
              { y: "2024", t: "7,200+ Roofs & Growing", d: "Expanded to full exterior services. Siding, gutters, paint. Still based in Lakewood. Still answering our own phones." },
            ].map((m, i) => (
              <div key={i} className="tl-item" style={{ position: "relative", marginBottom: i < 5 ? 40 : 0, paddingLeft: 28 }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: -32, top: 6, width: 16, height: 16, borderRadius: "50%", background: WHITE, border: `3px solid ${ACCENT}`, zIndex: 1 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em" }}>{m.y}</span>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: NAVY, margin: "6px 0 8px" }}>{m.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div className="community-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>GIVING BACK</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: NAVY, margin: "12px 0 20px", lineHeight: 1.12 }}>
              More Than a Roofing Company
            </h2>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, marginBottom: 20 }}>
              We believe the communities that trust us with their homes deserve more than just good craftsmanship. That&apos;s why we invest in the neighborhoods we serve, sponsoring local youth sports, donating materials for community projects, and providing free roof inspections for elderly homeowners after every major storm.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT, margin: 0 }}>
              When your roofer lives down the street, they care different. We&apos;re proof.
            </p>
          </div>
          <div style={{ background: WHITE, borderRadius: 24, padding: 40, border: "1px solid rgba(13,33,55,0.05)", boxShadow: "0 4px 24px rgba(13,33,55,0.04)" }}>
            {[
              { v: "200+", l: "Free post-storm inspections for seniors annually" },
              { v: "12", l: "Local youth sports teams sponsored" },
              { v: "$50K+", l: "In materials donated to community projects" },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: i < 2 ? 28 : 0, paddingBottom: i < 2 ? 28 : 0, borderBottom: i < 2 ? "1px solid rgba(13,33,55,0.06)" : "none" }}>
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 800, color: ACCENT }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "clamp(64px, 8vw, 80px) 24px", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,125,216,0.08) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" as const, position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
            Ready to Meet{" "}<span style={{ background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the Team?</span>
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: "0 0 32px" }}>Free inspections. Honest assessments. Real people who answer the phone.</p>
          <div className="about-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Get Free Estimate</Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.08)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>(720) 766-3377</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .certs-grid { grid-template-columns: 1fr 1fr !important; }
          .community-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-h1 { font-size: 34px !important; }
          .about-hero-sub { font-size: 16px !important; }
          .about-cta-btns { flex-direction: column !important; }
          .about-cta-btns a { text-align: center !important; }
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
