import Link from "next/link";

const primaryNavigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Families", href: "/families" },
  { label: "Doulas", href: "/doulas" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex flex-col rounded-md outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <span className="text-base font-semibold tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
            Red Deer Doula Association
          </span>
          <span className="text-sm text-[var(--muted-foreground)]">
            Central Alberta doula support
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-[var(--muted-foreground)] md:justify-end">
            {primaryNavigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full px-3 py-2 transition hover:bg-[var(--card)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
