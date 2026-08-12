import { api } from "../lib/api";

export async function getNonce() {
  return api<{
    nonce: string;
  }>("/auth/nonce");
}

export async function getMessage(
  address: `0x${string}`,
  nonce: string,
) {
  return api<{
    message: string;
  }>("/auth/message", {
    method: "POST",
    body: JSON.stringify({
      address,
      nonce,
    }),
  });
}

export async function verifySignature(
  address: `0x${string}`,
  message: string,
  signature: `0x${string}`,
) {
  return api<{
    jwt: string;
    user: {
      id: string;
      role: string;
    };
  }>("/auth/verify", {
    method: "POST",
    body: JSON.stringify({
      address,
      message,
      signature,
    }),
  });
}

export async function me(token: string) {
  return api("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}