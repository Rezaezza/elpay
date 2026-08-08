export interface PaymentInput {
  receiver: `0x${string}`;

  amount: string;

  memo?: string;
}

export interface PaymentResult {
  hash: `0x${string}`;
}