"use client";

import { PaymentDetail } from "./PaymentDetail";

interface Props {
  paymentId: `0x${string}`;
}

export function PaymentDetailPage({
  paymentId,
}: Props) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <PaymentDetail
        paymentId={paymentId}
      />
    </div>
  );
}