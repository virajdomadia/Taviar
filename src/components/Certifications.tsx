import Reveal from "./Reveal";

const certs = [
  {
    name: "GMP Certified",
    sub: "Good Manufacturing Practice",
    desc: "Production audited against GMP standards for quality and consistency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m10 9 1.5 1.5L14.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ISO Certified",
    sub: "ISO 9001:2015",
    desc: "Internationally recognised quality management system certification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 12h17M12 3.5c-5.5 5-5.5 12 0 17 5.5-5 5.5-12 0-17Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "AYUSH Licensed",
    sub: "Ministry of AYUSH",
    desc: "Fully licensed manufacturer of Ayurvedic proprietary formulations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path d="M12 4c5 3.2 6.5 9 3.5 13.5C13.5 15 12.5 11 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4c-5 3.2-6.5 9-3.5 13.5C10.5 15 11.5 11 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Quality Assurance",
    sub: "In-house & third-party",
    desc: "Independent laboratory verification on every production batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path d="M9 3h6M10 3v5.5L4.8 17a3 3 0 0 0 2.7 4.5h9a3 3 0 0 0 2.7-4.5L14 8.5V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 15h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-5 py-6 md:px-10 md:py-9 lg:px-20"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #E9EEFB 100%)" }}
    >
      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-16 text-center md:mb-24">
          <div className="font-v2-body mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#1E40AF]" />
            Certifications &amp; Compliance
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#1E40AF]" />
          </div>
          <h2
            className="font-v2-head mb-6 leading-[1.1] font-medium tracking-[-1px] text-[#06123A]"
            style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
          >
            Held to standards <em className="v2-grad-text italic">you can verify.</em>
          </h2>
          <p className="font-v2-body mx-auto max-w-[720px] text-[15.5px] leading-[1.85] text-[#0B1F4E]/60">
            Manufactured and audited under nationally and internationally
            recognised quality frameworks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 120} variant="up">
              <div className="group rounded-[26px] bg-white/80 p-9 pt-11 text-center shadow-[0_16px_50px_rgba(11,31,78,0.07)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(30,64,175,0.18)]">
                {/* Medallion */}
                <div className="relative mx-auto mb-8 h-28 w-28">
                  <svg
                    viewBox="0 0 112 112"
                    className="absolute inset-0 h-full w-full text-[#1E40AF]/45"
                    style={{ animation: "v2Spin 26s linear infinite" }}
                    aria-hidden
                  >
                    <circle cx="56" cy="56" r="54" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" />
                  </svg>
                  <div
                    className="absolute inset-3 rounded-full opacity-40 blur-md"
                    style={{ background: "var(--v2-grad)", animation: "v2Breathe 5s ease-in-out infinite" }}
                  />
                  <div
                    className="absolute inset-4 flex items-center justify-center rounded-full text-white shadow-[0_12px_30px_rgba(30,64,175,0.4)] transition-transform duration-500 group-hover:scale-110"
                    style={{ background: "var(--v2-grad)" }}
                  >
                    {cert.icon}
                  </div>
                </div>

                <h3 className="font-v2-head mb-2 text-[22px] font-semibold text-[#06123A]">
                  {cert.name}
                </h3>
                <div className="font-v2-body mb-5 inline-block rounded-full bg-[#E9EEFB] px-3.5 py-1 text-[9px] font-bold tracking-[1.8px] text-[#1E40AF] uppercase">
                  {cert.sub}
                </div>
                <p className="font-v2-body text-[13px] leading-[1.8] text-[#0B1F4E]/60">
                  {cert.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
