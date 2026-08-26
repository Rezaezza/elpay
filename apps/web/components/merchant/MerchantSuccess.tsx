"use client";

type Props = {
  hash: `0x${string}`;
};

export function MerchantSuccess({
  hash,
}: Props) {
  return (
    <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-5">
      <h3 className="font-bold text-green-700">
        Merchant Registered Successfully
      </h3>

      <p className="mt-3 text-sm text-muted-foreground">
        Transaction Hash
      </p>

      <p className="mt-2 break-all font-mono text-xs">
        {hash}
      </p>
    </div>
  );
}