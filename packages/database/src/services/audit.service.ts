import { AuditRepository } from "../repositories/audit.repository";

export class AuditService {
  constructor(
    private readonly repository = new AuditRepository()
  ) {}

  log(data: Parameters<AuditRepository["create"]>[0]) {
    return this.repository.create(data);
  }
}