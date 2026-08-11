import {
  AuthService as DatabaseAuthService,
} from "@elpay/database";

import { nonceService } from "./nonce.service";

class AuthService {
  private auth =
    new DatabaseAuthService();

  generateNonce() {
    return nonceService.create();
  }

  verify(data: {
    address: `0x${string}`;
    message: string;
    signature: `0x${string}`;
  }) {
    return this.auth.verify(
      data.address,
      data.message,
      data.signature,
    );
  }

  logout(token: string) {
  return this.auth.logout(token);
 }

}

export const authService =
  new AuthService();