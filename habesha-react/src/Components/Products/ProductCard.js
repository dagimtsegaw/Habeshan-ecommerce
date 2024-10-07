import React, { useState } from "react";
import { FaStar, FaShoppingCart, FaEnvelope } from "react-icons/fa";
import styles from "./ProductCard.module.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={product.imgLink}
          alt={product.name}
        />
        <div className={styles.productTag}>New</div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productPriceRating}>
          <span className={styles.productPrice}>
            ${product.price.toFixed(2)}
          </span>
          <div className={styles.productRating}>
            <span className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.starIcon} />
              ))}
            </span>
            <span className={styles.ratingCount}>(42)</span>
          </div>
        </div>
        <div className={styles.productButtons}>
          <button
            className={styles.addToCart}
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <button className={styles.contact}>
            <FaEnvelope /> Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
