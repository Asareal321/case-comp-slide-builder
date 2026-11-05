# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Case competition students:** undergrad business students preparing decks for case competitions, usually against a deadline and often overnight, who want slides that read as consulting-grade to a judging panel.
- **Consulting recruits:** students preparing for consulting recruiting, such as case interviews and slide or deck exercises, who need to produce and practise executive-style slides.

Both groups find the site through a shared link (LinkedIn, group chats, clubs), decide quickly whether it's worth installing, download a zip, and add it to their own Claude.

## Product Purpose

eightytwenty is a free Claude skill, distributed through this one-page site. Inside Claude, it turns a case prompt or brief into a judge-ready case competition slide, then a full deck. It does this by asking one or two questions at a time, researching, and filling gaps.

The site exists to get the skill installed and to grow a community around it. Success means visitors download and install the skill and stay reachable for future skills or products. Downloads and visits are tracked in PostHog (`$pageview`, `skill_downloaded`, `install_tab_viewed`).

## Positioning

The quality bar comes from real Ivey/Western case comp decks and a large think-cell template library, plus the creator's line-by-line feedback on the skill's own test decks. It follows strict rules: one recommendation per slide, never invented numbers (unconfirmed figures are flagged `[verify]`), at most two questions per message, and a deck-wide polish pass. It's built for how judging panels score, not for generic slide generation.

## Operating Context

- Visitors arrive from shared links, mostly on phones from social apps and group chats, and also on laptops.
- Installing means downloading `eightytwenty.zip` and uploading it under Claude.ai → Settings → Capabilities → Skills, which needs a Pro, Max, Team or Enterprise plan with code execution turned on. Claude Code users unzip it into `~/.claude/skills/`.
- The skill produces editable PowerPoint slides inside Claude.
- Updating the skill means re-zipping it and pushing to GitHub (`Asareal321/case-comp-slide-builder`). Vercel deploys automatically.

## Capabilities and Constraints

- Static site: `index.html` plus logo PNGs, a favicon and the skill zip, hosted on Vercel. There's no backend.
- Analytics: PostHog, US region, with a public project key in the page.
- The skill's name in Claude is `eightytwenty` (`/eightytwenty` in Claude Code). The repo and the default Vercel URL still say `case-comp-slide-builder`.
- Community channel: an **email list on Kit (ConvertKit)**. The same signup emails phone visitors the install link and announces future skills. It isn't built yet, and the Kit account is the user's to create.
- The creator is **not** named or credited on the site.
- The site must say it's independent and not affiliated with Anthropic.

## Brand Commitments

- Name: **eightytwenty**, written lowercase as one word in copy.
- Logo: the staggered italic serif wordmark "eighty / twenty" from `Eighty Twenty.pdf`, shipped as `logo-white.png`, `logo-black.png` and `favicon.png`. The source PDF contains a near-invisible pale dash, which was left out on purpose.
- Helvetica Neue is the requested site typeface. It's also the skill's default slide font.

## Evidence on Hand

- No public proof exists yet: no real slides from the skill cleared for display, no competition results, no testimonials or user quotes. Future work must not invent any of these.
- The hero's "Sample slide" is an illustrative mock-up with a fictional client ("Northwind") and must stay labeled as a sample.
- Factual claims the skill supports: it's modeled on Ivey/Western case comp decks, never invents numbers, asks at most two questions at a time, and offers 6 color palettes.

## Product Principles

1. **Install in minutes.** Every page decision should shorten the path from a shared link to a working skill in Claude.
2. **Earn trust honestly.** Show only real proof, label samples as samples, and never overstate results.
3. **Speak judge, not tool.** Frame the value in case competition terms: recommendation, evidence and polish, not AI features.
4. **Keep people reachable.** The download is the start of a relationship, so the site should give visitors a way to come back for what ships next.
