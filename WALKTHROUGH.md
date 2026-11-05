# Launching the eightytwenty site

What's in this folder:

| File | What it is |
|---|---|
| `index.html` | The whole website (one page) |
| `eightytwenty.zip` | The skill people download (the folder with `SKILL.md` inside) |
| `logo-white.png`, `logo-black.png`, `favicon.png` | The logo, made from `Eighty Twenty.pdf` |

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

The site runs PostHog without cookies (memory only), so each visit counts as a new visitor and "unique users" will read high. Visitors whose browsers send Global Privacy Control or Do Not Track aren't tracked at all.

The site sends these events:
- `$pageview`, automatically on every visit
- `skill_downloaded`, on every click of a Download button (`location` says which one)
- `signup_submitted` / `signup_failed`, when someone joins the email list (`source` says which form)
- `link_shared` / `link_copied`, when a phone visitor sends the page to their laptop
- `text_copied`, when someone copies the install command or an example prompt
- `feedback_submitted` / `feedback_failed`, when someone sends the score sheet on the Feedback slide. Only `outcome`, `photo_count` and `has_email` go to PostHog; the feedback itself goes to Formspree

Add a **Signups** insight too: Trends → `signup_submitted` → "Total count".

## Step 5: Connect the email list on Kit (10 min)

The signup forms (on phones at the top of the page, and on the last slide) send nothing until this is done.

1. Go to **kit.com** and sign up for the free plan.
2. Go to **Grow → Landing Pages & Forms → Create new → Form → Inline**, pick any template, and click **Save**. The design doesn't matter, because the site uses its own form.
3. Click **Publish → HTML**. In the code it shows, find `app.kit.com/forms/1234567/subscriptions`. That number is your **form ID**.
4. Open `index.html` and replace `REPLACE_WITH_KIT_FORM_ID` with the number. It appears near the top and in both forms, so replace all of them. Or send the number to Claude and ask it to do it.
5. In the form's **Settings → Incentive**, turn on **Send incentive email**, set the button to link to `https://case-comp-slide-builder.vercel.app/#install`, and paste the welcome email below.
6. Push the change. Then test it with your own email from your phone.

**Draft welcome email** (Kit's incentive email):

> **Subject:** Your eightytwenty install link
>
> Thanks for grabbing eightytwenty.
>
> Open this on a laptop: **[Install eightytwenty]** (button)
>
> It takes two minutes: download the zip, then in Claude go to Settings → Capabilities → Skills → Upload skill. You'll need Claude Pro or higher.
>
> Then attach your case prompt and ask for a slide. I'll only email you when a new skill ships.

**Consent:** you're in Canada, so the anti-spam law (CASL) applies. The forms already say what people are signing up for and that they can unsubscribe. Kit adds the unsubscribe link to every email. Don't add people to the list any other way.

## Step 6: Read feedback (2 min, then weekly)

The last slide is a feedback score sheet. Each submission goes to your Formspree form (`xnpprgyq`), which emails it to you and keeps it in the dashboard.

1. Read submissions in your inbox, or at formspree.io under the form's **Submissions** tab. Each one shows `outcome`, `message`, `email` (if given, and Formspree uses it as the reply-to, so you can just hit Reply), `photos` and `page`.
2. In Formspree's form **Settings**, restrict submissions to `case-comp-slide-builder.vercel.app` so other sites can't post to your form.
3. Formspree's free plan accepts 50 submissions a month. If feedback outgrows that, upgrade or ask Claude to move it somewhere else.
4. For trends, PostHog still gets a `feedback_submitted` event with only the outcome and photo count. Add a **Trends** insight broken down by `outcome`.
5. Link people to it directly: `https://case-comp-slide-builder.vercel.app/#feedback`. Add that link to the Kit welcome email.

Formspree isn't blocked by ad blockers or privacy settings the way analytics are, so everyone can send feedback. A hidden spam trap field (`_gotcha`) quietly drops most bot submissions.

### Turn on screenshot uploads (5 min, once)

People can attach up to 3 screenshots to their feedback. They're stored privately in your Vercel account, so only you can see them. Until you do this, the form tells people uploads aren't switched on and still lets them send text.

1. In Vercel, open the `case-comp-slide-builder` project and go to **Storage → Create → Blob**.
2. Name it `feedback-photos`, choose **Private** access, and connect it to the project with **Production** ticked. Vercel connects it with OIDC and adds `BLOB_STORE_ID` for you. No token to copy. The upload function also accepts an older-style `BLOB_READ_WRITE_TOKEN`.
3. Go to **Deployments**, open the menu on the latest one, and click **Redeploy**, so the site picks up the new setting.
4. Test it: send yourself feedback with a screenshot from the live site.

**Finding the photos:** each Formspree submission lists its photos under `photos`, as paths like `feedback/2026-11-05/....jpg`. Open **Storage → feedback-photos** in Vercel and find the file under that path.

Each photo is checked to be a real image, shrunk to at most 2000px a side, and capped at 4 MB. Vercel's free Hobby plan includes a little Blob storage, which covers thousands of screenshots this size.

## Step 7: Keep the legal pages true (10 min, once)

The site has a [Privacy Policy](privacy.html), [Terms of Use](terms.html) (with the refund section) and a [Cookie Policy](cookies.html). They name eightytwenty as an independent project in Ontario, Canada, with eightytwenty.tech@gmail.com as the contact. They only stay accurate if these hold:

1. **Read that inbox.** People can ask to see or delete their data there, and you have 30 days to answer. To delete someone: remove them in Kit, delete their submissions in Formspree, and delete their screenshots in Vercel Blob.
2. **Add a mailing address in Kit** (Settings, then Account). Canada's anti-spam law (CASL) requires one in every marketing email, and Kit prints it in the footer. A PO box is fine.
3. **Don't switch PostHog back to cookies** or turn on session replay. The site runs PostHog in memory only, which is why there's no cookie banner. If you ever want either, the Cookie Policy says you'll ask for consent first, so a banner would be needed.
4. **Clear out old screenshots** in Vercel Blob once you've acted on the feedback. The Privacy Policy promises to keep them only as long as needed.
5. **Update the date** at the top of a page whenever you change it.

These pages are a good-faith baseline for a free, no-payments student project. They aren't legal advice. If eightytwenty starts charging, collecting more data or growing a lot, have a lawyer review them.

## Updating the skill later

When you change the skill, re-zip it and push:

```bash
cd "/Users/user/Claude Projects/case-comp-skill-site" && git commit -am "Update skill" && git push
```

Or just ask Claude to "re-package the eightytwenty skill and push the site."

## Sharing tips

- Add `?utm_source=linkedin` (or `instagram`, `groupchat`, etc.) to the links you share. PostHog will show which channel brings the most downloads.
- Put a screenshot of a slide the skill made into the "What it does" section. A real example converts much better than text alone.
