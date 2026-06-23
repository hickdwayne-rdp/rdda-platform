import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";
import { getPublishedEvents, type PublicEvent } from "@/lib/payload/publicEvents";

const staticEventsFallback: PublicEvent[] = [];

const formatEventDate = (eventDate: string | undefined) => {
  if (!eventDate) {
    return "Date to be announced";
  }

  const date = new Date(eventDate);

  if (Number.isNaN(date.getTime())) {
    return "Date to be announced";
  }

  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const getEventTime = (event: PublicEvent) => {
  if (event.startTime && event.endTime) {
    return `${event.startTime} - ${event.endTime}`;
  }

  if (event.startTime) {
    return event.startTime;
  }

  return "Time to be announced";
};

const eventScopeItems = [
  "Shows approved and published RDDA events when available.",
  "Keeps draft, pending, rejected, archived, or cancelled event records out of public view.",
  "Supports event date, time, location, host, cost, registration link, and image fields.",
  "Gives visitors a clear place to check for future learning and community opportunities."
];

const deferredItems = [
  "Does not support RSVPs or ticketing yet.",
  "Does not process payments or registration fees.",
  "Does not automatically create events from approved event requests yet.",
  "Does not include calendar feed export yet."
];

export default async function EventsPage() {
  const cmsEvents = await getPublishedEvents();
  const events = cmsEvents.length > 0 ? cmsEvents : staticEventsFallback;
  const isUsingCmsEvents = cmsEvents.length > 0;

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
            <div className="max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                RDDA events
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Community events, learning opportunities, and approved RDDA listings.
              </h1>

              <p className="text-lg leading-8 text-muted-foreground">
                RDDA event listings help families, doulas, and community members
                find approved public learning opportunities, association updates,
                and Central Alberta community connection points when events are
                available.
              </p>
            </div>
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
                Public event listings
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                {isUsingCmsEvents
                  ? "Upcoming approved RDDA events."
                  : "No public events are currently listed."}
              </h2>
              <p className="leading-7 text-muted-foreground">
                {isUsingCmsEvents
                  ? "These events are loaded from approved and published RDDA event records."
                  : "Check back for future RDDA events, community learning opportunities, meetings, and association updates. Doulas with membership questions can also visit the membership page."}
              </p>
            </div>

            {events.length > 0 ? (
              <div className="grid gap-5 lg:grid-cols-2">
                {events.map((event) => (
                  <article
                    key={`${event.title}-${event.eventDate || "date-pending"}`}
                    className="overflow-hidden rounded-3xl border shadow-sm"
                    style={{
                      background: "var(--card)",
                      borderColor: "rgba(129, 151, 149, 0.38)",
                    }}
                  >
                    {event.imageSrc ? (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={event.imageSrc}
                          alt={event.imageAlt || `Event image for ${event.title}`}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null}

                    <div className="space-y-4 p-6">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                          {formatEventDate(event.eventDate)}
                        </p>
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                          {event.title}
                        </h3>
                      </div>

                      <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                        <p>{getEventTime(event)}</p>
                        {event.location ? <p>{event.location}</p> : null}
                        {event.host ? <p>Hosted by {event.host}</p> : null}
                        {event.cost ? <p>Cost: {event.cost}</p> : null}
                      </div>

                      {event.description ? (
                        <p className="leading-7 text-muted-foreground">
                          {event.description}
                        </p>
                      ) : null}

                      {event.registrationLink ? (
                        <a
                          href={event.registrationLink}
                          className="inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                          style={{ background: "var(--primary)" }}
                        >
                          Registration details
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                className="rounded-3xl border p-6"
                style={{
                  background: "rgba(251, 250, 248, 0.82)",
                  borderColor: "rgba(129, 151, 149, 0.38)",
                }}
              >
                <div className="max-w-3xl space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    No public events are currently listed.
                  </h3>
                  <p className="leading-7 text-muted-foreground">
                    RDDA can use this page for upcoming workshops, member
                    meetings, community education, training opportunities, and
                    approved public event listings. For now, visitors can connect
                    through membership, contact, or social channels.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/membership"
                      className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Membership information
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Contact RDDA
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
                  {eventScopeItems.map((item) => (
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
