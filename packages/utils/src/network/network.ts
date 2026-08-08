export const ARC_CHAIN_ID = 5042002;

export function isArcNetwork(chainId: number): boolean {
  return chainId === ARC_CHAIN_ID;
}

export function getChainId(): number {
  return ARC_CHAIN_ID;
}