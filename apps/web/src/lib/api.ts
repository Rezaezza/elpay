const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3001";

async function request<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${API_URL}${path}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
    },
  );

  const contentType =
    response.headers.get("content-type");

  const data = contentType?.includes(
    "application/json",
  )
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "message" in data
        ? String(data.message)
        : `API request failed: ${response.status}`;

    throw new Error(message);
  }

  return data as T;
}

export type NonceResponse = {
  nonce: string;
};

export type MessageResponse = {
  message: string;
};

export type LoginResponse = {
  jwt: string;
  session: {
    id: string;
  };
  user: {
    id: string;
    role: string;
  };
};

/**
 * Generic API client.
 *
 * Tetap callable:
 *
 * api("/auth/me")
 *
 * sekaligus menyediakan:
 *
 * api.auth.nonce()
 * api.auth.message()
 * api.auth.verify()
 */
async function apiRequest<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  return request<T>(path, options);
}

export const api = Object.assign(
  apiRequest,
  {
    auth: {
      nonce() {
        return request<NonceResponse>(
          "/auth/nonce",
        );
      },

      message(data: {
        address: `0x${string}`;
        nonce: string;
      }) {
        return request<MessageResponse>(
          "/auth/message",
          {
            method: "POST",
            body: JSON.stringify(data),
          },
        );
      },

      verify(data: {
        address: `0x${string}`;
        message: string;
        signature: `0x${string}`;
      }) {
        return request<LoginResponse>(
          "/auth/verify",
          {
            method: "POST",
            body: JSON.stringify(data),
          },
        );
      },
    },
  },
);