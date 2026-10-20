# Conversion and Analytics Handoff

## Conversion journeys

Learner journey: Home → Training → programme detail → registration interest → email draft to the approved Grand Galaxy address.

Business journey: Home or Services → service detail → scope and deliverables → Contact form → email draft to the approved Grand Galaxy address.

Team training journey: Home → Contact → describe audience, skill need, format, and practical result → email draft for follow up.

Resource journey: Home or Resources → complete guide → related training or service action.

Research writing journey: Service detail → academic integrity boundary → appropriate support enquiry.

## Current implementation

The homepage exposes separate learner and business actions. Programme pages link to registration. Service pages link to contact. Resource cards open complete article pages. The Contact and Registration forms validate required fields, use a honeypot field, create a mail draft addressed to `info@grandgalaxy.ng`, and show a confirmation state asking the visitor to send the email.

## Recommended events

* `catalogue_search`
* `catalogue_filter`
* `programme_detail_view`
* `training_registration_start`
* `training_registration_submit`
* `service_enquiry_start`
* `service_enquiry_submit`
* `email_draft_open`
* `phone_click`
* `whatsapp_click`
* `resource_view`

The form components push submit event names to `window.dataLayer` when a real analytics layer is present. A production analytics property, consent mechanism, ownership, and retention rules still need configuration.

## Success measures

Use qualified enquiries, completed registration enquiries, confirmed training places, booked consultations, email draft opens, phone clicks, WhatsApp clicks, and useful catalogue interactions. Do not report traffic or conversions as operational until the relevant integration is connected and tested.
