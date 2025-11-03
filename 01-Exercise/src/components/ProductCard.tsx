import React from "react";

type Product = {
  name: string;
  price: number;
  description?: string;
  product: Product;
};


const ProductCard = (props: Product) => {
  const { product } = props;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  );
};

export default ProductCard;
