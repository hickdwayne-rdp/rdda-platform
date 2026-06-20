import Image from "next/image";
import Link from "next/link";

const coreFooterLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Families", href: "/families" },
  { label: "Doulas", href: "/doulas" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

const supportingFooterLinks = [
  { label: "Training", href: "/training" },
  { label: "Partners", href: "/partners" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] p-2 shadow-sm">
              <Image
                src="/brand/rdda-alt-logo-social.png"
                alt="Red Deer Doula Association"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight">
                Red Deer Doula Association
              </p>
              <p className="text-sm text-white/78">
                Central Alberta doula support and community-facing association resources.
              </p>
            </div>
          </div>
          <p className="max-w-2xl text-xs leading-5 text-white/72">
            RDDA shares public information only. Medical, mental health, legal,
            crisis, emergency, counselling, hospice, palliative, funeral, estate,
            booking, intake, referral, or specialized service needs should be
            directed to qualified local providers or urgent services as appropriate.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid gap-5 text-sm text-white/78 sm:grid-cols-2"
        >
          <div>
            <p className="mb-3 font-semibold text-white">Explore</p>
            <ul className="space-y-2">
              {coreFooterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md transition hover:text-[var(--card-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold text-white">Connect</p>
            <ul className="space-y-2">
              {supportingFooterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md transition hover:text-[var(--card-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
