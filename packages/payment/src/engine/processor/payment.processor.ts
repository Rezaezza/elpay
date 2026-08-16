import type {
  Address,
  Hash,
  PublicClient,
  WalletClient,
} from "viem";

import {
  allowanceService,
} from "../allowance";

import {
  transferService,
} from "../transfer";

export interface ProcessPaymentInput {
  client: PublicClient;

  wallet: WalletClient;

  token: Address;

  owner: Address;

  recipient: Address;

  spender: Address;

  amount: bigint;
}

export interface ProcessPaymentResult {
  approvalTx?: Hash;

  paymentTx: Hash;

  approved: boolean;
}

export class PaymentProcessor {

  async process(
    input: ProcessPaymentInput,
  ): Promise<ProcessPaymentResult> {

    const approved =
      await allowanceService.hasAllowance({
        client: input.client,

        token: input.token,

        owner: input.owner,

        spender: input.spender,

        amount: input.amount,
      });

    let approvalTx: Hash | undefined;

    if (!approved) {

      approvalTx =
        await allowanceService.approve({
          client: input.client,

          wallet: input.wallet,

          token: input.token,

          owner: input.owner,

          spender: input.spender,

          amount: input.amount,
        });

      await allowanceService.waitForApproval(
        input.client,
        approvalTx,
      );
    }

    const paymentTx =
      await transferService.transfer({
        wallet: input.wallet,

        client: input.client,

        token: input.token,

        account: input.owner,

        recipient: input.recipient,

        amount: input.amount,
      });

    await transferService.waitForTransfer(
      input.client,
      paymentTx,
    );

    return {

      approvalTx,

      paymentTx,

      approved:
        approved || !!approvalTx,
    };
  }
}

export const paymentProcessor =
  new PaymentProcessor();