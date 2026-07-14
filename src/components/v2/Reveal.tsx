"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "zoom" | "fade";

interface Props {
  children: ReactNode;
  variant?: Variant;
  /** transition delay in ms */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("v2-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-v={variant}
      className={`v2-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
