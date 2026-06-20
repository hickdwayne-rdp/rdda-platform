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
        <div className="space-y-12 py-16 sm:py-20">
          <section
            className="rounded-[2rem] border px-6 py-10 shadow-sm sm:px-8 lg:px-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(187, 199, 196, 0.7), rgba(251, 250, 248, 0.98) 50%, rgba(174, 124, 88, 0.16))",
              borderColor: "var(--border)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
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

              <div
                className="rounded-3xl border p-5 shadow-sm"
                style={{
                  background: "rgba(251, 250, 248, 0.84)",
                  borderColor: "rgba(129, 151, 149, 0.42)",
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Starting point
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Learn what doula support can look like, what questions to ask,
                  and how support may shift across family experiences.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {familySupportPaths.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border p-6 shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{
                      background:
                        index === 1 ? "var(--secondary)" : "var(--primary)",
                    }}
                  >
                    {index + 1}
                  </span>
                  <h2 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                </div>
                <p className="leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Family experience
                </p>
                <h2 className="text-2xl font-semibold text-foreground">
                  What families can expect
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Doula care can provide steady, respectful, and practical support
                  during important family transitions. Each family&apos;s needs are
                  different, and support may include education, comfort measures,
                  planning conversations, emotional reassurance, and referrals to
                  appropriate community resources.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Helpful starting points
                </p>
                <h2 className="text-2xl font-semibold text-foreground">
                  Questions and boundaries to keep in mind
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {familyGuidanceItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: "var(--secondary)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>
        </div>
      </PageContainer>
    </PageShell>
  );
}
