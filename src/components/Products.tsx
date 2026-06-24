import ScrollReveal from "./ScrollReveal";

const categories = [
  { name: "Acne Care", items: "Face washes · Creams · Gels" },
  { name: "Pigmentation Care", items: "Serums · Treatment creams" },
  { name: "Anti-Aging", items: "Herbal rejuvenation range" },
  { name: "Daily Skin Care", items: "Cleansers · Moisturisers · Sunscreen" },
];

function CategoryOrb() {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute -inset-2.5 rounded-full border border-[rgba(200,148,10,0.14)]" />
      <div
        className="w-32 h-32 rounded-full overflow-hidden relative"
        style={{
          boxShadow:
            "0 24px 60px rgba(200,148,10,0.16), 0 8px 24px rgba(0,0,0,0.07)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full border border-white/50"
          style={{
            background:
              "radial-gradient(circle at 36% 32%, rgba(255,235,165,0.6) 0%, rgba(212,168,83,0.32) 42%, rgba(26,40,32,0.12) 100%)",
          }}
        />
      </div>
      <div
        className="absolute top-5 left-[26px] w-7 h-7 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-cream py-40 px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="font-body text-[10.5px] tracking-[4px] text-gold uppercase mb-7">
            Product Categories
          </div>
          <h2
            className="font-heading font-light text-dark-green leading-[1.12] tracking-[-0.5px] mb-7"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            A complete portfolio,
            <br />
            <em>for every skin concern.</em>
          </h2>
          <p className="font-body text-[15px] font-light text-muted max-w-[460px] mx-auto leading-[1.82]">
            Over one hundred Ayurvedic formulations, organised across four core
            categories of skincare.
          </p>
        </ScrollReveal>

        {/* Category grid */}
        <div className="grid grid-cols-4 gap-9 mb-20">
          {categories.map((c, i) => (
            <ScrollReveal
              key={c.name}
              delay={i}
              className="flex flex-col items-center gap-[30px] cursor-pointer transition-transform duration-[450ms] hover:-translate-y-2.5"
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <CategoryOrb />
              <div className="text-center">
                <div className="font-heading text-2xl font-normal text-dark-green mb-2.5">
                  {c.name}
                </div>
                <p className="font-body text-[13px] font-light text-muted leading-[1.72] tracking-[0.3px]">
                  {c.items}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={2} className="text-center">
          <a
            href="#"
            className="font-body text-[11px] tracking-[3px] font-semibold text-dark-green bg-gold uppercase no-underline px-11 py-[17px] inline-block transition-colors duration-300 hover:bg-gold-hover"
          >
            View Complete Product Range
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
