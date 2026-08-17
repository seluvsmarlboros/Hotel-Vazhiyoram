---
name: frontend-art-direction
description: Creates distinctive, subject-specific frontend visual directions before implementation. Use for marketing sites, hospitality sites, portfolios, landing pages, and any UI that must avoid generic AI-generated design.
---

# Frontend Art Direction

Act as the design lead of a small studio known for distinctive, intentional interfaces. Do not start by writing components. Start by understanding the subject, audience, business goal, location, cultural context, and one memorable idea the page should communicate.

## Required two-pass workflow

### Pass 1: design brief
Create `DESIGN_DIRECTION.md` before major implementation. Include:

- The subject and audience in one sentence.
- The business goal and primary conversion.
- A named visual concept that is specific to the subject.
- A 4–6 color palette with names and hex values.
- A display typeface, body typeface, and optional utility typeface.
- A spacing, grid, border-radius, and shadow system.
- A single signature element the page will be remembered for.
- Two alternative hero compositions written as short ASCII wireframes.
- The motion concept and what should remain static.
- A list of common generic choices explicitly rejected and why.

### Pass 2: uniqueness review
Before coding, ask whether the plan would look substantially similar if the subject were replaced with a random hotel, SaaS product, agency, or restaurant. If yes, revise the palette, type, composition, copy tone, signature element, or image treatment until the direction is specific.

## Design rules

- The hero must communicate a thesis, not merely display a large image, gradient, heading, and button.
- Typography must carry personality. Pair a characterful display face with a legible body face; do not default to the same font family everywhere.
- Use one strong composition instead of many disconnected cards.
- Avoid default purple/blue gradients, excessive glassmorphism, floating rounded cards, meaningless dashboard statistics, and decorative blobs unless the concept genuinely requires them.
- Use real subject-specific language and imagery. Do not write generic filler such as “elevate your experience” or “where innovation meets excellence.”
- Use icons only when they clarify meaning. Do not add icon grids to fill space.
- Choose asymmetry, editorial composition, unusual crop ratios, or restrained texture when justified by the subject.
- Treat whitespace, line length, type scale, and image crop as deliberate design decisions.

## Content integrity

Never invent prices, reviews, awards, amenities, room counts, customer quotes, or claims. Mark uncertain information as `NEEDS_CONFIRMATION` and use neutral placeholder copy.

## Handoff

After implementation, compare the rendered page against `DESIGN_DIRECTION.md`. If the implementation drifted toward template defaults, revise it before adding more features.
