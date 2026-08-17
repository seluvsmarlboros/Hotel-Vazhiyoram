# Motion Plan: Hotel Vazhiyoram (Mundakayam, Kerala)

## 1. Motion Philosophy & Goals
- **Purpose**: Motion must guide traveler hierarchy, emphasize immediate mobile conversion actions (Call/WhatsApp/Directions), provide crisp tactile feedback, and respect mobile battery and bandwidth on 3G/4G highway routes.
- **Principle**: Calm, intentional, architectural. No random floating bubbles, no continuous looping distractions, no heavy scroll jank.

---

## 2. Animation Inventory & Specifications

| Element / Action | Trigger | Duration | Easing | Transform / Props | Purpose | Reduced Motion Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Sticky Bottom Bar** | Page Load / Scroll | 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `translateY(100% -> 0)` | Ensure immediate conversion access on mobile | Static pinned bar without translation |
| **Hero Badge & Title Reveal** | Page Load | 500ms | `cubic-bezier(0.2, 0.8, 0.2, 1)` | `opacity: 0->1, translateY(12px->0)` | Welcomes traveler with calm elegance | Instant render with `opacity: 1` |
| **Charupady Highway Transit Ticker** | Scroll into view | 400ms | `ease-out` | `opacity: 0->1` | Highlights distances to Vagamon / Thekkady | Instant render |
| **Button Hover & Active Press** | User Interaction | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` | `scale(1 -> 1.02 -> 0.98)` | Tactile response for tap and click | Instant background-color shift |
| **Room / Dining Tab Switcher** | Tab Click | 250ms | `ease-out` | `opacity: 0->1, translateY(6px->0)` | Smooth transition between A/C, non-A/C, and Food Court info | Instant content replacement |
| **Enquiry Modal & Toast Alert** | Form Submit | 200ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `scale(0.95->1), opacity: 0->1` | Clear feedback confirming WhatsApp message generation | Instant display with `display: block` |

---

## 3. Performance & Compositor Discipline
- **Allowed Animated Properties**: Exclusively hardware-accelerated properties: `transform`, `opacity`, and `color`.
- **Strictly Prohibited**: Animating `width`, `height`, `margin`, `top`, `left`, or `box-shadow` on continuous scroll.

---

## 4. Accessibility & `prefers-reduced-motion` Implementation

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Interaction State Checklist
- [x] **`:focus-visible`**: High-contrast gold ring (`outline: 3px solid #D99B26; outline-offset: 2px;`) on all interactive buttons, inputs, and links.
- [x] **Active Tap State**: Immediate tactile scale down (`0.97`) on touch devices.
- [x] **Disabled State**: Opacity `0.5`, `cursor: not-allowed`, no hover transformation.
- [x] **Form Loading & Success State**: Clear spinning indicator on submit button followed by green confirmation badge and instant WhatsApp direct transfer.
