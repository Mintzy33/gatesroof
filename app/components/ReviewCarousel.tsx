"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import reviews from "../data/reviews.json";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const WHITE = "#FFFFFF";

const CHAR_LIMIT = 220;
const CARD_GAP = 20;
const AUTO_DELAY = 5000; // ms between slides

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > CHAR_LIMIT;
  const displayText = !isLong || expanded ? r.text : r.text.slice(0, CHAR_LIMIT).trimEnd() + "...";

  return (
    <div style={{
      background: WHITE,
      borderRadius: 16,
      padding: "28px 24px",
      border: "1px solid rgba(13,33,55,0.06)",
      boxShadow: "0 2px 12px rgba(13,33,55,0.05)",
      display: "flex",
      flexDirection: "column" as const,
      height: "100%",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <GoogleG />
      </div>

      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {Array.from({ length: r.rating }).map((_, j) => (
          <StarIcon key={j} />
        ))}
      </div>

      <p style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 15,
        lineHeight: 1.75,
        color: TEXT,
        margin: "0 0 20px",
        flex: 1,
      }}>
        &ldquo;{displayText}&rdquo;
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              color: ACCENT,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              padding: "0 0 0 4px",
              display: "inline",
            }}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
        <div style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${NAVY}, #1a3a5c)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: WHITE,
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: 15,
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {r.name[0]}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY }}>{r.name}</div>
          {r.date && (
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{r.date}</div>
          )}
        </div>
      </div>

      <div style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 11,
        color: TEXT_LIGHT,
        marginTop: 16,
        paddingTop: 12,
        borderTop: "1px solid rgba(13,33,55,0.06)",
      }}>
        Posted on Google
      </div>
    </div>
  );
}

export default function ReviewCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const isPaused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const totalSlides = reviews.length;
  const maxIndex = Math.max(0, totalSlides - perView);

  // Responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Calculate the x position for a given index
  const getX = useCallback((index: number) => {
    if (!containerRef.current) return 0;
    const containerW = containerRef.current.offsetWidth;
    const cardW = (containerW - CARD_GAP * (perView - 1)) / perView;
    return -(index * (cardW + CARD_GAP));
  }, [perView]);

  // Animate to a specific index
  const goTo = useCallback((index: number, instant = false) => {
    // Wrap around
    let target = index;
    if (target > maxIndex) target = 0;
    if (target < 0) target = maxIndex;

    setActiveIndex(target);

    if (tweenRef.current) tweenRef.current.kill();

    if (instant) {
      gsap.set(trackRef.current, { x: getX(target) });
    } else {
      tweenRef.current = gsap.to(trackRef.current, {
        x: getX(target),
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [maxIndex, getX]);

  // Auto advance
  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isPaused.current) {
        goTo(activeIndex + 1);
      }
    }, AUTO_DELAY);
  }, [activeIndex, goTo]);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  // Reposition instantly on resize/perView change
  useEffect(() => {
    const clamped = Math.min(activeIndex, maxIndex);
    if (clamped !== activeIndex) setActiveIndex(clamped);
    gsap.set(trackRef.current, { x: getX(clamped) });
  }, [perView, maxIndex, activeIndex, getX]);

  // Pause / Resume
  const handleMouseEnter = () => {
    isPaused.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };
  const handleMouseLeave = () => {
    isPaused.current = false;
    scheduleNext();
  };

  // Touch swipe
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    isPaused.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
    }
    isPaused.current = false;
    scheduleNext();
  };

  // Dots: show one per "page" position
  const dotCount = maxIndex + 1;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: CARD_GAP,
          willChange: "transform",
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 calc((100% - ${CARD_GAP * (perView - 1)}px) / ${perView})`,
              minWidth: 0,
            }}
          >
            <ReviewCard r={r} />
          </div>
        ))}
      </div>

      {/* Nav arrows (desktop) */}
      <button
        onClick={() => goTo(activeIndex - 1)}
        aria-label="Previous"
        className="rc-arrow rc-arrow-prev"
        style={{
          position: "absolute",
          top: "calc(50% - 20px)",
          left: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: WHITE,
          border: "none",
          boxShadow: "0 2px 8px rgba(13,33,55,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        onClick={() => goTo(activeIndex + 1)}
        aria-label="Next"
        className="rc-arrow rc-arrow-next"
        style={{
          position: "absolute",
          top: "calc(50% - 20px)",
          right: -4,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: WHITE,
          border: "none",
          boxShadow: "0 2px 8px rgba(13,33,55,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 28 }}>
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: activeIndex === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: activeIndex === i ? ACCENT : "rgba(13,33,55,0.18)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rc-arrow { display: none !important; }
        }
      `}</style>
    </div>
  );
}
