import { SectionCard } from "@/components/ui/SectionCard";

export function HomeApproachSection() {
  return (
    <SectionCard
      className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      ariaLabelledBy="approach-heading"
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
          The RDDA platform is being built as a nonprofit association resource
          that makes doula support easier to understand, easier to access, and
          easier to maintain. This baseline homepage keeps the experience simple
          while the production system is developed in careful stages.
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
    </SectionCard>
  );
}
