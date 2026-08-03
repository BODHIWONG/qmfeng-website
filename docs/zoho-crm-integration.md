# Native Zoho CRM Consultation Integration

## Scope

This integration applies to website consultation enquiries submitted through `POST /api/contact`. Course registration remains a separate workflow. No membership-system work is included.

The confirmed CRM module is the standard `Leads` module:

```env
ZOHO_CRM_MODULE_API_NAME=Leads
```

The application does not create a custom module, pipeline, custom field, owner or workflow.

## Standard Field Mapping

The supported standard defaults are:

- `name` → `Last_Name`
- `phone` → `Phone`
- `email` → `Email`
- `message` → `Description`
- `leadSource` → `Lead_Source`

Custom mappings for consultation type, submission ID and page URL remain blank until their real Zoho API names are confirmed.

New Leads may optionally receive a default Company value through Vercel configuration:

```env
ZOHO_CRM_STATIC_FIELDS_JSON={"Company":"Website Enquiry"}
```

This is not hard-coded. Static fields are applied only to newly created Leads and never overwrite Company on existing records.

## Required Preview Environment Variables

Add these to the Vercel **Preview** environment, not GitHub:

```env
ZOHO_ACCOUNTS_URL=https://accounts.zoho.com
ZOHO_API_DOMAIN=https://www.zohoapis.com
ZOHO_CLIENT_ID=
ZOHO_CLIENT_SECRET=
ZOHO_REFRESH_TOKEN=
ZOHO_CRM_API_VERSION=v8
ZOHO_CRM_MODULE_API_NAME=Leads
ZOHO_CRM_FIELD_MAP_JSON={"name":"Last_Name","phone":"Phone","email":"Email","message":"Description","leadSource":"Lead_Source","consultationType":"","submissionId":"","pageUrl":""}
ZOHO_CRM_LEAD_SOURCE_MAP_JSON={"Google Ads":"Google Ads","Organic Search":"Organic Search","Website":"Website","Facebook":"Facebook","Instagram":"Instagram","TikTok":"TikTok","LinkedIn":"LinkedIn","Referral":"Referral","Walk-in":"Walk-in","Existing Client":"Existing Client","Other":"Other"}
ZOHO_CRM_STATIC_FIELDS_JSON={}
```

Optional Preview variables:

```env
ZOHO_CRM_LAYOUT_ID=
ZOHO_CRM_ASSIGNMENT_RULE_ID=
ZOHO_CRM_TRIGGERS_JSON=
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION_SEND_TO=
QIMEN_LEADS_WEBHOOK_URL=
APPOINTMENT_WEBHOOK_URL=
```

`QIMEN_LEADS_WEBHOOK_URL` and `APPOINTMENT_WEBHOOK_URL` are temporary fallbacks only. A configured fallback must use HTTPS and accept JSON POST requests.

## OAuth Scopes

Use a server-based Zoho OAuth client with the narrowest required scopes:

```text
ZohoCRM.modules.leads.READ
ZohoCRM.modules.leads.CREATE
ZohoCRM.modules.leads.UPDATE
ZohoSearch.securesearch.READ
```

The OAuth user must also have permission to read, create and update Leads in the target CRM organisation. Accounts and API domains must match the organisation's Zoho data centre.

Never add the client secret or refresh token to `NEXT_PUBLIC_*`, source code, GitHub Actions variables, PR descriptions or repository files.

## Request and Credential Security

- Zoho credentials are imported through server-only modules.
- OAuth and CRM requests use an eight-second timeout.
- A 401 response causes one access-token refresh.
- Only safe GET searches retry on 429 or transient 5xx responses.
- POST and PUT writes are not automatically replayed on transient failures.
- Consultation and course fallback webhooks use HTTPS JSON POST only.
- Customer names, phone numbers, email addresses and messages are not written to application logs or URL query strings.
- Browser-facing responses never contain Zoho record IDs.

## Duplicate Policy

The integration uses a conservative identity policy:

1. If email and phone resolve to the same Lead, append the new enquiry to that Lead.
2. If only one identifier matches and the other submitted identifier conflicts with a non-empty CRM value, do not update that Lead.
3. If email and phone resolve to different Leads, do not auto-merge.
4. Ambiguous matches create a separate Lead whose Description states that manual identity review is required.
5. Existing name, phone, email, Company and original Lead Source are not overwritten.

This approach prioritises confidentiality over automatic merging. It can still create duplicates. CRM staff must manually review conflict-marked Leads.

## Attribution

The browser stores first-touch attribution on initial page load and carries it through internal navigation. The submitted record includes:

- UTM source, medium, campaign, term and content;
- `gclid`, `gbraid` and `wbraid`;
- first referrer;
- first landing page;
- current submission page and referrer.

Public URL parameters cannot assign `Walk-in` or `Existing Client`.

Attribution storage is best-effort. Browsers that block local storage may not preserve attribution across multiple pages.

## Preview Test Procedure

1. Configure Preview environment variables without placing secrets in GitHub.
2. Deploy PR #44 to a Vercel Preview.
3. Submit a labelled new Lead using a unique email and phone.
4. Confirm standard fields, optional Company default, Lead Source and Description.
5. Repeat with the same email and phone and confirm the same Lead is updated.
6. Test matching email with a conflicting phone and confirm a separate manual-review Lead.
7. Test matching phone with a conflicting email and confirm a separate manual-review Lead.
8. Test email and phone that resolve to different Leads and confirm no auto-merge.
9. Test a Google Ads-style landing URL and confirm first-touch attribution survives navigation to Contact.
10. Verify success-page analytics with browser developer tools and Google Tag Assistant.

## Known Limitations

- No real Zoho create/update test is performed by CI.
- Zoho search indexing can be delayed.
- Rate limiting and short-term idempotency are instance-local.
- Conflict handling may create duplicate Leads for manual review.
- No custom-field API names are assumed.
- Google Ads conversion delivery requires a real Preview and Tag Assistant verification.
- The fallback webhook remains temporary and should be removed after stable native Zoho operation.
