"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Mandala, { Leaf } from "./Mandala";

const orbitProducts = [
  { name: "D-Stress", tag: "Mind & Sleep", image: "/product-dstress-removebg-preview.png" },
  { name: "GluOK", tag: "Sugar Balance", image: "/product-gluok-removebg-preview.png" },
  { name: "Relievain", tag: "Joint Relief", image: "/product-relievain-removebg-preview.png" },
  { name: "Muvoquick", tag: "Muscle & Nerve", image: "/product-muvoquick-removebg-preview.png" },
  { name: "OrthoMantra", tag: "Bone Health", image: "/product-orthomantra-removebg-preview.png" },
  { name: "Salt-ed", tag: "Men's Vitality", image: "/product-salted-removebg-preview.png" },
  { name: "Kid-UBS", tag: "Urinary Care", image: "/product-respiquite-removebg-preview.png" },
];

const ORBIT_RADIUS = 265;

export default function Hero() {
  const [featured, setFeatured] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setFeatured((p) => (p + 1) % orbitProducts.length),
      3600
    );
    return () => clearInterval(t);
  }, []);

  const current = orbitProducts[featured];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-32 pb-16 lg:pt-36"
    >
      {/* ---- Ambient background ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 70% 8%, rgba(109,141,255,0.22), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 90%, rgba(49,46,129,0.14), transparent 60%), linear-gradient(175deg, #F4F7FD 0%, #FFFFFF 55%, #E9EEFB 100%)",
        }}
      />
      <div className="v2-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,black,transparent)]" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-32 right-[8%] h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.28), transparent 65%)",
          animation: "v2Breathe 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-140px] left-[-80px] h-[460px] w-[460px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(30,64,175,0.2), transparent 65%)",
          animation: "v2Breathe 12s ease-in-out 2s infinite",
        }}
      />

      {/* Giant rotating mandala, top-right */}
      <Mandala
        className="absolute -top-56 -right-56 h-[620px] w-[620px] text-[#1E40AF]/25"
        style={{ animation: "v2Spin 90s linear infinite" }}
      />
      <Mandala
        petals={8}
        className="absolute -bottom-64 -left-48 h-[520px] w-[520px] text-[#1D4ED8]/20"
        style={{ animation: "v2SpinRev 110s linear infinite" }}
      />

      {/* Drifting leaves */}
      <Leaf
        className="absolute top-[22%] left-[6%] h-9 w-9 text-[#1D4ED8]/40"
        style={{ animation: "v2Drift1 11s ease-in-out infinite" }}
      />
      <Leaf
        className="absolute top-[16%] right-[38%] h-6 w-6 text-[#1E40AF]/30"
        style={{ animation: "v2Drift2 13s ease-in-out 1.5s infinite" }}
      />
      <Leaf
        className="absolute bottom-[18%] left-[38%] h-7 w-7 text-[#312E81]/25"
        style={{ animation: "v2Drift3 15s ease-in-out 3s infinite" }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-16">
        {/* Left copy */}
        <div className="text-center lg:text-left">
          <div
            className="v2-glass font-v2-body mx-auto mb-9 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[10.5px] font-bold tracking-[3px] text-[#1E40AF] uppercase lg:mx-0"
            style={{ animation: "v2Rise .9s ease both" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-[#1D4ED8]"
                style={{ animation: "v2Ping 1.8s cubic-bezier(0,0,.2,1) infinite" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1E40AF]" />
            </span>
            Established 2024 · Trusted Healthcare Partner
          </div>

          <h1
            className="font-v2-head mb-8 leading-[1.02] font-medium tracking-[-2.5px] text-[#06123A]"
            style={{
              fontSize: "clamp(48px, 5.6vw, 88px)",
              animation: "v2Rise 1s .12s ease both",
            }}
          >
            Where <em className="v2-grad-text font-semibold italic">Ayurveda</em>
            <br />
            meets modern
            <br />
            health&nbsp;care.
          </h1>

          <p
            className="font-v2-body mx-auto mb-11 max-w-[480px] text-[17px] leading-[1.8] font-normal text-[#0B1F4E]/65 lg:mx-0"
            style={{ animation: "v2Rise 1s .28s ease both" }}
          >
            Every product we deliver reflects our commitment to quality,
            authenticity, and excellence in healthcare — 5,000 years of wisdom,
            held to today&apos;s standards.
          </p>

          <div
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
            style={{ animation: "v2Rise 1s .42s ease both" }}
          >
            <a
              href="#partner"
              className="font-v2-body group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 py-[18px] text-[12.5px] font-bold tracking-[2.5px] text-white uppercase shadow-[0_18px_45px_rgba(30,64,175,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--v2-grad)" }}
            >
              <span className="relative z-10">Partner With Us</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
              <span className="absolute inset-0 bg-[#06123A] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </a>
            <a
              href="#products"
              className="font-v2-body inline-flex items-center gap-2.5 rounded-full border border-[#1E40AF]/25 bg-white/60 px-8 py-[17px] text-[12.5px] font-bold tracking-[2px] text-[#0B1F4E] uppercase backdrop-blur transition-all duration-300 hover:border-[#1E40AF]/60 hover:bg-[#E9EEFB]"
            >
              Explore Products ↓
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="font-v2-body mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[10.5px] font-bold tracking-[2px] text-[#0B1F4E]/45 uppercase lg:justify-start"
            style={{ animation: "v2Rise 1s .56s ease both" }}
          >
            <span>GMP Certified</span>
            <span className="text-[#1D4ED8]">✦</span>
            <span>AYUSH Licensed</span>
            <span className="text-[#1D4ED8]">✦</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>

        {/* Right — orbital product showcase */}
        <div
          className="relative hidden items-center justify-center lg:flex"
          style={{ animation: "v2Rise 1.1s .3s ease both" }}
        >
          <div className="v2-orbit-wrap relative h-[620px] w-[620px]">
            {/* Halo rings */}
            <div className="absolute inset-[45px] rounded-full border border-[#1E40AF]/15" />
            <div className="absolute inset-[45px] rounded-full border border-dashed border-[#1D4ED8]/25" style={{ animation: "v2Spin 120s linear infinite" }} />
            <div
              className="absolute inset-[120px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(109,141,255,0.16), transparent 70%)",
                animation: "v2Breathe 7s ease-in-out infinite",
              }}
            />
            <Mandala
              className="absolute inset-[92px] text-[#1E40AF]/30"
              style={{ animation: "v2Spin 70s linear infinite" }}
            />

            {/* Center — featured product */}
            <div className="v2-glass absolute top-1/2 left-1/2 flex h-[264px] w-[264px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full shadow-[0_30px_80px_rgba(30,64,175,0.22)]">
              <div key={featured} className="relative h-[150px] w-[150px]" style={{ animation: "v2FadeSwap .7s cubic-bezier(.16,1,.3,1) both" }}>
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="150px"
                  className="object-contain drop-shadow-[0_18px_24px_rgba(11,31,78,0.25)]"
                  priority
                />
              </div>
              <div key={`t-${featured}`} className="mt-3 text-center" style={{ animation: "v2Rise .6s .1s ease both" }}>
                <div className="font-v2-head text-[20px] font-semibold text-[#06123A]">
                  {current.name}
                </div>
                <div className="font-v2-body text-[9px] font-bold tracking-[2.5px] text-[#1E40AF] uppercase">
                  {current.tag}
                </div>
              </div>
            </div>

            {/* Orbiting products */}
            <div className="v2-orbit absolute inset-0">
              {orbitProducts.map((p, i) => {
                const angle = (360 / orbitProducts.length) * i - 90;
                return (
                  <div
                    key={p.name}
                    className="absolute top-1/2 left-1/2 h-0 w-0"
                    style={{ transform: `rotate(${angle}deg) translate(${ORBIT_RADIUS}px)` }}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <div className="v2-orbit-counter">
                        <button
                          type="button"
                          onClick={() => setFeatured(i)}
                          aria-label={`Show ${p.name}`}
                          className={`-ml-[44px] -mt-[44px] flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                            i === featured
                              ? "v2-glass ring-2 ring-[#1D4ED8]/70 shadow-[0_16px_40px_rgba(29,78,216,0.35)]"
                              : "v2-glass"
                          }`}
                        >
                          <div className="relative h-[58px] w-[58px]">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="58px"
                              className="object-contain"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-9 left-1/2 z-[2] hidden -translate-x-1/2 md:block"
        style={{ animation: "v2ScrollHint 2.4s ease-in-out infinite" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="font-v2-body text-[9.5px] tracking-[4px] text-[#0B1F4E]/50 uppercase">
            Scroll
          </div>
          <div className="h-10 w-px bg-gradient-to-b from-[#1E40AF]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
