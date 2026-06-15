import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const transitionSupportAreas = [
  {
    title: "Emotional steadiness",
    description:
      "Calm, respectful presence during seasons of change, uncertainty, adjustment, or shifting family roles.",
  },
  {
    title: "Informational support",
    description:
      "Helping families organize general questions, options, and conversations without replacing legal, counselling, medical, child-protection, crisis, or regulated supports.",
  },
  {
    title: "Practical support",
    description:
      "General support around routines, household needs, communication preferences, planning, appointments, caregiving rhythms, or support people, depending on the individual doula's scope and services.",
  },
  {
    title: "Family-centred support",
    description:
      "Support that respects family structure, culture, values, privacy, children, relationships, changing roles, and chosen support people.",
  },
];

const transitionExamples = [
  "Welcoming a new child or adjusting to changing family roles.",
  "Blended, extended, or chosen family adjustments.",
  "Household, caregiving, work, school, or support-network changes.",
  "Major routines shifting after birth, loss, illness, relocation, or caregiving change.",
  "Separation-adjacent family adjustment, described only in broad family-change language.",
];

const reflectionItems = [
  "What kind of support would feel steady, respectful, and useful during this transition?",
  "What routines, household needs, communication preferences, or support people matter right now?",
  "What questions should be discussed directly with a qualified legal, medical, mental-health, child-protection, crisis, or regulated-care provider?",
  "What family values, culture, privacy, children, relationships, or changing roles should a support person understand?",
  "What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?",
];

const familySupportItems = [
  {
    title: "Children and household rhythms",
    description:
      "Support may include helping families think about routines, privacy, meals, rest, transportation, appointments, and practical needs in family-led and non-clinical ways.",
  },
  {
    title: "Partners, relatives, and chosen support people",
    description:
      "Support may include helping households think about practical ways support people can be present, respectful, and steady during family change.",
  },
];

export default function FamilyTransitionsPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Family Transitions
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Support for families moving through change.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association recognizes family transitions as
                periods when families may need steady emotional, informational,
                practical, and family-centred support. This page is general
                public information for families, support people, doulas, and
                community members across Central Alberta.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What support can include
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Family transition support can be steady, practical, and respectful
              </h2>
              <p className="leading-7 text-muted-foreground">
                Family transition support may look different depending on the
                family, doula, household, timing, culture, and support needs.
                These broad support categories stay non-clinical, non-legal,
                non-mediation, and informational only.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {transitionSupportAreas.map((area) => (
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
                Family change can take many forms
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Families may move through many kinds of transition
              </h2>
              <p className="leading-7 text-muted-foreground">
                Family transitions may involve changing roles, routines,
                relationships, households, caregiving responsibilities, support
                networks, or family structures. This page uses broad
                family-change language only.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {transitionExamples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Questions families may consider
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Reflection can help prepare for conversations with qualified supports
              </h2>
              <p className="leading-7 text-muted-foreground">
                These prompts are general public information only. They are not a
                form, intake tool, checklist submission, screening process,
                triage tool, or individualized recommendation.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {reflectionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Children, partners, and chosen family
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Family transitions can affect the wider support circle
              </h2>
              <p className="leading-7 text-muted-foreground">
                Support may include children, partners, relatives, grandparents,
                friends, chosen family, and other support people. Therapeutic
                support, mental-health support, crisis support, legal support,
                child-protection support, and family-mediation support remain
                outside this page scope.
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
                Families can ask individual doulas about scope, experience, and boundaries
              </h2>
              <p className="leading-7 text-muted-foreground">
                Individual doulas may differ in training, scope, availability,
                communication style, fees, location, and experience with family
                transition support. Families may wish to ask individual doulas
                about those details directly.
              </p>
              <p className="leading-7 text-muted-foreground">
                RDDA public pages are informational. They do not assign, match,
                screen, supervise, certify, refer, book, or recommend doulas.
              </p>
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
                This website provides general public information only. It does not
                provide counselling, therapy, mediation, legal advice, custody
                advice, parenting-time advice, child-protection advice, crisis
                support, emergency support, case management, advocacy, intake,
                referral, matching, booking, or individualized recommendations.
              </p>
              <p className="leading-7 text-muted-foreground">
                Legal, safety, crisis, emergency, mental-health, medical,
                child-protection, mediation, counselling, therapy, or
                regulated-care concerns should be directed to qualified providers
                or appropriate supports.
              </p>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
