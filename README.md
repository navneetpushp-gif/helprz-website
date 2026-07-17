# Helprz — Programmatic SEO Site (Next.js)

This is a working starter of the system we discussed: **one template + one
data file + one Next.js app** that generates a full page per city/locality/
service combination — instead of hand-building HTML files one at a time.

It currently generates 6 real pages from 6 rows of data. Adding a new page
is a copy-paste-edit job in one file — no new code, no new HTML file.

---

## What is Next.js, in one paragraph

Next.js is a framework for building websites with React. The part that
matters for you: you can put a file at `app/about/page.tsx` and it becomes
the page at `yoursite.com/about` — automatically. We're using a *dynamic*
version of that: one file, `app/[city]/[locality]/[service]/page.tsx`,
that becomes hundreds of URLs because it reads its content from a data
file instead of being hardcoded.

## How the pieces fit together

```
data/pages.ts                        <- THE DATABASE. Edit this to add pages.
lib/types.ts                         <- Defines what fields each page needs.
components/PageTemplate.tsx          <- THE TEMPLATE. Edit this to change layout/design.
components/Header.tsx, Footer.tsx    <- Shared across every page.
components/VerifiedBadge.tsx         <- The rotating "verified" stamp graphic.
components/FAQAccordion.tsx          <- The clickable FAQ widget.
app/[city]/[locality]/[service]/page.tsx
                                      <- Wires data + template together,
                                         and generates SEO metadata + schema
                                         for every page automatically.
app/page.tsx                         <- Homepage (lists all generated pages).
app/sitemap.ts                       <- Auto-generates sitemap.xml from the data file.
app/robots.ts                        <- Auto-generates robots.txt.
```

**You will spend almost all of your time in `data/pages.ts`.** That's it.
That's the spreadsheet from our earlier conversation, just written as code
instead of a CSV — but the shape is identical: city, locality, service,
salary numbers, FAQs, nearby areas, links to related pages.

## How to add a new page (e.g. "Driver in Sector 43")

1. Open `data/pages.ts`
2. Copy one of the existing objects (e.g. the "full-time-maid" one)
3. Change every field: `localitySlug`, `localityName`, `serviceSlug`,
   `serviceName`, the meta title/description, the FAQs, the salary numbers
4. Save the file
5. Run `npm run build` — a new page now exists at
   `/gurgaon/sector-43/driver` automatically, with its own title, meta
   description, schema markup, and sitemap entry.

No other file needs to change. This is the whole point of the system.

## Running it on your own computer

You'll need [Node.js](https://nodejs.org) installed (any recent version).

```bash
npm install       # one-time setup, downloads the packages this needs
npm run dev       # starts a local preview at http://localhost:3000
```

Edit any file, save it, and the browser preview updates automatically.

## Putting it live

This project is built to deploy on **Vercel** (made by the same company
that makes Next.js, and it has a generous free tier):

1. Push this folder to a GitHub repository
2. Go to vercel.com, "Import Project", pick that repo
3. Click Deploy — Vercel detects it's a Next.js app automatically
4. Point your domain (`helprz.in`) at the Vercel project in Vercel's
   domain settings, and update your DNS at your registrar accordingly

Every time you edit `data/pages.ts` and push to GitHub, Vercel rebuilds
and republishes the whole site automatically — including every new page.

## What's already wired up correctly for SEO

- Unique `<title>` and meta description per page, generated from the data
- Canonical URL per page
- Open Graph tags per page
- JSON-LD structured data per page: `BreadcrumbList`, `FAQPage`, `Service`
- Auto-generated `sitemap.xml` — grows automatically as you add rows to
  `data/pages.ts`
- Auto-generated `robots.txt`
- Internal linking between nearby areas and related services on every page
  (this is the "nearby areas" / "related services" section — it's driven
  by the `nearbyAreaLinks` / `relatedServiceLinks` fields in the data file)

## What this does NOT include yet (next steps, not done for you automatically)

- Real content for hundreds of localities — right now there are 6 sample
  pages so you can see the system work end-to-end. Per our earlier
  conversation: **don't jump straight to hundreds.** Fill in real,
  locality-specific detail for your next 10-15 target areas, publish,
  watch how they index over 3-4 weeks, then scale the same pattern wider.
- A booking form / backend — the CTA buttons currently link to `tel:` and
  `wa.me` (WhatsApp), matching what your current homepage already does.
- Images — none are wired in yet; add them per-locality if you want
  location-specific photos (this also gets you image-search SEO, as
  discussed earlier).
