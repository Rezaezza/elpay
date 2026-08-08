import { formatUnits } from "viem";

import { publicClient } from "../clients";
import { ERC20_ABI } from "../constants";
import { USDC_ADDRESS } from "../constants";

export async function getUSDCBalance(address: `0x${string}`) {
  const balance = await publicClient.readContract({
    address: USDC_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: [address],
  });

  return formatUnits(balance, 6);
}