"use client";

import Reveal from "./Reveal";
import Mandala, { Leaf } from "./Mandala";

const inputClass =
  "font-v2-body w-full rounded-2xl border border-[#1E40AF]/15 bg-[#F4F7FD] px-5 py-4 text-[14px] text-[#0B1F4E] outline-none transition-all duration-300 placeholder:text-[#0B1F4E]/35 focus:border-[#1D4ED8]/70 focus:bg-white focus:ring-4 focus:ring-[#1D4ED8]/15";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <Reveal variant="zoom">
          <div className="grid grid-cols-1 overflow-hidden rounded-[36px] shadow-[0_50px_120px_rgba(6,18,58,0.25)] lg:grid-cols-[1fr_1.15fr]">
            {/* Left — info panel */}
            <div
              className="relative overflow-hidden p-10 text-white md:p-14"
              style={{
                background:
                  "radial-gradient(ellipse 90% 60% at 90% 0%, rgba(109,141,255,0.35), transparent 55%), linear-gradient(160deg, #0B1F4E 0%, #06123A 65%, #101B54 100%)",
              }}
            >
              <Mandala
                className="absolute -bottom-32 -left-32 h-[420px] w-[420px] text-[#A5BCFF]/20"
                style={{ animation: "v2Spin 90s linear infinite" }}
              />
              <Leaf
                className="absolute top-10 right-10 h-8 w-8 text-[#A5BCFF]/40"
                style={{ animation: "v2Drift2 12s ease-in-out infinite" }}
              />

              <div className="relative">
                <div className="font-v2-body mb-6 text-[10.5px] font-bold tracking-[3.5px] text-[#A5BCFF] uppercase">
                  Get In Touch
                </div>
                <h2
                  className="font-v2-head mb-10 leading-[1.15] font-medium tracking-[-0.5px]"
                  style={{ fontSize: "clamp(30px, 3vw, 44px)" }}
                >
                  Start a<br />
                  <em className="italic text-[#A5BCFF]">conversation.</em>
                </h2>

                <div className="flex flex-col gap-7">
                  <div>
                    <div className="font-v2-body mb-2 text-[9px] font-bold tracking-[2.5px] text-white/40 uppercase">
                      Address
                    </div>
                    <div className="font-v2-body text-[14.5px] leading-[1.75] text-white/85">
                      202, Royal Enclave, Parsi Panchayat Rd, Amba Wadi, Natwar
                      Nagar, Andheri East, Mumbai, Maharashtra 400069
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <div>
                      <div className="font-v2-body mb-2 text-[9px] font-bold tracking-[2.5px] text-white/40 uppercase">
                        Phone
                      </div>
                      <div className="font-v2-body text-[15px] text-white/85">+91 90000 12345</div>
                    </div>
                    <div>
                      <div className="font-v2-body mb-2 text-[9px] font-bold tracking-[2.5px] text-white/40 uppercase">
                        Email
                      </div>
                      <div className="font-v2-body text-[15px] text-white/85">taviar@gmail.com</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-v2-body mb-2 text-[9px] font-bold tracking-[2.5px] text-white/40 uppercase">
                      Working Hours
                    </div>
                    <div className="font-v2-body text-[15px] text-white/85">
                      Mon – Sat · 9:30 am – 6:30 pm
                    </div>
                  </div>

                  <a
                    href="#"
                    className="font-v2-body group mt-2 inline-flex items-center gap-2.5 self-start rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-[10.5px] font-bold tracking-[2px] uppercase backdrop-blur transition-all duration-300 hover:border-[#A5BCFF]/60 hover:bg-white/[0.12]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#A5BCFF]" aria-hidden>
                      <path
                        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 8.5c.4 2.8 2.7 5.4 5.5 6.2l1.3-1.4 2 1.2c-.4 1.5-1.8 2.3-3.3 1.9-3.6-1-6.6-4-7.5-7.7-.3-1.4.5-2.8 2-3.1l1.1 2-1.1.9Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white p-10 md:p-14">
              <div className="font-v2-body mb-9 text-[13px] leading-[1.8] text-[#0B1F4E]/55">
                Tell us a little about yourself and our team will get back to
                you within one business day.
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Full name" className={inputClass} />
                  <input type="email" placeholder="Email address" className={inputClass} />
                </div>
                <input type="tel" placeholder="Phone number" className={`${inputClass} mb-4`} />
                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className={`${inputClass} mb-7 resize-y`}
                />
                <button
                  type="submit"
                  className="font-v2-body group relative w-full cursor-pointer overflow-hidden rounded-full px-10 py-[18px] text-[12px] font-bold tracking-[2.5px] text-white uppercase shadow-[0_18px_45px_rgba(30,64,175,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--v2-grad)" }}
                >
                  <span className="relative z-10">Send Message →</span>
                  <span className="absolute inset-0 bg-[#06123A] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
