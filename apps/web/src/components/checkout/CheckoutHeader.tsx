interface CheckoutHeaderProps {
  merchant: string;
}

export function CheckoutHeader({
  merchant,
}: CheckoutHeaderProps) {
  return (
    <div className="border-b border-neutral-800 p-6">
      <h1 className="text-2xl font-bold">
        ElPay Checkout
      </h1>

      <p className="mt-2 text-neutral-400">
        Merchant
      </p>

      <p className="font-semibold">
        {merchant}
      </p>
    </div>
  );
}