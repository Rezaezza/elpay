"use client";

import { Button } from "@/components/ui/button";

import {
  useApprovePayment,
} from "@elpay/blockchain";

type Props = {
  paymentId: `0x${string}`;
};

export function CustomerApproveButton({
  paymentId,
}: Props) {
  const {
    mutateAsync,
    isPending,
  } = useApprovePayment();

  async function handleApprove() {
    try {
      await mutateAsync(paymentId);

      alert("Payment Approved");
    } catch (error) {
      console.error(error);

      alert("Approve failed");
    }
  }

  return (
    <Button
      className="mt-10 w-full"
      size="lg"
      disabled={isPending}
      onClick={handleApprove}
    >
      {isPending
        ? "Approving..."
        : "Approve Payment"}
    </Button>
  );
}