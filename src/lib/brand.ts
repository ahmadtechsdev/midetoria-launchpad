export const BRAND = {
  name: "Midetoria Logistics",
  tagline: "Fast. Reliable. Trusted.",
  phoneDisplay: "0806 259 0299",
  phoneTel: "+2348062590299",
  whatsappNumber: "2348062590299",
  address: "Wuye Ultra Modern Market, Turai Yar'adua Block H2F 314, Abuja",
  website: "https://midetoria.com",
  instagram: "https://instagram.com/midetoria_logistics",
  instagramHandle: "@midetoria_logistics",
  hours: "Monday – Saturday, 8:00am – 6:00pm",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Midetoria, I'd like to talk about a delivery partnership.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}