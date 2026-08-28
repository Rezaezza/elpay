"use client";

import Link from "next/link";
import { FileSearch, Plus } from "lucide-react";

export function EmptyHistory() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-24 text-center">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">

        <FileSearch
          size={40}
          className="text-slate-500"
        />

      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        No Payments Yet
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        You haven't created any payment requests yet.
        Start by creating your first payment.
      </p>

      <Link
        href="/payments"
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-500
        "
      >
        <Plus size={18} />

        Create Payment

      </Link>

    </div>
  );
}