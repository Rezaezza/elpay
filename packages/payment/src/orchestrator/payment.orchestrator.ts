import {
  merchantService,
} from "../services/merchant.service";

import {
  invoiceService,
} from "../services/invoice.service";

import {
  paymentService,
} from "../services/payment.service";

import {
  paymentIntentService,
} from "../services/payment-intent.service";

import {
  paymentProcessor,
} from "../engine";

import type {
  Address,
  PublicClient,
  WalletClient,
} from "viem";

export interface CheckoutPaymentInput {

  merchantId: string;

  amount: number;

  network: any;

  tokenAddress: string;

  recipient: Address;

  payer: Address;

  spender: Address;

  wallet: WalletClient;

  client: PublicClient;

  currency?: string;

  description?: string;

  metadata?: Record<string, unknown>;

}

export class PaymentOrchestrator {

  async pay(
    input: CheckoutPaymentInput,
  ) {

    //------------------------------------
    // 1. Merchant
    //------------------------------------

    const merchant =
      await merchantService.getMerchant(
        input.merchantId,
      );

    //------------------------------------
    // 2. Payment Intent
    //------------------------------------

   const intent =
  await paymentIntentService.create({

        merchantId: merchant.id,

        amount: input.amount,

        currency:
          input.currency ?? "USDC",

        method: "CHECKOUT",

        description:
          input.description,

        metadata:
          input.metadata,

      });

    //------------------------------------
    // 3. Invoice
    //------------------------------------

 const invoice =
  await invoiceService.createInvoice({

    merchantId: merchant.id,

    invoiceNumber:
      `INV-${Date.now()}`,

    amount: input.amount,

    currency:
      input.currency ?? "USDC",

    memo:
      input.description,

  });

    //------------------------------------
    // 4. Payment
    //------------------------------------

    const payment =
      await paymentService.createPayment({

        merchantId: merchant.id,

        invoiceId: invoice.id,

        paymentIntentId:
          intent.id,

        payerAddress:
          input.payer,

        receiverAddress:
          input.recipient,

        network:
          input.network,

        tokenAddress:
          input.tokenAddress,

        amount:
          input.amount,

        currency:
          input.currency,

        method: "CHECKOUT",

        metadata:
          input.metadata,

      });

    //------------------------------------
    // 5. Blockchain
    //------------------------------------

    const result =
      await paymentProcessor.process({

        paymentId:
          payment.id,

        wallet:
          input.wallet,

        client:
          input.client,

        token:
          input.tokenAddress as Address,

        owner:
          input.payer,

        recipient:
          input.recipient,

        spender:
          input.spender,

        amount:
          BigInt(
            Math.floor(
              input.amount * 1_000_000,
            ),
          ),

      });

    //------------------------------------

    return {

      merchant,

      invoice,

      intent,

      payment,

      blockchain: result,

    };

  }

}

export const paymentOrchestrator =
  new PaymentOrchestrator();