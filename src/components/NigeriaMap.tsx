/** Stylised Nigeria outline with every covered state and hub plotted geographically. */

// Simple equirectangular projection tuned to Nigeria's bounding box.
const project = (lon: number, lat: number): [number, number] => [
  lon * 37 - 67.5,
  512 - 34.3 * lat,
];

const OUTLINE: [number, number][] = [
  [2.8, 12.0],
  [3.6, 13.0],
  [4.1, 13.5],
  [5.4, 13.9],
  [6.9, 13.3],
  [8.5, 13.1],
  [9.9, 13.0],
  [11.0, 13.4],
  [12.5, 13.4],
  [13.6, 13.7],
  [14.6, 12.6],
  [14.2, 11.6],
  [13.5, 10.6],
  [13.3, 9.6],
  [12.8, 9.3],
  [12.6, 8.5],
  [11.6, 7.0],
  [10.8, 6.8],
  [10.0, 6.5],
  [9.5, 6.4],
  [8.9, 5.6],
  [8.5, 4.8],
  [7.5, 4.5],
  [6.5, 4.4],
  [5.4, 5.6],
  [4.5, 6.2],
  [3.5, 6.4],
  [2.7, 6.4],
  [2.7, 9.0],
  [3.6, 10.3],
  [3.6, 11.7],
];

type Place = { name: string; lon: number; lat: number; anchor?: "start" | "end" };

const HUBS: Place[] = [
  { name: "Abuja", lon: 7.4, lat: 9.05, anchor: "end" },
  { name: "Lagos", lon: 3.4, lat: 6.5 },
  { name: "Delta", lon: 5.9, lat: 5.7 },
  { name: "Port Harcourt", lon: 7.0, lat: 4.8 },
];

const NORTH_WEST: Place[] = [
  { name: "Sokoto", lon: 5.24, lat: 13.06, anchor: "end" },
  { name: "Kebbi", lon: 4.2, lat: 12.45, anchor: "end" },
  { name: "Zamfara", lon: 6.2, lat: 12.2 },
  { name: "Katsina", lon: 7.6, lat: 12.95 },
  { name: "Kano", lon: 8.5, lat: 11.9, anchor: "end" },
  { name: "Jigawa", lon: 9.7, lat: 12.4 },
  { name: "Kaduna", lon: 7.7, lat: 10.5, anchor: "end" },
];

const NORTH_EAST: Place[] = [
  { name: "Bauchi", lon: 10.0, lat: 10.7, anchor: "end" },
  { name: "Gombe", lon: 11.2, lat: 10.3 },
  { name: "Yobe", lon: 11.7, lat: 12.2 },
  { name: "Borno", lon: 13.0, lat: 11.8, anchor: "end" },
  { name: "Adamawa", lon: 12.4, lat: 9.3, anchor: "end" },
  { name: "Taraba", lon: 11.0, lat: 8.0 },
];

const NORTH_CENTRAL: Place[] = [
  { name: "Niger", lon: 6.0, lat: 9.9, anchor: "end" },
  { name: "Kwara", lon: 4.7, lat: 8.6, anchor: "end" },
  { name: "Kogi", lon: 6.8, lat: 7.6, anchor: "end" },
  { name: "Benue", lon: 8.9, lat: 7.2 },
  { name: "Nasarawa", lon: 8.6, lat: 8.4 },
  { name: "Plateau", lon: 9.6, lat: 9.3 },
];

const REGIONS = [
  { label: "North West", places: NORTH_WEST },
  { label: "North East", places: NORTH_EAST },
  { label: "North Central", places: NORTH_CENTRAL },
];

function StateDots({ places }: { places: Place[] }) {
  return (
    <g>
      {places.map((p) => {
        const [x, y] = project(p.lon, p.lat);
        const end = p.anchor === "end";
        return (
          <g key={p.name}>
            <circle cx={x} cy={y} r="4" fill="var(--brand)" fillOpacity="0.85" />
            <text
              x={end ? x - 7 : x + 7}
              y={y + 3.5}
              textAnchor={end ? "end" : "start"}
              fill="currentColor"
              fontSize="10.5"
              fontFamily="var(--font-sans)"
            >
              {p.name}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function NigeriaMap({ className }: { className?: string }) {
  const outlinePath =
    OUTLINE.map(([lon, lat], i) => {
      const [x, y] = project(lon, lat);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ") + " Z";

  return (
    <svg
      viewBox="0 40 500 420"
      role="img"
      aria-label="Map of Nigeria showing Midetoria coverage: hubs in Abuja, Lagos, Delta and Port Harcourt; North Central (Benue, Kogi, Kwara, Nasarawa, Niger, Plateau); North East (Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe); North West (Jigawa, Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara)"
      className={className}
    >
      <path
        d={outlinePath}
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="2"
      />

      {REGIONS.map((r) => (
        <StateDots key={r.label} places={r.places} />
      ))}

      {HUBS.map((h) => {
        const [x, y] = project(h.lon, h.lat);
        const end = h.anchor === "end";
        return (
          <g key={h.name}>
            <circle cx={x} cy={y} r="13" fill="var(--brand)" fillOpacity="0.2" />
            <circle cx={x} cy={y} r="5.5" fill="var(--brand)" />
            <text
              x={end ? x - 10 : x + 10}
              y={y + 4}
              textAnchor={end ? "end" : "start"}
              fill="currentColor"
              fontSize="12.5"
              fontWeight="600"
              fontFamily="var(--font-sans)"
            >
              {h.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
