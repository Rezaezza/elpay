"use client";

import QRCode from "react-qr-code";

interface Props {
  paymentId: `0x${string}`;
}

export function PaymentQRCode({
  paymentId,
}: Props) {

  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "";

  const url = `${origin}/pay/${paymentId}`;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-lg font-semibold text-white">
        Payment QR Code
      </h2>

      <div className="flex justify-center">

        <div className="rounded-2xl bg-white p-5">

          <QRCode
            value={url}
            size={200}
          />

        </div>

      </div>

      <p className="mt-5 text-center text-sm text-slate-400">
        Scan this QR Code to open the payment page.
      </p>

    </div>
  );
}