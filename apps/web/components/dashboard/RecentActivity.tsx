"use client";

import Link from "next/link";
import { Clock3, CreditCard } from "lucide-react";

import { useDashboard } from "@elpay/blockchain";

function getStatusLabel(status: number) {
  switch (status) {
    case 0:
      return "Created";
    case 1:
      return "Approved";
    case 2:
      return "Processing";
    case 3:
      return "Paid";
    case 4:
      return "Cancelled";
    case 5:
      return "Refunded";
    default:
      return "Unknown";
  }
}

function getStatusColor(status: number) {
  switch (status) {
    case 3:
      return "bg-green-100 text-green-700";

    case 2:
      return "bg-blue-100 text-blue-700";

    case 5:
      return "bg-orange-100 text-orange-700";

    case 4:
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export function RecentActivity() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-2xl bg-slate-100"
            />
          ))}
        </div>
      </section>
    );
  }

  const payments = [...(data?.payments ?? [])]
    .sort((a, b) => Number(b.createdAt - a.createdAt))
    .slice(0, 5);

  if (payments.length === 0) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex flex-col items-center py-16 text-center">
          <Clock3
            size={52}
            className="text-slate-400"
          />

          <h2 className="mt-5 text-2xl font-bold">
            No Recent Activity
          </h2>

          <p className="mt-3 text-slate-500">
            Your blockchain payment history will appear here.
          </p>

          <Link
            href="/payments"
            className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Create Payment
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-indigo-100 p-3">
                <CreditCard
                  size={22}
                  className="text-indigo-600"
                />
              </div>

              <div>
                <p className="font-semibold">
                  {payment.description || "USDC Payment"}
                </p>

                <p className="text-sm text-slate-500">
                  {payment.amount.toString()}
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                payment.status
              )}`}
            >
              {getStatusLabel(payment.status)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}