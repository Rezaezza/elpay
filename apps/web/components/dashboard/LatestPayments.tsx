"use client";

import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function LatestPayments() {
  return (
    <section
      className="
        mt-8
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Latest Payments
        </h2>

        <Link
          href="/transactions"
          className="
            text-sm
            font-medium
            text-indigo-600
            hover:text-indigo-700
          "
        >
          View all
        </Link>
      </div>

      <div className="flex flex-col items-center py-16 text-center">
        <div
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-slate-100
          "
        >
          <CreditCard
            size={30}
            className="text-slate-500"
          />
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          No payments found
        </h3>

        <p className="mt-3 max-w-lg text-slate-600">
          Your latest USDC payments will appear here after you complete your
          first transaction.
        </p>
      </div>
    </section>
  );
}