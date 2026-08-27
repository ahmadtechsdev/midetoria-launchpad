import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, LayoutDashboard, Phone, Quote } from "lucide-react";
import { useState } from "react";
import ceo from "@/assets/ceo.jpg";
import portrait from "@/assets/brands-we-move.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/home/HomeSections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAQS, PACKAGES, TESTIMONIALS } from "@/data/site";
import { BRAND, whatsappLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Partnership packages"
          title="Choose the partnership that fits your volume."
          copy="Every tier includes delivery confirmation, vetted riders and pricing agreed upfront."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal as="article" delay={i * 60} key={p.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1",
                  p.popular ? "border-brand bg-card shadow-glow" : "border-border bg-card",
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-wide text-brand-foreground uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm text-brand">{p.audience}</p>
                <ul className="mt-5 flex-1 space-y-3 text-sm text-muted-foreground">
                  {p.features.slice(0, 4).map((f) => (
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
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="navy" size="lg">
            <Link to="/pricing">
              See full package details <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ pickup: "", destination: "", scope: "", size: "" });
  const steps = ["Pickup location", "Delivery details", "Package size"];

  const send = () => {
    const text = `Hi Midetoria, I'd like a delivery quote.\nPickup: ${data.pickup}\nDelivery: ${data.destination} (${data.scope})\nPackage size: ${data.size}`;
    window.open(whatsappLink(text), "_blank", "noreferrer");
  };

  return (
    <section id="quote" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Get a quote"
            title="Three questions. One clear price range."
            copy="Tell us where it's going and how big it is. We'll come back with indicative pricing on WhatsApp."
          />
        </div>
        <div className="rounded-2xl border border-border p-6 shadow-lift sm:p-8">
          <ol className="flex items-center gap-3">
            {steps.map((s, i) => (
              <li key={s} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold",
                    i <= step ? "bg-brand text-brand-foreground" : "bg-tint text-muted-foreground",
                  )}
                >
                  {i + 1}
                </span>
                <span className="hidden text-xs text-muted-foreground sm:block">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-6 space-y-4">
            {step === 0 && (
              <div>
                <Label htmlFor="q-pickup">Where should we pick up?</Label>
                <Input
                  id="q-pickup"
                  className="mt-2 h-11"
                  placeholder="e.g. Wuye, Abuja"
                  value={data.pickup}
                  onChange={(e) => setData({ ...data, pickup: e.target.value })}
                />
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="q-dest">Where is it going?</Label>
                  <Input
                    id="q-dest"
                    className="mt-2 h-11"
                    placeholder="e.g. Lekki, Lagos"
                    value={data.destination}
                    onChange={(e) => setData({ ...data, destination: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="q-scope">Delivery type</Label>
                  <Select value={data.scope} onValueChange={(v) => setData({ ...data, scope: v })}>
                    <SelectTrigger id="q-scope" className="mt-2 h-11">
                      <SelectValue placeholder="Local or interstate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Local">Local</SelectItem>
                      <SelectItem value="Interstate">Interstate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <Label htmlFor="q-size">Package size</Label>
                <Select value={data.size} onValueChange={(v) => setData({ ...data, size: v })}>
                  <SelectTrigger id="q-size" className="mt-2 h-11">
                    <SelectValue placeholder="Select package size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Small (under 5kg)">Small (under 5kg)</SelectItem>
                    <SelectItem value="Medium (5–20kg)">Medium (5–20kg)</SelectItem>
                    <SelectItem value="Large / bulk (20kg+)">Large / bulk (20kg+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            {step > 0 && (
              <Button variant="outlineNavy" className="h-11" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < 2 ? (
              <Button variant="brand" className="h-11 flex-1" onClick={() => setStep(step + 1)}>
                Continue
              </Button>
            ) : (
              <Button variant="brand" className="h-11 flex-1" onClick={send}>
                Get my quote on WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortalTeaser() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  return (
    <section className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 rounded-3xl bg-card p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white">
              <LayoutDashboard className="size-5" />
            </span>
            <h2 className="mt-5 text-3xl">A partner dashboard is coming.</h2>
            <p className="mt-3 text-muted-foreground">
              Book pickups, view delivery history and download reports from one place. Join the
              waitlist and we'll onboard you first.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
              setEmail("");
            }}
          >
            <div className="flex-1">
              <Label htmlFor="waitlist" className="sr-only">
                Work email
              </Label>
              <Input
                id="waitlist"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                className="h-12"
              />
            </div>
            <Button type="submit" variant="brand" size="lg" className="h-12">
              {joined ? "You're on the list" : "Join waitlist"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[380px_1fr] lg:items-center">
        <img
          src={ceo}
          alt="Chief Executive Officer of Midetoria Logistics"
          loading="lazy"
          className="w-full rounded-3xl object-cover"
        />
        <div>
          <SectionHeading
            eyebrow="Leadership"
            title="We don't just move parcels, we move businesses forward."
            copy="To become Nigeria's most trusted logistics company, connecting businesses and customers through fast, secure, and reliable delivery solutions."
          />
          <p className="mt-6 text-sm tracking-wide text-navy uppercase">
            Chief Executive Officer — Midetoria Logistics
          </p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-tint py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Social proof" title="What partners say." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <Reveal className="overflow-hidden rounded-3xl bg-navy">
            <img
              src={portrait}
              alt="Stacked parcels and packages ready for dispatch through Midetoria Logistics"
              loading="lazy"
              className="h-72 w-full object-cover object-center lg:h-96"
            />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                Brands we move
              </p>
              <p className="mt-2 text-sm text-white/70">
                From fashion labels to pharmacies, growing Nigerian brands trust us with the last
                mile.
              </p>
            </div>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" delay={i * 70} key={t.name}>
                <figure className="h-full rounded-2xl bg-card p-6 sm:p-7">
                  <Quote className="size-6 text-brand" />
                  <blockquote className="mt-4 text-navy">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground">
                    <span className="font-semibold text-navy">{t.name}</span> — {t.business},{" "}
                    {t.type}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions businesses ask us." />
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base data-[state=open]:text-brand">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="triangle-accents bg-navy py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl text-white sm:text-4xl">Let's Build Something Bigger</h2>
        <p className="mt-4 text-white/70">
          Partner with a logistics team that treats your deliveries like part of your brand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Chat With Us on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href={`tel:${BRAND.phoneTel}`}>
              <Phone className="size-4" /> Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
