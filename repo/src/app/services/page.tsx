import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

type LifecycleServiceArea = {
  label: string;
  href: string;
};

const lifecycleServiceAreas: LifecycleServiceArea[] = [
  { label: "Pregnancy & birth support", href: "/birth" },
  { label: "Postpartum support", href: "/postpartum" },
  { label: "Fertility & preconception support", href: "/fertility" },
  { label: "Pregnancy and infant loss support", href: "/loss" },
  { label: "Family transitions", href: "/family-transitions" },
  { label: "End-of-life and grief support", href: "/end-of-life-grief" },
];

const servicePillars = [
  {
    title: "Pregnancy and birth support",
    description:
      "Doula support may include preparation, comfort measures, encouragement, information, and continuous non-medical support before and during birth.",
  },
  {
    title: "Postpartum and family support",
    description:
      "Postpartum doula support may help families during the early transition after birth through practical care, reassurance, education, and connection to appropriate community resources.",
  },
  {
    title: "Fertility, loss, and lifecycle care",
    description:
      "Doula care can support families through a range of reproductive and family experiences, including fertility journeys, pregnancy loss, birth, postpartum transition, and related lifecycle needs.",
  },
  {
    title: "Doula and community connection",
    description:
      "RDDA supports connection, education, and awareness among doulas, families, and community partners while keeping public information clear, static, and accessible.",
  },
];

export const metadata = {
  title: "Services | Red Deer Doula Association",
  description:
    "Explore source-aligned doula support areas recognized by the Red Deer Doula Association for families, doulas, and community members in Central Alberta.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageContainer>
        <div className="space-y-12 py-16 sm:py-20">
          <section
            className="rounded-[2rem] border px-6 py-10 shadow-sm sm:px-8 lg:px-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(63, 92, 88, 0.12), rgba(251, 250, 248, 0.98) 48%, rgba(187, 199, 196, 0.46))",
              borderColor: "var(--border)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end">
              <div className="max-w-3xl space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  RDDA Services
                </p>

                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Doula support for families, doulas, and community care.
                </h1>

                <p className="text-lg leading-8 text-muted-foreground">
                  The Red Deer Doula Association recognizes the value of
                  non-medical emotional, physical, informational, and practical
                  support across reproductive, birth, postpartum, and family care
                  experiences in Central Alberta.
                </p>
              </div>

              <div
                className="rounded-3xl border p-5 shadow-sm"
                style={{
                  background: "rgba(251, 250, 248, 0.84)",
                  borderColor: "rgba(129, 151, 149, 0.42)",
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Support model
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Static information, clear support categories, and source-aligned
                  descriptions without clinical, booking, or referral workflows.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {servicePillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-3xl border p-6 shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{
                      background:
                        index === 2 ? "var(--secondary)" : "var(--primary)",
                    }}
                  >
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {pillar.title}
                  </h2>
                </div>
                <p className="leading-7 text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </section>

          <section
            className="space-y-6"
            aria-labelledby="lifecycle-service-areas-heading"
          >
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Lifecycle service areas
              </p>

              <h2
                id="lifecycle-service-areas-heading"
                className="text-3xl font-semibold tracking-tight text-foreground"
              >
                Explore support across specific life stages.
              </h2>

              <p className="leading-7 text-muted-foreground">
                These static pages provide more detail about RDDA-recognized
                support areas while keeping information general, non-medical,
                and source-aligned.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lifecycleServiceAreas.map((serviceArea, index) => (
                <Link
                  key={serviceArea.href}
                  href={serviceArea.href}
                  className="group block rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                      style={{
                        background:
                          index === 2 || index === 5
                            ? "var(--secondary)"
                            : "var(--primary)",
                      }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {serviceArea.label}
                      </h3>

                      <p
                        className="mt-4 text-sm font-semibold transition group-hover:translate-x-1"
                        style={{ color: "var(--primary)" }}
                      >
                        Learn more
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionCard>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] lg:items-center">
                <div className="max-w-3xl space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Support boundary
                  </p>
                  <h2 className="text-2xl font-semibold text-foreground">
                    A non-medical support role
                  </h2>

                  <p className="leading-7 text-muted-foreground">
                    Doula support does not replace medical care. Doulas provide
                    supportive, educational, and practical assistance while
                    families continue to receive clinical care from qualified
                    health-care providers.
                  </p>
                </div>
                <div
                  className="rounded-2xl border px-5 py-4 text-sm font-semibold leading-6"
                  style={{
                    background: "rgba(187, 199, 196, 0.26)",
                    borderColor: "rgba(129, 151, 149, 0.42)",
                    color: "var(--primary)",
                  }}
                >
                  Informational, static, and aligned with public-service content
                  boundaries.
                </div>
              </div>
            </SectionCard>
          </section>
        </div>
      </PageContainer>
    </PageShell>
  );
}
