export default function Bottle() {
  return (
    <svg
      viewBox="0 0 160 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-[2] min-h-[390px] max-h-[540px]"
      style={{
        height: "58vh",
        filter:
          "drop-shadow(0 70px 120px rgba(0,0,0,.65)) drop-shadow(0 24px 55px rgba(212,168,83,.22))",
        animation: "floatBottle 7s ease-in-out infinite",
      }}
    >
      <defs>
        <linearGradient id="liqG" x1="30" y1="0" x2="130" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#543008" />
          <stop offset="16%" stopColor="#8A4E0E" />
          <stop offset="38%" stopColor="#BE7E18" />
          <stop offset="56%" stopColor="#DCA020" />
          <stop offset="72%" stopColor="#E8B82A" />
          <stop offset="86%" stopColor="#BE7E18" />
          <stop offset="100%" stopColor="#543008" />
        </linearGradient>
        <linearGradient id="glG" x1="30" y1="0" x2="130" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(158,214,190,.68)" />
          <stop offset="5.5%" stopColor="rgba(218,245,232,.58)" />
          <stop offset="13%" stopColor="rgba(205,238,222,.13)" />
          <stop offset="76%" stopColor="rgba(178,224,203,.04)" />
          <stop offset="91%" stopColor="rgba(202,236,218,.3)" />
          <stop offset="100%" stopColor="rgba(148,196,175,.56)" />
        </linearGradient>
        <linearGradient id="cpG" x1="80" y1="2" x2="80" y2="83" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0DC94" />
          <stop offset="22%" stopColor="#D6AA3C" />
          <stop offset="60%" stopColor="#9C741A" />
          <stop offset="100%" stopColor="#785C12" />
        </linearGradient>
        <linearGradient id="cpSh" x1="57" y1="0" x2="103" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,.38)" />
          <stop offset="38%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,.14)" />
        </linearGradient>
        <linearGradient id="nkLiq" x1="63" y1="0" x2="97" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#543008" />
          <stop offset="42%" stopColor="#BE7E18" />
          <stop offset="62%" stopColor="#DCA020" />
          <stop offset="100%" stopColor="#543008" />
        </linearGradient>
        <linearGradient id="nkGl" x1="63" y1="0" x2="97" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(158,214,190,.58)" />
          <stop offset="26%" stopColor="rgba(218,245,232,.36)" />
          <stop offset="74%" stopColor="rgba(170,218,200,.12)" />
          <stop offset="100%" stopColor="rgba(148,200,178,.5)" />
        </linearGradient>
        <radialGradient id="igG" cx="53" cy="215" r="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,210,72,.32)" />
          <stop offset="52%" stopColor="rgba(210,158,36,.08)" />
          <stop offset="100%" stopColor="rgba(210,158,36,0)" />
        </radialGradient>
        <linearGradient id="lbG" x1="80" y1="248" x2="80" y2="366" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,.04)" />
        </linearGradient>
      </defs>
      {/* CAP */}
      <rect x="76" y="2" width="8" height="22" rx="4" fill="url(#cpG)" />
      <rect x="76" y="2" width="8" height="22" rx="4" fill="url(#cpSh)" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="url(#cpG)" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="url(#cpSh)" />
      <rect x="57" y="47" width="46" height="37" rx="2.5" fill="url(#cpG)" />
      <rect x="57" y="47" width="46" height="37" rx="2.5" fill="url(#cpSh)" />
      <rect x="54" y="80" width="52" height="6" rx="1" fill="url(#cpG)" />
      <rect x="54" y="81" width="52" height="3.5" rx=".5" fill="rgba(70,44,0,.45)" />
      {/* NECK */}
      <rect x="64" y="86" width="32" height="57" fill="url(#nkLiq)" opacity=".62" />
      <rect x="63" y="86" width="34" height="57" fill="url(#nkGl)" />
      <line x1="68.5" y1="89" x2="68.5" y2="141" stroke="rgba(255,255,255,.62)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="91" y1="89" x2="91" y2="141" stroke="rgba(0,0,0,.07)" strokeWidth="1.2" strokeLinecap="round" />
      {/* BODY */}
      <path d="M63 143 C63 156 30 170 30 192 L30 434 Q30 462 80 462 Q130 462 130 434 L130 192 C130 170 97 156 97 143 Z" fill="url(#liqG)" />
      <ellipse cx="80" cy="183" rx="40" ry="7.5" fill="rgba(232,190,68,.76)" />
      <ellipse cx="80" cy="183" rx="33" ry="4.8" fill="rgba(255,228,115,.52)" />
      <path d="M63 143 C63 156 30 170 30 192 L30 434 Q30 462 80 462 Q130 462 130 434 L130 192 C130 170 97 156 97 143 Z" fill="url(#igG)" />
      <path d="M63 143 C63 156 30 170 30 192 L30 434 Q30 462 80 462 Q130 462 130 434 L130 192 C130 170 97 156 97 143 Z" fill="url(#glG)" />
      <path d="M39 180 C37 194 36 210 36 224 L36 398 C36 416 39 428 44 437" stroke="rgba(255,255,255,.7)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M47 176 C45 192 44 208 44 222 L44 368" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M121 196 C123 210 124 226 124 240 L124 402 C122 418 120 430 118 438" stroke="rgba(255,255,255,.18)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* LABEL */}
      <rect x="38" y="248" width="84" height="118" rx="1" fill="url(#lbG)" stroke="rgba(212,175,80,.22)" strokeWidth=".5" />
      <text x="80" y="275" textAnchor="middle" fontFamily="Georgia,serif" fontSize="6.5" fill="rgba(212,175,80,.9)" letterSpacing="3">THE SKIN</text>
      <text x="80" y="290" textAnchor="middle" fontFamily="Georgia,serif" fontSize="6.5" fill="rgba(212,175,80,.9)" letterSpacing="3">PHARMACY</text>
      <line x1="50" y1="298" x2="110" y2="298" stroke="rgba(212,175,80,.3)" strokeWidth=".4" />
      <text x="80" y="314" textAnchor="middle" fontFamily="Georgia,serif" fontSize="5.8" fill="rgba(212,175,80,.65)" letterSpacing="1.5" fontStyle="italic">Kumkumadi Elixir</text>
      <text x="80" y="328" textAnchor="middle" fontFamily="Georgia,serif" fontSize="5" fill="rgba(212,175,80,.5)" letterSpacing="1">No. I · 30 ml</text>
      <line x1="50" y1="336" x2="110" y2="336" stroke="rgba(212,175,80,.2)" strokeWidth=".4" />
      <text x="80" y="351" textAnchor="middle" fontFamily="Georgia,serif" fontSize="4.5" fill="rgba(212,175,80,.44)" letterSpacing="2.5">DOSHA FORMULATION</text>
      <ellipse cx="80" cy="460" rx="46" ry="7" fill="rgba(218,178,58,.1)" />
    </svg>
  );
}
