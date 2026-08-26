import type { Address, Hash } from "viem";

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
  return registerMerchant(name, metadataURI);
}

export async function updateMerchantService(
  name: string,
  metadataURI: string
): Promise<Hash> {
  return updateMerchant(name, metadataURI);
}

export async function pauseMerchantService(): Promise<Hash> {
  return pauseMerchant();
}

export async function activateMerchantService(): Promise<Hash> {
  return activateMerchant();
}

export async function disableMerchantService(
  merchant: Address
): Promise<Hash> {
  return disableMerchant(merchant);
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