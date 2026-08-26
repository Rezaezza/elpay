import { PaymentDetailPage } from "@/components/payment";

interface Props {
  params: Promise<{
    paymentId: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { paymentId } = await params;

  return (
    <PaymentDetailPage
      paymentId={paymentId as `0x${string}`}
    />
  );
}