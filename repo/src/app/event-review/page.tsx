import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const reviewSteps = [
  "RDDA confirms whether an event fits the association's public education or community role.",
  "Basic public details are checked before anything appears on the website.",
  "Approved event information is kept clear, current, and easy for visitors to understand.",
  "Outdated information should be removed or clearly updated.",
  "This static page does not collect event details or publish events automatically."
];

const eventPlanningDetails = [
  "Event title",
  "Date and time",
  "Location or online format",
  "Audience and purpose",
  "Public contact details",
  "Accessibility notes",
  "Review status"
];

export default function EventReviewPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Event review planning
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  A future review pathway for public RDDA events.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  This page outlines future event review needs without activating
                  a public form, registration tool, database workflow, or
                  automatic publishing. Public event information should be
                  reviewed before it appears on the RDDA website.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                  style={{
                    background: "var(--primary)",
                    color: "var(--surface)"
                  }}
                >
                  View events
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
                  Event information should be checked before publishing
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {reviewSteps.map((item) => (
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
                  Planning fields
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Details RDDA may need before publication
                </h2>
                <div className="flex flex-wrap gap-2">
                  {eventPlanningDetails.map((item) => (
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
