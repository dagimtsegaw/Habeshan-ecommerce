import React, { useState } from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductGrid from "./Components/Products/ProductGrid";
import Cart from "./Pages/Cart/Cart";

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
      <ProductCards />
    </div>
  );
}

export default App;
