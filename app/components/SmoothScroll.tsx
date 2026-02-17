"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // Sync Lenis scroll position with GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Use GSAP ticker to drive Lenis instead of raw rAF
      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000); // GSAP ticker is in seconds, Lenis expects ms
      });
      gsap.ticker.lagSmoothing(0); // Prevent lag compensation for smoother feel

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
