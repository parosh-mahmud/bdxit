// src/app/products/[id]/page.js
"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Modern UI Kit",
    description: "Figma Design File",
    price: 12,
    image: "/images/ui-kit.png",
  },
  {
    id: 2,
    name: "Startup Logo Pack",
    description: "SVG & PNG Logos",
    price: 8,
    image: "/images/logo-pack.png",
  },
  {
    id: 3,
    name: "Background Music Loops",
    description: "MP3 & WAV Files",
    price: 5,
    image: "/images/music-loops.png",
  },
];

export default function ProductDetail({ params }) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">Product not found!</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <div className="relative w-full h-64 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <h1 className="text-3xl font-bold text-orange-600">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-bold text-gray-900 mt-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
