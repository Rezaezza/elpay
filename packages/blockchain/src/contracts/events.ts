import type {
  Address,
  Log,
  Hash,
} from "viem";

import {
  PAYMENT_PROCESSOR_ABI,
  MERCHANT_REGISTRY_ABI,
} from "../abi";

import { publicClient } from "../clients";

import { CONTRACT_ADDRESSES } from "../addresses";

/* -------------------------------------------------------------------------- */
/*                              Payment Events                                */
/* -------------------------------------------------------------------------- */

export async function getPaymentCreatedEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.paymentProcessor,
    event: PAYMENT_PROCESSOR_ABI.find(
      (x) => x.type === "event" && x.name === "PaymentCreated"
    ),
    fromBlock,
    toBlock,
  });
}

export async function getPaymentApprovedEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.paymentProcessor,
    event: PAYMENT_PROCESSOR_ABI.find(
      (x) => x.type === "event" && x.name === "PaymentApproved"
    ),
    fromBlock,
    toBlock,
  });
}

export async function getPaymentCompletedEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.paymentProcessor,
    event: PAYMENT_PROCESSOR_ABI.find(
      (x) => x.type === "event" && x.name === "PaymentCompleted"
    ),
    fromBlock,
    toBlock,
  });
}

export async function getPaymentRefundedEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.paymentProcessor,
    event: PAYMENT_PROCESSOR_ABI.find(
      (x) => x.type === "event" && x.name === "PaymentRefunded"
    ),
    fromBlock,
    toBlock,
  });
}

/* -------------------------------------------------------------------------- */
/*                             Merchant Events                                */
/* -------------------------------------------------------------------------- */

export async function getMerchantRegisteredEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.merchantRegistry,
    event: MERCHANT_REGISTRY_ABI.find(
      (x) => x.type === "event" && x.name === "MerchantRegistered"
    ),
    fromBlock,
    toBlock,
  });
}

export async function getMerchantUpdatedEvents(
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.merchantRegistry,
    event: MERCHANT_REGISTRY_ABI.find(
      (x) => x.type === "event" && x.name === "MerchantUpdated"
    ),
    fromBlock,
    toBlock,
  });
}

/* -------------------------------------------------------------------------- */
/*                           Wallet Payment History                           */
/* -------------------------------------------------------------------------- */

export async function getWalletPayments(
  wallet: Address,
  fromBlock?: bigint,
  toBlock?: bigint
): Promise<Log[]> {
  return publicClient.getLogs({
    address: CONTRACT_ADDRESSES.paymentProcessor,
    event: PAYMENT_PROCESSOR_ABI.find(
      (x) => x.type === "event" && x.name === "PaymentCreated"
    ),
    args: {
      payer: wallet,
    },
    fromBlock,
    toBlock,
  });
}

/* -------------------------------------------------------------------------- */
/*                               Transaction                                  */
/* -------------------------------------------------------------------------- */

export async function getTransactionReceipt(
  hash: Hash
) {
  return publicClient.getTransactionReceipt({
    hash,
  });
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const events = {
  getPaymentCreatedEvents,
  getPaymentApprovedEvents,
  getPaymentCompletedEvents,
  getPaymentRefundedEvents,

  getMerchantRegisteredEvents,
  getMerchantUpdatedEvents,

  getWalletPayments,

  getTransactionReceipt,
};