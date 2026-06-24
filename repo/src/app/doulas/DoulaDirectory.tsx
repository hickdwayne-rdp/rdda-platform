"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type DoulaDirectoryProfile = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  imageZoom?: number;
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

const sortOptions = [
  { label: "Randomized", value: "random" },
  { label: "Alphabetical", value: "alphabetical" },
] as const;

type SortMode = (typeof sortOptions)[number]["value"];

const normalize = (value: string) => value.toLowerCase().trim();

const sortProfilesAlphabetically = (profiles: DoulaDirectoryProfile[]) =>
  [...profiles].sort((firstProfile, secondProfile) =>
    firstProfile.name.localeCompare(secondProfile.name),
  );

const shuffleProfiles = (profiles: DoulaDirectoryProfile[]) => {
  const shuffledProfiles = [...profiles];

  for (let index = shuffledProfiles.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledProfiles[index], shuffledProfiles[swapIndex]] = [
      shuffledProfiles[swapIndex],
      shuffledProfiles[index],
    ];
  }

  return shuffledProfiles;
};

const getProfileImageZoom = (profile: DoulaDirectoryProfile) => {
  if (profile.imageZoom) {
    return profile.imageZoom;
  }

  if (profile.name === "Lizzie Cooper" || profile.name === "Mindy Pottruff") {
    return 0.8;
  }

  if (profile.name === "Miranda Allarie") {
    return 0.7;
  }

  return 1;
};

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
  const [sortMode, setSortMode] = useState<SortMode>("random");
  const [randomizedProfiles, setRandomizedProfiles] = useState(profiles);

  useEffect(() => {
    setRandomizedProfiles(shuffleProfiles(profiles));
  }, [profiles]);

  const orderedProfiles = useMemo(() => {
    if (sortMode === "alphabetical") {
      return sortProfilesAlphabetically(profiles);
    }

    return randomizedProfiles;
  }, [profiles, randomizedProfiles, sortMode]);

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = normalize(query);

    return orderedProfiles.filter((profile) => {
      const filterMatches =
        activeFilter === "All" || profile.categories.includes(activeFilter);

      const searchableText = normalize(
        [
          profile.name,
          profile.businessName,
          profile.servicesOffered,
          profile.websiteText,
          profile.categories.join(" "),
          profile.bio?.join(" "),
        ]
          .filter(Boolean)
          .join(" "),
      );

      return filterMatches && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, orderedProfiles, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-primary">Search doulas</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, service, business, or profile text"
            className="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            style={{ borderColor: "var(--border)" }}
          />
        </label>
        <p className="text-sm text-muted-foreground">
          Showing {filteredProfiles.length} of {profiles.length} listings
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-primary bg-primary text-white shadow-sm"
                : "border-[var(--border)] bg-white/80 text-primary hover:border-primary"
            }`}
          >
            {filter}
          </button>
        ))}
        <span className="mx-1 hidden h-9 w-px bg-[var(--border)] sm:block" />
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSortMode(option.value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              sortMode === option.value
                ? "border-secondary bg-secondary text-white shadow-sm"
                : "border-[var(--border)] bg-white/80 text-primary hover:border-secondary"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {filteredProfiles.length === 0 ? (
        <div className="rounded-3xl border bg-white/80 p-8 text-center shadow-sm" style={{ borderColor: "var(--border)" }}>
          <p className="text-lg font-semibold text-primary">No matching doulas found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try clearing the search field or choosing a different service filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProfiles.map((profile) => {
            const profileType = profile.profileType ?? "doula";
            const imageZoom = getProfileImageZoom(profile);

            return (
              <article
                key={profile.name}
                className="flex h-full flex-col overflow-hidden rounded-3xl border bg-white/90 shadow-sm"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--card-muted)]">
                  <Image
                    src={profile.imageSrc}
                    alt={profile.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    style={{
                      objectPosition: profile.imagePosition ?? "center top",
                      transform: `scale(${imageZoom})`,
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {profileType === "associate"
                        ? "Associate member"
                        : profile.doulaSince
                          ? `Doula since ${profile.doulaSince}`
                          : "RDDA member"}
                    </p>
                    <h3 className="text-2xl font-semibold text-primary">{profile.name}</h3>
                    {profile.businessName ? (
                      <p className="text-sm font-semibold text-muted-foreground">
                        {profile.businessName}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {profile.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-[var(--background)] px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <ProfileDetail label="Services offered" value={profile.servicesOffered} />
                  <ProfileDetail label="Website / public listing" value={profile.websiteText} />

                  {profile.bio?.length ? (
                    <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Profile
                      </p>
                      <div className="mt-2 space-y-3 text-sm leading-6 text-muted-foreground">
                        {profile.bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
