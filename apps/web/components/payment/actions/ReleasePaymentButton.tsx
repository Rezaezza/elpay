"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useReleasePayment } from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function ReleasePaymentButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
  } = useReleasePayment();

  async function handleClick() {
    try {
      await mutateAsync(paymentId);

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      alert("Payment Released");
    } catch (err) {
      console.error(err);
      alert("Release failed");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
    >
      {isPending
        ? "Releasing..."
        : "Release USDC"}
    </button>
  );
}