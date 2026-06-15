import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const lossSupportAreas = [
  {
    title: "Emotional presence",
    description:
      "Calm, respectful presence, acknowledgement, and steady support during an experience that may involve grief, shock, uncertainty, or many different emotions.",
  },
  {
    title: "Informational support",
    description:
      "Helping families organize questions for qualified providers or appropriate supports without replacing medical, mental-health, crisis, legal, funeral, spiritual, or regulated care.",
  },
  {
    title: "Practical support",
    description:
      "General support around communication, planning, household needs, routines, appointments, or support people, depending on the individual doula&apos;s scope and services.",
  },
  {
    title: "Family-centred support",
    description:
      "Support that respects the family&apos;s values, privacy, culture, relationships, children, household context, and chosen support people.",
  },
];

const timingItems = [
  "Support may differ before, during, or after a loss experience.",
  "Families may think about who they want present for communication, planning, or practical support.",
  "Doulas may help families organize general questions for qualified providers or appropriate supports.",
  "Medical, mental-health, crisis, emergency, legal, funeral, spiritual, or regulated-care questions belong with qualified providers or appropriate supports.",
];

const familySupportItems = [
  {
    title: "Partners and support people",
    description:
      "Support may include helping partners, relatives, or chosen support people understand practical ways to be present, respectful, and steady.",
  },
  {
    title: "Children and family context",
    description:
      "Support may include respecting children, family relationships, routines, privacy, household needs, and culture in family-led and non-clinical ways.",
  },
];

const reflectionItems = [
  "What kind of support would feel steady, respectful, and useful right now?",
  "What questions should be discussed directly with a qualified medical provider or appropriate support?",
  "Who does the family want involved in communication, planning, or practical support?",
  "What cultural, spiritual, household, privacy, or family considerations should a support person understand?",
  "What training, scope, availability, communication style, service area, fees, and boundaries should be clarified with an individual doula?",
];

export default function LossPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Pregnancy and Infant Loss Support
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Gentle, non-clinical support through pregnancy and infant loss.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association recognizes pregnancy and infant loss
                support as steady emotional, informational, practical, and
                family-centred support for families and support people navigating
                loss. This page is general public information for families,
                support people, doulas, and community members across Central
                Alberta.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What support can include
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Loss support can be steady, respectful, practical, and family-centred
              </h2>
              <p className="leading-7 text-muted-foreground">
                Pregnancy and infant loss support may look different depending on
                the family, doula, timing, circumstances, culture, and support
                needs. These broad support categories stay non-clinical and do
                not replace qualified care.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {lossSupportAreas.map((area) => (
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
                During and after loss
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Support may focus on presence, communication, and practical needs
              </h2>
              <p className="leading-7 text-muted-foreground">
                Pregnancy and infant loss support may happen at different points.
                Doulas may offer steady presence, practical support, and general
                organization while qualified providers and appropriate supports
                remain responsible for medical, mental-health, crisis,
                emergency, legal, funeral, spiritual, and regulated-care concerns.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {timingItems.map((item) => (
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
                form, intake tool, checklist submission, screening process, or
                individualized recommendation.
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
                Partners, children, and family members
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Loss can affect the wider family and support circle
              </h2>
              <p className="leading-7 text-muted-foreground">
                Support may include partners, children, relatives, grandparents,
                household members, or chosen support people. This page uses broad
                family-support language only and does not provide grief
                counselling, therapy, crisis support, child-specific clinical
                guidance, legal advice, funeral direction, or spiritual direction.
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
                communication style, fees, location, and experience with
                pregnancy and infant loss support. Families may wish to ask
                individual doulas about those details directly.
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
                provide medical advice, counselling, therapy, crisis support,
                emergency support, bereavement counselling, legal advice, funeral
                direction, spiritual direction, intake, referral, matching,
                booking, or individualized recommendations.
              </p>
              <p className="leading-7 text-muted-foreground">
                Medical, urgent, emergency, safety, mental-health, self-harm,
                crisis, legal, funeral, spiritual, or regulated-care concerns
                should be directed to qualified providers or appropriate supports.
              </p>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
