import Reveal from "./Reveal";
import Mandala from "./Mandala";

const stats = [
  { value: "2024", label: "Year established" },
  { value: "100%", label: "Genuine, sourced medicines" },
  { value: "Pan-India", label: "Distribution network" },
  { value: "B2B + B2C", label: "Wholesale & retail supply" },
];

const doshas = [
  {
    name: "Vata",
    element: "Air · Movement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M3 8h9a3 3 0 1 0-3-3M3 12h13a3 3 0 1 1-3 3M3 16h7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Pitta",
    element: "Fire · Transformation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3c1 4-4 5.5-4 10a4 4 0 0 0 8 0c0-2-1-3.5-2-4.5.2 2-.7 3-1.5 3.5C13 10 14 6 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Kapha",
    element: "Water · Structure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 3.5c3.5 4.5 6 7.6 6 11a6 6 0 1 1-12 0c0-3.4 2.5-6.5 6-11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Left copy */}
        <Reveal variant="left">
          <div className="font-v2-body mb-7 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF]" />
            Who We Are
          </div>
          <h2
            className="font-v2-head mb-9 leading-[1.12] font-medium tracking-[-1px] text-[#06123A]"
            style={{ fontSize: "clamp(34px, 3.6vw, 54px)" }}
          >
            Delivering trust. Distributing care.{" "}
            <em className="v2-grad-text italic">Empowering healthcare.</em>
          </h2>
          <p className="font-v2-body mb-6 text-[16.5px] leading-[1.9] text-[#0B1F4E]/70">
            Established in 2024, Taviar Enterprises Private Limited is a
            fast-growing pharmaceutical wholesale and retail distribution
            company dedicated to delivering quality healthcare solutions with
            integrity and excellence.
          </p>
          <p className="font-v2-body mb-10 text-[16.5px] leading-[1.9] text-[#0B1F4E]/70">
            As a trusted third-party distributor, we source genuine medicines
            from reputed manufacturers and ensure their seamless supply to
            doctors, clinics, hospitals, and healthcare professionals — so they
            can focus on what matters most: improving patient lives.
          </p>

          {/* Tridosha strip */}
          <div className="mb-10 grid grid-cols-3 gap-3">
            {doshas.map((d, i) => (
              <Reveal key={d.name} delay={i * 120} variant="up">
                <div className="group v2-card-grad rounded-2xl p-4 text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,64,175,0.14)]">
                  <div
                    className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:rotate-[360deg]"
                    style={{ background: "var(--v2-grad)" }}
                  >
                    {d.icon}
                  </div>
                  <div className="font-v2-head text-[17px] font-semibold text-[#06123A]">
                    {d.name}
                  </div>
                  <div className="font-v2-body text-[8.5px] font-bold tracking-[1.5px] text-[#0B1F4E]/45 uppercase">
                    {d.element}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href="#partner"
            className="font-v2-body group inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[2px] text-[#1E40AF] uppercase"
          >
            Explore partnership
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </Reveal>

        {/* Right — Sanskrit blessing panel + stats */}
        <Reveal variant="right" delay={120}>
          <div
            className="relative overflow-hidden rounded-[36px] p-10 pb-9 text-white shadow-[0_40px_100px_rgba(6,18,58,0.35)] md:p-12"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 85% 0%, rgba(109,141,255,0.35), transparent 55%), linear-gradient(150deg, #0B1F4E 0%, #06123A 60%, #101B54 100%)",
            }}
          >
            <Mandala
              className="absolute -top-24 -right-24 h-[340px] w-[340px] text-[#A5BCFF]/25"
              style={{ animation: "v2Spin 80s linear infinite" }}
            />
            <div className="relative">
              <div className="font-v2-body mb-8 text-[10px] font-bold tracking-[3.5px] text-[#A5BCFF] uppercase">
                Our guiding shloka
              </div>
              <div className="font-v2-head mb-4 text-[34px] leading-[1.35] font-medium md:text-[40px]">
                सर्वे सन्तु निरामयाः
              </div>
              <div className="font-v2-head mb-3 text-[19px] font-light italic opacity-85">
                &ldquo;Sarve santu nirāmayāḥ&rdquo;
              </div>
              <p className="font-v2-body mb-10 max-w-[380px] text-[14px] leading-[1.8] text-white/60">
                May all be free from illness — the ancient prayer that shapes
                how we source, verify, and deliver every single product.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 100} variant="zoom">
                    <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.12]">
                      <div className="font-v2-head text-[27px] leading-none font-semibold text-[#A5BCFF]">
                        {s.value}
                      </div>
                      <div className="font-v2-body mt-2 text-[9.5px] leading-[1.5] font-bold tracking-[1.5px] text-white/55 uppercase">
                        {s.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
