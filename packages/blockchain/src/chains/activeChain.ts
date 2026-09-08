let activeChainId = 5042002;

export function setActiveChainId(chainId: number) {
  activeChainId = chainId;
}

export function getActiveChainId() {
  return activeChainId;
}