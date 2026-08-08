export function isPositiveAmount(amount: number): boolean {
  return amount > 0;
}

export function isValidMemo(memo: string): boolean {
  return memo.length <= 255;
}