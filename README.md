# Midetoria Launchpad

# Midetoria Logistics — Website Build Prompt (for Lovable)

Copy everything below the line into Lovable as your build prompt. Sections are broken out so you can also feed them in one at a time if you prefer an iterative build.

---

## MASTER PROMPT

Build a modern, premium, corporate logistics company website for **Midetoria Logistics**, a Nigerian logistics and delivery partner for growing businesses (fashion brands, e-commerce, pharmacies, manufacturers, beauty brands, corporate organizations, electronics stores, wholesalers). The site's primary goals are: (1) let potential business partners quickly understand Midetoria's value and contact the company via WhatsApp, and (2) let existing customers track a delivery in seconds from the homepage. The overall feel should be **minimal, luxury, corporate, and trustworthy** — lots of white space, confident typography, restrained color use, and professional polish. Avoid anything cluttered, cartoonish, or "startup-generic."

### Brand identity — follow exactly

- **Primary colors:**
  - Navy (primary/dark): `#1A2734`
  - Navy secondary (cards/panels on dark bg): `#233245`
  - Orange (accent/CTA): `#F74F0D`
  - White: `#FFFFFF`
  - Light neutral background (card tint on white sections): `#F1F3F6`
  - Muted body text: `#5B6472`
  - Light border/divider: `#E2E6EB`
- **Logo:** an "M" mark formed from an upward arrow (navy arm + orange arm meeting in a checkmark-like V) above the wordmark "MIDETORIA" (bold, navy) with "Logistics" in a light, letter-spaced orange sub-label. Use a white version of the mark on navy backgrounds.
- **Typography:** pair a confident serif for headlines (e.g., Cambria / Georgia / Playfair Display) with a clean sans-serif for body text and UI (e.g., Calibri / Inter / Manrope). Headlines are bold; body copy uses generous line-height (1.3–1.5).
- **Tone of voice:** confident, warm, professional — never salesy or hyped. Short, declarative sentences. Tagline: **"Fast. Reliable. Trusted."**
- **Visual motifs:** rounded cards on soft light-gray backgrounds, circular icon badges (orange or navy fill, white icon), generous padding, subtle dashed connector lines for process steps, faint low-opacity triangle/arrow shapes echoing the logo mark as background accents on dark sections.

### Tech/UX requirements

- Fully responsive (mobile-first), tested at 375px, 768px, 1280px, 1440px.
- Sticky header with shrink-on-scroll behavior.
- Smooth scroll + subtle fade/slide-in animations on scroll (nothing excessive — 200–400ms, ease-out).
- Accessible: proper contrast ratios, semantic HTML, alt text, keyboard-navigable menus and forms.
- Fast-loading, optimized images, lazy-loading below the fold.
- SEO: proper meta titles/descriptions per page, Open Graph tags, structured data (LocalBusiness schema with address/phone).
- A **persistent floating WhatsApp button** (bottom-right, circular, brand-orange, WhatsApp icon, subtle pulse animation) visible on every page/scroll position, linking to `https://wa.me/2348062590299` with a pre-filled message like "Hi Midetoria, I'd like to talk about a delivery partnership." On mobile, keep it small enough not to block content.

---

## PAGE 1 — HOME / LANDING PAGE

### 1. Navigation bar (sticky)
- Left: Midetoria logo (navy version on white nav).
- Center/right nav links: Home, Services, Industries, Pricing/Packages, Track Order, About, Contact.
- Right-most: two CTAs — a secondary outlined button **"Track Order"** and a primary filled orange button **"Partner With Us"** (opens WhatsApp chat or scrolls to contact section).
- Mobile: collapses into a clean hamburger menu with slide-in drawer; WhatsApp and Track Order remain easily reachable.

### 2. Hero section
- Full-width navy background with the same subtle low-opacity triangle accent shapes as the brand deck.
- Eyebrow label: "CORPORATE LOGISTICS PARTNER" (orange, letter-spaced, small caps).
- Headline (large serif, white): **"Your Strategic Logistics Partner for Growing Businesses Across Nigeria."**
- Subheadline (muted light gray): "Empowering businesses with seamless logistics that improve customer satisfaction, reduce operational stress, and drive long-term growth."
- Two CTA buttons side by side: **"Start a Partnership"** (filled orange, links to WhatsApp/contact) and **"Track Your Delivery"** (outlined white).
- **Order tracking widget**, positioned prominently in the hero (as a floating white/light card overlapping the bottom of the navy hero, so it reads immediately on load without scrolling):
  - Card title: "Track Your Delivery"
  - Single input field: "Enter your tracking ID (e.g. MDT-2381045)"
  - Orange "Track" button beside/below the input
  - Helper microcopy under the field: "You'll find your tracking ID in your delivery confirmation SMS or email."
  - On submit, route to a dedicated `/track/[id]` results page (see Page 2 below). If no backend yet, wire it to a placeholder state that can later connect to a real API.
