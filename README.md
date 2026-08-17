# Hotel Vazhiyoram (Mundakayam, Kerala) — High-Converting Concept Redesign

A mobile-first, high-converting website concept designed for **Hotel Vazhiyoram** in Mundakayam, Kerala (situated along the NH 183 / Kottayam–Kumily Highway at the Gateway to the High Ranges).

---

## 1. Quick Start & Local Preview

To preview the website locally on your machine:

```bash
# Start a lightweight local static server
python3 -m http.server 8088 --directory .

# Open in your web browser
open http://localhost:8088/
```

---

## 2. Project Architecture & File Directory

```
├── index.html                   # Semantic HTML5 markup, SEO meta tags, and JSON-LD schema
├── styles.css                   # Kerala teak/forest design system & responsive styles
├── app.js                       # Bilingual engine (EN/മലയാളം), form handler & WhatsApp router
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for SEO discovery
├── assets/                      # High-resolution concept photography assets
│   ├── hero.jpg                 # NH 183 Mundakayam exterior concept
│   ├── dining.jpg               # Sampushta traditional restaurant interior
│   └── room-deluxe.jpg          # Deluxe hill-view room interior
├── AGENTS.md                    # Project agent directives & automatic skill execution
├── GEMINI.md                    # Engine compatibility directives
├── PROJECT_PLAN.md              # Information architecture & technical plan
├── DESIGN_DIRECTION.md          # Art direction tokens, type pairing & signature elements
├── MOTION_PLAN.md               # Animation inventory, easing, and reduced motion specs
├── VISUAL_QA.md                 # Multi-viewport responsive audit & QA checklist
├── ANTI_SLOP_REVIEW.md          # Creative director truth and authenticity review
├── NEEDS_CONFIRMATION.md        # Inventory of provisional client facts requiring verification
├── ASSET_SOURCES.md             # Attribution and source licensing log
├── DEMO_SCRIPT.md               # 3-minute executive sales presentation script
└── README.md                    # Setup and handover documentation
```

---

## 3. Key Conversion Features

1. **Sticky Bottom Mobile Conversion Bar**: Fixed quick-action bar (`Call Front Desk`, `WhatsApp Availability`, `Google Maps Route`, `Direct Enquiry`) engineered for mobile users driving along NH 183.
2. **Signature Charupady Transit Ticker**: Real-time road distance indicators for Vagamon (30 km), Thekkady (65 km), Sabarimala / Erumely (35 km), and Kottayam (52 km).
3. **Bilingual Malayalam (മലയാളം) Switcher**: Instant client-side localization for local travelers, Sabarimala pilgrims, and regional tourists.
4. **Safe WhatsApp Dispatch**: Client-side form builder that formats guest booking details into a clean WhatsApp message sent directly to `+91 94477 33801` without exposing third-party API keys.
5. **No Invented Claims**: Unverified rates, policies, and room counts are kept neutral and logged in [`NEEDS_CONFIRMATION.md`](file:///Users/sejinvarghese/buss/NEEDS_CONFIRMATION.md).

---

## 4. Client Handover & Photo Replacement Guide

When the hotel management provides official high-resolution property photography:
1. Replace `assets/hero.jpg` with the official building exterior photo.
2. Replace `assets/dining.jpg` with original photos of the *Sampushta* dining hall and *Charupady* food court.
3. Replace `assets/room-deluxe.jpg` with actual photos of the Deluxe and Standard room interiors.
4. Update room tariffs and confirmed opening hours in `index.html` and `app.js`.

---

## 5. Client Pre-Launch Approval Checklist
- [ ] Confirm official WhatsApp and reception mobile numbers.
- [ ] Verify standard room tariffs and seasonal pilgrimage rates.
- [ ] Confirm operating hours for *Sampushta Restaurant* and *Kairali Food Court*.
- [ ] Review and approve Malayalam translations.
- [ ] Remove the top staging disclaimer banner prior to pointing the official domain.
