import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "D-Stress",
    desc: "Empowering a Healthier Mind, Naturally.",
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
    ],
  },
  {
    name: "Respiquite",
    desc: "Sleep quiet, breathe right",
    pack: "30 Tablets",
    image: "/product-respiquite.jpg",
    benefits: [],
  },
  {
    name: "Salt-ed",
    desc: "Power Your Performance.",
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
    name: "OrthoMantra",
    desc: "Strength That Supports Every Step.",
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
    name: "Muvoquick",
    desc: "Strength in Every Step.",
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
    name: "GluOK",
    desc: "Balance Your Blood Sugar. Naturally.",
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
    name: "Relievain",
    desc: "Relief That Moves With You.",
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
    name: "FEM-FIT Syrup",
    desc: "Balanced Hormones. Healthier You.",
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
];

export default function Products() {
  return (
    <section id="products" className="bg-cream py-10 px-5 md:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="font-body text-[14px] tracking-[4px] text-gold uppercase font-semibold mb-7">
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
          <p className="font-body text-[15px] font-light text-muted max-w-[700px] mx-auto leading-[1.82]">
            Over one hundred Ayurvedic formulations, trusted across the country.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-12">
          {products.map((p, i) => (
            <ScrollReveal
              key={p.name}
              delay={i % 4}
              className="group bg-white border border-[rgba(200,148,10,0.14)] rounded-2xl transition-all duration-[450ms] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(200,148,10,0.14)] relative"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-cream rounded-t-2xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-6 pb-12">
                <div className="text-center mb-3">
                  <div className="font-heading text-2xl font-bold text-dark-green mb-3">
                    {p.name}
                  </div>
                </div>
                {p.benefits.length > 0 && (
                  <ul className="text-left space-y-1.5">
                    {p.benefits.map((b) => (
                      <li
                        key={b}
                        className="font-body text-[13px] font-bold text-muted leading-[1.5] flex items-start gap-1.5"
                      >
                        <span className="text-gold mt-[1px]">✔</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="absolute bottom-5 right-5 font-body text-[10px] tracking-[2px] text-gold uppercase">
                {p.pack}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
