"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatUnits } from "viem";
import { Plus, Search } from "lucide-react";

import { useDashboard } from "@elpay/blockchain";

import {
  InvoiceStats,
  InvoiceStatusBadge,
  InvoiceEmpty,
} from "@/components/invoices";

function badge(status: number) {
  switch (status) {
    case 0:
      return "bg-yellow-500/10 text-yellow-400";
    case 1:
      return "bg-blue-500/10 text-blue-400";
    case 2:
      return "bg-indigo-500/10 text-indigo-400";
    case 3:
      return "bg-green-500/10 text-green-400";
    case 4:
      return "bg-red-500/10 text-red-400";
    case 5:
      return "bg-orange-500/10 text-orange-400";
    default:
      return "bg-slate-700 text-slate-300";
  }
}

function label(status: number) {
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

export function InvoiceList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const { data, isLoading } = useDashboard();

  const payments = useMemo(() => {
    let items = [...(data?.payments ?? [])];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      items = items.filter(
        (payment) =>
          (payment.description ?? "")
            .toLowerCase()
            .includes(keyword) ||
          payment.id.toLowerCase().includes(keyword)
      );
    }

    if (statusFilter !== "all") {
      items = items.filter(
        (payment) =>
          payment.status === Number(statusFilter)
      );
    }

    items.sort((a, b) => {
      if (sortBy === "newest") {
        return Number(b.createdAt - a.createdAt);
      }

      return Number(a.createdAt - b.createdAt);
    });

    return items;
  }, [
    data,
    search,
    statusFilter,
    sortBy,
  ]);

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <InvoiceStats
        total={payments.length}
        paid={payments.filter((p) => p.status === 3).length}
        processing={payments.filter((p) => p.status === 2).length}
        refunded={payments.filter((p) => p.status === 5).length}
        cancelled={payments.filter((p) => p.status === 4).length}
      />

      <section className="rounded-3xl border border-slate-800 bg-slate-900">

        <div className="border-b border-slate-800 p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              Invoices
            </h2>

            <Link
              href="/payments"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500"
            >
              <Plus className="h-4 w-4" />
              New Invoice
            </Link>

          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row">

            <div className="flex flex-1 items-center rounded-xl border border-slate-700 bg-slate-950 px-4">

              <Search className="mr-3 h-4 w-4 text-slate-400" />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search invoice..."
                className="h-11 w-full bg-transparent text-white outline-none"
              />

            </div>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
            >
              <option value="all">All Status</option>
              <option value="0">Created</option>
              <option value="1">Approved</option>
              <option value="2">Processing</option>
              <option value="3">Paid</option>
              <option value="4">Cancelled</option>
              <option value="5">Refunded</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
            >
              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>
            </select>

          </div>

        </div>

 <div className="overflow-x-auto">

  <table className="w-full">

    <thead>

      <tr className="border-b border-slate-800 text-left text-slate-400">
        <th className="p-5">Invoice</th>
        <th className="p-5">Description</th>
        <th className="p-5">Amount</th>
        <th className="p-5">Status</th>
        <th className="p-5 text-right">Action</th>
      </tr>

    </thead>

    <tbody>

      {payments.length === 0 ? (

        <tr>
          <td colSpan={5} className="py-20">
            <InvoiceEmpty />
          </td>
        </tr>

      ) : (

        payments.map((payment) => (

          <tr
            key={payment.id}
            className="border-b border-slate-800 hover:bg-slate-800/40 transition"
          >

            <td className="p-5">
              <div className="font-mono text-xs text-slate-300">
                {payment.id.slice(0, 10)}...
              </div>
            </td>

            <td className="p-5">
              <div className="space-y-1">
                <p className="font-medium text-white">
                  {payment.description || "-"}
                </p>

                <p className="text-xs text-slate-500">
                  {new Date(
                    Number(payment.createdAt) * 1000
                  ).toLocaleDateString()}
                </p>
              </div>
            </td>

            <td className="p-5">
              <span className="font-semibold text-white">
                {formatUnits(payment.amount, 6)} USDC
              </span>
            </td>

            <td className="p-5">
              <InvoiceStatusBadge status={payment.status} />
            </td>

            <td className="p-5 text-right">
              <Link
                href={`/payments/${payment.id}`}
                className="rounded-lg border border-indigo-500 px-4 py-2 text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
              >
                View
              </Link>
            </td>

          </tr>

        ))

      )}

    </tbody>

  </table>

</div>

</section>

</div>

);
}