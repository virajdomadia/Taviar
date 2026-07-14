const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "#why" },
    { label: "Partner With Us", href: "#partner" },
    { label: "FAQ", href: "#faq" },
  ],
  Products: [
    { label: "Mind & Sleep", href: "#products" },
    { label: "Joint & Bone Care", href: "#products" },
    { label: "Sugar Balance", href: "#products" },
    { label: "Women's Wellness", href: "#products" },
  ],
  Certifications: [
    { label: "GMP Certified", href: "#certifications" },
    { label: "ISO Certified", href: "#certifications" },
    { label: "AYUSH Licensed", href: "#certifications" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,64,175,0.25), transparent 60%), linear-gradient(180deg, #0B1F4E 0%, #06123A 100%)",
      }}
    >
      {/* Wave divider */}
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="absolute top-0 h-[46px] w-full text-white"
        aria-hidden
      >
        <path
          d="M0 0h1440v18c-120 26-300 44-480 44S600 40 420 34 120 26 0 42V0Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-5 pt-32 pb-10 md:px-10 lg:px-16">
        {/* Columns */}
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <img src="/logo-white.png" alt="Taviar" className="mb-6 h-20 w-auto" />
            <p className="font-v2-body max-w-[280px] text-[13.5px] leading-[1.85] text-white/55">
              Pharmaceutical wholesale &amp; retail distribution — genuine
              Ayurvedic medicines, sourced with integrity and delivered with
              care across India.
            </p>
            <div className="mt-8 flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="font-v2-body flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-4 text-[10px] font-bold tracking-[1.5px] text-white/60 uppercase transition-all duration-300 hover:border-[#A5BCFF]/50 hover:text-white"
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="font-v2-body mb-6 text-[10px] font-bold tracking-[3px] text-[#A5BCFF]/70 uppercase">
                {title}
              </div>
              <div className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-v2-body group inline-flex items-center gap-2 text-[13.5px] text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#A5BCFF] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-8 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(165,188,255,0.35), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="font-v2-body text-[12px] text-white/40">
            &copy; 2024 Taviar Enterprises Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((text) => (
              <a
                key={text}
                href="#"
                className="font-v2-body text-[12px] text-white/40 transition-colors duration-300 hover:text-white"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
