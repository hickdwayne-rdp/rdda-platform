import Image from "next/image";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const doulaPhotos = [
  {
    name: "Alicia England",
    src: "/images/doulas/Alicia_England.jpg",
  },
  {
    name: "Alysa Allan",
    src: "/images/doulas/Alysa_Allan.jpg",
  },
  {
    name: "Amber Cavers",
    src: "/images/doulas/Amber_Cavers.jpg",
  },
  {
    name: "Amber Thibault",
    src: "/images/doulas/Amber_Thibault.jpg",
  },
  {
    name: "Andria Sahli",
    src: "/images/doulas/Andria_Sahli.jpg",
  },
  {
    name: "Ashlee Godzic",
    src: "/images/doulas/Ashlee_Godzic.jpg",
  },
  {
    name: "Callista Bierkos",
    src: "/images/doulas/Callista_Bierkos.jpg",
  },
  {
    name: "Chelsea Clark",
    src: "/images/doulas/Chelsea_Clark.jpg",
  },
  {
    name: "Christa Duquette",
    src: "/images/doulas/Christa_Duquette.jpeg",
  },
  {
    name: "Janelle Allison",
    src: "/images/doulas/Janelle_Allison.jpg",
  },
  {
    name: "Jessie Alfano",
    src: "/images/doulas/Jessie_Alfano.jpeg",
  },
  {
    name: "Kaitlyn Boese",
    src: "/images/doulas/Kaitlyn_Boese.jpg",
  },
  {
    name: "Kathleen Howard Bjornson",
    src: "/images/doulas/Kathleen_Howard_Bjornson.jpg",
  },
  {
    name: "Laura Gauthier",
    src: "/images/doulas/Laura_Gauthier.jpg",
  },
  {
    name: "Lizzie Cooper",
    src: "/images/doulas/Lizzie_Cooper.jpeg",
  },
  {
    name: "Mindy Pottruff",
    src: "/images/doulas/Mindy_Pottruff.jpeg",
  },
  {
    name: "Miranda Allarie",
    src: "/images/doulas/Miranda_Allarie.jpg",
  },
  {
    name: "Shelby Story",
    src: "/images/doulas/Shelby_Story.jpg",
  },
  {
    name: "Stephanie Griffith",
    src: "/images/doulas/Stephanie_Griffith.jpg",
  },
];

const doulaSupportAreas = [
  {
    eyebrow: "Connection",
    title: "A professional community",
    description:
      "RDDA provides a place for doulas to connect with one another, strengthen relationships, and participate in a broader community of birth, postpartum, and lifecycle support professionals.",
  },
  {
    eyebrow: "Learning",
    title: "Shared education and growth",
    description:
      "The association supports continuing learning, shared knowledge, and professional development opportunities that help doulas serve families with care, clarity, and confidence.",
  },
  {
    eyebrow: "Awareness",
    title: "Visibility without directory logic",
    description:
      "RDDA helps the public understand the role of doulas and the value of doula support. This static route can show approved member photos without search, filtering, booking, matching, or application workflows.",
  },
  {
    eyebrow: "Collaboration",
    title: "Community-centred support",
    description:
      "Doulas are part of a wider support network for families and communities. RDDA's public site introduces that role without adding dynamic systems, account features, CMS reads, or database logic.",
  },
];

const staticScopeItems = [
  "Introduces RDDA's relationship to doulas.",
  "Shows approved doula photos as a static visual roster.",
  "Uses only static, informational route content.",
  "Uses the existing PageShell, PageContainer, and SectionCard primitives.",
  "Preserves the frozen homepage and existing public routes.",
];

const deferredItems = [
  "Does not create a searchable or filterable doula directory.",
  "Does not include full doula profiles, bios, contact links, booking, or matching.",
  "Does not add forms, accounts, applications, authentication, or API logic.",
  "Does not read from Payload, Supabase, a CMS, or a database.",
];

export default function DoulasPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-16 sm:py-20">
          <section
            className="rounded-[2rem] border px-6 py-10 shadow-sm sm:px-8 lg:px-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(63, 92, 88, 0.12), rgba(251, 250, 248, 0.98) 48%, rgba(187, 199, 196, 0.52))",
              borderColor: "var(--border)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  For doulas
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Supporting doulas who support families across Central Alberta.
                </h1>

                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  Red Deer Doula Association supports doulas through connection,
                  education, shared visibility, and community-centred collaboration.
                  This page introduces how RDDA relates to doulas while keeping the
                  route static, informational, and source-aligned.
                </p>
              </div>

              <div
                className="rounded-3xl border p-5 shadow-sm"
                style={{
                  background: "rgba(251, 250, 248, 0.84)",
                  borderColor: "rgba(129, 151, 149, 0.42)",
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Doula pathway
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Connection, learning, public awareness, and collaboration remain
                  the focus before future directory or membership features are planned.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {doulaSupportAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-3xl border p-6 shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{
                      background:
                        index === 1 ? "var(--secondary)" : "var(--primary)",
                    }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {area.eyebrow}
                  </p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {area.title}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </section>

          <section
            className="rounded-[2rem] border p-6 shadow-sm sm:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(251, 250, 248, 0.94), rgba(187, 199, 196, 0.26))",
              borderColor: "var(--border)",
            }}
          >
            <div className="mb-8 max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                RDDA doulas
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                A static visual roster of RDDA doulas.
              </h2>
              <p className="leading-7 text-muted-foreground">
                These approved photos help visitors see the people connected with
                RDDA. The roster is intentionally static and does not include search,
                filtering, booking, matching, contact links, or full profile details.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {doulaPhotos.map((doula) => (
                <article
                  key={doula.name}
                  className="overflow-hidden rounded-3xl border shadow-sm"
                  style={{
                    background: "var(--card)",
                    borderColor: "rgba(129, 151, 149, 0.38)",
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={doula.src}
                      alt={`Portrait of ${doula.name}`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {doula.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      RDDA doula
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Static route scope
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {staticScopeItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: "var(--primary)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Deferred functionality
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does not do
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {deferredItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: "var(--secondary)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
