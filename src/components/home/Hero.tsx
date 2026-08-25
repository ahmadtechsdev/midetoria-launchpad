import { Link } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Timer } from "lucide-react";
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
    <section className="triangle-accents relative bg-navy pt-14 pb-16 sm:pt-24 sm:pb-24">
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
              <Link to="/pricing">See Partnership Packages</Link>
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

        <dl className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-4 sm:p-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold text-brand sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-white/60 uppercase">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
