"use client";

import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";
import { VolumeChart } from "@/components/analytics/VolumeChart";
import { StatusChart } from "@/components/analytics/StatusChart";

export default function AnalyticsPage() {
  const volumeData = [
    {
      day: "Today",
      volume: 0,
    },
  ];

  const statusData = [
    {
      name: "Created",
      value: 0,
    },
    {
      name: "Approved",
      value: 0,
    },
    {
      name: "Processing",
      value: 0,
    },
    {
      name: "Paid",
      value: 0,
    },
    {
      name: "Cancelled",
      value: 0,
    },
    {
      name: "Refunded",
      value: 0,
    },
    {
      name: "Expired",
      value: 0,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-muted-foreground">
          Monitor payment performance and business insights.
        </p>
      </div>

      <AnalyticsOverview
        totalVolume={0}
        totalPayments={0}
        paidPayments={0}
        processingPayments={0}
      />

      <VolumeChart
        data={volumeData}
      />

      <StatusChart
        data={statusData}
      />

      <div className="rounded-2xl border bg-card p-8">
        <h2 className="text-xl font-semibold">
          Advanced Analytics
        </h2>

        <p className="mt-3 text-muted-foreground">
          Advanced analytics, revenue reports, payment trends,
          merchant performance, and business insights will be
          available in a future release.
        </p>
      </div>
    </div>
  );
}