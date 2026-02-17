"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      if (y < 300) {
        // Hidden at top of page
        setVisible(false);
      } else if (isMobile) {
        // Mobile: show on scroll-up, hide on scroll-down
        setVisible(y < lastY.current);
      } else {
        // Desktop: always show after 300px
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const firePixel = () => {
    if (typeof window !== "undefined" && (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq)
      (window as unknown as { fbq: (...a: unknown[]) => void }).fbq("track", "Contact", { content_name: "phone_call" });
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 998,
      background: "rgba(13,33,55,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}>
        {/* Phone link */}
        <a
          href="tel:7207663377"
          onClick={firePixel}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            padding: "10px 20px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (720) 766-3377
        </a>

        {/* Free Quote button */}
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: ACCENT,
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            padding: "10px 24px",
            borderRadius: 10,
            whiteSpace: "nowrap",
          }}
        >
          Free Quote
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
