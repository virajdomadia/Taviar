"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({ children, className = "", delay = 0, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -56px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay === 1 ? "d1" : delay === 2 ? "d2" : delay === 3 ? "d3" : delay === 4 ? "d4" : "";

  return (
    <div ref={ref} className={`sr ${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
