import {
  erc20Abi,
  type Address,
  type PublicClient,
  type WalletClient,
  type Hash,
} from "viem";

export interface AllowanceParams {
  client: PublicClient;

  token: Address;

  owner: Address;

  spender: Address;

  amount: bigint;
}

export interface ApproveParams
  extends AllowanceParams {

  wallet: WalletClient;
}

export class AllowanceService {

  async allowance(
    params: AllowanceParams,
  ): Promise<bigint> {
    return params.client.readContract({
      address: params.token,
      abi: erc20Abi,
      functionName: "allowance",
      args: [
        params.owner,
        params.spender,
      ],
    });
  }

  async hasAllowance(
    params: AllowanceParams,
  ) {
    const allowance =
      await this.allowance(params);

    return allowance >= params.amount;
  }

  async approve(
    params: ApproveParams,
  ): Promise<Hash> {

    const hash =
      await params.wallet.writeContract({
        address: params.token,

        abi: erc20Abi,

        functionName: "approve",

        account: params.owner,

        args: [
          params.spender,
          params.amount,
        ],

        chain: params.client.chain,
      });

    return hash;
  }

  async waitForApproval(
    client: PublicClient,
    hash: Hash,
  ) {
    return client.waitForTransactionReceipt({
      hash,
    });
  }
}

export const allowanceService =
  new AllowanceService();