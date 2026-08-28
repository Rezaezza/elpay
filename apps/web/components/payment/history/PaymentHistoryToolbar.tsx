"use client";

import Link from "next/link";

import {
  Search,
  RefreshCw,
  Plus,
  Filter,
} from "lucide-react";

export function PaymentHistoryToolbar() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* ------------------------------------------------ */}
        {/* Search */}
        {/* ------------------------------------------------ */}

        <div className="relative w-full max-w-md">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search payment..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-950
              pl-10
              pr-4
              text-white
              outline-none
              transition
              placeholder:text-slate-500
              focus:border-blue-500
            "
          />

        </div>

        {/* ------------------------------------------------ */}
        {/* Actions */}
        {/* ------------------------------------------------ */}

        <div className="flex flex-wrap gap-3">

          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-slate-800
            "
          >
            <Filter size={18} />

            Status
          </button>

          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-slate-800
            "
          >
            <RefreshCw size={18} />

            Refresh
          </button>

          <Link
            href="/payments"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-500
            "
          >
            <Plus size={18} />

            New Payment
          </Link>

        </div>

      </div>

    </div>
  );
}