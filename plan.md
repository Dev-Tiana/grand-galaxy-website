# La Grande Galaxie Website Implementation Plan

## Product scope

Build an original, responsive public website for La Grande Galaxie, also known as LGGx. The first release serves two clear journeys: learners exploring practical training and businesses requesting professional support. It preserves the existing live website and does not change the production domain.

The implementation uses Next.js with TypeScript and a small reusable component system. Public pages render meaningful HTML on the server. Client components add catalogue search, filters, mobile navigation, accordions, and form states. No payment or customer database is enabled until the business confirms current products, prices, payment terms, privacy handling, and access delivery.

## Evidence policy

The live site and related public profiles verify five service areas: web development, mobile app development, online tutoring and training, data analytics, and research writing. The live site also exposes a catalogue of data and professional development programmes, but many dates and prices are historical or inconsistent. The new site therefore presents a working catalogue with every programme marked for current details confirmation. It does not publish an address, legal registration, founder story, testimonials, accreditation, job promise, salary claim, or current cohort date as established fact.

Verified contact details used in the interface are info@grandgalaxy.ng and +234 810 504 3903. The Contact page explains that the operating address and service area need confirmation. Research writing is paired with an academic integrity policy.

## Information architecture

* `/` Home with dual audience pathways.
* `/training` Catalogue with qualitative filters and searchable cards.
* `/training/[slug]` Reusable programme detail page with verification notice and registration path.
* `/services` Service overview.
* `/services/[slug]` Reusable service detail page with needs, scope, process, and enquiry path.
* `/about` Verified company story and open approvals.
* `/resources` Practical guides and research notes.
* `/faq` Direct answers for learners and businesses.
* `/contact` Verified contact channels and validated form.
* `/register` Learner registration form with confirmation state.
* `/legal/privacy`, `/legal/terms`, `/legal/academic-integrity` Draft legal pages that clearly require client review.
* `/404` Custom not found experience through the app router.

## Design direction

### Options considered

* **Orbit editorial**: 0.08 probability. A high contrast learning journal with orbital lines and dense editorial modules.
* **Quiet enterprise**: 0.06 probability. A restrained consulting system with blue panels, large type, and evidence led sections.
* **Signal constellation**: 0.04 probability. A spacious interface where deep blue anchors, bright blue actions, and constellation markers guide each journey.

### Chosen movement: Signal constellation

The chosen direction uses the supplied identity without recreating or altering the logo. The layout feels like a confident learning and consulting system rather than a course marketplace clone.

### Core principles

1. Make the next useful action obvious for either audience.
2. Show evidence status beside claims instead of hiding uncertainty.
3. Use generous space, strong hierarchy, and short readable sections.
4. Turn discovery into a guided path through cards, tags, and related links.

### Color philosophy

Deep blue `#140D91` is the identity anchor for navigation, hero panels, and high trust areas. Bright blue `#0269E0` marks action and movement. Orange `#E3832E` is reserved for attention cues and selected programme markers. Green `#00CE38` signals an approved or positive state only when a real status exists. Dark `#0F1219` supports text and footer contrast. White and pale blue neutrals create breathing room around the saturated brand colors.

### Layout paradigm

Use an editorial split layout with a left narrative rail and a right decision surface. On the homepage this creates a clear story beside the next action. On catalogue pages the same rhythm becomes a filter rail and result area. Avoid repetitive centered blocks by allowing colored bands, inset cards, and asymmetric hero compositions.

### Signature elements

* Fine orbital lines and constellation dots used as CSS decoration only, never as a substitute for labels.
* Small status markers that distinguish verified information from details awaiting approval.
* Deep blue panels with soft pale blue surfaces and bright blue action buttons.

### Interaction philosophy

Interactions should reduce uncertainty. Filters preserve the user's intent, cards expose useful comparison details, and forms explain what happens after submission. Focus styles are visible, touch targets are generous, and motion is short and optional.

### Animation

Use small upward reveals for section content, gentle card lift on hover, and a slow opacity drift for decorative constellation lines. Disable nonessential motion under `prefers-reduced-motion`. Never animate form confirmation, error text, or focus indicators in a way that delays comprehension.

### Typography system

Use Prompt as the primary typeface, with system sans serif fallbacks. Major headings use bold weight with tight line height. Section headings use semibold weight. Navigation and buttons use medium weight. Body copy uses regular weight with comfortable line height. Headings use sentence case and avoid dash characters in public copy.

### Brand essence

La Grande Galaxie helps people build practical skills and helps organizations move important digital and knowledge work forward. Personality: clear, capable, grounded.

### Brand voice

Headlines are direct and useful. CTAs describe the next step instead of making a promise. Example lines: “Build a skill you can use.” and “Bring your next project into focus.”

### Wordmark and logo

Use the supplied official vertical black logo as an image asset on white surfaces. Preserve its proportions. Do not redraw, stretch, recolor, or crop it. Dark sections place the logo inside a white logo plate so the supplied variation remains unchanged.

### Signature brand color

Deep blue `#140D91` is the ownable signature color. It connects the original logo guideline to the website's navigation, hero, and major trust moments.

## Technical structure

* `app/` route segments, metadata, server rendered page content, and API boundary if enabled later.
* `components/` shared header, footer, cards, pills, accordions, forms, and catalogue controls.
* `lib/content.ts` verified content models, programme data, service data, and research status labels.
* `public/` route manifest and local metadata assets. The supplied logo is stored through Manus project storage.
* `styles/` global design tokens and responsive CSS.
* `docs/` can be added later if the project grows, but the current research and delivery documents stay at the root for easy review.

## Implementation sequence

1. Create the design tokens, global layout, logo use, navigation, and route manifest.
2. Implement the homepage with dual pathways, verified service cards, catalogue preview, evidence status, resources, FAQ, and conversion section.
3. Implement training catalogue, programme templates, search, filters, and registration flow.
4. Implement services, service detail templates, business enquiry flow, About, Resources, FAQ, Contact, and legal drafts.
5. Add route metadata, sitemap, robots behavior, structured data for visible content, and canonical handling without guessing a production origin.
6. Run TypeScript and build checks, start Preview, inspect representative desktop and mobile routes, and record only tests actually completed.
7. Commit a checkpoint. Do not publish or change the live domain without explicit authorization.

## Open approvals

The business still needs to confirm the legal identity, current operating address, preferred public name, service area, current programme list, programme dates, fees, delivery channels, credentials, team profiles, testimonials, payment terms, refund policy, data retention policy, and whether a CMS is needed. These are documented rather than guessed.
