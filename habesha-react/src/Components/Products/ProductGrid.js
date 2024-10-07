import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "../../Pages/Cart/Cart";

const products = [
  {
    id: 1,
    name: "Elegant Habesha Kemis",
    price: 179.99,
    imgLink:
      "https://www.ethiopian.store/cdn/shop/files/il_fullxfull.5072995743_3ku5-500215.jpg?v=1716886539&width=1946",
    description:
      "Elegant Ethiopian traditional dress with delicate embroidery.",
  },
  {
    id: 2,
    name: "Classic Habesha Gown",
    price: 189.99,
    imgLink:
      "https://i.pinimg.com/736x/89/72/f5/8972f5b2c2411054a3bd8afb57668a98.jpg",
    description:
      "A classic gown representing Ethiopian tradition, adorned with stunning designs.",
  },
  {
    id: 3,
    name: "Royal Habesha Kemis",
    price: 210.0,
    imgLink:
      "https://ethiopiantraditionaldress.com/wp-content/uploads/2024/03/Beautiful-Tradition-Habesha-Kemis-3.jpg",
    description:
      "A royal-inspired traditional dress with a modern touch, perfect for special occasions.",
  },
  {
    id: 4,
    name: "Modern Ethiopian Dress",
    price: 195.5,
    imgLink:
      "https://ethiopiantraditionaldress.com/wp-content/uploads/2024/03/Royal-Habesha-Kemis-3.jpg",
    description:
      "A modern take on the traditional Ethiopian dress with intricate patterns.",
  },
  {
    id: 5,
    name: "Traditional Habesha Kemis",
    price: 200.0,
    imgLink:
      "https://ethiopiantraditionaldress.com/wp-content/uploads/2024/03/Beautiful-Tradition-Habesha-Kemis-3.jpg",
    description:
      "An Ethiopian traditional dress perfect for cultural celebrations.",
  },
  {
    id: 6,
    name: "Premium Cultural Dress",
    price: 205.75,
    imgLink:
      "https://i.pinimg.com/736x/1b/c4/54/1bc454e41050326e61f45300cc9a18fb.jpg",
    description:
      "A premium quality Ethiopian dress with exquisite cultural details.",
  },
  {
    id: 7,
    name: "Elegant Ethiopian Attire",
    price: 189.99,
    imgLink:
      "https://i.pinimg.com/736x/66/d4/d3/66d4d3584c77ce90682ac0a0014cc9e4.jpg",
    description:
      "An elegant and sophisticated Ethiopian traditional dress for all occasions.",
  },
  {
    id: 8,
    name: "Cultural Celebration Gown",
    price: 220.0,
    imgLink:
      "https://ethiopianculturalshop.com/wp-content/uploads/2023/10/photo_2023-10-08_06-23-33.jpg",
    description:
      "A beautiful gown for cultural celebrations, with detailed patterns and vibrant colors.",
  },
];

function ProductGrid() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
