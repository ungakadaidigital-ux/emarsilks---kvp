# EMAR SILKS — Website (Ready to Deploy)

## What's inside
- 8 pages: index, about, collections, gallery, testimonials, contact, privacy, terms
- /css/style.css — all styles, design tokens at the top
- /js/main.js — nav, scroll reveal, lightbox, WhatsApp links, form handling
- /assets/images — placeholder photography (replace before launch)
- /assets/icons + favicon.png — placeholder logo mark

## Before you go live — replace these
1. **Photos**: every file in /assets/images is a generated placeholder. Swap in real
   showroom and saree photography, keeping the same filenames (or update the `src`
   paths in the HTML).
2. **WhatsApp number**: open js/main.js, line ~6, update `WHATSAPP_NUMBER`
   (currently set to the showroom landline in wa.me format — replace with your
   WhatsApp Business number).
3. **Google Map**: contact.html has an embedded map using the address on file.
   For pixel-accurate pin placement, get the exact embed link from Google Maps
   ("Share" → "Embed a map") for your listing and swap the iframe `src`.
4. **Logo**: the header/footer use a simple SVG monogram + "EMAR SILKS" text.
   Replace with your real logo file if you have one (swap the `.brand` markup).
5. **Business hours**: confirm the hours shown on the Contact page.
6. **Contact form**: currently opens WhatsApp with the message pre-filled
   (no backend needed). If you'd like it to also email you or save to a
   database, it can be wired to a form service (e.g. Formspree) or a small
   backend — ask your developer to connect it.

## When you move to the final emarsilks.com domain
The `og:image` tags (index, about, collections, gallery) currently point to the
Cloudflare Pages preview URL so WhatsApp/Facebook link previews work right now.
Once the site is live on your real domain, do a find-and-replace of
`emarsilks---premium.pages.dev` → `www.emarsilks.com` (or your final domain)
across the HTML files.

## Deploying
This is a static site — no build step required. Options:
- Drag-and-drop the whole folder onto Netlify or Vercel.
- Upload via FTP to your existing emarsilks.com hosting, replacing the old
  Wix export.
- GitHub Pages: push this folder to a repo and enable Pages.

Keep the folder structure as-is (css/, js/, assets/ alongside the .html files).

## Notes
- Fonts: Cormorant Garamond (headings) + Poppins (body), loaded from Google Fonts.
- Design signature: the gold "temple border" divider (visible between sections)
  is a nod to the woven mankolam border found on Kanjivaram sarees.
- Lighthouse: images are lazy-loaded and CSS/JS are hand-written (no framework
  bloat) to keep the site fast — real photography should still be compressed
  (JPEG, ~150–300KB per image) before upload.
