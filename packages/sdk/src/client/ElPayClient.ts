//packages/sdk/src/client/ElPayClient.ts


import type { SDKConfig } from "../types";

import { PaymentClient } from "../payment";
import { CheckoutClient } from "../checkout";
import { MerchantClient } from "../merchant";
import { WalletClient } from "../wallet";
import { WebhookClient } from "../webhook";

export class ElPayClient {
  readonly payment: PaymentClient;
  readonly checkout: CheckoutClient;
  readonly merchant: MerchantClient;
  readonly wallet: WalletClient;
  readonly webhook: WebhookClient;

  constructor(
    readonly config: SDKConfig,
  ) {
    this.payment = new PaymentClient(config);

    this.checkout = new CheckoutClient(config);

    this.merchant = new MerchantClient(config);

    this.wallet = new WalletClient(config);

    this.webhook = new WebhookClient(config);
  }
}
