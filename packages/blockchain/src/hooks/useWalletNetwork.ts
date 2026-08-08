import { useAccount, useChainId } from "wagmi";

import { ARC_CHAIN_ID } from "../chains";


export function useWalletNetwork() {
  const { address, isConnected } = useAccount();

  const chainId = useChainId();

  return {
    address,
    chainId,
    isConnected,
    isSupportedNetwork:
      chainId === ARC_CHAIN_ID,
  };
}