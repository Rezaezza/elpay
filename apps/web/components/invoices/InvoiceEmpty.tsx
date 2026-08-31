"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export function InvoiceEmpty() {
  return (
    <div className="flex flex-col items-center py-24">

      <FileText
        size={60}
        className="text-slate-600"
      />

      <h2 className="mt-6 text-2xl font-bold text-white">
        No invoices found
      </h2>

      <p className="mt-2 text-slate-400">
        Create your first payment invoice.
      </p>

      <Link
        href="/payments"
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white"
      >
        Create Invoice
      </Link>

    </div>
  );
}