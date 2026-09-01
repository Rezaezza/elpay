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

  const color =
    title === "Paid"
      ? "text-green-500"
      : title === "Processing"
      ? "text-cyan-500"
      : title === "Cancelled"
      ? "text-red-500"
      : title === "Refunded"
      ? "text-orange-500"
      : "text-indigo-600";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center justify-between">
        <Icon
          size={24}
          className={color}
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