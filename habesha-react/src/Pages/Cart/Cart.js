import React, { useState, useContext } from "react";
import ContactModal from "./ContactModal";
import styles from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const Cart = ({ cart = [], setCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ basket }, dispatch] = useContext(DataContext);

  // Calculate total price of items in the basket
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // Increment function
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        ...item,
        amount: item.amount + 1, // Incrementing the quantity
      },
    });
    console.log("Updated item:", { ...item, amount: item.amount + 1 });
  };
  // Decrement function
  const decrement = (id) =>
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (product, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              amount:
                action === "increment"
                  ? item.amount + 1
                  : Math.max(1, item.amount - 1),
            }
          : item
      );
    });
  };

  return (
    <div className={styles.cartPage}>
      <h2>Your Cart</h2>
      <div className={styles.cartItems}>
        {/* If cart is empty, display a message */}
        {basket.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          basket.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img
                src={item.imgLink}
                alt={item.name}
                className={styles.cartImage}
              />
              <div className={styles.cartDetails}>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => increment(item)}>+</button>
                </div>
                <button
                  className={styles.contactButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  Contact
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.cartTotal}>Total: ${total.toFixed(2)}</div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
