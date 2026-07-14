/** Lotus-mandala line art rendered in currentColor — the V2 signature motif. */
export default function Mandala({
  className = "",
  petals = 12,
  style,
}: {
  className?: string;
  petals?: number;
  style?: React.CSSProperties;
}) {
  const angles = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  const inner = Array.from({ length: petals }, (_, i) => (360 / petals) * i + 360 / petals / 2);

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="197" stroke="currentColor" strokeOpacity="0.35" />
      <circle
        cx="200"
        cy="200"
        r="178"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeDasharray="2 9"
      />
      {angles.map((a) => (
        <g key={`p-${a}`} transform={`rotate(${a} 200 200)`}>
          <path
            d="M200 26 C 236 84, 236 142, 200 198 C 164 142, 164 84, 200 26 Z"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <path
            d="M200 62 C 222 104, 222 152, 200 190 C 178 152, 178 104, 200 62 Z"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <circle cx="200" cy="16" r="2.6" fill="currentColor" fillOpacity="0.5" />
        </g>
      ))}
      {inner.map((a) => (
        <g key={`q-${a}`} transform={`rotate(${a} 200 200)`}>
          <path
            d="M200 118 C 214 148, 214 176, 200 198 C 186 176, 186 118 200 118 Z"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
        </g>
      ))}
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeOpacity="0.4" />
      <circle
        cx="200"
        cy="200"
        r="52"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeDasharray="3 7"
      />
      <circle cx="200" cy="200" r="7" stroke="currentColor" strokeOpacity="0.55" />
    </svg>
  );
}

/** Simple herbal leaf, stroke-based, used for drifting ambient accents. */
export function Leaf({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M32 6 C 50 18, 54 40, 32 58 C 10 40, 14 18, 32 6 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 12 V 52" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M32 22 C 26 24, 22 28, 20 33 M32 30 C 38 32, 42 36, 44 41 M32 38 C 27 40, 24 43, 23 46"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
