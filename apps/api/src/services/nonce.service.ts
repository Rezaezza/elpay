import { generateNonce } from "../lib/nonce";

export class NonceService {
  create() {
    return generateNonce();
  }
}

export const nonceService = new NonceService();