- Small trust row beneath the hero card: 3–4 short stats with large orange numbers, e.g. "2 Primary Hubs," "4 Interstate Regions," "Same-Day Local Delivery," "Est. 2023."

### 3. "Why Now" / industry context strip
- Light background section, short paragraph on Nigeria's growing logistics/e-commerce demand, plus a row of 4–5 small icon-in-circle cards: E-Commerce Expansion, SME Growth, Digital Payments, Urbanization, Same-Day Delivery Expectations.

### 4. Services section
- Section heading: "End-to-End Delivery Solutions."
- Grid of 6–7 dark navy cards, each with an orange circular icon badge and label: Local Delivery, Interstate Delivery, Business Logistics, Corporate Logistics, Bulk Distribution, Scheduled Pickups, Dedicated Business Accounts.
- Each card is clickable/hoverable with a subtle lift + orange glow on hover.

### 5. Why Choose Midetoria (split layout)
- Left: navy panel with logo mark, heading "Why Businesses Choose Us," short supporting line, and the WhatsApp/contact CTA.
- Right: white background, checklist-style rows (icon + label): Professional, vetted riders; Transparent pricing; Dedicated account support; Reliable interstate delivery; Same-day local delivery; Business-focused operations; Commitment to long-term partnerships.

### 6. How Delivery Works (process timeline)
- Horizontal 6-step process with numbered circular icon nodes connected by a dashed line: You Receive an Order → Book Pickup → We Collect → We Deliver → Customer Receives → Delivery Confirmation.
- On mobile, this collapses into a vertical timeline.
- Include a small custom illustration of a courier with a parcel near a delivery scooter, styled flat/vector in navy + orange + warm brown skin tone (matching the brand — not a stock photo), positioned near this section for visual warmth.

### 7. Industries served
- Icon-card grid (8 items): Fashion Brands, E-Commerce, Pharmacies, Manufacturers, Beauty Brands, Corporate Organizations, Electronics Stores, Wholesalers.

### 8. Coverage
- Dark navy section with 3 cards: Primary Hub (Abuja & Lagos), Interstate Routes (Port Harcourt, Delta, Northern Nigeria), Future Expansion (Nationwide). Include a stylized, simplified Nigeria map graphic (SVG, brand-colored) highlighting served regions with orange dots/pins, rather than an embedded Google Map (keeps the aesthetic consistent).

### 9. Doorstep delivery / customer experience
- Split section: left = heading + short copy on why doorstep delivery increases repeat orders and reduces complaints; right = the custom brand-styled illustration of a courier handing a parcel to a customer at their door (flat vector, navy/orange/warm skin tones — not a stock photo).
- Small benefit list beside it: Happier customers, Increases repeat orders, Reduces complaints, Improves online reviews, Strengthens brand image.

### 10. Partnership packages preview
- 4-tier pricing-style cards: Bronze, Silver, Gold ("Most Popular" ribbon in orange), Enterprise — each with a short audience tag and 3–4 bullet features, and a "Talk to Us" button per card that opens WhatsApp with a message pre-filled per tier (e.g., "Hi, I'm interested in the Gold partnership package.").
- Link/button below the cards to a full **/pricing** page if you want package details expanded later.

### 11. Testimonials / social proof (placeholder-ready)
- Simple carousel or 3-card grid with quote, name, business name, and business type. Use realistic placeholder text now, clearly marked as swappable.

### 12. FAQ accordion
- Same content as the FAQ slide in the brand deck: same-day delivery, interstate delivery, daily pickups, business pricing, dedicated account manager, bulk deliveries. Clean expand/collapse accordion, orange accent on the active question.

### 13. Final CTA banner
- Full-width navy band, centered content: "Let's Build Something Bigger," short supporting line, and a large orange **"Chat With Us on WhatsApp"** button plus a secondary **"Call Us"** button (`tel:+2348062590299`).

