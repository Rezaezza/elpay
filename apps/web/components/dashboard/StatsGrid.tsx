"use client";

import {
  CreditCard,
  Wallet,
  CheckCircle,
  Loader2,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { StatCard } from "./StatCard";

interface Props {
  loading: boolean;

  stats: {
    totalPayments: number;
    totalVolume: bigint;
    paidPayments: number;
    processingPayments: number;
    refundedPayments: number;
    cancelledPayments: number;
    createdPayments: number;
  };
}

export function StatsGrid({
  loading,
  stats,
}: Props) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-40 animate-pulse rounded-3xl bg-slate-100"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Payments"
        value={stats.totalPayments}
        icon={CreditCard}
      />

      <StatCard
        title="USDC Volume"
        value={Number(stats.totalVolume) / 1_000_000}
        suffix="USDC"
        icon={Wallet}
      />

      <StatCard
        title="Paid"
        value={stats.paidPayments}
        icon={CheckCircle}
      />

      <StatCard
        title="Processing"
        value={stats.processingPayments}
        icon={Loader2}
      />

      <StatCard
        title="Cancelled"
        value={stats.cancelledPayments}
        icon={XCircle}
      />

      <StatCard
        title="Refunded"
        value={stats.refundedPayments}
        icon={RotateCcw}
      />

    </div>
  );
}