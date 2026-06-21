# 12DP — RDDA Find a Doula Directory Planning

## Checkpoint status

Planning checkpoint created after the production deployment validation and post-deployment review sequence was paused.

The site is not public-launch ready because the doula directory still needs to become a real Find a Doula experience with profile data, searchable content, and service-category filtering.

## Reason for changing direction

The prior deployment sequence confirmed that the static website can build and deploy successfully, but public launch readiness depends on the quality and usefulness of the doula directory.

A public RDDA site should allow families to review available doulas, understand each doula's services, and search or filter profiles based on the type of support they are looking for.

## Source inputs

This planning checkpoint is based on:

- Existing deployed RDDA static website.
- Existing `/doulas` route.
- Existing doula images under `repo/public/images/doulas/`.
- Uploaded doula profile text supplied by Dwayne after production deployment validation.
- Existing brand and static-site constraints from earlier checkpoints.

## Current directory limitation

The current `/doulas` page is not sufficient for public launch because it is primarily a visual/photo presentation rather than a functional directory.

Known current gaps:

- Doula profiles are not fully represented as structured cards.
- Profile details are not searchable.
- Services are not filterable.
- Families cannot easily compare doulas by support type.
- Associate members need a clear placement decision.
- Some profile photo filename references from the uploaded data need to be normalized against existing public image filenames.
- Some website/contact fields need careful handling before publication.

## Proposed new page purpose

The `/doulas` route should become a public-facing Find a Doula directory.

Suggested page title:

```text
Find a Doula
```

Suggested page purpose:

```text
Explore RDDA member doulas and find support that fits your family, stage of life, location, and type of care needed.
```

## Static/dynamic constraint change

Earlier project constraints avoided client-side behavior.

A searchable Find a Doula directory requires limited client-side behavior for search and filtering. This is acceptable if it is isolated to the doula directory only.

New constraint decision:

- The site remains static-generated.
- Directory profile data remains local/static in the repo.
- No CMS, database, auth, API, forms, booking, accounts, payments, or server-side search are introduced.
- A small client-side component may be introduced only for `/doulas` search/filter interaction.
- The rest of the site should remain static and non-interactive.

## Data model planning

Create a structured local data source for doula profiles.

Recommended location:

```text
repo/src/data/doulas.ts
```

Recommended TypeScript shape:

```ts
export type DoulaProfile = {
  name: string;
  slug: string;
  image: string | null;
  memberType: "member" | "associate";
  doulaSince?: string;
  services: string[];
  serviceCategories: DoulaServiceCategory[];
  profile: string[];
  businessName?: string;
  websiteLabel?: string;
  websiteUrl?: string;
  email?: string;
  notes?: string;
};

export type DoulaServiceCategory =
  | "birth"
  | "postpartum"
  | "prenatal-education"
  | "bereavement"
  | "death-end-of-life"
  | "photography"
  | "sibling-support"
  | "placenta"
  | "parenting-support"
  | "vbac";
```

## Directory profile fields

Each standard doula card should support:

- Name
- Photo
- Member type
- Doula since year
- Services offered
- Short profile text
- Business/website name
- Public website link, if available and confirmed
- Public email, if available and intended for display
- Category tags

## Search and filter requirements

The Find a Doula page should include:

### Search

Search should match:

- Doula name
- Business name
- Services offered
- Profile text
- Website label

### Filters

Recommended filters:

- All
- Birth Doula
- Postpartum Doula
- Prenatal Education
- Bereavement Support
- Death / End-of-Life Doula
- Photography
- Sibling Support
- Parenting Support

### Result behavior

- Search and filters should work together.
- If no results match, show a calm empty state.
- Include a reset button.
- Keep all profile data client-visible because it is public directory content.

## Member grouping decision

Recommended grouping:

1. Full doula profiles first.
2. Associate members in a separate section below, clearly labeled.

Suggested associate section title:

```text
Associate Members
```

Suggested description:

```text
Associate members are listed separately when they support the RDDA community but do not have a full doula profile in this directory.
```

This avoids mixing short associate listings with full doula cards.

## Profile data normalization required

The uploaded profile source contains some filename/name differences that need to be normalized before implementation.

Examples requiring attention:

- `Ashlee Godzic.jfif` in the pasted text versus existing `Ashlee_Godzic.jpg` in the repo.
- `Kathleen_Howard_Bjornson.jpeg` in the pasted text versus existing `Kathleen_Howard_Bjornson.jpg` in the repo.
- `Laura Gauthier` has profile data but the current image file is `Laura_Gauthier.jpg`.
- `Stephanie_Griffith.jpeg` in the pasted text versus existing `Stephanie_Griffith.jpg` in the repo.
- Alicia appears as an associate listing in the pasted data while the repo has `Alicia_England.jpg`; this requires a confirmation decision before publishing a profile.
- Chelsea and Shelby appear as associate listings while the repo has photos for `Chelsea_Clark.jpg` and `Shelby_Story.jpg`; this requires a confirmation decision before treating them as full profiles.

## Profiles available from uploaded source

The uploaded source includes full or near-full profiles for:

- Alysa Allan
- Amber Cavers
- Amber Thibault
- Ashlee Godzic
- Callista Bierkos
- Christa Duquette
- Janelle Allison
- Kaitlyn Boese
- Kathleen Howard Bjornson
- Laura Gauthier
- Stephanie Griffith
- Andria Sahli
- Jessie Alfano
- Lizzie Cooper
- Mindy Pottruff
- Miranda Allarie

The uploaded source includes associate member listings for:

- Alicia Beauchamp / Merigold Me to You
- Chelsea Clark / email listed
- Shelby Story / Shelby Story Photography

## Implementation approach for 12DQ

Recommended next implementation checkpoint:

```text
12DQ — RDDA Find a Doula Directory Implementation + Validation
```

12DQ should:

1. Create `repo/src/data/doulas.ts`.
2. Convert uploaded profile data into structured local data.
3. Add a small client component for search and filters.
4. Replace the current `/doulas` photo-gallery layout with a Find a Doula directory.
5. Preserve existing doula images.
6. Add no new image assets unless explicitly provided.
7. Keep associate members clearly separated.
8. Run lint/build validation.
9. Add an implementation validation export.

## Recommended component structure

Possible files:

```text
repo/src/data/doulas.ts
repo/src/components/DoulaDirectory.tsx
repo/src/app/doulas/page.tsx
```

`DoulaDirectory.tsx` may use client-side state and should be the only new client component required for this phase.

## Content safety and wording guardrails

Profile text should be preserved where possible, but publication should avoid adding unsupported claims.

Do not add:

- Medical diagnosis or treatment claims.
- Clinical outcomes promises.
- Legal advice or mediation claims.
- Hospice, palliative, or MAID claims unless source text explicitly and appropriately supports them.
- Booking, matching, referral, or availability claims.
- Unverified certifications beyond what the uploaded data states.

For end-of-life and bereavement profiles, use respectful, non-clinical wording.

## Website/contact handling

Do not invent URLs.

Where the uploaded source provides only a website/business name but no URL, the implementation should either:

- display the name as plain text, or
- leave a placeholder only if clearly marked for later confirmation.

Where an email is provided for an associate member, confirm whether it should be publicly displayed before making it a mailto link.

## Launch readiness decision

Public launch remains deferred.

The site can remain deployed for review, but the launch handoff package should not be created until:

- Find a Doula is implemented.
- Profile data is reviewed.
- Search/filter behavior is validated.
- Mobile layout is checked.
- RDDA approves public directory content.

## Next checkpoint

Proceed to:

```text
12DQ — RDDA Find a Doula Directory Implementation + Validation
```
