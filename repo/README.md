This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## RDDA membership onboarding

Applications are collected through [RDDA's Jotform](https://form.jotform.com/93258823040253). An authorized reviewer verifies the submission, documents membership approval, confirms the required policies and onboarding paperwork, and checks the payment against RDDA's records. The dashboard uses the administrator's confirmations and records who made them.

### Configure application alerts

The Jotform owner opens form 93258823040253 in Form Builder and goes to **Settings → Emails**. Add or edit a **Notification Email**, set Stephanie's authorized RDDA mailbox as the recipient, and enable **When a Submission Is Received**. Use a generic subject and body asking the reviewer to sign in to Jotform Tables. Remove form fields, submission PDFs, and file attachments from the email. Keep the table private and grant reviewer access only to authorized accounts. Validate receipt with a synthetic submission and verify that it creates no website account. See [Jotform's notification settings](https://www.jotform.com/help/25-setting-up-email-notifications/).

### Invite an approved doula

1. Sign in to the website's **/admin** dashboard with an active Payload **Admin** account.
2. Under **Invite a doula**, open **Jotform submissions**. In Jotform Tables, use **Columns → Submission ID** to display the ID if needed.
3. Enter the applicant's name, verified email and submission ID. Confirm documented approval, completed policies and verified payment.
4. Select **Create account and generate link**. Copy the one-hour password setup link and send it privately to the verified applicant email. Ask the applicant to open it in their own browser session, set a password, and sign in.
5. If the email already exists, check **Users** before proceeding. If the setup link expires or is lost, contact the site's technical administrator for account recovery. This project has no production password recovery email adapter configured.

An invitation creates a **Doula** login with the existing CMS permissions for that role. Public directory profiles follow the separate CMS profile review and publishing workflow. Before rollout, verify Stephanie's existing role and status, the private Jotform table and alert, the dashboard action, password setup, and rejection of duplicate or unauthorized requests using test accounts in an isolated environment.
