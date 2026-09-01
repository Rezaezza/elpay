"use client";

import {
  Wallet,
  DollarSign,
  CheckCircle2,
  Activity,
} from "lucide-react";

import { AnalyticsCard } from "./AnalyticsCard";

interface Props {
  totalVolume: number;
  totalPayments: number;
  paidPayments: number;
  processingPayments: number;
}

export function AnalyticsOverview({
  totalVolume,
  totalPayments,
  paidPayments,
  processingPayments,
}: Props) {

  const successRate =
    totalPayments === 0
      ? 0
      : Math.round(
          (paidPayments / totalPayments) * 100
        );

  const averagePayment =
    totalPayments === 0
      ? 0
      : (totalVolume / totalPayments).toFixed(2);

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <AnalyticsCard
        title="Revenue"
        value={`${totalVolume} USDC`}
        subtitle="Total payment volume"
        icon={Wallet}
      />

      <AnalyticsCard
        title="Success Rate"
        value={`${successRate}%`}
        subtitle="Completed payments"
        icon={CheckCircle2}
      />

      <AnalyticsCard
        title="Average Payment"
        value={`${averagePayment} USDC`}
        subtitle="Average transaction"
        icon={DollarSign}
      />

      <AnalyticsCard
        title="Active Payments"
        value={processingPayments}
        subtitle="Currently in escrow"
        icon={Activity}
      />

    </div>
  );
}