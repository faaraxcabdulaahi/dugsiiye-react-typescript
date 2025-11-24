import { Request, Response } from "express";
import { theProductQuery, theUpdateProductBody, ProductParams } from "../types/productTypes";

export const getProducts = (
  req: Request<{}, {}, {}, theProductQuery>,
  res: Response
) => {
  const { page = "1", limit = "10" } = req.query;
  res.json({ message: `Page ${page} with ${limit} items` });
};

export const updateProduct = (
  req: Request<ProductParams, {}, theUpdateProductBody>,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;

  res.json({
    message: `Product ${id} updated`,
    product: { id, name, price },
  });
};
