import Link from "next/link";
import Reveal from "./Reveal";

const stats = [
  { value: "2024", label: "Year established" },
  { value: "100%", label: "Genuine, sourced medicines" },
  { value: "Pan-India", label: "Distribution network" },
  { value: "B2B & B2C", label: "Wholesale & retail supply" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-5 py-6 md:px-10 md:py-9 lg:px-20">
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

          <div className="flex flex-wrap items-center gap-9">
            <Link
              href="/about"
              className="font-v2-body group inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[2px] text-[#1E40AF] uppercase"
            >
              Learn more about us
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <a
              href="#partner"
              className="font-v2-body group inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[2px] text-[#0B1F4E]/60 uppercase"
            >
              Explore partnership
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>
        </Reveal>

        {/* Right — stats panel */}
        <Reveal variant="right" delay={120}>
          <div
            className="relative overflow-hidden rounded-[36px] p-10 pb-9 text-white shadow-[0_40px_100px_rgba(6,18,58,0.35)] md:p-12"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 85% 0%, rgba(109,141,255,0.35), transparent 55%), linear-gradient(150deg, #0B1F4E 0%, #06123A 60%, #101B54 100%)",
            }}
          >
            <div className="relative grid grid-cols-2 gap-3">
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
        </Reveal>
      </div>
    </section>
  );
}
