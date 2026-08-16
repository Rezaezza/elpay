interface CheckoutApproveProps {
  approved: boolean;
}

export function CheckoutApprove({
  approved,
}: CheckoutApproveProps) {
  return (
    <div className="p-6 border-t border-neutral-800">

      <p className="font-medium">
        Token Approval
      </p>

      <p className="mt-2 text-neutral-400">

        {approved
          ? "Approved"
          : "Waiting approval"}

      </p>

    </div>
  );
}