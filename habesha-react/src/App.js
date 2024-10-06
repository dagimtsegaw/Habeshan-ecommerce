import React, { useState } from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Components/Cart";

import "./assets/styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Adding product: ${product.name} to cart.`);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <NavBar />
      <main>
        <Home />
        <Products addToCart={addToCart} />
      </main>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
