# Project Plan: Hotel Vazhiyoram (Mundakayam, Kerala) — Private Prospecting Concept

## 1. Executive Summary & Context
- **Client/Business**: Hotel Vazhiyoram (Managed by Kozhipoovananickal Hotels Pvt. Ltd., initiated under the Kerala Tourism Department rest-stop concept)
- **Location**: MP/II/235 A, NH 183 (Kottayam–Kumily Road), Kozhipoovananickal, Mundakayam, Kottayam District, Kerala - 686513, India.
- **Role & Position**: Known as the *"Gateway to the High Ranges"*, positioned on the critical transit highway connecting Central Kerala (Kottayam, Changanassery) with Idukki/Thekkady (Kumily, Vagamon, Peerumedu) and serving Sabarimala pilgrims traveling via Erumely.
- **Project Type**: Private prospecting website concept designed to demonstrate how a mobile-first, high-converting digital experience captures highway stopover travelers, tourists, pilgrims, and event guests.
- **Primary Conversion**: 
  1. Direct Phone Call (`tel:+919447733801` / `tel:+914828274088`)
  2. WhatsApp Direct Enquiry (`https://wa.me/919447733801`)
- **Secondary Conversion**:
  1. Google Maps Turn-by-Turn Directions (NH 183 Mundakayam)
  2. Direct Room & Table Enquiry Form (with automated WhatsApp routing)

---

## 2. Information Architecture & Sitemap

```
├── [Header & Mobile Quick-Action Drawer]
├── [Hero Section: "Gateway to the High Ranges" with instant Call / WhatsApp / Route actions]
├── [Quick Highway Transit Bar: Distance to Vagamon, Thekkady, Sabarimala, Kottayam]
├── [Accommodations / Stay: Deluxe A/C, Standard A/C, Non-A/C Rooms, Family Suites]
├── [Dining & Rest-Stop Experience: Sampushta A/C Restaurant & Kairali Food Court]
├── [Highway Traveler & Pilgrim Services: Parking, Refreshments, Travel Desk, Sabarimala stopover]
├── [Explore Mundakayam & The High Ranges: Transit hubs & nearby destinations]
├── [Interactive Location & Map: Exact NH 183 coordinates, landmark guides, directions]
├── [Direct Enquiry Form: Room dates, guest count, dining enquiries + WhatsApp fallback]
├── [Footer & Staging Disclosure: Concept notice, contact info, operating hours, language toggle]
└── [Sticky Bottom Mobile Conversion Bar: Call | WhatsApp | Directions | Book Enquiry]
```

---

## 3. User Journeys

### Journey A: Highway Driver / Family in Transit (Mobile Search)
- **Scenario**: Driving from Cochin/Kottayam towards Thekkady/Vagamon at 1:30 PM; looking for clean dining, parking, and a comfortable rest stop.
- **Path**: Opens site on phone → Sees verified NH 183 Mundakayam landmark and spacious parking highlights → Taps **"Get Directions"** or **"Call Restaurant"** from the sticky bottom bar within 5 seconds.

### Journey B: Sabarimala Pilgrim Group / High Range Tourist (Pre-Trip Planning)
- **Scenario**: Planning overnight stay before early morning climb to Sabarimala via Erumely or ascent to Vagamon pine forests.
- **Path**: Reviews room categories and verified transit distances → Uses the **Enquiry Form** to select dates and guest count → Submits with one tap to send pre-formatted enquiry directly via WhatsApp to front desk.

---

## 4. Content Model & Bilingual Architecture
- **Language Priority**: English primary, structured with semantic data attributes (`data-i18n`) for seamless Malayalam (മലയാളം) toggle.
- **Truth & Safety Baseline**: 
  - Every room amenity and restaurant detail reflects verified public records.
  - No fabricated prices, fake discounts, or false star ratings.
  - Discreet concept redesign label in header and footer.

---

## 5. Technical Specifications
- **Stack**: Semantic HTML5, Vanilla Modern CSS with CSS custom properties (Design Tokens), Vanilla Modular JavaScript.
- **Responsiveness**: Fluid layout with strict breakpoint testing at 375px, 390px, 768px, 1024px, 1280px, and 1440px.
- **Accessibility (WCAG 2.1 AA)**:
  - Contrast ratios ≥ 4.5:1 for body text, ≥ 3:1 for large text.
  - Visible keyboard focus rings (`:focus-visible`).
  - Screen-reader labels (`aria-label`, `role="region"`, `sr-only` text).
  - Native `prefers-reduced-motion` overrides.
- **SEO & Structured Data**:
  - `LodgingBusiness` / `Hotel` and `Restaurant` JSON-LD schema without fake aggregate rating fields.
  - OpenGraph & Twitter cards, semantic heading hierarchy (`h1` -> `h2` -> `h3`).

---

## 6. Risk Matrix & Mitigations

| Risk | Likelihood | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| Stale room tariffs or unverified rates | Medium | High | Display "Call / WhatsApp for today's seasonal rates" instead of guessing pricing. |
| Inaccurate map pin navigation | Low | High | Use confirmed NH 183 Kozhipoovananickal Mundakayam coordinates (9.539° N, 76.879° E) and direct Google Maps URL. |
| Slow 3G/4G loading on hill highway | High | High | Zero heavy framework dependencies, compressed WebP/SVG imagery, CSS-only animations. |
| Client confusion regarding official status | Medium | Medium | Clear banner: *"Private Concept Redesign for Client Review — Not the Official Live Website."* |
