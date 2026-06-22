import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionCard } from "@/components/ui/SectionCard";

import {
  DoulaDirectory,
  type DoulaDirectoryProfile,
} from "./DoulaDirectory";

const doulaProfiles: DoulaDirectoryProfile[] = [
  {
    name: "Alicia England",
    imageSrc: "/images/doulas/Alicia_England.jpg",
    imageAlt: "Portrait of Alicia England",
    servicesOffered: "Associate member listing pending full profile details",
    businessName: "RDDA associate member",
    bio: [
      "A full public profile has not yet been matched to this name. This card keeps the existing approved image in place until RDDA confirms the correct profile details.",
    ],
    categories: ["Associate"],
    profileType: "associate",
  },
  {
    name: "Alysa Allan",
    imageSrc: "/images/doulas/Alysa_Allan.jpg",
    imageAlt: "Portrait of Alysa Allan",
    doulaSince: "2024",
    servicesOffered: "Birth Doula and Prenatal Educator",
    websiteText: "Your Birth Gal",
    bio: [
      "Supporting women and their families through pregnancy, birth, and postpartum is truly an honor and a privilege. As a holistic birth doula, childbirth educator, and nurse, I blend clinical understanding, intuitive care, and grounded, heart-centered support to every family I serve.",
      "Every mama deserves her best birth, whatever, wherever, and however that looks for her. I believe deeply in the power of informed choice and bodily autonomy, and my role is to offer grounded guidance, evidence-based information, and compassionate support so you can move through your journey feeling calm, safe, confident, and empowered.",
      "My hope is to help create a birth space where you feel supported, seen, heard, and your experience feels deeply your own.",
    ],
    categories: ["Birth", "Prenatal education"],
  },
  {
    name: "Amber Cavers",
    imageSrc: "/images/doulas/Amber_Cavers.jpg",
    imageAlt: "Portrait of Amber Cavers",
    doulaSince: "2018",
    servicesOffered: "Prenatal Education, Labour/Birth Doula, and Sibling Support",
    websiteText: "Wild Rose Birth Services",
    bio: [
      "Doulas are adaptable to many different environments and situations, but what is important is finding a good fit for you. I do not believe there is a proper way to birth. I have supported home births, hospital births, and c-sections. You can choose a med-free birth or all the drugs. What matters is that you feel supported and educated in your decision.",
      "My goal for all my doula clients is that they feel like they have someone in their corner, rooting for them all the way.",
    ],
    categories: ["Birth", "Prenatal education", "Sibling support"],
  },
  {
    name: "Amber Thibault",
    imageSrc: "/images/doulas/Amber_Thibault.jpg",
    imageAlt: "Portrait of Amber Thibault",
    doulaSince: "2014",
    servicesOffered: "Birth Doula and Postpartum Care",
    websiteText: "Rural Care Co.",
    bio: [
      "At Rural Care Co., the care of a doula blends clinical nursing expertise with intuitive, holistic practices, creating support that honours your body, your preferences, and your birth vision.",
      "Our care is focused on those living rurally and primarily offered for families planning to birth under the care of a midwife, with a preference for home birth settings where continuity, comfort, and physiological birth are central.",
    ],
    categories: ["Birth", "Postpartum"],
  },
  {
    name: "Andria Sahli",
    imageSrc: "/images/doulas/Andria_Sahli.jpg",
    imageAlt: "Portrait of Andria Sahli",
    doulaSince: "2025",
    servicesOffered: "Birth Doula and Postpartum Doula",
    websiteText: "Bloom & Beyond",
    bio: [
      "Hi, I am Andria. I am passionate about supporting families through the transformative journey of birth and postpartum. As a doula, I am here to provide guidance, comfort, and advocacy every step of the way.",
      "I provide evidence-based care with a gentle, personal approach, making each birth experience unique. I work carefully alongside you to curate a birth plan that aligns with you.",
      "Outside doula work, I am a mother of two young adult men and wife to an oil and gas business owner. I am inspired by nature and a natural approach to living, helping others feel empowered and confident during life’s biggest moments.",
    ],
    categories: ["Birth", "Postpartum"],
  },
  {
    name: "Ashlee Godzic",
    imageSrc: "/images/doulas/Ashlee_Godzic.jpg",
    imageAlt: "Portrait of Ashlee Godzic",
    doulaSince: "2024",
    servicesOffered: "Birth Doula, Postpartum Doula, and Childbirth Educator",
    websiteText: "Heartfelt Moments Doula Care",
    bio: [
      "Hey, I am Ashlee with Heartfelt Moments Doula Care. Being a doula is a title I do not take lightly.",
      "I provide personalized, compassionate doula services to guide you through every step of your pregnancy, birth, and postpartum journey. Whether you are seeking natural birth support at home or navigating a hospital birth and wanting to feel fully informed and empowered in your choices, I am here to help you feel confident, supported, and nurtured.",
      "I am committed to creating a peaceful, nurturing environment and strive to ensure that every family I work with feels heard, respected, celebrated, and cared for.",
    ],
    categories: ["Birth", "Postpartum", "Prenatal education"],
  },
  {
    name: "Callista Bierkos",
    imageSrc: "/images/doulas/Callista_Bierkos.jpg",
    imageAlt: "Portrait of Callista Bierkos",
    doulaSince: "2015",
    servicesOffered: "Birth Doula",
    websiteText: "Night Owl Doula",
    bio: [
      "Bringing a wealth of healthcare experience from both Canada and the UK, Callista embodies an inclusive, compassionate, evidence-based approach.",
      "Motivated by a passion for fostering fairness and well-being in communities, Callista volunteers with local organizations, providing support to families and advocating for mental health awareness.",
      "During her downtime, you will find her playing hockey, expanding her collection of books, belting out Hozier tunes, and proudly embracing her title as the silliest Auntie.",
    ],
    categories: ["Birth"],
  },
  {
    name: "Chelsea Clark",
    imageSrc: "/images/doulas/Chelsea_Clark.jpg",
    imageAlt: "Portrait of Chelsea Clark",
    servicesOffered: "Associate member",
    businessName: "Chelsea Clark",
    websiteText: "chelseaclark@hotmail.com",
    bio: [
      "Chelsea Clark is listed in the uploaded associate member information. A full public profile has not yet been provided.",
    ],
    categories: ["Associate"],
    profileType: "associate",
  },
  {
    name: "Christa Duquette",
    imageSrc: "/images/doulas/Christa_Duquette.jpeg",
    imageAlt: "Portrait of Christa Duquette",
    doulaSince: "2012",
    servicesOffered: "Birth and Bereavement Doula, Childbirth Educator, Hypno-Doula",
    websiteText: "Lil Apple Doula",
    bio: [
      "When you and your team step into your birth space, you should feel confident to navigate the path ahead while being surrounded by compassion and kindness. This is my hope for all birthing families.",
      "Birth is a journey, one that should empower. Throughout my years as a doula, I have been fortunate to experience many unique births, and it is truly an honour to provide support to every client in a very individualized way.",
      "I greatly enjoy being able to share my passion for birth through education and guidance, and I continue to look forward to serving families in the Central Alberta area.",
    ],
    categories: ["Birth", "Bereavement", "Prenatal education"],
  },
  {
    name: "Janelle Allison",
    imageSrc: "/images/doulas/Janelle_Allison.jpg",
    imageAlt: "Portrait of Janelle Allison",
    doulaSince: "2023",
    servicesOffered: "Birth Doula and Childbirth Educator",
    websiteText: "Rocky Ridge Doula",
    bio: [
      "It is my absolute passion to support moms throughout their pregnancy, birth, and postpartum experience. I love getting to connect with people and hear their wishes, goals, fears, and triumphs.",
      "Being welcomed into their space to support them and their partner is such a great feeling. Birth is so empowering, and I want moms to lean into that.",
      "I would love to support, encourage, educate, and cheer you on in whatever way you need.",
    ],
    categories: ["Birth", "Prenatal education", "Postpartum"],
  },
  {
    name: "Jessie Alfano",
    imageSrc: "/images/doulas/Jessie_Alfano.jpeg",
    imageAlt: "Portrait of Jessie Alfano",
    doulaSince: "2025",
    servicesOffered: "Death Doula",
    websiteText: "Petals of Passing",
    bio: [
      "I am Jessie Alfano, a certified End of Life Doula through Rhodes Wellness College with a background in funeral work. I am a deeply spiritual person who connects with clients with gentleness and grace, honouring whatever beliefs or traditions are meaningful to them.",
      "I am drawn to doula work because I believe dying deserves the same care, preparation, and love as birth. My passion is creating safe, sacred spaces where people can feel their feelings, ask hard questions, and be truly seen as they navigate death, grief, and transition.",
      "I hold space and bear witness, never rushing, fixing, or judging, so that families feel supported, grounded, and less alone during some of the most tender moments of their lives.",
    ],
    categories: ["End-of-life", "Bereavement"],
  },
  {
    name: "Kaitlyn Boese",
    imageSrc: "/images/doulas/Kaitlyn_Boese.jpg",
    imageAlt: "Portrait of Kaitlyn Boese",
    doulaSince: "2018",
    servicesOffered: "Birth Doula",
    websiteText: "Kaitlyn Boese Doula Services",
    bio: [
      "My passion is helping parents during their labour and delivery feel empowered. I love seeing parents meet their little one and become a family.",
      "Whether you want a homebirth with a midwife or have a cesarean planned, I look forward to helping you prepare for the process, be informed about what to expect, and advocate for yourself.",
      "I hope your birth story has you feeling supported, encouraged, and empowered.",
    ],
    categories: ["Birth"],
  },
  {
    name: "Kathleen Howard Bjornson",
    imageSrc: "/images/doulas/Kathleen_Howard_Bjornson.jpg",
    imageAlt: "Portrait of Kathleen Howard Bjornson",
    doulaSince: "2025",
    servicesOffered: "Birth Doula, Postpartum Doula, and Parenting Support",
    websiteText: "Village Embrace",
    bio: [
      "Whether it is your first or fifth baby, your body, mind, and emotions are continually moving through the changes that new life brings. I believe every person deserves to feel supported, not only during birth but in all the moments on either side of it.",
      "I meet you where you are at with practical, evidence-based information, a trauma-informed lens, and a deep respect for you as the expert on yourself and your family.",
      "I offer grounded, wholehearted doula support for families who want a birth rooted in calm and confidence, and for those navigating fears, questions, or uncertainty along the way.",
      "No matter where you choose to give birth or with which provider, I will be there to help you feel steady, advocate for your choices, and create the best birth experience possible.",
    ],
    categories: ["Birth", "Postpartum"],
  },
  {
    name: "Laura Gauthier",
    imageSrc: "/images/doulas/Laura_Gauthier.jpg",
    imageAlt: "Portrait of Laura Gauthier",
    doulaSince: "2012",
    servicesOffered: "Birth and Bereavement Doula, Birth Photography, Placenta Encapsulation, Childbirth Educator",
    websiteText: "Baby Mine Doula",
    bio: [
      "I believe that being educated in all of your rights and options is essential for you to have a positive birth experience, regardless of outcomes.",
      "In my opinion, there is no right way to birth, only the right way for you. It is my goal that all of my families look back on their births with satisfaction and joy.",
    ],
    categories: ["Birth", "Bereavement", "Photography", "Prenatal education"],
  },
  {
    name: "Lizzie Cooper",
    imageSrc: "/images/doulas/Lizzie_Cooper.jpeg",
    imageAlt: "Portrait of Lizzie Cooper",
    doulaSince: "2025",
    servicesOffered: "Bereavement Doula and Death Doula",
    websiteText: "Gentleend",
    bio: [
      "I have lost two husbands before age 40 and walked my son, at age five, through losing his dad. I was also a caregiver for many years for my dad while we walked through end stage renal failure.",
      "I come to this work through lived experiences. I know it is what I am meant to do.",
    ],
    categories: ["Bereavement", "End-of-life"],
  },
  {
    name: "Mindy Pottruff",
    imageSrc: "/images/doulas/Mindy_Pottruff.jpeg",
    imageAlt: "Portrait of Mindy Pottruff",
    doulaSince: "2025",
    servicesOffered: "Death Doula",
    websiteText: "Eternal Embrace",
    bio: [
      "Hi, my name is Mindy. I am a mom of three beautiful kids and an adorable long-haired chihuahua. I spent the past 30 years as a hairstylist; however, after sitting with my grandfather for his last two weeks of life, I knew that was where I needed to be.",
      "I trained to be a death doula through Rhodes Wellness College and knew I was in the right place. I am dedicated to providing emotional, spiritual, and practical support to individuals and their families during the end-of-life journey.",
      "My mission is to create a peaceful, meaningful experience, honoring each person’s wishes, values, and cultural traditions while offering guidance through this sacred time. With deep respect for life’s transitions, I am here to walk alongside you, offering comfort, clarity, and care.",
    ],
    categories: ["End-of-life"],
  },
  {
    name: "Miranda Allarie",
    imageSrc: "/images/doulas/Miranda_Allarie.jpg",
    imageAlt: "Portrait of Miranda Allarie",
    doulaSince: "2025",
    servicesOffered: "Birth Doula and Birth Photographer",
    websiteText: "Gracefully Rooted",
    bio: [
      "Hey, I am Miranda, wife and mom to two beautiful boys. I once said I could never be a doula and then stumbled upon my calling as a doula.",
      "Talking with clients and from my own personal experiences, I have realized there is a huge gap in information about birth. Women are only learning about options and procedures when they are already in labour.",
      "I believe we should all know exactly what the birthing process is and what options we will have. I love supporting clients and their families to be informed and empowered about their birth.",
    ],
    categories: ["Birth", "Photography"],
  },
  {
    name: "Shelby Story",
    imageSrc: "/images/doulas/Shelby_Story.jpg",
    imageAlt: "Portrait of Shelby Story",
    servicesOffered: "Associate member",
    businessName: "Shelby Story Photography",
    bio: [
      "Shelby Story is listed in the uploaded associate member information as Shelby Story Photography. A full public profile has not yet been provided.",
    ],
    categories: ["Associate", "Photography"],
    profileType: "associate",
  },
  {
    name: "Stephanie Griffith",
    imageSrc: "/images/doulas/Stephanie_Griffith.jpg",
    imageAlt: "Portrait of Stephanie Griffith",
    doulaSince: "2022",
    servicesOffered: "Birth Doula and VBAC Doula",
    websiteText: "Little Loves Doula Care",
    bio: [
      "I am honored to walk alongside families through pregnancy, birth, and the early weeks of parenthood. My approach is rooted in trust, respect, and inclusion.",
      "I believe birth is a powerful and deeply personal experience, and that every body, regardless of shape, size, or color, deserves to feel confident in their strength and honored in their choices.",
      "Through strong prenatal connection, I prioritize education and open conversation so you enter labour and delivery feeling informed, confident, and clear about your options.",
      "I stand by your side with knowledge, advocacy, and emotional presence, cheering you on, celebrating your wins, and supporting your transition into parenthood with care that is thoughtfully tailored to meet you exactly where you are and help you shine.",
    ],
    categories: ["Birth", "Postpartum", "Prenatal education"],
  },
];

