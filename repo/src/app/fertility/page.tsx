import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const fertilitySupportAreas = [
  {
    title: "Emotional support",
    description:
      "Calm presence, encouragement, reassurance, and respectful support during a time that may involve hope, uncertainty, planning, or waiting.",
  },
  {
    title: "Informational support",
    description:
      "Helping people organize questions and feel more prepared for conversations with qualified providers.",
  },
  {
    title: "Practical support",
    description:
      "General planning support around preferences, appointments, communication, routines, and support people, depending on the individual doula's services.",
  },
  {
    title: "Family-centred support",
    description:
      "Support that respects the person's or family's needs, values, household context, culture, and chosen support people.",
  },
];

const preconceptionItems = [
  "Think about what kind of support would feel steady, respectful, and useful before pregnancy.",
  "Organize questions for conversations with qualified providers.",
  "Consider communication preferences, support people, appointments, routines, and practical readiness.",
  "Recognize that preparation looks different for each person, family, circumstance, and care context.",
];

const familySupportItems = [
  {
    title: "Partners and support people",
    description:
      "Support may include helping partners, family members, or chosen support people understand practical ways to be present, respectful, and encouraging.",
  },
  {
    title: "Household context",
    description:
      "Doulas may help create a steadier support environment through reassurance, practical presence, and general information.",
  },
];

const reflectionItems = [
  "What kind of support would feel steady, respectful, and useful before pregnancy?",
  "What questions should be discussed directly with a qualified provider or appropriate specialist?",
  "What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?",
];

export default function FertilityPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Fertility &amp; Preconception Support
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Non-medical support before pregnancy.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association recognizes fertility and
                preconception support as steady emotional, informational,
                practical, and family-centred support for people considering
                pregnancy, preparing for pregnancy, or navigating questions
                before pregnancy. This page is general public information for
                families, support people, doulas, and community members across
                Central Alberta.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What support can include
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Fertility and preconception support can be steady, practical, and family-centred
              </h2>
              <p className="leading-7 text-muted-foreground">
                Fertility and preconception support may look different depending
                on the person, family, doula, location, and circumstances. These
                broad support categories stay non-medical and do not replace
                qualified care.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {fertilitySupportAreas.map((area) => (
                <SectionCard key={area.title}>
                  <article className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {area.title}
                    </h3>
                    <p className="leading-7 text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                </SectionCard>
              ))}
            </div>
          </section>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Before pregnancy
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Preparation can focus on questions, preferences, and practical support
              </h2>
              <p className="leading-7 text-muted-foreground">
                Before pregnancy, people may consider what kind of non-medical
                support helps them feel prepared and respected. Doulas may
                support general organization, reflection, and practical planning
                while medical, reproductive-health, medication, testing,
                diagnosis, and treatment questions remain with qualified
                providers.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {preconceptionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Questions before pregnancy
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Doulas can support questions without replacing qualified care
              </h2>
              <p className="leading-7 text-muted-foreground">
                Fertility and preconception experiences can involve many
                questions. Doulas may help people organize questions and feel
                supported while communicating with qualified providers.
              </p>
              <p className="leading-7 text-muted-foreground">
                Health-related, treatment-related, medication-related,
                testing-related, diagnosis-related, genetic,
                reproductive-health, or individualized concerns belong with
                qualified providers.
              </p>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Emotional support and qualified supports
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Emotional support is not counselling, therapy, diagnosis, treatment, or urgent care
              </h2>
              <p className="leading-7 text-muted-foreground">
                Fertility and preconception support may include calm presence,
                encouragement, reassurance, and helping people feel less alone.
                Doula emotional support is not counselling, therapy, diagnosis,
                treatment, urgent support, or emergency response.
              </p>
              <p className="leading-7 text-muted-foreground">
                Visitors should use qualified health, mental-health, community,
                emergency, or other appropriate supports when concerns are
                clinical, urgent, safety-related, or require regulated care.
              </p>
            </div>
          </SectionCard>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Families and support people
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Fertility and preconception support can include the people around the family
              </h2>
              <p className="leading-7 text-muted-foreground">
                Fertility and preconception support can include partners, family
                members, or chosen support people. This page uses broad
                family-support language only and does not provide counselling,
                family therapy, relationship assessment, consent advice, legal
                advice, or conflict-management guidance.
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

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Thinking about fit
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Is fertility or preconception support right for my family?
              </h2>
              <p className="leading-7 text-muted-foreground">
                Families may use this page as a gentle starting point for broad
                reflection. It is not a screening tool, eligibility process,
                recommendation engine, intake pathway, or promise that RDDA will
                find or assign a doula.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {reflectionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Website boundaries
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Static public information only
              </h2>
              <p className="leading-7 text-muted-foreground">
                This page does not collect personal fertility,
                reproductive-health, pregnancy, treatment, testing, medication,
                relationship, grief, safety, or family information. It does not
                provide clinical, legal, counselling, therapy, emergency,
                booking, referral, intake, payment, account, search, filtering,
                CRM, or email automation services.
              </p>
              <p className="leading-7 text-muted-foreground">
                Visitors should confirm current details directly with qualified
                providers, responsible organizations, or individual doulas when
                current or individualized information matters.
              </p>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
