import type { Config } from "wagmi";

import {
  readContract,
} from "wagmi/actions";

import {
  elPayFactoryAbi,
} from "../abi";

import {
  getFactoryAddress,
} from "../resolver/contracts";

/* -------------------------------------------------------------------------- */
/*                               VIEW FUNCTIONS                               */
/* -------------------------------------------------------------------------- */

export async function version(
  config: Config,
  chainId: number,
) {
  return readContract(config, {
    address: getFactoryAddress(chainId),
    abi: elPayFactoryAbi,
    functionName: "version",
  });
}

export async function registryAddress(
  config: Config,
  chainId: number,
) {
  return readContract(config, {
    address: getFactoryAddress(chainId),
    abi: elPayFactoryAbi,
    functionName: "registryAddress",
  });
}

export async function processorAddress(
  config: Config,
  chainId: number,
) {
  return readContract(config, {
    address: getFactoryAddress(chainId),
    abi: elPayFactoryAbi,
    functionName: "processorAddress",
  });
}

export async function escrowAddress(
  config: Config,
  chainId: number,
) {
  return readContract(config, {
    address: getFactoryAddress(chainId),
    abi: elPayFactoryAbi,
    functionName: "escrowAddress",
  });
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export const factory = {
  version,
  registryAddress,
  processorAddress,
  escrowAddress,
};