const doulaSupportAreas = [
  {
    eyebrow: "Search",
    title: "Find support by name or service",
    description:
      "Search profile text, business names, and services to narrow the directory to doulas who may fit the support you are looking for.",
  },
  {
    eyebrow: "Filter",
    title: "Explore support types",
    description:
      "Filter profiles by birth, postpartum, prenatal education, bereavement, end-of-life, photography, sibling support, and associate member listings.",
  },
  {
    eyebrow: "Review",
    title: "Read matched profile details",
    description:
      "Each card uses the existing approved photo and the profile information currently provided to RDDA for public directory review.",
  },
  {
    eyebrow: "Next phase",
    title: "Profile updates remain managed",
    description:
      "Profile edits are still handled manually. A future doula portal could allow members to request profile updates and submit events for approval.",
  },
];

const publicScopeItems = [
  "Uses the current approved doula image files without adding new photo assets.",
  "Adds profile information matched by name from the supplied directory text.",
  "Provides a small isolated client-side search and filter component for the directory only.",
  "Keeps profile information static in the repository for this phase.",
  "Separates associate member listings when complete doula profile details are not available.",
];

const deferredItems = [
  "Does not create doula login accounts yet.",
  "Does not allow doulas to directly edit public profiles yet.",
  "Does not create booking, matching, direct messaging, or payment workflows.",
  "Does not create profile detail pages yet.",
  "Does not publish unconfirmed profile data where a name match is unclear.",
];

export default function DoulasPage() {
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
                  Find a doula
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Explore RDDA doula profiles across Central Alberta.
                </h1>

                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  Search the current RDDA directory by name, service type, business name, or profile details. The directory keeps the existing approved photos and adds profile information matched by name from the supplied RDDA profile source.
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
                  Directory status
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  This is a static public directory with search and filters. Profile updates, event requests, and online training would belong to a future member portal phase.
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

          <DoulaDirectory profiles={doulaProfiles} />

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
