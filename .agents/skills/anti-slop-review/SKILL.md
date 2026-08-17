---
name: anti-slop-review
description: Audits frontend work for generic AI-generated patterns, unsupported copy, visual filler, weak hierarchy, and unapproved assumptions. Use after design planning and again before delivery.
---

# Anti-Slop Review

Review the interface as a demanding creative director and a real user, not as the author trying to defend the implementation.

## Reject these failure modes

Reject generic hero sections that combine a full-bleed image, centered white heading, gradient overlay, and two rounded buttons without a subject-specific reason. Reject excessive pills, glass cards, purple/blue gradients, icon grids, fake metrics, fake testimonials, vague marketing copy, repetitive rounded rectangles, random blobs, overuse of shadows, and animation added to compensate for weak composition.

Reject invented business facts, unverified awards, fake reviews, invented availability, copied competitor wording, and placeholder text that was never replaced. For local businesses, reject incorrect addresses, phone numbers, hours, service lists, and map locations.

## Required review report

Write `ANTI_SLOP_REVIEW.md` with:

- The page’s visual thesis in one sentence.
- The three most specific design decisions and why they belong to this subject.
- The strongest section and the weakest section.
- Any generic patterns found and what was changed.
- Any unsupported factual claims found and how they were handled.
- A decision: `PASS`, `REVISE`, or `BLOCK`.

## Revision rules

If the visual identity could be reused unchanged for a random hotel, startup, agency, or restaurant, return `REVISE`. If factual or licensing problems remain, return `BLOCK`. Only return `PASS` when the design is specific, the hierarchy is clear, the interactions are useful, the content is truthful, and the page works without relying on motion.
