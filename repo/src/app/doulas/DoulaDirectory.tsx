"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type DoulaDirectoryProfile = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  doulaSince?: string;
  servicesOffered?: string;
  businessName?: string;
  websiteText?: string;
  bio?: string[];
  categories: string[];
  profileType?: "doula" | "associate";
};

const filters = [
  "All",
  "Birth",
  "Postpartum",
  "Prenatal education",
  "Bereavement",
  "End-of-life",
  "Photography",
  "Sibling support",
  "Associate",
];

const normalize = (value: string) => value.toLowerCase().trim();

type ProfileDetailProps = {
  label: string;
  value?: string;
};

function ProfileDetail({ label, value }: ProfileDetailProps) {
  if (!value) {
    return null;
  }

  return (
    <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p>
    </div>
  );
}

export function DoulaDirectory({ profiles }: { profiles: DoulaDirectoryProfile[] }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = normalize(query);

    return profiles.filter((profile) => {
      const filterMatches =
        activeFilter === "All" || profile.categories.includes(activeFilter);

      const searchableText = normalize(
        [
          profile.name,
          profile.businessName,
          profile.websiteText,
          profile.doulaSince,
          profile.servicesOffered,
          profile.profileType,
          profile.categories.join(" "),
          profile.bio?.join(" "),
        ]
          .filter(Boolean)
          .join(" "),
      );

      return filterMatches && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, profiles, query]);

  return (
    <section
      className="rounded-[2rem] border p-6 shadow-sm sm:p-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(251, 250, 248, 0.94), rgba(187, 199, 196, 0.26))",
        borderColor: "var(--border)",
      }}
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Find a doula
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Search RDDA doula profiles.
          </h2>
          <p className="leading-7 text-muted-foreground">
            Use the search and service filters to explore currently listed RDDA doula profiles. Profile information is matched to the existing approved photos and remains static until a future profile management workflow is added.
          </p>
        </div>

        <div
          className="rounded-3xl border p-5 text-sm leading-6 text-muted-foreground"
          style={{
            background: "rgba(251, 250, 248, 0.86)",
            borderColor: "rgba(129, 151, 149, 0.42)",
          }}
        >
          <span className="font-semibold text-foreground">
            {filteredProfiles.length}
          </span>{" "}
          of {profiles.length} profiles shown.
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Search by name, service, business, or profile text
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search doulas"
            className="mt-3 w-full rounded-2xl border bg-white px-4 py-3 text-base text-foreground outline-none transition focus:ring-2"
            style={{
              borderColor: "var(--border)",
              boxShadow: "none",
            }}
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full border px-4 py-2 text-sm font-semibold transition"
                style={{
                  background: isActive ? "var(--primary)" : "var(--card)",
                  borderColor: isActive ? "var(--primary)" : "var(--border)",
                  color: isActive ? "white" : "var(--foreground)",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {filteredProfiles.length > 0 ? (
        <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProfiles.map((doula) => {
            const isAssociate = doula.profileType === "associate";
            const statusText = isAssociate
              ? "Associate member"
              : doula.doulaSince
                ? `Doula since ${doula.doulaSince}`
                : "RDDA doula";
            const businessText = doula.businessName || doula.websiteText;

            return (
              <article
                key={doula.name}
                className="flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm"
                style={{
                  background: "var(--card)",
                  borderColor: "rgba(129, 151, 149, 0.38)",
                }}
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden border-b"
                  style={{ borderColor: "rgba(129, 151, 149, 0.28)" }}
                >
                  <Image
                    src={doula.imageSrc}
                    alt={doula.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                  <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {statusText}
                    </p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {doula.name}
                      </h3>
                      {businessText ? (
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {businessText}
                        </p>
                      ) : null}
                    </div>
                  </header>

                  <div className="flex flex-wrap gap-2">
                    {doula.categories.map((category) => (
                      <span
                        key={`${doula.name}-${category}`}
                        className="rounded-full border px-3 py-1 text-xs font-semibold"
                        style={{
                          background: isAssociate
                            ? "rgba(174, 124, 88, 0.12)"
                            : "rgba(187, 199, 196, 0.22)",
                          borderColor: isAssociate
                            ? "rgba(174, 124, 88, 0.34)"
                            : "rgba(129, 151, 149, 0.38)",
                          color: "var(--foreground)",
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <ProfileDetail label="Services offered" value={doula.servicesOffered} />
                    <ProfileDetail label="Website / public listing" value={doula.websiteText} />
                  </div>

                  {doula.bio ? (
                    <div
                      className="mt-auto space-y-3 border-t pt-4 text-sm leading-6 text-muted-foreground"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Profile
                      </p>
                      {doula.bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div
          className="rounded-3xl border p-8 text-center"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            No profiles match that search.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Try another service type or remove part of the search phrase.
          </p>
        </div>
      )}
    </section>
  );
}
