# Setting up the editor

This gives the shop owner a **login with an email and password** where they can
add products, upload photos from their phone, change prices, and set the
WhatsApp number — with no code and no GitHub account.

It is free. Setup takes about 20 minutes, once.

**You (the technical person) do steps 1–4. The shop owner only ever sees step 5.**

---

## What you are building

```
Owner opens thecoastalcharms.netlify.app/admin  on their phone
        ↓
Logs in with email + password
        ↓
Adds a product, uploads a photo, taps Publish
        ↓
The site updates itself in about a minute
```

---

## Step 1 · Put the site on GitHub

The editor saves changes into a GitHub repository. That repo is the shop's
storage — the owner never has to see it.

1. Make a free account at **[github.com](https://github.com)**
2. Click **+** (top right) → **New repository**
3. Name it `coastal-charms`
4. Choose **Public**
5. Click **Create repository**
6. On the next page click **uploading an existing file**
7. Drag in **everything** inside the `coastal-charms` folder — including the
   `admin` and `images` folders
8. Click **Commit changes**

---

## Step 2 · Publish it with Netlify

1. Go to **[netlify.com](https://netlify.com)** and sign up **with GitHub**
2. **Add new site** → **Import an existing project**
3. Choose **GitHub**, then pick your `coastal-charms` repository
4. Leave the build settings empty — there is nothing to build
5. Click **Deploy**

You now have a live address like `random-name-123.netlify.app`.

Rename it under **Site configuration → Change site name** — for example
`thecoastalcharms`, giving you `thecoastalcharms.netlify.app`.

---

## Step 3 · Turn on the login (DecapBridge)

This is what lets the owner log in with an email and password instead of a
GitHub account.

1. Go to **[decapbridge.com](https://decapbridge.com)** and sign up (free —
   covers 3 sites and 10 users)
2. Click **Create site**
3. Connect it to your `coastal-charms` GitHub repository when asked
4. DecapBridge shows you a **config snippet**. Copy the `identity_url` line —
   it looks like:

   ```
   identity_url: https://auth.decapbridge.com/sites/abc123-your-site-id
   ```

---

## Step 4 · Fill in the one remaining placeholder

`repo:` is already set to `2ez4tt/coastal-charms` — nothing to do there.

Open `admin/config.yml` and change **one line**:

```yaml
identity_url: https://auth.decapbridge.com/sites/YOUR-SITE-ID
```
↓ becomes the line you copied in step 3.

Save the file and upload it to GitHub again (GitHub website → click the file →
pencil icon → paste → **Commit changes**). Netlify republishes automatically.

---

## Step 5 · Invite the shop owner

In your DecapBridge dashboard, click **Invite user** and enter the owner's email
address. They get an email, set their own password, and that is it.

**Send them this:**

> Your shop editor is at **thecoastalcharms.netlify.app/admin**
> Log in with your email and the password you chose.
> Add it to your phone's home screen so it opens like an app.

---

## What the owner can do

Once logged in they see **Your shop → Products**, containing three sections:

**Settings** (tap to expand)
- WhatsApp number
- Instagram username
- Currency label
- The notice line at the top
- The tagline, the closing line, and both story paragraphs

**Categories** — the filter buttons across the top of the shop

**Products** — the pieces themselves. Each one has:
- Name
- Price (numbers only)
- Category (a dropdown)
- Photo (tap to upload straight from the phone's camera roll)
- Short note
- Sold out (a switch)

They can drag products to reorder them, and delete with the ✕.

Every change needs **Publish → Publish now**. The site updates in about a minute.

---

## Things worth knowing

**Changes take about a minute.** Netlify rebuilds after each publish. If the
owner does not see a change immediately, wait a moment and refresh.

**Photos should be under 3 MB.** The editor rejects anything larger. Most phone
photos are fine; if one is rejected, use the phone's own "resize when sharing"
option.

**The WhatsApp number must be digits only, country code first.**
`0300 1234567` → `923001234567`. The editor will warn if it is wrong.

**Adding a new category** means editing two places in `admin/config.yml` — the
`options:` list under Category, and adding it in the Categories section of the
editor. That one is a job for you, not the owner.

**If the owner forgets their password**, they can reset it from the login page,
or you can re-invite them from DecapBridge.

---

## If something goes wrong

**"Error loading the CMS configuration"** — `admin/config.yml` has a typo.
YAML is fussy about indentation; check that step 4's two lines are correct and
that nothing else shifted.

**Login page loads but the password never works** — the `identity_url` does not
match the DecapBridge site. Recopy it from the dashboard.

**Owner publishes but the site does not change** — check Netlify's **Deploys**
tab. A failed deploy shows in red there.

**Products vanished from the live site** — most likely a product was saved with
an empty name. Open the editor and check the list.
