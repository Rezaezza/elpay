import { verifyMessage } from "viem";

export class SignatureService {
  async verify(
    address: string,
    message: string,
    signature: string
  ) {
    return verifyMessage({
      address: address as `0x${string}`,
      message,
      signature: signature as `0x${string}`,
    });
  }
}

export const signatureService =
  new SignatureService();