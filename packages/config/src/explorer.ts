export const EXPLORER = {
  tx: (hash: string) =>
    `https://testnet.arcscan.app/tx/${hash}`,

  address: (address: string) =>
    `https://testnet.arcscan.app/address/${address}`,
} as const;