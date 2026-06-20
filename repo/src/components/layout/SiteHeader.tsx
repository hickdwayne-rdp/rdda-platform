import Image from "next/image";
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
    <header className="border-b border-[var(--border)] bg-[rgba(251,250,248,0.94)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex w-fit items-center gap-4 rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <Image
              src="/brand/rdda-alt-logo-social.png"
              alt="Red Deer Doula Association"
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
              Red Deer Doula Association
            </span>
            <span className="text-sm text-[var(--muted-foreground)]">
              Central Alberta doula support
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-[var(--muted-foreground)] md:justify-end">
            {primaryNavigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-transparent px-3 py-2 transition hover:border-[var(--border)] hover:bg-[var(--card)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
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
