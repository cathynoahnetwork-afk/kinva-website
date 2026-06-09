# Kinva Design System

> **庆华一站式批发商 · Kinva Wholesale**
> *"低门槛批发，创业更有保障。" — Low-barrier wholesale, a more secure start.*

The brand system for **Kinva**, a one-stop stationery wholesale & retail business based in
Kapar, Klang, Malaysia. Kinva has served small businesses, grocery-store owners and first-time
entrepreneurs for **over two decades** (the badge reads *EST. 2004*), offering high-value,
low-barrier bulk purchasing — with **free shipping** and a **buy-back / return guarantee** so
customers can start trading at lower cost and lower risk.

This is a living design system: typography, color, spacing, brand voice, reusable React
components, and full-screen UI kits. A compiler indexes everything here so other projects can
design *as Kinva*.

---

## Company context

| | |
|---|---|
| **Legal / display name** | 庆华一站式批发商 · Kinva Wholesale (Kinva Trading) |
| **Category** | Stationery & office-supply wholesale + retail |
| **Location** | Kapar, Klang, Selangor, Malaysia |
| **Established** | 2004 (logo: *EST. 2004*) |
| **Audience** | Small-business owners, sundry/grocery shops, school suppliers, new entrepreneurs |
| **Promise** | Free shipping · buy-back guarantee · save more with bulk orders |
| **Brands carried** | Faber-Castell, M&G, STABILO, Pilot, Nieki, and more |
| **Positioning** | Malaysia's go-to **low-barrier** stationery wholesaler |
| **Slogan (中文)** | 低门槛批发，创业更有保障。 |
| **Tagline (EN)** | *Your One-Stop Stationery & Wholesale* |

**Tone:** professional and trustworthy, but warm and approachable (亲民但专业值得信赖) —
the dependable local wholesaler who helps you start a business without big risk.

### Sources provided
- `uploads/307171250_406031105046534_6156408703314690386_n.png` — circular brand badge
  (red ground, eraser/notebook glyph, "KINVA" wordmark, *EST. 2004*). Copied to
  `assets/kinva-logo-badge.png`.
- `uploads/528716345_1067905348859103_1186622345693747888_n.jpg` — the "Your ONE STOP
  Stationery & Wholesale" sales flyer. Copied to `assets/kinva-flyer-onestop.jpg`.
- Brand brief (Chinese) supplied by the owner describing positioning, guarantees, colors and tone.

> ⚠️ **Discrepancy to confirm:** the brief says *"超过25年经验"* (25+ years) while the badge
> reads *EST. 2004* (~21 years on the flyer). Copy here says "over two decades." Please confirm
> the year to standardize.

---

## CONTENT FUNDAMENTALS — how Kinva writes

Kinva's copy sounds like a confident, friendly shopkeeper who knows wholesale inside-out. It is
**bilingual** (English + 简体中文), benefit-first, and never corporate-stiff.

**Voice**
- **Direct & benefit-led.** Lead with what the customer gets: *"Save more with bulk order."*
  *"低门槛批发，创业更有保障。"*
- **Reassuring, low-risk framing.** Always foreground the guarantees — free shipping, buy-back,
  low minimums. The emotional job is *"you can start without fear."*
- **Plain-spoken, not jargon.** Short, punchy lines. *"Your One-Stop Stationery & Wholesale."*
- **Proof through longevity & trust.** *"21 years of trusted seller."* Numbers do the bragging.
- **Warm but professional.** Approachable like a neighbourhood supplier; never gimmicky or hype-y.

**Person & address**
- Speaks to the customer as **"you / 你"**; refers to itself as **"we / 我们"** or simply **Kinva**.
- Imperative CTAs are friendly, not bossy: *"Save more," "Order now," "Start your shop."*

**Casing & emphasis**
- **Headlines:** UPPERCASE or Title Case for impact words; mix weights/colors to spotlight the
  key word (e.g. **ONE STOP** in orange, **WHOLESALE** in red).
- **Body:** sentence case.
- **Numbers & SKUs:** kept literal and monospace where shown (e.g. `AGP02372`, `BL-G2-7`, `RM 12.90`).

**Bilingual rules**
- English-first for marketing punch; Chinese for trust, warmth and the core slogan.
- Don't machine-translate the slogan — keep *"低门槛批发，创业更有保障。"* verbatim.
- Prices in **Ringgit**: `RM` prefix, two decimals (`RM 8.50`).

**Emoji / symbols**
- **No emoji** in brand copy. Use real iconography instead (see ICONOGRAPHY).
- Light use of symbols is fine for retail energy: `×` for pack counts (`Click ×7`), `&`, `/`, `+`.

**Examples (on-brand)**
- ✅ *"Your One-Stop Stationery & Wholesale — save more with every bulk order."*
- ✅ *"卖不出？可退回。低门槛入货，创业更安心。"*
- ✅ *"Free shipping on bulk orders. Faber-Castell, Pilot, STABILO & more."*
- ❌ *"Synergize your procurement workflow 🚀"* (jargon + emoji + cold)

---

## VISUAL FOUNDATIONS

The Kinva look is **bold retail-flyer energy disciplined into a clean, trustworthy system**:
hot red + orange accents on a warm cream ground, heavy condensed display type, sturdy outlined
"sticker" shapes, and real product photography.

