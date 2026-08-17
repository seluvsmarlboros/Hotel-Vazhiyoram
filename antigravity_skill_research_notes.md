# Antigravity skill research notes

## Official docs read
1. https://antigravity.google/docs/skills
2. https://antigravity.google/docs/cli/plugins

## Verified facts
- Antigravity skills are an open standard for extending agent capabilities.
- A skill is a folder containing a required `SKILL.md` file.
- `SKILL.md` must have YAML frontmatter; `description` is required, `name` is optional.
- Skills can include optional scripts, examples, and resources.
- Official docs show workspace-specific skills under `<workspace-root>/.agents/skills/<skill-folder>/` and global skills under `~/.gemini/config/skills/<skill-folder>/`.
- Plugins bundle skills with other capabilities such as background subagents, linting rules, MCP definitions, and hooks.
- Plugins require a root `plugin.json` manifest. The CLI supports `agy plugin list`, `agy plugin install /path/to/local/plugin`, `agy plugin enable`, `agy plugin disable`, and `agy plugin uninstall`.

## Recommendation implication
For anti-slop frontend work, prefer a small, opinionated set of local workspace skills and rules over installing a huge unreviewed skill collection. Use standalone skills for design/motion/QA instructions and plugins only when the bundle is trusted and its components are understood.

## Trusted downloadable skill sources

### Google Labs Stitch Skills
Repository: https://github.com/google-labs-code/stitch-skills

The repository describes a collection of Agent Skills following the open standard and compatible with Antigravity, Gemini CLI, Claude Code, Cursor, and OpenCode. Relevant groups include `stitch-design`, `stitch-build`, and `stitch-utilities`, with skills for design systems, design-to-code, React components, Remotion, shadcn/ui, React/Vite, prompt enhancement, and iterative design loops. It requires the Stitch MCP server for the Stitch-specific tools, so the design skills should not be installed blindly if Stitch is not part of the user's workflow.

### Anthropic frontend-design skill
Repository/file: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md

This is not an Antigravity-native repository, but the file follows the Agent Skills format and can be adapted or copied into Antigravity's `.agents/skills` folder. It explicitly instructs the agent to make deliberate, subject-specific visual choices; avoid templated defaults; treat the hero as a thesis; use typography as personality; use motion deliberately; and work in two passes: design plan first, then implementation after reviewing uniqueness. This is highly relevant to anti-slop frontend work.

## Recommendation implication
Install or adapt the Anthropic frontend-design skill as the visual art-direction foundation, use Google Stitch skills only when the Stitch MCP workflow is available, and add a custom Antigravity skill for motion/interaction QA rather than depending on a large generic skill marketplace.

## Motion and QA findings

### Vercel Labs web-animation-design
Repository/file: https://github.com/vercel-labs/open-agents/blob/main/.agents/skills/web-animation-design/SKILL.md

This is a strong candidate for adaptation into Antigravity. It is an Agent Skills-format skill focused on purposeful web animation, timing, easing, transitions, hover effects, page transitions, and performance. It explicitly includes `prefers-reduced-motion` guidance and says all animated elements should have a reduced-motion path. The repo also contains frontend-design, browser, code-review, and React best-practice skills, but these should be reviewed and installed selectively.

### Remotion
Official documentation: https://www.remotion.dev/docs/ai/skills

Remotion publishes Agent Skills via `npx skills add remotion-dev/skills`, including best practices, markup, studio, render, maps, interactivity, documentation, and multimedia. These are primarily for programmatic video and motion graphics, not ordinary website animation. Use Remotion only if the project needs cinematic video backgrounds, product demos, or generated motion assets; do not add it merely to animate a normal marketing site.

## Recommendation implication
For a normal premium website, use CSS transitions/keyframes or the project’s existing animation library, plus a dedicated animation-design skill. Add GSAP or Motion only when the motion direction genuinely needs timeline/scroll orchestration. Add Playwright/browser QA skills so the agent must visually test pages at multiple viewport sizes rather than stopping at code compilation.
