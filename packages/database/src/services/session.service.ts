import { SessionRepository } from "../repositories/session.repository";

export class SessionService {
  constructor(
    private readonly repository = new SessionRepository()
  ) {}

  create(data: Parameters<SessionRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  delete(token: string) {
    return this.repository.delete(token);
  }
}