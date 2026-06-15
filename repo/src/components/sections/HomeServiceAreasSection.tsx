import Link from "next/link";

type ServiceAreaLink = {
  label: string;
  href: string;
};

const serviceAreas: ServiceAreaLink[] = [
  { label: "Pregnancy & birth support", href: "/birth" },
  { label: "Postpartum support", href: "/postpartum" },
  { label: "Fertility & preconception support", href: "/fertility" },
  { label: "Pregnancy and infant loss support", href: "/loss" },
  { label: "Family transitions", href: "/family-transitions" },
  { label: "End-of-life and grief support", href: "/end-of-life-grief" },
];

export function HomeServiceAreasSection() {
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
        <Link
          key={service.href}
          href={service.href}
          className="block rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--foreground)",
          }}
        >
          <h3 className="text-lg font-semibold">{service.label}</h3>
          <p
            className="mt-3 text-sm leading-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            Supportive, respectful, and accessible guidance for families
            navigating important life stages, questions, and support needs.
          </p>
          <p
            className="mt-4 text-sm font-semibold"
            style={{ color: "var(--primary)" }}
          >
            Learn more
          </p>
        </Link>
      ))}
    </section>
  );
}
