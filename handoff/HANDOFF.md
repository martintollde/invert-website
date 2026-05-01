# Invert — Brand Handoff

Brutalist Grid system. Signal Red `#EE2A2A` accent. Typografin är hjälten; rutnätet av 2px svarta linjer är strukturen; allt annat ligger tyst.

---

## 1. Logo

Två varianter, exakt samma form. Använd primary som default. Använd secondary endast som social-avatar, sticker, embroidery-patch — situationer där en avgränsad form behövs.

| Variant | Fil | Användning |
|---|---|---|
| **Primary** (no ring) | `logo-primary.svg` | Header, footer, hero, alla in-line lockups, all body-context |
| **Secondary** (thin ring) | `logo-secondary.svg` | Avatar, favicon på fast bg, sticker, embroidery |

Båda är på `currentColor` — sätt färg via CSS `color` på parent, eller `fill="..."` på SVG.

**Spacing:** håll alltid en luft motsvarande logons höjd / 4 runt om i lockups.
**Min size:** primary 24px height, secondary 32px height (ringen kräver mer).
**Aldrig:** rotera, skeva, lägg till skuggor, lägg på gradient, ändra strokebredd på ringen.

---

## 2. Color

| Token | Hex | Roll |
|---|---|---|
| `--invert-paper` | `#FFFFFF` | All bakgrund som default |
| `--invert-ink` | `#0A0A0A` | All typografi, alla borders |
| `--invert-signal` | `#EE2A2A` | Stämpel, button-fill, terminator-punkt, link-hover. **Aldrig som flat fill för stora ytor.** |
| `--invert-rule` | `#0A0A0A` | Alias för ink när det används som border |
| `--invert-muted` | `#888888` | Meta-text, secondary copy |
| `--invert-faint` | `#E6E6E6` | Inner-grid lines, dashed rules |

**Regel:** signal-färgen är en *stämpel*, inte en yta. Den används för korta accent-block i typografi (`.invert-stamp`), aktiva button-states, terminator-prickar (`●`), och nyckelnummer i metric-celler. Bär aldrig en hel sektions bakgrund i röd — använd ink-svart för fullbleed-sektioner istället.

Token-fil: `tokens.css` (CSS custom properties) och `tailwind.config.snippet.js` (Tailwind theme extend).

---

## 3. Type

Två fonter, totalt. Ingen tredje.

```
Display + body:  Inter (400, 700, 800, 900)
Meta + numbers:  JetBrains Mono (400, 500, 700)
```

Ladda från Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

### Type roles

| Role | Recipe | Use |
|---|---|---|
| **Display** | Inter 900, `clamp(64px, 9vw, 132px)`, `letter-spacing: -0.05em`, `line-height: 0.85`, ALL CAPS | Hero headlines |
| **H1** | Inter 800, `clamp(48px, 6vw, 88px)`, `letter-spacing: -0.04em`, `line-height: 0.9` | Section titles |
| **H2** | Inter 700, `clamp(32px, 3.5vw, 48px)`, `letter-spacing: -0.03em` | Card titles |
| **Body** | Inter 400, `17px / 1.55` | Paragraphs |
| **Meta** | JetBrains Mono 500, `11–13px`, `letter-spacing: 0.18em`, `text-transform: uppercase`, `color: var(--invert-muted)` | Labels, eyebrows, timestamps, navigation, metric labels |
| **Numbers** | JetBrains Mono 700 OR Inter 900 with `font-feature-settings: "tnum"` | Stats, prices, KPIs |

### Type rules

