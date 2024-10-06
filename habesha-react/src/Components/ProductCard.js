import React from "react";
import { FaStar, FaShoppingCart, FaEnvelope } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946"
          alt={product.name}
        />
        <div className="product-tag">New</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-rating">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <span className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </span>
            <span className="rating-count">(42)</span>
          </div>
        </div>
        <div className="product-buttons">
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="contact">
            <FaEnvelope /> Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
