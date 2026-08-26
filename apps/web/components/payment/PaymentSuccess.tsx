"use client";

interface PaymentSuccessProps {
  hash: `0x${string}`;
}

export function PaymentSuccess({
  hash,
}: PaymentSuccessProps) {
  return (
    <div className="rounded-xl border bg-green-50 p-6">

      <h2 className="text-xl font-bold text-green-700">
        ✅ Payment Created
      </h2>

      <p className="mt-3 text-sm text-gray-600">
        Transaction Hash
      </p>

      <div className="mt-2 break-all rounded-lg bg-white p-3 font-mono text-sm">
        {hash}
      </div>

      <a
        href={`https://testnet.arcscan.app/tx/${hash}`}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        View on ArcScan
      </a>

    </div>
  );
}