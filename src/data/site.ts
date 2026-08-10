export const PACKAGES = [
  {
    name: "Bronze",
    audience: "New & small businesses",
    popular: false,
    features: [
      "Pay-as-you-go local delivery",
      "Standard pickup windows",
      "WhatsApp order booking",
      "Delivery confirmation on every order",
    ],
    message: "Hi, I'm interested in the Bronze partnership package.",
  },
  {
    name: "Silver",
    audience: "Growing online stores",
    popular: false,
    features: [
      "Discounted local delivery rates",
      "Scheduled daily pickups",
      "Interstate delivery access",
      "Monthly delivery reporting",
    ],
    message: "Hi, I'm interested in the Silver partnership package.",
  },
  {
    name: "Gold",
    audience: "High-volume brands",
    popular: true,
    features: [
      "Priority same-day local delivery",
      "Dedicated account manager",
      "Twice-daily pickups",
      "Bulk distribution support",
    ],
    message: "Hi, I'm interested in the Gold partnership package.",
  },
  {
    name: "Enterprise",
    audience: "Corporate & manufacturers",
    popular: false,
    features: [
      "Custom SLA-backed routes",
      "Dedicated riders & fleet allocation",
      "Nationwide interstate coverage",
      "Quarterly performance reviews",
    ],
    message: "Hi, I'm interested in the Enterprise partnership package.",
  },
] as const;

export const FAQS = [
  {
    q: "Do you offer same-day delivery?",
    a: "Yes. Same-day delivery is available for local orders within our primary hubs in Abuja and Lagos when the pickup is booked before our daily cut-off.",
  },
  {
    q: "Do you handle interstate delivery?",
    a: "We deliver interstate to Port Harcourt, Delta and Northern Nigeria, with more routes opening as we expand nationwide.",
  },
  {
    q: "Can you pick up from my store every day?",
    a: "Yes. Partner businesses can set scheduled daily pickups so your orders leave on a consistent, predictable timetable.",
  },
  {
    q: "Do you have special pricing for businesses?",
    a: "Yes. Business pricing is based on your monthly delivery volume and destinations, and it is always shared upfront — no hidden charges.",
  },
  {
    q: "Will I get a dedicated account manager?",
    a: "Gold and Enterprise partners get a dedicated account manager who tracks your deliveries and resolves issues directly.",
  },
  {
    q: "Can you handle bulk deliveries?",
    a: "We handle bulk distribution for manufacturers, wholesalers and corporate organizations, including multi-drop routes.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Our delivery complaints dropped almost immediately. Customers now get their orders the same day, and they notice.",
    name: "Adaeze O.",
    business: "Aderin Fashion House",
    type: "Fashion brand",
  },
  {
    quote:
      "Midetoria handles our interstate orders end to end. Scheduled pickups mean we simply pack and hand over.",
    name: "Emeka N.",
    business: "Bloom Beauty Ltd",
    type: "Beauty brand",
  },
  {
    quote:
      "Having one account contact who actually answers has changed how we plan dispatch each week.",
    name: "Halima Y.",
    business: "Northline Pharmacy",
    type: "Pharmacy",
  },
] as const;
