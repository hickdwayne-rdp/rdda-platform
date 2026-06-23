import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const portalAreas = [
  {
    title: "Member account access",
    description:
      "A future portal could give approved RDDA members a secure place to review association information, update member details, and access internal resources after authentication is added."
  },
  {
    title: "Profile update workflow",
    description:
      "Profile editing should use a reviewed workflow so public directory changes are checked before they appear on the website."
  },
  {
    title: "Event and update submissions",
    description:
      "A future submission pathway could let members suggest events, education sessions, or community updates for RDDA review before publication."
  },
  {
    title: "Membership payments",
    description:
      "Online payment handling should only be added after RDDA confirms the payment provider, fee rules, receipts, refunds, and privacy requirements."
  }
];

const launchRequirements = [
  "Confirm who can access the member portal and how membership status is verified.",
  "Choose an authentication provider and define password, account recovery, and admin access rules.",
  "Define which profile fields members may submit and which fields require RDDA approval.",
  "Confirm event submission review steps before anything is published publicly.",
  "Confirm payment provider, fee amounts, receipts, privacy language, and finance administration."
];

export default function MemberPortalPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Member portal
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Future member tools for RDDA.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    This page outlines future member portal possibilities without
                    activating login, member accounts, profile editing, event
                    submission forms, payment processing, private records, or
                    automated workflows. It keeps the public website clear while
                    RDDA confirms the right operational setup.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/membership"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                    style={{
                      background: "var(--primary)",
                      color: "var(--surface)"
                    }}
                  >
                    Membership information
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Ask a member question
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Status
                </p>
                <p className="mt-3 text-3xl font-semibold text-primary">
                  Planning
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  This is an informational placeholder. No portal access is
                  active from this static page.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {portalAreas.map((item) => (
              <SectionCard key={item.title} className="h-full">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </SectionCard>
            ))}
          </section>

          <SectionCard>
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Before launch
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What RDDA should confirm first
                </h2>
              </div>
              <ul className="space-y-3 leading-7 text-muted-foreground">
                {launchRequirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
