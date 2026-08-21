import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto w-full max-w-7xl p-6">
        {children}
      </div>
    </main>
  );
}