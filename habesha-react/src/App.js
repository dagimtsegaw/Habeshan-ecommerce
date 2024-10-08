import React, { useState } from "react";
import Header from "./Components/Header/Header";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductGrid from "./Components/Products/ProductGrid";
import Cart from "./Pages/Cart/Cart";

import "./assets/styles.css";
import Routing from "./Router";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Adding product: ${product.name} to cart.`);
  };

  return (
    <div>
      <Routing />
      <main>
        <Home />
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
