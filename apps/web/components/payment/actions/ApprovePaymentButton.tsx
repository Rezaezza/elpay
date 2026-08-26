"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApprovePayment } from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function ApprovePaymentButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
  } = useApprovePayment();

  async function handleClick() {
    try {
      await mutateAsync(paymentId);

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      alert("Payment Approved");
    } catch (err) {
      console.error(err);
      alert("Approve failed");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
    >
      {isPending ? "Approving..." : "Approve"}
    </button>
  );
}