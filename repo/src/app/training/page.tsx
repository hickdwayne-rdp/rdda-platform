import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const learningAreas = [
  {
    label: "Doula role awareness",
    title: "Understanding the doula role",
    description:
      "Learning can help families, doulas, and community partners understand the non-medical support role doulas may provide across pregnancy, birth, postpartum, loss, and related family experiences.",
  },
  {
    label: "Birth and postpartum",
    title: "Support across family transitions",
    description:
      "Education can strengthen awareness of emotional, physical, practical, and informational support before birth, during birth, and through the early postpartum period.",
  },
  {
    label: "Family and lifecycle care",
    title: "Respectful support for varied needs",
    description:
      "Training-related information may help visitors understand that support needs can change across fertility, loss, adoption, surrogacy, postpartum adjustment, and other family transitions.",
  },
  {
    label: "Community connection",
    title: "Learning within local support networks",
    description:
      "Shared learning can help doulas and community partners communicate clearly, make appropriate referrals, and understand how doula care fits within Central Alberta support networks.",
  },
  {
    label: "Respectful care",
    title: "Inclusive and compassionate practice",
    description:
      "Education can reinforce respectful, informed, and community-centred care while keeping public information clear, grounded, and accessible.",
  },
  {
    label: "Professional growth",
    title: "Continuing learning for doulas",
    description:
      "RDDA can support a culture of continued learning, reflection, and connection without turning this static page into a course catalog or credentialing system.",
  },
];

const supportedAudiences = [
  "Doulas seeking professional growth, shared learning, and connection.",
  "Families wanting to better understand doula support and community-based care.",
  "Community partners learning how doula care may fit within local support networks.",
  "People exploring the doula role and the value of informed, respectful support.",
];

const staticBoundaries = [
  "No course sign-up, payment, checkout, or learner account tools.",
  "No live class schedule, waitlist, booking calendar, or attendance tracking.",
  "No certificate generation, credentialing claim, or training application workflow.",
  "No CMS reads, database logic, API routes, client state, effects, or interactive page behavior.",
];

export default function TrainingPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Training and Education
                </p>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Learning that strengthens doula support and community care.
                  </h1>

                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    Red Deer Doula Association values education, shared learning,
                    and community knowledge for doulas, families, and community
                    members across Central Alberta. This page introduces RDDA&apos;s
                    education-oriented role while remaining static and
                    public-facing.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Learning themes
                </p>
                <p className="mt-3 text-3xl font-semibold text-primary">6</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Public education areas described without registration,
                  payment, or credentialing tools.
                </p>
              </div>
            </div>
          </section>

          <SectionCard>
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Learning context
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  A learning-focused public resource
                </h2>
              </div>
              <p className="leading-7 text-muted-foreground">
                Training-related information on this site is framed as learning,
                education, awareness, and professional growth. RDDA can share
                general learning themes that help people understand doula care,
                community support, informed practice, and the value of ongoing
                education.
              </p>
            </div>
          </SectionCard>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((item, index) => (
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
                  Supported audiences
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Who the training information supports
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Education supports clearer understanding between doulas,
                  families, community partners, and people exploring the doula
                  role.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Public information
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Helpful starting points
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {supportedAudiences.map((item) => (
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
                  Static scope boundaries
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
                  Community care
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Education as part of community care
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Learning and shared understanding help doulas, families, and
                  community partners participate in informed, respectful, and
                  community-centred support. This route provides a static
                  foundation for training-related public information without
                  adding dynamic training systems.
                </p>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
