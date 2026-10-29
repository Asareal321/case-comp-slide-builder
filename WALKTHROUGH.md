# Launching the Case Comp Slide Builder site

What's in this folder:

| File | What it is |
|---|---|
| `index.html` | The whole website (one page) |
| `case-comp-slide-builder.zip` | The skill people download (the folder with `SKILL.md` inside) |

Total time: about 20 minutes. Total cost: $0.

---

## Step 1: Put the site on GitHub (5 min)

Vercel deploys from GitHub, and every change you push later goes live on its own.

1. Go to github.com and sign in (your username is `Asareal321`).
2. Click **+** (top right), then **New repository**. Name it `case-comp-slide-builder`, set it to **Public**, and click **Create repository**.
3. Back here, ask Claude: *"push the case-comp-skill-site folder to my new GitHub repo"*. Or run these yourself:

```bash
cd "/Users/user/Claude Projects/case-comp-skill-site" && git init && git add . && git commit -m "Launch site" && git branch -M main && git remote add origin https://github.com/Asareal321/case-comp-slide-builder.git && git push -u origin main
```

## Step 2: Deploy on Vercel (5 min)

1. Go to vercel.com and click **Sign Up**, then **Continue with GitHub**. The free **Hobby** plan is all you need.
2. Click **Add New… → Project**, find `case-comp-slide-builder`, and click **Import**.
3. Leave every setting as it is (Framework Preset: **Other**) and click **Deploy**.
4. After about 30 seconds you'll get a live link like `case-comp-slide-builder.vercel.app`. Open it and test the Download button.

**Optional custom domain:** buy one (e.g. `casecompslides.com`, about $12/yr), then go to Vercel project → **Settings → Domains** and add it. Vercel tells you exactly which DNS records to set.

## Step 3: Turn on analytics with PostHog (5 min)

1. Go to posthog.com and sign up for free. When it asks, choose the **US** region and the **Web** / **JavaScript snippet** setup.
2. Find your **Project API key**. It starts with `phc_` and is under **Settings → Project → General**. This key is meant to be public, so it's safe to put in the site.
3. Open `index.html` and replace `phc_REPLACE_ME` near the top with your key. If you picked the EU region, also change the host to `https://eu.i.posthog.com`.
4. Commit and push. Vercel redeploys automatically within a minute.

```bash
cd "/Users/user/Claude Projects/case-comp-skill-site" && git commit -am "Add PostHog key" && git push
```

5. Visit your live site and click Download once. Then in PostHog, open **Activity**. You should see a `$pageview` and a `skill_downloaded` event within about a minute.

## Step 4: Build your dashboard (5 min)

In PostHog, go to **Dashboards → New dashboard** and add these insights:

| Insight | How to set it up |
|---|---|
| **Site visits** | Trends → event `$pageview` → "Unique users" → Last 30 days |
| **Downloads** | Trends → event `skill_downloaded` → "Total count" |
| **Conversion rate** | Funnels → step 1 `$pageview`, step 2 `skill_downloaded` |
| **Where visitors come from** | Trends → `$pageview` → Breakdown by "Referring domain" |

The site sends these events:
- `$pageview`, automatically on every visit
- `skill_downloaded`, on every click of the Download button
- `install_tab_viewed`, when someone switches between the Claude.ai and Claude Code install tabs

## Updating the skill later

When you change the skill, re-zip it and push:

```bash
cd "/Users/user/Claude Projects/case-comp-skill-site" && git commit -am "Update skill" && git push
```

Or just ask Claude to "re-package the case comp skill and push the site."

## Sharing tips

- Add `?utm_source=linkedin` (or `instagram`, `groupchat`, etc.) to the links you share. PostHog will show which channel brings the most downloads.
- Put a screenshot of a slide the skill made into the "What it does" section. A real example converts much better than text alone.
