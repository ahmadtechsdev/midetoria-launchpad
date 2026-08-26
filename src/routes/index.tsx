import { createFileRoute } from "@tanstack/react-router";
import {
  Faq,
  FinalCta,
  Leadership,
  Packages,
  PortalTeaser,
  QuoteFlow,
  Testimonials,
} from "@/components/home/Conversion";
import { Hero } from "@/components/home/Hero";
import {
  Coverage,
  Doorstep,
  Industries,
  Process,
  Services,
  WhyChoose,
  WhyNow,
} from "@/components/home/HomeSections";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Midetoria Logistics | Fast. Reliable. Trusted. Delivery in Nigeria" },
      {
        name: "description",
        content:
          "Midetoria Logistics is the delivery partner for growing Nigerian businesses — same-day local delivery, interstate routes, scheduled pickups and dedicated business accounts.",
      },
      {
        property: "og:title",
        content: "Midetoria Logistics | Your Strategic Logistics Partner in Nigeria",
      },
      {
        property: "og:description",
        content:
          "Same-day local delivery, interstate routes and dedicated business accounts for growing Nigerian brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BRAND.name,
          description:
            "Logistics and delivery partner for growing businesses across Nigeria. Same-day local delivery, interstate delivery and bulk distribution.",
          telephone: BRAND.phoneTel,
          url: BRAND.website,
          sameAs: [BRAND.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Wuye Ultra Modern Market, Turai Yar'adua Block H2F 314",
            addressLocality: "Abuja",
            addressCountry: "NG",
          },
          areaServed: [
            "Abuja",
            "Lagos",
            "Port Harcourt",
            "Delta",
            "Benue",
            "Kogi",
            "Kwara",
            "Nasarawa",
            "Niger",
            "Plateau",
            "Adamawa",
            "Bauchi",
            "Borno",
            "Gombe",
            "Taraba",
            "Yobe",
            "Jigawa",
            "Kaduna",
            "Kano",
            "Katsina",
            "Kebbi",
            "Sokoto",
            "Zamfara",
          ],
          openingHours: "Mo-Sa 08:00-18:00",
          slogan: BRAND.tagline,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <div className="h-60 sm:h-40" aria-hidden />
      <WhyNow />
      <Services />
      <WhyChoose />
      <Process />
      <Industries />
      <Coverage />
      <Doorstep />
      <Leadership />
      <Packages />
      <QuoteFlow />
      <PortalTeaser />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
