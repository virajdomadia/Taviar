import ScrollReveal from "./ScrollReveal";

const features = [
  { num: "01", name: "Authentic Ayurveda", desc: "Traditional formulations grounded in classical Ayurvedic principles and authenticated source texts." },
  { num: "02", name: "Quality Assured", desc: "Strict batch testing and quality-control protocols at every stage, from raw material to finished product." },
  { num: "03", name: "GMP Manufacturing", desc: "Modern, certified production facilities engineered for consistency, hygiene, and scale." },
  { num: "04", name: "Research Driven", desc: "Continuous product innovation, stability studies, and formulation development in-house." },
  { num: "05", name: "Safe Ingredients", desc: "Carefully sourced herbal extracts, screened for purity and dermatological safety." },
  { num: "06", name: "Nationwide Distribution", desc: "A reliable supply and logistics network serving partners across the country." },
];

function FeatureCard({ num, name, desc }: { num: string; name: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer bg-cream/[0.04] border border-cream/[0.08] p-[52px_44px_48px] transition-all duration-[400ms] hover:bg-cream/[0.07] hover:border-gold/[0.22]">
      <div className="absolute top-5 right-7 font-heading text-[72px] font-light text-gold/10 leading-none select-none pointer-events-none">
        {num}
      </div>
      <div className="font-body text-[10.5px] tracking-[3px] text-gold/60 uppercase mb-6">
        {num}
      </div>
      <h3 className="font-heading text-[26px] font-normal text-cream leading-[1.22] mb-[22px]">
        {name}
      </h3>
      <div className="w-7 h-px bg-gold/40 mb-[22px]" />
      <p className="font-body text-sm font-light text-cream/[0.52] leading-[1.82]">
        {desc}
      </p>
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-500 group-hover:w-full"
        style={{
          background: "linear-gradient(to right, #D4A853, rgba(212,168,83,0.3))",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-dark-green py-40 px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-[100px]">
          <ScrollReveal>
            <div className="font-body text-[10.5px] tracking-[4px] text-gold/65 uppercase mb-6">
              Why Choose Us
            </div>
            <h2
              className="font-heading font-light text-cream leading-[1.08] tracking-[-0.5px]"
              style={{ fontSize: "clamp(38px, 4.2vw, 64px)" }}
            >
              The difference is
              <br />
              <em className="text-gold/[0.82]">in the standard.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2} className="max-w-[300px]">
            <p className="font-body text-sm font-light text-cream/[0.42] leading-[1.82]">
              Every product we make is held to a pharmaceutical-grade benchmark —
              from sourcing through to the final seal.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-3 gap-0.5">
          {features.map((f, i) => (
            <ScrollReveal key={f.num} delay={i % 3}>
              <FeatureCard {...f} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
