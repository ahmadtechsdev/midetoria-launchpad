import { Link } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Timer } from "lucide-react";
import { TrackForm } from "@/components/TrackForm";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/brand";

const STATS = [
  { value: "2", label: "Primary Hubs" },
  { value: "4", label: "Interstate Regions" },
  { value: "Same-Day", label: "Local Delivery" },
  { value: "2023", label: "Established" },
];

const BADGES = [
  { Icon: BadgeCheck, label: "Verified Business" },
  { Icon: ShieldCheck, label: "SLA-Backed Delivery" },
  { Icon: Timer, label: "Same-Day Local Delivery" },
];

export function Hero() {
  return (
    <section className="triangle-accents relative bg-navy pt-14 pb-56 sm:pt-24 sm:pb-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
            Corporate Logistics Partner
          </p>
          <h1 className="mt-6 text-4xl text-white sm:text-5xl lg:text-6xl">
            Your Strategic Logistics Partner for Growing Businesses Across Nigeria.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Empowering businesses with seamless logistics that improve customer satisfaction, reduce
            operational stress, and drive long-term growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Start a Partnership
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/track">Track Your Delivery</Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/60">
                <Icon className="size-4 text-brand" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-px translate-y-1/2 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-lift sm:p-8">
          <h2 className="text-2xl">Track Your Delivery</h2>
          <div className="mt-4">
            <TrackForm compact />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            You'll find your tracking ID in your delivery confirmation SMS or email.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-brand">{s.value}</dt>
                <dd className="text-xs tracking-wide text-muted-foreground uppercase">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
