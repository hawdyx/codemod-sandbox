import { styleText } from "node:util";
import { Logger } from "../utils/logger";

export interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

export class UserService {
  private logger: Logger;
  private users: Map<string, User>;

  constructor() {
    this.logger = new Logger("UserService");
    this.users = new Map();
  }

  createUser(name: string, email: string): User {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      status: "active",
    };

    this.users.set(user.id, user);
    this.logger.success(`User created: ${user.name}`);
    console.log(styleText("blue", `User ID: ${user.id}`));

    return user;
  }

  deleteUser(id: string): boolean {
    if (!this.users.has(id)) {
      this.logger.error(`User not found: ${id}`);
      return false;
    }

    this.users.delete(id);
    this.logger.success(`User deleted: ${id}`);
    return true;
  }

  listUsers(): void {
    console.log(styleText("blue", `Total users: ${this.users.size}`));
    this.users.forEach((user) => {
      const statusColor = user.status === "active" ? (text) => styleText("green", text) : (text) => styleText("red", text);
      console.log(statusColor(`- ${user.name} (${user.email})`));
    });
  }
}
