import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const supportAreas = [
  {
    title: "Steady presence",
    description:
      "Calm companionship, listening, and practical steadiness for people and families moving through dying, death, bereavement, remembrance, or grief.",
  },
  {
    title: "Practical support",
    description:
      "General support around household rhythms, visitors, comfort items, family preferences, and support-person coordination in non-clinical ways.",
  },
  {
    title: "Family and caregiver information",
    description:
      "General information about questions families may wish to ask and supports they may wish to consider, without replacing qualified providers.",
  },
  {
    title: "Memory and remembrance",
    description:
      "Reflection around meaning, keepsakes, values, remembrance, and chosen practices without funeral-service, spiritual-direction, or religious-instruction claims.",
  },
  {
    title: "Communication and planning support",
    description:
      "Helping families think about what matters to communicate to care teams, relatives, friends, and support people without advocacy or case-management claims.",
  },
  {
    title: "Grief-aware follow-up presence",
    description:
      "General check-in, remembrance, and transition support after a death without counselling, therapy, grief treatment, trauma treatment, or crisis claims.",
  },
];

const familyContexts = [
  "An individual nearing end of life.",
  "A family supporting a loved one.",
  "Caregivers experiencing fatigue, uncertainty, or changing routines.",
  "Chosen family, close friends, relatives, or community supports providing care.",
  "Relatives navigating distance, communication, privacy, or changing roles.",
  "Families preparing for remembrance, rituals, legacy conversations, or grief after a death.",
];

const reflectionPrompts = [
  "What kind of presence feels supportive right now?",
  "Who does the person or family want involved in support conversations?",
  "What routines, traditions, cultural practices, privacy needs, or values should be respected?",
  "What practical tasks are adding pressure for caregivers or family members?",
  "What information should be gathered from medical, hospice, palliative, legal, funeral, spiritual, counselling, or crisis providers?",
  "What would help family members communicate clearly and gently?",
  "What remembrance, memory, or legacy practices feel meaningful?",
  "What supports may be needed after a death or during grief?",
];

const caregiverSupportItems = [
  {
    title: "Caregiver rhythms",
    description:
      "End-of-life and grief can change routines, energy, communication, privacy, meals, rest, visitors, appointments, and household responsibilities.",
  },
  {
    title: "Family and chosen support people",
    description:
      "Support may include partners, children, relatives, friends, chosen family, cultural community, and other support networks in broad family-led ways.",
  },
];

const fitQuestions = [
  "What end-of-life or grief-related training, experience, or mentorship does the doula describe?",
  "What does the doula include and not include in their scope?",
  "How does the doula communicate boundaries with medical, hospice, palliative, counselling, legal, spiritual, funeral, and crisis providers?",
  "What types of practical support or emotional presence does the doula describe?",
  "How does the doula approach culture, faith, privacy, family structure, and chosen support people?",
  "What availability, fees, service area, and communication expectations should be clarified directly with the individual doula?",
];

export default function EndOfLifeGriefPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div className="grid gap-8 p-7 md:grid-cols-[1.5fr_0.8fr] md:p-10">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  End-of-Life and Grief
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Support around end-of-life, death, remembrance, and grief.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  Red Deer Doula Association recognizes end-of-life and grief as
                  seasons when families, caregivers, friends, chosen family, and
                  support people may need calm presence, practical help, and
                  compassionate information.
                </p>
              </div>
              <aside className="rounded-[1.5rem] border border-border bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Important boundaries
                </p>
                <p className="mt-3 leading-7 text-muted-foreground">
                  This page does not provide medical, hospice, palliative, MAID,
                  counselling, legal, estate, funeral, crisis, emergency, or
                  spiritual-direction services.
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
                End-of-life and grief support can be steady, practical, and family-centred
              </h2>
              <p className="leading-7 text-muted-foreground">
                Support may look different depending on the person, family,
                doula, culture, timing, privacy needs, and care setting. These
                broad examples stay non-clinical, non-therapeutic, non-legal,
                non-funeral, non-spiritual-direction, and informational only.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {supportAreas.map((area, index) => (
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
                  Every family is different
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Support may involve many people, roles, and relationships
                </h2>
                <p className="leading-7 text-muted-foreground">
                  End-of-life and grief experiences may involve families,
                  caregivers, friends, chosen family, relatives, cultural
                  communities, and support networks. This page uses broad support
                  language only and does not replace qualified providers.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {familyContexts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Questions families may consider
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Reflection can help prepare for conversations with qualified supports
                </h2>
                <p className="leading-7 text-muted-foreground">
                  These questions are general reflection prompts only. They are
                  not medical, counselling, legal, funeral, spiritual, estate,
                  benefits, crisis, emergency, or individualized advice.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {reflectionPrompts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </div>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Caregivers, families, and support people
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                End-of-life and grief can affect the wider support circle
              </h2>
              <p className="leading-7 text-muted-foreground">
                Support can be paced, respectful, and responsive to privacy,
                culture, values, family structure, and chosen support people.
                Family therapy, grief counselling, medical-care coordination,
                conflict resolution, legal advocacy, and case management remain
                outside this page scope.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {caregiverSupportItems.map((item) => (
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
                  Families can ask individual doulas about scope, experience, and boundaries
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {fitQuestions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="leading-7 text-muted-foreground">
                  RDDA website content does not match, book, refer, assess,
                  screen, supervise, certify, or recommend a specific doula or
                  provider.
                </p>
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
                  This website provides general public information only. It does
                  not provide medical care, hospice care, palliative care, MAID
                  advice or decision support, counselling, therapy, grief
                  treatment, trauma treatment, crisis intervention, emergency
                  response, funeral-service arrangements, spiritual direction,
                  religious instruction, legal advice, estate advice, benefits
                  advice, financial advice, case management, advocacy, intake,
                  referral, matching, booking, or individualized recommendations.
                </p>
              </div>
            </SectionCard>
          </div>
        </main>
      </PageContainer>
    </PageShell>
  );
}
