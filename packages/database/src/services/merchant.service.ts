import { MerchantRepository } from "../repositories/merchant.repository";

export class MerchantService {
  constructor(
    private readonly repository = new MerchantRepository()
  ) {}

  create(data: Parameters<MerchantRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  findBySlug(slug: string) {
    return this.repository.findBySlug(slug);
  }

  update(id: string, data: Parameters<MerchantRepository["update"]>[1]) {
    return this.repository.update(id, data);
  }
}