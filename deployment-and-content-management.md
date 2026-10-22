# Deployment and Content Management Handoff

## Local development

Use Node and pnpm. From the project root run `pnpm install`, then `pnpm dev` for Preview, `pnpm typecheck` for TypeScript validation, and `pnpm build` for the production build check.

The project listens on port 3000 for Preview and serves the static route manifest from `/manus-routes.json`. Production publishing uses the Next.js static export in `out`. The managed build contract runs `pnpm install --frozen-lockfile && pnpm build` and publishes `out`, which contains the generated `index.html` files and public assets. The existing live domain is not modified by this project.

## Managed project handoff

Commit source changes to the connected GitHub repository and create a checkpoint after checks pass. Publish only after explicit authorization and after the business confirms current identity, content, forms, payment, privacy, and legal requirements.

## Content updates

The shared service, resource, FAQ, and brand model remains in `lib/content.ts`. The researched training catalogue is now maintained in `lib/programmes.json`. Each programme record controls its slug, title, category, type, format, price when publicly stated, summary, overview, outcomes, audience, topics, curriculum, duration, level, requirements, certificate wording, instructor wording, registration note, image, and related internal slugs.

When a date, fee, format, delivery detail, certificate policy, or instructor detail changes, update the relevant programme record only after the business confirms the current fact. Remove a field rather than guessing when it is not confirmed. Keep every `relatedSlugs` value pointing to an existing programme slug.

Programme and service images live in `public/assets`. Use WebP images with descriptive filenames and meaningful alt text. Keep each catalogue card visually distinct where an appropriate approved or reusable visual exists.

The public sitemap is the static file `public/sitemap.xml`. Update it when adding or removing public routes. `app/robots.ts` serves the robots response and points to `/sitemap.xml`.

## Form handoff

`components/forms.tsx` validates the contact and registration fields in the browser and prepares an encoded WhatsApp message for `https://wa.me/2348105043903`. The visitor reviews the message and presses Send in WhatsApp. This is an intentional no storage handoff. For production, keep the visitor review step and add a server side CRM or form provider only with consent, spam protection, retention, and access controls.

The form headers and required fields are part of the customer handoff contract: `NEW TRAINING REGISTRATION`, `NEW SERVICE ENQUIRY`, `NEW GENERAL ENQUIRY`, and `NEW CORPORATE TRAINING ENQUIRY`.

## Future CMS decision

A CMS is useful if staff will update courses, services, and resources regularly. A lightweight hosted CMS such as Sanity is one possible direction, but the business should decide after confirming editorial roles, budget, publishing workflow, preview needs, and maintenance capacity. Do not add CMS infrastructure until the update frequency justifies it.

## Production readiness

Before launch, configure a real public origin for canonical and social metadata, verify every phone and WhatsApp link, confirm current programme and service facts, configure consent and analytics, and decide whether payment remains off platform or is implemented with an authorized secure provider.
