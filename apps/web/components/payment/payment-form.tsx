"use client";

import { useMerchant } from "@elpay/blockchain";
import { PaymentSuccess } from "./PaymentSuccess";
import { publicClient } from "@elpay/blockchain";
import { getPaymentCreatedId } from "@elpay/blockchain";
import { useSendPayment } from "@elpay/blockchain";

import { parseUnits, isAddress } from "viem";
import { useAccount } from "wagmi";
import { useState } from "react";




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

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const [expirationDate, setExpirationDate] = useState(
  tomorrow.toISOString().split("T")[0]
);

const [expirationTime, setExpirationTime] = useState("12:00");

const [selectedPreset, setSelectedPreset] = useState<number | null>(1440);

function applyPreset(minutes: number) {
  const date = new Date();

  date.setMinutes(date.getMinutes() + minutes);

  setExpirationDate(
    date.toISOString().split("T")[0]
  );

  setExpirationTime(
    date.toTimeString().slice(0, 5)
  );

  setSelectedPreset(minutes);
}

function resetExpiration() {
  const tomorrow = new Date();

  tomorrow.setDate(
    tomorrow.getDate() + 1
  );

  setExpirationDate(
    tomorrow.toISOString().split("T")[0]
  );

  setExpirationTime("12:00");

  setSelectedPreset(1440);
}

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

if (!isAddress(payer)) {
  alert("Invalid payer wallet.");
  return;
}

if (Number(amount) <= 0) {
  alert("Amount must be greater than 0.");
  return;
}

if (description.trim().length < 3) {
  alert("Description is too short.");
  return;
}

    try {
   const selected = new Date(
  `${expirationDate}T${expirationTime}`
);

if (selected <= new Date()) {
  alert("Expiration must be in the future.");
  return;
}

if (
  selected.getTime() <
  Date.now() + 5 * 60 * 1000
) {
  alert(
    "Expiration must be at least 5 minutes from now."
  );

  return;
}

const expiresAt = BigInt(
  Math.floor(selected.getTime() / 1000)
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

      resetExpiration();

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
            placeholder="0"
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
            placeholder="Description your Payment"
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

<div className="flex flex-wrap gap-2">

  {[
    { label: "15m", value: 15 },
    { label: "30m", value: 30 },
    { label: "1h", value: 60 },
    { label: "6h", value: 360 },
    { label: "1 Day", value: 1440 },
    { label: "7 Days", value: 10080 },
  ].map((preset) => (
    <button
      key={preset.value}
      type="button"
      onClick={() => applyPreset(preset.value)}
      className={`
        rounded-lg
        border
        px-3
        py-2
        text-sm
        transition

        ${
          selectedPreset === preset.value
            ? "bg-blue-600 text-white border-blue-600"
            : "hover:bg-muted"
        }
      `}
    >
      {preset.label}
    </button>
  ))}

  <button
    type="button"
    onClick={resetExpiration}
    className="
      rounded-lg
      border
      px-3
      py-2
      text-sm
      hover:bg-muted
    "
  >
    Reset
  </button>

</div>

  <label className="mb-2 block text-sm font-medium">
    Expiration Date
  </label>

  <input
    type="date"
    value={expirationDate}
    min={new Date().toISOString().split("T")[0]}
  onChange={(e) => {
  setExpirationDate(e.target.value);
  setSelectedPreset(null);
}}
    className="w-full rounded-lg border p-3"
  />

</div>

<div>

  <label className="mb-2 block text-sm font-medium">
    Expiration Time
  </label>

  <input
    type="time"
    value={expirationTime}
 onChange={(e) => {
  setExpirationTime(e.target.value);
  setSelectedPreset(null);
}}
    className="w-full rounded-lg border p-3"
  />

</div>

<div className="rounded-lg border bg-muted p-4">
  <p className="text-sm text-muted-foreground">
    Payment Expires At
  </p>

  <p className="mt-2 font-semibold">
    {new Date(
      `${expirationDate}T${expirationTime}`
    ).toLocaleString()}
  </p>
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

      </form>

    </div>
  );
}