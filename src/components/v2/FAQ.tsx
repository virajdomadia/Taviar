"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqData = [
  {
    q: "Are your products AYUSH approved?",
    a: "Every formulation in our catalogue is manufactured under a valid AYUSH licence and complies fully with the Ministry of AYUSH guidelines for Ayurvedic proprietary medicine.",
  },
  {
    q: "Do you provide third-party manufacturing?",
    a: "Yes. Our GMP-certified facility offers complete third-party and contract manufacturing — from formulation and stability testing to filling, packaging, and regulatory documentation.",
  },
  {
    q: "Do you offer private labelling?",
    a: "We provide end-to-end private label services, allowing you to launch a fully branded Ayurvedic range with bespoke formulations, packaging design, and compliance support.",
  },
  {
    q: "Are products suitable for everyone?",
    a: "Our formulations are developed under strict quality standards and each product specifies its ideal use, dosage, and precautions on the label. Consult your healthcare practitioner for personalised advice.",
  },
  {
    q: "What certifications do you hold?",
    a: "We are GMP certified, ISO 9001:2015 certified, AYUSH licensed, and operate under stringent in-house and third-party quality assurance protocols.",
  },
  {
    q: "How can I become a distributor?",
    a: "Submit an enquiry through our Partner With Us section. Our distribution team will share territory availability, margin structures, and onboarding details within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-5 py-24 md:px-10 md:py-36 lg:px-20"
      style={{ background: "linear-gradient(180deg, #E9EEFB 0%, #FFFFFF 45%)" }}
    >
      <div className="mx-auto max-w-[860px]">
        <Reveal className="mb-14 text-center md:mb-20">
          <div className="font-v2-body mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[4px] text-[#1E40AF] uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#1E40AF]" />
            Frequently Asked
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#1E40AF]" />
          </div>
          <h2
            className="font-v2-head leading-[1.1] font-medium tracking-[-1px] text-[#06123A]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            Questions, <em className="v2-grad-text italic">answered.</em>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "border-[#1E40AF]/25 bg-white shadow-[0_20px_60px_rgba(30,64,175,0.12)]"
                      : "border-[#1E40AF]/10 bg-white/60 hover:border-[#1E40AF]/25 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-6 text-left md:px-9"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-v2-head font-semibold text-[#06123A]"
                      style={{ fontSize: "clamp(17px, 1.9vw, 21px)" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[18px] transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 text-white"
                          : "bg-[#E9EEFB] text-[#1E40AF]"
                      }`}
                      style={isOpen ? { background: "var(--v2-grad)" } : undefined}
                    >
                      +
                    </span>
                  </button>
                  <div className={`v2-acc ${isOpen ? "v2-open" : ""}`}>
                    <div>
                      <p className="font-v2-body max-w-[640px] px-7 pb-7 text-[14.5px] leading-[1.9] text-[#0B1F4E]/65 md:px-9">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
