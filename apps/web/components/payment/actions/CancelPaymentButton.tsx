"use client";

import { Button } from "@/components/ui/button";

import { useCancelPayment } from "@elpay/blockchain";

interface Props {
  paymentId: `0x${string}`;
}

export function CancelPaymentButton({
  paymentId,
}: Props) {
  const mutation = useCancelPayment();

  return (
    <Button
      variant="destructive"
      disabled={mutation.isPending}
      onClick={() =>
        mutation.mutate(paymentId)
      }
    >
      {mutation.isPending
        ? "Cancelling..."
        : "Cancel Payment"}
    </Button>
  );
}