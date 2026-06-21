import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const resourceCategories = [
  {
    label: "Pregnancy and birth",
    title: "Pregnancy and birth support",
    description:
      "Resource awareness can help families think about emotional, physical, practical, and informational support needs before birth, during birth, and around care conversations with qualified providers.",
  },
  {
    label: "Postpartum and newborn",
    title: "Postpartum and newborn support",
    description:
      "Postpartum resource information may include broad awareness of recovery, feeding, newborn care, household adjustment, rest, relationship changes, and support planning after birth.",
  },
  {
    label: "Loss and transitions",
    title: "Loss, grief, and family transitions",
    description:
      "Support needs may involve pregnancy loss, infant loss, fertility experiences, adoption, surrogacy, separation, and other family transitions where compassionate care and qualified support may be important.",
  },
  {
    label: "Doula connection",
    title: "Doula learning and professional connection",
    description:
      "Doulas may use resource awareness to strengthen community-aware language, understand support boundaries, and communicate more clearly with families and community partners.",
  },
  {
    label: "Community supports",
    title: "Community and practical supports",
    description:
      "Families and support people may benefit from understanding broad categories of community help, including practical, social, educational, cultural, and family-centred supports.",
  },
  {
    label: "Health and safety",
    title: "Health, safety, and urgent needs",
    description:
      "Urgent, emergency, medical, mental health, legal, or safety concerns should be directed to appropriate qualified services or emergency supports rather than relying on a static information page.",
  },
];

const resourceUseGuidance = [
  "Use the categories as starting points for questions, conversations, and support planning.",
  "Confirm current details directly with qualified providers or organizations when up-to-date information matters.",
  "Seek appropriate medical, legal, counselling, emergency, or crisis support when needs are urgent, clinical, legal, or safety-related.",
  "Treat this page as general public education, not as personalized direction or a verified list of available services.",
];

const resourceAudiences = [
  "Families exploring support options across pregnancy, birth, postpartum, loss, and family transitions.",
  "Doulas looking for community-aware language and clearer support-category awareness.",
  "Community partners wanting to understand doula-adjacent support needs.",
  "People learning how different supports may fit together around family wellbeing.",
];

const staticBoundaries = [
  "This page is not a searchable database, live directory, or live listing of agencies.",
  "This page does not provide referrals, intake, eligibility screening, booking, enrollment, or account features.",
  "This page does not provide crisis response, emergency dispatch, medical triage, clinical assessment, counselling, or legal advice.",
  "This page does not verify live availability, suitability, current service details, or comprehensive resource coverage.",
];

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Resources
                </p>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Resources for understanding support options.
                  </h1>

                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    Red Deer Doula Association shares resource information as
                    general education and support-navigation awareness for
                    families, doulas, and community members across Central
                    Alberta. This page introduces broad support categories
                    without becoming a live directory, referral pathway, intake
                    system, or crisis-response tool.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Static guide
                </p>
                <p className="mt-3 text-3xl font-semibold text-primary">6</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Broad resource categories presented as public education, not a
                  live directory.
                </p>
              </div>
            </div>
          </section>

          <SectionCard>
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Resource awareness
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  A starting point for resource awareness
                </h2>
              </div>
              <p className="leading-7 text-muted-foreground">
                Resource needs may differ across pregnancy, birth, postpartum,
                loss, adoption, surrogacy, fertility experiences, family
                transitions, and doula practice. This page helps visitors think
                through broad support categories while avoiding assessment,
                diagnosis, eligibility screening, or personalized direction.
              </p>
            </div>
          </SectionCard>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((item, index) => (
              <SectionCard key={item.title} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.label}
                    </p>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h2>
                    <p className="leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Thoughtful use
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Using resource information thoughtfully
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Resource information can help people identify questions,
                  clarify support needs, and understand broad types of help. It
                  should be used alongside current information from qualified
                  providers and organizations when specific decisions are needed.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Guidance points
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Helpful ways to use this page
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {resourceUseGuidance.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Supported audiences
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Who this resource page may support
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This static page is written for people who want clearer
                  language around support categories, community care,
                  doula-adjacent needs, and broader family wellbeing.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Public orientation
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Broad audiences only
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {resourceAudiences.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>

          <section className="space-y-6">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Informational only
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does not do
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {staticBoundaries.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Community navigation
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Support awareness as part of community care
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Understanding support categories can help families, doulas, and
                  community partners communicate more clearly. This page provides
                  a static foundation for resource awareness as part of RDDA&apos;s
                  public education role, not a live resource platform.
                </p>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
