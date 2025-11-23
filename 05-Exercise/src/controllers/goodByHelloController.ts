import { Response } from "express";
import { TheRequestWithName } from "../types/helper";

export const sayGoodbye = (req: TheRequestWithName, res: Response) => {
  const { name } = req.query;

  res.json({
    farewell: `Goodbye, ${name}`,
  });
};
