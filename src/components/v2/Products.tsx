"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  pack: string;
  image: string;
  /** true when the image is a jpg on white that needs blend-multiply */
  blend?: boolean;
  benefits: string[];
}

const products: Product[] = [
  {
    id: "d-stress",
    name: "D-Stress",
    tagline: "Empowering a healthier mind, naturally.",
    category: "Mind & Sleep",
    pack: "30 Capsules",
    image: "/product-dstress-removebg-preview.png",
    benefits: [
      "Natural Herbal Formula",
      "Helps Reduce Everyday Stress",
      "Calms Your Mind",
      "Improves Your Quality of Sleep",
      "Promotes Mental Calmness",
      "Enhances Focus & Concentration",
      "Supports Emotional Wellness",
      "FSSAI Certified Nutraceutical",
    ],
  },
  {
    id: "gluok",
    name: "GluOK",
    tagline: "Balance your blood sugar, naturally.",
    category: "Sugar Balance",
    pack: "90 Tablets",
    image: "/product-gluok-removebg-preview.png",
    benefits: [
      "Helps Maintain Healthy Blood Sugar Levels",
      "Supports Healthy Glucose Metabolism",
      "Promotes Better Insulin Function",
      "Supports Pancreatic Health",
      "Helps Reduce Sugar Cravings",
      "Rich in Powerful Ayurvedic Herbal Extracts",
      "Supports Overall Metabolic Wellness",
    ],
  },
  {
    id: "relievain",
    name: "Relievain",
    tagline: "Relief that moves with you.",
    category: "Joint Relief",
    pack: "30 Tablets",
    image: "/product-relievain-removebg-preview.png",
    benefits: [
      "Helps Relieve Joint & Muscle Discomfort",
      "Supports Healthy Joint Mobility",
      "Helps Reduce Inflammation Naturally",
      "Promotes Flexibility & Active Living",
      "Enriched with Powerful Ayurvedic Herbs",
    ],
  },
  {
    id: "muvoquick",
    name: "Muvoquick",
    tagline: "Strength in every step.",
    category: "Muscle & Nerve",
    pack: "100 gm",
    image: "/product-muvoquick-removebg-preview.png",
    benefits: [
      "Supports Muscle Strength & Recovery",
      "Promotes Joint Flexibility & Mobility",
      "Supports Healthy Nerve Function",
      "Helps Reduce Physical Fatigue",
      "Enriched with Powerful Ayurvedic Herbs",
    ],
  },
  {
    id: "orthomantra",
    name: "OrthoMantra",
    tagline: "Strength that supports every step.",
    category: "Bone Health",
    pack: "60 Tablets",
    image: "/product-orthomantra-removebg-preview.png",
    benefits: [
      "Supports Bone Strength & Density",
      "Promotes Healthy Joint Function",
      "Helps Improve Mobility & Flexibility",
      "Supports Natural Bone Healing",
      "Enriched with Premium Ayurvedic Herbs",
    ],
  },
  {
    id: "salt-ed",
    name: "Salt-ed",
    tagline: "Power your performance.",
    category: "Men's Vitality",
    pack: "2 Capsules",
    image: "/product-salted-removebg-preview.png",
    benefits: [
      "Supports Men's Vitality",
      "Enhances Stamina & Endurance",
      "Promotes Natural Energy Levels",
      "Supports Overall Male Wellness",
      "Herbal Formula for Daily Performance",
    ],
  },
  {
    id: "fem-fit",
    name: "FEM-FIT Syrup",
    tagline: "Care for her, every cycle.",
    category: "Women's Wellness",
    pack: "225ml",
    image: "/product-femfit.jpg",
    blend: true,
    benefits: [
      "Supports Uterine Health",
      "Promotes Menstrual Balance",
      "Helps Ease PMS Symptoms",
      "Supports Hormonal Wellness",
      "Promotes Female Reproductive Health",
      "Sugar-Free Ayurvedic Formula",
    ],
  },
  {
    id: "kid-ubs",
    name: "Kid-UBS Syrup",
    tagline: "Gentle care for growing bodies.",
    category: "Urinary Care",
    pack: "225ml",
    image: "/product-respiquite-removebg-preview.png",
    benefits: [
      "Supports Urinary System Health",
      "Promotes Healthy Urinary Flow",
      "Helps Relieve Urinary Discomfort",
      "Helps Reduce Burning Sensation",
      "Supports Urinary Tract Wellness",
      "Sugar-Free Ayurvedic Formula",
    ],
  },
];

