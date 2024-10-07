import React, { useState, useContext } from "react";
import { FaStar, FaShoppingCart, FaEnvelope } from "react-icons/fa";
import styles from "./ProductCard.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
// import ContactModal from "../..ContactModal";

function ProductCard({ product }) {
  const { image, title, id, price, description } = product;
  const [{ basket }, dispatch] = useContext(DataContext);

  // Function to add/update items in the cart
  const addToCart = () => {
    const existingProduct = basket.find((item) => item.id === product.id);

    if (existingProduct) {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          ...existingProduct,
          amount: existingProduct.amount + 1,
        },
      });
    } else {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          id: product.id,
          imgLink: product.imgLink, // Include imgLink here
          name: product.name, // Include name here
          price: product.price,
          description: product.description,
          amount: 1,
        },
      });
    }
  };

  const updateCart = (productId, action) => {
    const existingProduct = basket.find((item) => item.id === productId);

    if (existingProduct) {
      // Only update if the product exists in the cart
      const updatedQuantity =
        action === "increase"
          ? existingProduct.amount + 1
          : existingProduct.amount - 1;

      if (updatedQuantity > 0) {
        dispatch({
          type: Type.ADD_TO_BASKET,
          item: {
            ...existingProduct,
            amount: updatedQuantity,
          },
        });
      } else {
        dispatch({
          type: Type.REMOVE_FROM_BASKET,
          id: productId,
        });
      }
    }
  };
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
