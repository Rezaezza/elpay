"use client";

import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
}

export function AnalyticsCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}

        </div>

        <div className="rounded-2xl bg-blue-100 p-4">

          <Icon
            className="text-blue-600"
            size={28}
          />

        </div>

      </div>

    </div>
  );
}