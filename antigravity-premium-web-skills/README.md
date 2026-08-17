# Antigravity Premium Web Skill Kit

This kit is a small, opinionated set of workspace skills for producing distinctive marketing websites with purposeful motion and screenshot-driven QA. It is intentionally not a giant marketplace bundle. Too many overlapping skills can produce contradictory instructions and more generic output.

## Included local skills

| Skill | Role |
|---|---|
| `frontend-art-direction` | Forces a subject-specific visual concept, design tokens, typography, signature element, and uniqueness review before coding. |
| `web-animation-design` | Plans purposeful motion, timing, easing, interaction states, performance, and reduced-motion behavior. |
| `frontend-visual-qa` | Requires screenshot review across mobile/tablet/desktop, keyboard checks, reduced motion, and functional testing. |
| `anti-slop-review` | Rejects generic AI patterns, filler, invented claims, weak hierarchy, and unapproved assumptions. |

## Install into an Antigravity workspace

Copy the `.agents` directory into the root of the project. Antigravity’s official documentation supports workspace skills at `<workspace-root>/.agents/skills/<skill-folder>/` and global skills at `~/.gemini/config/skills/<skill-folder>/`.

From the kit directory:

```bash
cp -R .agents /path/to/your/project/
```

Then open the project in Antigravity and ask it to list the available skills and explain when each will activate. Review the skill files before using them on a client project.

## Trusted external skills to adapt or install selectively

### 1. Anthropic frontend-design

Repository: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md

This is the strongest external foundation for anti-generic art direction. It instructs the agent to work like a design lead, make deliberate subject-specific choices, treat the hero as a thesis, use typography intentionally, and perform a design-plan pass before implementation. Because it is not an Antigravity-owned repository, copy the `SKILL.md` into a local workspace skill and review it rather than installing an entire external bundle blindly.

### 2. Vercel Labs web-animation-design

Repository: https://github.com/vercel-labs/open-agents/blob/main/.agents/skills/web-animation-design/SKILL.md

This is suitable for adaptation into a workspace skill when the project needs web motion. It covers timing, easing, transitions, scroll effects, performance, and `prefers-reduced-motion`. The local kit already includes a focused version designed to work without depending on the rest of the repository.

### 3. Google Labs Stitch Skills

Repository: https://github.com/google-labs-code/stitch-skills

Relevant groups include design-system extraction, design-to-code, React components, Remotion, shadcn/ui, prompt enhancement, and iterative design loops. Use these only if you are actually using Google Stitch and have the Stitch MCP server configured. The repository states that it is compatible with Antigravity and follows the Agent Skills open standard, but Stitch-specific tools are not required for ordinary frontend work.

### 4. Remotion skills

Official documentation: https://www.remotion.dev/docs/ai/skills

Install only for programmatic video, cinematic hero footage, animated explainers, or generated motion assets. Remotion is not the default choice for ordinary website transitions. Its official installation command is:

```bash
npx skills add remotion-dev/skills
```

## Recommended frontend library stack

Skills control agent behavior; libraries provide implementation capability. Keep the runtime stack small.

| Need | Recommended default | Add only when justified |
|---|---|---|
| Component styling | Existing project styling system or CSS variables | Tailwind if already present and the team is comfortable with it. |
| UI primitives | Radix UI or shadcn/ui selectively | Do not turn every section into a component library demo. |
| Simple interaction motion | CSS transitions/keyframes | Motion for React when state/layout animation becomes complex. |
| Scroll choreography | Motion for React | GSAP + ScrollTrigger for genuinely timeline-heavy art direction. Choose one, not both by default. |
| Smooth scrolling | Native scrolling first | Lenis only when the concept and performance budget justify it. |
| Icons | One consistent icon set | Do not mix five icon libraries. |
| QA | Playwright and screenshot review | BrowserMCP/Antigravity browser tools if available. |
| 3D | None by default | Three.js/R3F only when the 3D object is central to the business story. |

## Recommended installation order

Install the local kit first. Then adapt Anthropic’s `frontend-design` skill. Add the Vercel animation skill if you need deeper motion guidance. Add a browser-testing skill or Playwright workflow. Add Stitch only when the project uses Stitch. Add Remotion only for video or generated motion assets.

## Operating sequence

Use the skills in this order:

```text
frontend-art-direction
        ↓
web-animation-design
        ↓
implementation
        ↓
frontend-visual-qa
        ↓
anti-slop-review
        ↓
revision or delivery
```

The agent must produce `DESIGN_DIRECTION.md`, `MOTION_PLAN.md`, `VISUAL_QA.md`, and `ANTI_SLOP_REVIEW.md`. If the anti-slop review returns `REVISE` or `BLOCK`, the agent must revise instead of claiming completion.

## One-line Antigravity kickoff prompt

```text
Use the local premium-web skills in this workspace. Start with frontend-art-direction and write DESIGN_DIRECTION.md before coding. Then write MOTION_PLAN.md. Implement only after reviewing the uniqueness of the design direction. Before completion, run frontend-visual-qa and anti-slop-review, capture responsive screenshots, and do not claim done unless the page passes the visual and factual quality gates.
```

## Important warning

Do not install every skill in a large “awesome skills” collection. Prefer a small, reviewed set. Skills are instructions that influence an agent’s behavior; untrusted or overlapping skills can contain poor defaults, conflicting workflows, unsafe scripts, or excessive dependencies. Read the contents, pin versions or commit hashes when possible, and test the skill kit in a non-client project before using it for paid work.

## Official Antigravity references

- Skills: https://antigravity.google/docs/skills
- Plugins and skills: https://antigravity.google/docs/cli/plugins
