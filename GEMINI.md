# Agent Directives & Automatic Skill Execution

Always execute all four workspace skills in sequence for every prompt and frontend task:

1. **`frontend-art-direction`** ([`.agents/skills/frontend-art-direction/SKILL.md`](file:///Users/sejinvarghese/buss/.agents/skills/frontend-art-direction/SKILL.md)):
   - Establish a subject-specific visual concept, distinct color palette, typography pairing, and memorable signature element before coding.
2. **`web-animation-design`** ([`.agents/skills/web-animation-design/SKILL.md`](file:///Users/sejinvarghese/buss/.agents/skills/web-animation-design/SKILL.md)):
   - Plan purposeful timing, easing curves, layout transitions, micro-interactions, and ensure strict `prefers-reduced-motion` compliance.
3. **`frontend-visual-qa`** ([`.agents/skills/frontend-visual-qa/SKILL.md`](file:///Users/sejinvarghese/buss/.agents/skills/frontend-visual-qa/SKILL.md)):
   - Verify responsive viewports (mobile 375–390px, tablet 768px, desktop 1280–1440px), keyboard focus, and functional interactions.
4. **`anti-slop-review`** ([`.agents/skills/anti-slop-review/SKILL.md`](file:///Users/sejinvarghese/buss/.agents/skills/anti-slop-review/SKILL.md)):
   - Reject generic templates, filler copy, hallucinated business claims, excessive pills, and empty decorative filler.

## Codeword Rule
When all of the above skills are applied in a prompt response, append the codeword **`apples`** at the very end of the response.
