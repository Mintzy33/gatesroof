"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReviewAvatar } from "../components/ReviewAvatar";
import { reviews } from "../data/reviews";
const NAVY = "#06263f";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const STAR_COLOR = "#f59e0b";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#FAFBFD";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

/* ─── Slice rows from shared data ─── */
const ROW1 = reviews.slice(0, 10);
const ROW2 = reviews.slice(10, 20);
const ROW3 = reviews.slice(20, 30);

/* ─── Featured reviews (full length) ─── */
const FEATURED = [
  { text: "Matt is fantastic! His crew did a great job. Matt was able to get me a new roof from our DENY happy insurance company and got it approved after having a third party inspection. I will recommend Gates to all my family and friends.", name: "Christian D.", city: "Lakewood, CO" },
  { text: "If you need a roofing company, I would recommend Gates Enterprises. They are professional, reliable, and efficient. Zack was wonderful at handling our project and made the whole process easy and stress free. The team did excellent work, and we\u2019re very happy with the results!", name: "Rozanet H.", city: "Colorado" },
  { text: "Giovanny was very responsive and easy to work with. We needed a new roof after some bad hail damage. From the initial inspection to the final walk through, the team was professional and thorough. They handled the insurance process seamlessly and completed the job on time. Our new roof looks amazing. Highly recommend Gates Enterprises!", name: "Jamie R.", city: "Colorado" },
  { text: "Gates was by far the best quote and Matt was very helpful every step along the way. I have a flat roof with multiple skylights and they were able to install everything within my budget with a 10yr warranty. I will recommend Gates to all my family and friends. Thanks again for an outstanding job!", name: "Harry O.", city: "Denver, CO" },
  { text: "These guys deserve more than 5 stars. I\u2019m an Architect and Gates, particularly Demetri, are just outstanding. They removed and installed 40+ squares in ONE day. Professional, courteous, and the quality of work is top notch.", name: "Ron W.", city: "Colorado" },
  { text: "Hunter was an exceptional project manager. He helped us work with our insurance and even jumped through the HOA hoops for us. The whole experience was smooth from start to finish. Could not recommend Gates enough!", name: "Whitney A.", city: "Colorado" },
];

/* ─── Google G SVG ─── */
function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.98-6.19a24.01 24.01 0 000 21.56l7.98-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/* ─── Star Icon ─── */
function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={STAR_COLOR} stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarLarge() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={STAR_COLOR} stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ─── Marquee Row Component ─── */
function MarqueeRow({
  cards,
  speed,
  direction,
  dark,
  paused,
  onHover,
  onLeave,
}: {
  cards: typeof ROW1;
  speed: number;
  direction: "left" | "right";
  dark?: boolean;
  paused: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const gsapRef = useRef<typeof import("gsap").default | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    const track = trackRef.current;
    if (!track) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsapRef.current = gsap;

      const allCards = track.querySelectorAll(".mq-card");
      const halfCount = allCards.length / 2;
      let oneSetWidth = 0;
      for (let i = 0; i < halfCount; i++) {
        const card = allCards[i] as HTMLElement;
        oneSetWidth += card.offsetWidth;
        if (i < halfCount - 1) oneSetWidth += 16;
      }
      oneSetWidth += 16;

      const dur = oneSetWidth / speed;

      if (direction === "left") {
        gsap.set(track, { x: 0 });
        tweenRef.current = gsap.to(track, { x: -oneSetWidth, duration: dur, ease: "none", repeat: -1 });
      } else {
        gsap.set(track, { x: -oneSetWidth });
        tweenRef.current = gsap.to(track, { x: 0, duration: dur, ease: "none", repeat: -1 });
      }

      /* ScrollTrigger: only animate when visible */
      ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => tweenRef.current?.play(),
        onLeave: () => tweenRef.current?.pause(),
        onEnterBack: () => tweenRef.current?.play(),
        onLeaveBack: () => tweenRef.current?.pause(),
      });
    });

    return () => { tweenRef.current?.kill(); };
  }, [ready, speed, direction]);

  /* pause / resume on hover */
  useEffect(() => {
    if (!tweenRef.current || !gsapRef.current) return;
    gsapRef.current.to(tweenRef.current, { timeScale: paused ? 0 : 1, duration: 0.6, ease: "power2.inOut" });
  }, [paused]);

  /* prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => {
      if (mq.matches) tweenRef.current?.pause();
      else tweenRef.current?.play();
    };
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const doubled = [...cards, ...cards];
  const bgColor = dark ? NAVY : WHITE;
  const textColor = dark ? WHITE : NAVY;
  const subColor = dark ? "rgba(255,255,255,0.55)" : TEXT_LIGHT;

  return (
    <div
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: 16, willChange: "transform", width: "max-content" }}
      >
        {doubled.map((c, i) => (
          <div
            key={i}
            className="mq-card"
            style={{
              minWidth: 320,
              maxWidth: 400,
              padding: 24,
              borderRadius: 12,
              background: bgColor,
              boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.08)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <blockquote style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: textColor, margin: "0 0 16px", fontStyle: "normal" }}>
              &ldquo;{c.text.length > 150 ? c.text.slice(0, 150).trimEnd() + "..." : c.text}&rdquo;
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <ReviewAvatar name={c.name} size={36} fontSize={13} />
                <cite style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: subColor, fontStyle: "normal" }}>
                  {c.name}, {c.city}
                </cite>
              </div>
              <GoogleG size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Counter Component ─── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tween: gsap.core.Tween | null = null;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const obj = { val: 0 };
      tween = gsap.to(obj, {
        val: end,
        duration: 2.2,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => setDisplay(obj.val.toLocaleString()),
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      });
    });

    return () => { tween?.scrollTrigger?.kill(); tween?.kill(); };
  }, [end]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ─── Main Page ─── */
