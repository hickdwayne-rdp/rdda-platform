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
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </Component>
  );
}
