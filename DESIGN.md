---
name: Prizma
description: AI consulting and build shop; enterprise software, shipped fast at a fixed price
colors:
  prizma-violet: "#7C3AED"
  prizma-blue: "#2563EB"
  prizma-green: "#059669"
  prizma-yellow: "#D97706"
  prizma-orange: "#EA580C"
  prizma-red: "#E11D48"
  prizma-violet-dark: "#A78BFA"
  prizma-blue-dark: "#60A5FA"
  prizma-green-dark: "#34D399"
  prizma-yellow-dark: "#FCD34D"
  prizma-orange-dark: "#FB923C"
  prizma-red-dark: "#FB7185"
  surface-bone: "#FFFFFF"
  surface-obsidian: "#000000"
  surface-obsidian-soft: "#0A0A0A"
  ink-noir: "#000000"
  ink-graphite: "#333333"
  ink-slate: "#444444"
  ink-fog: "#555555"
  ink-paper: "#F0F0F0"
  ink-cloud: "#CCCCCC"
  ink-mist: "#AAAAAA"
  ink-haze: "#999999"
  hairline-light: "#26262626"
  hairline-dark: "#FFFFFF26"
typography:
  display:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  hero:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  list-title:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body-emphasis:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  numeral:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "5rem"
    fontWeight: 700
    lineHeight: 1
  signature-display:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1
rounded:
  none: "0"
  button: "6px"
  pill: "9999px"
  dot: "50%"
spacing:
  field: "12px 16px"
  card: "32px"
  card-tight: "24px"
  section-y: "64px"
  section-y-lg: "80px"
  container-x: "24px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-noir}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink-noir}"
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-pill-active:
    backgroundColor: "{colors.prizma-violet}"
    textColor: "{colors.surface-bone}"
  card-surface:
    backgroundColor: "rgba(0,0,0,0.025)"
    textColor: "{colors.ink-noir}"
    rounded: "{rounded.none}"
    padding: "{spacing.card-tight}"
  input-field:
    backgroundColor: "{colors.surface-bone}"
    textColor: "{colors.ink-noir}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.field}"
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink-fog}"
    typography: "{typography.label}"
    padding: "0"
---

# Design System: Prizma

## 1. Overview

**Creative North Star: "The Refraction Lab"**

The Refraction Lab is the metaphor that shapes every surface. A prism is a precision instrument; white light goes in, a spectrum comes out the other side. The site is the lab, the firm is the operator, and the prismatic spectrum (violet, blue, green, yellow, orange, red) is the engineered output. Everything in the system either belongs to the lab (calibrated, dark, near-monochrome, surgical) or belongs to the spectrum (saturated, intentional, used as punctuation).

The default surface is dark obsidian, near-black with a hairline of warmth. Light theme exists and is real, but the brand reads as a darkroom by default: the site is loaded `dark` in `app/layout.tsx`, and the WebGL hero, the rotating prism, and the spectrum dividers all assume that as the canvas. Type is set in Figtree, a humanist sans tuned for confidence at large sizes and clarity at small ones, with Satoshi reserved as a signature serif moment on case-study titles. Components lean theatrical (cursor-following rainbow halos, liquid-glass buttons, a WebGL shader that re-renders on theme change), but their theatre is engineered, not ornamental. Every spectacle is calibrated.

What this system explicitly rejects: the Apple/Linear/Stripe minimalism reflex (whitespace-heavy product-marketing template, neutral grays, single-color accent, tasteful and indistinguishable from peers); and the generic AI-startup gradient slop (purple-pink-blue radial blobs, three identical feature cards, GPT-wrapper energy). The line to walk is keep the prism, lose the slop; keep the precision, lose the SaaS-minimalism reflex.

**Key Characteristics:**
- Dark-by-default canvas (`#000000` body in dark, near-white in light); both modes are first-class but dark carries the brand
- Six-stop prismatic spectrum used as section punctuation, never as background texture
- Figtree display + body, Satoshi reserved for signature case-study moments
- Flat-by-default surfaces; theatrical glass and glow appear in named places (LiquidButton, .prizma-card, hero shader, rotating prism) and nowhere else
- Tight 1024px center column (`max-w-5xl`) with generous vertical rhythm
- Section labels: tiny `0.75rem` uppercase tracked-out, preceded by a 6px round prism dot

