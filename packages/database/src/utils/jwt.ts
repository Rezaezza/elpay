import {
  type JWTPayload,
  SignJWT,
  jwtVerify,
} from "jose";

const JWT_SECRET =
  process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    "JWT_SECRET environment variable is not configured",
  );
}

const secret =
  new TextEncoder().encode(
    JWT_SECRET,
  );

export async function signJwt(
  payload: JWTPayload,
) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyJwt(
  token: string,
) {
  const result =
    await jwtVerify(
      token,
      secret,
    );

  return result.payload;
}