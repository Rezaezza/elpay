import { verifyMessage } from "viem";

export class SignatureService {

  verify(
    address: `0x${string}`,
    message: string,
    signature: `0x${string}`,
  ) {

    return verifyMessage({

      address,

      message,

      signature,

    });

  }

}