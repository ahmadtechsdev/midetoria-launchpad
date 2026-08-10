import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, CircleHelp, MapPin, PackageSearch } from "lucide-react";
import { TrackForm } from "@/components/TrackForm";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/brand";
import { findShipment, type Shipment } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/track/$id")({
  component: TrackResult,
  head: ({ params }) => ({
    meta: [
      { title: `Tracking ${params.id} | Midetoria Logistics` },
      {
        name: "description",
        content: `Live delivery status, timeline and shipment details for Midetoria Logistics tracking ID ${params.id}.`,
      },
      { property: "og:title", content: `Tracking ${params.id} | Midetoria Logistics` },
      {
        property: "og:description",
        content: "Follow your Midetoria delivery step by step, from pickup to doorstep.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/track/${params.id}` },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/track/${params.id}` }],
  }),
});

const STATUS_STYLES: Record<Shipment["status"], string> = {
  processing: "bg-navy text-white",
  in_transit: "bg-brand text-brand-foreground",
  delivered: "bg-emerald-600 text-white",
};

function TrackResult() {
  const { id } = Route.useParams();
  const shipment = findShipment(id);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/track" className="text-sm text-muted-foreground hover:text-brand">
        ← Track another order
      </Link>
      <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <TrackForm compact defaultValue={id} />
      </div>

      {!shipment ? (
        <section className="mt-10 rounded-2xl border border-border bg-tint p-8 text-center sm:p-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
            <PackageSearch className="size-8" />
          </div>
          <h1 className="mt-6 text-2xl sm:text-3xl">We couldn't find that tracking ID</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Double-check the ID in your delivery confirmation SMS or email. If it still doesn't
            work, our team can locate your parcel in minutes.
          </p>
          <Button asChild variant="brand" size="lg" className="mt-6">
            <a
              href={whatsappLink(`Hi Midetoria, I can't find my order with tracking ID ${id}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Can't find your order? Chat with support
            </a>
          </Button>
        </section>
      ) : (
        <>
          <section
            className={cn(
              "mt-8 flex flex-col gap-2 rounded-2xl p-6 sm:p-8",
              STATUS_STYLES[shipment.status],
            )}
          >
            <p className="text-xs tracking-[0.2em] uppercase opacity-80">
              Tracking ID {shipment.id}
            </p>
            <h1 className="text-3xl text-white sm:text-4xl">{shipment.statusLabel}</h1>
            <p className="text-sm opacity-90">{shipment.eta}</p>
          </section>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
            <section
              aria-label="Delivery progress"
              className="rounded-2xl border border-border p-6"
            >
              <h2 className="text-lg">Delivery progress</h2>
              <ol className="mt-6 space-y-0">
                {shipment.steps.map((step, i) => {
                  const done = Boolean(step.timestamp);
                  const currentIndex = shipment.steps.findIndex((s) => !s.timestamp) - 1;
                  const isCurrent =
                    i === (currentIndex < 0 ? shipment.steps.length - 1 : currentIndex);
                  return (
                    <li key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className={cn(
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-semibold",
                            done
                              ? "bg-brand text-brand-foreground"
                              : "bg-tint text-muted-foreground",
                            isCurrent && "animate-pulse-ring",
                          )}
                        >
                          {done ? <Check className="size-4" /> : i + 1}
                        </span>
                        {i < shipment.steps.length - 1 && (
                          <span
                            className={cn("my-1 w-px flex-1", done ? "bg-brand/50" : "bg-border")}
                            style={{ minHeight: 28 }}
                          />
                        )}
                      </div>
                      <div className="pb-6">
                        <p
                          className={cn(
                            "font-medium",
                            done ? "text-navy" : "text-muted-foreground",
                            isCurrent && "text-brand",
                          )}
                        >
                          {step.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {step.timestamp ?? "Pending"}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <div className="space-y-6">
              <section className="rounded-2xl border border-border bg-tint p-6">
                <h2 className="text-lg">Shipment details</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Tracking ID", shipment.id],
                    ["Sender", shipment.sender],
                    ["Recipient", shipment.recipient],
                    ["Origin", shipment.origin],
                    ["Destination", shipment.destination],
                    ["Rider / agent", shipment.rider],
                    ["Package", shipment.packageType],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-right font-medium text-navy">{v}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="rounded-2xl border border-border p-6">
                <h2 className="text-lg">Live location</h2>
                <div className="relative mt-4 grid h-44 place-items-center overflow-hidden rounded-xl bg-navy text-white/70 triangle-accents">
                  <div className="text-center">
                    <MapPin className="mx-auto size-6 text-brand" />
                    <p className="mt-2 text-sm">Live map coming soon</p>
                    <p className="text-xs opacity-70">{shipment.destination}</p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
                <h2 className="flex items-center gap-2 text-lg">
                  <CircleHelp className="size-5 text-brand" /> Need help with this order?
                </h2>
                <Button asChild variant="brand" size="lg" className="mt-4 w-full">
                  <a
                    href={whatsappLink(
                      `Hi Midetoria, I need help with my delivery. Tracking ID: ${shipment.id}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat with support on WhatsApp
                  </a>
                </Button>
              </section>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
