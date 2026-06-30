import ScrollReveal from "./ScrollReveal";

const partners = [
  { num: "01", name: "Distributor Network", desc: "Expand your business with a proven, fast-moving Ayurvedic skincare portfolio and protected territories.", cta: "Become a distributor" },
  { num: "02", name: "Third-Party Manufacturing", desc: "Custom contract manufacturing — formulation, filling, packaging, and full regulatory documentation.", cta: "Request a quote" },
  { num: "03", name: "Private Label Services", desc: "Launch your own branded skincare line with bespoke formulations and packaging support.", cta: "Start your brand" },
];

export default function Partner() {
  return (
    <section id="partner" className="bg-darker py-20 md:py-40 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="font-body text-[10.5px] tracking-[4px] text-gold/55 uppercase mb-7">
            Partner With Us
          </div>
          <h2
            className="font-heading font-light text-cream leading-[1.12] tracking-[-0.5px] mb-7"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            Grow your business
            <br />
            <em className="text-gold/[0.82]">with our capability.</em>
          </h2>
          <p className="font-body text-[15px] font-light text-cream/[0.42] max-w-[480px] mx-auto leading-[1.82]">
            Three ways to work with a manufacturing partner built for quality,
            scale, and reliability.
          </p>
        </ScrollReveal>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mb-16">
          {partners.map((p, i) => (
            <ScrollReveal key={p.num} delay={i}>
              <div className="group relative overflow-hidden cursor-pointer bg-cream/[0.04] border border-cream/[0.08] p-[56px_44px_48px] transition-all duration-[400ms] hover:bg-cream/[0.07] hover:border-gold/[0.22]">
                <div className="absolute top-5 right-7 font-heading text-[72px] font-light text-gold/10 leading-none select-none pointer-events-none">
                  {p.num}
                </div>
                <div className="font-body text-[10.5px] tracking-[3px] text-gold/60 uppercase mb-6">
                  {p.num}
                </div>
                <h3 className="font-heading text-[26px] font-normal text-cream leading-[1.22] mb-[22px]">
                  {p.name}
                </h3>
                <div className="w-7 h-px bg-gold/40 mb-[22px]" />
                <p className="font-body text-sm font-light text-cream/[0.52] leading-[1.82] mb-10">
                  {p.desc}
                </p>
                <div className="font-body text-[11px] tracking-[2px] font-medium text-gold uppercase border-t border-cream/[0.08] pt-[22px]">
                  {p.cta} →
                </div>
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-500 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(to right, #D4A853, rgba(212,168,83,0.3))",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={2} className="text-center">
          <a
            href="#contact"
            className="font-body text-[11px] tracking-[3px] font-semibold text-dark-green bg-gold uppercase no-underline px-11 py-[17px] inline-block transition-colors duration-300 hover:bg-gold-hover"
          >
            Request Partnership
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
