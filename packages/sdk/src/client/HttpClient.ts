//packages/sdk/src/client/HttpClient.ts

import type { SDKConfig } from "../types";

export class HttpClient {
  constructor(
    protected readonly config: SDKConfig,
  ) {}

  protected async request<T>(
    path: string,
    init?: RequestInit,
  ): Promise<T> {
    const response = await fetch(
      `${this.config.baseUrl}${path}`,
      {
        ...init,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`,
          ...init?.headers,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Request failed (${response.status})`,
      );
    }

    return response.json() as Promise<T>;
  }
}
