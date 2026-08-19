import type { Address, Hash } from "viem";
import { readContract, writeContract } from "wagmi/actions";

import { merchantRegistryAbi } from "../abi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { wagmiConfig } from "../wagmi";

const address = CONTRACT_ADDRESSES.arcTestnet.merchantRegistry;

/* -------------------------------------------------------------------------- */
/*                               WRITE FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

export async function registerMerchant(
  name: string,
  metadataURI: string
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "registerMerchant",
    args: [name, metadataURI],
  });
}

export async function updateMerchant(
  name: string,
  metadataURI: string
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "updateMerchant",
    args: [name, metadataURI],
  });
}

export async function pauseMerchant(): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "pauseMerchant",
  });
}

export async function activateMerchant(): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "activateMerchant",
  });
}

export async function disableMerchant(
  merchant: Address
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "disableMerchant",
    args: [merchant],
  });
}

/* -------------------------------------------------------------------------- */
/*                                READ FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

export async function getMerchant(
  merchant: Address
) {
  return readContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "getMerchant",
    args: [merchant],
  });
}

export async function isActive(
  merchant: Address
) {
  return readContract(wagmiConfig, {
    address,
    abi: merchantRegistryAbi,
    functionName: "isActive",
    args: [merchant],
  });
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export const merchant = {
  registerMerchant,
  updateMerchant,
  pauseMerchant,
  activateMerchant,
  disableMerchant,
  getMerchant,
  isActive,
};