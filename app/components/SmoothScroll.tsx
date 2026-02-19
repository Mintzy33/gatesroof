"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let tickerCallback: ((time: number) => void) | null = null;
    let gsapRef: typeof import("gsap").default | null = null;

    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, gsapMod, { ScrollTrigger }]) => {
      const gsap = gsapMod.default;
      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();
    });

    return () => {
      if (tickerCallback && gsapRef) gsapRef.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
