export function HomeServiceAreasSection() {
  const serviceAreas = [
    "Pregnancy & birth support",
    "Postpartum support",
    "Fertility & preconception support",
    "Pregnancy and infant loss support",
    "Family transitions",
    "End-of-life and grief support",
  ];

  return (
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
  );
}
