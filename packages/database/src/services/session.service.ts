import crypto from "crypto";

import { SessionRepository } from "../repositories/session.repository";

export class SessionService {

  constructor(
    private readonly repository = new SessionRepository()
  ) {}

  create(userId: string) {
    return this.repository.create({
      token: crypto.randomUUID(),
      expiresAt: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 7
      ),
      user: {
        connect: {
          id: userId,
        },
      },
    });
  }

  findByToken(token: string) {
    return this.repository.findByToken(token);
  }

  findByUser(userId: string) {
    return this.repository.findByUser(userId);
  }

  delete(token: string) {
    return this.repository.delete(token);
  }

  deleteExpired() {
    return this.repository.deleteExpired(new Date());
  }

}