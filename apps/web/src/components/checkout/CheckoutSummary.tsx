interface CheckoutSummaryProps {
  amount: string;

  token: string;

  description?: string;
}

export function CheckoutSummary({
  amount,
  token,
  description,
}: CheckoutSummaryProps) {
  return (
    <div className="space-y-3 p-6">

      <div className="flex justify-between">
        <span>Amount</span>

        <span>
          {amount} {token}
        </span>
      </div>

      {description && (
        <div className="flex justify-between">
          <span>Description</span>

          <span>{description}</span>
        </div>
      )}

    </div>
  );
}