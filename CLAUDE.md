# CLAUDE.md — vivien-tuerk-portfolio

Public marketing website for **Vivien Türk**, freelance virtual assistant (Virtuelle Assistenz)
based in Ingelheim am Rhein, serving solo coaches, consultants and small businesses in the
Rhein-Main / DACH region.

This repo is **public and separate** from her private client-acquisition tool
(`ash-git010/assistant-dashboard`). Never import from, reference, or deploy alongside that repo.

---

## The job of this site

This is **not** a CV online. It is the landing page linked from cold outreach messages to
prospective clients. A visitor arrives from a message, spends 40 seconds, and decides whether to
reply. The site must answer: who is she, what can she take off my plate, is she credible, how do
I contact her.

Tone: warmer and more "hire me directly" than the source PDF, which was built für Bewerbung
(job applications). Same premium register, less formal register. Confident, calm, service-first.

Everything is in **German**. No language switcher, no English version.

---

## Non-negotiable content rules

Vivien reviewed the PDF and corrected these specifically. Do not reintroduce them.

1. **Minimize em dashes and dash-heavy sentence construction.** She reads it as AI-generated.
   Use commas, periods, or colons. This applies to every German string on the site.
2. **No Werdegang / work-history timeline.** Deliberately removed. Only Ausbildung and
   Weiterbildungen remain, and Ausbildung carries **no years**.
3. **Stat phrasing is fixed**: "Jahre Erfahrung in der Assistenz und Kundenkommunikation" and
   "verschiedene Arbeitsfelder". Never "Branchen".
4. **Role line must include Gästebetreuung** alongside Assistenz der Geschäftsführung,
   Customer Support, Recruiting, Office & Backoffice Management.
5. **Dropped permanently**: personal-branding language ("Sonnenschein", "positive vibes only")
   and specific travel/hobby detail (Lost Places, Chernobyl). Too informal for a client-facing page.
6. **Do not invent claims.** No fake client logos, no testimonials, no case studies, no
   "trusted by 50+ businesses". Every factual claim on this site must trace back to
   `src/content/site.ts`, which was extracted from her real portfolio.

All copy lives in `src/content/site.ts`. Components read from it. Never hardcode German strings
in a component, and never paraphrase a string that is already in the content file.

---

## Brand identity — carry over exactly, do not reinvent

This identity already exists across her PDF portfolio and her internal tool. The website matches it.

### Color

| Token | Hex | Use |
|---|---|---|
| `navy` | `#101E33` | primary dark surface |
| `navy-soft` | `#1A2B45` | raised navy surface, card fills on dark |
| `navy-deep` | `#0A1424` | deepest navy, hero base |
| `cream` | `#FBF8F3` | primary light surface |
| `cream-warm` | `#F3EDE3` | alternating light section |
| `gold` | `#C0A063` | accent, rules, eyebrows, hover states |
| `gold-light` | `#D8C395` | gold on dark backgrounds |
| `gold-soft` | `#EDE3D0` | tint fills, chip backgrounds |
| `ink` | `#182437` | headings on light |
| `body` | `#41505F` | body text on light |
| `muted` | `#8A93A0` | captions, labels, meta |
| `hairline` | `#DFD6C7` | 1px borders and dividers |

Sections alternate cream and navy. The hero is navy. Kontakt is navy. Über mich and
Qualifikationen are cream. Leistungen is cream-warm or navy, pick one and stay consistent.

### Type

- **Display: Cormorant Garamond.** Section titles and the hero name, at genuinely large sizes.
  Italic is used for the emphasis clause inside a headline, for example
  "Ich halte die Fäden zusammen, *damit andere frei arbeiten können.*"
- **Body and UI: Jost.** Paragraphs, labels, buttons, nav.
- Load both with `next/font/google`, subset `latin` and `latin-ext` (needed for ü, ä, ö).
  Set `display: 'swap'` and expose them as CSS variables.
- The name in the hero is set in Cormorant Garamond with wide letter-spacing, roughly `0.15em`,
  in small-caps-adjacent styling. Look at page 1 of the PDF.

### Visual language

- Flat and premium. **No gradients, no drop shadows, no glassmorphism, no border-radius above
  4px** except for the circular headshot and the arch frame.
- Dividers and borders are **1px gold hairlines**, never heavy rules.
- **Eyebrow labels**: uppercase, wide tracking around `0.28em`, small size around 11px, gold,
  sitting above every section heading. For example `ÜBER MICH`, `LEISTUNGEN`, `KONTAKT`.
- **Recurring divider motif**: a thin gold rule with a small rotated square (a diamond) centered
  in it. This is the signature element. Build it once as `<Divider />` and reuse it.
- **Portrait treatment**: arch-shaped frame in the hero (rounded top, square bottom, thin gold
  border with a small inset gap). Circular crop for the smaller headshot in Über mich.

### On the 01/02/03 numbering

