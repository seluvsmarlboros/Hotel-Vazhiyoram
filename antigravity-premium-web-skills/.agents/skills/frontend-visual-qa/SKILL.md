---
name: frontend-visual-qa
description: Performs screenshot-driven frontend quality assurance across responsive viewports, interaction states, accessibility, performance, and visual consistency. Use before declaring a web page or app complete.
---

# Frontend Visual QA

Do not accept “the build passes” as proof that the interface is good. A production-quality frontend requires rendered visual inspection and interaction testing.

## Required review matrix

Review at minimum:

| View | Check |
|---|---|
| 375–390px mobile | Navigation, hero crop, CTA reachability, text wrapping, form usability, horizontal overflow. |
| 768px tablet | Grid transitions, spacing, image ratios, section rhythm. |
| 1280–1440px desktop | Composition, maximum line length, hero balance, empty space, alignment. |
| Keyboard-only | Focus order, visible focus, menus, dialogs, forms, skip link if appropriate. |
| Reduced motion | All non-essential animation disabled while content remains understandable. |
| Slow network | Image loading, layout shift, readable fallback, no blocking decoration. |

## Anti-slop review

Ask the following questions and write the answers in `VISUAL_QA.md`:

1. Does the page have a recognizable visual idea specific to the subject?
2. Would changing the business name leave the design mostly unchanged? If yes, reject it and return to art direction.
3. Is the hero a clear thesis rather than a generic image, heading, gradient, and two buttons?
4. Are typography, image treatment, layout, and motion working together?
5. Are there repeated cards, pills, icons, or gradients that exist only because the agent had empty space?
6. Does the page have a clear visual hierarchy when viewed at thumbnail size?
7. Does the design still feel intentional with motion disabled?

## Functional QA

Check all internal links, phone links, WhatsApp links, maps, mail links, forms, menu open/close behavior, image fallbacks, keyboard focus, error states, and success states. Run lint, typecheck, tests, and production build. Capture screenshots of the homepage and important interaction states.

## Completion rule

Do not report completion when a critical issue remains. List passed checks, failed checks, screenshots reviewed, and remaining assumptions. If the design looks generic, the correct action is revision, not adding more decoration.
