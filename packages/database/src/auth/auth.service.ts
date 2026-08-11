import { UserService } from "../services/user.service";
import { WalletRepository } from "../repositories/wallet.repository";
import { SessionService } from "../services/session.service";

import { JwtService } from "./jwt.service";
import { NonceService } from "./nonce.service";
import { SignatureService } from "./signature.service";
import { createSignMessage } from "./siwe-message";


export class AuthService {

 private users = new UserService();

private wallets = new WalletRepository();

private sessions = new SessionService();

private jwt = new JwtService();

private nonce = new NonceService();

private signature = new SignatureService();

  async login(address: string) {

    let user = await this.users.findByWallet(address);

    if (!user) {

      const createdUser = await this.users.create({

        role: "USER",

      });

      await this.wallets.create({

        address,

        walletType: "EOA",

        network: "ARC_TESTNET",

        userId: createdUser.id,

      });

      user = await this.users.findById(createdUser.id);

    }

    if (!user) {

      throw new Error("Failed to create user");

    }

    const session = await this.sessions.create(user.id);

    const jwt = await this.jwt.sign({

      sessionId: session.id,

      userId: user.id,

    });

    return {

      jwt,

      session,

      user,

    };

  }

 createNonce() {

  return this.nonce.generate();

}

createMessage(

  address: string,

  nonce: string,

) {

  return createSignMessage(

    address,

    nonce,

  );

}

async verifySignature(

  address: `0x${string}`,

  message: string,

  signature: `0x${string}`,

) {

  return this.signature.verify(

    address,

    message,

    signature,

  );

}

async verify(
  address: `0x${string}`,
  message: string,
  signature: `0x${string}`,
) {
  const valid = await this.signature.verify(
    address,
    message,
    signature,
  );

  if (!valid) {
    throw new Error("Invalid signature");
  }

  return this.login(address);
}

async logout(token: string) {
  await this.sessions.delete(token);

  return {
    success: true,
  };
}

}