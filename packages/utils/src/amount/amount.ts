const USDC_DECIMALS = 6;

export function formatUSDC(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: USDC_DECIMALS,
  });
}

export function parseUSDC(value: string): number {
  return Number.parseFloat(value);
}