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
      <div className="v2-hero-ambient absolute inset-0" />
      <div className="v2-dots v2-hero-dots-mask absolute inset-0 opacity-50" />

      {/* Aurora blobs */}
      <div className="v2-hero-blob-1 absolute -top-32 rounded-full blur-3xl" />
      <div className="v2-hero-blob-2 absolute rounded-full blur-3xl" />

      {/* Giant rotating mandala, top-right */}
      <Mandala className="v2-hero-mandala-1 absolute -top-56 -right-56" />
      <Mandala petals={8} className="v2-hero-mandala-2 absolute -bottom-64 -left-48" />

      {/* Drifting leaves */}
      <Leaf className="v2-hero-leaf-1 absolute h-9 w-9" />
      <Leaf className="v2-hero-leaf-2 absolute h-6 w-6" />
      <Leaf className="v2-hero-leaf-3 absolute h-7 w-7" />

      {/* ---- Content ---- */}
      <div className="v2-hero-layer relative mx-auto grid w-full max-w-(--v2-hero-content-max-w) grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-(--v2-hero-grid-cols) lg:gap-6 lg:px-16">
        {/* Left copy */}
        <div className="text-center lg:text-left">
          <div className="v2-glass v2-hero-badge font-v2-body mx-auto mb-9 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-bold uppercase lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="v2-hero-badge-ping absolute inline-flex h-full w-full rounded-full" />
              <span className="v2-hero-badge-dot relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Established 2024 · Trusted Healthcare Partner
          </div>

          <h1 className="font-v2-head v2-hero-title mb-8 font-medium">
            Where <em className="v2-grad-text font-semibold italic">Ayurveda</em>
            <br />
            meets modern
            <br />
            health&nbsp;care.
          </h1>

          <p className="font-v2-body v2-hero-copy mx-auto mb-11 font-normal lg:mx-0">
            Every product we deliver reflects our commitment to quality,
            authenticity, and excellence in healthcare — 5,000 years of wisdom,
            held to today&apos;s standards.
          </p>

          <div className="v2-hero-cta-row flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
            <a
              href="#partner"
              className="font-v2-body v2-hero-cta-primary group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 font-bold text-white uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Partner With Us</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
              <span className="v2-hero-cta-primary-overlay absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </a>
            <a
              href="#products"
              className="font-v2-body v2-hero-cta-secondary inline-flex items-center gap-2.5 rounded-full border bg-white/60 px-8 font-bold uppercase backdrop-blur transition-all duration-300"
            >
              Explore Products ↓
            </a>
          </div>
        </div>

        {/* Right — orbital product showcase */}
        <div className="v2-hero-showcase relative hidden items-center justify-center lg:flex">
          <div className="v2-orbit-wrap v2-hero-orbit-wrap relative">
            {/* Halo rings */}
            <div className="v2-hero-ring absolute rounded-full border" />
            <div className="v2-hero-ring-dashed absolute rounded-full border border-dashed" />
            <div className="v2-hero-ring-glow absolute rounded-full" />
            <Mandala className="v2-hero-mandala-3 absolute" />

            {/* Center — featured product */}
            <div className="v2-hero-center absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full">
              <div key={featured} className="v2-hero-frame relative">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="300px"
                  className="v2-hero-frame-image object-contain"
                  priority
                />
              </div>
              <div key={`t-${featured}`} className="v2-hero-product-name-wrap mt-3 text-center">
                <div className="font-v2-head v2-hero-product-name font-semibold">
                  {current.name}
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
                          className={`v2-hero-orbit-btn flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                            i === featured
                              ? "v2-glass v2-hero-orbit-btn-active ring-2"
                              : "v2-glass"
                          }`}
                        >
                          <div className="v2-hero-orbit-thumb relative">
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
      <div className="v2-hero-layer v2-hero-scroll-hint absolute bottom-9 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <div className="font-v2-body v2-hero-scroll-label uppercase">
            Scroll
          </div>
          <div className="v2-hero-scroll-line h-10 w-px" />
        </div>
      </div>
    </section>
  );
}
