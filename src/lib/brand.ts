export const BRAND = {
  name: "Midetoria Logistics",
  tagline: "Fast. Reliable. Trusted.",
  phoneDisplay: "0806 259 0299",
  phoneTel: "+2348062590299",
  whatsappNumber: "2348062590299",
  address: "Wuye Ultra Modern Market, Turai Yar'adua Block H2F 314, Abuja",
  email: "info@midetorialogistics.com",
  website: "https://midetorialogistics.com",
  websiteDisplay: "midetorialogistics.com",
  instagram: "https://www.instagram.com/midetoria_logistics?utm_source=qr",
  instagramHandle: "@midetoria_logistics",
  tiktok: "https://www.tiktok.com/@midetorialogistics_?_r=1&_t=ZN-98JGbMGgEB4",
  tiktokHandle: "@midetorialogistics_",
  facebook: "https://www.facebook.com/share/1EihmrcEnZ/?mibextid=wwXIfr",
  hours: "Monday – Saturday, 8:00am – 6:00pm",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Midetoria, I'd like to talk about a delivery partnership.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
