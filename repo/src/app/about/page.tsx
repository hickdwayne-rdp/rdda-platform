import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const aboutHighlights = [
  "Community-centered information",
  "Local relationship building",
  "Clear public-facing support pathways",
];

const supportGroups = [
  {
    label: "Families",
    description:
      "People exploring doula support, community resources, and clear information across pregnancy, birth, postpartum, and family transitions.",
  },
  {
    label: "Doulas",
    description:
      "Practitioners looking for connection, shared visibility, education, and a stronger local support network.",
  },
  {
    label: "Community partners",
    description:
      "Organizations and community members seeking a clearer understanding of doula support and RDDA's public role.",
  },
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]";
const primaryButtonStyle = {
  background: "var(--primary)",
  color: "var(--surface)",
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="min-h-screen px-6 py-8 sm:px-10 lg:px-16">
        <PageContainer>
          <div className="space-y-12 py-8 sm:py-12">
            <section
              className="overflow-hidden rounded-[2rem] border px-6 py-10 shadow-sm sm:px-8 lg:px-10"
              aria-labelledby="about-rdda-heading"
              style={{
                background:
                  "linear-gradient(135deg, rgba(187, 199, 196, 0.72), rgba(251, 250, 248, 0.98) 48%, rgba(174, 124, 88, 0.16))",
                borderColor: "var(--border)",
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end">
                <div className="max-w-4xl">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    About RDDA
                  </p>
                  <h1
                    id="about-rdda-heading"
                    className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                  >
                    Supporting doula care, community connection, and informed
                    family support in Central Alberta.
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                    The Red Deer Doula Association exists as a community-centered
                    organization connected to doula support, education, local
                    resources, and relationship-based care for families, doulas,
                    and the wider Central Alberta community.
                  </p>
                </div>

                <div
                  className="rounded-3xl border p-5 shadow-sm"
                  style={{
                    background: "rgba(251, 250, 248, 0.82)",
                    borderColor: "rgba(129, 151, 149, 0.42)",
                  }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    RDDA focus
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {aboutHighlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 rounded-full"
                          style={{ background: "var(--secondary)" }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <SectionCard id="purpose-and-role" ariaLabelledBy="purpose-and-role-heading">
                <div className="max-w-4xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Purpose and role
                  </p>
                  <h2
                    id="purpose-and-role-heading"
                    className="text-3xl font-semibold tracking-tight text-foreground"
                  >
                    A source-aligned place for connection, information, and support.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    RDDA provides a public-facing space for people seeking to
                    understand doula support, connect with local resources, and
                    learn more about the association&apos;s role in strengthening
                    informed, compassionate, and accessible community care.
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                id="community-centered-approach"
                ariaLabelledBy="community-centered-approach-heading"
              >
                <div className="max-w-4xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Community-centered approach
                  </p>
                  <h2
                    id="community-centered-approach-heading"
                    className="text-3xl font-semibold tracking-tight text-foreground"
                  >
                    Rooted in local relationships and accessible information.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    The association&apos;s public platform is being built to
                    communicate clearly, avoid unnecessary complexity, and keep
                    community needs at the center. This page remains informational,
                    static, and aligned with the approved production planning
                    documents.
                  </p>
                </div>
              </SectionCard>
            </section>

            <section
              className="space-y-6"
              aria-labelledby="who-rdda-supports-heading"
            >
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Who RDDA supports
                </p>
                <h2
                  id="who-rdda-supports-heading"
                  className="text-3xl font-semibold tracking-tight text-foreground"
                >
                  Families, doulas, and community partners.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {supportGroups.map((group, index) => (
                  <div
                    key={group.label}
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
                      <h3 className="text-xl font-semibold text-foreground">
                        {group.label}
                      </h3>
                    </div>
                    <p className="leading-7 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <SectionCard id="community-impact" ariaLabelledBy="community-impact-heading">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] lg:items-center">
                <div className="max-w-4xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Community impact
                  </p>
                  <h2
                    id="community-impact-heading"
                    className="text-3xl font-semibold tracking-tight text-foreground"
                  >
                    A place for approved RDDA history and public impact stories.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    RDDA&apos;s public presence includes community education,
                    member connection, and local association visibility. This
                    static site now has a dedicated place for future approved
                    updates about RDDA history, community involvement, and public
                    impact without adding a publishing system yet.
                  </p>
                </div>
                <Link href="/news" className={primaryButtonClass} style={primaryButtonStyle}>
                  News and community
                </Link>
              </div>
            </SectionCard>

            <SectionCard id="source-aligned-note" ariaLabelledBy="source-aligned-note-heading">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] lg:items-center">
                <div className="max-w-4xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Source-aligned note
                  </p>
                  <h2
                    id="source-aligned-note-heading"
                    className="text-3xl font-semibold tracking-tight text-foreground"
                  >
                    Built as a static public information route.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    This about page introduces RDDA without adding forms,
                    authentication, CMS content, database behavior, API logic, or
                    client-side interactivity. It extends the static public-facing
                    route structure while preserving the frozen homepage.
                  </p>
                </div>
                <div
                  className="rounded-2xl border px-5 py-4 text-sm font-semibold leading-6"
                  style={{
                    background: "rgba(187, 199, 196, 0.26)",
                    borderColor: "rgba(129, 151, 149, 0.42)",
                    color: "var(--primary)",
                  }}
                >
                  Static, accessible, source-aligned, and ready for later
                  image/background planning.
                </div>
              </div>
            </SectionCard>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  );
}
