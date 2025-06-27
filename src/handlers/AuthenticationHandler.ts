import { Errors, QueryHandler } from "@danielfroz/sloth";
import {
  AuthenticationQuery,
  AuthenticationQueryResult,
} from "src/models/index.ts";

export class AuthenticationHandler
  implements QueryHandler<AuthenticationQuery, AuthenticationQueryResult>
{
  async handle(query: AuthenticationQuery): Promise<AuthenticationQueryResult> {
    if (!query) {
      throw new Errors.ArgumentError("Missing query!");
    }

    if (!query.email) {
      throw new Errors.ArgumentError("Missing query.email!");
    }

    if (!query.password) {
      throw new Errors.ArgumentError("Missing query.password!");
    }

    const { email, id, password, sid } = query;

    return { id, sid };
  }
}
