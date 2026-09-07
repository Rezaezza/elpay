import { wagmiConfig } from "../wagmi";

export function getActiveChainId(): number {
  const chainId = wagmiConfig.state.chainId;

  if (!chainId) {
    throw new Error("No active chain found.");
  }

  return chainId;
}