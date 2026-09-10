"use client";

import { useQueryClient } from "@tanstack/react-query";

import {
  useApprovePayment,
  usePayment,
  approveToken,
  hasEnoughAllowance,
} from "@elpay/blockchain";

import {
  useConfig,
  useChainId,
} from "wagmi";

type Props = {
  paymentId: `0x${string}`;
};

export function ApprovePaymentButton({
  paymentId,
}: Props) {
  const queryClient = useQueryClient();

  const config = useConfig();

const chainId = useChainId();

  const {
    data: payment,
  } = usePayment(paymentId);

  const {
    mutateAsync,
    isPending,
  } = useApprovePayment();

  async function handleClick() {
    try {
      if (!payment) {
        alert("Payment not found.");
        return;
      }

      //////////////////////////////////////////////////////
      // Check allowance terlebih dahulu
      //////////////////////////////////////////////////////

    const allowanceEnough =
  await hasEnoughAllowance(
    config,
    chainId,
    payment.token,
    payment.payer,
    payment.amount,
  );

      //////////////////////////////////////////////////////
      // Approve USDC hanya jika allowance belum cukup
      //////////////////////////////////////////////////////

      if (!allowanceEnough) {
 await approveToken(
  config,
  chainId,
  payment.token,
  payment.amount,
);
      }

      //////////////////////////////////////////////////////
      // Approve Payment
      //////////////////////////////////////////////////////

 await mutateAsync(paymentId);

      //////////////////////////////////////////////////////
      // Refresh Query
      //////////////////////////////////////////////////////

   await queryClient.invalidateQueries({
  queryKey: [
    "payment",
    chainId,
    paymentId,
  ],
});

await queryClient.invalidateQueries({
  queryKey: [
    "merchant-payments",
    chainId,
  ],
});

await queryClient.invalidateQueries({
  queryKey: [
    "payer-payments",
    chainId,
  ],
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