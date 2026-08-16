"use client";

interface CheckoutPayButtonProps {
  disabled?: boolean;

  onClick?: () => void;
}

export function CheckoutPayButton({
  disabled,
  onClick,
}: CheckoutPayButtonProps) {
  return (
    <div className="p-6 border-t border-neutral-800">

      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
      >
        Pay Now
      </button>

    </div>
  );
}