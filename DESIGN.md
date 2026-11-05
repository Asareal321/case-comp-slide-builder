---
name: eightytwenty
description: A free Claude skill for judge-ready case competition slides, presented as a case comp deck.
colors:
  midnight-navy: "#070d1f"
  midnight-navy-raised: "#0e1733"
  signal-blue: "#3a63f5"
  signal-blue-ink: "#2f56d9"
  signal-blue-bright: "#8ea8ff"
  highlighter-gold: "#ffb23f"
  slide-paper: "#fbfaf6"
  surface: "#ffffff"
  ink: "#0b1020"
  muted: "#555b6c"
  hairline: "#e2e0d8"
  well: "#eeece5"
  on-navy: "#ffffff"
  on-navy-muted: "rgba(255,255,255,0.72)"
typography:
  display:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 7.2)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 2.9)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  tagline:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 1.65)"
    fontWeight: 300
    lineHeight: 1.3
  lede:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 1.6)"
    fontWeight: 300
    lineHeight: 1.45
  title:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 1.6)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 1.4)"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Helvetica Neue, TeX Gyre Heros, Helvetica, Arial, sans-serif"
    fontSize: "calc(var(--u) * 1.05)"
    fontWeight: 600
    letterSpacing: "0.02em"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "calc(var(--u) * 1.05)"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  flag: "4px"
  slide: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  bubble: "14px"
spacing:
  unit-deck: "1cqw"
  unit-tablet: "10.5px"
  unit-phone: "10px"
  slide-pad-deck: "4.2cqw 4.6cqw 2.6cqw"
  slide-pad-phone: "40px 20px 28px"
  head-to-rule: "calc(var(--u) * 1.6)"
  rule-to-body: "calc(var(--u) * 2.4)"
  column-gap: "calc(var(--u) * 3.5)"
  bar: "56px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.9em 1.5em"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-ink}"
    textColor: "{colors.on-navy}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.md}"
    padding: "0.9em 1.5em"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.9em 1.5em"
  button-small:
    rounded: "{rounded.sm}"
    padding: "0.7em 1.1em"
  verify-flag:
    backgroundColor: "{colors.highlighter-gold}"
    textColor: "{colors.midnight-navy}"
    typography: "{typography.mono}"
    rounded: "{rounded.flag}"
    padding: "0.3em 0.45em"
  input-on-navy:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.md}"
    padding: "0.85em 1em"
  tabs-track:
    backgroundColor: "{colors.well}"
    rounded: "{rounded.md}"
    padding: "4px"
  tab-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "0.75em 1.1em"
  prompt-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "calc(var(--u) * 1.5) calc(var(--u) * 1.8)"
  command-block:
    backgroundColor: "{colors.midnight-navy}"
    textColor: "#cfd8ff"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
  topbar:
    backgroundColor: "{colors.midnight-navy}"
    textColor: "{colors.on-navy}"
    height: "{spacing.bar}"
    padding: "0 24px"
---

# Design System: eightytwenty

## Overview

**Creative North Star: "The Midnight Boardroom"**

The site is a case competition deck, presented in a darkened room. The room is Midnight Navy; the slides are lit paper, 16:9, hanging in it. On a laptop the page behaves like a deck: one slide per screen, scroll-snapped, with a fixed top bar holding the wordmark, a clickable section tracker and a slide counter ("01 / 08"). On a phone the deck unfolds into an ordinary scrolling page, with the same slides stacked edge to edge. The opening and closing slides are navy-on-navy (Midnight Navy Raised), so the deck starts and ends with the lights low.

The system's signature is slide anatomy, borrowed from the slides eightytwenty itself builds: a short heavy title, a light claim tagline beneath it that states the slide's one point, the logo top right, a hairline rule, a body, and a footnote row with the slide number. Everything inside a slide is sized from a single unit, so a slide is a scaled object rather than a responsive page. Density is a consulting slide's: tables, numbered points, exhibits and footnotes, with text in the muted ink and only titles and data in full ink.

Components are confident and tactile: solid fills, real borders, and soft shadows that drop downward, never colored glows. The deck deliberately refuses the stock AI-tool landing page: no kickers above headings, no gradient text, no icon-tile card rows, no stats strip, no emoji icons.

**Key Characteristics:**
- Midnight Navy room, paper 16:9 slides lit inside it; the paper stays paper in every color scheme.
- One sizing unit per slide (1% of slide width in deck mode, a fixed step on phones).
- Slide anatomy on every content slide: title, claim tagline, logo top right, hairline rule, footnote row with number.
- Signal Blue does the work (actions, the tracker, numerals); Highlighter Gold marks only what needs checking.
- Helvetica set heavy and tight for titles, light for claims; monospace only for literal text.

