import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const products = [
  { name: "D-Stress", desc: "Natural stress relief capsules", pack: "30 Capsules", image: "/product-dstress.jpg" },
  { name: "Respiquite", desc: "Sleep quiet, breathe right", pack: "30 Tablets", image: "/product-respiquite.jpg" },
  { name: "Salt-ed", desc: "D Ultimate Med capsules", pack: "2 Capsules", image: "/product-salted.jpg" },
  { name: "OrthoMantra", desc: "Joint & mobility support", pack: "60 Tablets", image: "/product-orthomantra.jpg" },
  { name: "Muvoquick", desc: "Muscle & vitality support", pack: "100 gm", image: "/product-muvoquick.jpg" },
  { name: "GluOK", desc: "Blood sugar balance support", pack: "90 Tablets", image: "/product-gluok.jpg" },
  { name: "Relievain", desc: "Fast-acting pain relief", pack: "30 Tablets", image: "/product-relievain.jpg" },
  { name: "FEM-FIT Syrup", desc: "Female reproductive wellness", pack: "225ml", image: "/product-femfit.jpg" },
];

export default function Products() {
  return (
    <section id="products" className="bg-cream py-20 md:py-40 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="font-body text-[10.5px] tracking-[4px] text-gold uppercase mb-7">
            From Our Portfolio
          </div>
          <h2
            className="font-heading font-light text-dark-green leading-[1.12] tracking-[-0.5px] mb-7"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            A complete portfolio,
            <br />
            <em>for every wellness concern.</em>
          </h2>
          <p className="font-body text-[15px] font-light text-muted max-w-[460px] mx-auto leading-[1.82]">
            Over one hundred Ayurvedic formulations, trusted across the country.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-24">
          {products.map((p, i) => (
            <ScrollReveal
              key={p.name}
              delay={i % 4}
              className="group bg-white border border-[rgba(200,148,10,0.14)] transition-all duration-[450ms] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(200,148,10,0.14)]"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-6 text-center">
                <div className="font-heading text-lg font-normal text-dark-green mb-1.5">
                  {p.name}
                </div>
                <p className="font-body text-[12px] font-light text-muted leading-[1.6] mb-3">
                  {p.desc}
                </p>
                <div className="font-body text-[10px] tracking-[2px] text-gold uppercase">
                  {p.pack}
                </div>
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
