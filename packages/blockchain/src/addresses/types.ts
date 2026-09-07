import type { Address } from "viem";

export interface ContractAddresses {
  factory: Address;
  merchantRegistry: Address;
  paymentProcessor: Address;
  escrow: Address;
}