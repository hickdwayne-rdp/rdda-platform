import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

const faqSections = [
  {
    label: "Using this FAQ",
    title: "A starting point for general understanding",
    items: [
      {
        question: "How should I use this FAQ?",
        answer:
          "Use this page as general orientation to RDDA, doula support language, public resources, and website boundaries. It is a starting point for awareness, not a complete answer for individual circumstances.",
      },
      {
        question: "Is this page personalized advice?",
        answer:
          "No. This FAQ is static public information. It does not provide personalized assessment, clinical advice, legal advice, eligibility screening, service matching, intake, referral routing, or case-specific direction.",
      },
      {
        question: "Can this page help with urgent or clinical questions?",
        answer:
          "No. Urgent, emergency, medical, mental health, legal, safety, or crisis concerns should be directed to appropriate qualified services, public authorities, or emergency supports.",
      },
    ],
  },
  {
    label: "About RDDA",
    title: "Public information and community clarity",
    items: [
      {
        question: "What is RDDA?",
        answer:
          "Red Deer Doula Association is represented on this website through broad public information about doula support, education, resources, and community connection across Central Alberta.",
      },
      {
        question: "Who is this website for?",
        answer:
          "The website is written for families, doulas, community partners, and general visitors who want clearer public information about support language and appropriate boundaries.",
      },
      {
        question: "What kind of information does RDDA share publicly?",
        answer:
          "RDDA public pages share general awareness, education, support-category language, and community-oriented information. The content stays informational and boundary-aware.",
      },
    ],
  },
  {
    label: "Doula support basics",
    title: "Non-medical support awareness",
    items: [
      {
        question: "What kind of support may doulas provide?",
        answer:
          "Doula support may include emotional, physical, informational, and practical support for families during pregnancy, birth, postpartum, fertility, loss, lifecycle care, and family transitions.",
      },
      {
        question: "Is doula support medical care?",
        answer:
          "No. Doula support does not replace medical care, diagnosis, treatment, or clinical decision-making. Families should continue working with qualified health-care providers for clinical needs.",
      },
      {
        question:
          "Can doula support relate to birth, postpartum, fertility, loss, or family transitions?",
        answer:
          "Yes. Doula support may relate to those broad areas at an informational and non-medical support level. Specific decisions should be confirmed with appropriate qualified providers or organizations.",
      },
    ],
  },
  {
    label: "Families and support people",
    title: "General support-category awareness",
    items: [
      {
        question: "Can families use this website to learn about support options?",
        answer:
          "Yes. Families and support people can use RDDA public pages to understand broad support categories, prepare questions, and think about support needs.",
      },
      {
        question: "Does this FAQ tell me what support is right for my situation?",
        answer:
          "No. This FAQ does not provide personalized guidance, eligibility screening, intake direction, referral instructions, or service matching.",
      },
      {
        question: "Should I rely only on this website when making decisions?",
        answer:
          "No. Use this static information alongside current information from qualified providers, appropriate organizations, and responsible public supports when decisions require current or individualized details.",
      },
    ],
  },
  {
    label: "Doulas and learning",
    title: "Community-aware language and broad orientation",
    items: [
      {
        question: "Can doulas use this site for learning and language clarity?",
        answer:
          "Yes. Doulas may use RDDA public content for community-aware language, general professional orientation, and clearer public communication about support boundaries.",
      },
      {
        question: "Does this page provide certification or credentialing information?",
        answer:
          "No. This FAQ does not create certification, credentialing, approval, assessment, application, enrollment, membership, or professional review pathways.",
      },
      {
        question: "Does the FAQ create a training registration pathway?",
        answer:
          "No. The FAQ is static and informational. It does not provide course registration, training fees, enrollment workflows, waitlists, learner accounts, or payment tools.",
      },
    ],
  },
  {
    label: "Resources and community supports",
    title: "Resource awareness without referral workflow",
    items: [
      {
        question: "Does RDDA provide a live resource directory?",
        answer:
          "No. Resource information on this website is broad public education and support-navigation awareness. It is not a live directory, verified listing, database, referral pathway, or intake system.",
      },
      {
        question: "How should I use resource information?",
        answer:
          "Use resource information as a starting point for questions, conversations, and support planning. Confirm current details directly with qualified providers or organizations when current information matters.",
      },
      {
        question:
          "What should I do for urgent, emergency, medical, legal, mental health, or safety needs?",
        answer:
          "Use appropriate qualified services, emergency supports, public authorities, or responsible organizations. This static website does not provide triage, crisis response, counselling, legal advice, or clinical guidance.",
      },
    ],
  },
  {
    label: "Contact and community connection",
    title: "General communication and partnership boundaries",
    items: [
      {
        question: "Can I contact RDDA through this website?",
        answer:
          "Contact-related information should be understood as general public communication orientation. This website does not create a form, intake workflow, booking system, or automated response pathway.",
      },
      {
        question: "Does the website manage urgent requests?",
        answer:
          "No. Static public pages cannot manage urgent requests, emergency needs, case coordination, status tracking, clinical questions, legal issues, safety concerns, or crisis situations.",
      },
      {
        question:
          "Does the partners page create a partner application or referral pathway?",
        answer:
          "No. Partnership language is broad, respectful, and non-transactional. It does not create partner applications, approvals, endorsement claims, rankings, referral commitments, sponsor listings, or event submission workflows.",
      },
    ],
  },
  {
    label: "Website boundaries",
    title: "Static public information only",
    items: [
      {
        question: "Is this website interactive?",
        answer:
          "No. The current public pages are static informational pages. They do not provide personalized assessment, live support, user accounts, saved records, or dynamic answer logic.",
      },
      {
        question: "Does this FAQ use search, filtering, accounts, or saved answers?",
        answer:
          "No. This FAQ does not use search, filtering, account access, saved FAQ content, CMS-managed answers, database records, API-driven answer logic, or personalization.",
      },
      {
        question:
          "Does this website provide booking, payment, intake, or referral tools?",
        answer:
          "No. This website does not provide booking, payments, intake forms, referral tools, eligibility screening, CRM workflows, email automation, or hidden dynamic systems.",
      },
    ],
  },
];

const closingPoints = [
  "Clear public information can help families, doulas, and community partners understand language, boundaries, and appropriate next steps.",
  "This page remains static, public, and informational.",
  "Important current or individualized details should be confirmed with qualified providers, appropriate organizations, or responsible public services.",
];

export default function FAQPage() {
  return (
    <PageShell>
      <PageContainer>
        <main className="space-y-10 py-12 md:py-16">
          <section className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Questions about RDDA, doula support, and public information.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Red Deer Doula Association answers common questions in general,
                source-aligned language for families, doulas, community
                partners, and visitors across Central Alberta. This page is
                static and informational only.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            {faqSections.map((section) => (
              <SectionCard key={section.title}>
                <div className="space-y-6">
                  <div className="max-w-3xl space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {section.label}
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <article key={item.question} className="space-y-3">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {item.question}
                        </h3>
                        <p className="leading-7 text-muted-foreground">
                          {item.answer}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </SectionCard>
            ))}
          </section>

          <SectionCard>
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Closing clarity
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Clear answers support respectful community understanding
              </h2>
              <p className="leading-7 text-muted-foreground">
                The FAQ is part of RDDA&apos;s public education role. It helps
                visitors understand broad language, public boundaries, and
                appropriate use of static website information.
              </p>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                {closingPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionCard>
        </main>
      </PageContainer>
    </PageShell>
  );
}
