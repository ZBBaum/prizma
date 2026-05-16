# Product

## Register

brand

## Users

Two audiences Prizma must speak to in the same breath, without choosing sides:

1. **Enterprise decision-makers.** CTOs, heads of digital, IT directors, and innovation leads at established companies evaluating AI platforms. They are vetting whether Prizma can be trusted with a real budget and a real system. They read carefully, check claims, and care about delivery risk.
2. **Growing-company founders and ops leaders.** Founders, COOs, ops leads at scaling startups who need a working tool or platform fast and would otherwise hire a freelance dev or assemble it in-house. They are price-sensitive, speed-obsessed, and allergic to consultancy theater.

The site lives in the overlap: enterprise gravitas alongside startup speed, both audible at once.

## Product Purpose

Prizma is an AI consultancy and build shop. The site is the credibility funnel that converts strangers into qualified contact-form submissions for fixed-price AI platform builds.

Buyers do not commit on first visit. The cycle is longer for both audiences (enterprise procurement, founder due diligence), so the site has to prove competence before it asks. Work shown, process explained, ethos stated, then the CTA lands. The contact form is a release valve, not the headline mechanism.

Success looks like: a visitor who lands on `/`, leaves believing Prizma can credibly ship enterprise-grade AI in days, and returns later to send a serious inquiry through `/contact`.

## Brand Personality

**Premium, surgical, distinctive,** with quiet confidence underneath.

The firm moves fast and ships hard, but the site should express that through precision, not noise. Premium reads as "engineered, not decorated." Surgical reads as "every word and color landed on purpose." Distinctive reads as "the prism belongs only to Prizma."

The spectrum (violet, blue, green, yellow, orange, red) is the brand. It should appear, but it should feel earned, like punctuation in a paragraph. A site that uses the spectrum in every section becomes the thing it is trying not to be.

Voice: direct, technical when it counts, never hype-stacked. No "revolutionary," no "unleash," no "transform your business." The substance does the lifting.

## Anti-references

What Prizma must not be mistaken for:

- **Apple, Linear, Stripe minimalism.** Whitespace-heavy product-marketing template, neutral grays, single-color accent, "tasteful" SaaS gravity. Tasteful but indistinguishable from a thousand peers. Prizma is not a SaaS product; it is a firm with a point of view, and the page should look like one.
- **Generic AI startup gradient slop.** Purple-pink-blue radial blobs, hero with three identical feature cards (icon, heading, paragraph), GPT-wrapper energy, "AI for X" tagline. The site must read as a firm that ships real systems, not a landing page slapped on a thin demo.

The line to walk: keep the prism, lose the slop. Keep the precision, lose the SaaS-minimalism reflex.

## Design Principles

1. **Substance before spectacle.** Every expressive moment (shader, rotating prism, full-spectrum divider, glow halo) earns its place by carrying meaning, marking a section change, or rewarding attention. Decoration without purpose is the slop signal.
2. **Speak to both rooms at once.** Copy and design must feel credible to an enterprise CTO and to a founder evaluating speed in the same paragraph. Default to specifics (1-week builds, fixed price, named work) over adjectives. Never tilt fully serious or fully scrappy.
3. **Prove, then pitch.** Sections sequence as evidence: what we do, how it works, what we have built, who we are, then the CTA. The contact button should feel inevitable by the time it appears, not pleading throughout.
4. **The prism is punctuation.** The full spectrum is the strongest brand asset Prizma owns and the easiest to overuse. Treat full-spectrum moments (dividers, halos, hero shader) as section markers, not background texture. A single prism moment per section is usually one too many.
5. **Premium reads as precision.** When choosing between a beautiful detail and a precise one (alignment, motion timing, type weight contrast, focus state), choose precise. Surgical confidence comes from craft visible in the seams, not from ornament added on top.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA**, with `prefers-reduced-motion` as the top priority constraint above standard AA care.

The site leans heavily on motion: the WebGL shader hero, the rotating prism in the About section, the heroReveal blur-in, the scroll indicator bounce, the button glow halo following the cursor. All of these must have a stationary or radically calmed fallback when the user prefers reduced motion. The shader hero in particular should resolve to a still composition (a single rendered frame or a static gradient with the prism logo) rather than disappearing or going blank.

Beyond motion:

- Maintain AA contrast on body text in both light and dark themes. Light-theme uses near-white background and near-black text; dark-theme uses near-black background and near-white text. The mid-gray secondary text (`#444` light, `#aaa`-`#bbb` dark) sits close to the AA threshold and should be checked on any change.
- Keyboard focus must be visible on the LiquidButton and on all in-page links, including the prismatic CTAs.
- Decorative SVGs (scroll indicator, logos used as visuals) carry `aria-hidden`. Logos used as primary navigation links carry a real accessible name.
- The rotating prism canvas and the WebGL shader carry `aria-hidden` because their information value to a screen reader is zero; surrounding section content does the narrating.
