//packages/sdk/src/types/SDKConfig.ts

export interface SDKConfig {
  apiKey: string;
  baseUrl: string;

  timeout?: number;

  userAgent?: string;
}