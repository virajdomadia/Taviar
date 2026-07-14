"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqData = [
  { q: "Are your products AYUSH approved?", a: "Every formulation in our catalogue is manufactured under a valid AYUSH licence and complies fully with the Ministry of AYUSH guidelines for Ayurvedic proprietary medicine." },
  { q: "Do you provide third-party manufacturing?", a: "Yes. Our GMP-certified facility offers complete third-party and contract manufacturing — from formulation and stability testing to filling, packaging, and regulatory documentation." },
  { q: "Do you offer private labelling?", a: "We provide end-to-end private label services, allowing you to launch a fully branded Ayurvedic skincare range with bespoke formulations, packaging design, and compliance support." },
  { q: "Are products suitable for all skin types?", a: "Our formulations are dermatologically tested and developed for all skin types, including sensitive skin. Each product specifies its ideal use and skin concern on the label." },
  { q: "What certifications do you hold?", a: "We are GMP certified, ISO 9001:2015 certified, AYUSH licensed, and operate under stringent in-house and third-party quality assurance protocols." },
  { q: "How can I become a distributor?", a: "Submit an enquiry through our Partner With Us section. Our distribution team will share territory availability, margin structures, and onboarding details within 24 hours." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-transparent py-20 md:py-40 px-5 md:px-10 lg:px-20">
      <div className="max-w-[880px] mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-[84px]">
          <div className="font-body text-[10.5px] tracking-[4px] text-gold uppercase mb-7">
            Frequently Asked
          </div>
          <h2
            className="font-heading font-light text-dark-green leading-[1.12] tracking-[-0.5px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            Questions, <em>answered.</em>
          </h2>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={1} className="border-t border-dark-green/[0.12]">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-dark-green/[0.12]">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-[30px] bg-transparent border-none cursor-pointer text-left"
                >
                  <span
                    className="font-heading font-normal text-dark-green leading-[1.3]"
                    style={{ fontSize: "clamp(19px, 2vw, 24px)" }}
                  >
                    {faq.q}
                  </span>
                  <span className="font-heading text-[30px] font-light text-gold shrink-0 leading-none w-6 text-center">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isOpen ? "240px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    padding: isOpen ? "0 0 32px" : "0",
                    transitionTimingFunction:
                      "cubic-bezier(0.16, 1, 0.3, 1), ease, ease",
                  }}
                >
                  <p className="font-body text-[14.5px] font-light text-faq leading-[1.86] max-w-[680px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
