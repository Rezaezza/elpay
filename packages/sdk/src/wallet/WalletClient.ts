import { HttpClient } from "../client/HttpClient";
import type { SDKConfig } from "../types";

export class WalletClient extends HttpClient {
  constructor(config: SDKConfig) {
    super(config);
  }
}
