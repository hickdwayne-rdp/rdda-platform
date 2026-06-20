import type { ElementType, ReactNode } from "react";

export interface SectionCardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}

export function SectionCard({
  children,
  as: Component = "section",
  className = "",
  id,
  ariaLabelledBy,
}: SectionCardProps) {
  const classes = [
    "rounded-3xl border p-6 shadow-sm sm:p-8 lg:p-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      id={id}
      className={classes}
      style={{
        background:
          "radial-gradient(circle at top right, rgba(187, 199, 196, 0.26), transparent 13rem), linear-gradient(145deg, rgba(255, 255, 255, 0.92), var(--card) 62%, rgba(217, 216, 214, 0.22))",
        borderColor: "var(--border)",
      }}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </Component>
  );
}
