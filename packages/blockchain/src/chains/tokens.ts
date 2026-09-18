export const TOKENS = {
  arc: {
    USDC: {
      symbol: "USDC",
      decimals: 6,
      address:
        "0x3600000000000000000000000000000000000000",
    },
  },

  arcMainnet: {
    USDC: {
      symbol: "USDC",
      decimals: 6,
      address:
        process.env.NEXT_PUBLIC_ARC_MAINNET_USDC ??
        "",
    },
  },

  baseSepolia: {
    USDC: {
      symbol: "USDC",
      decimals: 6,
      address:
        process.env.NEXT_PUBLIC_BASE_SEPOLIA_USDC ??
        "",
    },
  },

  base: {
    USDC: {
      symbol: "USDC",
      decimals: 6,
      address:
        process.env.NEXT_PUBLIC_BASE_USDC ??
        "",
    },
  },
} as const;