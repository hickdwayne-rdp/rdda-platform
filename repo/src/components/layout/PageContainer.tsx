import type { ReactNode } from "react";

export interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      {children}
    </div>
  );
}
