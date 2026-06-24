"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[60px] transition-all duration-[350ms] ${
        scrolled
          ? "py-[13px] bg-[rgba(12,20,12,0.94)] backdrop-blur-[18px] border-b border-gold/10"
          : "py-[26px] bg-transparent border-b border-transparent"
      }`}
    >
      <div className="font-heading text-sm tracking-[4.5px] text-cream uppercase cursor-pointer select-none">
        The Skin Pharmacy
      </div>

      <div className="flex items-center gap-10">
        {[
          { label: "Company", href: "#about" },
          { label: "Products", href: "#products" },
          { label: "Certifications", href: "#certifications" },
          { label: "Partner", href: "#partner" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-body text-[11.5px] tracking-[2px] text-cream/60 uppercase no-underline transition-colors duration-[220ms] hover:text-cream"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="font-body text-[11px] tracking-[2.5px] font-medium text-gold uppercase no-underline border border-gold/45 px-[26px] py-[11px] transition-all duration-300 hover:bg-gold/10"
      >
        Book Consultation
      </a>
    </nav>
  );
}
