import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  readContract,
  writeContract,
} from "wagmi/actions";

import { merchantRegistryAbi } from "../abi";

import {
  getMerchantRegistryAddress,
} from "../resolver/contracts";

/* -------------------------------------------------------------------------- */
/*                               WRITE FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

export async function registerMerchant(
  config: Config,
  chainId: number,
  name: string,
  metadataURI: string,
): Promise<Hash> {
  return writeContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "registerMerchant",
    args: [name, metadataURI],
  });
}

export async function updateMerchant(
  config: Config,
  chainId: number,
  name: string,
  metadataURI: string,
): Promise<Hash> {
  return writeContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "updateMerchant",
    args: [name, metadataURI],
  });
}

export async function pauseMerchant(
  config: Config,
  chainId: number,
): Promise<Hash> {
  return writeContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "pauseMerchant",
  });
}

export async function activateMerchant(
  config: Config,
  chainId: number,
): Promise<Hash> {
  return writeContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "activateMerchant",
  });
}

export async function disableMerchant(
  config: Config,
  chainId: number,
  merchant: Address,
): Promise<Hash> {
  return writeContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "disableMerchant",
    args: [merchant],
  });
}

/* -------------------------------------------------------------------------- */
/*                                READ FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

export async function getMerchant(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return readContract(config, {
    address: getMerchantRegistryAddress(chainId),
    abi: merchantRegistryAbi,
    functionName: "getMerchant",
    args: [merchant],
  });
}

export async function isActive(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return readContract(config, {
    address: getMerchantRegistryAddress(chainId),
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