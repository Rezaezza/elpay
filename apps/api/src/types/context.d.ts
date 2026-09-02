export interface JwtPayload {
  sessionId: string;
  userId: string;
  iat?: number;
  exp?: number;
}

declare module "hono" {
  interface ContextVariableMap {
    user: JwtPayload;
  }
}