function ProductCard({ p, index }: { p: Product; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`v2-flip h-[480px] ${flipped ? "v2-flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
      aria-label={`${p.name} — tap to ${flipped ? "hide" : "view"} benefits`}
    >
      <div className="v2-flip-inner">
        {/* FRONT */}
        <div className="v2-flip-face group absolute inset-0 flex cursor-pointer flex-col overflow-hidden rounded-[28px] v2-card-grad p-7 transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(30,64,175,0.18)]">
          <div className="flex items-start justify-between">
            <span className="font-v2-body rounded-full bg-[#E9EEFB] px-3.5 py-1.5 text-[9px] font-bold tracking-[1.8px] text-[#1E40AF] uppercase">
              {p.category}
            </span>
            <span className="font-v2-body text-[10px] font-bold tracking-[1.5px] text-[#0B1F4E]/35 uppercase">
              {p.pack}
            </span>
          </div>

          {/* Product visual */}
          <div className="relative mx-auto my-4 flex h-[220px] w-full flex-1 items-center justify-center">
            <div
              className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(109,141,255,0.3), rgba(30,64,175,0.08) 60%, transparent 75%)",
                animation: "v2Breathe 6s ease-in-out infinite",
                animationDelay: `${index * 0.6}s`,
              }}
            />
            <div
              className="relative h-[210px] w-[86%] transition-transform duration-700 group-hover:scale-108 group-hover:-rotate-2"
              style={{ animation: "v2Float 7s ease-in-out infinite", animationDelay: `${index * 0.5}s` }}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 22vw"
                className={`object-contain ${
                  p.blend
                    ? "mix-blend-multiply"
                    : "drop-shadow-[0_22px_28px_rgba(11,31,78,0.22)]"
                }`}
              />
            </div>
          </div>

          <h3 className="font-v2-head text-[26px] leading-tight font-semibold text-[#06123A]">
            {p.name}
          </h3>
          <p className="font-v2-body mt-1.5 mb-5 text-[13px] italic leading-snug text-[#0B1F4E]/55">
            {p.tagline}
          </p>
          <div className="font-v2-body flex items-center justify-between border-t border-[#1E40AF]/10 pt-4 text-[10.5px] font-bold tracking-[2px] text-[#1E40AF] uppercase">
            <span>View benefits</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9EEFB] transition-transform duration-500 group-hover:rotate-180">
              ⟳
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="v2-flip-face v2-flip-back flex cursor-pointer flex-col overflow-hidden rounded-[28px] p-8 text-white"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 80% 0%, rgba(109,141,255,0.35), transparent 55%), linear-gradient(155deg, #0B1F4E, #06123A 70%)",
          }}
        >
          <div className="font-v2-body mb-1 text-[9.5px] font-bold tracking-[2.5px] text-[#A5BCFF] uppercase">
            {p.category} · {p.pack}
          </div>
          <h3 className="font-v2-head mb-6 text-[26px] font-semibold">{p.name}</h3>
          <ul className="flex-1 space-y-3 overflow-auto pr-1">
            {p.benefits.map((b) => (
              <li key={b} className="font-v2-body flex items-start gap-3 text-[13px] leading-snug text-white/80">
                <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#6D8DFF]" aria-hidden>
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.4" />
                  <path d="m6.5 10.5 2.3 2.3L14 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="font-v2-body mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-[10.5px] font-bold tracking-[2px] text-[#A5BCFF] uppercase">
            <span>Back to product</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">⟲</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-36 lg:px-20">
      <div
        className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.1), transparent 65%)",
          animation: "v2Breathe 11s ease-in-out infinite",
        }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <Reveal className="mb-16 text-center md:mb-24">
          <div className="font-v2-body mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#1E40AF]" />
            Our Premium Collection
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#1E40AF]" />
          </div>
          <h2
            className="font-v2-head mb-6 leading-[1.1] font-medium tracking-[-1px] text-[#06123A]"
            style={{ fontSize: "clamp(38px, 4.6vw, 64px)" }}
          >
            A complete portfolio, for
            <br />
            <em className="v2-grad-text italic">every wellness concern.</em>
          </h2>
          <p className="font-v2-body mx-auto max-w-[620px] text-[15.5px] leading-[1.85] text-[#0B1F4E]/60">
            Handcrafted Ayurvedic formulations, backed by quality certifications
            and trusted by thousands across the country. Tap any card to reveal
            its full benefits.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 100} variant="zoom">
              <ProductCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
