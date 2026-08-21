import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      {(title || description) && (
        <div className="mb-6">

          {title && (
            <h2 className="text-lg font-semibold text-white">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-1 text-sm text-zinc-500">
              {description}
            </p>
          )}

        </div>
      )}

      {children}

    </section>
  );
}