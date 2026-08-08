import { transferUSDC } from "./transfer";

export async function sendPayment(
  receiver: `0x${string}`,
  amount: string,
) {
  return transferUSDC(receiver, amount);
}