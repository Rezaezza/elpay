interface CheckoutStatusProps {
  status: string;
}

export function CheckoutStatus({
  status,
}: CheckoutStatusProps) {
  return (
    <div className="p-6 border-t border-neutral-800">

      <p className="text-neutral-400">

        Status

      </p>

      <p className="font-semibold">

        {status}

      </p>

    </div>
  );
}