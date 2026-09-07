import { useAccount, useChainId } from "wagmi";

import { isSupportedChain } from "../chains";

export function useWalletNetwork() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  return {
    address,
    chainId,
    isConnected,
    isSupportedNetwork: isSupportedChain(chainId),
  };
}