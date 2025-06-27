import { CommandHandler, Errors } from "@danielfroz/sloth";
import {
  CreateUserCommand,
  CreateUserCommandResult,
  User,
} from "src/models/index.ts";
import { UserMongoDbRepository } from "src/repositories/index.ts";

export class CreateUserHandler
  implements CommandHandler<CreateUserCommand, CreateUserCommandResult>
{
  async handle(command: CreateUserCommand): Promise<CreateUserCommandResult> {
    if (!command) {
      throw new Errors.ArgumentError("Missing command!");
    }

    if (!command.email) {
      throw new Errors.ArgumentError("Missing command.email!");
    }

    if (!command.name) {
      throw new Errors.ArgumentError("Missing command.name!");
    }

    if (!command.password) {
      throw new Errors.ArgumentError("Missing command.password!");
    }

    const { email, id, name, password, sid } = command;

    /* const user: User = { email, name, password };

    UserMongoDbRepository.instance.create(user); */

    console.log("teste controller");

    return {
      id,
      sid,
    };
  }
}
