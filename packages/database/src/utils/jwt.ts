import {
  type JWTPayload,
  SignJWT,
  jwtVerify,
} from "jose";

function getSecret(): Uint8Array {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error(
      "JWT_SECRET environment variable is not configured",
    );
  }

  return new TextEncoder().encode(jwtSecret);
}

export async function signJwt(
  payload: JWTPayload,
) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyJwt(
  token: string,
) {
  const result = await jwtVerify(
    token,
    getSecret(),
  );

  return result.payload;
}