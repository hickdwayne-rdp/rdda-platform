import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const inquiryCategories = [
  {
    label: "Learning about RDDA",
    title: "General RDDA questions",
    description:
      "Visitors may have broad questions about RDDA's public role, community presence, and how the association describes doula-informed support across Central Alberta.",
  },
  {
    label: "Families and community",
    title: "Family and community questions",
    description:
      "Families, support people, and community members may be looking for general information about support categories, public education, or where to begin learning more.",
  },
  {
    label: "Doula connection",
    title: "Doula learning and connection",
    description:
      "Doulas may reach out with general questions about association awareness, public education, professional connection, and community-informed communication.",
  },
  {
    label: "Training",
    title: "Training and learning inquiries",
    description:
      "People exploring training information may use contact as a starting point for broad learning questions without treating the page as enrollment, registration, or booking.",
  },
  {
    label: "Resources",
    title: "Resource and navigation questions",
    description:
      "General resource questions may focus on support awareness, public navigation, and how to think about appropriate services without requesting personalized triage.",
  },
  {
    label: "Partnerships",
    title: "Community partnership conversations",
    description:
      "Community partners may have non-urgent questions about RDDA's public-facing education role, local connection, and respectful ways to communicate about family support.",
  },
];

const communicationExpectations = [
  "Keep communication respectful, clear, and focused on general RDDA information or public-facing questions.",
  "Avoid sharing urgent, emergency, medical, legal, counselling, child-safety, or crisis details through a public website pathway.",
  "Use qualified services, emergency supports, or appropriate professionals when a need is urgent, clinical, legal, safety-related, or time-sensitive.",
  "Treat contact as a non-urgent communication starting point, not as intake, referral, screening, booking, case review, or service matching.",
];

const beforeReachingOut = [
  "Consider whether your question is about general RDDA information, family support awareness, doula connection, training, resources, or community partnership.",
  "Review the public pages for services, families, doulas, training, and resources when your question may already fit one of those areas.",
  "Keep details limited to what is appropriate for a broad public inquiry rather than private medical, legal, counselling, or crisis information.",
  "Use direct qualified supports when you need immediate help, professional advice, safety planning, clinical care, legal guidance, or crisis response.",
];

const contactBoundaries = [
  "This page is not a contact form, intake form, referral form, booking calendar, live scheduling tool, or enrollment workflow.",
  "This page does not provide emergency dispatch, crisis response, medical triage, legal triage, counselling triage, or child-safety assessment.",
  "This page does not create accounts, save inquiries, manage cases, track status, trigger email automation, or operate a CRM workflow.",
  "This page does not use CMS content, database records, API logic, dynamic routing, client state, effects, or client component behavior.",
];

const urgentBoundaries = [
  "For immediate danger or emergency needs, use emergency services or the appropriate urgent support available in your area.",
  "For medical, mental health, counselling, or legal concerns, contact qualified professionals or appropriate public services directly.",
  "For family violence, child-safety, or immediate-risk concerns, use appropriate crisis, safety, or child-protection supports rather than relying on a static website page.",
  "For time-sensitive decisions, confirm current details with the qualified organization, provider, or public authority responsible for that support.",
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Contact RDDA with clear expectations.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association uses public contact as a non-urgent
                starting point for general questions, community connection, and
                clearer understanding of RDDA's public-facing information. This
                page explains appropriate contact expectations without becoming a
                form, intake pathway, referral workflow, booking system, or
                crisis-response tool.
              </p>
            </div>
          </section>

          <SectionCard>
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Contact orientation
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                A starting point for non-urgent contact
              </h2>
              <p className="leading-7 text-muted-foreground">
                This page helps visitors understand the kinds of broad
                communication that may be appropriate for RDDA contact. It is
                informational and orientation-based. Urgent, emergency, medical,
                legal, counselling, safety, or crisis needs should be directed to
                appropriate qualified services or emergency supports.
              </p>
            </div>
          </SectionCard>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inquiryCategories.map((item) => (
              <SectionCard key={item.title}>
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.label}
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

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Communication expectations
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Clear, respectful, and non-urgent communication
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Contact should be framed around general RDDA information,
                  public-facing questions, and community-aware communication. The
                  page does not promise response timelines, case review,
                  eligibility decisions, service outcomes, automated replies, or
                  status tracking.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Expectations list
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  How to frame a broad inquiry
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {communicationExpectations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Before reaching out
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Think through the kind of information you need
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Before contacting RDDA, visitors may find it helpful to identify
                  whether their question is about public information, family
                  support awareness, doula connection, training, resources, or a
                  community conversation. This is guidance only, not a screening
                  process or eligibility checklist.
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Reflection points
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Helpful context to consider
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {beforeReachingOut.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </section>

          <section className="space-y-6">
            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Informational only
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  What this page does not do
                </h2>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {contactBoundaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Urgent and specialized needs
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Urgent and specialized needs require appropriate supports
                </h2>
                <p className="leading-7 text-muted-foreground">
                  RDDA's public contact orientation should not be used for urgent
                  support, emergency help, safety response, professional advice,
                  or specialized assessment. Those needs require appropriate
                  qualified services, emergency supports, or responsible public
                  authorities.
                </p>
                <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {urgentBoundaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Public guidance
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Contact as part of clear public communication
                </h2>
                <p className="leading-7 text-muted-foreground">
                  A careful contact page helps families, doulas, community
                  members, and partners understand how to approach RDDA with
                  non-urgent questions. It supports clear communication while
                  preserving RDDA's static public education role and appropriate
                  professional boundaries.
                </p>
              </div>
            </SectionCard>
          </section>
        </main>
      </PageContainer>
    </PageShell>
  );
}
