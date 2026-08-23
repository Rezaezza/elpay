import { PaymentRepository } from "../repositories/payment.repository";
import { toDatabasePayment } from "../mappers/payment.mapper";

export class DatabasePaymentService {
  constructor(
    private readonly repository = new PaymentRepository(),
  ) {}

  async create(
    data: Parameters<PaymentRepository["create"]>[0],
  ) {
    const payment = await this.repository.create(data);

    return toDatabasePayment(payment);
  }

  async list() {
    const payments = await this.repository.list();

    return payments.map(toDatabasePayment);
  }

  async findByTxHash(hash: string) {
    const payment = await this.repository.findByTxHash(hash);

    if (!payment) {
      return null;
    }

    return toDatabasePayment(payment);
  }

  async markSuccess(id: string) {
    const payment = await this.repository.markSuccess(id);

    return toDatabasePayment(payment);
  }

  async markFailed(id: string) {
    const payment = await this.repository.markFailed(id);

    return toDatabasePayment(payment);
  }
}

export const databasePaymentService =
  new DatabasePaymentService();