export default function ReviewsContent() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ background: WHITE, overflowX: "hidden" }}>
      <Header />

      {/* ─── HERO ─── */}
      <section style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 40%, rgba(212,168,83,0.05) 0%, transparent 50%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.2em", display: "block", marginBottom: 16 }}>REVIEWS</span>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "0 0 16px", lineHeight: 1.1 }}>
            What Homeowners Say
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 28px", lineHeight: 1.75 }}>
            293+ five star reviews across Colorado&apos;s Front Range
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 4 }}>
              <StarLarge /><StarLarge /><StarLarge /><StarLarge /><StarLarge />
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 22, fontWeight: 700, color: WHITE, margin: 0 }}>
            4.8 out of 5 Stars
          </p>
        </div>
      </section>

      {/* ─── MARQUEE REVIEW WALL ─── */}
      <section className="rv-marquee-section" style={{ padding: "clamp(48px, 8vw, 80px) 0", background: LIGHT_BG, overflow: "hidden" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 40, padding: "0 24px" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>REAL REVIEWS FROM REAL HOMEOWNERS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: 0 }}>
            Trusted Across Colorado
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <MarqueeRow cards={ROW1} speed={30} direction="left" paused={hovered} onHover={() => setHovered(true)} onLeave={() => setHovered(false)} />
          <div className="rv-row2">
            <MarqueeRow cards={ROW2} speed={25} direction="right" dark paused={hovered} onHover={() => setHovered(true)} onLeave={() => setHovered(false)} />
          </div>
          <div className="rv-row3">
            <MarqueeRow cards={ROW3} speed={35} direction="left" paused={hovered} onHover={() => setHovered(true)} onLeave={() => setHovered(false)} />
          </div>
        </div>
      </section>

      {/* ─── FEATURED REVIEWS ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: WHITE }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48, padding: "0 24px" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em", display: "block", marginBottom: 12 }}>IN THEIR OWN WORDS</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: 0 }}>
            Featured Reviews
          </h2>
        </div>

        <div className="rv-featured-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {FEATURED.map((r, i) => (
            <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(13,33,55,0.06)", borderLeft: `4px solid ${ACCENT}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <blockquote style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: TEXT, margin: "0 0 20px", fontStyle: "normal" }}>
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <ReviewAvatar name={r.name} size={40} fontSize={14} />
                  <cite style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: TEXT_LIGHT, fontStyle: "normal" }}>
                    {r.name}{r.city ? `, ${r.city}` : ""}
                  </cite>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <GoogleG size={14} />
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>Via Google Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: NAVY }}>
        <div className="rv-stats" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" as const }}>
          {[
            { end: 293, suffix: "+", label: "Five Star Reviews" },
            { end: 0, suffix: "", label: "Average Rating", static: "4.8" },
            { end: 10, suffix: "+", label: "Years Serving Colorado" },
            { end: 7204, suffix: "+", label: "Roofs Completed" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, color: GOLD }}>
                {s.static ? (
                  <span>{s.static}</span>
                ) : (
                  <Counter end={s.end} suffix={s.suffix} />
                )}
              </div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "clamp(64px, 10vw, 100px) 24px", background: LIGHT_BG, textAlign: "center" as const }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: NAVY, margin: "0 0 16px", lineHeight: 1.1 }}>
            Ready to Join 293+ Happy Homeowners?
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: TEXT_LIGHT, margin: "0 0 36px", lineHeight: 1.75 }}>
            Schedule your free roof inspection today. No strings attached.
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "18px 40px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, transition: "transform 0.2s ease, box-shadow 0.2s ease" }}>
            Request a Free Inspection & Estimate &rarr;
          </Link>
        </div>
      </section>

      <Footer />

      {/* ─── ReviewAggregate Schema Markup ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Gates Enterprises",
            image: "https://gatesroof.vercel.app/images/gaf-master-elite.png",
            telephone: "+1-720-766-3377",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lakewood",
              addressRegion: "CO",
              addressCountry: "US",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              ratingCount: "293",
              reviewCount: "293",
            },
            url: "https://gatesroof.vercel.app/reviews",
          }),
        }}
      />

      <style>{`
        .rv-row2, .rv-row3 { display: block; }

        .rv-featured-grid > div {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .rv-featured-grid > div:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.1);
        }

        @media (max-width: 768px) {
          .rv-featured-grid { grid-template-columns: 1fr !important; }
          .rv-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .rv-row3 { display: none !important; }
          .mq-card { min-width: 280px !important; max-width: 340px !important; }
        }

        @media (max-width: 480px) {
          .rv-stats { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .mq-card { min-width: 260px !important; max-width: 300px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mq-card { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
