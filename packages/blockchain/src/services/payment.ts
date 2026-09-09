import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  waitForTransactionReceipt,
} from "wagmi/actions";

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
  config: Config,
  chainId: number,
  payer: Address,
  token: Address,
  amount: bigint,
  description: string,
  expiresAt: bigint,
): Promise<Hash> {

  const hash = await createPayment(
    config,
    chainId,
    payer,
    token,
    amount,
    description,
    expiresAt,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// APPROVE
//////////////////////////////////////////////////////////////

export async function approvePaymentService(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {

  const hash = await approvePayment(
    config,
    chainId,
    paymentId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// EXECUTE
//////////////////////////////////////////////////////////////

export async function executePaymentService(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {

  const hash = await executePayment(
    config,
    chainId,
    paymentId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// REFUND
//////////////////////////////////////////////////////////////

export async function refundPaymentService(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {

  const hash = await refundPayment(
    config,
    chainId,
    paymentId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// RELEASE ESCROW
//////////////////////////////////////////////////////////////

export async function releaseEscrowService(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {

  const hash = await releaseEscrow(
    config,
    chainId,
    paymentId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// CANCEL
//////////////////////////////////////////////////////////////

export async function cancelPaymentService(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {

  const hash = await cancelPayment(
    config,
    chainId,
    paymentId,
  );

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

//////////////////////////////////////////////////////////////
// GET PAYMENT
//////////////////////////////////////////////////////////////

export async function getPaymentService(
  config: Config,
  chainId: number,
  paymentId: Hash,
) {
  return getPayment(
    config,
    chainId,
    paymentId,
  );
}

//////////////////////////////////////////////////////////////
// GET MERCHANT PAYMENTS
//////////////////////////////////////////////////////////////

export async function getMerchantPayments(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return getMerchantPaymentsContract(
    config,
    chainId,
    merchant,
  );
}

//////////////////////////////////////////////////////////////
// GET PAYER PAYMENTS
//////////////////////////////////////////////////////////////

export async function getPayerPayments(
  config: Config,
  chainId: number,
  payer: Address,
) {
  return getPayerPaymentsContract(
    config,
    chainId,
    payer,
  );
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