import { UserService } from "@elpay/database";

export class MeController {
  private users = new UserService();

  async me(userId: string) {
    const user = await this.users.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export const meController = new MeController();