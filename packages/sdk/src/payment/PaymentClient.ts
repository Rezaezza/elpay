//packages/sdk/src/payment/PaymentClient.ts

import { HttpClient } from "../client/HttpClient";

import type {
  CreatePaymentRequest,
  Payment,
  SDKConfig,
} from "../types";

export class PaymentClient extends HttpClient {
  constructor(config: SDKConfig) {
    super(config);
  }

  create(
    payload: CreatePaymentRequest,
  ) {
    return this.request<Payment>(
      "/payments",
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );
  }

  get(id: string) {
    return this.request<Payment>(
      `/payments/${id}`,
    );
  }

  list() {
    return this.request<Payment[]>(
      "/payments",
    );
  }
}
