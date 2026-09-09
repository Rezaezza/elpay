import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  waitForTransactionReceipt,
} from "wagmi/actions";

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
  config: Config,
  chainId: number,
  name: string,
  metadataURI: string,
): Promise<Hash> {
  const hash = await registerMerchant(
    config,
    chainId,
    name,
    metadataURI,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export async function updateMerchantService(
  config: Config,
  chainId: number,
  name: string,
  metadataURI: string,
): Promise<Hash> {
  const hash = await updateMerchant(
    config,
    chainId,
    name,
    metadataURI,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export async function pauseMerchantService(
  config: Config,
  chainId: number,
): Promise<Hash> {
  const hash = await pauseMerchant(
    config,
    chainId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export async function activateMerchantService(
  config: Config,
  chainId: number,
): Promise<Hash> {
  const hash = await activateMerchant(
    config,
    chainId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export async function disableMerchantService(
  config: Config,
  chainId: number,
  merchant: Address,
): Promise<Hash> {
  const hash = await disableMerchant(
    config,
    chainId,
    merchant,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// READ
//////////////////////////////////////////////////////////////

export async function getMerchantService(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return getMerchant(
    config,
    chainId,
    merchant,
  );
}

export async function isMerchantActiveService(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return isActive(
    config,
    chainId,
    merchant,
  );
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