- ALL display headlines i ALL CAPS, tight tracking. Period.
- ALL meta-text i mono, looose tracking, ALL CAPS, muted.
- En periodpunkt i `signal` efter rubriker ger lockup-känsla: `Growth, unboxed.` med röd `.`
- En `.invert-stamp` fyller ett ord/fras med röd bakgrund + vit text — använd max 1 per headline.
- Body är ALLTID i sentence case och mid-grey (#222–#444). Aldrig pure black.

---

## 4. Layout system

**Grid:** 12-col, 56px gutter. Men det viktiga är inte kolumnerna — det är **divisionerna**.

**Borders are the brand.** Varje sektion, varje kolumn, varje cell separeras med `2px solid #0A0A0A`. Det är systemet. Inga kort-skuggor, inga rounded corners, ingen padding-only-separation. Linjen är strukturen.

```
┌──────────────────────┬──────────┐
│                      │          │
│     hero left        │  hero    │
│                      │  right   │
├──────────────────────┴──────────┤
│  ticker  /  status  /  link     │
└─────────────────────────────────┘
```

### Section recipes

- **Header:** 56px höjd, 2px border-bottom, mono nav i 11px ALL CAPS.
- **Hero:** 2-col `2fr 1fr`, vänster vit + display headline, höger ink-svart med stort centrerat märke.
- **Section divider:** thin strip, `padding: 14px 56px`, mono 11px label vänster + `↓` arrow höger, 2px border top + bottom.
- **Footer ticker:** horizontal flex, mono 11px, items separerade av `/`-spacers i muted-grey.

### Spacing scale

`24px · 32px · 48px · 56px · 80px · 120px`. Inga andra värden. 56px är den vanligaste page gutter.

---

## 5. Components

### Button (split-stamp)

Två-cellig knapp: action vänster, meta höger, separerade av 2px border. CTA är default ink-svart, hot-state är signal-red.

```html
<div class="invert-btn">
  <div class="invert-btn__action invert-btn__action--signal">Book audit</div>
  <div class="invert-btn__meta">02:14 →</div>
</div>
```

### Mono label (eyebrow)

```html
<div class="invert-mono-label">● live · stockholm</div>
```

### Display with stamp

```html
<h1 class="invert-display">
  Growth, <span class="invert-stamp">unboxed</span>.
</h1>
```

### Metric cell

```html
<div class="metric">
  <div class="invert-mono-label">Avg. ROAS</div>
  <div class="metric__value">4.7×</div>
  <div class="invert-mono-label">across portfolio</div>
</div>
```
Value är Inter 900, `clamp(64px, 8vw, 132px)`, tnum.

### Case card

```html
<article class="case">
  <header class="case__head">
    <span class="invert-mono-label">Case · 001</span>
    <span class="invert-mono-label" style="color:var(--invert-signal)">+38%</span>
  </header>
  <h2>Kapsyl<span style="color:var(--invert-signal)">.</span></h2>
  <p>DTC food &amp; beverage</p>
  <footer>
    <span class="invert-mono-label">6 mo</span>
    <a class="invert-mono-label" href="...">Read →</a>
  </footer>
</article>
```
Top-border 2px solid ink. Inga side-borders, inga shadows.

---

## 6. Voice & copy

- **Direkt och kort.** Ingen byråprosa.
- **Showar arbetet.** Säg vad ni faktiskt gör, inte vad ni "tror på".
- **Mix svenska + engelska tillåten** — ord som *unbox*, *open by default*, *audit* lever på engelska.
- **Periodpunkter med vikt.** `Growth, unboxed.` `No magic. Just method.`
- **Inga emojis.** Använd `●` för dots, `→` för arrows, `↓` för section markers, `·` för dividers.
- **Numbers feel like proof.** Visa exakta siffror (`+38%`, `4.7×`, `02:14`), inte "vi växer snabbt".

### Tagline-hierarki

1. **Primär:** "Unbox the blackbox."
2. **Sekundär:** "Growth, unboxed."
3. **Manifesto:** "No magic. Just method."
4. **CTA:** "Book audit"

---

## 7. Don'ts

- Inga gradienter. Någonsin.
- Inga rounded corners (border-radius: 0 överallt).
- Inga box-shadows.
- Ingen beige.
- Ingen tredje färg utöver paper/ink/signal.
- Ingen tredje font.
- Inga emojis.
- Inga centered paragraphs (left-align everything).

---

## 8. Files in this folder

```
handoff/
├── HANDOFF.md                       # this file
├── logo-primary.svg                 # /D — no ring, default
├── logo-secondary.svg               # /A — thin ring, badge use only
├── tokens.css                       # CSS custom properties + helpers
├── tailwind.config.snippet.js       # paste into tailwind.config.js
└── claude-code-prompt.md            # ready-to-paste prompt for Claude Code
```
