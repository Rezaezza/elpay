"use client";

import { useState } from "react";
import { useAccount } from "wagmi";

import {
  useMerchant,
  useRegisterMerchant,
} from "@elpay/blockchain";
import {
  useMerchantInfo,
} from "@elpay/blockchain";

import { MerchantCard } from "./MerchantCard";
import { MerchantSuccess } from "./MerchantSuccess";

export function MerchantForm() {
  const { address, isConnected } = useAccount();

  const {
    data: merchantActive,
    isLoading: merchantLoading,
  } = useMerchant(address);

 const {
  data: merchant,
  refetch,
} = useMerchantInfo(address);

  const {
    mutateAsync,
    isPending,
  } = useRegisterMerchant();

  const [txHash, setTxHash] =
    useState<`0x${string}` | null>(null);

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!isConnected || !address) {
      alert("Please connect your wallet.");
      return;
    }

    try {
      // sementara metadata dibuat dalam bentuk JSON string
      const metadataURI = JSON.stringify({
        website,
        description,
      });

      const hash = await mutateAsync({
        name,
        metadataURI,
      });

      await refetch();

      setTxHash(hash);

      alert("Merchant registered successfully.");

    } catch (err) {
      console.error(err);
      alert("Register merchant failed.");
    }
  }

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Merchant Registration
      </h2>

      {/* Wallet */}

      <div className="mb-6 rounded-lg border p-4">

        <p className="text-sm text-muted-foreground">
          Wallet
        </p>

        <p className="mt-2 break-all font-mono text-sm">
          {address ?? "Wallet not connected"}
        </p>

        <div className="mt-3">

          {isConnected ? (
            <span className="text-green-600">
              Wallet Connected
            </span>
          ) : (
            <span className="text-red-600">
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
            Merchant Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ElPay Store"
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Website
          </label>

          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://example.com"
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
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe your business"
            className="w-full rounded-lg border p-3"
          />

        </div>

        {/* Merchant Status */}

        <div>

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
            merchantActive ||
            isPending
          }
          className="w-full rounded-lg bg-blue-600 py-3 text-white disabled:opacity-50"
        >

          {merchantActive
            ? "Merchant Registered"
            : isPending
            ? "Registering..."
            : "Register Merchant"}

        </button>

      </form>

 {/* Success */}

{txHash && (
  <MerchantSuccess
    hash={txHash}
  />
)}

{/* Merchant Card */}

{merchant && address && (
  <MerchantCard
    wallet={address}
    name={merchant.name}
    metadataURI={merchant.metadataURI}
    active={merchant.status === 1}
  />
)}

    </div>
  );
}