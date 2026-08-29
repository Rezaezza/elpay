import type { Address, Hash } from "viem";

import { waitForTransactionReceipt } from "wagmi/actions";

import { wagmiConfig } from "../wagmi";

import {
  registerMerchant,
  updateMerchant,
  pauseMerchant,
  activateMerchant,
  disableMerchant,
  getMerchant,
  isActive,
} from "../contracts/merchant";

//////////////////////////////////////////////////////////////
// WRITE
//////////////////////////////////////////////////////////////

export async function registerMerchantService(
  name: string,
  metadataURI: string
): Promise<Hash> {
  const hash = await registerMerchant(
    name,
    metadataURI
  );

  await waitForTransactionReceipt(
    wagmiConfig,
    { hash }
  );

  return hash;
}

export async function updateMerchantService(
  name: string,
  metadataURI: string
): Promise<Hash> {
  const hash = await updateMerchant(
    name,
    metadataURI
  );

  await waitForTransactionReceipt(
    wagmiConfig,
    { hash }
  );

  return hash;
}

export async function pauseMerchantService(): Promise<Hash> {
  const hash = await pauseMerchant();

  await waitForTransactionReceipt(
    wagmiConfig,
    { hash }
  );

  return hash;
}

export async function activateMerchantService(): Promise<Hash> {
  const hash = await activateMerchant();

  await waitForTransactionReceipt(
    wagmiConfig,
    { hash }
  );

  return hash;
}

export async function disableMerchantService(
  merchant: Address
): Promise<Hash> {
  const hash = await disableMerchant(
    merchant
  );

  await waitForTransactionReceipt(
    wagmiConfig,
    { hash }
  );

  return hash;
}

//////////////////////////////////////////////////////////////
// READ
//////////////////////////////////////////////////////////////

export async function getMerchantService(
  merchant: Address
) {
  return getMerchant(merchant);
}

export async function isMerchantActiveService(
  merchant: Address
) {
  return isActive(merchant);
}

//////////////////////////////////////////////////////////////
// EXPORT
//////////////////////////////////////////////////////////////

export const merchantService = {
  register: registerMerchantService,
  update: updateMerchantService,
  pause: pauseMerchantService,
  activate: activateMerchantService,
  disable: disableMerchantService,
  get: getMerchantService,
  isActive: isMerchantActiveService,
};