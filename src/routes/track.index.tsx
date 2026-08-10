import { createFileRoute } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";
import { TrackForm } from "@/components/TrackForm";
import { DEMO_IDS } from "@/lib/tracking";

export const Route = createFileRoute("/track/")({
  component: TrackLanding,
  head: () => ({
    meta: [
      { title: "Track Your Delivery | Midetoria Logistics" },
      {
        name: "description",
        content:
          "Enter your Midetoria Logistics tracking ID to see live delivery status, timeline and estimated arrival time.",
      },
      { property: "og:title", content: "Track Your Delivery | Midetoria Logistics" },
      {
        property: "og:description",
        content: "Live delivery status and timeline for every Midetoria shipment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/track" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/track" }],
  }),
});

function TrackLanding() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
        <PackageSearch className="size-7" />
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl">Track Your Delivery</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Enter your tracking ID to see exactly where your parcel is. You'll find your tracking ID in
        your delivery confirmation SMS or email.
      </p>
      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8">
        <TrackForm compact />
        <p className="mt-4 text-xs text-muted-foreground">
          Demo IDs you can try: {DEMO_IDS.join(", ")}
        </p>
      </div>
    </main>
  );
}