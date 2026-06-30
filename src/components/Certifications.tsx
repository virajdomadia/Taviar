import ScrollReveal from "./ScrollReveal";

const certs = [
  { name: "GMP Certified", sub: "Good Manufacturing Practice", desc: "Production audited against GMP standards for quality and consistency." },
  { name: "ISO Certified", sub: "ISO 9001:2015", desc: "Internationally recognised quality management system certification." },
  { name: "AYUSH Licensed", sub: "Ministry of AYUSH", desc: "Fully licensed manufacturer of Ayurvedic proprietary formulations." },
  { name: "Quality Assurance", sub: "In-house & third-party", desc: "Independent laboratory verification on every production batch." },
];

function CertIcon() {
  return (
    <div
      className="w-14 h-14 rounded-full border border-gold/45 mx-auto mb-7 flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 38% 34%, rgba(212,168,83,0.22), rgba(212,168,83,0.04))",
      }}
    >
      <div className="w-5 h-5 rounded-full border-[1.5px] border-gold/85" />
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-dark py-20 md:py-40 px-5 md:px-10 lg:px-20 border-t border-gold/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-24">
          <div className="font-body text-[10.5px] tracking-[4px] text-gold/65 uppercase mb-7">
            Certifications &amp; Compliance
          </div>
          <h2
            className="font-heading font-light text-cream leading-[1.12] tracking-[-0.5px] mb-7"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            Held to standards
            <br />
            <em className="text-gold/[0.82]">you can verify.</em>
          </h2>
          <p className="font-body text-[15px] font-light text-cream/[0.42] max-w-[480px] mx-auto leading-[1.82]">
            Manufactured and audited under nationally and internationally
            recognised quality frameworks.
          </p>
        </ScrollReveal>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {certs.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i}>
              <div className="group bg-cream/[0.04] border border-cream/[0.08] p-[48px_36px] text-center transition-all duration-[400ms] hover:bg-cream/[0.07] hover:border-gold/[0.22]">
                <CertIcon />
                <h3 className="font-heading text-[23px] font-normal text-cream mb-1.5">
                  {cert.name}
                </h3>
                <div className="font-body text-[10px] tracking-[1.5px] text-gold/60 uppercase mb-5">
                  {cert.sub}
                </div>
                <div className="w-6 h-px bg-gold/40 mx-auto mb-5" />
                <p className="font-body text-[13px] font-light text-cream/[0.48] leading-[1.78]">
                  {cert.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Download link */}
        <ScrollReveal delay={2} className="text-center mt-14">
          <a
            href="#"
            className="font-body text-[11px] tracking-[2px] text-cream/50 uppercase no-underline border-b border-cream/20 pb-[3px] transition-colors duration-[250ms] hover:text-cream/90"
          >
            Download certificates (PDF) →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
