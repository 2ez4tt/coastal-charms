/* ══════════════════════════════════════════════════════════════
   THE COASTAL CHARMS — OFFLINE FALLBACK ONLY

   ⚠ This file is NOT the shop any more.

   The live shop reads `shop.json`, which the editor at /admin
   writes for you. This file exists only so the page still shows
   something when you open index.html straight from a folder on
   your computer (browsers block reading shop.json that way).

   Edit your products in the editor, not here.
   ══════════════════════════════════════════════════════════════ */

/* ── 1 · YOUR WHATSAPP NUMBER ──────────────────────────────────
   Country code, no +, no spaces, no dashes.
   Pakistan example: 0300 1234567  →  923001234567
   Leave as "" until you're ready; buttons show a friendly notice. */
const WHATSAPP_NUMBER = "";

/* ── 2 · YOUR INSTAGRAM HANDLE ─────────────────────────────── */
const INSTAGRAM_HANDLE = "thecoastalcharms_";

/* ── 3 · CURRENCY LABEL ────────────────────────────────────── */
const CURRENCY = "Rs";

/* ── 4 · YOUR PRODUCTS ─────────────────────────────────────────
   Copy a block, paste it, change the values. That's the whole job.

     id       — short unique tag, lowercase, no spaces
     name     — what it's called
     price    — number only, no "Rs", no commas
     category — must match one of the CATEGORIES list below
     image    — file name inside the images/ folder.
                Leave "" and a labelled placeholder shows instead.
     note     — optional. One short line. Materials, length, etc.
     sold     — set true to mark a one-off piece as sold

   To add a photo: drop it in the images/ folder, then put the
   file name here. e.g.  image: "shell-bracelet.jpg"
   ─────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "cowrie-strand",
    name: "Cowrie Strand Bracelet",
    price: 850,
    category: "Bracelets",
    image: "",
    note: "Turquoise and sand beads, single cowrie shell",
    sold: false
  },
  {
    id: "seaglass-drop",
    name: "Sea Glass Drop Bracelet",
    price: 900,
    category: "Bracelets",
    image: "",
    note: "Tumbled glass, gathered at Gwadar",
    sold: false
  },
  {
    id: "shell-stack",
    name: "Shell Stack — set of two",
    price: 1400,
    category: "Bracelets",
    image: "",
    note: "Wear together or apart",
    sold: false
  },
  {
    id: "tide-bag-charm",
    name: "Tide Bag Charm",
    price: 1200,
    category: "Bag charms",
    image: "",
    note: "Gold ring, shell cluster, mother-of-pearl",
    sold: false
  },
  {
    id: "moonshell-charm",
    name: "Moonshell Bag Charm",
    price: 1350,
    category: "Bag charms",
    image: "",
    note: "Crescent drop with freshwater pearl",
    sold: false
  },
  {
    id: "harbour-strap",
    name: "Harbour Phone Strap",
    price: 1100,
    category: "Phone straps",
    image: "",
    note: "Fits any case with a strap card",
    sold: false
  },
  {
    id: "shoreline-strap",
    name: "Shoreline Phone Charm",
    price: 950,
    category: "Phone straps",
    image: "",
    note: "Beaded, with a single scallop shell",
    sold: false
  },
  {
    id: "driftwood-key",
    name: "Driftwood Keyring",
    price: 700,
    category: "Keyrings",
    image: "",
    note: "Warm beads on a brass ring",
    sold: false
  },
  {
    id: "gwadar-key",
    name: "Gwadar Keyring",
    price: 750,
    category: "Keyrings",
    image: "",
    note: "Red and coral beads, hand-strung",
    sold: false
  }
];

/* ── 5 · CATEGORIES ────────────────────────────────────────────
   The filter row across the top of the shop. Order matters.
   Every product's `category` must appear in this list. */

const CATEGORIES = ["Bracelets", "Bag charms", "Phone straps", "Keyrings"];

/* ── 6 · SHOP NOTICE (optional) ────────────────────────────────
   One line under the masthead. Set to "" to hide it entirely. */

const SHOP_NOTICE = "Made to order · 2–3 days · Delivery across Pakistan";

/* ── Expose to the page (const does not attach to window) ──── */
window.PRODUCTS         = PRODUCTS;
window.CATEGORIES       = CATEGORIES;
window.WHATSAPP_NUMBER  = WHATSAPP_NUMBER;
window.INSTAGRAM_HANDLE = INSTAGRAM_HANDLE;
window.CURRENCY         = CURRENCY;
window.SHOP_NOTICE      = SHOP_NOTICE;
