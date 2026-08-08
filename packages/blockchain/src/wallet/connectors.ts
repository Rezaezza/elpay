export const SUPPORTED_WALLETS = [
  "MetaMask",
  "OKX Wallet",
  "Rabby",
  "Coinbase Wallet",
  "WalletConnect",
] as const;

export type SupportedWallet =
  (typeof SUPPORTED_WALLETS)[number];