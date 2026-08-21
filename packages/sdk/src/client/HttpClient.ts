//packages/sdk/src/client/HttpClient.ts


import type { SDKConfig } from "../types";

export class HttpClient {
  constructor(
    protected readonly config: SDKConfig,
  ) {}

  protected get baseUrl() {
    return this.config.baseUrl;
  }

  protected get apiKey() {
    return this.config.apiKey;
  }
}
