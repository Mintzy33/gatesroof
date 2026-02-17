"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const NAVY = "#06263f";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("gates-loaded")) return;
    setShow(true);
    sessionStorage.setItem("gates-loaded", "1");
  }, []);

  useEffect(() => {
    if (!show || !overlayRef.current || !cloudRef.current || !glowRef.current || !flashRef.current) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        document.body.style.overflow = "";
      },
    });

    tl
      // 1. Glow pulses in behind logo
      .from(glowRef.current, {
        opacity: 0,
        scale: 0.3,
        duration: 0.4,
        ease: "power2.out",
      })
      // 2. Cloud scales up from small with blur (like materializing)
      .from(cloudRef.current, {
        opacity: 0,
        scale: 0.5,
        filter: "blur(12px)",
        duration: 0.5,
        ease: "back.out(1.4)",
      }, "<0.1")
      // 3. Glow breathes bigger
      .to(glowRef.current, {
        scale: 1.3,
        opacity: 0.8,
        duration: 0.4,
        ease: "sine.inOut",
      }, "<0.2")
      // 4. Brief hold — cloud floats slightly
      .to(cloudRef.current, {
        y: -8,
        duration: 0.3,
        ease: "sine.inOut",
      })
      .to(cloudRef.current, {
        y: 0,
        duration: 0.2,
        ease: "sine.inOut",
      })
      // 5. White flash
      .to(flashRef.current, {
        opacity: 1,
        duration: 0.08,
        ease: "power4.in",
      })
      .to(flashRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      })
      // 6. Overlay wipes up (starts after flash fully fades)
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power3.inOut",
      })
      // 7. Fade to fully invisible before unmount to prevent flicker
      .set(overlayRef.current, { opacity: 0 });
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

      {/* Cloud logo — massive */}
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

      {/* White flash overlay */}
      <div
        ref={flashRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "#FFFFFF",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}