## 2. Colors

A six-stop spectrum that always appears in the same order, on a near-monochrome canvas. The neutrals carry the page; the spectrum is the brand signature, deployed in punctuation amounts.

### Primary

- **Prizma Violet** (`#7C3AED` light / `#A78BFA` dark): the spectrum's first stop and the system's signature accent. Used on hover-color on nav links, the active state of pill buttons, focus borders on inputs, and as the leading color in spectrum gradients. When the system needs a single brand-coded interactive color, this is it.
- **Prizma Blue** (`#2563EB` light / `#60A5FA` dark): the spectrum's second stop. Carries cool authority. Used as a step-numeral color and as a card glow accent.
- **Prizma Green** (`#059669` light / `#34D399` dark): the spectrum's third stop. Used as the third step in process diagrams and as a card glow accent.

### Secondary

- **Prizma Yellow** (`#D97706` light / `#FCD34D` dark): the spectrum's fourth stop. Used as a card glow accent for "Web Design" and similar warm-coded sections.
- **Prizma Orange** (`#EA580C` light / `#FB923C` dark): the spectrum's fifth stop. Used as a card glow accent for AI-platform sections.
- **Prizma Red** (`#E11D48` light / `#FB7185` dark): the spectrum's sixth and final stop. Used as a card glow accent for Data Infrastructure sections.

### Tertiary

- **Spectrum Gradient** (`linear-gradient(90deg, #7C3AED, #2563EB, #059669, #D97706, #EA580C, #E11D48)`): the full six-stop sweep, always in order, never reordered, never partial. Used as 1px or 2px hairline dividers between sections, as a 56px-wide stub under page-level H1s, and as a halo radiating from buttons on cursor proximity. A "vivid" variant for button halos uses heavier hex (`#7B00D4, #1177EE, #22CC22, #FFD700, #FF7700, #EE1111`) to read through the blur.

### Neutral

- **Obsidian** (`#000000`): dark-theme body background. The site's natural canvas.
- **Obsidian Soft** (`#0A0A0A`): dark-theme nav surface and input fill. Used where pure obsidian would create a "floating in a void" effect against subsequent content.
- **Bone** (`#FFFFFF`): light-theme body and nav background.
- **Ink Noir** (`#000000`): light-theme primary text and headlines.
- **Ink Graphite** (`#333333`) and **Ink Slate** (`#444444`): light-theme secondary and tertiary body text.
- **Ink Fog** (`#555555`): light-theme label and meta text.
- **Ink Paper** (`#F0F0F0`): dark-theme primary text. (Deliberately one notch off pure white to soften the contrast.)
- **Ink Cloud** (`#CCCCCC`), **Ink Mist** (`#AAAAAA`), **Ink Haze** (`#999999`): dark-theme secondary, tertiary, and label text, descending in prominence.

### Named Rules

**The Prism Order Rule.** The six spectrum stops always appear in spectral order: violet → blue → green → yellow → orange → red. They are never reshuffled, never reversed, never partially shown except when the spectrum is used as a deliberate fragment (a single-stop accent, a single-stop focus ring). A reordered spectrum stops being the Prizma prism and becomes a generic gradient.

**The Punctuation Rule.** The spectrum gradient is punctuation, not paragraphs. Use it for hairlines between sections, 56px H1 stubs, button halos, and the hero. Do not tile it as a background. Do not stretch it as a hero fill. If you find yourself filling more than ~5% of a viewport with full spectrum, you are using it as decoration.

**The Tinted Neutrals Rule.** Neutrals on this site are pure grayscale, not hue-tinted, because the spectrum carries all the chromatic load. Resist the urge to warm the neutrals toward violet; the contrast between cold-flat neutrals and saturated spectrum is the brand's tension.

## 3. Typography

