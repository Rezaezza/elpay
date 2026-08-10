import { signJwt, verifyJwt } from "../utils/jwt";

export class JwtService {

  sign(payload: Record<string, unknown>) {
    return signJwt(payload);
  }

  verify(token: string) {
    return verifyJwt(token);
  }

}