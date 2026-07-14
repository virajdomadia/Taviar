"use client";

import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <div className="bg-black py-[15px]">
      <Marquee speed={40} gradient={false} autoFill>
        <span className="font-body text-[11px] tracking-[3.5px] text-white uppercase">
          Dermatologist Tested
          <span className="mx-6 text-white/40">·</span>
        </span>
      </Marquee>
    </div>
  );
}
