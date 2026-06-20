import Link from "next/link";

type ServiceAreaLink = {
  label: string;
  href: string;
  tone: "sage" | "teal" | "warm";
};

const serviceAreas: ServiceAreaLink[] = [
  { label: "Pregnancy & birth support", href: "/birth", tone: "sage" },
  { label: "Postpartum support", href: "/postpartum", tone: "teal" },
  { label: "Fertility & preconception support", href: "/fertility", tone: "warm" },
  { label: "Pregnancy and infant loss support", href: "/loss", tone: "sage" },
  { label: "Family transitions", href: "/family-transitions", tone: "teal" },
  { label: "End-of-life and grief support", href: "/end-of-life-grief", tone: "warm" },
];

const toneStyles = {
  sage: {
    accent: "var(--secondary)",
    background: "var(--surface)",
  },
  teal: {
    accent: "var(--primary)",
    background: "var(--card)",
  },
  warm: {
    accent: "var(--accent)",
    background: "var(--surface)",
  },
};

export function HomeServiceAreasSection() {
  return (
    <section
      id="services"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-labelledby="services-heading"
    >
      <div className="sm:col-span-2 lg:col-span-3">
        <div className="flex flex-col gap-3 rounded-3xl border bg-[var(--surface)] p-6 sm:p-8">
          <p
            className="text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--primary)" }}
          >
            Lifecycle support
          </p>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h2
              id="services-heading"
              className="text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl"
            >
              Support pathways designed around real family needs.
            </h2>

            <p
              className="text-sm leading-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              Explore the areas of support RDDA introduces through public,
              accessible information and community connection.
            </p>
          </div>
        </div>
      </div>

      {serviceAreas.map((service, index) => {
        const tone = toneStyles[service.tone];

        return (
          <Link
            key={service.href}
            href={service.href}
            className="group relative block overflow-hidden rounded-3xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            style={{
              background: tone.background,
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: tone.accent }}
            />

            <div className="flex items-start justify-between gap-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ background: tone.accent }}
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <span
                className="mt-1 text-sm font-semibold transition group-hover:translate-x-1"
                style={{ color: tone.accent }}
              >
                Learn more
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[var(--primary)]">
              {service.label}
            </h3>
            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              Supportive, respectful, and accessible guidance for families
              navigating important life stages, questions, and support needs.
            </p>
          </Link>
        );
      })}
    </section>
  );
}
