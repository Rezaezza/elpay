export interface WalletState {
  address?: `0x${string}`;

  connected: boolean;

  chainId?: number;
}