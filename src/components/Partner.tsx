import Reveal from "./Reveal";
import Mandala from "./Mandala";

const partners = [
  {
    num: "01",
    name: "Distributor Network",
    desc: "Expand your business with a proven, fast-moving Ayurvedic skincare portfolio and protected territories.",
    cta: "Become a distributor",
  },
  {
    num: "02",
    name: "Third-Party Manufacturing",
    desc: "Custom contract manufacturing — formulation, filling, packaging, and full regulatory documentation.",
    cta: "Request a quote",
  },
  {
    num: "03",
    name: "Private Label Services",
    desc: "Launch your own branded skincare line with bespoke formulations and packaging support.",
    cta: "Start your brand",
  },
];

export default function Partner() {
  return (
    <section id="partner" className="relative overflow-hidden bg-white px-5 py-6 md:px-10 md:py-9 lg:px-20">
      <Mandala
        petals={10}
        className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 text-[#1E40AF]/[0.05]"
        style={{ animation: "v2Spin 140s linear infinite" }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-16 text-center md:mb-24">
          <div className="font-v2-body mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#1E40AF]" />
            Partner With Us
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#1E40AF]" />
          </div>
          <h2
            className="font-v2-head mb-6 leading-[1.1] font-medium tracking-[-1px] text-[#06123A]"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            Grow your business
            <br />
            <em className="v2-grad-text italic">with our capability.</em>
          </h2>
          <p className="font-v2-body mx-auto max-w-[640px] text-[15.5px] leading-[1.85] text-[#0B1F4E]/60">
            Three ways to work with a manufacturing partner built for
            quality, scale, and reliability.
          </p>
        </Reveal>

        {/* Steps with connector */}
        <div className="relative mb-16">
          <div
            className="absolute top-[52px] right-[16%] left-[16%] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(30,64,175,0.35) 20%, rgba(30,64,175,0.35) 80%, transparent)",
            }}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.num} delay={i * 140} variant="up">
                <div className="group relative h-full overflow-hidden rounded-[28px] v2-card-grad p-10 pt-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(30,64,175,0.18)]">
                  {/* Hover flood */}
                  <div
                    className="absolute inset-0 translate-y-full transition-transform duration-600 ease-[cubic-bezier(.65,.05,.36,1)] group-hover:translate-y-0"
                    style={{ background: "linear-gradient(155deg, #0B1F4E, #06123A 70%)" }}
                  />
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity delay-150 duration-700 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(109,141,255,0.35), transparent 70%)" }}
                  />

                  <div className="relative">
                    <div
                      className="font-v2-head mx-auto mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-full text-[24px] font-semibold text-white shadow-[0_14px_35px_rgba(30,64,175,0.4)] transition-transform duration-500 group-hover:scale-110"
                      style={{ background: "var(--v2-grad)" }}
                    >
                      {p.num}
                    </div>
                    <h3 className="font-v2-head mb-4 text-[25px] leading-[1.25] font-semibold text-[#06123A] transition-colors duration-400 group-hover:text-white">
                      {p.name}
                    </h3>
                    <p className="font-v2-body mb-8 text-[14px] leading-[1.85] text-[#0B1F4E]/60 transition-colors duration-400 group-hover:text-white/70">
                      {p.desc}
                    </p>
                    <span className="font-v2-body inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#1E40AF] uppercase transition-colors duration-400 group-hover:text-[#A5BCFF]">
                      {p.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="text-center">
          <a
            href="#contact"
            className="font-v2-body group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-11 py-[19px] text-[12.5px] font-bold tracking-[2.5px] text-white uppercase shadow-[0_18px_45px_rgba(30,64,175,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--v2-grad)" }}
          >
            <span className="relative z-10">Request Partnership</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            <span className="absolute inset-0 bg-[#06123A] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
