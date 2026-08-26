"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useReleaseEscrow } from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function ReleaseEscrowButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
  } = useReleaseEscrow();

  async function handleClick() {
    try {
      await mutateAsync(paymentId);

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      alert("Escrow Released");
    } catch (err) {
      console.error(err);
      alert("Release failed");
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="rounded-lg bg-purple-600 px-4 py-2 text-white"
    >
      {isPending ? "Releasing..." : "Release Escrow"}
    </button>
  );
}