"use client";

import Marquee from "react-fast-marquee";

const items = [
  "100% Ayurvedic Formulations",
  "GMP Certified",
  "AYUSH Licensed",
  "ISO 9001:2015",
  "Pan-India Distribution",
  "Trusted by Healthcare Professionals",
  "Genuine Sourced Medicines",
];

function Row({ inverted }: { inverted?: boolean }) {
  return (
    <>
      {items.map((item) => (
        <span
          key={item}
          className={`font-v2-body flex items-center text-[11.5px] font-bold tracking-[3.5px] uppercase ${
            inverted ? "text-[#0B1F4E]" : "text-white"
          }`}
        >
          {item}
          <span className={`mx-8 text-[15px] ${inverted ? "text-[#1D4ED8]" : "text-[#A5BCFF]"}`}>
            ❋
          </span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="relative z-[3] -my-4 overflow-hidden py-4">
      {/* Blue band, tilted */}
      <div
        className="relative -mx-4 -rotate-1 py-[16px] shadow-[0_20px_50px_rgba(30,64,175,0.3)]"
        style={{ background: "linear-gradient(100deg, #1D4ED8, #1E40AF 45%, #312E81)" }}
      >
        <Marquee speed={45} gradient={false} autoFill>
          <Row />
        </Marquee>
      </div>
      {/* Ice band, counter-tilted, behind */}
      <div className="absolute inset-x-0 top-1/2 -z-10 -mx-4 rotate-1 border-y border-[#1E40AF]/15 bg-[#E9EEFB] py-[14px]">
        <Marquee speed={35} gradient={false} autoFill direction="right">
          <Row inverted />
        </Marquee>
      </div>
    </div>
  );
}
