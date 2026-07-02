"use client";

import ScrollReveal from "./ScrollReveal";

const inputClass =
  "w-full px-5 py-[17px] bg-cream/[0.06] border border-cream/[0.14] text-cream font-body text-sm font-light outline-none tracking-[0.3px] transition-colors duration-[250ms] focus:border-gold/50";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark-green py-20 md:py-40 px-5 md:px-10 lg:px-20"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(212,168,83,0.35), transparent)",
        }}
      />
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 30% 40%, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="max-w-[1280px] mx-auto relative grid items-start gap-14 md:gap-24 grid-cols-1 lg:grid-cols-[1.1fr_1fr]"
      >
        {/* Form */}
        <ScrollReveal>
          <div className="font-body text-[10.5px] tracking-[4px] text-gold/65 uppercase mb-8">
            Get In Touch
          </div>
          <h2
            className="font-heading font-light text-cream leading-[1.14] tracking-[-0.5px] mb-12"
            style={{ fontSize: "clamp(34px, 3.6vw, 52px)" }}
          >
            Start a <em className="text-gold">conversation.</em>
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[18px]">
              <input type="text" placeholder="Full name" className={inputClass} />
              <input type="email" placeholder="Email address" className={inputClass} />
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              className={`${inputClass} mb-[18px]`}
            />
            <textarea
              placeholder="How can we help you?"
              rows={4}
              className={`${inputClass} mb-7 resize-y`}
            />
            <button
              type="submit"
              className="px-11 py-[17px] bg-gold border-none text-dark-green font-body text-[11px] font-semibold tracking-[2.5px] uppercase cursor-pointer transition-colors duration-[280ms] hover:bg-gold-hover"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>

        {/* Contact info */}
        <ScrollReveal delay={2} className="pt-[54px]">
          <div className="flex flex-col gap-9">
            <div>
              <div className="font-body text-[10px] tracking-[2.5px] text-gold/55 uppercase mb-3">
                Address
              </div>
              <div className="font-heading text-[19px] font-light text-cream/[0.82] leading-[1.55]">
                202, Royal Enclave, Parsi Panchayat Rd, Amba Wadi, Natwar Nagar, 
                <br />
                Andheri East, Mumbai, Maharashtra 400069
              </div>
            </div>

            <div className="h-px bg-cream/10" />

            <div className="grid grid-cols-2 gap-7">
              <div>
                <div className="font-body text-[10px] tracking-[2.5px] text-gold/55 uppercase mb-3">
                  Phone
                </div>
                <div className="font-heading text-[19px] font-light text-cream/[0.82]">
                  +91 90000 12345
                </div>
              </div>
              <div>
                <div className="font-body text-[10px] tracking-[2.5px] text-gold/55 uppercase mb-3">
                  Email
                </div>
                <div className="font-heading text-[19px] font-light text-cream/[0.82]">
                  taviar@gmail.com
                </div>
              </div>
            </div>

            <div className="h-px bg-cream/10" />

            <div>
              <div className="font-body text-[10px] tracking-[2.5px] text-gold/55 uppercase mb-3">
                Working Hours
              </div>
              <div className="font-heading text-[19px] font-light text-cream/[0.82] leading-[1.55]">
                Mon – Sat · 9:30 am – 6:30 pm
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 mt-2 px-7 py-4 border border-gold/45 no-underline font-body text-[11px] tracking-[2.5px] font-medium text-gold uppercase transition-colors duration-300 self-start hover:bg-gold/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
