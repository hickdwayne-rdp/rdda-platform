export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2f2a25]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#8a5f45]">
            Red Deer Doula Association
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#2f2a25] sm:text-5xl lg:text-6xl">
            Compassionate doula support across life&apos;s transitions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554d]">
            RDDA is preparing a renewed digital platform to help Central Alberta
            families connect with doula support, education, community resources,
            events, and trusted guidance across the full human lifecycle.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@reddeerdoula.com"
              className="inline-flex items-center justify-center rounded-full bg-[#7a4f3a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#633f2f] focus:outline-none focus:ring-2 focus:ring-[#7a4f3a] focus:ring-offset-2 focus:ring-offset-[#faf7f2]"
            >
              Contact RDDA
            </a>

            <a
              href="#platform-preview"
              className="inline-flex items-center justify-center rounded-full border border-[#c8b7a6] px-6 py-3 text-sm font-semibold text-[#3f352e] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#7a4f3a] focus:ring-offset-2 focus:ring-offset-[#faf7f2]"
            >
              View platform direction
            </a>
          </div>
        </div>

        <div
          id="platform-preview"
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="RDDA platform direction"
        >
          <article className="rounded-3xl border border-[#eadfd5] bg-white/75 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f2a25]">
              Lifecycle Support
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6b625b]">
              Support pathways for pregnancy, birth, postpartum, grief, family
              transitions, and end-of-life care.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfd5] bg-white/75 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f2a25]">
              Find a Doula
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6b625b]">
              A future directory experience designed to help families discover
              trusted local doula professionals.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfd5] bg-white/75 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f2a25]">
              Resources
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6b625b]">
              Educational content and community guidance organized around real
              family needs and emotional support.
            </p>
          </article>

          <article className="rounded-3xl border border-[#eadfd5] bg-white/75 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#2f2a25]">
              Events
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6b625b]">
              A future event system for workshops, learning opportunities,
              community gatherings, and member activities.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}