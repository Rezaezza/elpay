"use client";

import { PaymentForm } from "./payment-form";
import PaymentSummary from "./PaymentSummary";

export default function PaymentPage() {
  return (
    <div className="mx-auto max-w-7xl">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Create Payment
        </h1>

        <p className="mt-3 text-slate-600">
          Send secure USDC payments on Arc Testnet.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <PaymentForm />
        </div>

        <div>
          <PaymentSummary />
        </div>

      </div>

    </div>
  );
}