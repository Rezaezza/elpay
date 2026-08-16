import {
  CheckoutLayout,
  CheckoutHeader,
  CheckoutSummary,
  CheckoutWallet,
  CheckoutApprove,
  CheckoutPayButton,
  CheckoutStatus,
  CheckoutFooter,
} from "@/components/checkout";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{
    sessionId: string;
  }>;
}) {
  const { sessionId } = await params;

  return (
    <CheckoutLayout>

      <CheckoutHeader
        merchant="ElPay Demo"
      />

      <CheckoutSummary
        amount="10.00"
        token="USDC"
        description={sessionId}
      />

      <CheckoutWallet />

      <CheckoutApprove
        approved={false}
      />

      <CheckoutPayButton />

      <CheckoutStatus
        status="Waiting Payment"
      />

      <CheckoutFooter />

    </CheckoutLayout>
  );
}