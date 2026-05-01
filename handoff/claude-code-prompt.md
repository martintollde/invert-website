# Invert — Brand system prompt for Claude Code

This prompt is the **standing instruction** for any work touching Invert's website. Use it for the initial rebrand AND for every future change. Paste it (everything below the `---`) into Claude Code with the repo open. The `handoff/` folder must be present in the repo root.

---

You are working on the Invert website. The visual brand is governed by `handoff/HANDOFF.md` — read it completely before writing any code, and re-read it on every new task. Treat it as the source of truth for anything visual.

## Your standing rules

These apply to **every** task, now and in the future — initial rebrand, feature work, content updates, bug fixes, anything.

### What you DO change
- **Visual design only.** Colors, typography, spacing, borders, layout, component styling, logos.
- Apply the brand system in `handoff/HANDOFF.md` consistently. Every new component, every new page, every new section uses the same primitives, tokens, and recipes.
- When you add a new UI element, build it from the existing primitives (Button, MonoLabel, Stamp, MetricCell, CaseCard, etc.). If something genuinely new is needed, design it in the same idiom (2px borders, mono labels, no shadows, no radius) and propose adding it to the primitives library.

### What you DO NOT change
- **Copy / content.** Do not rewrite, shorten, translate, or "improve" any existing text. Headings, body, CTAs, microcopy, alt text — leave the wording exactly as it is. The only exception is when the user explicitly asks you to change copy.
- **Site structure.** Do not add, remove, rename, or reorder pages, routes, or navigation entries.
- **Information architecture.** Do not change what data is shown on a page, what sections exist, or what fields a form has.
- **Backend, data, CMS schemas, APIs, routing logic, build config, deploy pipeline.** Untouched unless explicitly asked.
- **Frameworks and dependencies.** If it's React, stay React. If it's Astro, stay Astro. Don't migrate, don't swap libraries, don't add new heavy deps to "improve" things.
- **Existing assets that aren't visual brand.** Photos, illustrations, third-party widgets — leave them unless they directly clash with the brand (in which case ask first).

### How to apply the brand

1. **Tokens first.** All color, spacing, type, and border values come from `handoff/tokens.css` (or `handoff/tailwind.config.snippet.js` if Tailwind is in use). No hardcoded hex codes, no one-off pixel values. If a value isn't in the token set, use the closest one or ask before adding to the system.
2. **Logos.** Use `handoff/logo-primary.svg` everywhere by default. Use `handoff/logo-secondary.svg` only as social avatar / favicon / sticker / embroidery — places that demand a contained form. Both SVGs use `currentColor`.
3. **Type system.** Inter (400/500/700/800/900) for display + body. JetBrains Mono (400/500/700) for meta + numbers. No third font, ever. Display = ALL CAPS, tight negative tracking. Meta = ALL CAPS, loose tracking, mono, muted color.
4. **Layout.** Borders are the brand. Every section, column, and cell separated by `2px solid #0A0A0A`. No shadows, no border-radius, no gradients, no beige.
5. **Signal red `#EE2A2A`** is a stamp, not a fill. Use it for short typographic accents (`.invert-stamp`), button hot-states, terminator dots (`●`), and key numbers in metric cells. Never as a full-section background. For full-bleed accent sections, use ink-black instead.
6. **Voice in copy you yourself write** (e.g. ARIA labels, dev-only strings, comments): direct, short, no agency-prose. But again — do not rewrite existing user-facing copy.
7. **Honor the don'ts in `HANDOFF.md` §7.** This is the part that fails first when you're tired. No gradients. No rounded corners. No third color. No third font. No emojis. No centered paragraphs. None of it.

### Workflow for any task

1. Read `handoff/HANDOFF.md` (or skim if you've recently read it — but never skip it).
2. Identify the smallest set of files that need to change to fulfill the request.
3. Use existing primitives. If a primitive is missing, build it in the same idiom and reuse it.
4. Make the change without touching copy, structure, or non-visual code.
5. Run the site locally and check the modified pages against `HANDOFF.md` §7 (the don'ts).
6. Report back with: every file you changed, what you did to each, and the running dev URL.

### When in doubt — ask, don't invent

- If the user asks for something that requires changing copy, structure, or content, **stop and confirm** before doing it.
- If the brand system doesn't cover a case (e.g. a new chart type, a new modal interaction), **propose** an extension that fits the brutalist-grid idiom and wait for sign-off before shipping.
- If existing code uses tokens or patterns that conflict with the brand, **flag them** in your report; don't silently leave half-rebranded code.

### Out of scope, always

- Rewriting copy.
- Adding/removing pages, routes, or nav items.
- Migrating frameworks or build tools.
- Adding analytics, tracking, or third-party scripts.
- Performance refactors unless directly tied to a visual change.
- SEO/meta-tag changes unless directly tied to a brand asset (e.g. updating the favicon).

---

When this prompt is loaded for the **first** rebrand, treat it as: "rebrand the entire site to match `handoff/HANDOFF.md` while preserving all existing copy, structure, and routes."

When this prompt is loaded for **any subsequent task** ("update the pricing page hero", "add a new testimonial card", "fix spacing on mobile", etc.), treat it as: "do exactly what was asked, applying the brand system, preserving everything else."
