import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

export default function AboutPage() {
  return (
    <PageShell>
      <main
        className="min-h-screen px-6 py-8 sm:px-10 lg:px-16"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <PageContainer>
          <section
            className="rounded-3xl px-2 py-8 sm:px-4 lg:px-6"
            aria-labelledby="about-rdda-heading"
          >
            <div className="max-w-4xl">
              <p
                className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--primary)" }}
              >
                About RDDA
              </p>
              <h1
                id="about-rdda-heading"
                className="text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Supporting doula care, community connection, and informed
                family support in Central Alberta.
              </h1>
              <p
                className="mt-6 max-w-3xl text-lg leading-8"
                style={{ color: "var(--muted-foreground)" }}
              >
                The Red Deer Doula Association exists as a community-centered
                organization connected to doula support, education, local
                resources, and relationship-based care for families, doulas,
                and the wider Central Alberta community.
              </p>
            </div>
          </section>

          <SectionCard id="purpose-and-role" ariaLabelledBy="purpose-and-role-heading">
            <div className="max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--primary)" }}
              >
                Purpose and role
              </p>
              <h2
                id="purpose-and-role-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                A source-aligned place for connection, information, and support.
              </h2>
              <p
                className="mt-5 text-base leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                RDDA provides a public-facing space for people seeking to
                understand doula support, connect with local resources, and
                learn more about the association&apos;s role in strengthening
                informed, compassionate, and accessible community care.
              </p>
            </div>
          </SectionCard>

          <SectionCard id="who-rdda-supports" ariaLabelledBy="who-rdda-supports-heading">
            <div className="max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--primary)" }}
              >
                Who RDDA supports
              </p>
              <h2
                id="who-rdda-supports-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                Families, doulas, and community partners.
              </h2>
              <p
                className="mt-5 text-base leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                RDDA is designed to support families exploring doula care,
                doulas seeking professional connection, and community members
                or organizations looking for a clearer understanding of doula
                support across the reproductive and family-care lifecycle.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            id="community-centered-approach"
            ariaLabelledBy="community-centered-approach-heading"
          >
            <div className="max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--primary)" }}
              >
                Community-centered approach
              </p>
              <h2
                id="community-centered-approach-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                Rooted in local relationships and accessible information.
              </h2>
              <p
                className="mt-5 text-base leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                The association&apos;s public platform is being built to
                communicate clearly, avoid unnecessary complexity, and keep
                community needs at the center. This page remains informational,
                static, and aligned with the approved production planning
                documents.
              </p>
            </div>
          </SectionCard>

          <SectionCard id="source-aligned-note" ariaLabelledBy="source-aligned-note-heading">
            <div className="max-w-4xl">
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--primary)" }}
              >
                Source-aligned note
              </p>
              <h2
                id="source-aligned-note-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                Built as a static public information route.
              </h2>
              <p
                className="mt-5 text-base leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                This about page introduces RDDA without adding forms,
                authentication, CMS content, database behavior, API logic, or
                client-side interactivity. It extends the static public-facing
                route structure while preserving the frozen homepage.
              </p>
            </div>
          </SectionCard>
        </PageContainer>
      </main>
    </PageShell>
  );
}
