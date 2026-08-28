"use client";

import { Wallet, TrendingUp } from "lucide-react";


import {
  useDashboard,
} from "@elpay/blockchain";

import { StatsGrid } from "./StatsGrid";

export function DashboardHero() {
 
  const {
  data,
  isLoading,
} = useDashboard();

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-10 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-indigo-100">
              Welcome to
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              ElPay 
            </h1>

            <p className="mt-4 max-w-2xl text-indigo-100">
              Monitor your on-chain payments,
              merchants,
              escrow,
              and USDC volume
              in real-time.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <Wallet size={56} />
          </div>
        </div>
      </div>

      <StatsGrid
        loading={isLoading}
        stats={{
          totalPayments:
            data?.totalPayments ?? 0,

          totalVolume:
            data?.totalVolume ?? BigInt(0),

          paidPayments:
            data?.paidPayments ?? 0,

          processingPayments:
            data?.processingPayments ?? 0,

          refundedPayments:
            data?.refundedPayments ?? 0,

          cancelledPayments:
            data?.cancelledPayments ?? 0,

          createdPayments:
            data?.createdPayments ?? 0,
        }}
      />
    </section>
  );
}