### 14. Footer
- Navy background, logo, short tagline.
- Columns: Company (About, Services, Industries, Careers-placeholder), Resources (FAQ, Track Order, Partnership Packages), Contact (Phone: 0806 259 0299, Office Address: Wuye Ultra Modern Market, Turai Yar'adua Block H2F 314, Website: midetoria.com, Instagram: @midetoria_logistics).
- Social icons row (Instagram at minimum; leave placeholders for X/LinkedIn/Facebook).
- Bottom bar: copyright line + small "Fast. Reliable. Trusted." tagline.

---

## PAGE 2 — /track (Order Tracking Results Page)

- Clean, focused layout (not the full marketing chrome — keep header/footer but simplify).
- Top: the same tracking input (pre-filled if arriving from hero) so users can search another order without going back.
- Once a tracking ID is submitted, show:
  - **Status banner** at top (color-coded: orange = in transit, navy = processing, green = delivered) with current status in large text (e.g., "Out for Delivery") and estimated delivery time/date.
  - **Vertical progress timeline** mirroring the 6-step process (Order Received → Pickup Booked → Collected → In Transit → Out for Delivery → Delivered), each with a timestamp once completed, current step highlighted in orange with a pulsing dot.
  - **Shipment details card**: tracking ID, sender, recipient (partially masked for privacy, e.g., "O****i A."), origin, destination, rider/agent name (optional), package type.
  - **Live map placeholder** showing route/current location pin (to be wired to a real tracking/mapping API — see recommendation below).
  - A **"Need help with this order?"** prompt with a WhatsApp button pre-filled with the tracking ID in the message.
- Empty/error state: friendly illustration + message if a tracking ID isn't found, with a WhatsApp fallback CTA ("Can't find your order? Chat with support").

---

## PAGE 3 — /contact (or in-page contact/partnership section, if you prefer a single-page site)

- Split layout: left = short partnership pitch + contact details (phone, address, email, Instagram, embedded simplified map or address card) + WhatsApp button; right = a short business inquiry form (Name, Business Name, Business Type dropdown, Monthly Delivery Volume, Message) that on submit either emails the team or opens WhatsApp with the details pre-filled.
- Add business hours and expected response time ("We typically respond within a few hours during business days").

---

## OTHER REALISTIC FEATURES WORTH ADDING

- **Live chat widget** (WhatsApp-based, already covered) as the primary channel — skip a separate generic chatbot to avoid diluting the brand experience.
- **"Get a Quote" mini-flow**: a lightweight 3-step form (pickup location → delivery location/interstate or local → package size) that estimates a price range or simply routes the details into a WhatsApp message — very useful for converting curious visitors into leads.
- **Business account sign-up / partner portal teaser**: a short section describing that partner businesses eventually get a dashboard for booking pickups and viewing delivery history — even if just a "Coming Soon" waitlist form for now.
- **Blog/Resources section (optional, later phase)**: short logistics tips/e-commerce fulfillment advice for SEO and thought leadership.
- **Trust badges**: "Verified Business," "SLA-Backed Delivery," "Same-Day Local Delivery" badges near the hero or footer to reinforce reliability.
- **Newsletter or WhatsApp broadcast opt-in** in the footer for business updates/promotions.
- **Multi-language readiness**: structure copy so Pidgin/French (for future regional expansion) could be added later without a redesign.

---

## COPY BANK (reuse this exact language where noted above)

- Tagline: "Fast. Reliable. Trusted."
- Mission: "To simplify logistics by providing dependable delivery solutions that help businesses increase customer satisfaction, improve operational efficiency, and grow confidently."
- Vision: "To become Nigeria's most trusted logistics company, connecting businesses and customers through fast, secure, and reliable delivery solutions."
- Closing line: "We don't just move parcels, we move businesses forward."

## CONTACT DETAILS TO WIRE INTO THE SITE

- Phone / WhatsApp: **0806 259 0299** → WhatsApp link: `https://wa.me/2348062590299`
- Office Address: **Wuye Ultra Modern Market, Turai Yar'adua Block H2F 314**
- Website: **https://midetoria.com**
- Instagram: **@midetoria_logistics**

---

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/485b22e3-d5fb-4a1f-b244-97962dbe782b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
