"use client";

import { DollarSign } from "lucide-react";

export function RevenueCard() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-400">
          Revenue
        </span>

        <DollarSign className="h-5 w-5 text-emerald-400" />
      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        $12,540
      </h2>

      <p className="mt-2 text-sm text-emerald-400">
        +18.4% this month
      </p>
    </div>
  );
}