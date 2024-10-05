// src/components/Cart.js
import React from "react";

const Cart = ({ cart }) => {
  let total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div id="cart-modal">
      <h2>Shopping Cart</h2>
      <div id="cart-items">
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </p>
        ))}
      </div>
      <div id="cart-total">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
