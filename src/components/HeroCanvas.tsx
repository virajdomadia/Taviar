"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  sz: number;
  a: number;
  strand: boolean;
  len: number;
  ang: number;
  spin: number;
  ph: number;
}

interface Bokeh {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const pts: Particle[] = Array.from({ length: 68 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.42 + 0.07),
      sz: Math.random() * 1.7 + 0.35,
      a: Math.random() * 0.52 + 0.08,
      strand: i % 3 === 0,
      len: Math.random() * 16 + 7,
      ang: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.016,
      ph: Math.random() * Math.PI * 2,
    }));

    const bk: Bokeh[] = Array.from({ length: 4 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 88 + 28,
      vx: (Math.random() - 0.5) * 0.09,
      vy: (Math.random() - 0.5) * 0.09,
      a: Math.random() * 0.055 + 0.012,
    }));

    const draw = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      bk.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r * 2) b.x = w + b.r;
        if (b.x > w + b.r * 2) b.x = -b.r;
        if (b.y < -b.r * 2) b.y = h + b.r;
        if (b.y > h + b.r * 2) b.y = -b.r;
        const g = ctx.createRadialGradient(
          b.x - b.r * 0.3,
          b.y - b.r * 0.3,
          0,
          b.x,
          b.y,
          b.r
        );
        g.addColorStop(0, `rgba(245,166,35,${b.a * 2.6})`);
        g.addColorStop(0.5, `rgba(220,130,20,${b.a})`);
        g.addColorStop(1, "rgba(220,130,20,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.ang += p.spin;
        if (p.y < -30) {
          p.y = h + 30;
          p.x = Math.random() * w;
        }
        if (p.x < -40) p.x = w + 40;
        if (p.x > w + 40) p.x = -40;
        const tw = 0.62 + Math.sin(t * 0.00085 + p.ph) * 0.38;
        ctx.save();
        ctx.globalAlpha = p.a * tw;
        if (p.strand) {
          ctx.strokeStyle = `rgba(250,180,35,${p.a * tw * 1.25})`;
          ctx.lineWidth = p.sz * 0.6;
          ctx.lineCap = "round";
          const ex = p.x + Math.cos(p.ang) * p.len;
          const ey = p.y + Math.sin(p.ang) * p.len;
          const cx2 =
            (p.x + ex) / 2 + Math.cos(p.ang + 1.5) * p.len * 0.26;
          const cy2 =
            (p.y + ey) / 2 + Math.sin(p.ang + 1.5) * p.len * 0.26;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(cx2, cy2, ex, ey);
          ctx.stroke();
        } else {
          const g2 = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.sz * 2.8
          );
          g2.addColorStop(0, `rgba(255,215,100,${p.a * tw})`);
          g2.addColorStop(1, "rgba(245,166,35,0)");
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.sz * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
