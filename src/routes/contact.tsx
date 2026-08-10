import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { BRAND, whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Midetoria Logistics | Delivery Partnerships" },
      {
        name: "description",
        content:
          "Talk to Midetoria Logistics about a delivery partnership. Call 0806 259 0299, chat on WhatsApp or send a business inquiry — we respond within a few hours.",
      },
      { property: "og:title", content: "Contact Midetoria Logistics" },
      {
        property: "og:description",
        content: "Start a delivery partnership with Nigeria's business-focused logistics team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const BUSINESS_TYPES = [
  "Fashion brand",
  "E-commerce store",
  "Pharmacy",
  "Manufacturer",
  "Beauty brand",
  "Corporate organization",
  "Electronics store",
  "Wholesaler",
  "Other",
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    volume: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hi Midetoria, I'd like to talk about a delivery partnership.",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Business type: ${form.type}`,
      `Monthly delivery volume: ${form.volume}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noreferrer");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.25em] text-brand uppercase">Partner with us</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Let's build something bigger.</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tell us how your business ships today and we'll design a delivery plan around it —
            pickups, routes, pricing and reporting.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { Icon: Phone, label: BRAND.phoneDisplay, href: `tel:${BRAND.phoneTel}` },
              { Icon: MapPin, label: BRAND.address },
              { Icon: Instagram, label: BRAND.instagramHandle, href: BRAND.instagram },
              { Icon: Clock, label: BRAND.hours },
            ].map(({ Icon, label, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white">
                  <Icon className="size-5" />
                </span>
                <span className="pt-2 text-sm text-navy">
                  {href ? (
                    <a className="hover:text-brand" href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ) : (
                    label
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-tint p-6">
            <p className="text-sm text-muted-foreground">
              We typically respond within a few hours during business days.
            </p>
            <Button asChild variant="brand" size="lg" className="mt-4">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Chat With Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-border p-6 shadow-lift sm:p-8">
          <h2 className="text-2xl">Business inquiry</h2>
          <div className="mt-6 space-y-5">
            <div>
              <Label htmlFor="c-name">Your name</Label>
              <Input
                id="c-name"
                required
                className="mt-2 h-11"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="c-business">Business name</Label>
              <Input
                id="c-business"
                required
                className="mt-2 h-11"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="c-type">Business type</Label>
              <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                <SelectTrigger id="c-type" className="mt-2 h-11">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  {BUSINESS_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="c-volume">Monthly delivery volume</Label>
              <Input
                id="c-volume"
                placeholder="e.g. 150 orders"
                className="mt-2 h-11"
                value={form.volume}
                onChange={(e) => setForm({ ...form, volume: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="c-message">Message</Label>
              <Textarea
                id="c-message"
                rows={4}
                className="mt-2"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button type="submit" variant="brand" size="lg" className="w-full">
              Send inquiry via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
