import { TransactionRepository } from "../repositories/transaction.repository";

export class TransactionService {
  constructor(
    private readonly repository = new TransactionRepository()
  ) {}

  create(data: Parameters<TransactionRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  findByHash(hash: string) {
    return this.repository.findByHash(hash);
  }
}