import { Context, Next } from "hono";
import { JwtService } from "@elpay/database";

const jwt = new JwtService();

export async function authMiddleware(
  c: Context,
  next: Next,
) {
  const authorization =
    c.req.header("Authorization");

  if (!authorization) {
    return c.json(
      {
        success: false,
        error: "Unauthorized",
      },
      401,
    );
  }

  const token =
    authorization.replace("Bearer ", "");

  try {
 const payload = await jwt.verify(token);

if (
  typeof payload.userId !== "string" ||
  typeof payload.sessionId !== "string"
) {
  return c.json(
    {
      success: false,
      error: "Invalid token payload",
    },
    401,
  );
}

c.set("user", {
  userId: payload.userId,
  sessionId: payload.sessionId,
  iat: payload.iat,
  exp: payload.exp,
});

    await next();
  } catch {
    return c.json(
      {
        success: false,
        error: "Invalid token",
      },
      401,
    );
  }
}