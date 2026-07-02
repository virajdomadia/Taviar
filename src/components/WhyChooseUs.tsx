import ScrollReveal from "./ScrollReveal";

const features = [
  { num: "01", name: "Quality Assured Products", desc: "Every product is sourced from certified manufacturers and undergoes strict quality standards." },
  { num: "02", name: "Wide Product Portfolio", desc: "A comprehensive range of pharmaceutical, nutraceutical, and Ayurvedic solutions under one roof." },
  { num: "03", name: "Reliable Supply Chain", desc: "Efficient inventory management and timely delivery to ensure uninterrupted product availability." },
  { num: "04", name: "Customer-Centric Service", desc: "Dedicated support with personalized solutions for doctors, clinics, hospitals, and distributors." },
  { num: "05", name: "Integrity & Excellence", desc: "Committed to ethical business practices, transparency, and building long-term healthcare partnerships." },
];

function FeatureCard({ num, name, desc }: { num: string; name: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer h-full bg-cream/[0.04] border border-cream/[0.08] p-[52px_44px_48px] transition-all duration-[400ms] hover:bg-cream/[0.07] hover:border-gold/[0.22]">
      <div className="absolute top-5 right-7 font-heading text-[72px] font-light text-gold/10 leading-none select-none pointer-events-none">
        {num}
      </div>
      <h3 className="font-heading text-[26px] font-normal text-cream leading-[1.22] mb-[22px]">
        {name}
      </h3>
      <div className="w-7 h-px bg-gold/40 mb-[22px]" />
      <p className="font-body text-base font-light text-cream/[0.52] leading-[1.82]">
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
    <section id="why" className="bg-dark-green py-20 md:py-40 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-0 mb-14 md:mb-[100px]">
          <ScrollReveal>
            <div className="font-body text-[14px] font-bold tracking-[4px] text-gold/65 uppercase mb-6">
              Why Choose Us
            </div>
            <h2
              className="font-heading font-light text-cream leading-[1.08] tracking-[-0.5px]"
              style={{ fontSize: "clamp(38px, 4.2vw, 64px)" }}
            >
              Trusted Healthcare
              <br />
              <em className="text-gold/[0.82]">Partner.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2} className="max-w-[300px]">
            <p className="font-body text-lg font-semibold text-cream/[0.42] leading-[1.82]">
              Delivering quality pharmaceutical and Ayurvedic products trusted
              by doctors and healthcare professionals.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {features.map((f, i) => (
            <ScrollReveal key={f.num} delay={i % 3} className="h-full">
              <FeatureCard {...f} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
