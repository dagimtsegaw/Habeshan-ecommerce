import React, { useState } from "react";
import ProductGrid from "../Components/ProductGrid";

const Products = ({ addToCart }) => {
  const [category, setCategory] = useState("all");

  return (
    <section id="products">
      <h2>Our Products</h2>
      <nav>
        <button onClick={() => setCategory("all")}>All Products</button>
        <button onClick={() => setCategory("men")}>Men</button>
        <button onClick={() => setCategory("women")}>Women</button>
        <button onClick={() => setCategory("kids")}>Kids</button>
      </nav>
      <ProductGrid category={category} />
    </section>
  );
};

export default Products;
