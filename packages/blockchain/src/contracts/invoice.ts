import type { Address } from "viem";

import {
  createPayment,
  getPayment,
  paymentExists,
} from "./payment";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface InvoiceInput {
  payer: Address;
  token: Address;
  amount: bigint;
}

export interface Invoice {
  id: `0x${string}`;
  payer: Address;
  merchant: Address;
  token: Address;
  amount: bigint;
  status: number;
  createdAt: bigint;
  expiresAt: bigint;
  description: string;
}

/* -------------------------------------------------------------------------- */
/*                               Create Invoice                               */
/* -------------------------------------------------------------------------- */

export async function createInvoice(
  payer: Address,
  token: Address,
  amount: bigint
) {
  return createPayment(payer, token, amount);
}

/* -------------------------------------------------------------------------- */
/*                                Read Invoice                                */
/* -------------------------------------------------------------------------- */

export async function getInvoice(
  paymentId: `0x${string}`
): Promise<Invoice> {
  return (await getPayment(paymentId)) as Invoice;
}

/* -------------------------------------------------------------------------- */
/*                              Invoice Exists                                */
/* -------------------------------------------------------------------------- */

export async function invoiceExists(
  paymentId: `0x${string}`
): Promise<boolean> {
  return paymentExists(paymentId) as Promise<boolean>;
}

/* -------------------------------------------------------------------------- */
/*                             Invoice Utilities                              */
/* -------------------------------------------------------------------------- */

export function isInvoicePaid(invoice: Invoice): boolean {
  // PaymentStatus.Paid = 3 (sesuaikan jika enum berubah)
  return invoice.status === 3;
}

export function isInvoiceExpired(invoice: Invoice): boolean {
  return Number(invoice.expiresAt) * 1000 < Date.now();
}

export function invoiceAmount(invoice: Invoice): bigint {
  return invoice.amount;
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const invoice = {
  createInvoice,
  getInvoice,
  invoiceExists,
  isInvoicePaid,
  isInvoiceExpired,
  invoiceAmount,
};