The PDF numbers the six Leistungen and the three Arbeitsweise items. Neither is actually a
sequence, so the numbers are decorative rather than informational. Keep them, because brand
consistency with the PDF matters more here, but set them small, muted, and in Cormorant
Garamond oldstyle so they read as ornament rather than as steps to follow.

---

## Motion

Premium editorial, like a print magazine that happens to move. Restraint beats density.
Three tasteful animations beat fifteen distracting ones.

Use `motion` (the Framer Motion successor package). Client components only where needed, keep
the rest as server components.

Approved motion:

1. **Section reveal on scroll.** Opacity 0 to 1 plus a 16 to 24px upward translate, roughly
   0.6s, easing `[0.22, 1, 0.36, 1]`. Trigger once, at around 20% viewport intersection.
   Stagger children by 60 to 90ms. Never bounce, never spring overshoot, never scale-in.
2. **Gold rule draws itself.** The divider rule animates `scaleX` from 0 to 1 with
   `transformOrigin: center` as its section enters view. The diamond fades in after the rule lands.
3. **Card hover.** Service cards lift 2 to 3px and their gold hairline brightens from `#DFD6C7`
   to `#C0A063` over 250ms. No color inversion, no shadow bloom.
4. **Hero entrance.** A single orchestrated sequence on load: hairline frame draws in, then
   portrait fades up, then name, then role line, then tagline. Total under 1.6s. Calm, not busy.

Forbidden: parallax scroll-jacking, counters that tick up, typewriter effects, cursor followers,
marquees, page-transition wipes, anything that spins.

**Respect `prefers-reduced-motion: reduce`.** Under that query all reveals resolve to their final
state immediately and only opacity transitions remain. This is a hard requirement, not a nice-to-have.

---

## Structure

Single page, anchor-scrolled, with a slim sticky header that appears after the hero.

```
/                      hero, über mich, leistungen, qualifikationen, tools & sprachen, kontakt
/impressum             legally required, see below
/datenschutz           legally required, see below
```

Header: her name on the left in Cormorant, anchor links on the right in Jost, plus a gold-outlined
"Gespräch vereinbaren" button that scrolls to Kontakt. Transparent over the hero, then a
cream background with a bottom hairline once scrolled past it. Mobile: a simple full-screen
overlay menu, no hamburger animation gimmicks.

---

## Legal requirements for a German business site

Not optional and not a formality. Ash should confirm specifics with Vivien or a lawyer, but the
site must ship with both of these before it goes into outreach.

- **Impressum** (§ 5 DDG). Needs full name, ladungsfähige Anschrift, email, phone,
  and USt-IdNr. if she has one. Note that this makes her home address publicly indexed. Flag that
  to her explicitly before launch; it is already on the PDF, but a PDF is not crawled by Google.
- **Datenschutzerklärung** (GDPR / DSGVO). Must cover Vercel as host, server logs, Google Fonts,
  and the contact path.
- **Self-host the fonts.** `next/font/google` downloads fonts at build time and serves them from
  your own domain, so no visitor IP reaches Google. Confirm this stays true and never add a
  `<link>` to `fonts.googleapis.com`.
- **Contact**: ship v1 with `mailto:` and `tel:` links only. A form means processing personal data,
  which means a consent checkbox, a processor, and more privacy text. Add it later if she wants it.
- No analytics, no cookies, no consent banner in v1. Keep it that way unless she asks.

---

## Stack and conventions

- Next.js App Router, TypeScript, Tailwind. Check the installed major versions in `package.json`
  before writing config, Tailwind v4 configures theme in CSS via `@theme` while v3 uses
  `tailwind.config.ts`. Do not assume.
- `motion` for animation. `lucide-react` if icons are needed, used sparingly and thin-stroked.
- `src/` directory. Components in `src/components/`, content in `src/content/site.ts`,
  images in `public/`.
- Every section is its own component file. No 900-line `page.tsx`.
- `lang="de"` on `<html>`. Full metadata: title, description, `openGraph`, and an OG image.
- Images through `next/image` with explicit width and height. The portrait is above the fold,
  so it takes `priority`.

## Quality floor

Ship-blocking, verify each before saying a section is done:

- Responsive from 320px up. Test the hero and the six service cards at 375px specifically.
- Visible keyboard focus rings on every link and button, gold, 2px offset.
- Real semantic landmarks: `header`, `main`, `section` with `aria-labelledby`, `footer`.
- Contrast: `#8A93A0` muted text on cream passes for large text only. Do not use it for body copy.
- `npm run build` passes clean with no TypeScript errors before any commit.
- Lighthouse: aim for 95+ on Performance and 100 on Accessibility.

## Working agreement

- Investigate and report before fixing. When something looks wrong, diagnose and describe what
  you found, then wait for approval rather than immediately editing.
- Build and verify section by section. Do not generate all six sections in one pass.
- When you need review from outside this repo, paste full file contents rather than summarizing
  or referring to code as "above".

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
