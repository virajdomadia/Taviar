const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why" },
    { label: "Partner With Us", href: "#partner" },
    { label: "FAQ", href: "#faq" },
  ],
  Products: [
    { label: "Acne Care", href: "#products" },
    { label: "Pigmentation Care", href: "#products" },
    { label: "Anti-Aging", href: "#products" },
    { label: "Daily Skin Care", href: "#products" },
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
    <footer className="bg-darkest px-5 md:px-10 lg:px-20 pt-14 md:pt-[88px] pb-11">
      <div className="max-w-[1280px] mx-auto">
        {/* Columns */}
        <div
          className="grid gap-10 md:gap-20 mb-14 md:mb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          {/* Brand */}
          <div>
            <img
              src="/logo-white.png"
              alt="Taviar"
              className="h-20 w-auto mb-6"
            />
            <p className="font-body text-[13px] font-light text-cream/[0.36] leading-[1.84] max-w-[260px]">
              Premium Ayurvedic skincare formulated to pharmaceutical standards.
              Where ancient wisdom meets modern skin science.
            </p>
            <div className="mt-9 flex gap-5">
              {["Ig", "Fb", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-[11px] tracking-[2px] text-cream/30 no-underline uppercase transition-colors duration-[220ms] hover:text-cream/85"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="font-body text-[10px] tracking-[3px] text-gold/[0.42] uppercase mb-7">
                {title}
              </div>
              <div className="flex flex-col gap-[15px]">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-[13px] font-light text-cream/[0.42] no-underline transition-colors duration-[220ms] hover:text-cream/85"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,168,83,0.22), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-body text-xs font-light text-cream/20 tracking-[0.4px]">
            &copy; 2024 The Skin Pharmacy. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((text) => (
              <a
                key={text}
                href="#"
                className="font-body text-xs font-light text-cream/20 no-underline transition-colors duration-[220ms] hover:text-cream/85"
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
