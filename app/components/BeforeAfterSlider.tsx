"use client";
import { useState, useRef, useCallback, useEffect } from "react";

const NAVY = "#0D2137";
const TEXT_LIGHT = "#64748B";

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

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // Prevent text selection while dragging
  useEffect(() => {
    const prevent = (e: Event) => { if (dragging.current) e.preventDefault(); };
    document.addEventListener("selectstart", prevent);
    return () => document.removeEventListener("selectstart", prevent);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
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
      }}
    >
      {/* BEFORE image (full background) */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "#94a3b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Before Photo</span>
      </div>

      {/* AFTER image (clipped from the left at divider position) */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "#475569",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        clipPath: `inset(0 0 0 ${pos}%)`,
      }}>
        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>After Photo</span>
      </div>

      {/* BEFORE / AFTER labels */}
      <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.55)", borderRadius: 6, padding: "4px 12px", pointerEvents: "none" }}>
        <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>Before</span>
      </div>
      <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.55)", borderRadius: 6, padding: "4px 12px", pointerEvents: "none" }}>
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
    </div>
  );
}
