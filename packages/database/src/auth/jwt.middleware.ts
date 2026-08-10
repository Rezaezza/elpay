import { verifyJwt } from "../utils/jwt";

export async function authenticate(
  token: string
) {
  return verifyJwt(token);
}