import {
  Boxes,
  Building2,
  CalendarClock,
  Check,
  CreditCard,
  Cpu,
  Factory,
  Handshake,
  Laptop,
  MapPinned,
  Package,
  Pill,
  Route as RouteIcon,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Timer,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import courierImg from "@/assets/courier-scooter.png";
import doorstepImg from "@/assets/doorstep-delivery.png";
import { Logo } from "@/components/Logo";
import { NigeriaMap } from "@/components/NigeriaMap";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/brand";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl sm:text-4xl ${light ? "text-white" : ""}`}>{title}</h2>
      {copy && (
        <p className={`mt-4 ${light ? "text-white/70" : "text-muted-foreground"}`}>{copy}</p>
      )}
    </div>
  );
}

const WHY_NOW: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShoppingCart, label: "E-Commerce Expansion" },
  { Icon: TrendingUp, label: "SME Growth" },
  { Icon: CreditCard, label: "Digital Payments" },
  { Icon: Building2, label: "Urbanization" },
  { Icon: Timer, label: "Same-Day Expectations" },
];

export function WhyNow() {
  return (
    <section id="about" className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why now"
          title="Nigerian businesses are shipping more than ever."
          copy="Online shopping, digital payments and rapid urban growth have made fast, dependable delivery a core part of the customer experience — not an afterthought. Midetoria exists to make that part effortless."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_NOW.map(({ Icon, label }, i) => (
            <Reveal as="li" delay={i * 60} key={label}>
              <div className="h-full rounded-2xl bg-card p-6 transition-shadow hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground">
                  <Icon className="size-5" />
                </span>
                <p className="mt-4 font-medium text-navy">{label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SERVICES: { Icon: LucideIcon; label: string; copy: string }[] = [
  { Icon: Truck, label: "Local Delivery", copy: "Same-day dispatch within Abuja and Lagos." },
  { Icon: RouteIcon, label: "Interstate Delivery", copy: "Reliable routes across key states." },
  { Icon: Package, label: "Business Logistics", copy: "Daily order fulfilment for online stores." },
  {
    Icon: Building2,
    label: "Corporate Logistics",
    copy: "Documents and equipment, handled formally.",
  },
  { Icon: Boxes, label: "Bulk Distribution", copy: "Multi-drop routes for large consignments." },
  {
    Icon: CalendarClock,
    label: "Scheduled Pickups",
    copy: "Fixed pickup windows you can plan around.",
  },
  {
    Icon: UserCheck,
    label: "Dedicated Business Accounts",
    copy: "One contact who knows your operation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="End-to-End Delivery Solutions."
          copy="Every service is built for businesses that need predictable delivery, clear communication and no surprises."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, label, copy }, i) => (
            <Reveal as="li" delay={i * 50} key={label}>
              <article className="group h-full rounded-2xl bg-navy p-7 transition-all hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl text-white">{label}</h3>
                <p className="mt-2 text-sm text-white/60">{copy}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const REASONS = [
  "Professional, vetted riders",
  "Transparent pricing",
  "Dedicated account support",
  "Reliable interstate delivery",
  "Same-day local delivery",
  "Business-focused operations",
  "Commitment to long-term partnerships",
];

export function WhyChoose() {
  return (
    <section className="bg-tint py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div className="triangle-accents rounded-3xl bg-navy p-8 sm:p-12">
          <Logo variant="white" className="h-14" />
          <h2 className="mt-8 text-3xl text-white sm:text-4xl">Why Businesses Choose Us</h2>
          <p className="mt-4 text-white/70">
            To simplify logistics by providing dependable delivery solutions that help businesses
            increase customer satisfaction, improve operational efficiency, and grow confidently.
          </p>
          <Button asChild variant="brand" size="lg" className="mt-8">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Talk to our team
            </a>
          </Button>
        </div>
        <ul className="grid content-center gap-3">
          {REASONS.map((r, i) => (
            <Reveal as="li" delay={i * 50} key={r}>
              <div className="flex items-center gap-4 rounded-xl bg-card px-5 py-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" />
                </span>
                <span className="font-medium text-navy">{r}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  "You Receive an Order",
  "Book Pickup",
  "We Collect",
  "We Deliver",
  "Customer Receives",
  "Delivery Confirmation",
];

export function Process() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="How Delivery Works."
          copy="Six simple steps, from the moment an order lands to the confirmation that it arrived."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" delay={i * 60} key={s} className="relative">
                {i < STEPS.length - 1 && (
                  <>
                    <span
                      aria-hidden
                      className="absolute top-12 left-6 h-6 border-l border-dashed border-brand/40 sm:hidden"
                    />
                    <span
                      aria-hidden
                      className="absolute top-6 right-0 left-16 hidden border-t border-dashed border-brand/40 sm:block"
                    />
                  </>
                )}
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-brand/50 bg-brand/10 font-bold text-brand">
                    {i + 1}
                  </span>
                  <p className="pt-3 font-medium text-navy">{s}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <img
            src={courierImg}
            alt="Midetoria courier holding a parcel beside a delivery scooter"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}

const INDUSTRIES: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShoppingBag, label: "Fashion Brands" },
  { Icon: ShoppingCart, label: "E-Commerce" },
  { Icon: Pill, label: "Pharmacies" },
  { Icon: Factory, label: "Manufacturers" },
  { Icon: Sparkles, label: "Beauty Brands" },
  { Icon: Users, label: "Corporate Organizations" },
  { Icon: Laptop, label: "Electronics Stores" },
  { Icon: Warehouse, label: "Wholesalers" },
];

export function Industries() {
  return (
    <section id="industries" className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Industries" title="Built for the businesses we serve." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(({ Icon, label }, i) => (
            <Reveal as="li" delay={i * 40} key={label}>
              <div className="flex h-full items-center gap-4 rounded-2xl bg-card p-5 transition-shadow hover:shadow-lift">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 font-medium text-navy">{label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Coverage() {
  const cards = [
    { Icon: MapPinned, title: "Primary Hub", copy: "Abuja & Lagos — same-day local delivery." },
    {
      Icon: RouteIcon,
      title: "Interstate Routes",
      copy: "Port Harcourt, Delta and Northern Nigeria.",
    },
    { Icon: Cpu, title: "Future Expansion", copy: "Nationwide coverage as our fleet grows." },
  ];
  return (
    <section className="triangle-accents bg-navy py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Coverage" title="Where we deliver." light />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ul className="grid gap-4">
            {cards.map(({ Icon, title, copy }, i) => (
              <Reveal as="li" delay={i * 60} key={title}>
                <div className="rounded-2xl bg-navy-soft p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{copy}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <NigeriaMap className="w-full text-white/80" />
        </div>
      </div>
    </section>
  );
}

export function Doorstep() {
  const benefits = [
    "Happier customers",
    "Increases repeat orders",
    "Reduces complaints",
    "Improves online reviews",
    "Strengthens brand image",
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Customer experience"
            title="Doorstep delivery turns buyers into repeat customers."
            copy="When a parcel arrives on time, at the door, with a confirmation message, your customer's last impression of you is a good one. That is what brings them back."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-navy">
                <Handshake className="size-4 shrink-0 text-brand" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={doorstepImg}
          alt="Midetoria courier handing a parcel to a customer at her door"
          loading="lazy"
          width={1024}
          height={1024}
          className="mx-auto w-full max-w-md rounded-3xl bg-tint p-6"
        />
      </div>
    </section>
  );
}
