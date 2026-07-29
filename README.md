# The Coastal Charms — shop site

A free storefront with a **phone-friendly editor**. The shop owner logs in with
an email and password, adds products, uploads photos from their camera roll, and
sets prices — no code, no monthly fee.

Customers browse, tap **Order on WhatsApp**, and a message arrives already
written.

---

## Two ways to run this

### A · With the editor (recommended)

The owner manages everything from `yoursite.com/admin` on their phone.

**→ Follow [SETUP-CMS.md](SETUP-CMS.md).** About 20 minutes, once. Free.

### B · Without the editor

Edit `shop.json` by hand and re-upload the folder. No signup needed, but no
phone editing either. Drag the folder onto
[app.netlify.com/drop](https://app.netlify.com/drop) to publish.

---

## Where the shop's content lives

**`shop.json`** — the whole shop in one file: the WhatsApp number, the settings,
the categories, and every product. The editor writes this file for you; you can
also edit it directly.

```json
{
  "settings": {
    "whatsapp": "923001234567",
    "instagram": "thecoastalcharms_",
    "currency": "Rs",
    "notice": "Made to order · 2–3 days · Delivery across Pakistan"
  },
  "categories": [{ "name": "Bracelets" }],
  "products": [
    {
      "name": "Cowrie Strand Bracelet",
      "price": 850,
      "category": "Bracelets",
      "image": "images/uploads/cowrie.jpg",
      "note": "Turquoise and sand beads, single cowrie shell",
      "sold": false
    }
  ]
}
```

**The WhatsApp number is digits only, country code first.**
`0300 1234567` → `923001234567`. Leave it empty and the order buttons show a
reminder instead of opening WhatsApp.

---

## Testing it on your computer

The page reads `shop.json`, and browsers block that when you open a file
directly from a folder. Two options:

- **Just open `index.html`** — it falls back to `products.js` and shows the shop.
  Good enough to check the design.
- **Run a tiny local server** for the real thing:
  ```
  npx serve
  ```
  then open the address it prints. This is exactly how the live site behaves.

---

## Files

| File | What it is |
| --- | --- |
| `shop.json` | **The shop.** Products, prices, settings. Written by the editor. |
| `admin/` | The editor. `config.yml` needs two lines filled in — see SETUP-CMS.md |
| `index.html` | The page |
| `styles.css` | How it looks |
| `tokens.css` | Colours, fonts, spacing |
| `images/uploads/` | Photos uploaded through the editor |
| `products.js` | Offline fallback only. Safe to delete once published. |

---

## Notes

- Two fonts (Fraunces and Karla) load from Google Fonts, so visitors' browsers
  request them from Google. They can be self-hosted if you would rather.
- Prices show with the `currency` label from `shop.json` — change `Rs` there.
- The layout is built phone-first, since most visitors arrive from Instagram.
- A custom domain like `thecoastalcharms.com` costs about $10–15/year from a
  registrar; pointing it at Netlify is free.
