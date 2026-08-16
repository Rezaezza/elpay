import type {
  CheckoutSession,
} from "../checkout";

export class CheckoutService {
  async getCheckoutSession(
    sessionId: string,
  ): Promise<CheckoutSession> {
    return {
      id: sessionId,
      merchantId: "merchant_demo",
      amount: BigInt(10_000_000),
      currency: "USDC",
      chainId: 5042002,
      status: "pending",
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
      metadata: {
        description: "Demo Payment",
      },
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    };
  }
}

export const checkoutService =
  new CheckoutService();