import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "2024", label: "Year established" },
  { value: "100%", label: "Genuine, sourced medicines" },
  { value: "Pan-India", label: "Distribution network" },
  { value: "B2B & B2C", label: "Wholesale & retail supply" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-40 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[120px] items-center">
        {/* Left copy */}
        <ScrollReveal>
          <div className="font-body text-[10.5px] tracking-[4px] text-gold uppercase mb-9">
            The Company
          </div>
          <h2
            className="font-heading font-light text-dark-green leading-[1.18] tracking-[-0.5px] mb-11"
            style={{ fontSize: "clamp(36px, 3.8vw, 56px)" }}
          >
            Delivering trust.
            <br />
            <em>Distributing</em> care.
            <br />
            Empowering healthcare.
          </h2>
          <div className="w-10 h-px bg-gold mb-10" />
          <p className="font-body text-[15px] font-light text-body-text leading-[1.88] tracking-[0.18px] mb-7">
            Established in 2024, Taviar Enterprises Private Limited is a
            fast-growing pharmaceutical wholesale and retail distribution
            company dedicated to delivering quality healthcare solutions with
            integrity and excellence.
          </p>
          <p className="font-body text-[15px] font-light text-body-text leading-[1.88] tracking-[0.18px] mb-13">
            As a trusted third-party distributor, we source genuine medicines
            from reputed manufacturers and ensure their seamless supply to
            doctors, clinics, hospitals, and healthcare professionals — so they
            can focus on what matters most: improving patient lives.
          </p>
          <div className="flex flex-wrap items-center gap-9">
            <Link
              href="/about"
              className="font-body text-[11px] tracking-[2px] font-medium text-dark-green uppercase no-underline border-b border-dark-green/35 pb-[3px] transition-colors duration-[250ms] hover:border-dark-green"
            >
              Learn more about us →
            </Link>
            <a
              href="#partner"
              className="font-body text-[11px] tracking-[2px] font-medium text-dark-green/70 uppercase no-underline border-b border-dark-green/20 pb-[3px] transition-colors duration-[250ms] hover:border-dark-green hover:text-dark-green"
            >
              Explore partnership →
            </a>
          </div>
        </ScrollReveal>

        {/* Right visual + stats */}
        <ScrollReveal delay={2}>
          {/* Decorative orb */}
          <div className="flex justify-center mb-16">
            <div className="relative w-72 h-72">
              <div className="absolute -inset-3 rounded-full border border-gold/[0.14]" />
              <div className="absolute -inset-7 rounded-full border border-gold/[0.07]" />
              <div
                className="w-72 h-72 rounded-full flex items-center justify-center relative border border-gold/[0.18]"
                style={{
                  background:
                    "radial-gradient(circle at 35% 32%, rgba(255,235,165,0.38) 0%, rgba(212,168,83,0.18) 38%, rgba(26,40,32,0.12) 72%, rgba(26,40,32,0.22) 100%)",
                  boxShadow:
                    "0 48px 96px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                <div
                  className="w-[158px] h-[158px] rounded-full border border-gold/20 flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 38% 38%, rgba(255,230,140,0.45) 0%, rgba(212,168,83,0.22) 50%, rgba(160,110,30,0.12) 100%)",
                  }}
                >
                  <span className="font-heading text-[52px] font-light text-gold/55 leading-none">
                    T
                  </span>
                </div>
                <div
                  className="absolute top-[42px] left-14 w-16 h-16 rounded-full opacity-55"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.72) 0%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute bottom-13 right-12 w-7 h-7 rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 border-t border-dark-green/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-7 ${
                  i % 2 === 0
                    ? "pr-5 border-r border-dark-green/[0.08]"
                    : "pl-7"
                } ${i < 2 ? "border-b border-dark-green/[0.08]" : ""}`}
              >
                <div className="font-heading text-[46px] font-light text-dark-green leading-none mb-2">
                  {s.value}
                </div>
                <div className="font-body text-[10.5px] tracking-[2px] text-stat uppercase leading-[1.5]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
