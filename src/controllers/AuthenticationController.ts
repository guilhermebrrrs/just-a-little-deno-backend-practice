import { Controller } from "@danielfroz/sloth";
import { AuthenticationHandler } from "../handlers/AuthenticationHandler.ts";

export const AuthenticationController = new Controller("/authenticate").add({
  endpoint: "/",
  handler: AuthenticationHandler,
});
