import HeroCanvas from "./HeroCanvas";
import Bottle from "./Bottle";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-dark-green overflow-hidden flex items-center pt-36 pb-20 md:pt-40 lg:pt-44"
    >
      <HeroCanvas />

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 68% 52%, rgba(212,168,83,0.1) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[60px]">
        {/* Left copy */}
        <div className="text-center lg:text-left">
          <div
            className="font-body text-[10.5px] tracking-[5px] text-gold/70 uppercase mb-13"
            style={{ animation: "fadeInUp .8s ease both" }}
          >
            Established 2024 · Trusted Healthcare Partner
          </div>

          <h1
            className="font-heading font-light text-cream leading-[0.93] tracking-[-2px] mb-[50px]"
            style={{
              fontSize: "clamp(58px, 6.2vw, 96px)",
              animation: "fadeInUp .9s .12s ease both",
            }}
          >
            Where
            <br />
            <em className="italic font-light">Ayurveda</em>
            <br />
            Meets Modern Health Care
          </h1>

          <div
            className="w-12 h-px bg-gold/50 mb-9 mx-auto lg:mx-0"
            style={{ animation: "fadeInUp .9s .22s ease both" }}
          />

          <p
            className="font-heading text-lg md:text-xl font-light italic text-cream/[0.52] leading-[1.65] tracking-[0.3px] max-w-[420px] mx-auto lg:mx-0 mb-14"
            style={{ animation: "fadeInUp .9s .32s ease both" }}
          >
            Every product we deliver reflects our commitment to quality,
            authenticity, and excellence in healthcare.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-5"
            style={{ animation: "fadeInUp .9s .46s ease both" }}
          >
            <a
              href="#products"
              className="font-body text-[11px] tracking-[3px] font-semibold text-dark-green bg-gold uppercase no-underline px-10 py-[17px] inline-block transition-colors duration-300 hover:bg-gold-hover"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="font-body text-[11px] tracking-[2px] text-cream/[0.58] uppercase no-underline border-b border-gold/30 pb-0.5 transition-colors duration-[250ms] hover:text-cream"
            >
              About Taviar →
            </a>
          </div>
        </div>

        {/* Right bottle */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
          {/* Glow aura */}
          <div
            className="absolute w-[380px] h-[380px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)",
              animation: "glowAura 4.5s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[220px] h-[640px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,168,83,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Floating spheres */}
          <div
            className="absolute top-[44px] right-9 w-16 h-16 rounded-full border border-white/[0.22]"
            style={{
              background:
                "radial-gradient(circle at 33% 33%, rgba(255,255,255,0.55) 0%, rgba(195,225,210,0.2) 40%, rgba(80,140,105,0.08) 100%)",
              boxShadow:
                "0 0 24px rgba(212,168,83,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
              animation: "floatS1 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[76px] left-4 w-[92px] h-[92px] rounded-full border border-white/[0.16]"
            style={{
              background:
                "radial-gradient(circle at 33% 33%, rgba(255,255,255,0.45) 0%, rgba(212,168,83,0.18) 45%, rgba(180,140,60,0.07) 100%)",
              boxShadow:
                "0 0 36px rgba(212,168,83,0.1), inset 0 1px 0 rgba(255,255,255,0.35)",
              animation: "floatS2 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[118px] left-14 w-9 h-9 rounded-full border border-white/[0.28]"
            style={{
              background:
                "radial-gradient(circle at 33% 33%, rgba(255,255,255,0.65) 0%, rgba(195,225,210,0.3) 50%, rgba(80,140,105,0.1) 100%)",
              animation: "floatS3 6s ease-in-out infinite",
            }}
          />

          <Bottle />

          {/* Floor reflection */}
          <div
            className="absolute bottom-[22px] left-1/2 -translate-x-1/2 w-[200px] h-[18px] rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,168,83,0.16) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-11 left-1/2 z-[2]"
        style={{ animation: "scrollDown 2.2s ease-in-out infinite" }}
      >
        <div className="flex flex-col items-center gap-2.5">
          <div className="font-body text-[10px] tracking-[3.5px] text-cream/[0.38] uppercase">
            Scroll
          </div>
          <div className="w-px h-11 bg-gradient-to-b from-gold/55 to-transparent" />
        </div>
      </div>
    </section>
  );
}
