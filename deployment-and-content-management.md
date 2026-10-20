# Deployment and Content Management Handoff

## Local development

Use Node and pnpm. From the project root run `pnpm install`, then `pnpm dev` for Preview, `pnpm typecheck` for TypeScript validation, and `pnpm build` for the production build check.

The project listens on port 3000 for Preview and serves the static route manifest from `/manus-routes.json`. Production publishing uses the Next.js static export in `out`. The managed build contract runs `pnpm install --frozen-lockfile && pnpm build` and publishes `out`, which contains the generated `index.html` files and public assets. The existing live domain is not modified by this project.

## Managed project handoff

Commit source changes to the managed project repository and create a checkpoint after checks pass. Publish only after explicit authorization and after the business confirms current identity, content, forms, payment, privacy, and legal requirements.

## Content updates

The current content model is file based in `lib/content.ts`. A content editor can update programme and service records, prices, summaries, details, images, source links, resources, and FAQs there. Keep public claims tied to an approved source. When a date, fee, format, delivery detail, or certificate policy changes, update the relevant programme record and its source link together.

Programme and service images live in `public/assets`. Use WebP images with descriptive filenames, meaningful alt text, and a clear source record. Keep each catalogue card visually distinct where an appropriate approved or reusable visual exists.

## Form handoff

`components/forms.tsx` validates the contact and registration fields in the browser and creates an email draft addressed to `info@grandgalaxy.ng`. This is an intentional no storage handoff. For production, replace or extend it with an approved server side email, CRM, or form provider with consent, spam protection, retention, and access controls.

## Future CMS decision

A CMS is useful if staff will update courses, services, and resources regularly. A lightweight hosted CMS such as Sanity is one possible direction, but the business should decide after confirming editorial roles, budget, publishing workflow, preview needs, and maintenance capacity. Do not add CMS infrastructure until the update frequency justifies it.

## Production readiness

Before launch, configure a real public origin for canonical and social metadata, connect an approved form or CRM if direct server delivery is required, configure consent and analytics, verify every phone and WhatsApp link, confirm current programme and service facts, and decide whether payment remains off platform or is implemented with an authorized secure provider.
