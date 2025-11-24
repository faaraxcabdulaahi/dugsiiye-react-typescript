import { Request, Response } from "express";
import { LoginBody } from "../types/authTypes";

export const loginUser = (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email } = req.body;
  res.json({ message: `Logged in as ${email}` });
};
