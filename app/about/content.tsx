"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { ShieldCheck, Flame, Handshake, MapPin, Shield, Award, Leaf, Star } from "lucide-react";
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

const MILESTONES = [
  { y: "2014", t: "Gates Enterprises Founded", d: "One truck. One ladder. One promise: treat every roof like it's your mom's house." },
  { y: "2016", t: "1,000 Roofs Completed", d: "Grew entirely through referrals. No ads, no gimmicks. Just good work." },
  { y: "2018", t: "GAF Master Elite Certified", d: "Joined the top 2% of roofing contractors in North America. Unlocked the Golden Pledge Lifetime Warranty for our customers." },
  { y: "2020", t: "Quadruple Manufacturer Certified", d: "Earned GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master. Only 1% of contractors hold all four." },
  { y: "2022", t: "5,000 Roofs and Millions Recovered", d: "Surpassed 5,000 completed projects. Recovered millions in insurance supplements that adjusters tried to deny." },
  { y: "2024", t: "Full Exterior Services Launched", d: "Expanded beyond roofing into siding, gutters, windows, and paint. One contractor for everything above your foundation." },
  { y: "2026", t: "7,200+ Roofs and 100 Strong", d: "Grew to over 100 employees with dedicated facilities for every step of the process. Still based in Lakewood. Still answering our own phones." },
];

