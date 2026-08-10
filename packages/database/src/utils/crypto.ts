import bcrypt from "bcrypt";

const ROUNDS = 12;

export async function hashSecret(secret: string) {
  return bcrypt.hash(secret, ROUNDS);
}

export async function compareSecret(
  plain: string,
  hash: string,
) {
  return bcrypt.compare(plain, hash);
}