import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const familySupportPaths = [
  {
    title: "Pregnancy and birth preparation",
    description:
      "Families can learn what doula support may look like before birth, including preparation, emotional support, practical planning, and informed decision-making.",
  },
  {
    title: "Postpartum and early parenting",
    description:
      "The page recognizes the transition after birth and points families toward care that can support recovery, adjustment, confidence, and connection.",
  },
  {
    title: "Finding the right local support",
    description:
      "Families are encouraged to consider their needs, values, location, and preferred support style when connecting with doula care in Central Alberta.",
  },
];

const familyGuidanceItems = [
  "Doula support is non-clinical and works alongside medical care, not in place of it.",
  "Families may benefit from asking about training, scope, availability, communication style, and service areas.",
  "Support needs can change across pregnancy, birth, postpartum, loss, adoption, surrogacy, and other family experiences.",
  "RDDA can serve as a public-facing starting point for learning about doula support in Central Alberta.",
];

export default function FamiliesPage() {
  return (
    <PageShell>
      <PageContainer>
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              For Families
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Doula support for families across Central Alberta
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              The Red Deer Doula Association helps families understand doula
              support and connect with community-based care across pregnancy,
              birth, postpartum, and other family transitions.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {familySupportPaths.map((item) => (
            <SectionCard key={item.title}>
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </SectionCard>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionCard>
            <h2 className="text-xl font-semibold text-foreground">What families can expect</h2>
            <p>
              Doula care can provide steady, respectful, and practical support
              during important family transitions. Each family&apos;s needs are
              different, and support may include education, comfort measures,
              planning conversations, emotional reassurance, and referrals to
              appropriate community resources.
            </p>
          </SectionCard>

          <SectionCard>
            <h2 className="text-xl font-semibold text-foreground">Helpful starting points</h2>
            <ul className="space-y-3">
              {familyGuidanceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        </section>
      </PageContainer>
    </PageShell>
  );
}


