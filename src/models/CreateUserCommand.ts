import { Command } from "@danielfroz/sloth";

export interface CreateUserCommand extends Command {
  email: string;
  name: string;
  password: string;
}
