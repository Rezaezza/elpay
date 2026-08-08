export interface TransactionDetail {
  hash: `0x${string}`;

  status:
    | "pending"
    | "success"
    | "failed";

  timestamp: number;
}