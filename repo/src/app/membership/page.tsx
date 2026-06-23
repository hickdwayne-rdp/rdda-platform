import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const applicationRequirements = [
  "Select the appropriate membership type and service categories.",
  "Provide business, contact, website, and social media information for review.",
  "Upload training or certification documents, a headshot, and logo when available.",
  "Provide two professional or character references.",
  "Confirm public listing permissions before RDDA adds information to public-facing spaces."
];

const membershipTypes = [
  {
    title: "Active Established Member",
    fee: "$75 per year",
    description:
      "For doulas applying as active RDDA members with established practice information and public profile details ready for review."
  },
  {
    title: "Active New Member",
    fee: "$75 per year",
    description:
      "For doulas who are newer to practice and applying for active RDDA membership, public listing review, and association connection."
  },
  {
    title: "Associate Member",
    fee: "$50 per year",
    description:
      "For applicants seeking associate connection with RDDA where active public doula listing may not be the primary fit."
  }
];

const serviceCategories = [
  "Birth",
  "Postpartum",
  "Bereavement",
  "Death doula",
  "Full spectrum",
  "Other doula-informed support"
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RDdoulas/"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reddeerdoulaassociation/"
  }
];

export default function MembershipPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-12 py-12 md:py-16">
          <section className="overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 p-6 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.55fr)] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Membership
                </p>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Become a member of Red Deer Doula Association.
                  </h1>

                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                    RDDA membership gives doulas a clear application pathway for
                    association review, public profile consideration, and
                    connection with Central Alberta&apos;s doula community. The
                    public application is reviewed by RDDA before membership and
                    listing details are finalized.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://form.jotform.com/93258823040253"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Open membership application
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Ask a membership question
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Renewal year
                </p>
                <p className="mt-3 text-3xl font-semibold text-primary">
                  Oct 1
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  RDDA membership renews yearly on or before October 1. The
                  association year runs October 1 to September 30.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {membershipTypes.map((item) => (
              <SectionCard key={item.title} className="h-full">
                <div className="flex h-full flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.fee}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h2>
                  </div>
                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </SectionCard>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Application checklist
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What applicants should be ready to provide
                </h2>
                <ul className="space-y-3 leading-7 text-muted-foreground">
                  {applicationRequirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Service categories
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Doula categories included in the application
                </h2>
                <div className="flex flex-wrap gap-2">
                  {serviceCategories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="leading-7 text-muted-foreground">
                  Category selection helps RDDA understand how an applicant wants
                  to be reviewed and represented. Final public listing language
                  should match the applicant&apos;s approved membership details.
                </p>
              </div>
            </SectionCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Review and approval
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Applications are reviewed before public listing
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Submitting an application does not automatically create a
                  public profile. RDDA reviews applications, confirms membership
                  fit, and may add approved members to association spaces and
                  public listings after review and fee payment.
                </p>
                <a
                  href="https://form.jotform.com/93258823040253"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Start the application
                </a>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Connect with RDDA
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Follow RDDA online
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Social channels help families, doulas, and community members
                  stay connected with RDDA updates and public-facing association
                  information.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
