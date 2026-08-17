# Antigravity Premium Web Recommendations

**Goal:** Make Antigravity produce distinctive, polished, animated websites instead of generic vibe-coded pages.

## Bottom line

Do not install a massive collection of loosely reviewed skills. Use a **small, opinionated stack** with four responsibilities: art direction, motion design, visual QA, and anti-slop review. Antigravity supports workspace skills in `.agents/skills/<skill-folder>/`, with each skill containing a `SKILL.md` and YAML frontmatter. It also supports global skills under `~/.gemini/config/skills/<skill-folder>/`.[1]

The attached `antigravity-premium-web-skills.zip` contains a ready-to-copy workspace kit with four local skills. Install that kit first, then selectively adapt trusted external skills.

## Ranked skill recommendations

| Priority | Skill | Recommended source | Why it matters |
|---:|---|---|---|
| 1 | Frontend art direction | Included local `frontend-art-direction` skill; adapt [Anthropic’s frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) [2] | Prevents generic palettes, typography, hero layouts, copy, and design decisions. Forces a design direction before code. |
| 2 | Web animation design | Included local `web-animation-design`; adapt [Vercel Labs’ web-animation-design skill](https://github.com/vercel-labs/open-agents/blob/main/.agents/skills/web-animation-design/SKILL.md) [3] | Adds purposeful timing, easing, sequencing, interaction states, performance rules, and reduced-motion behavior. |
| 3 | Frontend visual QA | Included local `frontend-visual-qa`; combine with Playwright or Antigravity browser testing | Makes the agent inspect screenshots at mobile, tablet, and desktop widths instead of stopping when the build passes. |
| 4 | Anti-slop review | Included local `anti-slop-review` | Explicitly rejects generic hero sections, excessive pills, random gradients, fake metrics, filler copy, invented facts, and visually repetitive sections. |
| 5 | React/framework best practices | [Vercel Labs open-agents repository](https://github.com/vercel-labs/open-agents) [4] | Useful selectively for React performance and code quality, but should not override the art direction. |
| 6 | Stitch design skills | [Google Labs Stitch Skills](https://github.com/google-labs-code/stitch-skills) [5] | Useful for Stitch-assisted design systems, design-to-code, React components, and iterative design loops. Install only if Stitch MCP is actually part of the workflow. |
| 7 | Remotion skills | [Official Remotion Agent Skills](https://www.remotion.dev/docs/ai/skills) [6] | Use for programmatic video, cinematic motion graphics, animated explainers, or generated hero footage—not for ordinary CSS transitions. |

## Installation

Download and extract the attached ZIP into the project root. The desired structure is:

```text
my-project/
└── .agents/
    └── skills/
        ├── frontend-art-direction/SKILL.md
        ├── web-animation-design/SKILL.md
        ├── frontend-visual-qa/SKILL.md
        └── anti-slop-review/SKILL.md
```

From a terminal:

```bash
unzip antigravity-premium-web-skills.zip
cp -R antigravity-premium-web-skills/.agents /path/to/my-project/
```

Open the project in Antigravity and ask it to list the available skills. The official plugin system is also available, but it is better to begin with local workspace skills because they are easier to inspect, modify, and version.[1]

## External skill installation policy

For Anthropic’s `frontend-design` and Vercel Labs’ `web-animation-design`, copy or adapt only the relevant `SKILL.md` files into your workspace. Do not install an entire external repository without reviewing its instructions, scripts, dependencies, and license.

For Google Stitch, the official repository describes compatibility with Antigravity and the Agent Skills open standard. It also lists design, React, Remotion, shadcn/ui, and iterative-design skills.[5] Stitch-specific skills may require the Stitch MCP server, so use them only when the MCP integration is configured.

For Remotion, the official documentation provides:

```bash
npx skills add remotion-dev/skills
```

Remotion’s skills cover video composition, markup, rendering, maps, interactivity, and multimedia.[6] Do not add them to a normal marketing-site project merely to make the page “feel animated.”

## Recommended implementation stack

Skills influence agent behavior; libraries implement the result. Keep the actual frontend stack narrow.

| Need | Default choice | When to add something else |
|---|---|---|
| Styling | The project’s existing CSS system and design tokens | Tailwind if already present and used consistently. |
| UI primitives | Radix UI or selected shadcn/ui primitives | Only for accessible dialogs, menus, tabs, forms, and similar behaviors. |
| Simple animation | CSS transitions and keyframes | Use Motion for React when state/layout transitions are complex. |
| Scroll choreography | Motion for React | Use GSAP + ScrollTrigger for genuinely timeline-heavy pages. Choose one primary motion system. |
| Smooth scrolling | Native browser scroll | Add Lenis only when the visual concept benefits and mobile performance remains acceptable. |
| QA | Playwright plus screenshot review | Add browser automation tooling when Antigravity can access it safely. |
| 3D | No 3D by default | Use Three.js/R3F only when the object or environment is central to the story. |
| Icons | One consistent icon library | Never mix unrelated icon styles. |

Useful official library references include [Motion](https://motion.dev/), [GSAP](https://gsap.com/), [Playwright](https://playwright.dev/), and [Lenis](https://lenis.darkroom.engineering/). These are implementation tools, not substitutes for art direction.

## Anti-slop operating sequence

The agent must follow this order:

```text
1. Research the subject and audience
2. Write DESIGN_DIRECTION.md
3. Review the design for generic defaults
4. Write MOTION_PLAN.md
5. Implement the page
6. Capture responsive screenshots
7. Run frontend-visual-qa
8. Run anti-slop-review
9. Revise if the verdict is REVISE or BLOCK
10. Only then report completion
```

The most important instruction is that the agent must **not start coding immediately**. A high-end page should first have a visual thesis, deliberate type pairing, a subject-specific palette, a distinct composition, a signature element, and a clear reason for every animation.

## Required anti-slop rules

The agent should reject a design when the hero is just a full-bleed image with a centered heading, gradient overlay, and two rounded buttons. It should reject default purple/blue gradients, glassmorphism, meaningless statistics, excessive pill controls, icon grids, random blobs, fake testimonials, vague AI copy, and repeated cards used to fill empty space.

It should also reject unsupported business claims, fabricated ratings, invented room details, fake availability, copied competitor text, unlicensed images, and unapproved logos. Missing facts should be recorded in `NEEDS_CONFIRMATION.md` instead of guessed.

Motion should support hierarchy or feedback. Every motion system should include reduced-motion handling through `prefers-reduced-motion: reduce`. The Vercel Labs skill specifically emphasizes reduced-motion handling, and this should be treated as a hard quality gate rather than an optional enhancement.[3]

## Kickoff prompt

Paste this into Antigravity after installing the kit:

```text
Use the local premium-web skills in this workspace. Start with frontend-art-direction and write DESIGN_DIRECTION.md before coding. The design must be specific to the subject and must reject generic AI patterns. Then write MOTION_PLAN.md with the purpose, timing, easing, performance, and reduced-motion behavior of every animation. Implement only after reviewing the uniqueness of the direction. Before completion, capture responsive screenshots and run frontend-visual-qa and anti-slop-review. If the result looks reusable for a random hotel, startup, agency, or restaurant, revise it. Do not invent facts, reviews, prices, testimonials, awards, or imagery. Do not claim completion unless the visual, functional, accessibility, performance, and factual checks pass.
```

## References

[1]: https://antigravity.google/docs/skills "Google Antigravity Skills documentation"
[2]: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md "Anthropic frontend-design Agent Skill"
[3]: https://github.com/vercel-labs/open-agents/blob/main/.agents/skills/web-animation-design/SKILL.md "Vercel Labs web-animation-design Agent Skill"
[4]: https://github.com/vercel-labs/open-agents "Vercel Labs open-agents repository"
[5]: https://github.com/google-labs-code/stitch-skills "Google Labs Stitch Skills repository"
[6]: https://www.remotion.dev/docs/ai/skills "Remotion official Agent Skills documentation"
