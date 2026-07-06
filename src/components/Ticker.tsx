const TEXT =
  "CLINICALLY VALIDATED  ·  47 BOTANICAL ACTIVES  ·  12 PUBLISHED TRIALS  ·  FEATURED IN VOGUE INDIA  ·  5,000 YEARS OF WISDOM  ·  AS SEEN IN HARPER'S BAZAAR  ·  TRUSTED BY LEADING DERMATOLOGISTS  ·   ";

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-white py-[15px] border-y border-gold/[0.13]">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "spTicker 24s linear infinite" }}
      >
        <span className="font-body text-[11px] tracking-[3.5px] text-gold/55 uppercase">
          {TEXT}
        </span>
        <span className="font-body text-[11px] tracking-[3.5px] text-gold/55 uppercase">
          {TEXT}
        </span>
      </div>
    </div>
  );
}
