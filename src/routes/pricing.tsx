import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/data/site";
import { whatsappLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Partnership Packages | Midetoria Logistics" },
      {
        name: "description",
        content:
          "Bronze, Silver, Gold and Enterprise logistics partnership packages for Nigerian businesses — transparent pricing, dedicated support and same-day local delivery.",
      },
      { property: "og:title", content: "Partnership Packages | Midetoria Logistics" },
      {
        property: "og:description",
        content: "Choose the Midetoria delivery partnership that matches your order volume.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

function PricingPage() {
  return (
    <main>
      <section className="triangle-accents bg-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs tracking-[0.25em] text-brand uppercase">Partnership packages</p>
          <h1 className="mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
            Delivery partnerships built around your order volume.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Transparent pricing, dedicated support and consistent delivery windows. Talk to us and
            we'll match you to the right tier.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1",
                p.popular
                  ? "border-brand bg-card shadow-glow"
                  : "border-border bg-tint hover:shadow-lift",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-brand-foreground uppercase">
                  Most popular
                </span>
              )}
              <h2 className="text-2xl">{p.name}</h2>
              <p className="mt-1 text-sm text-brand">{p.audience}</p>
              <ul className="mt-5 flex-1 space-y-3 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.popular ? "brand" : "outlineNavy"} className="mt-6 h-11">
                <a href={whatsappLink(p.message)} target="_blank" rel="noreferrer">
                  Talk to Us
                </a>
              </Button>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl bg-navy p-8 text-white sm:p-10">
            <h2 className="text-2xl text-white">Not sure which tier fits?</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Send us your monthly delivery volume and destinations. We'll recommend a package and
              share indicative pricing the same day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  Chat With Us on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/contact">Send an inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}