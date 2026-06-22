import Image from "next/image";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
import {
  getPublishedDoulaProfiles,
  type PublicDoulaProfile,
} from "@/lib/payload/publicDoulas";

const staticDoulaPhotos: PublicDoulaProfile[] = [
  {
    name: "Alicia England",
    imageSrc: "/images/doulas/Alicia_England.jpg",
    imageAlt: "Portrait of Alicia England",
  },
  {
    name: "Alysa Allan",
    imageSrc: "/images/doulas/Alysa_Allan.jpg",
    imageAlt: "Portrait of Alysa Allan",
  },
  {
    name: "Amber Cavers",
    imageSrc: "/images/doulas/Amber_Cavers.jpg",
    imageAlt: "Portrait of Amber Cavers",
  },
  {
    name: "Amber Thibault",
    imageSrc: "/images/doulas/Amber_Thibault.jpg",
    imageAlt: "Portrait of Amber Thibault",
  },
  {
    name: "Andria Sahli",
    imageSrc: "/images/doulas/Andria_Sahli.jpg",
    imageAlt: "Portrait of Andria Sahli",
  },
  {
    name: "Ashlee Godzic",
    imageSrc: "/images/doulas/Ashlee_Godzic.jpg",
    imageAlt: "Portrait of Ashlee Godzic",
  },
  {
    name: "Callista Bierkos",
    imageSrc: "/images/doulas/Callista_Bierkos.jpg",
    imageAlt: "Portrait of Callista Bierkos",
  },
  {
    name: "Chelsea Clark",
    imageSrc: "/images/doulas/Chelsea_Clark.jpg",
    imageAlt: "Portrait of Chelsea Clark",
  },
  {
    name: "Christa Duquette",
    imageSrc: "/images/doulas/Christa_Duquette.jpeg",
    imageAlt: "Portrait of Christa Duquette",
  },
  {
    name: "Janelle Allison",
    imageSrc: "/images/doulas/Janelle_Allison.jpg",
    imageAlt: "Portrait of Janelle Allison",
  },
  {
    name: "Jessie Alfano",
    imageSrc: "/images/doulas/Jessie_Alfano.jpeg",
    imageAlt: "Portrait of Jessie Alfano",
  },
  {
    name: "Kaitlyn Boese",
    imageSrc: "/images/doulas/Kaitlyn_Boese.jpg",
    imageAlt: "Portrait of Kaitlyn Boese",
  },
  {
    name: "Kathleen Howard Bjornson",
    imageSrc: "/images/doulas/Kathleen_Howard_Bjornson.jpg",
    imageAlt: "Portrait of Kathleen Howard Bjornson",
  },
  {
    name: "Laura Gauthier",
    imageSrc: "/images/doulas/Laura_Gauthier.jpg",
    imageAlt: "Portrait of Laura Gauthier",
  },
  {
    name: "Lizzie Cooper",
    imageSrc: "/images/doulas/Lizzie_Cooper.jpeg",
    imageAlt: "Portrait of Lizzie Cooper",
  },
  {
    name: "Mindy Pottruff",
    imageSrc: "/images/doulas/Mindy_Pottruff.jpeg",
    imageAlt: "Portrait of Mindy Pottruff",
  },
  {
    name: "Miranda Allarie",
    imageSrc: "/images/doulas/Miranda_Allarie.jpg",
    imageAlt: "Portrait of Miranda Allarie",
  },
  {
    name: "Shelby Story",
    imageSrc: "/images/doulas/Shelby_Story.jpg",
    imageAlt: "Portrait of Shelby Story",
  },
  {
    name: "Stephanie Griffith",
    imageSrc: "/images/doulas/Stephanie_Griffith.jpg",
    imageAlt: "Portrait of Stephanie Griffith",
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
    title: "Approved public visibility",
    description:
      "RDDA helps the public understand the role of doulas and the value of doula support. Public profile visibility is limited to approved and published information.",
  },
  {
    eyebrow: "Collaboration",
    title: "Community-centred support",
    description:
      "Doulas are part of a wider support network for families and communities. RDDA introduces that role while preserving approval controls before profile information is shown publicly.",
  },
];

const publicScopeItems = [
  "Introduces RDDA's relationship to doulas.",
  "Shows approved doula profile information when CMS data is available.",
  "Uses the existing static roster as a fallback until production CMS content is seeded.",
  "Preserves the existing PageShell, PageContainer, and SectionCard primitives.",
  "Only public/published profile information is intended for public display.",
];

const deferredItems = [
  "Does not create public profile detail pages yet.",
  "Does not include booking, matching, direct messaging, or online applications.",
  "Does not expose draft, pending, rejected, hidden, or inactive doula profiles.",
  "Does not require a production database connection for local build validation.",
];

export default async function DoulasPage() {
  const cmsDoulas = await getPublishedDoulaProfiles();
  const doulas = cmsDoulas.length > 0 ? cmsDoulas : staticDoulaPhotos;
  const isUsingCmsRoster = cmsDoulas.length > 0;

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
                  Public doula information is shown only from approved profile data,
                  with the current static roster preserved as a safe fallback.
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
                  the focus while CMS-powered profile approval is introduced in stages.
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
                {isUsingCmsRoster
                  ? "Approved RDDA doula profiles."
                  : "Current RDDA doula roster."}
              </h2>
              <p className="leading-7 text-muted-foreground">
                {isUsingCmsRoster
                  ? "These profiles are loaded from approved and published CMS data."
                  : "These approved photos remain available as a fallback until production CMS profile data is connected and seeded."}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {doulas.map((doula) => (
                <article
                  key={doula.name}
                  className="overflow-hidden rounded-3xl border shadow-sm"
                  style={{
                    background: "var(--card)",
                    borderColor: "rgba(129, 151, 149, 0.38)",
                  }}
                >
                  {doula.imageSrc ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={doula.imageSrc}
                        alt={doula.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex aspect-[4/5] items-center justify-center p-6 text-center"
                      style={{ background: "rgba(187, 199, 196, 0.22)" }}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        RDDA doula
                      </p>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {doula.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {doula.businessName || "RDDA doula"}
                    </p>
                    {doula.bio ? (
                      <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted-foreground">
                        {doula.bio}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Public route scope
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {publicScopeItems.map((item) => (
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
                  What this page does not do yet
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
