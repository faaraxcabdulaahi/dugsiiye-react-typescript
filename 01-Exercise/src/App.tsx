import React from "react";
import Welcome from "./components/Welcome";
import ProductCard from "./components/ProductCard";


const App = () => {
  const user = { username: "Ali", isPremium: true };
  const product = { name: "Laptop", price: 1200, description: "A powerful laptop" };

  return (
    <div>
      <Welcome {...user} />

      <ProductCard product={product} />
    </div>
  );
};

export default App;
