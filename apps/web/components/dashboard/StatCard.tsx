"use client";

import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;

  value: string | number;

  suffix?: string;

  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  suffix,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <Icon
          size={24}
          className="text-indigo-600"
        />
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {value} {suffix}
      </h2>
    </div>
  );
}