import { parseUnits } from "viem";

import { ERC20_ABI } from "../constants";
import { USDC_ADDRESS } from "../chains";
import { getWalletClient } from "../clients";

export async function approveUSDC(
  spender: `0x${string}`,
  amount: string,
) {
  const wallet = getWalletClient();

  const [account] = await wallet.getAddresses();

  return wallet.writeContract({
    account,
    address: USDC_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "approve",
    args: [
      spender,
      parseUnits(amount, 6),
    ],
    chain: wallet.chain,
  });
}