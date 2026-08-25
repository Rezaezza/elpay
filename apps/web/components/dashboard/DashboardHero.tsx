"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Welcome back 👋
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-500">
          Manage all your on-chain USDC payments from one secure dashboard.
        </p>

      </div>

      <Link
        href="/payment"
        className="
        rounded-xl
        bg-indigo-600
        px-6
        py-3
        text-white
        font-semibold
        inline-flex
        items-center
        gap-2
        hover:bg-indigo-700
        transition
        "
      >
        New Payment

        <ArrowRight size={18} />

      </Link>

    </section>
  );
}