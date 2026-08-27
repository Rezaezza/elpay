"use client";

import { CustomerPayment } from "@/components/payment/CustomerPayment";

type Props = {
  params: Promise<{
    paymentId: string;
  }>;
};

export default async function PaymentPage({
  params,
}: Props) {
  const { paymentId } = await params;

  return (
    <CustomerPayment
      paymentId={paymentId as `0x${string}`}
    />
  );
}