---
name: web-animation-design
description: Designs purposeful, performant web motion with intentional timing, easing, sequencing, interaction states, and accessibility. Use whenever a frontend needs animation, scroll reveals, hover effects, transitions, or cinematic polish.
---

# Web Animation Design

Motion should explain hierarchy, state, continuity, or personality. Do not animate merely because the page feels empty. Before implementation, write `MOTION_PLAN.md` with the animation inventory, trigger, duration, easing, distance, delay, purpose, performance risk, and reduced-motion behavior for every animated element.

## Motion hierarchy

Use one orchestrated signature moment, a small number of section transitions, and restrained micro-interactions. Prefer a coherent rhythm over many unrelated effects. A page should still feel designed when all motion is disabled.

Use these defaults only as starting points, then tune them to the visual direction:

| Use | Typical range | Guidance |
|---|---:|---|
| Micro feedback | 120–220ms | Button, link, icon, or input response. |
| Small state change | 180–320ms | Menu, tooltip, card state, or accordion. |
| Section reveal | 450–800ms | Use sparingly and stagger only when hierarchy requires it. |
| Hero orchestration | 900–1600ms | Use one deliberate sequence, not a cascade of every element. |

Prefer opacity, transform, clip-path, and color changes that can run on the compositor. Avoid animating layout-heavy properties such as width, height, top, left, margin, and box-shadow on large surfaces unless tested.

## Interaction rules

- Every interactive element needs hover, focus-visible, active, disabled, and loading states where relevant.
- Hover effects must never be the only way to understand an action.
- Scroll reveals must not hide content from users who do not scroll or who prefer reduced motion.
- Avoid infinite loops, bouncing logos, parallax everywhere, cursor-following effects, and automatic carousels unless the product concept clearly requires them.
- Use `prefers-reduced-motion: reduce` to disable transforms, transitions, autoplay, and decorative motion. Preserve content and state clarity.
- Respect mobile performance. Do not use a large WebGL scene or video background as decoration without a measurable reason.

## Implementation choice

Use CSS for simple transitions and keyframes. Use Motion for React when component state and layout transitions are the main need. Use GSAP/ScrollTrigger only when the page needs a coordinated timeline, complex scroll choreography, or precise sequencing. Do not install both Motion and GSAP for the same simple page.

## Review

After implementation, test motion at slow speed and on a low-powered mobile profile. Check for jank, accidental layout shifts, excessive stagger, unreadable text during transitions, keyboard focus loss, and reduced-motion behavior. Record the final decisions in `MOTION_PLAN.md`.
