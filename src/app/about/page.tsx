import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
      <section className="relative bg-transparent overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32 px-5 md:px-10 lg:px-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 20%, rgba(30,64,175,0.1) 0%, transparent 68%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto text-center">
          <div className="font-v2-body text-[13px] font-semibold tracking-[5px] text-[#1E40AF]/70 uppercase mb-9">
            About Taviar &middot; Est. 2024
          </div>
          <h1
            className="font-v2-head font-light text-[#06123A] leading-[1.08] tracking-[-1px] mb-9"
            style={{ fontSize: "clamp(42px, 5.6vw, 80px)" }}
          >
            Delivering Trust.
            <br />
            <em className="italic font-light">Distributing</em> Care.
          </h1>
          <p className="font-v2-body text-[18px] font-light text-[#4D5B71] max-w-[800px] mx-auto leading-[1.9]">
            A fast growing pharmaceutical wholesale and retail distribution
            company, dedicated to delivering quality healthcare solutions with
            integrity and excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-transparent py-20 md:py-36 px-5 md:px-10 lg:px-20">
        <div className="max-w-[820px] mx-auto">
          <Reveal>
            <div className="font-v2-body text-[13px] font-semibold tracking-[4px] text-[#1E40AF] uppercase mb-9">
              Our Story
            </div>
            <p className="font-v2-body text-[15px] font-light text-[#313B4B] leading-[1.9] tracking-[0.18px] mb-7">
              Established on 29th February 2024, Taviar Enterprises Private
              Limited is a fast-growing pharmaceutical wholesale and retail
              distribution company dedicated to delivering quality healthcare
              solutions with integrity and excellence.
            </p>
            <p className="font-v2-body text-[15px] font-light text-[#313B4B] leading-[1.9] tracking-[0.18px] mb-7">
              As a trusted third-party pharmaceutical distributor, we source
              genuine medicines from reputed pharmaceutical manufacturers and
              ensure their seamless supply to doctors, clinics, hospitals, and
              healthcare professionals. Our commitment to quality, timely
              delivery, and ethical business practices enables healthcare
              providers to focus on what matters most — improving patient
              lives.
            </p>
            <p className="font-v2-body text-[15px] font-light text-[#313B4B] leading-[1.9] tracking-[0.18px]">
              At Taviar, we strive to build a strong and dependable
              pharmaceutical supply network driven by trust, transparency, and
              operational excellence. Every product we distribute is backed by
              a commitment to authenticity, regulatory compliance, and
              customer satisfaction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-transparent py-20 md:py-36 px-5 md:px-10 lg:px-20 border-t border-[#1E40AF]/[0.08]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <Reveal>
            <div className="bg-white border border-[#1E40AF]/[0.16] p-[52px_44px_48px] h-full hover:border-[#1E40AF]/[0.4] hover:shadow-[0_16px_40px_rgba(30,64,175,0.14)]">
              <div className="font-v2-body text-[10.5px] tracking-[3px] text-[#1E40AF]/60 uppercase mb-6">
                Our Mission
              </div>
              <h2 className="font-v2-head text-[28px] font-normal text-[#06123A] leading-[1.25] mb-[22px]">
                Quality, integrity, and reach.
              </h2>
              <div className="w-7 h-px bg-[#1E40AF]/40 mb-[22px]" />
              <p className="font-v2-body text-sm font-light text-[#313B4B] leading-[1.85]">
                To deliver genuine, quality medicines to doctors, clinics,
                hospitals, and healthcare professionals through a supply
                network built on trust, transparency, and operational
                excellence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white border border-[#1E40AF]/[0.16] p-[52px_44px_48px] h-full hover:border-[#1E40AF]/[0.4] hover:shadow-[0_16px_40px_rgba(30,64,175,0.14)]">
              <div className="font-v2-body text-[10.5px] tracking-[3px] text-[#1E40AF]/60 uppercase mb-6">
                Our Vision
              </div>
              <h2 className="font-v2-head text-[28px] font-normal text-[#06123A] leading-[1.25] mb-[22px]">
                India&apos;s most reliable distribution partner.
              </h2>
              <div className="w-7 h-px bg-[#1E40AF]/40 mb-[22px]" />
              <p className="font-v2-body text-sm font-light text-[#313B4B] leading-[1.85]">
                To become one of India&apos;s most reliable pharmaceutical
                distribution partners — continuously expanding our reach,
                strengthening partnerships, and making quality medicines
                accessible to every healthcare professional we serve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-transparent py-20 md:py-40 px-5 md:px-10 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="text-center mb-24">
            <div className="font-v2-body text-[10.5px] tracking-[4px] text-[#1E40AF]/65 uppercase mb-7">
              What We Stand For
            </div>
            <h2
              className="font-v2-head font-light text-[#06123A] leading-[1.12] tracking-[-0.5px]"
              style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
            >
              Principles behind
              <br />
              <em>every delivery.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={(i % 3) * 150}>
                <div className="group relative overflow-hidden cursor-default bg-white border border-[#1E40AF]/[0.14] p-[52px_44px_48px] transition-all duration-[400ms] hover:border-[#1E40AF]/[0.4] hover:shadow-[0_16px_40px_rgba(30,64,175,0.14)]">
                  <div className="absolute top-5 right-7 font-v2-head text-[72px] font-light text-[#1E40AF]/10 leading-none select-none pointer-events-none">
                    {v.num}
                  </div>
                  <div className="font-v2-body text-[10.5px] tracking-[3px] text-[#1E40AF]/60 uppercase mb-6">
                    {v.num}
                  </div>
                  <h3 className="font-v2-head text-[26px] font-normal text-[#06123A] leading-[1.22] mb-[22px]">
                    {v.name}
                  </h3>
                  <div className="w-7 h-px bg-[#1E40AF]/40 mb-[22px]" />
                  <p className="font-v2-body text-sm font-light text-[#313B4B] leading-[1.82]">
                    {v.desc}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 transition-[width] duration-500 group-hover:w-full"
                    style={{
                      background: "linear-gradient(to right, #1E40AF, rgba(30,64,175,0.3))",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-transparent py-24 md:py-32 px-5 md:px-10 lg:px-20 border-t border-[#1E40AF]/[0.08]">
        <Reveal className="max-w-[760px] mx-auto text-center">
          <p
            className="font-v2-head font-light italic text-[#06123A] leading-[1.4] mb-14"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}
          >
            Taviar — Delivering Trust. Distributing Care. Empowering
            Healthcare.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/#partner"
              className="font-v2-body text-[11px] tracking-[3px] font-semibold text-white bg-[#1E40AF] uppercase no-underline px-10 py-[17px] inline-block transition-colors duration-300 hover:bg-[#1E3A8A]"
            >
              Partner With Us
            </Link>
            <Link
              href="/#contact"
              className="font-v2-body text-[11px] tracking-[2px] text-[#06123A]/70 uppercase no-underline border-b border-[#06123A]/20 pb-0.5 transition-colors duration-[250ms] hover:text-[#06123A] hover:border-[#06123A]"
            >
              Get in touch →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
