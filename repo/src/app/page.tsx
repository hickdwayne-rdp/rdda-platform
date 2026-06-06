import { PageShell } from "@/components/layout/PageShell";
import { PageContainer } from "@/components/layout/PageContainer";
import { HomeHeroSection } from "@/components/sections/HomeHeroSection";

export default function Home() {
  const serviceAreas = [
    "Pregnancy & birth support",
    "Postpartum support",
    "Fertility & preconception support",
    "Pregnancy and infant loss support",
    "Family transitions",
    "End-of-life and grief support",
  ];

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
          <HomeHeroSection />
           
          <section
            id="services"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-labelledby="services-heading"
          >
            <div className="sm:col-span-2 lg:col-span-3">
              <p
                className="text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--primary)" }}
              >
                Lifecycle support
              </p>

              <h2
                id="services-heading"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                Support pathways designed around real family needs.
              </h2>
            </div>

            {serviceAreas.map((service) => (
              <article
                key={service}
                className="rounded-2xl border p-5 shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-lg font-semibold">{service}</h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Supportive, respectful, and accessible guidance for families
                  navigating important life stages, questions, and support needs.
                </p>
              </article>
            ))}
          </section>

          <section
            className="grid gap-6 rounded-3xl border p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
            aria-labelledby="approach-heading"
          >
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--primary)" }}
              >
                Our approach
              </p>

              <h2
                id="approach-heading"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                A calm, accessible starting point for finding the right support.
              </h2>

              <p
                className="mt-4 max-w-3xl text-base leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                The RDDA platform is being built as a nonprofit association
                resource that makes doula support easier to understand, easier to
                access, and easier to maintain. This baseline homepage keeps the
                experience simple while the production system is developed in
                careful stages.
              </p>
            </div>

            <div
              id="connect"
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--border)",
                background: "var(--background)",
              }}
            >
              <h3 className="text-xl font-semibold">Built for future growth</h3>

              <ul
                className="mt-4 space-y-3 text-sm leading-6"
                style={{ color: "var(--muted-foreground)" }}
              >
                <li>Accessible public information architecture</li>
                <li>Future doula directory support</li>
                <li>Future events and resources system</li>
                <li>Future member and admin workflows</li>
              </ul>
            </div>
          </section>
        </PageContainer>
      </main>
    </PageShell>
  );
}
