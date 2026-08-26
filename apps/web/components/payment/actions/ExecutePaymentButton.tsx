"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useExecutePayment } from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function ExecutePaymentButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
  } = useExecutePayment();

  async function handleClick() {
    try {
      await mutateAsync(paymentId);

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      alert("Payment Executed");
    } catch (err) {
      console.error(err);
      alert("Execute failed");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded-lg bg-green-600 px-4 py-2 text-white"
    >
      {isPending ? "Executing..." : "Execute"}
    </button>
  );
}