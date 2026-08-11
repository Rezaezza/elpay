export class UserController {
  me(user: {
    userId: string;
    sessionId: string;
  }) {
    return {
      id: user.userId,
      sessionId: user.sessionId,
    };
  }
}

export const userController =
  new UserController();