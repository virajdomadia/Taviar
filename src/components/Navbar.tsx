"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Partner", href: "/#partner" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  const uid = useId();
  const gradientId = `wa-grad-${uid}`;
  const shadowId = `wa-shadow-${uid}`;

  return (
    <svg viewBox="0 0 175.216 175.552" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter id={shadowId} width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        filter={`url(#${shadowId})`}
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill={`url(#${gradientId})`}
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  );
}

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
            ? "py-[13px] bg-[rgba(255,255,255,0.92)] backdrop-blur-[18px] border-b border-gold/[0.14]"
            : "py-[18px] md:py-[26px] bg-transparent border-b border-transparent"
        }`}
      >
        <Link href="/" className="cursor-pointer select-none shrink-0">
          <img
            src="/logo.png"
            alt="Taviar"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-[14px] tracking-[2px] font-bold text-dark-green uppercase no-underline transition-colors duration-[220ms] hover:text-dark-green"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden lg:inline-flex items-center gap-2 font-body text-[11px] tracking-[2.5px] font-medium text-dark-green uppercase no-underline border border-dark-green/40 px-[26px] py-[11px] transition-all duration-300 hover:bg-gold-light"
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0" />
          Contact Us
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-dark-green transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-dark-green transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-dark-green transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[199] bg-[rgba(255,255,255,0.98)] backdrop-blur-[24px] flex flex-col items-center justify-center gap-8 transition-all duration-[400ms] lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-body text-[16px] tracking-[3px] font-bold text-dark-green/75 uppercase no-underline transition-colors duration-[220ms] hover:text-dark-green"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 inline-flex items-center gap-2 font-body text-[11px] tracking-[2.5px] font-medium text-dark-green uppercase no-underline border border-dark-green/40 px-[26px] py-[11px] transition-all duration-300 hover:bg-gold-light"
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0" />
          Book Consultation
        </Link>
      </div>
    </>
  );
}
