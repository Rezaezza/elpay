import { PaymentRepository } from "../repositories/payment.repository";

export class PaymentService {
  constructor(
    private readonly repository = new PaymentRepository()
  ) {}

  create(data: Parameters<PaymentRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  findByTxHash(hash: string) {
    return this.repository.findByTxHash(hash);
  }

  markSuccess(id: string) {
    return this.repository.markSuccess(id);
  }

  markFailed(id: string) {
    return this.repository.markFailed(id);
  }
}