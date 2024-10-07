import React, { useState } from "react";
import { FaEnvelope, FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Cart.module.css";

const Cart = ({ cart, updateCart }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increaseQuantity = (productId) => {
    updateCart(productId, "increase");
  };

  const decreaseQuantity = (productId) => {
    updateCart(productId, "decrease");
  };

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <p>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </p>
              <div className={styles.quantityButtons}>
                <button onClick={() => decreaseQuantity(item.id)}>
                  <FaMinus />
                </button>
                <button onClick={() => increaseQuantity(item.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.cartTotal}>Total: ${total.toFixed(2)}</div>

      <button
        className={styles.contactButton}
        onClick={() => setShowContactInfo(!showContactInfo)}
      >
        <FaEnvelope /> Contact
      </button>

      {showContactInfo && (
        <div className={styles.contactInfo}>
          <p>Phone: +123-456-7890</p>
          <p>Instagram: @habeshan_fashion</p>
          <p>Facebook: Habeshan Fashion</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