export default function AboutContent() {
  const heroImgRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
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

    const mm = gsap.matchMedia();

    // ── DESKTOP: horizontal scroll timeline ──
    mm.add("(min-width: 769px)", () => {
      if (!timelineSectionRef.current || !timelineTrackRef.current || !timelineLineRef.current) return;

      const track = timelineTrackRef.current;
      const cards = track.querySelectorAll<HTMLElement>(".tl-card");
      const dots = track.querySelectorAll<HTMLElement>(".tl-dot");
      const line = timelineLineRef.current;
      const totalScroll = track.scrollWidth - window.innerWidth;

      // Horizontal scroll
      const scrollTween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 1.2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Progress line fill
      gsap.to(line, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll * 1.2}`,
          scrub: 1,
        },
      });

      // Each card + dot animation
      cards.forEach((card, i) => {
        const dot = dots[i];
        gsap.fromTo(card,
          { opacity: 0.15, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.5,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 75%",
              end: "left 40%",
              scrub: true,
            },
          }
        );
        if (dot) {
          gsap.to(dot, {
            background: ACCENT,
            borderColor: ACCENT,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 75%",
              end: "left 60%",
              scrub: true,
            },
          });
        }
      });
    });

    // ── MOBILE: vertical fade-in timeline ──
    mm.add("(max-width: 768px)", () => {
      if (!timelineRef.current) return;
      const items = timelineRef.current.querySelectorAll(".tl-mob-item");
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
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
              { Icon: ShieldCheck, t: "Integrity First", d: "We tell you what your roof needs, not what makes us the most money. Honest assessments, always." },
              { Icon: Flame, t: "Relentless Work Ethic", d: "First ones on site, last ones to leave. Every project gets our full attention until the final nail." },
              { Icon: Handshake, t: "Fight For the Homeowner", d: "Insurance companies have adjusters. You have us. We negotiate, supplement, and recover what you're owed." },
              { Icon: MapPin, t: "Local Roots", d: "We live in Lakewood. Our kids go to school here. When a hailstorm hits, it hits our neighborhood too." },
            ].map((v, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 24px", backdropFilter: "blur(8px)", textAlign: "center" as const, display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <v.Icon size={26} color={WHITE} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 700, color: WHITE, marginBottom: 10, whiteSpace: "nowrap" as const }}>{v.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>CERTIFICATIONS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 12px" }}>Quadruple Manufacturer Certified</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, color: TEXT_LIGHT, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 48px" }}>Only 1% of roofing contractors in the U.S. hold all four of these certifications.</p>
          <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { Icon: Shield, name: "GAF Master Elite", desc: "Top 2% of contractors nationwide. Qualifies homeowners for the Golden Pledge Limited Lifetime Warranty with 25 years of workmanship coverage and 10 years of 100% material defect coverage." },
              { Icon: Award, name: "Owens Corning Platinum Preferred", desc: "Platinum Protection Limited Lifetime Warranty with up to 25 years of workmanship coverage. Only available through Platinum Preferred contractors." },
              { Icon: Leaf, name: "Malarkey Emerald Pro", desc: "Emerald Pro Warranty includes a limited lifetime material warranty plus 25 years of workmanship coverage. Eco-friendly shingles made with upcycled materials." },
              { Icon: Star, name: "CertainTeed Shingle Master", desc: "5 Star extended warranty with 25 years of workmanship coverage backed directly by CertainTeed. Requires advanced installation training." },
            ].map((c, i) => (
              <div key={i} className="cert-card" style={{ background: WHITE, borderRadius: 20, padding: "36px 24px", border: `2px solid ${ACCENT}`, boxShadow: "0 2px 12px rgba(13,33,55,0.04)", textAlign: "center" as const, display: "flex", flexDirection: "column" as const, alignItems: "center", transition: "transform 0.25s ease, box-shadow 0.25s ease", cursor: "default" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <c.Icon size={26} color={ACCENT} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.3 }}>{c.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE: DESKTOP (horizontal scroll) ─── */}
      <section ref={timelineSectionRef} className="tl-desktop" style={{ background: WHITE, overflow: "hidden" }}>
        <div style={{ padding: "80px 0 0", textAlign: "center" as const }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR JOURNEY</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 0" }}>Milestones That Matter</h2>
        </div>
        <div ref={timelineTrackRef} style={{ display: "flex", alignItems: "flex-start", paddingTop: 80, paddingBottom: 100, position: "relative", width: "fit-content" }}>
          {/* Background line (gray) */}
          <div style={{ position: "absolute", top: 130, left: 80, right: 80, height: 3, background: "rgba(13,33,55,0.08)", borderRadius: 2 }} />
          {/* Progress line (blue, fills via scaleX) */}
          <div ref={timelineLineRef} style={{ position: "absolute", top: 130, left: 80, right: 80, height: 3, background: ACCENT, borderRadius: 2, transformOrigin: "left center", transform: "scaleX(0)" }} />

          {MILESTONES.map((m, i) => (
            <div key={i} className="tl-card" style={{ minWidth: 320, maxWidth: 320, padding: "0 40px", position: "relative", flexShrink: 0, opacity: i === 0 ? 1 : 0.15 }}>
              {/* Dot on the line */}
              <div className="tl-dot" style={{ width: 18, height: 18, borderRadius: "50%", border: `3px solid rgba(13,33,55,0.15)`, background: WHITE, margin: "0 auto 32px", position: "relative", zIndex: 2, transition: "background 0.3s, border-color 0.3s", ...(i === 0 ? { background: ACCENT, borderColor: ACCENT } : {}) }} />
              {/* Year */}
              <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 52, fontWeight: 800, color: ACCENT, lineHeight: 1, marginBottom: 12, textAlign: "center" as const }}>{m.y}</div>
              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 10, textAlign: "center" as const, lineHeight: 1.3 }}>{m.t}</h3>
              {/* Description */}
              <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0, textAlign: "center" as const }}>{m.d}</p>
            </div>
          ))}
          {/* Spacer to allow last card to scroll into view */}
          <div style={{ minWidth: "40vw", flexShrink: 0 }} />
        </div>
      </section>

      {/* ─── TIMELINE: MOBILE (vertical) ─── */}
      <section className="tl-mobile" ref={timelineRef} style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR JOURNEY</span>
            <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "12px 0 0" }}>Milestones That Matter</h2>
          </div>
          <div style={{ position: "relative", paddingLeft: 36 }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 3, background: `linear-gradient(180deg, ${ACCENT}, #60A5FA)`, borderRadius: 2 }} />
            {MILESTONES.map((m, i) => (
              <div key={i} className="tl-mob-item" style={{ position: "relative", marginBottom: i < MILESTONES.length - 1 ? 40 : 0, paddingLeft: 24 }}>
                <div style={{ position: "absolute", left: -36, top: 4, width: 18, height: 18, borderRadius: "50%", background: WHITE, border: `3px solid ${ACCENT}`, zIndex: 1 }} />
                <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: ACCENT, lineHeight: 1, marginBottom: 6 }}>{m.y}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: "0 0 8px", lineHeight: 1.3 }}>{m.t}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT_LIGHT, margin: 0 }}>{m.d}</p>
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
        .tl-mobile { display: none; }
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .certs-grid { grid-template-columns: 1fr 1fr !important; }
          .community-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-h1 { font-size: 34px !important; }
          .about-hero-sub { font-size: 16px !important; }
          .about-cta-btns { flex-direction: column !important; }
          .about-cta-btns a { text-align: center !important; }
          .tl-desktop { display: none !important; }
          .tl-mobile { display: block !important; }
        }
        .cert-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important;
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
