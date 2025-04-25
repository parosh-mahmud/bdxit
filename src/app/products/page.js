// src/app/products/page.js
"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-md font-bold text-orange-600 mt-2">
              ${product.price}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
