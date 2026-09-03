import { generateNonce } from "../lib/nonce.js";

export class NonceService {
  create() {
    return generateNonce();
  }
}

export const nonceService = new NonceService();