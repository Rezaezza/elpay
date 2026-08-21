//packages/sdk/src/payment/PaymentClient.ts


import { HttpClient } from "../client/HttpClient";
import type { SDKConfig } from "../types";

export class PaymentClient extends HttpClient {
  constructor(config: SDKConfig) {
    super(config);
  }
}
