import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

export default function DoulasPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              For doulas
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Supporting doulas who support families across Central Alberta.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association supports doulas through connection,
                education, shared visibility, and community-centred collaboration.
                This page introduces how RDDA relates to doulas while keeping the
                route static, informational, and source-aligned.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Connection
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  A professional community
                </h2>
                <p className="leading-7 text-muted-foreground">
                  RDDA provides a place for doulas to connect with one another,
                  strengthen relationships, and participate in a broader community
                  of birth, postpartum, and lifecycle support professionals.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Learning
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Shared education and growth
                </h2>
                <p className="leading-7 text-muted-foreground">
                  The association supports continuing learning, shared knowledge,
                  and professional development opportunities that help doulas serve
                  families with care, clarity, and confidence.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Awareness
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Visibility without directory logic
                </h2>
                <p className="leading-7 text-muted-foreground">
                  RDDA helps the public understand the role of doulas and the value
                  of doula support. This static route does not include member
                  profiles, search, filtering, booking, matching, or application
                  workflows.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Collaboration
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Community-centred support
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Doulas are part of a wider support network for families and
                  communities. RDDA’s public site introduces that role without
                  adding dynamic systems, account features, CMS reads, or database
                  logic.
                </p>
              </div>
            </SectionCard>
          </section>

          <section className="space-y-6">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Static route scope
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  <li>Introduces RDDA’s relationship to doulas.</li>
                  <li>Uses only static, informational route content.</li>
                  <li>
                    Uses the existing PageShell, PageContainer, and SectionCard
                    primitives.
                  </li>
                  <li>Preserves the frozen homepage and existing public routes.</li>
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Deferred functionality
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does not do
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  <li>Does not create a doula directory.</li>
                  <li>
                    Does not include doula profiles, filtering, search, booking,
                    or matching.
                  </li>
                  <li>
                    Does not add forms, accounts, applications, authentication,
                    or API logic.
                  </li>
                  <li>
                    Does not read from Payload, Supabase, a CMS, or a database.
                  </li>
                </ul>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}