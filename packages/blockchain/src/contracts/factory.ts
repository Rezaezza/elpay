import {
  readContract,
} from "wagmi/actions";

import { wagmiConfig } from "../wagmi";

import {
  elPayFactoryAbi,
} from "../abi";

import {
  getFactoryAddress,
} from "../resolver/contracts";

import {
  getActiveChainId,
} from "../chains";

/* -------------------------------------------------------------------------- */
/*                               View Functions                               */
/* -------------------------------------------------------------------------- */

export async function version() {
  return readContract(wagmiConfig, {
    address: getFactoryAddress(
  getActiveChainId()
),
    abi: elPayFactoryAbi,
    functionName: "version",
  });
}

export async function registryAddress() {
  return readContract(wagmiConfig, {
    address: getFactoryAddress(
  getActiveChainId()
),
    abi: elPayFactoryAbi,
    functionName: "registryAddress",
  });
}

export async function processorAddress() {
  return readContract(wagmiConfig, {
    address: getFactoryAddress(
  getActiveChainId()
),
    abi: elPayFactoryAbi,
    functionName: "processorAddress",
  });
}

export async function escrowAddress() {
  return readContract(wagmiConfig, {
    address: getFactoryAddress(
  getActiveChainId()
),
    abi: elPayFactoryAbi,
    functionName: "escrowAddress",
  });
}



/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const factory = {
  version,
  registryAddress,
  processorAddress,
  escrowAddress,
 
};