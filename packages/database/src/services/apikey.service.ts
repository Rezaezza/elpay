import { ApiKeyRepository } from "../repositories/apikey.repository";

export class ApiKeyService {
  constructor(
    private readonly repository = new ApiKeyRepository()
  ) {}

  create(data: Parameters<ApiKeyRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  revoke(id: string) {
    return this.repository.revoke(id);
  }
}