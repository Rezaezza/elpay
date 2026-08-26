"use client";

export default function PaymentSummary() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-xl font-bold">
        Payment Summary
      </h2>

      <div className="space-y-5 text-sm">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Network
          </span>

          <span className="font-semibold">
            Arc Testnet
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Token
          </span>

          <span className="font-semibold">
            USDC
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Amount
          </span>

          <span className="font-semibold">
            —
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Recipient
          </span>

          <span className="font-semibold">
            —
          </span>
        </div>

        <div className="border-t pt-5">

          <div className="flex justify-between">

            <span className="font-semibold">
              Estimated Fee
            </span>

            <span className="font-semibold">
              ~0 USDC
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}