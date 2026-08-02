# Native Zoho CRM Consultation Integration

## Scope

This integration applies to website consultation enquiries only. The existing course registration, PayNow and course-email workflow remains separate.

The website does not create a new CRM pipeline or module. It writes to the existing Zoho CRM module configured through `ZOHO_CRM_MODULE_API_NAME` and uses existing field API names, layouts, ownership rules, workflow automation and lead assignment rules.

## Server-Side Architecture

1. The browser submits the minimum enquiry fields to `POST /api/contact`.
2. The Next.js route validates and sanitises the payload, applies a honeypot, short-term rate limiting and idempotency protection.
3. First-touch campaign attribution is retained across internal navigation and submitted with the current form page.
4. Lead source is derived from UTM parameters, Google click identifiers, referrer information or a supported public source value.
5. The server searches the configured Zoho module before creating or updating a record.
6. Zoho OAuth credentials and tokens remain server-side environment variables.
7. When Zoho is not configured, the current consultation webhook remains available only as a temporary HTTPS POST fallback.

## Zoho OAuth Setup

Create or use a server-based Zoho OAuth client for the existing CRM organisation and data centre.

The runtime integration requires permission to:

- read records in the configured existing module;
- create records in that module;
- update records in that module;
- securely search CRM records using `ZohoSearch.securesearch.READ`.

Use the narrowest module-specific scopes available. Do not place the client secret or refresh token in browser-visible variables.

Configure:

- `ZOHO_ACCOUNTS_URL`
- `ZOHO_API_DOMAIN`
- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`
- `ZOHO_CRM_API_VERSION`

The Accounts and API domains must match the organisation's Zoho data centre. The access token is refreshed and cached by the server and is never sent to the browser.

## Existing CRM Module and Field Mapping

Before enabling Zoho in production, confirm the existing module and field API names in Zoho CRM.

Configure:

- `ZOHO_CRM_MODULE_API_NAME`
- `ZOHO_CRM_FIELD_MAP_JSON`
- `ZOHO_CRM_STATIC_FIELDS_JSON`

The standard field-map keys used by the website are:

- `name`
- `phone`
- `email`
- `message`
- `leadSource`
- `consultationType`
- `submissionId`
- `pageUrl`

Only `name`, `phone`, `email` and `message` have standard defaults. Optional custom fields are omitted when their mapping is blank.

If the existing module has mandatory fields that are not appropriate to collect from a first enquiry, provide safe existing CRM defaults through `ZOHO_CRM_STATIC_FIELDS_JSON`. Confirm those defaults with the CRM owner before production use. Static defaults, layout, name, phone, email and original lead source are applied only when a new record is created.

## Lead Source

The website supports:

- Google Ads
- Organic Search
- Website
- Facebook
- Instagram
- TikTok
- LinkedIn
- Referral
- Walk-in
- Existing Client
- Other

Configure `ZOHO_CRM_LEAD_SOURCE_MAP_JSON` so each website value maps to the exact existing Zoho picklist value. Public website parameters cannot assign the privileged `Walk-in` or `Existing Client` values; those should be confirmed by CRM staff or a future signed internal link.

Google click identifiers and UTM parameters are retained across internal navigation so a user who lands on a service page and later submits on `/contact` does not automatically lose Google Ads attribution.

## Ownership, Workflow and Assignment

The integration does not hard-code an owner and does not create a duplicate pipeline.

To use an existing lead assignment rule, configure `ZOHO_CRM_ASSIGNMENT_RULE_ID`.
To use a specific existing layout, configure `ZOHO_CRM_LAYOUT_ID`.

Zoho automation triggers are not hard-coded. Leave `ZOHO_CRM_TRIGGERS_JSON` unset to use the current Zoho API default behaviour, or configure a reviewed JSON array such as `["workflow"]` only after confirming the intended automation with the CRM owner.

## Duplicate Handling

The website prevents rapid duplicate browser submissions through an idempotency key and an in-flight request guard. This protection is instance-local and is not a substitute for a Zoho unique/external-ID field or durable cross-instance idempotency.

Before production use, define the CRM identity policy for conflicting phone and email matches. Shared phone numbers, shared inboxes and recycled numbers must not cause confidential enquiry text to be appended to the wrong person. The preferred future design is an append-only Zoho Note or Enquiry record with a unique website submission reference.

## Request Resilience

Zoho OAuth and CRM calls use strict request timeouts. Expired access tokens are refreshed once after a 401 response. Read-only searches use limited retry and backoff for temporary 429 and server errors. Write requests are not automatically replayed after ambiguous transient failures because doing so could create duplicate CRM records.

## Production Rollout

1. Confirm the existing Zoho module, mandatory fields and field API names.
2. Confirm exact lead-source picklist values.
3. Confirm the existing layout and assignment rule IDs, when applicable.
4. Confirm whether explicit automation triggers are required.
5. Create the OAuth refresh token with module scopes and `ZohoSearch.securesearch.READ`.
6. Add all secrets to Vercel Preview server-side environment variables.
7. Add `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO` only after the form conversion action exists in Google Ads.
8. Deploy to Preview and submit clearly labelled test enquiries.
9. Verify create, duplicate behavior, assignment, workflow execution, owner, layout and field values.
10. Test conflicting phone/email records and repeat enquiries before Production.
11. Promote the same reviewed environment mapping to Production.
12. Remove the webhook fallback only after Zoho delivery has been stable and monitored.

## Security Notes

- Never commit real OAuth credentials or tokens.
- Never prefix Zoho secrets with `NEXT_PUBLIC_`.
- Do not log names, phone numbers, email addresses or messages.
- Do not transmit personal or payment information in URL query strings.
- Rotate the refresh token if it is exposed.
- Keep Preview and Production credentials separate where possible.
