# Course registration email notifications

Course registrations are stored through the configured registration and/or lead webhook. Automatic email notifications use the Resend HTTP API and require the following Vercel environment variables:

- `RESEND_API_KEY`
- `COURSE_EMAIL_FROM` — for example `Qimen Strategy <registration@qmfeng.com>` after the domain is verified
- `COURSE_ADMIN_EMAIL` — defaults to `info@qmfeng.com`

When configured, each successful course registration sends:

1. An internal notification to the admin email.
2. A confirmation email to the registrant when an email address was supplied.

The API response reports storage and email delivery status separately. A registration may be stored successfully even when email delivery is unavailable, so the success page must not describe the seat as confirmed until payment has been verified in writing.
