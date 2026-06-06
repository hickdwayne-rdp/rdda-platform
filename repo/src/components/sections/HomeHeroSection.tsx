export function HomeHeroSection() {
  return (
    <header
            className="flex flex-col gap-6 rounded-3xl border p-6 shadow-sm sm:p-8 lg:p-10"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col gap-3">
              <p
                className="text-sm font-semibold uppercase tracking-[0.24em]"
                style={{ color: "var(--primary)" }}
              >
                Red Deer Doula Association
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Holistic doula support across the full human lifecycle.
              </h1>

              <p
                className="max-w-3xl text-lg leading-8 sm:text-xl"
                style={{ color: "var(--muted-foreground)" }}
              >
                RDDA connects Central Alberta families with trusted doula support,
                education, community resources, and supportive guidance through
                birth, postpartum, family transitions, grief, and end-of-life support.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition"
                style={{ background: "var(--primary)" }}
              >
                Explore support options
              </a>

              <a
                href="#connect"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                Connect with RDDA
              </a>
            </div>
          </header>
  );
}