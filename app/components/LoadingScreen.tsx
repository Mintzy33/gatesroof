"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const NAVY = "#06263f";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("gates-loaded")) return;
    setShow(true);
    sessionStorage.setItem("gates-loaded", "1");
  }, []);

  useEffect(() => {
    if (!show || !overlayRef.current || !logoRef.current) return;

    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        document.body.style.overflow = "";
      },
    });

    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.3,
      ease: "power2.out",
    })
    .to({}, { duration: 0.2 }) // brief hold
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.inOut",
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
      }}
    >
      <div ref={logoRef} style={{ textAlign: "center" }}>
        <Image
          src="/logo.png"
          alt="Gates Enterprises"
          width={200}
          height={64}
          style={{ height: 64, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: 16 }}
          priority
        />
        <div style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: "0.04em",
        }}>
          GATES ENTERPRISES LLC
        </div>
      </div>
    </div>
  );
}
