const EXPLORER = "https://testnet.arcscan.app";

export function getExplorerTxUrl(hash: string): string {
  return `${EXPLORER}/tx/${hash}`;
}

export function getExplorerAddressUrl(address: string): string {
  return `${EXPLORER}/address/${address}`;
}