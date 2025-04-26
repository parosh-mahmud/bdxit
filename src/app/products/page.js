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
  // Add more dummy products for better layout testing
  {
    id: 4,
    name: "E-commerce Icon Set",
    description: "Vector Icons",
    price: 10,
    image: "/images/icon-set.png",
  },
  {
    id: 5,
    name: "Social Media Templates",
    description: "Editable PSDs",
    price: 15,
    image: "/images/social-templates.png",
  },
  {
    id: 6,
    name: "Video Transition Pack",
    description: "Premiere Pro Presets",
    price: 20,
    image: "/images/transitions.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {" "}
      {/* Added container, horizontal and vertical padding */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        {" "}
        {/* Increased text size, font weight, adjusted color, increased bottom margin */}
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {/* Adjusted gap for better spacing */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full" // Added rounded-xl, shadow-lg, overflow hidden, border, flex-col, h-full
          >
            {/* Wrap content in a Link for clickable card area (optional but good UX) */}
            <Link href={`/products/${product.id}`} className="block h-full">
              <div className="w-full h-56 relative">
                {" "}
                {/* Increased image container height */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Added sizes attribute for better performance
                  className="object-cover transition duration-300 ease-in-out group-hover:scale-105" // Added hover effect
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {" "}
                {/* Added padding, flex-col, flex-grow */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {" "}
                  {/* Increased text size and weight, adjusted color, spacing */}
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {" "}
                  {/* Adjusted color, spacing, added flex-grow to push button down */}
                  {product.description}
                </p>
                <p className="text-lg font-bold text-orange-600 mt-auto">
                  {" "}
                  {/* Increased text size, font weight, color, used mt-auto to push to bottom */}
                  ${product.price}
                </p>
              </div>
            </Link>
            {/* Optional: Keep a separate button if the whole card isn't clickable */}
            {/*
             <div className="p-6 pt-0"> // Add padding top 0 if keeping the button here
               <Link
                  href={`/products/${product.id}`}
                  className="w-full block text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300 ease-in-out" // Styled button professionally
                >
                  View Details
                </Link>
             </div>
             */}
          </div>
        ))}
      </div>
    </div>
  );
}
