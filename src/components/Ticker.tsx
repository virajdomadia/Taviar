"use client";

import Marquee from "react-fast-marquee";

const items = ["Dermatologist Tested"];

function Row() {
  return (
    <>
      {items.map((item) => (
        <span
          key={item}
          className="font-v2-body flex items-center text-[11.5px] font-bold tracking-[3.5px] text-white uppercase"
        >
          {item}
          <span className="mx-8 text-[15px] text-[#A5BCFF]">❋</span>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="relative z-[3] -my-4 overflow-hidden">
      <div
        className="relative -mx-4 py-[16px] shadow-[0_20px_50px_rgba(30,64,175,0.3)]"
        style={{ background: "linear-gradient(100deg, #1D4ED8, #1E40AF 45%, #312E81)" }}
      >
        <Marquee speed={45} gradient={false} autoFill>
          <Row />
        </Marquee>
      </div>
    </div>
  );
}
