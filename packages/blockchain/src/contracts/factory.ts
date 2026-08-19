import {
  readContract,
} from "wagmi/actions";

import { wagmiConfig } from "../wagmi";

import {
  elPayFactoryAbi,
} from "../abi";

import {
  CONTRACT_ADDRESSES,
} from "../addresses";

const address =
  CONTRACT_ADDRESSES.arcTestnet.factory;

/* -------------------------------------------------------------------------- */
/*                               View Functions                               */
/* -------------------------------------------------------------------------- */

export async function version() {
  return readContract(wagmiConfig, {
    address,
    abi: elPayFactoryAbi,
    functionName: "version",
  });
}

export async function registryAddress() {
  return readContract(wagmiConfig, {
    address,
    abi: elPayFactoryAbi,
    functionName: "registryAddress",
  });
}

export async function processorAddress() {
  return readContract(wagmiConfig, {
    address,
    abi: elPayFactoryAbi,
    functionName: "processorAddress",
  });
}

export async function escrowAddress() {
  return readContract(wagmiConfig, {
    address,
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