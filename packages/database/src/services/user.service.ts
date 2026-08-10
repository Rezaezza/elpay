import { UserRepository } from "../repositories/user.repository";

export class UserService {
  constructor(
    private readonly repository = new UserRepository()
  ) {}

  findByWallet(address: string) {
    return this.repository.findByWallet(address);
  }

  create(data: Parameters<UserRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  update(id: string, data: Parameters<UserRepository["update"]>[1]) {
    return this.repository.update(id, data);
  }
}