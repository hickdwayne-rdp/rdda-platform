import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const guidelineAreas = [
  {
    title: "Respectful association conduct",
    description:
      "Members should represent RDDA with respectful, professional, and community-minded communication across public and association spaces."
  },
  {
    title: "Clear scope of doula support",
    description:
      "Doula support is non-medical and does not replace clinical care, legal advice, counselling, crisis response, or other regulated professional services."
  },
  {
    title: "Accurate public profile information",
    description:
      "Public listing details should be current, truthful, approved for publication, and aligned with the member&apos;s training, services, and membership category."
  },
  {
    title: "Privacy and consent awareness",
    description:
      "Members should be careful with client stories, images, identifying details, testimonials, and social media references unless appropriate consent is confirmed."
  },
  {
    title: "Community referral boundaries",
    description:
      "Members should direct urgent, clinical, safety, legal, counselling, child-protection, hospice, palliative, or emergency needs to appropriate qualified supports."
  },
  {
    title: "Review before publication",
    description:
      "Applications, profile details, and public listing permissions are reviewed before RDDA adds or updates member information on public-facing spaces."
  }
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]";
const primaryButtonStyle = {
  background: "var(--primary)",
  color: "var(--surface)",
};

export const metadata = {
  title: "Membership Guidelines | Red Deer Doula Association",
  description:
    "Static orientation for RDDA membership expectations, public profile boundaries, and association guideline review."
};

export default function MembershipGuidelinesPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Membership guidelines
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Orientation for RDDA membership expectations.
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    This page gives applicants a public-facing orientation to the
                    kinds of expectations connected to RDDA membership. It does
                    not replace any current internal guideline document, board
                    decision, application review, or member approval process.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/membership" className={primaryButtonClass} style={primaryButtonStyle}>
                    Back to membership
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Ask a question
                  </Link>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Important note
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Final membership decisions, current guideline language, and
                  public listing approval remain with RDDA&apos;s review process.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guidelineAreas.map((item, index) => (
              <SectionCard key={item.title} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
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
                  Applicant reminder
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Review current RDDA materials before submitting.
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Applicants should review the membership application carefully
                  and confirm any current guideline documents, fee details,
                  profile permissions, and review steps with RDDA before relying
                  on public website wording alone.
                </p>
              </div>
              <Link href="/membership" className={primaryButtonClass} style={primaryButtonStyle}>
                Membership information
              </Link>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
