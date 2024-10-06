import React from "react";

const ProductCard = ({ product, addToCart }) => {
  // Check if price is a number, otherwise show "N/A"
  const displayPrice =
    typeof product.price === "number" ? product.price.toFixed(2) : "N/A";

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${displayPrice}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
