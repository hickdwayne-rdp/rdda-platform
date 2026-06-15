import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const values = [
  "Respectful communication",
  "Family-aware language",
  "Community clarity",
  "Appropriate public boundaries",
];

const categories = [
  "Community organizations",
  "Family-serving supports",
  "Professional and local networks",
  "Education and public awareness groups",
];

const boundaries = [
  "This page is not a directory, listing, application, referral path, intake path, booking tool, or scheduling tool.",
  "This page does not create accounts, save records, manage approvals, rank partners, collect submissions, or automate communication.",
  "This route does not use CMS content, database records, API logic, forms, client state, effects, dynamic routing, or client component behavior.",
];

export default function PartnersPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Partners
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Community partnerships grounded in clarity and respect.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association values public community connection
                across Central Alberta. This page explains partnership as broad
                relationship orientation, public education, and respectful
                communication without creating a transactional website workflow.
              </p>
            </div>
          </section>

          <SectionCard>
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Partnership orientation
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Partnership as community understanding
              </h2>
              <p className="leading-7 text-muted-foreground">
                RDDA frames partnership as respectful connection, shared public
                understanding, and awareness of family support language. The page
                is informational only and does not approve partners, manage
                referrals, coordinate cases, or operate a partner workflow.
              </p>
            </div>
          </SectionCard>

          <section className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Relationship values
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Values that guide community connection
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {values.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Broad partner categories
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Public relationships can take many forms
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {categories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Ways to connect
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Public education first
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Community partners may connect with RDDA&apos;s public role through
                  shared awareness, clearer communication, and respectful local
                  understanding. This page keeps those conversations broad,
                  non-urgent, and boundary-aware.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Communication expectations
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Clear, respectful, and non-transactional
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Partnership language should focus on general public education,
                  community awareness, and respectful alignment. It should not
                  imply endorsement, placement, approval, referral outcomes,
                  status tracking, or service matching.
                </p>
              </div>
            </SectionCard>
          </section>

          <section className="space-y-6">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Appropriate-use boundaries
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does not do
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {boundaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Community clarity
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Clear public information supports respectful connection
                </h2>
                <p className="leading-7 text-muted-foreground">
                  A careful partners page helps community members understand how
                  RDDA speaks about partnership, public education, and local
                  connection while preserving the approved static website
                  architecture and appropriate public boundaries.
                </p>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
