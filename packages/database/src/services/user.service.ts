import { UserRepository } from "../repositories/user.repository";

export class UserService {
  constructor(
    private readonly repository = new UserRepository()
  ) {}

  findById(id: string) {
    return this.repository.findById(id);
  }

  findByWallet(address: string) {
    return this.repository.findByWallet(address);
  }

  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  create(
    data: Parameters<UserRepository["create"]>[0]
  ) {
    return this.repository.create(data);
  }

  update(
    id: string,
    data: Parameters<UserRepository["update"]>[1]
  ) {
    return this.repository.update(id, data);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}