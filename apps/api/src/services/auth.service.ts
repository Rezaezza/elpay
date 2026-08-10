import { verifyMessage } from "viem";

import {
  AuthService as DatabaseAuthService,
} from "@elpay/database";

import { nonceService } from "./nonce.service";

const databaseAuth = new DatabaseAuthService();

export class AuthService {
  generateNonce() {
    return nonceService.create();
  }

  async verify(body: {
    address: `0x${string}`;
    message: string;
    signature: `0x${string}`;
  }) {
    const valid = await verifyMessage({
      address: body.address,
      message: body.message,
      signature: body.signature,
    });

    if (!valid) {
      throw new Error("Invalid signature");
    }

    return databaseAuth.login(body.address);
  }
}

export const authService = new AuthService();