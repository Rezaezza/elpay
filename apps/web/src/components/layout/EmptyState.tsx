import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function EmptyState({
  icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 py-20">

      {icon}

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-center text-zinc-500">
        {description}
      </p>

    </div>
  );
}