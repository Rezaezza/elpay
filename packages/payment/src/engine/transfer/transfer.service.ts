import {
  erc20Abi,
  type Address,
  type WalletClient,
  type PublicClient,
  type Hash,
} from "viem";

export interface TransferParams {
  wallet: WalletClient;

  client: PublicClient;

  token: Address;

  account: Address;

  recipient: Address;

  amount: bigint;
}

export class TransferService {

  async transfer(
    params: TransferParams,
  ): Promise<Hash> {

    const hash =
      await params.wallet.writeContract({

        address: params.token,

        abi: erc20Abi,

        functionName: "transfer",

        account: params.account,

        args: [
          params.recipient,
          params.amount,
        ],

        chain: params.client.chain,
      });

    return hash;
  }

  async waitForTransfer(
    client: PublicClient,
    hash: Hash,
  ) {
    return client.waitForTransactionReceipt({
      hash,
    });
  }
}

export const transferService =
  new TransferService();