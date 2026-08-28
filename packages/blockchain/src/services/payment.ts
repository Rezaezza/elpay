import { Address, Hash } from "viem";

import {
  createPayment,
  approvePayment,
  executePayment,
  refundPayment,
  releaseEscrow,
  getPayment,
  
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
  return createPayment(payer, token, amount, description, expiresAt);
}

//////////////////////////////////////////////////////////////
// APPROVE
//////////////////////////////////////////////////////////////

export async function approvePaymentService(
  paymentId: Hash
) {
  return approvePayment(paymentId);
}

//////////////////////////////////////////////////////////////
// EXECUTE
//////////////////////////////////////////////////////////////

export async function executePaymentService(
  paymentId: Hash
) {
  return executePayment(paymentId);
}

//////////////////////////////////////////////////////////////
// REFUND
//////////////////////////////////////////////////////////////

export async function refundPaymentService(
  paymentId: Hash
) {
  return refundPayment(paymentId);
}

//////////////////////////////////////////////////////////////
// RELEASE ESCROW
//////////////////////////////////////////////////////////////

export async function releaseEscrowService(
  paymentId: Hash
) {
  return releaseEscrow(paymentId);
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
// EXPORT ALIAS
//////////////////////////////////////////////////////////////



export const paymentService = {
  create: createPaymentService,
  approve: approvePaymentService,
  execute: executePaymentService,
 refund: refundPaymentService,
 release: releaseEscrowService,
 get: getPaymentService,

 getMerchantPayments,
  getPayerPayments,
 
 
};