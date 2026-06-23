import Image from "next/image";

import { SectionCard } from "@/components/ui/SectionCard";

export function HomeHeroSection() {
  return (
    <SectionCard
      as="header"
      className="relative isolate overflow-hidden border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="absolute -right-24 -top-28 z-0 h-72 w-72 rounded-full bg-[var(--border)] opacity-45" />
      <div className="absolute -bottom-32 left-10 z-0 h-64 w-64 rounded-full bg-[var(--secondary)] opacity-12" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p
              className="text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ color: "var(--secondary)" }}
            >
              Red Deer Doula Association
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[var(--primary)] sm:text-5xl lg:text-6xl">
              Holistic doula support across the full human lifecycle.
            </h1>

            <p
              className="max-w-3xl text-lg leading-8 sm:text-xl"
              style={{ color: "var(--muted-foreground)" }}
            >
              Proudly serving our community together with birth, bereavement,
              postpartum, and lifecycle doula support in Red Deer and the
              surrounding areas of Central Alberta.
            </p>

            <p
              className="max-w-3xl text-base leading-7"
              style={{ color: "var(--muted-foreground)" }}
            >
              RDDA connects Central Alberta families with trusted doula support,
              education, community resources, and supportive guidance through birth,
              postpartum, family transitions, grief, and end-of-life support.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              style={{
                background: "var(--primary)",
                color: "var(--surface)",
              }}
            >
              Explore support options
            </a>

            <a
              href="#connect"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              Connect with RDDA
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-xs items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:max-w-sm">
            <div className="absolute inset-5 rounded-full border border-[var(--border)] opacity-70" />
            <Image
              src="/brand/rdda-main-logo.jpg"
              alt="Red Deer Doula Association logo"
              width={320}
              height={320}
              className="relative h-auto w-full rounded-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
