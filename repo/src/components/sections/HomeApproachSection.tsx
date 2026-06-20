import { SectionCard } from "@/components/ui/SectionCard";

const growthItems = [
  "Accessible public information architecture",
  "Future doula directory support",
  "Future events and resources system",
  "Future member and admin workflows",
];

export function HomeApproachSection() {
  return (
    <SectionCard
      className="grid gap-8 bg-[var(--surface)] lg:grid-cols-[1.15fr_0.85fr]"
      ariaLabelledBy="approach-heading"
    >
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--primary)" }}
          >
            Our approach
          </p>

          <h2
            id="approach-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--primary)] sm:text-4xl"
          >
            A calm, accessible starting point for finding the right support.
          </h2>

          <p
            className="mt-5 max-w-3xl text-base leading-7"
            style={{ color: "var(--muted-foreground)" }}
          >
            The RDDA platform is being built as a nonprofit association resource
            that makes doula support easier to understand, easier to access, and
            easier to maintain. This baseline homepage keeps the experience simple
            while the production system is developed in careful stages.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <span className="rounded-full bg-[var(--primary)] px-4 py-2 text-white">
            Calm
          </span>
          <span className="rounded-full bg-[var(--secondary)] px-4 py-2 text-white">
            Community-led
          </span>
          <span className="rounded-full bg-[var(--accent)] px-4 py-2 text-white">
            Lifecycle-aware
          </span>
        </div>
      </div>

      <div
        id="connect"
        className="rounded-3xl border p-6 shadow-sm"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(145deg, var(--card) 0%, var(--surface) 100%)",
        }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--accent)" }}
        >
          Built for future growth
        </p>

        <ul className="mt-5 space-y-3 text-sm leading-6">
          {growthItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full"
                style={{ background: "var(--primary)" }}
                aria-hidden="true"
              />
              <span style={{ color: "var(--muted-foreground)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
