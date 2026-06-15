import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const birthSupportAreas = [
  {
    title: "Emotional support",
    description:
      "Calm presence, encouragement, reassurance, and steady support before and during the birth experience.",
  },
  {
    title: "Physical comfort support",
    description:
      "General comfort measures and practical presence that support the family without replacing care providers.",
  },
  {
    title: "Informational support",
    description:
      "Helping families organize questions and feel more prepared for conversations with their qualified care team.",
  },
  {
    title: "Practical support",
    description:
      "Helping the birth environment feel more prepared, respectful, and supported in ways that fit the family and setting.",
  },
];

const preparationItems = [
  "Think about what kind of support helps the family feel prepared and respected.",
  "Organize questions for conversations with qualified health-care providers.",
  "Consider communication preferences, support people, and practical readiness.",
  "Recognize that preparation looks different for each family and birth setting.",
];

const familySupportItems = [
  {
    title: "Support people",
    description:
      "Birth support may include helping partners, family members, or chosen support people understand how to be present and encouraging.",
  },
  {
    title: "Family context",
    description:
      "Doulas may help create a calmer support environment through reassurance, practical presence, and respectful communication support.",
  },
];

const reflectionItems = [
  "What kind of support would feel steady, respectful, and useful before birth?",
  "What questions should be discussed directly with a qualified care provider?",
  "What communication style, support approach, location, and service area should be clarified with an individual doula?",
];

export default function BirthPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Birth Support
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Non-medical doula support before and during birth.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association recognizes birth support as steady
                emotional, physical, informational, and practical support that
                works alongside qualified health-care providers. This page is
                general public information for families, support people, doulas,
                and community members across Central Alberta.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What support can include
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Birth doula support can be practical, steady, and family-centred
              </h2>
              <p className="leading-7 text-muted-foreground">
                Birth support may look different depending on the family, doula,
                setting, and circumstances. These broad support categories stay
                non-medical and do not replace qualified care.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {birthSupportAreas.map((area) => (
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
                Before birth
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Preparation can focus on questions, preferences, and practical support
              </h2>
              <p className="leading-7 text-muted-foreground">
                Before birth, families may consider what kind of non-medical
                support helps them feel prepared. Doulas may support general
                conversations about preferences, questions, communication, and
                practical readiness while clinical questions remain with
                qualified health-care providers.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {preparationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                During birth
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Steady non-medical presence during the birth experience
              </h2>
              <p className="leading-7 text-muted-foreground">
                During birth, doulas may provide encouragement, reassurance,
                practical support, comfort support, and information. This support
                can help families feel heard and grounded while qualified care
                teams remain responsible for clinical care.
              </p>
              <p className="leading-7 text-muted-foreground">
                Support can vary based on the family, doula, birth setting, and
                circumstances. This page does not provide labour instructions,
                individualized direction, or decision guidance.
              </p>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Care team boundaries
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Doula support works alongside qualified health-care providers
              </h2>
              <p className="leading-7 text-muted-foreground">
                Doulas provide non-medical support. They do not replace
                physicians, midwives, nurses, or other qualified health-care
                providers. Families should bring clinical questions and current
                care concerns to their qualified providers.
              </p>
              <p className="leading-7 text-muted-foreground">
                RDDA public pages are a starting point for general understanding,
                not a clinical decision tool, personalized advice page, or live
                response pathway.
              </p>
            </div>
          </SectionCard>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Families and support people
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Birth support can include the people around the family
              </h2>
              <p className="leading-7 text-muted-foreground">
                Support people can be part of a steady birth environment. This
                page uses broad family-support language only and does not provide
                counselling, family therapy, conflict management, or legal
                consent advice.
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
                Is birth support right for my family?
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
                This page does not collect personal birth information. It does
                not provide clinical, legal, counselling, booking, referral,
                intake, payment, account, search, filtering, CRM, or email
                automation services.
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
