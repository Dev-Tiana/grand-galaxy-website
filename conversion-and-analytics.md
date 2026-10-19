# Conversion and Analytics Handoff

## Conversion journeys

Learner journey: Home → Training → programme detail → ask for current details → registration interest → contact or approved enrolment path.

Business journey: Home or Services → service detail → scope and evidence review → contact form → consultation or proposal.

Team training journey: Home → Contact → describe audience, skill need, format, and practical result → follow up after current delivery and pricing are confirmed.

Research writing journey: Service detail → academic integrity boundary → appropriate support enquiry.

## Current implementation

The homepage exposes separate learner and business actions. Programme pages link to registration. Service pages link to contact. The Contact and Registration forms validate required fields and show local confirmation states. The Preview does not send email, store personal data, or process payments.

## Recommended events

* `catalogue_search`
* `catalogue_filter`
* `programme_detail_view`
* `training_registration_start`
* `training_registration_submit`
* `service_enquiry_submit`
* `phone_click`
* `whatsapp_click`
* `resource_view`

The current form components push submit event names to `window.dataLayer` when a real analytics layer is present. A production analytics property, consent mechanism, ownership, and retention rules still need configuration.

## Success measures

Use qualified enquiries, completed registrations, confirmed training places, booked consultations, phone clicks, WhatsApp clicks, and useful catalogue interactions. Do not report traffic or conversions as operational until the relevant integration is connected and tested.
