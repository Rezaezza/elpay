"use client";

import {
  Wallet,
  ArrowRight,
  CreditCard,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react";

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

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#172554] to-[#0EA5E9] p-10 shadow-2xl">

        {/* background glow */}

        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-200">
              Open Payment Infrastructure
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-white">
              Accept
              <span className="text-cyan-300">
                {" "}USDC Payments{" "}
              </span>
              with ElPay
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              ElPay helps businesses create payment requests,
  collect USDC payments,
  share payment links with customers,
  and manage every payment securely from one unified dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white">
                ✓ Public Payment Links
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white">
                ✓ Native USDC
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white">
                ✓ Merchant Dashboard
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex items-center justify-center">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

              <h3 className="mb-6 text-lg font-semibold text-white">
                Payment Flow
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">

                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <Wallet className="text-cyan-300" />
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Merchant
                    </p>

                    <p className="text-sm text-slate-300">
                      Creates payment request
                    </p>

                  </div>

                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-cyan-300" />
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">

                  <div className="rounded-xl bg-purple-500/20 p-3">
                    <CreditCard className="text-purple-300" />
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Customer
                    </p>

                    <p className="text-sm text-slate-300">
                      Pays using USDC
                    </p>

                  </div>

                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-cyan-300" />
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">

                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <CircleDollarSign className="text-emerald-300" />
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Settlement
                    </p>

                    <p className="text-sm text-slate-300">
                      Funds arrive instantly
                    </p>

                  </div>

                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-cyan-300" />
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">

                  <div className="rounded-xl bg-green-500/20 p-3">
                    <CheckCircle2 className="text-green-300" />
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Complete
                    </p>

                    <p className="text-sm text-slate-300">
                      Payment confirmed on-chain
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <StatsGrid
        loading={isLoading}
        stats={{
          totalPayments: data?.totalPayments ?? 0,
          totalVolume: data?.totalVolume ?? BigInt(0),
          paidPayments: data?.paidPayments ?? 0,
          processingPayments: data?.processingPayments ?? 0,
          refundedPayments: data?.refundedPayments ?? 0,
          cancelledPayments: data?.cancelledPayments ?? 0,
          createdPayments: data?.createdPayments ?? 0,
        }}
      />

    </section>
  );
}