**Display Font:** Satoshi (with `system-ui, sans-serif` fallback). A precise geometric-humanist sans by Indian Type Foundry, loaded from Fontshare at weights 400, 500, 700, 900. Carries the page's loudest typographic moments at 900 weight: the hero headline, the closing CTA, and the list-pattern row titles. Satoshi sets a heavier, more authoritative tone than Figtree at the same size; the weight is the brand's confidence made visible.
**Body Font:** Figtree (with `system-ui, sans-serif` fallback). A modern humanist sans loaded via `next/font/google` at weights 400, 600, 700, 800, 900. Carries every non-display moment: subroute H1s, card titles, body prose, labels, FAQ titles. Reads clean at small sizes, capable at section-heading scale.

**Character:** A two-voice system. Satoshi 900 is the *declarative* voice (the page's manifesto moments); Figtree is the *operational* voice (the page's structural work). Both are humanist sans, so the system stays cohesive; the contrast is in proportion and weight, not in serif-vs-sans drama. The weight jump between Figtree body (400) and Figtree titles (700) is large on purpose; Satoshi at 900 sits above both, reserved for moments that need to land hardest.

### Hierarchy

- **Display** (Satoshi 900, `clamp(3rem, 9vw, 7.5rem)`, line-height 0.95, letter-spacing `-0.02em`): page-closing CTAs only. "Ready to move faster?" on `/` and "Want us to build something like this for you?" on `/built`. One per page, never more.
- **Hero** (Satoshi 900, `clamp(3rem, 8vw, 6.5rem)`, line-height 0.95, letter-spacing `-0.015em`): the home hero headline. "Enterprise Software. Without the wait." Set with a deliberate line break at the period.
- **List Title** (Satoshi 900, `clamp(1.875rem, 4vw, 2.25rem)`, line-height 1.05, letter-spacing `-0.01em`): list-pattern row titles. "Web Design", "AI Platforms", "Data Infrastructure" in the *What we build* section. The Satoshi weight is what distinguishes the list pattern from the card pattern.
- **Headline** (Figtree 700, `3rem` / `text-5xl`, line-height 1.1, letter-spacing `-0.01em`): page-level H1 on subroutes. "What we've built", "Let's figure out what's possible."
- **Title** (Figtree 700, `1.125rem`-`1.25rem`, line-height 1.3): card and FAQ titles.
- **Body Emphasis** (400, `1.125rem`, line-height 1.6): the lift paragraph beneath an H1 on subroutes. About-section pull-quote on `/`.
- **Body** (400, `1rem`, line-height 1.6): default running prose. Capped at ~`max-w-2xl` / ~65-75ch where it appears.
- **Label** (700, `0.75rem`, letter-spacing `0.1em`, uppercase): section labels, form labels, scroll indicator copy. Always paired with a 6px prism dot when used as a section header.
- **Numeral** (700, `5rem`, line-height 1, opacity 0.6): big step indicators ("01", "02", "03") in the How it works section. Colored from a spectrum stop, not from ink.
- **Signature Display** (Satoshi 900, `2.25rem`, line-height 1): case-study titles on `/built`. Colored from the case-study's accent, not from ink. Currently used for "SiteIQ" in `#00d4ff`.

### Named Rules

**The Two-Voice Rule.** Satoshi 900 owns the page's loudest typographic moments: the hero headline, the page-closing CTA, the list-pattern row titles. Figtree carries every other heading, label, and body. There is no third typeface, no Satoshi at body sizes, no Figtree at hero or display sizes. The contrast between the two voices is the brand's typographic signature.

**The Big-or-Small Rule.** Type lives at the extremes: declarative-large (Satoshi 900 at hero/display scale, or Figtree 700 at headline/title scale) and label-small (Figtree 700, tracked wide). The mid-range (subheads, semibold paragraphs, decorative pull-quotes) is mostly absent. New screens should respect this barbell shape.

## 4. Elevation

The system is flat-by-default with engineered glass moments. The page surface itself is flat: nav has no shadow, footer has no shadow, dividers do the work of separation. Three specific surfaces carry layered material on purpose: the WebGL hero shader (a full-bleed canvas), the `.prizma-card` (translucent surface with `backdrop-filter: blur(8px)`), and the LiquidButton (a layered inset-shadow stack plus an SVG turbulence-displacement glass filter). Shadows appear in two contexts: (1) the engineered glass moments above, baked in at rest; (2) state response, where hovering a card lifts it 6px and blooms a colored glow keyed to the card's accent.

