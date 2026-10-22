# Conversion and Analytics Handoff

## Conversion journeys

Learner journey: Home → Training → programme detail → registration interest → prepared WhatsApp message → visitor presses Send.

Business journey: Home or Services → service detail → scope and deliverables → Contact form → prepared WhatsApp service message → visitor presses Send.

Team training journey: Home → Contact → Corporate training → describe audience, skill need, format, participant count, and practical result → prepared WhatsApp message → visitor presses Send.

Programme question journey: Home or Training → programme detail → Ask About This Programme → prefilled programme enquiry → prepared WhatsApp message.

Resource journey: Home or Resources → complete guide → related training or service action.

Research writing journey: Service detail → academic integrity boundary → appropriate support enquiry.

## Current implementation

The homepage exposes separate learner and business actions. Every programme page links to registration and programme enquiry. Service pages prefill the service enquiry form. Resource cards open complete article pages. Contact and Registration forms validate required fields, preserve selected programme or service context, encode the message, open WhatsApp or WhatsApp Web, and tell the visitor to press Send. No form values are sent to analytics and no false delivery confirmation is shown.

## Recommended events

* `catalogue_search`
* `catalogue_filter`
* `programme_detail_view`
* `training_registration_prepare`
* `service_enquiry_prepare`
* `corporate_training_prepare`
* `programme_enquiry_prepare`
* `general_enquiry_prepare`
* `whatsapp_click`
* `phone_click`
* `resource_view`

The form components push only event names to `window.dataLayer` when a real analytics layer is present. A production analytics property, consent mechanism, ownership, and retention rules still need configuration.

## Success measures

Use qualified WhatsApp enquiries, completed registration messages, confirmed training places, booked consultations, phone clicks, useful catalogue searches, filters, programme views, and related programme interactions. Do not report traffic or conversions as operational until the relevant integration is connected and tested.
