import Reveal from "./Reveal";

const features = [
  {
    num: "01",
    name: "Quality Assured Products",
    desc: "Every product is sourced from certified manufacturers and undergoes strict quality standards before it ever reaches a shelf.",
    span: "lg:col-span-2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Wide Product Portfolio",
    desc: "A comprehensive range of pharmaceutical, nutraceutical, and Ayurvedic solutions under one roof.",
    span: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 13.5v7M13.5 17h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Reliable Supply Chain",
    desc: "Efficient inventory management and timely delivery to ensure uninterrupted product availability.",
    span: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M3 7h11v10H3zM14 10h4l3 3v4h-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Customer-Centric Service",
    desc: "Dedicated support with personalized solutions for doctors, clinics, hospitals, and distributors.",
    span: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M12 20s-7-4.2-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 2.5C19 15.8 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "05",
    name: "Integrity & Excellence",
    desc: "Committed to ethical business practices, transparency, and building long-term healthcare partnerships.",
    span: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3v3M5 6l7-3 7 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 6v13M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5 6l-2.5 6a3 3 0 0 0 5 0L5 6ZM19 6l-2.5 6a3 3 0 0 0 5 0L19 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Why() {
  return (
    <section id="why" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-36 lg:px-20" style={{ background: "linear-gradient(180deg, #F4F7FD 0%, #FFFFFF 100%)" }}>
      <div className="v2-dots absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_55%)]" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <Reveal variant="left">
            <div className="font-v2-body mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
              <span className="h-px w-10 bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF]" />
              Why Choose Us
            </div>
            <h2
              className="font-v2-head leading-[1.08] font-medium tracking-[-1px] text-[#06123A]"
              style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
            >
              Five reasons doctors
              <br />
              <em className="v2-grad-text italic">keep coming back.</em>
            </h2>
          </Reveal>
          <Reveal variant="right" delay={150} className="max-w-[320px]">
            <p className="font-v2-body text-[15.5px] leading-[1.85] text-[#0B1F4E]/60">
              Delivering quality pharmaceutical and Ayurvedic products trusted
              by doctors and healthcare professionals.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.num} delay={(i % 3) * 110} className={f.span}>
              <div className="group relative h-full overflow-hidden rounded-[26px] v2-card-grad p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(30,64,175,0.16)]">
                {/* Watermark number */}
                <div className="font-v2-head absolute -top-3 right-5 text-[96px] leading-none font-semibold text-[#1E40AF]/[0.06] transition-colors duration-500 select-none group-hover:text-[#1E40AF]/[0.12]">
                  {f.num}
                </div>
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(29,78,216,0.2), transparent 70%)" }}
                />

                <div
                  className="relative mb-7 flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-[0_10px_26px_rgba(30,64,175,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ background: "var(--v2-grad)" }}
                >
                  {f.icon}
                </div>
                <h3 className="font-v2-head relative mb-4 text-[24px] leading-[1.25] font-semibold text-[#06123A]">
                  {f.name}
                </h3>
                <p className="font-v2-body relative max-w-[420px] text-[14.5px] leading-[1.85] text-[#0B1F4E]/60">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Filler CTA tile to complete the bento */}
          <Reveal delay={220}>
            <a
              href="#contact"
              className="group relative flex h-full min-h-[220px] flex-col items-start justify-between overflow-hidden rounded-[26px] p-9 text-white shadow-[0_24px_60px_rgba(30,64,175,0.3)] transition-all duration-500 hover:-translate-y-1.5"
              style={{ background: "linear-gradient(140deg, #1D4ED8, #1E40AF 55%, #312E81)" }}
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-2xl"
                style={{ animation: "v2Breathe 6s ease-in-out infinite" }}
              />
              <div className="font-v2-body text-[10px] font-bold tracking-[3px] uppercase opacity-80">
                Ready when you are
              </div>
              <div>
                <div className="font-v2-head mb-4 text-[28px] leading-[1.2] font-semibold">
                  Let&apos;s build a healthier supply chain, together.
                </div>
                <span className="font-v2-body inline-flex items-center gap-2 text-[12px] font-bold tracking-[2px] uppercase">
                  Get in touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