### Shadow Vocabulary

- **Card Resting** (`inset 0 0 0 1px rgba(255,255,255,0.07)` in dark, none in light): a hairline interior bevel that gives translucent cards an edge in dark mode without becoming a visible border.
- **Card Hover Bloom** (`0 12px 40px var(--card-glow, rgba(0,0,0,0.08))` in light, `inset 0 0 0 1px rgba(255,255,255,0.12), 0 12px 40px var(--card-glow, rgba(255,255,255,0.04))` in dark): the card lifts 6px on Y and emits a colored glow keyed to its accent (passed in as `--card-glow` per card). This is the system's primary "you're hovering on something live" signal.
- **LiquidButton Inset Stack** (multi-layer; see `liquid-glass-button.tsx` for the full value): an array of small dark insets that create the impression of an actual glass lens. Permanent, not state-dependent.
- **LiquidButton Cursor Halo** (`.prizma-btn::before` and `.prizma-btn::after`; opacity 0 → 1 over 0.16s): the rainbow spectrum spotlight that materializes around the button on hover, masked to follow the cursor position via `--mx` / `--my` CSS variables.

### Named Rules

**The Flat-Page Rule.** Surfaces at the page level (header, footer, section backgrounds) carry no shadow. Depth comes from the spectrum dividers and from typographic contrast, not from drop-shadow.

**The Glass-In-Three-Places Rule.** Glass material (`backdrop-filter: blur`, layered insets, displacement filters) lives in exactly three places: the WebGL hero, the .prizma-card, and the LiquidButton. Do not add glass to a fourth surface without a deliberate reason. The skill's general warning against glassmorphism-as-default still applies; Prizma's glass is named, scoped, and engineered, not decorative.

**The Bloom-Keyed-To-Accent Rule.** When a card hovers and blooms, the glow color matches the card's spectrum-stop accent. Generic shadow on hover is forbidden; the bloom is the brand surfacing through the interaction.

## 5. Components

### Buttons

The system has three button styles, in descending theatricality.

- **LiquidButton** (the hero CTA, "Tell us what you need" / "Get in touch" / "Let's talk."). The signature interactive element. Shape: `rounded-md` (6px). Material: an SVG turbulence-displacement filter (`#container-glass`) renders a literal glass lens; a layered inset shadow stack gives it edge highlight and shadow; a transparent fill lets the page show through. Hover: a subtle `hover:scale-105`. The button has six size steps (`default` h-9 / `sm` h-8 / `lg` h-10 / `xl` h-12 / `xxl` h-14 / `icon` 36px); marketing CTAs use `lg`, hero CTAs use `lg`, the page-level closer uses `lg`. Text is black in light, white in dark, always font-bold.

- **Prizma Button** (`.prizma-btn` on `/built` "Get in touch"). A standard pill, `rounded-full`, white fill with `border: 1px solid rgba(0,0,0,0.1)`, padding `px-8 py-3`. The trick is in the pseudo-elements: at rest, invisible. On cursor proximity, two layered pseudo-elements materialize: `::after` is a crisp 2px rainbow ring sitting flush against the button edge, `::before` is a wider blurred rainbow plane radiating outward. Both are masked to a spotlight at the cursor (`--mx`, `--my`, written by the `PrizmaBtnGlow` global mousemove listener). The opacity transition is 0.16s. The page must mount `<PrizmaBtnGlow />` once in the layout for this to work.

- **Pill Button** (Topic chips on `/contact`). `rounded-full`, `min-height: 44px`, `px-5`, `text-sm font-bold`. At rest: transparent fill, ink text, `border: 1px solid rgba(0,0,0,0.2)` (dark: `rgba(255,255,255,0.2)`). Hover: border shifts to Prizma Violet. Active (`aria-pressed`): fills with Prizma Violet, text inverts to white. Use anywhere a user needs to pick one from a small named set.

### Cards

