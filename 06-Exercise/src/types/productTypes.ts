
export type theProductQuery = {
  page?: string;
  limit?: string;
};

export type theUpdateProductBody = {
  name: string;
  price: number;
};

export type ProductParams = {
  id: string;
};