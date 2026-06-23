import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const paymentPlanningItems = [
  "Confirm the payment provider RDDA wants to use.",
  "Confirm which membership fees can be paid online.",
  "Confirm receipt wording, finance records, and administrator access.",
  "Confirm privacy, refund, and support language before launch.",
  "Confirm how payment status connects to membership approval."
];

const feeSummary = [
  {
    title: "Active membership",
    fee: "$75 per year",
    description:
      "Active membership fees should only be collected online after RDDA confirms approval and payment workflow rules."
  },
  {
    title: "Associate membership",
    fee: "$50 per year",
    description:
      "Associate membership payment handling should match RDDA's approved membership process and finance requirements."
  }
];

export default function PaymentsPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Payment planning
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Future online payment planning for RDDA membership.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  This page records payment workflow considerations without
                  activating checkout, collecting card information, creating
                  invoices, processing fees, storing financial records, or
                  connecting to a payment provider. Online payments should only
                  launch after RDDA confirms the operational and financial rules.
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
                  href="/member-portal"
                  className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Member portal planning
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {feeSummary.map((item) => (
              <SectionCard key={item.title} className="h-full">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.fee}
                  </p>
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
                  Before checkout
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Payment details to confirm before launch
                </h2>
              </div>
              <ul className="space-y-3 leading-7 text-muted-foreground">
                {paymentPlanningItems.map((item) => (
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
