import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const profileUpdateSteps = [
  "Member reviews the current public directory profile.",
  "Member prepares updated practice details, service categories, image, links, and public wording.",
  "RDDA reviews submitted changes before they are published.",
  "Approved updates are added to the public doula directory.",
  "Older or unapproved information is not displayed as confirmed profile content."
];

const profileFields = [
  "Name and business name",
  "Approved service categories",
  "Short biography or public profile summary",
  "Website and social links",
  "Profile image or logo",
  "Service area and contact preferences"
];

export default function ProfileUpdatesPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Profile updates
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  A future review pathway for member profile changes.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  This page explains how RDDA could handle profile update
                  requests without turning on self-editing, account access,
                  file uploads, database changes, or automatic publishing. Public
                  directory changes should remain reviewed before publication.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/doulas"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                  style={{
                    background: "var(--primary)",
                    color: "var(--surface)"
                  }}
                >
                  View doula directory
                </Link>
                <Link
                  href="/member-portal"
                  className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Member portal planning
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Review workflow
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Profile changes should be reviewed
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {profileUpdateSteps.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Possible fields
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Information members may need to keep current
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profileFields.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
