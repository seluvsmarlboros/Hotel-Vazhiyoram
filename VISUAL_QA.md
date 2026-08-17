# Frontend Visual QA Report (VISUAL_QA.md)

**Project**: Hotel Vazhiyoram — Private Concept Redesign  
**Location**: Mundakayam, Kerala (NH 183)  
**Date**: August 17, 2026

---

## 1. Responsive Viewport Matrix

| Viewport | Component / State | Visual & Functional Verification | Result |
| :--- | :--- | :--- | :--- |
| **375–390px Mobile** | Header & Sticky Bottom Bar | Sticky conversion bar (`Call`, `WhatsApp`, `Route`, `Enquiry`) stays fixed at `bottom: 0` with zero overlap over form inputs (`padding-bottom: 64px` on body). Drawer menu expands smoothly without horizontal scroll. | `PASS` |
| **375–390px Mobile** | Hero Section & Charupady Bar | Headline wraps naturally; transit ticker stacks in a 2x2 grid with legible contrast; Call and WhatsApp CTA buttons fill touch-friendly widths. | `PASS` |
| **768px Tablet** | Accommodations & Dining | Rooms render in 2-column grid; Sampushta dining and Charupady food court stack neatly beside imagery with balanced spacing. | `PASS` |
| **1280–1440px Desktop** | Full Page Composition | Hero split-screen balances editorial typography on the left with high-resolution Kerala hillside imagery on the right. Charupady transit bar spans full container in 4 columns. | `PASS` |
| **Keyboard Navigation** | Focus Rings & Tab Order | All interactive links, buttons, form inputs, and select dropdowns render a high-contrast gold outline (`3px solid #D99B26; outline-offset: 3px`) on `:focus-visible`. | `PASS` |
| **Reduced Motion** | `prefers-reduced-motion: reduce` | All transitions and animations cleanly collapse to instant state shifts (`0.01ms`), maintaining full layout clarity and functionality. | `PASS` |

---

## 2. Anti-Slop Visual Checklist

1. **Does the page have a recognizable visual idea specific to the subject?**  
   *Yes.* The visual thesis centers on Kerala's traditional timber architecture (*Charupady* slatted woodwork) and its geographical identity as the highway rest stop before ascending the Idukki High Ranges along NH 183.

2. **Would changing the business name leave the design mostly unchanged?**  
   *No.* The layout explicitly highlights Mundakayam transit distances (Vagamon 30km, Thekkady 65km, Sabarimala 35km), highway parking, and authentic Kerala dining options (Sampushta & Kairali food court).

3. **Is the hero a clear thesis rather than a generic image, heading, and two pill buttons?**  
   *Yes.* The hero establishes the highway rest-stop proposition with verified NH 183 landmarks, instant call/WhatsApp actions, and the signature Charupady transit metric bar.

4. **Are typography, image treatment, layout, and motion working together?**  
   *Yes.* `Playfair Display` provides editorial warmth, `Plus Jakarta Sans` ensures high-contrast readability, and `Noto Serif Malayalam` handles native bilingual rendering.

5. **Are there repeated cards, pills, icons, or gradients that exist only because of empty space?**  
   *No.* Every card delivers verified service information (parking, dining, rooms, pilgrim transit). No decorative placeholder blobs or generic dashboard statistics.

6. **Does the page have a clear visual hierarchy when viewed at thumbnail size?**  
   *Yes.* Deep forest green and teak tones ground the header and hero, transitioning to warm cream paper tones for room details and dining.

7. **Does the design still feel intentional with motion disabled?**  
   *Yes.* Layout balance, typography hierarchy, and spacing maintain full visual authority without requiring animations.

---

## 3. Functional QA Summary

- [x] **Direct Phone Call**: `tel:+919447733801` and `tel:+914828274088` trigger native mobile dialer.
- [x] **WhatsApp Routing**: Automated message builder properly encodes name, room type, dates, and requests to `https://wa.me/919447733801`.
- [x] **Google Maps Navigation**: Direct link opens `https://maps.google.com/?q=Hotel+Vazhiyoram+Mundakayam+Kerala` with precise Mundakayam pin.
- [x] **Bilingual Toggle**: JavaScript dictionary updates all section headings and copy seamlessly to Malayalam (മലയാളം).
- [x] **Form Validation**: Empty submissions prompt friendly toast notifications; zero data exposure in client code.
- [x] **JSON-LD Schema**: Verified `Hotel` and `LodgingBusiness` schema without false ratings or fabricated reviews.

**Overall Verdict**: **`PASS`**
