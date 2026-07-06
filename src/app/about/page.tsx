import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Taviar Enterprises",
  description:
    "Taviar Enterprises Private Limited is a fast-growing pharmaceutical wholesale and retail distribution company delivering quality healthcare solutions with integrity and excellence.",
};

const values = [
  { num: "01", name: "Trust", desc: "Every relationship we build — with manufacturers, healthcare professionals, and partners — is grounded in dependability and follow-through." },
  { num: "02", name: "Transparency", desc: "Clear, honest dealings at every step of the supply chain, with nothing hidden from the people who depend on us." },
  { num: "03", name: "Integrity", desc: "We source only genuine medicines from reputed manufacturers, and stand behind the authenticity of everything we distribute." },
  { num: "04", name: "Quality", desc: "Regulatory compliance and product authenticity are non-negotiable, on every order, every time." },
  { num: "05", name: "Timely Delivery", desc: "A dependable supply network that gets medicines to doctors, clinics, and hospitals when they need them." },
  { num: "06", name: "Ethical Practices", desc: "Sound business conduct that lets healthcare providers focus on what matters most — improving patient lives." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="relative bg-white overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32 px-5 md:px-10 lg:px-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 20%, rgba(245,166,35,0.1) 0%, transparent 68%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto text-center">
          <div className="font-body text-[13px] font-semibold tracking-[5px] text-gold/70 uppercase mb-9">
            About Taviar &middot; Est. 2024
          </div>
          <h1
            className="font-heading font-light text-dark-green leading-[1.08] tracking-[-1px] mb-9"
            style={{ fontSize: "clamp(42px, 5.6vw, 80px)" }}
          >
            Delivering Trust.
            <br />
            <em className="italic font-light">Distributing</em> Care.
          </h1>
          <p className="font-body text-[18px] font-light text-muted max-w-[800px] mx-auto leading-[1.9]">
            A fast growing pharmaceutical wholesale and retail distribution
            company, dedicated to delivering quality healthcare solutions with
            integrity and excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 md:py-36 px-5 md:px-10 lg:px-20">
        <div className="max-w-[820px] mx-auto">
          <ScrollReveal>
            <div className="font-body text-[13px] font-semibold tracking-[4px] text-gold uppercase mb-9">
              Our Story
            </div>
            <p className="font-body text-[15px] font-light text-body-text leading-[1.9] tracking-[0.18px] mb-7">
              Established on 29th February 2024, Taviar Enterprises Private
              Limited is a fast-growing pharmaceutical wholesale and retail
              distribution company dedicated to delivering quality healthcare
              solutions with integrity and excellence.
            </p>
            <p className="font-body text-[15px] font-light text-body-text leading-[1.9] tracking-[0.18px] mb-7">
              As a trusted third-party pharmaceutical distributor, we source
              genuine medicines from reputed pharmaceutical manufacturers and
              ensure their seamless supply to doctors, clinics, hospitals, and
              healthcare professionals. Our commitment to quality, timely
              delivery, and ethical business practices enables healthcare
              providers to focus on what matters most — improving patient
              lives.
            </p>
            <p className="font-body text-[15px] font-light text-body-text leading-[1.9] tracking-[0.18px]">
              At Taviar, we strive to build a strong and dependable
              pharmaceutical supply network driven by trust, transparency, and
              operational excellence. Every product we distribute is backed by
              a commitment to authenticity, regulatory compliance, and
              customer satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 md:py-36 px-5 md:px-10 lg:px-20 border-t border-gold/[0.08]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <ScrollReveal>
            <div className="bg-cream border border-gold/[0.16] p-[52px_44px_48px] h-full hover:border-gold/[0.4] hover:shadow-[0_16px_40px_rgba(245,166,35,0.14)]">
              <div className="font-body text-[10.5px] tracking-[3px] text-gold/60 uppercase mb-6">
                Our Mission
              </div>
              <h2 className="font-heading text-[28px] font-normal text-dark-green leading-[1.25] mb-[22px]">
                Quality, integrity, and reach.
              </h2>
              <div className="w-7 h-px bg-gold/40 mb-[22px]" />
              <p className="font-body text-sm font-light text-body-text leading-[1.85]">
                To deliver genuine, quality medicines to doctors, clinics,
                hospitals, and healthcare professionals through a supply
                network built on trust, transparency, and operational
                excellence.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="bg-cream border border-gold/[0.16] p-[52px_44px_48px] h-full hover:border-gold/[0.4] hover:shadow-[0_16px_40px_rgba(245,166,35,0.14)]">
              <div className="font-body text-[10.5px] tracking-[3px] text-gold/60 uppercase mb-6">
                Our Vision
              </div>
              <h2 className="font-heading text-[28px] font-normal text-dark-green leading-[1.25] mb-[22px]">
                India&apos;s most reliable distribution partner.
              </h2>
              <div className="w-7 h-px bg-gold/40 mb-[22px]" />
              <p className="font-body text-sm font-light text-body-text leading-[1.85]">
                To become one of India&apos;s most reliable pharmaceutical
                distribution partners — continuously expanding our reach,
                strengthening partnerships, and making quality medicines
                accessible to every healthcare professional we serve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-40 px-5 md:px-10 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-24">
            <div className="font-body text-[10.5px] tracking-[4px] text-gold/65 uppercase mb-7">
              What We Stand For
            </div>
            <h2
              className="font-heading font-light text-dark-green leading-[1.12] tracking-[-0.5px]"
              style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
            >
              Principles behind
              <br />
              <em>every delivery.</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} delay={i % 3}>
                <div className="group relative overflow-hidden cursor-default bg-white border border-gold/[0.14] p-[52px_44px_48px] transition-all duration-[400ms] hover:border-gold/[0.4] hover:shadow-[0_16px_40px_rgba(245,166,35,0.14)]">
                  <div className="absolute top-5 right-7 font-heading text-[72px] font-light text-gold/10 leading-none select-none pointer-events-none">
                    {v.num}
                  </div>
                  <div className="font-body text-[10.5px] tracking-[3px] text-gold/60 uppercase mb-6">
                    {v.num}
                  </div>
                  <h3 className="font-heading text-[26px] font-normal text-dark-green leading-[1.22] mb-[22px]">
                    {v.name}
                  </h3>
                  <div className="w-7 h-px bg-gold/40 mb-[22px]" />
                  <p className="font-body text-sm font-light text-body-text leading-[1.82]">
                    {v.desc}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-500 group-hover:w-full"
                    style={{
                      background: "linear-gradient(to right, #F5A623, rgba(245,166,35,0.3))",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-white py-24 md:py-32 px-5 md:px-10 lg:px-20 border-t border-gold/[0.08]">
        <ScrollReveal className="max-w-[760px] mx-auto text-center">
          <p
            className="font-heading font-light italic text-dark-green leading-[1.4] mb-14"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
          >
            Taviar — Delivering Trust. Distributing Care. Empowering
            Healthcare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/#partner"
              className="font-body text-[11px] tracking-[3px] font-semibold text-dark-green bg-gold uppercase no-underline px-10 py-[17px] inline-block transition-colors duration-300 hover:bg-gold-hover"
            >
              Partner With Us
            </Link>
            <Link
              href="/#contact"
              className="font-body text-[11px] tracking-[2px] text-dark-green/70 uppercase no-underline border-b border-dark-green/20 pb-0.5 transition-colors duration-[250ms] hover:text-dark-green hover:border-dark-green"
            >
              Get in touch →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
