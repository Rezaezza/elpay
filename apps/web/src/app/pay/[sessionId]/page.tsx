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

import { getCheckoutSession } from "@/services/checkout";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{
    sessionId: string;
  }>;
}) {
  const { sessionId } = await params;

  const session =
    await getCheckoutSession(sessionId);

  return (
    <CheckoutLayout>

      <CheckoutHeader
        merchant={session.merchantName}
      />

      <CheckoutSummary
        amount={session.amount}
        token={session.token}
        description={session.description}
      />

      <CheckoutWallet />

      <CheckoutApprove
        approved={session.approved}
      />

      <CheckoutPayButton />

      <CheckoutStatus
        status={session.status}
      />

      <CheckoutFooter />

    </CheckoutLayout>
  );
}