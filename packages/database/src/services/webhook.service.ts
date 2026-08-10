import { WebhookRepository } from "../repositories/webhook.repository";

export class WebhookService {
  constructor(
    private readonly repository = new WebhookRepository()
  ) {}

  create(data: Parameters<WebhookRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  disable(id: string) {
    return this.repository.disable(id);
  }
}