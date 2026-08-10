import crypto from "crypto";

export class NonceService {

  generate(length = 32) {
    return crypto
      .randomBytes(length)
      .toString("hex");
  }

}