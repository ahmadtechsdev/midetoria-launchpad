import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { whatsappLink } from "@/lib/brand";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", to: "/", hash: undefined },
  { label: "Services", to: "/", hash: "services" },
  { label: "Industries", to: "/", hash: "industries" },
  { label: "Packages", to: "/pricing", hash: undefined },
  { label: "Track Order", to: "/track", hash: undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Contact", to: "/contact", hash: undefined },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur transition-all duration-300",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" aria-label="Midetoria Logistics home" className="shrink-0">
          <Logo className={cn("transition-all duration-300", scrolled ? "h-9" : "h-11")} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outlineNavy" size="lg">
            <Link to="/track">Track Order</Link>
          </Button>
          <Button asChild variant="brand" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Partner With Us
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="outlineNavy" size="sm" className="h-10 px-3">
            <Link to="/track">Track</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo className="h-10" />
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                {LINKS.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-tint"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="brand" size="lg">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outlineNavy" size="lg" onClick={() => setOpen(false)}>
                  <Link to="/track">Track Order</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
