export interface VerifySignatureInput {
  address: string;
  message: string;
  signature: string;
}

export interface LoginResult {
  jwt: string;
  sessionId: string;
}