export type TrackingStep = {
  label: string;
  timestamp: string | null;
};

export type TrackingStatus = "processing" | "in_transit" | "delivered";

export type Shipment = {
  id: string;
  status: TrackingStatus;
  statusLabel: string;
  eta: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  rider: string;
  packageType: string;
  steps: TrackingStep[];
};

export const STEP_LABELS = [
  "Order Received",
  "Pickup Booked",
  "Collected",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

/**
 * Placeholder shipment data. Swap this lookup for a real tracking API call
 * without changing the UI: keep the Shipment shape and return null when unknown.
 */
const DEMO: Record<string, Shipment> = {
  "MDT-2381045": {
    id: "MDT-2381045",
    status: "in_transit",
    statusLabel: "Out for Delivery",
    eta: "Today, before 6:00pm",
    sender: "Aderin Fashion House",
    recipient: "O****i A.",
    origin: "Wuye, Abuja",
    destination: "Lekki Phase 1, Lagos",
    rider: "Samuel O.",
    packageType: "Parcel — 3.2kg",
    steps: [
      { label: "Order Received", timestamp: "Mon, 08:12am" },
      { label: "Pickup Booked", timestamp: "Mon, 08:40am" },
      { label: "Collected", timestamp: "Mon, 10:05am" },
      { label: "In Transit", timestamp: "Mon, 11:30am" },
      { label: "Out for Delivery", timestamp: "Tue, 09:15am" },
      { label: "Delivered", timestamp: null },
    ],
  },
  "MDT-2381099": {
    id: "MDT-2381099",
    status: "delivered",
    statusLabel: "Delivered",
    eta: "Delivered Tue, 02:41pm",
    sender: "Bloom Beauty Ltd",
    recipient: "C****e N.",
    origin: "Ikeja, Lagos",
    destination: "Port Harcourt, Rivers",
    rider: "Idris B.",
    packageType: "Bulk carton — 12kg",
    steps: STEP_LABELS.map((label, i) => ({
      label,
      timestamp: [
        "Sun, 04:10pm",
        "Sun, 04:35pm",
        "Mon, 09:00am",
        "Mon, 12:20pm",
        "Tue, 10:02am",
        "Tue, 02:41pm",
      ][i]!,
    })),
  },
  "MDT-2381120": {
    id: "MDT-2381120",
    status: "processing",
    statusLabel: "Processing Pickup",
    eta: "Pickup scheduled today, 2:00pm – 4:00pm",
    sender: "Northline Pharmacy",
    recipient: "T****a S.",
    origin: "Wuse 2, Abuja",
    destination: "Asaba, Delta",
    rider: "Awaiting assignment",
    packageType: "Sealed medical box — 5kg",
    steps: [
      { label: "Order Received", timestamp: "Today, 07:55am" },
      { label: "Pickup Booked", timestamp: "Today, 08:20am" },
      { label: "Collected", timestamp: null },
      { label: "In Transit", timestamp: null },
      { label: "Out for Delivery", timestamp: null },
      { label: "Delivered", timestamp: null },
    ],
  },
};

export function findShipment(id: string): Shipment | null {
  return DEMO[id.trim().toUpperCase()] ?? null;
}

export const DEMO_IDS = Object.keys(DEMO);
