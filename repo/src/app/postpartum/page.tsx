import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const postpartumSupportAreas = [
  {
    title: "Emotional support",
    description:
      "Calm presence, encouragement, reassurance, and steady support during the early transition after birth.",
  },
  {
    title: "Informational support",
    description:
      "Helping families organize questions and feel more prepared for conversations with their qualified care team.",
  },
  {
    title: "Practical support",
    description:
      "General, non-medical help that supports rest, household adjustment, and family routines, depending on the individual doula's services.",
  },
  {
    title: "Family-centred support",
    description:
      "Support that respects the family's needs, values, household context, culture, and chosen support people.",
  },
];

const earlyTransitionItems = [
  "Adjustment after birth can include rest needs, changing routines, practical tasks, and questions.",
  "Postpartum support can vary based on the family, doula, household, location, and circumstances.",
  "Health, recovery, baby-care, safety, or urgent concerns belong with qualified providers or appropriate local supports.",
];

const householdSupportItems = [
  "General organization that helps the household feel more supported during adjustment after birth.",
  "Rest-supportive routines and light practical help, depending on the individual doula's services and boundaries.",
  "Planning conversations about family needs, communication preferences, support people, and practical next steps.",
];

const familySupportItems = [
  {
    title: "Partners and support people",
    description:
      "Postpartum support may include helping partners, family members, or chosen support people understand practical ways to support the household.",
  },
  {
    title: "Household context",
    description:
      "Doulas may help create a steadier support environment through reassurance, practical presence, and general information.",
  },
];

const reflectionItems = [
  "What kind of support would feel steady, respectful, and useful after birth?",
  "What questions should be discussed directly with a qualified care provider or appropriate specialist?",
  "What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?",
];

export default function PostpartumPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div className="grid gap-8 p-7 md:grid-cols-[1.5fr_0.8fr] md:p-10">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Postpartum Support
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Non-medical doula support after birth.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  Red Deer Doula Association recognizes postpartum support as
                  steady emotional, informational, practical, and family-centred
                  support during the early transition after birth. This support
                  works alongside qualified health-care providers and does not
                  replace medical care.
                </p>
              </div>
              <aside className="rounded-[1.5rem] border border-border bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Gentle transition support
                </p>
                <p className="mt-3 leading-7 text-muted-foreground">
                  This page stays focused on broad non-medical support, practical
                  readiness, and family-centred information.
                </p>
              </aside>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What support can include
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Postpartum doula support can be practical, steady, and family-centred
              </h2>
              <p className="leading-7 text-muted-foreground">
                Postpartum support may look different depending on the family,
                doula, household, location, and circumstances. These broad
                support categories stay non-medical and do not replace qualified
                care.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {postpartumSupportAreas.map((area, index) => (
                <SectionCard key={area.title}>
                  <article className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {area.title}
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </article>
                </SectionCard>
              ))}
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Early transition
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  The early days after birth can involve adjustment, questions, and practical needs
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Families may experience many adjustments after birth.
                  Postpartum doulas may provide reassurance, practical presence,
                  and general information while health-related questions remain
                  with qualified providers or appropriate supports.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {earlyTransitionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Practical household support
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Practical support depends on the individual doula&apos;s services and boundaries
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Practical support may help the household feel more supported
                  during adjustment after birth. Families should ask individual
                  doulas about specific services, scope, availability, fees, and
                  service area.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {householdSupportItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </div>

          <SectionCard>
            <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Emotional support and qualified supports
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  Emotional support is not counselling, therapy, diagnosis, or urgent care
                </h2>
              </div>
              <div className="space-y-4 leading-7 text-muted-foreground">
                <p>
                  Postpartum support may include calm presence, encouragement,
                  reassurance, and helping families feel less alone. Emotional
                  support from a doula is not the same as counselling, therapy,
                  diagnosis, treatment, urgent support, or emergency response.
                </p>
                <p>
                  Families should use qualified health, community, emergency, or
                  other appropriate supports when concerns are clinical, urgent,
                  or safety-related.
                </p>
              </div>
            </div>
          </SectionCard>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Families and support people
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Postpartum support can include the people around the family
              </h2>
              <p className="leading-7 text-muted-foreground">
                Postpartum support can include partners, siblings, family
                members, or chosen support people. This page uses broad
                family-support language only and does not provide counselling,
                family therapy, parenting assessment, conflict management, or
                legal advice.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {familySupportItems.map((item) => (
                <SectionCard key={item.title}>
                  <article className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </SectionCard>
              ))}
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-2">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Thinking about fit
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Is postpartum support right for my family?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Families may use this page as a gentle starting point for broad
                  reflection. It is not a screening tool, eligibility process,
                  recommendation engine, intake pathway, or promise that RDDA
                  will find or assign a doula.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {reflectionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Website boundaries
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Static public information only
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This page does not collect personal postpartum, health,
                  baby-care, rest, mood, safety, or family information. It does
                  not provide clinical, legal, counselling, therapy, emergency,
                  booking, referral, intake, payment, account, search, filtering,
                  CRM, or email automation services.
                </p>
              </div>
            </SectionCard>
          </div>
        </main>
      </PageContainer>
    </PageShell>
  );
}
