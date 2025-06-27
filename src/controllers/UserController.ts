import { Controller } from "@danielfroz/sloth";
import { CreateUserHandler } from "src/handlers/index.ts";

export const UserController = new Controller("/user").add({
  endpoint: "/create",
  handler: CreateUserHandler,
});
