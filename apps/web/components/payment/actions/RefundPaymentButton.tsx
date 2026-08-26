"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRefundPayment } from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function RefundPaymentButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
  } = useRefundPayment();

  async function handleClick() {
    try {
      await mutateAsync(paymentId);

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      alert("Refund Success");
    } catch (err) {
      console.error(err);
      alert("Refund failed");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-white"
    >
      {isPending ? "Refunding..." : "Refund"}
    </button>
  );
}