"use client";

interface Props {
  paymentId: `0x${string}`;
}

export function PaymentDetailPage({
  paymentId,
}: Props) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">

      <h1 className="text-3xl font-bold">
        Payment Detail
      </h1>

      <div className="rounded-xl border p-6">

        <p className="text-sm text-muted-foreground">
          Payment ID
        </p>

        <p className="mt-2 break-all font-mono text-xs">
          {paymentId}
        </p>

      </div>

    </div>
  );
}