## Colors

A near-black navy room, warm off-white paper, one working blue and one highlighter.

### Primary
- **Signal Blue** (signal-blue): the fill for every primary action (Download, Install, Join the list) and the first step's top rule on the install slide. Deepened so white button text clears contrast.
- **Signal Blue Ink** (signal-blue-ink): the same blue one step darker, used where blue is text or a thin line on paper: the numerals in executive-summary points and install steps, the "Your call" labels, the focus ring on paper, and the primary button's hover fill.
- **Signal Blue Bright** (signal-blue-bright): blue for use on navy only: the active tracker underline and the speaker label in the Claude chat bubble.

### Tertiary
- **Highlighter Gold** (highlighter-gold): the `[verify]` flag, text selection, and tiny markers such as the plan-requirement alert icon. On navy surfaces it is also the keyboard focus ring, because Signal Blue Ink disappears against the room.

### Neutral
- **Midnight Navy** (midnight-navy): the room. Page background, top bar, command block, the final "Polish" phase bar, and the ink on gold.
- **Midnight Navy Raised** (midnight-navy-raised): the title and closing slides and the Claude chat bubble; a lit navy object one step up from the room, edged with a 12% white hairline in deck mode.
- **Slide Paper** (slide-paper): the face of every content slide.
- **Surface** (surface): pure white for objects sitting on paper: prompt cards, the selected tab, the quiet button, the sample-slide exhibit.
- **Ink** (ink): titles, table first columns, data, slide numbers.
- **Muted** (muted): taglines, body copy, footnotes, table headers.
- **Hairline** (hairline): the rule under every slide head, footnote borders, table and step dividers, card borders.
- **Well** (well): recessed fills on paper: the tab track, inline code, the "You" chat bubble, the first three phase bars.
- **On Navy / On Navy Muted** (on-navy, on-navy-muted): text on navy surfaces, full white for titles and figures, 72% white for supporting copy. Lower whites carry structure on navy: 62% for idle tracker links and the counter, 28% for ghost-button and input borders, 12-14% for hairlines and card edges, 8% for hover washes.

### Named Rules
**The Highlighter Rule.** Highlighter Gold marks what still needs checking: the `[verify]` flag, selected text, tiny markers, and focus on navy. It is never a fill for a button, card, heading or background.

**The Lit Slide Rule.** Paper slides stay paper. The room is navy; slides are lit objects in it. There is no dark-mode inversion of slide faces (the page declares a light color scheme), and navy slides use Midnight Navy Raised, never the room color.

**The Blue Does Work Rule.** Signal Blue appears only where something can be pressed or where it counts: actions, the tracker, step and point numerals. Decorative blue is off the table.

## Typography

**Display Font:** Helvetica Neue (with TeX Gyre Heros, then Helvetica, Arial)
**Body Font:** the same stack
**Label/Mono Font:** ui-monospace, SF Mono, Menlo, monospace

**Character:** One grotesque in two voices: heavy and tightly tracked for titles, light for claims and ledes, the way consulting decks set Helvetica. TeX Gyre Heros is self-hosted (GUST Font License, `fonts/`) because it shares Helvetica's metrics, so non-Apple devices get the intended shapes instead of falling to Arial. TeX Gyre Heros ships no light cut: on non-Apple devices the 300-weight taglines and ledes render at regular weight. This is an accepted limitation, not a bug to fix with a different face. All figures use tabular numerals.

### Hierarchy
- **Display** (700, 7.2u, line-height 0.96, -0.04em): the title-slide headline only. On phones it becomes clamp(42px, 12vw, 60px).
- **Headline** (700, 2.9u, 1.05, -0.03em): slide titles. Short, two to four words ("Executive Summary", "Install"). 30px on phones. The closing slide's column heads run at 2.8u.
- **Tagline** (300, 1.65u, 1.3, max 46em, muted): the claim under every slide title, a full sentence with no terminal period. 17px on phones.
- **Lede** (300, 1.6u, 1.45, max 30em, on-navy-muted): the title slide's explanation and closing-slide paragraphs.
- **Title** (700, 1.6u, 1.25, -0.01em): point heads, step names, install-note heads; Q&A questions run larger at 1.85u.
- **Body** (400, 1.3u to 1.6u by density, line-height 1.45 to 1.5, muted): point copy, table cells, step copy, Q&A answers. Denser slides sit at the low end.
- **Label** (600, 1.05u, 0.02em): table headers, footnotes, figure captions, chat speaker names, "Your call" labels. Sentence case, never uppercase.
- **Mono** (1.05u, 1.5): the install command, inline code, and the `[verify]` flag (600, 0.78em).

