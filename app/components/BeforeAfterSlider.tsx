"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const NAVY = "#0D2137";

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      dragging.current = true;
      el.setPointerCapture(e.pointerId);
      updatePos(e.clientX);
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      updatePos(e.clientX);
    };

    const onUp = () => {
      dragging.current = false;
    };

    const onSelect = (e: Event) => {
      if (dragging.current) e.preventDefault();
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    document.addEventListener("selectstart", onSelect);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      document.removeEventListener("selectstart", onSelect);
    };
  }, [updatePos]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 900,
        margin: "0 auto",
        aspectRatio: "16 / 10",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        touchAction: "pan-y",
        background: "#1a1a1a",
      }}
    >
      {/* BEFORE image (full background) */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Image
          src="/images/before.jpg"
          alt="Roof before replacement with aged shake shingles"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: "cover" }}
          priority
          draggable={false}
        />
      </div>

      {/* AFTER image (clipped from the left at divider position) */}
      <div style={{
        position: "absolute",
        inset: 0,
        clipPath: `inset(0 0 0 ${pos}%)`,
        pointerEvents: "none",
      }}>
        <Image
          src="/images/after.jpg"
          alt="Roof after replacement with new DaVinci synthetic slate"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: "cover" }}
          priority
          draggable={false}
        />
      </div>

      {/* BEFORE / AFTER labels */}
      <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "4px 12px", pointerEvents: "none" }}>
        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>Before</span>
      </div>
      <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "4px 12px", pointerEvents: "none" }}>
        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>After</span>
      </div>

      {/* Divider line */}
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: `${pos}%`,
        width: 3,
        background: "#fff",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
      }} />

      {/* Drag handle */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: `${pos}%`,
        transform: "translate(-50%, -50%)",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Invisible interaction layer on top of everything */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        cursor: "ew-resize",
      }} />
    </div>
  );
}