- **Shape:** zero border-radius. Crisp, square corners; this is part of the system's surgical quality.
- **Background:** translucent. Light: `rgba(0,0,0,0.025)`. Dark: `rgba(255,255,255,0.045)`.
- **Material:** `backdrop-filter: blur(8px)` (with `-webkit-` prefix). Cards are glass, not paint.
- **Border:** dark mode carries an `inset 0 0 0 1px rgba(255,255,255,0.07)` hairline; light mode has none. Both modes get a thicker hairline (`0.12` alpha) on hover.
- **Internal Padding:** `p-6` (24px) for grid cards, `p-8` (32px) for hero feature cards on `/built`.
- **Hover:** the card lifts 6px on the Y axis (`transform: translate3d(0, -6px, 0)`) and blooms a colored glow keyed to its accent. Transition is `0.22s cubic-bezier(0.4, 0, 0.2, 1)` on both transform and box-shadow.
- **Accent Encoding:** each card receives a spectrum-stop color as a custom property (`--card-glow`) that drives the hover bloom. The accent is encoded as a CSS variable, not as a visible decoration on the card surface itself. See the Don'ts.

### Inputs / Fields

- **Style:** zero border-radius (matches cards). Border `1px solid rgba(0,0,0,0.15)` light, `rgba(255,255,255,0.15)` dark. Background: white in light, `#0A0A0A` in dark.
- **Padding:** `px-4 py-3`.
- **Typography:** body (16px, weight 400). Placeholder is the same ink color at `0.25` alpha.
- **Focus:** border shifts to Prizma Violet (`#7C3AED` light / `#A78BFA` dark). No focus ring, no glow; the border color change is the entire focus signal. `outline: none`. Pair with the form label above (label is uppercase `0.75rem` tracked `0.1em`).
- **Textarea:** identical treatment, `resize: none`.

### Navigation

- **Shape:** fixed top, full-width, `h-24` (96px tall). Background is solid (`#ffffff` light, `#0a0a0a` dark) with a `300ms` color transition for theme swap. Below the nav, a 1px spectrum hairline at 50% opacity separates from page content.
- **Inner Layout:** `max-w-5xl mx-auto px-6`, justify-between. Left: Prizma wordmark logo at 76×114px, light/dark variant swap. Right: three text links ("About", "Work") at `text-base font-bold` in `text-black/50 dark:text-white/50`, hover shifts to Prizma Violet; a LiquidButton "Contact"; the theme toggle.
- **Mobile:** the current implementation does not collapse to a hamburger; the link cluster wraps if needed. A redesign should preserve the 96px height and the spectrum hairline.

### Footer

- **Shape:** flat, full-width. A 2px spectrum hairline at full opacity sits at the top (heavier than the nav hairline, marking the page end).
- **Inner Layout:** `max-w-5xl mx-auto px-6 py-8`, justify-between. Left: Prizma wordmark at 48×72px. Right: three text links + LinkedIn icon + copyright, all in `text-black/40 dark:text-white/40` at `text-sm font-medium`.

### Section Labels

- **Shape:** a 6px round dot filled with the full spectrum gradient, followed by a label-style typography token (uppercase, `0.75rem`, weight 700, tracking `0.1em`, color `#555555` light / `#999999` dark).
- **Usage:** every section on the home page leads with one of these. They are the section's name in the system's voice. Always paired with the prism dot; never the label alone.

### Section Dividers

- **Shape:** a 1px-tall full-width spectrum gradient bar. Variant: 2px on the footer, 50% opacity under the nav, 0.35 opacity between section-internal subdivisions.
- **Usage:** between every page section on long pages. On subroutes, a 56px-wide 2px spectrum stub appears as a hairline punctuation mark under the page H1 (instead of the full-width bar). The stub is `border-radius: 1px`.

### Signature Components

