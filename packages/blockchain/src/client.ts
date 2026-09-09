import type { Config } from "wagmi";

let config: Config | null = null;

export function setBlockchainConfig(
  wagmi: Config
) {
  config = wagmi;
}

export function getBlockchainConfig() {
  if (!config) {
    throw new Error(
      "Blockchain config has not been initialized."
    );
  }

  return config;
}