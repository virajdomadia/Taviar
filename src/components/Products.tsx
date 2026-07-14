import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    id: "d-stress",
    name: "D-Stress",
    pack: "30 Capsules",
    image: "/product-dstress.jpg",
    benefits: [
      "Natural Herbal Formula",
      "Helps Reduce Everyday Stress",
      "D-Stress Calms Your Mind",
      "Improves Your Quality of Sleep",
      "Promotes Mental Calmness",
      "Enhances Focus & Concentration",
      "Supports Emotional Wellness",
      "FSSAI Certified Nutraceutical",
      "30 Easy-to-Consume Capsules",
    ],
  },
  {
    id: "gluok",
    name: "GluOK",
    pack: "90 Tablets",
    image: "/product-gluok.jpg",
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
    pack: "30 Tablets",
    image: "/product-relievain.jpg",
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
    pack: "100 gm",
    image: "/product-muvoquick.jpg",
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
    pack: "60 Tablets",
    image: "/product-orthomantra.jpg",
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
    pack: "2 Capsules",
    image: "/product-salted.jpg",
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
    pack: "225ml",
    image: "/product-femfit.jpg",
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
    pack: "225ml",
    image: "/product-respiquite.jpg",
    benefits: [
      "Supports Urinary System Health",
      "Promotes Healthy Urinary Flow",
      "Helps Relieve Urinary Discomfort",
      "Helps Reduce Burning Sensation During Urination",
      "Supports Overall Urinary Tract Wellness",
      "Sugar-Free Ayurvedic Formula",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-transparent py-20 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-28">
          <div className="font-body text-[12px] tracking-[4px] text-gold uppercase font-semibold mb-6 opacity-80">
            Our Premium Collection
          </div>
          <h2
            className="font-heading font-light text-dark-green leading-[1.15] tracking-[-0.8px] mb-7"
            style={{ fontSize: "clamp(42px, 5vw, 64px)" }}
          >
            A Complete Portfolio,
            <br />
            <em className="font-light italic">For Every Wellness Concern.</em>
          </h2>
          <p className="font-body text-[16px] font-light text-muted max-w-[650px] mx-auto leading-[1.8]">
            Handcrafted Ayurvedic formulations, backed by quality certifications and trusted by thousands across the country.
          </p>
        </ScrollReveal>

        {/* Products Grid - 3 columns for premium feel */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {products.map((p, i) => (
            <ScrollReveal
              key={p.id}
              delay={i % 3}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_24px_80px_rgba(30,64,175,0.16)]">
                {/* Image Container - 1:1 aspect ratio */}
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-cream to-gold/10">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-gold-light transition-all duration-500" />
                </div>

                {/* Content Container */}
                <div className="px-6 py-7 pb-10">
                  {/* Product Name */}
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-green mb-6 transition-colors duration-300 group-hover:text-gold">
                    {p.name}
                  </h3>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-8">
                    {p.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="font-body text-xs md:text-sm text-muted flex items-start gap-2.5 leading-snug"
                      >
                        <span className="text-gold font-bold flex-shrink-0 mt-0.5">✔</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pack Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="font-body text-xs tracking-widest text-muted/60 uppercase font-medium">
                      {p.pack}
                    </span>
                  </div>
                </div>

                {/* Border accent - appears on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Browse all CTA */}
        <div className="text-center pt-8">
          <a
            href="#products"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest text-gold uppercase font-bold hover:gap-4 transition-all duration-300 group"
          >
            <span>Browse Full Catalog</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