- **WebGLShader** (`components/ui/web-gl-shader.tsx`). A full-bleed fixed canvas behind the hero, rendering an animated shader with three-axis chromatic separation (R, G, B sampled at slightly different `xScale` values to create dispersive bands). Reads the document's `dark` class via MutationObserver and recomputes the `isDark` uniform to invert the color math. Holds at z-index -10.
- **RotatingPrism** (`components/RotatingPrism.tsx`). A 500×500 SVG triangle, gradient-filled with prism stops at 0/33/66/100%, opacity 0.08, rotating once every 28 seconds. Used as a subtle background in the About section. Decorative; `aria-hidden`.
- **PrizmaBtnGlow** (`components/PrizmaBtnGlow.tsx`). A zero-render mount-once component that attaches a global `mousemove` listener and writes `--mx` / `--my` to any `.prizma-btn` under the cursor. Required for the prizma-btn glow to function. Sits in `app/layout.tsx`.

## 6. Do's and Don'ts

### Do

- **Do** lead every section with a 6px prism-dot + uppercase tracked label (`0.75rem`, weight 700, tracking `0.1em`). Section labels are how the page navigates itself.
- **Do** separate page sections with a 1px full-width spectrum hairline. Between minor subdivisions, drop opacity to ~0.35.
- **Do** keep the six spectrum stops in order: violet → blue → green → yellow → orange → red. Always.
- **Do** keep cards translucent and zero-radius. The glass surface plus the hover bloom is the brand; rounded gray cards are a different system.
- **Do** encode card accents as a `--card-glow` custom property that drives the hover bloom, not as a visible stripe on the card surface.
- **Do** use Figtree for everything except case-study titles on `/built`, which use Satoshi.
- **Do** treat the LiquidButton as the hero CTA in every flow that ends in a contact form. The prizma-btn cursor halo is the secondary, lower-stakes invitation.
- **Do** mount `<PrizmaBtnGlow />` exactly once at the layout root. The cursor-halo system depends on a global mousemove listener.
- **Do** respect `prefers-reduced-motion`. Replace the WebGL shader with a still gradient, freeze the rotating prism, and disable the FadeIn IntersectionObserver staggers when the user prefers reduced motion.

### Don't

- **Don't** look like Apple, Linear, or Stripe minimalism. PRODUCT.md names this anti-reference directly: whitespace-heavy product-marketing template, neutral grays, single-color accent, tasteful but indistinguishable from peers. If a Prizma page could be reskinned to be Linear with a hue swap, the page has drifted.
- **Don't** look like generic AI-startup gradient slop. PRODUCT.md names this anti-reference directly: purple-pink-blue radial blobs, three identical icon-heading-paragraph feature cards, GPT-wrapper energy. The Prizma prism is a six-stop spectrum, not a two-stop radial.
- **Don't** use `border-left` (or `border-right`) greater than 1px as a colored accent stripe on cards, FAQ items, callouts, or list items. The skill's general bans include this and Prizma respects it. The current `.prizma-card` and FAQ pattern that uses `borderLeft: 2px solid <accent>` is inherited and should be migrated toward accent-via-glow encoding (the `--card-glow` pattern) or a leading numeral / icon. New cards must not add side stripes.
- **Don't** use gradient text (`background-clip: text` over a spectrum). Decorative, never meaningful. The spectrum belongs in dividers, halos, and dot punctuation, not in headlines.
- **Don't** tile or stretch the spectrum as a background fill. It is punctuation, not paragraph. If a hero needs background motion, the WebGL shader is the answer, not a giant gradient panel.
- **Don't** reshuffle the spectrum order. Violet → blue → green → yellow → orange → red, in that order, always. A reordered spectrum is a generic gradient.
- **Don't** add glass material (`backdrop-filter: blur`, layered insets) to a fourth surface. Glass lives in three places (WebGL hero, .prizma-card, LiquidButton). Glassmorphism-as-default is the slop signal the skill warns against.
- **Don't** round card corners. The crisp-edge card on a flat page is part of the surgical character.
- **Don't** introduce a third typeface. Satoshi 900 owns hero / display / list-title; Figtree owns everything else. The two-voice contrast is the signature; a third family dilutes it.
- **Don't** put the hero CTA below the fold. The LiquidButton invites the conversation; users should see the call to act inside the first viewport.
- **Don't** ship a hero animation with no `prefers-reduced-motion` fallback. The WebGL shader, the rotating prism, the FadeIn stagger, and the scroll-bounce indicator all currently animate unconditionally; harden any new motion before it reaches main.
