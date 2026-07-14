"use client";

import HeroCanvas from "./HeroCanvas";
import ProductCarousel from "./ProductCarousel";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center pt-36 pb-20 md:pt-40 lg:pt-44"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 0%, rgba(30,64,175,0.32), transparent 70%), linear-gradient(160deg, #E4EAF7 0%, #F6F8FD 40%, #FFFFFF 100%)",
        }}
      />

      <HeroCanvas />


      <div className="relative z-[2] w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[60px]">
        {/* Left copy */}
        <div className="text-center lg:text-left">
          <div
            className="font-body text-[10.5px] tracking-[5px] text-gold uppercase mb-13 font-bold"
            style={{ animation: "fadeInUp .8s ease both" }}
          >
            Established 2024 · Trusted Healthcare Partner
          </div>

          <h1
            className="font-heading font-light text-dark-green leading-[0.93] tracking-[-2px] mb-[50px]"
            style={{
              fontSize: "clamp(58px, 6.2vw, 96px)",
              animation: "fadeInUp .9s .12s ease both",
            }}
          >
            Where
            <br />
            <em className="italic font-bold">Ayurveda</em>
            <br />
            Meets Modern Health Care
          </h1>

          <p
            className="font-heading text-lg md:text-xl font-bold italic text-dark-green/85 leading-[1.65] tracking-[0.3px] max-w-[500px] mx-auto lg:mx-0 mb-14"
            style={{ animation: "fadeInUp .9s .32s ease both" }}
          >
            Every product we deliver reflects our commitment to quality,
            authenticity, and excellence in healthcare.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-5"
            style={{ animation: "fadeInUp .9s .46s ease both" }}
          >
            <button
              type="button"
              onClick={() => scrollToSection("partner")}
              className="font-body text-[14px] tracking-[3px] font-bold text-white bg-gold uppercase px-10 py-[17px] inline-block transition-colors duration-300 hover:bg-gold-hover cursor-pointer"
            >
              Partner With Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="font-body text-[14px] tracking-[2px] font-bold text-dark-green/70 uppercase border-b border-dark-green/20 pb-0.5 transition-colors duration-[250ms] hover:text-dark-green hover:border-dark-green cursor-pointer"
            >
              About Taviar →
            </button>
          </div>
        </div>

        {/* Right product carousel */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
          <ProductCarousel />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-11 left-1/2 z-[2]"
        style={{ animation: "scrollDown 2.2s ease-in-out infinite" }}
      >
        <div className="flex flex-col items-center gap-2.5">
          <div className="font-body text-[10px] tracking-[3.5px] text-dark-green/45 uppercase">
            Scroll
          </div>
          <div className="w-px h-11 bg-gradient-to-b from-gold/55 to-transparent" />
        </div>
      </div>
    </section>
  );
}
