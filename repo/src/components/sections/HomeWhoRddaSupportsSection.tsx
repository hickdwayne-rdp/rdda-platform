const supportGroups = [
  {
    title: "Families seeking support",
    description:
      "RDDA helps families understand and connect with doula-informed support through pregnancy, birth, postpartum, fertility, loss, family transitions, and end-of-life care.",
  },
  {
    title: "Doulas and care workers",
    description:
      "RDDA supports doulas and care workers through community connection, shared visibility, and a stronger local support network.",
  },
  {
    title: "The wider community",
    description:
      "RDDA provides a public-facing place for community members to learn about doula support, local resources, and ways to connect.",
  },
];

export function HomeWhoRddaSupportsSection() {
  return (
    <section
      className="rounded-3xl border p-6 shadow-sm sm:p-8 lg:p-10"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex flex-col gap-4">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--muted-foreground)" }}
        >
          Who RDDA Supports
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
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

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {supportGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              {group.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
