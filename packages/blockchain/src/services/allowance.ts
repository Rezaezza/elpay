import { publicClient } from "../clients";
import { ERC20_ABI } from "../constants";
import { USDC_ADDRESS } from "../chains";

export async function getAllowance(
  owner: `0x${string}`,
  spender: `0x${string}`,
) {
  return publicClient.readContract({
    address: USDC_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [owner, spender],
  });
}