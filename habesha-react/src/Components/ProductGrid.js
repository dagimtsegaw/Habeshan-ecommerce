import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard"; // Adjust the path if necessary

const placeholderProducts = [
  {
    id: 1,
    name: "Loading...",
    price: "...",
    category: "all",
    image: "https://via.placeholder.com/200x200.png?text=Loading...",
    description: "...",
  },
  {
    id: 2,
    name: "Loading...",
    price: "...",
    category: "all",
    image: "https://via.placeholder.com/200x200.png?text=Loading...",
    description: "...",
  },
];

function ProductGrid({ category }) {
  const [products, setProducts] = useState(placeholderProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a product data fetch with random images
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Stylish T-Shirt",
          price: 29.99,
          category: "men",
          image: "https://source.unsplash.com/random/200x200?shirt",
          description: "A comfortable and stylish t-shirt for everyday wear.",
        },
        {
          id: 2,
          name: "Comfortable Jeans",
          price: 59.99,
          category: "women",
          image: "https://source.unsplash.com/random/200x200?jeans",
          description:
            "High-quality jeans that look great and feel even better.",
        },
        {
          id: 3,
          name: "Cozy Sweater",
          price: 49.99,
          category: "men",
          image: "https://source.unsplash.com/random/200x200?sweater",
          description: "Stay warm and fashionable with this cozy sweater.",
        },
        {
          id: 4,
          name: "Elegant Dress",
          price: 79.99,
          category: "women",
          image: "https://source.unsplash.com/random/200x200?dress",
          description: "An elegant dress perfect for special occasions.",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, [category]);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={() => alert(`Added ${product.name} to cart`)}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