### Named Rules
**The Heavy Title, Light Claim Rule.** Every slide pairs a short 700-weight title with a 300-weight claim tagline. The title names the slide; the tagline says what it proves.

**The Mono Means Literal Rule.** Monospace appears only for text the reader types, copies or must verify: code, the install command, the `[verify]` flag. Never for labels or decoration.

## Layout

**Deck mode** (viewport at least 1024px wide and 620px tall): the document scroll-snaps one slide per screen (`scroll-snap-stop: always`). Each slide is a 16:9 container sized to the largest box that fits below the 56px top bar with breathing room (`min(100%, (100svh - bar - 40px) * 16/9)`), centered on the navy room. The slide is a size container, and the unit `--u` is 1cqw, so every font size, gap and padding inside it scales with the slide width. Slide padding is 4.2cqw top, 4.6cqw sides, 2.6cqw bottom.

**Page mode** (anything smaller or shorter): slides stack as full-width blocks with 1px hairlines between them, the top bar keeps its height, the tracker and counter hide, and an Install button takes the bar's right side. `--u` becomes a fixed 10.5px; at 860px and below it drops to 10px, slide padding becomes 40px 20px 28px, every multi-column grid collapses to one column, the scorecard table becomes stacked rows, the phase arrows become rounded bars, and the head logo hides. At 420px and below, form and hero buttons go full width.

**Slide rhythm:** head, then 1.6u to the hairline rule, then 2.4u to the body; the footnote row sits 2u below the body with 1u above its text. Two-column slides use asymmetric splits (title 1.4fr / 1fr, summary 1fr / 1.25fr, try-it 1fr / 1.1fr, closing 1fr / 1fr) with 3.5u to 6u gutters. Step and Q&A rows use equal columns divided by top hairlines rather than boxes.

### Named Rules
**The One Unit Rule.** Every size inside a slide is a multiple of `--u`. Pixel values inside a slide exist only as phone overrides.

**The Slide Anatomy Rule.** Every content slide carries, in order: title and claim tagline at left, logo top right (black on paper, white on navy), a hairline rule, the body, and a footnote row with a source or caveat at left and the two-digit slide number at right in 600-weight ink. The title slide replaces the head with the display headline and keeps the footnote row as metadata ("Prepared for: your judging panel").

## Elevation & Depth

Depth is lighting, not layering. The room is flat navy; slides are lifted from it by a long, soft, downward shadow that reads as light falling on paper. Objects on a slide are mostly flat and separated by hairlines and fills; only the sample-slide exhibit, the selected tab and the primary button carry their own shadow. Shadows are always neutral (navy or black), soft-edged and offset downward. No colored glows.

### Shadow Vocabulary
- **Slide lift** (`box-shadow: 0 40px 80px -40px rgba(0,0,0,.8)`): every slide in deck mode.
- **Raised slide edge** (`box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 40px 80px -40px rgba(0,0,0,.8)`): navy slides in deck mode, so they read as objects against the room.
- **Exhibit** (`box-shadow: 0 18px 40px -18px rgba(7,13,31,.45), 0 0 0 1px rgba(7,13,31,.08)`): a slide shown inside a slide.
- **Button press** (`box-shadow: 0 6px 16px -6px rgba(7,13,31,.55)`): primary buttons; dropped in the compact top-bar button.
- **Tab lift** (`box-shadow: 0 1px 3px rgba(7,13,31,.18)`): the selected segment in a tab track.

### Named Rules
**The Lit Object Rule.** A shadow means "this is a physical object in the room": a slide, a slide inside a slide, a button you press. Cards and panels on a slide get a hairline or a fill instead.

## Shapes

Gently rounded, never pill-shaped. Slides and the exhibit use a barely-there 6px corner, the way a projected slide has crisp edges. Interactive controls step up: small buttons and the command block 8px, buttons, inputs and the tab track 10px, cards 12px, chat bubbles 14px with the speaker-side bottom corner tucked to 4px. Flags and inline code sit at 4px. Structure is drawn with lines: 1px hairlines under heads and between rows, a 2px ink rule under table headers, 2px top rules on install steps. The process slide's phase bars are chevrons cut with a clip-path (1.4u point; the first bar has a flat tail), flattened to 8px-radius bars on phones.

## Components

