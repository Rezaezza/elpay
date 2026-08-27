"use client";

import { paymentLink } from "@/lib/paymentLink";

interface PaymentSuccessProps {
  hash: `0x${string}`;
  paymentId?: `0x${string}`;
}

export function PaymentSuccess({
  hash,
  paymentId,
}: PaymentSuccessProps) {
  function copyHash() {
    navigator.clipboard.writeText(hash);
    alert("Transaction hash copied.");
  }

  function copyPaymentLink() {
    if (!paymentId) return;

    navigator.clipboard.writeText(
      paymentLink(paymentId)
    );

    alert("Payment link copied.");
  }

  return (
    <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">

      <h2 className="text-2xl font-bold text-green-400">
        ✅ Payment Created Successfully
      </h2>

      <p className="mt-2 text-sm text-slate-300">
        Your payment has been created on-chain.
      </p>

      {/* Transaction Hash */}

      <div className="mt-6">

        <p className="mb-2 text-sm text-slate-400">
          Transaction Hash
        </p>

        <div className="break-all rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-xs text-white">
          {hash}
        </div>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex flex-col gap-3">

        <button
          onClick={copyHash}
          className="rounded-lg border border-slate-700 py-3 text-white transition hover:border-blue-500"
        >
          Copy Transaction Hash
        </button>

        <a
          href={`https://testnet.arcscan.app/tx/${hash}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
        >
          View on ArcScan
        </a>

        {paymentId && (
          <>
            <button
              onClick={copyPaymentLink}
              className="rounded-lg border border-slate-700 py-3 text-white transition hover:border-blue-500"
            >
              Copy Payment Link
            </button>

            <a
              href={`/pay/${paymentId}`}
              target="_blank"
              className="rounded-lg bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
            >
              Open Checkout
            </a>
          </>
        )}

      </div>

    </div>
  );
}