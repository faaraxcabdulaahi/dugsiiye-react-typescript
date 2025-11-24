import { Request } from "express";

export interface TheRequestWithName extends Request {
  query: { name?: string };
}
