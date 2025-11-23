import { Request } from "../routes/node_modules/@types/express";

export interface TheRequestWithName extends Request {
  query: { name?: string };
}
