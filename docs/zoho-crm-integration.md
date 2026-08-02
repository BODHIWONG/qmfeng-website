# Native Zoho CRM Consultation Integration

## Scope

This integration applies to website consultation enquiries only. The existing course registration, PayNow and course-email workflow remains separate.

The website does not create a new CRM pipeline or module. It writes to the existing Zoho CRM module configured through `ZOHO_CRM_MODULE_API_NAME` and uses existing field API names, layouts, ownership rules, workflow automation and lead assignment rules.

## Server-Side Architecture

1. The browser submits the minimum enquiry fields to `POST /api/contact`.
2. The Next.js route validates and sanitises the payload, applies a honeypot, short-term rate limiting and idempotency protection.
3. Lead source is derived from UTM parameters, Google click identifiers, referrer information or a controlled supported source value.
4. The server searches the configured Zoho module for an exact email or phone match.
5. An existing record is updated; otherwise a new record is created.
6. Zoho OAuth credentials and tokens remain server-side environment variables.
7. When Zoho is not configured, the current consultation webhook remains available as a temporary production-safe fallback.

## Zoho OAuth Setup

Create or use a server-based Zoho OAuth client for the existing CRM organisation and data centre.

The runtime integration requires permission to:

- read/search records in the configured existing module;
- create records in that module;
- update records in that module.

Use the narrowest module-specific scopes available. Do not place the client secret or refresh token in browser-visible variables.

Configure:

- `ZOHO_ACCOUNTS_URL`
- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`
- `ZOHO_CRM_API_VERSION`

The access token is refreshed and cached by the server. It is never sent to the browser.

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

If the existing module has mandatory fields that are not appropriate to collect from a first enquiry, provide safe existing CRM defaults through `ZOHO_CRM_STATIC_FIELDS_JSON`. Confirm those defaults with the CRM owner before production use.

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

Configure `ZOHO_CRM_LEAD_SOURCE_MAP_JSON` so each website value maps to the exact existing Zoho picklist value. Do not create a second lead-source field solely for this integration.

## Ownership, Workflow and Assignment

The integration does not hard-code an owner and does not create a duplicate pipeline.

To use an existing lead assignment rule, configure:

- `ZOHO_CRM_ASSIGNMENT_RULE_ID`

To use a specific existing layout, configure:

- `ZOHO_CRM_LAYOUT_ID`

Confirm that the selected module, layout and assignment rule preserve the current CRM ownership model and automation. Test with a non-production or clearly labelled website test record before enabling live traffic.

## Duplicate Handling

The website prevents rapid duplicate browser submissions through an idempotency key and an in-flight request guard.

Zoho duplicate handling searches the configured module by email and phone and exact-compares the returned values. A matching record is updated with a new enquiry block rather than creating a duplicate record.

This behaviour should be reviewed against the existing CRM policy. If the organisation intentionally creates separate records for repeat enquiries, the update policy can be changed without modifying the form component.

## Production Rollout

1. Confirm the existing Zoho module, mandatory fields and field API names.
2. Confirm exact lead-source picklist values.
3. Confirm the existing layout and assignment rule IDs, when applicable.
4. Create the OAuth refresh token with minimum required scopes.
5. Add all secrets to Vercel server-side environment variables.
6. Add `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO` only after the form conversion action exists in Google Ads.
7. deploy to Preview and submit labelled test enquiries.
8. Verify create, duplicate update, assignment, workflow execution and owner.
9. Promote the same reviewed environment mapping to Production.
10. Remove the webhook fallback only after Zoho delivery has been stable and monitored.

## Security Notes

- Never commit real OAuth credentials or tokens.
- Never prefix Zoho secrets with `NEXT_PUBLIC_`.
- Do not log names, phone numbers, email addresses or messages.
- Rotate the refresh token if it is exposed.
- Keep preview and production credentials separate where possible.
