"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NAVY = "#06263f";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("gates-loaded")) return;
    setShow(true);
    sessionStorage.setItem("gates-loaded", "1");
  }, []);

  useEffect(() => {
    if (!show || !overlayRef.current || !cloudRef.current || !glowRef.current) return;

    document.body.style.overflow = "hidden";

    const overlay = overlayRef.current;
    const cloud = cloudRef.current;
    const glow = glowRef.current;

    import("gsap").then(({ default: gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (overlay) {
            overlay.style.visibility = "hidden";
            overlay.style.pointerEvents = "none";
          }
          document.body.style.overflow = "";
          requestAnimationFrame(() => setShow(false));
        },
      });

      tl
        .from(glow, {
          opacity: 0,
          scale: 0.3,
          duration: 0.4,
          ease: "power2.out",
        })
        .from(cloud, {
          opacity: 0,
          scale: 0.5,
          filter: "blur(12px)",
          duration: 0.5,
          ease: "back.out(1.4)",
        }, "<0.1")
        .to(glow, {
          scale: 1.3,
          opacity: 0.8,
          duration: 0.4,
          ease: "sine.inOut",
        }, "<0.2")
        .to(cloud, {
          y: -8,
          duration: 0.3,
          ease: "sine.inOut",
        })
        .to(cloud, {
          y: 0,
          duration: 0.2,
          ease: "sine.inOut",
        })
        .to({}, { duration: 0.15 })
        .to(overlay, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
    });
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: NAVY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.05) 50%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Cloud logo */}
      <div ref={cloudRef} style={{ position: "relative", zIndex: 2 }}>
        <Image
          src="/logo.png"
          alt="Gates Enterprises"
          width={800}
          height={400}
          style={{
            height: "clamp(200px, 40vh, 400px)",
            width: "auto",
            objectFit: "contain",
            filter: "brightness(0) invert(1) drop-shadow(0 0 60px rgba(37,99,235,0.3))",
          }}
          priority
        />
      </div>
    </div>
  );
}
