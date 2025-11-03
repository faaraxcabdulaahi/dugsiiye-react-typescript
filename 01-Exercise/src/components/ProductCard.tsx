type Product = {
  name: string;
  price: number;
  description?: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  );
};

export default ProductCard;