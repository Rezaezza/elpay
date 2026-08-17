import type { Address, Hash } from "viem";
import { readContract, writeContract } from "wagmi/actions";

import { MERCHANT_REGISTRY_ABI } from "../abi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { wagmiConfig } from "../wagmi";

const address = CONTRACT_ADDRESSES.merchantRegistry;

/* -------------------------------------------------------------------------- */
/*                               Write Functions                              */
/* -------------------------------------------------------------------------- */

export async function registerMerchant(
  name: string,
  metadataURI: string
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
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
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "updateMerchant",
    args: [name, metadataURI],
  });
}

export async function pauseMerchant(): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "pauseMerchant",
  });
}

export async function activateMerchant(): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "activateMerchant",
  });
}

export async function disableMerchant(
  merchant: Address
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "disableMerchant",
    args: [merchant],
  });
}

/* -------------------------------------------------------------------------- */
/*                                Read Functions                              */
/* -------------------------------------------------------------------------- */

export async function getMerchant(
  merchant: Address
) {
  return readContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "getMerchant",
    args: [merchant],
  });
}

export async function isMerchantActive(
  merchant: Address
) {
  return readContract(wagmiConfig, {
    address,
    abi: MERCHANT_REGISTRY_ABI,
    functionName: "isActive",
    args: [merchant],
  });
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const merchant = {
  registerMerchant,
  updateMerchant,
  pauseMerchant,
  activateMerchant,
  disableMerchant,
  getMerchant,
  isMerchantActive,
};