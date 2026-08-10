import { WalletRepository } from "../repositories/wallet.repository";

export class WalletService {
  constructor(
    private readonly repository = new WalletRepository()
  ) {}

  connect(data: Parameters<WalletRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  find(address: string) {
    return this.repository.findByAddress(address);
  }
}