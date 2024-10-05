import React, { useState, useEffect } from "react";

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
  {
    id: 3,
    name: "Loading...",
    price: "...",
    category: "all",
    image: "https://via.placeholder.com/200x200.png?text=Loading...",
    description: "...",
  },
  {
    id: 4,
    name: "Loading...",
    price: "...",
    category: "all",
    image: "https://via.placeholder.com/200x200.png?text=Loading...",
    description: "...",
  },
];

function ProductGrid({ category }) {
  const [products, setProducts] = useState(placeholderProducts); // Initial placeholder state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a delay in loading actual products
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Stylish T-Shirt",
          price: 29.99,
          category: "men",
          image: "https://via.placeholder.com/200x200.png?text=T-Shirt",
          description: "A comfortable and stylish t-shirt for everyday wear.",
        },
        {
          id: 2,
          name: "Comfortable Jeans",
          price: 59.99,
          category: "women",
          image: "https://via.placeholder.com/200x200.png?text=Jeans",
          description:
            "High-quality jeans that look great and feel even better.",
        },
        {
          id: 3,
          name: "Cozy Sweater",
          price: 49.99,
          category: "men",
          image: "https://via.placeholder.com/200x200.png?text=Sweater",
          description: "Stay warm and fashionable with this cozy sweater.",
        },
        {
          id: 4,
          name: "Elegant Dress",
          price: 79.99,
          category: "women",
          image: "https://via.placeholder.com/200x200.png?text=Dress",
          description: "An elegant dress perfect for special occasions.",
        },
      ]);
      setLoading(false); // Set loading to false after products are loaded
    }, 2000); // Simulate 2 seconds delay
  }, [category]);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{loading ? "Loading..." : `$${product.price.toFixed(2)}`}</p>
          <button
            disabled={loading}
            onClick={() => alert(`Added ${product.name} to cart`)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
