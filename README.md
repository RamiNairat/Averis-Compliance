# Averis Compliance website

Marketing site for Averis Compliance, a product compliance document review service.

Built with React Router 7 in framework mode, prerendered to static HTML (`ssr: false`).
Every public route is written to its own HTML file at build time, so direct visits and
refreshes work on any static host without rewrites.

## Commands

```bash
npm install
npm run dev        # development server on http://localhost:3000
npm run build      # prerendered static site in build/client
npm run preview    # serves build/client the way Vercel does (redirects, 404.html)
npm run typecheck  # route type generation + TypeScript
```

## Where things live

| What | Where |
| --- | --- |
| Contact email, phone, Upwork link, form endpoint, site URL | `src/site.ts` |
| Service names, prices, scope and exclusions | `src/content/services.ts` |
| Fictional sample review | `src/content/sample-review.ts` |
| Routes | `src/routes.ts`, plus the `prerender` list in `react-router.config.ts` |
| Design tokens, base styles, buttons, forms | `src/styles/global.css` |
| Page-specific styles | next to each route in `src/routes/` |

Adding a page means adding it to both `src/routes.ts` and the `prerender` list.

## Contact form

Submissions are sent as JSON to Formspree (endpoint in `src/site.ts`) and delivered by
email. The form does not accept file uploads.

## Moving to a custom domain

1. Update `url` (and `email`, if a domain mailbox exists) in `src/site.ts`.
   The live domain is https://www.averiscompliance.com; the old vercel.app address
   redirects to it via `vercel.json`.
2. Update the domain in `public/robots.txt` and `public/sitemap.xml`.

Canonical URLs and Open Graph tags are generated from `src/site.ts`.

## Deployment

`vercel.json` sets the build command, the output directory (`build/client`) and permanent
redirects for retired URLs (`/pricing`, `/how-it-works`, `/checklist`).
