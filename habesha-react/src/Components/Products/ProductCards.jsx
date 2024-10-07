import React from "react";
import "./ProductCard.module.css";

function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: 19.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Comfortable black t-shirt for everyday wear.",
    },
    {
      id: 2,
      name: "Yellow Hoodie",
      price: 39.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Warm and stylish yellow hoodie for cooler days.",
    },
    {
      id: 3,
      name: "Black Jeans",
      price: 49.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Classic black jeans that go with everything.",
    },
    {
      id: 4,
      name: "Yellow Sneakers",
      price: 59.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Comfortable and trendy yellow sneakers.",
    },
    {
      id: 5,
      name: "Black Backpack",
      price: 29.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Spacious black backpack for work or travel.",
    },
    {
      id: 6,
      name: "Yellow Sunglasses",
      price: 14.99,
      image:
        "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
      description: "Stylish yellow sunglasses for sunny days.",
    },
    {
      id: 7,
      name: "Black Watch",
      price: 79.99,
      image: "https://via.placeholder.com/300x300?text=Black+Watch",
      description: "Elegant black watch for any occasion.",
    },
    {
      id: 8,
      name: "Yellow Scarf",
      price: 24.99,
      image: "https://via.placeholder.com/300x300?text=Yellow+Scarf",
      description: "Soft and warm yellow scarf for winter.",
    },
    {
      id: 9,
      name: "Black Leather Jacket",
      price: 99.99,
      image: "https://via.placeholder.com/300x300?text=Black+Leather+Jacket",
      description: "Classic black leather jacket for a cool look.",
    },
    {
      id: 10,
      name: "Yellow Beanie",
      price: 17.99,
      image: "https://via.placeholder.com/300x300?text=Yellow+Beanie",
      description: "Cozy yellow beanie to keep you warm.",
    },
    {
      id: 11,
      name: "Black Dress Shoes",
      price: 69.99,
      image: "https://via.placeholder.com/300x300?text=Black+Dress+Shoes",
      description: "Formal black dress shoes for special occasions.",
    },
    {
      id: 12,
      name: "Yellow Umbrella",
      price: 22.99,
      image: "https://via.placeholder.com/300x300?text=Yellow+Umbrella",
      description: "Bright yellow umbrella to keep you dry in style.",
    },
  ];

  let cart = [];

  function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-tag">New</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price-rating">
                    <span class="product-price">$${product.price.toFixed(
                      2
                    )}</span>
                    <div class="product-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-count">(42)</span>
                    </div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${
                  product.id
                })">Add to Cart</button>
            </div>
        `;
      productGrid.appendChild(productCard);
    });
  }

  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      updateCartCount();
      alert(`${product.name} added to cart!`);
    }
  }

  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  }

  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
  });
  return (
    <>
      <main>
        <div className="product-grid" id="product-grid">
          {/* <!-- Products will be dynamically added here --> */}
        </div>
      </main>
    </>
  );
}

export default ProductCards;
