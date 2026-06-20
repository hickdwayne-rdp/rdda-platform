import { SectionCard } from "@/components/ui/SectionCard";

const supportGroups = [
  {
    title: "Families seeking support",
    description:
      "RDDA helps families understand and connect with doula-informed support through pregnancy, birth, postpartum, fertility, loss, family transitions, and end-of-life care.",
    accent: "var(--primary)",
  },
  {
    title: "Doulas and care workers",
    description:
      "RDDA supports doulas and care workers through community connection, shared visibility, and a stronger local support network.",
    accent: "var(--secondary)",
  },
  {
    title: "The wider community",
    description:
      "RDDA provides a public-facing place for community members to learn about doula support, local resources, and ways to connect.",
    accent: "var(--accent)",
  },
];

export function HomeWhoRddaSupportsSection() {
  return (
    <SectionCard className="relative overflow-hidden">
      <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-[var(--surface)]" />
      <div className="relative z-10 flex flex-col gap-4">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--secondary)" }}
        >
          Who RDDA supports
        </p>
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl">
            Support for families, doulas, and the wider community.
          </h2>
          <p
            className="max-w-3xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            RDDA exists to strengthen access to doula-informed support,
            community connection, and public education across the Red Deer
            region and surrounding communities.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {supportGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border bg-[var(--surface)] p-5 shadow-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="mb-5 h-2 w-16 rounded-full"
              style={{ background: group.accent }}
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold text-[var(--primary)]">
              {group.title}
            </h3>
            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              {group.description}
            </p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
