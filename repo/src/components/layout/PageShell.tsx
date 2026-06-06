import type { ReactNode } from "react";

export interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return <div className="min-h-screen">{children}</div>;
}
