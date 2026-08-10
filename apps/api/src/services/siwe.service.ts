import { SiweMessage } from "siwe";

export class SiweService {
  createMessage(params: {
    domain: string;
    address: `0x${string}`;
    uri: string;
    chainId: number;
    nonce: string;
  }) {
    const message = new SiweMessage({
      domain: params.domain,
      address: params.address,
      statement: "Sign in to ElPay",
      uri: params.uri,
      version: "1",
      chainId: params.chainId,
      nonce: params.nonce,
    });

    return message.prepareMessage();
  }
}

export const siweService = new SiweService();