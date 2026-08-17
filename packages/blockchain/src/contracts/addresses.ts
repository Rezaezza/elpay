// packages/blockchain/src/contracts/addresses.ts

import { ARC_TESTNET_ADDRESSES } from "../addresses";

export const contracts = {
  factory: ARC_TESTNET_ADDRESSES.factory,

  registry: ARC_TESTNET_ADDRESSES.merchantRegistry,

  processor: ARC_TESTNET_ADDRESSES.paymentProcessor,

  escrow: ARC_TESTNET_ADDRESSES.escrow,
} as const;

/**
 * Return contract address by key
 */
export function getContractAddress(
  contract: keyof typeof contracts,
): `0x${string}` {
  return contracts[contract];
}

/**
 * Individual exports
 */
export const factoryAddress = contracts.factory;

export const registryAddress = contracts.registry;

export const processorAddress = contracts.processor;

export const escrowAddress = contracts.escrow;

export default contracts;