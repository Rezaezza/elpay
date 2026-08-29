import { Address, Hash } from "viem";

import { waitForTransactionReceipt } from "wagmi/actions";

import { wagmiConfig } from "../wagmi";

import {
  createPayment,
  approvePayment,
  executePayment,
  refundPayment,
  releaseEscrow,
  getPayment,
  cancelPayment,

  getMerchantPayments as getMerchantPaymentsContract,
  getPayerPayments as getPayerPaymentsContract,
} from "../contracts/payment";

//////////////////////////////////////////////////////////////
// CREATE
//////////////////////////////////////////////////////////////

export async function createPaymentService(
  payer: Address,
  token: Address,
  amount: bigint,
  description: string,
  expiresAt: bigint
): Promise<Hash> {
  const hash = await createPayment(
    payer,
    token,
    amount,
    description,
    expiresAt
  );

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// APPROVE
//////////////////////////////////////////////////////////////

export async function approvePaymentService(
  paymentId: Hash
): Promise<Hash> {
  const hash = await approvePayment(paymentId);

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// EXECUTE
//////////////////////////////////////////////////////////////

export async function executePaymentService(
  paymentId: Hash
): Promise<Hash> {
  const hash = await executePayment(paymentId);

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// REFUND
//////////////////////////////////////////////////////////////

export async function refundPaymentService(
  paymentId: Hash
): Promise<Hash> {
  const hash = await refundPayment(paymentId);

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// RELEASE ESCROW
//////////////////////////////////////////////////////////////

export async function releaseEscrowService(
  paymentId: Hash
): Promise<Hash> {
  const hash = await releaseEscrow(paymentId);

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// CANCEL
//////////////////////////////////////////////////////////////

export async function cancelPaymentService(
  paymentId: Hash
): Promise<Hash> {
  const hash = await cancelPayment(paymentId);

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// GET PAYMENT
//////////////////////////////////////////////////////////////

export async function getPaymentService(
  paymentId: Hash
) {
  return getPayment(paymentId);
}

//////////////////////////////////////////////////////////////
// GET MERCHANT PAYMENTS
//////////////////////////////////////////////////////////////

export async function getMerchantPayments(
  merchant: Address
) {
  return getMerchantPaymentsContract(merchant);
}

export async function getPayerPayments(
  payer: Address
) {
  return getPayerPaymentsContract(payer);
}

//////////////////////////////////////////////////////////////
// EXPORT
//////////////////////////////////////////////////////////////

export const paymentService = {
  create: createPaymentService,
  approve: approvePaymentService,
  execute: executePaymentService,
  refund: refundPaymentService,
  release: releaseEscrowService,
  cancel: cancelPaymentService,
  get: getPaymentService,

  getMerchantPayments,
  getPayerPayments,
};