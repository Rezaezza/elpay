"use client";

import { usePayment } from "@elpay/blockchain";

import { CustomerPaymentCard } from "./CustomerPaymentCard";

type Props = {
  paymentId: `0x${string}`;
};

export function CustomerPayment({
  paymentId,
}: Props) {
  const {
    data,
    isLoading,
    isError,
  } = usePayment(paymentId);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading payment...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-screen items-center justify-center">
        Payment not found.
      </div>
    );
  }

  return (
    <CustomerPaymentCard
      payment={data}
      paymentId={paymentId}
    />
  );
}