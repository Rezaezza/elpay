"use client";

import { useMerchant } from "@elpay/blockchain";
import { PaymentSuccess } from "./PaymentSuccess";
import { publicClient } from "@elpay/blockchain";
import { getPaymentCreatedId } from "@elpay/blockchain";
import { useSendPayment } from "@elpay/blockchain";

import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useState } from "react";
import { PaymentDetail } from "./PaymentDetail";



export function PaymentForm() {
  const { address, isConnected } = useAccount();
  const {
  data: merchantActive,
  isLoading: merchantLoading,
} = useMerchant(address);

  const [txHash, setTxHash] =
  useState<`0x${string}` | null>(null);

  const [paymentId, setPaymentId] =
  useState<`0x${string}` | null>(null);

  const { mutateAsync, isPending } = useSendPayment();

  const [payer, setPayer] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!isConnected || !address) {
      alert("Please connect your wallet.");
      return;
    }

    if (!merchantActive) {
  alert("Merchant is not registered.");
  return;
}

    try {
      const expiresAt = BigInt(
        Math.floor(Date.now() / 1000) + 15 * 60
      );

const hash = await mutateAsync({
  payer: payer as `0x${string}`,
  token: process.env
    .NEXT_PUBLIC_USDC_ADDRESS as `0x${string}`,
  amount: parseUnits(amount, 6),
  description,
  expiresAt,
});

setTxHash(hash);

const receipt =
  await publicClient.waitForTransactionReceipt({
    hash,
  });

const id =
  getPaymentCreatedId(receipt);

if (id) {
  setPaymentId(id);
}

alert("Payment created!");

      setPayer("");
      setAmount("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert("Create payment failed");
    }
  }

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Create Payment
      </h2>

      {/* Wallet */}

      <div className="mb-6 rounded-lg border p-4">

        <p className="text-sm text-muted-foreground">
          Merchant Wallet
        </p>

        <p className="mt-2 break-all font-mono text-sm">
          {address ?? "Wallet not connected"}
        </p>

        <div className="mt-2">

          {isConnected ? (
            <span className="text-sm text-green-600">
              Wallet Connected
            </span>
          ) : (
            <span className="text-sm text-red-600">
              Wallet Not Connected
            </span>
          )}

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>

          <label className="mb-2 block text-sm font-medium">
            Payer Wallet
          </label>

          <input
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            placeholder="0x..."
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Amount (USDC)
          </label>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10"
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Coffee Payment"
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div className="mt-2">

  {merchantLoading ? (
    <span className="text-yellow-600">
      Checking merchant...
    </span>
  ) : merchantActive ? (
    <span className="text-green-600">
      Merchant Verified
    </span>
  ) : (
    <span className="text-red-600">
      Merchant Not Registered
    </span>
  )}

</div>

        <button
          type="submit"
          disabled={
  !isConnected ||
  !merchantActive ||
  isPending
}
          className="w-full rounded-lg bg-blue-600 py-3 text-white disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Create Payment"}
        </button>

        {txHash && (
<PaymentSuccess
  hash={txHash}
  paymentId={paymentId ?? undefined}
/>
)}

{paymentId && (
  <div className="mt-4 rounded-lg border bg-muted p-4">
    <p className="text-sm text-muted-foreground">
      Payment ID
    </p>

    <p className="mt-2 break-all font-mono text-xs">
      {paymentId}
    </p>
  </div>
)}

{paymentId && (
    <PaymentDetail
        paymentId={paymentId}
    />
)}

      </form>

    </div>
  );
}