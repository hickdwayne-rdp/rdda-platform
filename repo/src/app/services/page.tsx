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
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              RDDA Services
            </p>

            <div className="max-w-3xl space-y-5">
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
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Pregnancy and birth support
                </h2>

                <p className="leading-7 text-muted-foreground">
                  Doula support may include preparation, comfort measures,
                  encouragement, information, and continuous non-medical support
                  before and during birth.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Postpartum and family support
                </h2>

                <p className="leading-7 text-muted-foreground">
                  Postpartum doula support may help families during the early
                  transition after birth through practical care, reassurance,
                  education, and connection to appropriate community resources.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Fertility, loss, and lifecycle care
                </h2>

                <p className="leading-7 text-muted-foreground">
                  Doula care can support families through a range of reproductive
                  and family experiences, including fertility journeys, pregnancy
                  loss, birth, postpartum transition, and related lifecycle
                  needs.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Doula and community connection
                </h2>

                <p className="leading-7 text-muted-foreground">
                  RDDA supports connection, education, and awareness among
                  doulas, families, and community partners while keeping public
                  information clear, static, and accessible.
                </p>
              </div>
            </SectionCard>
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
              {lifecycleServiceAreas.map((serviceArea) => (
                <Link
                  key={serviceArea.href}
                  href={serviceArea.href}
                  className="block rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <h3 className="text-lg font-semibold">{serviceArea.label}</h3>

                  <p
                    className="mt-4 text-sm font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    Learn more
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionCard>
              <div className="max-w-3xl space-y-4">
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
            </SectionCard>
          </section>
        </div>
      </PageContainer>
    </PageShell>
  );
}
