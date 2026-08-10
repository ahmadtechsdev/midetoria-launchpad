/** Stylised, simplified Nigeria outline with orange pins on served regions. */
export function NigeriaMap({ className }: { className?: string }) {
  const pins = [
    { x: 300, y: 168, label: "Abuja" },
    { x: 168, y: 268, label: "Lagos" },
    { x: 300, y: 320, label: "Port Harcourt" },
    { x: 252, y: 300, label: "Delta" },
    { x: 330, y: 70, label: "Northern Nigeria" },
  ];

  return (
    <svg
      viewBox="0 0 500 380"
      role="img"
      aria-label="Simplified map of Nigeria highlighting Midetoria coverage in Abuja, Lagos, Delta, Port Harcourt and Northern Nigeria"
      className={className}
    >
      <path
        d="M70 120 L120 70 L200 52 L280 30 L360 44 L430 78 L444 140 L410 196 L392 250 L340 300 L300 340 L246 330 L200 300 L150 286 L110 240 L84 186 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      {pins.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="16" fill="var(--brand)" fillOpacity="0.18" />
          <circle cx={p.x} cy={p.y} r="6" fill="var(--brand)" />
          <text
            x={p.x + 14}
            y={p.y + 4}
            fill="currentColor"
            fontSize="13"
            fontFamily="var(--font-sans)"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
