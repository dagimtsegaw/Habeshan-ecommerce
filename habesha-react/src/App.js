import React, { useState } from "react"; // Make sure to import useState
import ProductGrid from "./Components/ProductGrid"; // Adjust the path if needed
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Components/Cart";

import "./assets/styles.css";
function App() {
  const [cart, setCart] = React.useState([]);
  const [activeCategory, setActiveCategory] = useState("all"); // Now useState is properly defined
  const addToCart = (productId) => {
    console.log(`Adding product with id ${productId} to cart.`);
  };

  return (
    <div>
      <div>
        <Header cartCount={cart.length} />
        <NavBar />
        <main>
          <Home />
          <Products addToCart={addToCart} />
        </main>
        <Cart cart={cart} />
      </div>
      <nav>
        <button onClick={() => setActiveCategory("all")}>All Products</button>
        <button onClick={() => setActiveCategory("men")}>Men</button>
        <button onClick={() => setActiveCategory("women")}>Women</button>
        <button onClick={() => setActiveCategory("kids")}>Kids</button>
      </nav>

      <main>
        <section id="products">
          <h2>Our Products</h2>
          <ProductGrid category={activeCategory} />
        </section>
      </main>
    </div>
  );
}

export default App;
