import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const supportPoints = [
  "Support may connect more than one family experience instead of sitting inside only one service category.",
  "Care may include preparation, comfort, information, presence, transition support, advocacy awareness, and connection to appropriate resources.",
  "The role remains non-medical and does not replace clinical care, counselling, legal advice, crisis support, or emergency services.",
  "Each public doula profile should still reflect confirmed services, training, scope, and approved RDDA listing details."
];

const relatedPages = [
  { label: "Birth support", href: "/birth" },
  { label: "Postpartum support", href: "/postpartum" },
  { label: "Fertility support", href: "/fertility" },
  { label: "Loss support", href: "/loss" },
  { label: "Family transitions", href: "/family-transitions" },
  { label: "End-of-life and grief", href: "/end-of-life-grief" }
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]";
const primaryButtonStyle = {
  background: "var(--primary)",
  color: "var(--surface)",
};

export const metadata = {
  title: "Full Spectrum Support | Red Deer Doula Association",
  description:
    "General public explanation of full spectrum doula-informed support across connected family and lifecycle experiences."
};

export default function FullSpectrumPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Full spectrum support
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Doula-informed support across connected life experiences.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    Full spectrum support is a broad public category for care
                    that may cross more than one service area. It can describe
                    non-medical support through fertility, pregnancy, birth,
                    postpartum, loss, family transition, grief, or end-of-life
                    experiences depending on each doula&apos;s training and approved
                    profile details.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/doulas" className={primaryButtonClass} style={primaryButtonStyle}>
                    Explore doula profiles
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Back to services
                  </Link>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Public scope
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  This page explains a support category only. It is not booking,
                  referral, intake, clinical screening, or professional advice.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  What it can mean
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Broad, connected, and still non-medical.
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {supportPoints.map((item) => (
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
                  Related service areas
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Explore connected support pages.
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                    >
                      {page.label}
                    </Link>
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
