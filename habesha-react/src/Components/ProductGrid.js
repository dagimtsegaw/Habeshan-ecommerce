import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
  {
    id: 2,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
  {
    id: 3,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
  {
    id: 4,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
  {
    id: 5,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
  {
    id: 6,
    name: "Ethiopian Traditional Dress",
    price: 199.99,
    description:
      "Beautiful Ethiopian traditional dress with intricate designs.",
  },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
