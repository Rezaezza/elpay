"use client";

import { paymentLink } from "@/lib/paymentLink";

import QRCode from "react-qr-code";

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
      Your payment has been created successfully on-chain.
    </p>

    <div className="mt-8 grid gap-8 lg:grid-cols-2">

      {/* LEFT */}

      <div>

        <p className="mb-2 text-sm text-slate-400">
          Transaction Hash
        </p>

        <div className="break-all rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-xs text-white">
          {hash}
        </div>

        {paymentId && (
          <>
            <p className="mt-6 mb-2 text-sm text-slate-400">
              Checkout URL
            </p>

            <div className="break-all rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-xs text-white">
              {paymentLink(paymentId)}
            </div>
          </>
        )}

      </div>

      {/* RIGHT */}

      {paymentId && (

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

          <h3 className="text-center text-lg font-semibold text-white">
            Payment QR
          </h3>

          <p className="mt-1 text-center text-sm text-slate-400">
            Customer can scan this QR Code.
          </p>

          <div className="mt-6 flex justify-center">

            <div className="rounded-xl bg-white p-4">

              <QRCode
                value={paymentLink(paymentId)}
                size={180}
              />

            </div>

          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            Scan to open ElPay Checkout
          </p>

        </div>

      )}

    </div>

    {/* ACTION BUTTONS */}

    <div className="mt-8 grid gap-3 md:grid-cols-2">

      <button
        onClick={copyHash}
        className="rounded-xl border border-slate-700 py-3 text-white transition hover:border-blue-500"
      >
        Copy Transaction Hash
      </button>

      <a
        href={`https://testnet.arcscan.app/tx/${hash}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
      >
        View on ArcScan
      </a>

      {paymentId && (
        <>
          <button
            onClick={copyPaymentLink}
            className="rounded-xl border border-slate-700 py-3 text-white transition hover:border-indigo-500"
          >
            Copy Payment Link
          </button>

          <a
            href={`/pay/${paymentId}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            Open Checkout
          </a>
        </>
      )}

    </div>

  </div>
);

}