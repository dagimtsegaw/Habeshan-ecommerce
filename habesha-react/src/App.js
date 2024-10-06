import React, { useState } from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductGrid from "./Components/ProductGrid";
import Cart from "./Components/Cart";

import "./assets/styles.css";
import ProductCards from "./Components/Products/ProductCards";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`Adding product: ${product.name} to cart.`);
  };

  return (
    <div>
      <Header cartCount={5} />
      <NavBar />
      <main>
        <Home />
        <ProductGrid />
      </main>
      <Cart cart={cart} />
      <ProductCards />
    </div>
  );
}

export default App;
