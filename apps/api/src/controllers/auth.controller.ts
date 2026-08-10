import { authService } from "../services/auth.service";
import { siweService } from "../services/siwe.service";

export class AuthController {
  nonce() {
    return {
      nonce: authService.generateNonce(),
    };
  }

  message(body: {
    address: `0x${string}`;
    nonce: string;
  }) {
    return {
      message: siweService.createMessage({
        domain: "localhost:3001",
        address: body.address,
        uri: "http://localhost:3001",
        chainId: 5042002,
        nonce: body.nonce,
      }),
    };
  }

  async verify(body: {
    address: `0x${string}`;
    message: string;
    signature: `0x${string}`;
  }) {
    return authService.verify(body);
  }
}

export const authController = new AuthController();