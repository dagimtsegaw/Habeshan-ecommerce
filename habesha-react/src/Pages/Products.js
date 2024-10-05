// src/pages/Products.js
import React, { useState } from "react";
import ProductGrid from "../Components/ProductGrid";
import { products } from "../products";

const Products = ({ addToCart }) => {
  const [category, setCategory] = useState("all");

  const displayProducts = () => {
    return category === "all"
      ? products
      : products.filter((p) => p.category === category);
  };

  return (
    <section id="products">
      <h2>Our Products</h2>
      <ProductGrid products={displayProducts()} addToCart={addToCart} />
    </section>
  );
};

export default Products;