### Color
- **Red is the brand.** `--kinva-red-500` (#DE262C) for primary actions, the logo, key headlines.
  A brighter `--kinva-red-400` (#ED3A3F) is the badge red; deep `--kinva-red-700` for red text on cream.
- **Orange is the energy accent.** `--kinva-orange-500` (#F68122) for highlights, deal banners,
  secondary CTAs, eyebrows; amber `#FAA435` for large fills.
- **Black (warm ink)** for type and the chunky outlines — `--kinva-ink-900` (#16110F), never pure
  cold black for body.
- **Cream / beige is the ground**, not white — `--kinva-cream-100` (#FAF7F0) pages,
  `#FDFBF6` cards, beige `#E8DCC4` dividers. This is what makes it feel friendly, not clinical.
- Red and orange **never sit edge-to-edge in equal amounts** — red leads, orange supports (~70/30).
- Imagery is **warm, bright, true-to-product** — clean catalog shots, no heavy filters, no B&W.

### Type
- **Display:** *Anton* — condensed, heavy, UPPERCASE. Channels the "KINVA" wordmark. Use for hero
  numbers, deal words, big punches. Sparingly.
- **Headings/UI:** *Archivo* (600–800) — sturdy, neutral-professional.
- **Body:** *Figtree* (400–600) — rounded-friendly, highly legible.
- **Chinese:** *Noto Sans SC*.
- **Mono:** *JetBrains Mono* for SKUs, codes, prices.
- Tight tracking on display; generous `0.16em` tracking on uppercase overlines/eyebrows.

### Spacing & layout
- **8px grid** (`--space-*`), 4px half-steps. Generous padding inside cards (24–32px).
- Containers cap at 1200–1320px. Header is 72px.
- Layouts are **gridded and orderly** — product grids, clear sections — to balance the loud color.

### Shape, borders & radii
- **Sturdy, friendly radii:** 12px inputs/cards, 18px product cards/panels, pill (999px) for chips & CTAs.
- Two border personalities:
  - **Subtle beige hairlines** (`--color-border-subtle`) for calm UI structure.
  - **Chunky ink outlines** (`--border-3`, 3px black) for the retail "sticker/cut-out" look on
    badges, price tags and promo blocks.

### Shadows
- Warm, low-spread, **never blue**: `--shadow-sm → --shadow-xl` on `rgba(36,29,25,…)`.
- A signature **solid-offset "sticker" shadow** (`--shadow-sticker`, `4px 4px 0 ink`) for
  flyer-style stamps, price tags and promo callouts. Use intentionally, not everywhere.

### Motion
- Quick and confident: `--dur-base` 200ms, `--ease-out` for most transitions.
- `--ease-pop` (slight overshoot) for adding-to-cart / badge stamps — playful but brief.
- No long, looping, decorative animation. Reduced-motion respected.

### States
- **Hover:** brand colors step one shade darker (`-600` tokens); cards lift one shadow level.
- **Press/active:** darker still (`-700`), shadow drops / translate +1px (the "sticker pressed in").
- **Focus:** 2px orange outline, 2px offset (`--color-focus-ring`).
- **Disabled:** `--kinva-ink-300` text, reduced opacity, no shadow.

### Backgrounds
- Default ground is **flat warm cream** — no gradients as a rule.
- Hero/promo blocks may use a **flat brand-red or ink panel** with cream/orange type.
- Optional subtle **paper/grain texture** is on-brand for promo headers; keep it faint.
- Full-bleed **product photography** for hero and category banners.
- Avoid: purple/blue gradients, glassmorphism, neon glows — all off-brand.

---

## ICONOGRAPHY

See the **Iconography** card in the Design System tab. Summary:

- **Icon set:** Kinva has no proprietary icon font. The system uses **[Lucide](https://lucide.dev)**
  (outline, 2px stroke, rounded caps) as the standard — its friendly-but-sturdy stroke matches the
  brand. Loaded from CDN; flagged as a substitution until a brand set exists.
- **Style rules:** outline (not filled) by default; 2px stroke; 24px default box; use brand red or
  ink for color, orange only for emphasis. Filled variants only for tiny inline indicators.
- **Brand glyph:** the eraser/notebook mark inside the badge is the one bespoke symbol — use the
  real logo asset (`assets/kinva-logo-badge.png`), never redraw it.
- **No emoji** in product/marketing UI. Unicode symbols (`×`, `&`, `/`, `→`) are fine inline.
- **Product imagery**, not icons, carries the catalog — real photos of pens, boxes, packs.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import-only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for download/Claude Code use.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`

**`assets/`** — `kinva-logo-badge.png`, `kinva-flyer-onestop.jpg`

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) + Iconography card.

**`components/`** — reusable React primitives (namespace `window.KinvaDesignSystem_573cf8`):
- `buttons/` — Button, IconButton
- `forms/` — Input, Select, Checkbox, QuantityStepper
- `data-display/` — Badge, Tag, Card, ProductCard, PriceTag
- `feedback/` — Alert
- `navigation/` — Tabs

**`ui_kits/`**
- `storefront/` — Kinva wholesale storefront (home, category, product, cart).

---

*Compiler namespace for components in card HTML:* `window.KinvaDesignSystem_573cf8`
