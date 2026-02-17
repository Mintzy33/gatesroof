"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

export function FadeIn({ children, delay = 0, d = "up" }: { children: ReactNode; delay?: number; d?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  const translate = d === "left" ? "translateX(40px)" : "translateY(30px)";
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : translate,
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

export function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        obs.disconnect();
        const duration = 2000;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.floor(eased * end));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function PhoneLink({ children, style }: { children: ReactNode; style: React.CSSProperties }) {
  return (
    <a href="tel:7207663377" onClick={() => { if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Contact", { content_name: "phone_call" }); }} style={style}>{children}</a>
  );
}
