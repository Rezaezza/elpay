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

import {
  paymentRepository,
  invoiceRepository,
  paymentIntentRepository,
  PaymentStatus,
  InvoiceStatus,
  PaymentIntentStatus,
} from "@elpay/database";

import {
  paymentStateService,
} from "../state";

import {
  PaymentState,
} from "../state/payment.state";

export interface ProcessPaymentInput {
  paymentId: string;

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

    const payment =
  await paymentRepository.findById(
    input.paymentId
  );

if (!payment) {
  throw new Error("Payment not found");
}

await paymentRepository.update(
  payment.id,
  {
    status: PaymentStatus.PROCESSING,
  }
);

paymentStateService.transition(
  PaymentState.CREATED,
  PaymentState.PROCESSING
);

try {

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

    await paymentRepository.update(
  payment.id,
  {
    status: PaymentStatus.SUCCESS,
    txHash: paymentTx,
    paidAt: new Date(),
  }
);

if (payment.invoiceId) {

   await invoiceRepository.update(
      payment.invoiceId,
      {
         status: InvoiceStatus.PAID,
         paidAt: new Date(),
      }
   );

}

if (payment.paymentIntentId) {

   await paymentIntentRepository.update(
      payment.paymentIntentId,
      {
         status:
           PaymentIntentStatus.COMPLETED,
      }
   );

}

paymentStateService.transition(
  PaymentState.PROCESSING,
  PaymentState.PAID
);

 return {

  approvalTx,

  paymentTx,

  approved:
    approved || !!approvalTx,
};

} catch (error) {

  paymentStateService.transition(
    PaymentState.PROCESSING,
    PaymentState.FAILED
  );

  await paymentRepository.update(
    payment.id,
    {
      status: PaymentStatus.FAILED,
    }
  );

  throw error;

}

}

}

export const paymentProcessor =
  new PaymentProcessor();