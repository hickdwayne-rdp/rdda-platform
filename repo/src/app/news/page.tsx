import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const updateTypes = [
  {
    title: "Association news",
    description:
      "A future place for public RDDA announcements, association notices, and community-facing updates."
  },
  {
    title: "Community education",
    description:
      "A future place for non-medical education posts, public awareness topics, and general doula-informed learning."
  },
  {
    title: "Member and community impact",
    description:
      "A future place to highlight approved stories about RDDA members, community involvement, and association history."
  }
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]";
const primaryButtonStyle = {
  background: "var(--primary)",
  color: "var(--surface)",
};

export const metadata = {
  title: "News & Community | Red Deer Doula Association",
  description:
    "Static RDDA news and community updates landing page for future public association updates and community impact content."
};

export default function NewsPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  News and community
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    RDDA community updates and public association news.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    This static page gives RDDA a clear public place for future
                    news, community education, member highlights, and association
                    history without adding blog CMS, comments, accounts, or
                    publishing workflows in this phase.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className={primaryButtonClass} style={primaryButtonStyle}>
                    Share a public update question
                  </Link>
                  <Link
                    href="/membership"
                    className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Membership information
                  </Link>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Static launch phase
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  No posts, comments, CMS collections, account access, or dynamic
                  article pages are added yet.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {updateTypes.map((item) => (
              <SectionCard key={item.title} className="h-full">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Future content area
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </SectionCard>
            ))}
          </section>

          <SectionCard>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.5fr)] lg:items-center">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Community history
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  A place for approved RDDA history and impact.
                </h2>
                <p className="leading-7 text-muted-foreground">
                  RDDA has had public community presence beyond individual doula
                  listings. This page creates a careful place to later add
                  approved stories about association history, member involvement,
                  and community education once RDDA confirms the exact content.
                </p>
              </div>
              <Link href="/about" className={primaryButtonClass} style={primaryButtonStyle}>
                Learn about RDDA
              </Link>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
