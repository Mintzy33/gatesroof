"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── ScrollReveal ─── replaces FadeIn ─── */
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  duration?: number;
  distance?: number;
  scrub?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.9,
  distance = 50,
  scrub = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay, ease: "power3.out" };
    if (direction === "up") fromVars.y = distance;
    else if (direction === "left") fromVars.x = distance;
    else if (direction === "right") fromVars.x = -distance;
    else if (direction === "scale") { fromVars.scale = 0.92; fromVars.y = distance * 0.6; }

    const tween = gsap.from(el, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        end: scrub ? "top 40%" : undefined,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none none",
      },
    });

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [delay, direction, duration, distance, scrub]);

  return <div ref={ref}>{children}</div>;
}

/* ─── StaggerCards ─── batch-reveal children ─── */
interface StaggerCardsProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "left" | "scale";
  stagger?: number;
  distance?: number;
}

export function StaggerCards({
  children,
  className,
  style,
  direction = "up",
  stagger = 0.12,
  distance = 50,
}: StaggerCardsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const cards = container.children;
    if (!cards.length) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
      stagger,
    };

    if (direction === "up") fromVars.y = distance;
    else if (direction === "left") fromVars.x = distance;
    else if (direction === "scale") { fromVars.scale = 0.88; fromVars.y = distance * 0.5; }

    const tween = gsap.from(cards, {
      ...fromVars,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [direction, stagger, distance]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/* ─── CounterGSAP ─── scroll-triggered number counter ─── */
export function CounterGSAP({ end, suffix = "", duration = 2.2, delay = 0 }: { end: number; suffix?: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const tweenVars: gsap.TweenVars = {
      val: end,
      duration,
      delay,
      ease: "power2.out",
      snap: { val: 1 },
      onUpdate: () => setDisplay(obj.val.toLocaleString()),
    };

    // If element is already in the viewport (e.g. hero), play on mount with delay
    // Otherwise use ScrollTrigger for below-fold sections
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inViewport) {
      tweenVars.scrollTrigger = {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      };
    }

    const tween = gsap.to(obj, tweenVars);

    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [end, duration, delay]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ─── PhoneLink ─── (unchanged, just re-exported for convenience) ─── */
export function PhoneLink({ children, style }: { children: ReactNode; style: React.CSSProperties }) {
  return (
    <a href="tel:7207663377" onClick={() => {
      if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq)
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Contact", { content_name: "phone_call" });
    }} style={style}>{children}</a>
  );
}
