"use client";

import Link from "next/link";

export default function RecentActivity() {
  return (
    <section
      className="
        mt-12
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        shadow-sm
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-slate-900
        "
      >
        Recent Activity
      </h2>

      <div className="flex flex-col items-center py-20 text-center">
        <div
          className="
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-indigo-50
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-indigo-600"
          >
            <path d="M12 20V10" />
            <path d="m18 20-6-6-6 6" />
            <path d="M12 4v6" />
          </svg>
        </div>

        <h3
          className="
            text-2xl
            font-semibold
            text-slate-900
          "
        >
          No payment activity yet
        </h3>

        <p
          className="
            mt-4
            max-w-xl
            text-base
            leading-7
            text-slate-600
          "
        >
          Your on-chain payment history will appear here after you create your
          first USDC payment.
        </p>

        <Link
          href="/payment"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-indigo-600
            px-7
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:bg-indigo-700
            hover:shadow-xl
          "
        >
          Create First Payment
        </Link>
      </div>
    </section>
  );
}