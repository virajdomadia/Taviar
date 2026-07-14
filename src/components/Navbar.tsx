"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Partner", href: "#partner" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
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
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-full px-4 pl-5 transition-all duration-500 ${
            scrolled
              ? "v2-glass mx-4 py-2 md:mx-auto"
              : "border border-transparent bg-transparent py-2"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3 select-none">
            <img src="/logo.png" alt="Taviar" className="h-15 w-auto md:h-18" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-v2-body rounded-full px-4 py-2 text-[18px] font-semibold tracking-[0.4px] text-black transition-all duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            className="font-v2-body group relative hidden items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[11.5px] font-bold tracking-[1.5px] text-white uppercase lg:inline-flex"
            style={{ background: "var(--v2-grad)" }}
          >
            <WhatsAppIcon className="relative z-10 h-4 w-4 shrink-0" />
            <span className="relative z-10">Contact Us</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 bg-[#06123A] opacity-0 transition-opacity duration-300 group-hover:opacity-25" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] rounded-full border border-[#1E40AF]/20 bg-white/70 p-3 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-5 rounded bg-[#0B1F4E] transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded bg-[#0B1F4E] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded bg-[#0B1F4E] transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[199] flex flex-col items-center justify-center gap-2 bg-white/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {navLinks.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-v2-head py-2 text-[32px] font-medium text-[#0B1F4E] transition-all duration-500 hover:text-[#1E40AF]"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(24px)",
              transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
            }}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="font-v2-body mt-6 rounded-full px-9 py-4 text-[12px] font-bold tracking-[2px] text-white uppercase"
          style={{
            background: "var(--v2-grad)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(24px)",
            transition: "all .5s ease",
            transitionDelay: menuOpen ? "480ms" : "0ms",
          }}
        >
          Book Consultation
        </a>
      </div>
    </>
  );
}
