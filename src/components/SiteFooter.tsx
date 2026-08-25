import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND } from "@/lib/brand";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="triangle-accents bg-navy text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="white" className="h-12" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            We don't just move parcels, we move businesses forward.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: BRAND.instagram, label: "Midetoria Logistics on Instagram", Icon: Instagram },
              { href: BRAND.tiktok, label: "Midetoria Logistics on TikTok", Icon: TikTokIcon },
              { href: BRAND.facebook, label: "Midetoria Logistics on Facebook", Icon: Facebook },
              { href: `mailto:${BRAND.email}`, label: "Email Midetoria Logistics", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          items={[
            { label: "About", to: "/", hash: "about" },
            { label: "Services", to: "/", hash: "services" },
            { label: "Industries", to: "/", hash: "industries" },
            { label: "Careers (soon)", to: "/contact" },
          ]}
        />
        <FooterCol
          title="Resources"
          items={[
            { label: "FAQ", to: "/", hash: "faq" },
            { label: "Partnership Packages", to: "/pricing" },
            { label: "Get a Quote", to: "/", hash: "quote" },
          ]}
        />

        <div>
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="hover:text-brand" href={`tel:${BRAND.phoneTel}`}>
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>
            </li>
            <li>{BRAND.address}</li>
            <li>
              <a className="hover:text-brand" href={BRAND.website} target="_blank" rel="noreferrer">
                {BRAND.websiteDisplay}
              </a>
            </li>
            <li>
              <a
                className="hover:text-brand"
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {BRAND.instagramHandle}
              </a>
            </li>
          </ul>
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setEmail("");
              toast.success("You're on the list", {
                description: "We'll send business updates and delivery promos.",
              });
            }}
          >
            <label htmlFor="footer-email" className="text-xs tracking-wide text-white/60 uppercase">
              Business updates
            </label>
            <div className="mt-2 flex gap-2">
              <Input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.com"
                className="h-11 border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button type="submit" variant="brand" className="h-11">
                Join
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Midetoria Logistics. All rights reserved.</p>
          <p className="tracking-[0.2em] text-brand uppercase">{BRAND.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; hash?: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wider text-white uppercase">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              to={i.to}
              {...(i.hash ? { hash: i.hash } : {})}
              className="transition-colors hover:text-brand"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
