"use client";

type Props = {
  active: boolean;
};

export function MerchantStatus({
  active,
}: Props) {
  return active ? (
    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
      Active
    </span>
  ) : (
    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
      Not Registered
    </span>
  );
}