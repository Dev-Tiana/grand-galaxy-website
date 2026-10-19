# Deployment and Content Management Handoff

## Local development

Use Node and pnpm. From the project root run `pnpm install`, then `pnpm dev` for Preview, `pnpm typecheck` for TypeScript validation, and `pnpm build` for the production build check.

The project listens on port 3000 and serves the static route manifest from `/manus-routes.json`. The existing live domain is not modified by this project.

## Managed project handoff

Commit source changes to the managed project repository and create a checkpoint after checks pass. Publish only after explicit authorization and after the business confirms current identity, content, forms, payment, privacy, and legal requirements.

## Content updates

The current content model is file based in `lib/content.ts`. A content editor can update programme and service records, status labels, summaries, details, resources, and FAQs there. Keep all public claims tied to an approved source. When a programme becomes current, replace the approval status with approved dates, fee, format, delivery, certificate, support, and last updated date. When a cohort ends, archive or relabel it rather than leaving old dates as current.

## Future CMS decision

A CMS is useful if staff will update courses, services, and resources regularly. A lightweight hosted CMS such as Sanity is one possible direction, but the business should decide after confirming editorial roles, budget, publishing workflow, preview needs, and maintenance capacity. Do not add CMS infrastructure until the update frequency justifies it.

## Production readiness

Before launch, configure a real public origin for canonical and social metadata, connect an approved form or CRM, configure consent and analytics, add approved legal copy, verify every phone and WhatsApp link, confirm current programme and service facts, and decide whether payment remains off platform or is implemented with an authorized secure provider.
