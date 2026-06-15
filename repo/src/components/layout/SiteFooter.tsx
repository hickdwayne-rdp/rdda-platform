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
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-base font-semibold tracking-tight text-[var(--foreground)]">
            Red Deer Doula Association
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Central Alberta doula support and community-facing association resources.
          </p>
          <p className="max-w-2xl text-xs leading-5 text-[var(--muted-foreground)]">
            RDDA shares public information only. Medical, mental health, legal,
            crisis, emergency, counselling, hospice, palliative, funeral, estate,
            booking, intake, referral, or specialized service needs should be
            directed to qualified local providers or urgent services as appropriate.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid gap-5 text-sm text-[var(--muted-foreground)] sm:grid-cols-2"
        >
          <div>
            <p className="mb-3 font-semibold text-[var(--foreground)]">Explore</p>
            <ul className="space-y-2">
              {coreFooterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold text-[var(--foreground)]">Connect</p>
            <ul className="space-y-2">
              {supportingFooterLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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
