export const ENV = {
  RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
  CHAIN_ID: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  EXPLORER: process.env.NEXT_PUBLIC_EXPLORER,
  USDC: process.env.NEXT_PUBLIC_USDC_ADDRESS,
} as const;