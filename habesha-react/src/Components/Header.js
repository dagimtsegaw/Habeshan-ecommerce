// src/components/Header.js
import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>Habeshan Ecommerce</h1>
      <div id="cart-icon">
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