### Buttons
Confident and tactile: solid fills with a real press.
- **Shape:** gently rounded (10px); small variant 8px.
- **Primary:** Signal Blue fill, white 600-weight label at 1.45u, padding 0.9em 1.5em, optional 1.1em inline SVG icon, button-press shadow.
- **Hover / Focus:** fill deepens to Signal Blue Ink and the button lifts 1px; returns on press. Focus is a 2px outline offset 3px (Signal Blue Ink on paper, Highlighter Gold on navy). Disabled at 60% opacity. Transitions are 0.15s and turn off under reduced motion.
- **Ghost (navy only):** transparent with a 28% white border and white label; hover adds an 8% white wash.
- **Quiet (paper only):** white surface, hairline border, ink label; hover darkens the border to muted.
- **Link button:** white underlined text with a 3px offset, for secondary actions on navy.

### Verify Flag
The system's one Highlighter Gold object: a monospace "verify" tag (600, 0.78em) in Midnight Navy on gold, 4px corners, sitting inline after a figure. Used wherever the page shows how unconfirmed numbers are marked.

### Cards / Containers
- **Verify card (navy):** 12px corners, 4% white fill, 14% white border, 2.2u padding; rows split by 10% white hairlines, label left in on-navy-muted, figure right in white 600.
- **Prompt card (paper):** white surface, hairline border, 12px corners, text left and a small quiet Copy button right; stacks vertically on phones.
- **Chat bubbles:** "You" in Well, right-aligned at 85% width; "Claude" in Midnight Navy Raised with a Signal Blue Bright speaker label.
- **Command block:** Midnight Navy strip, 8px corners, monospace command in pale blue (#cfd8ff), a Copy button divided by a 12% white rule.

### Inputs / Fields
- **Style (navy):** 6% white fill, 28% white border, 10px corners, white 1.45u text, 50% white placeholder, Signal Blue caret.
- **Focus:** 2px Highlighter Gold outline, offset 2px.
- **Error / Status:** invalid border #ff8f8f; status text #9be7b4 for success, #ffb4b4 for errors. A consent line in label size sits under every signup.

### Navigation
- **Top bar:** fixed, 56px, Midnight Navy with an 8% white bottom hairline; three-column grid with the white wordmark left, tracker center, counter right.
- **Tracker:** 13px, 500, 0.02em links in 62% white; hover and current go full white, and the current section gets a 2px Signal Blue Bright underline. Hidden on phones.
- **Counter:** "01 / 08" at 13px, current number in white 600. Hidden on phones, where a compact primary Install button takes its place.

### Tabs
A Well track (4px padding, 10px corners) holding 600-weight segments; the selected segment turns white with ink text and the tab-lift shadow. Full-width equal segments on phones.

### Slide Furniture
Numbered points (blue-ink numeral column, title, muted copy), the scorecard table (2px ink header rule, bold ink first column), install steps (counter numerals in Signal Blue Ink at 2.2u, top rules with the first in Signal Blue), and chevron phase bars (Well fills, the last in Midnight Navy). Exhibits are captioned "Exhibit N." in a label-size figcaption, and the sample slide is always labeled as a sample with a fictional client.

## Do's and Don'ts

### Do:
- **Do** build every new section as a slide with the full anatomy: title, claim tagline, logo top right, hairline rule, body, footnote row with the two-digit number.
- **Do** size everything inside a slide in multiples of `--u`; use pixels only in phone overrides.
- **Do** write taglines as claims (one sentence that states what the slide proves), set at weight 300 in muted ink.
- **Do** keep content slides on Slide Paper and title or closing slides on Midnight Navy Raised, in every color scheme.
- **Do** use Signal Blue for fills behind white text and Signal Blue Ink for blue text and thin lines on paper; use Signal Blue Bright for blue on navy.
- **Do** separate content with hairlines and Well fills; reserve shadows for slides, exhibits, pressed buttons and the selected tab.
- **Do** use inline SVG line icons (2.4 stroke, about 1.1em), only where they carry meaning.
- **Do** label sample slides and example figures as samples with a fictional client.

### Don't:
- **Don't** use Highlighter Gold as a button, card, heading or background color; it marks verification, selection, tiny markers and focus on navy only.
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** use gradient text.
- **Don't** build rows of icon-tile cards.
- **Don't** add a stats strip of big numbers.
- **Don't** use emoji as icons.
- **Don't** add colored glows; shadows are neutral, soft and drop downward.
- **Don't** use monospace for labels or decoration.
- **Don't** invert paper slides to dark in dark mode.
- **Don't** set labels in uppercase; labels are sentence case at 600 with 0.02em tracking.
