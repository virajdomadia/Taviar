"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Partner", href: "/#partner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-5 md:px-10 lg:px-[60px] transition-all duration-[350ms] ${
          scrolled
            ? "py-[13px] bg-[rgba(12,20,12,0.94)] backdrop-blur-[18px] border-b border-gold/10"
            : "py-[18px] md:py-[26px] bg-transparent border-b border-transparent"
        }`}
      >
        <Link href="/" className="cursor-pointer select-none shrink-0">
          <img
            src="/logo-white.png"
            alt="Taviar"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-[11.5px] tracking-[2px] text-cream/60 uppercase no-underline transition-colors duration-[220ms] hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden lg:inline-block font-body text-[11px] tracking-[2.5px] font-medium text-gold uppercase no-underline border border-gold/45 px-[26px] py-[11px] transition-all duration-300 hover:bg-gold/10"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[199] bg-[rgba(12,20,12,0.97)] backdrop-blur-[24px] flex flex-col items-center justify-center gap-8 transition-all duration-[400ms] lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-body text-[13px] tracking-[3px] text-cream/70 uppercase no-underline transition-colors duration-[220ms] hover:text-cream"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-body text-[11px] tracking-[2.5px] font-medium text-gold uppercase no-underline border border-gold/45 px-[26px] py-[11px] transition-all duration-300 hover:bg-gold/10"
        >
          Book Consultation
        </Link>
      </div>
    </>
  );
}
