import { Query } from "@danielfroz/sloth";

export interface AuthenticationQuery extends Query {
  email: string;
  password: string;
}
