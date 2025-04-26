// src/app/products/[id]/ProductDetailClient.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAdd = () => {
    addToCart(product);
  };
  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="relative">
        {product.sale && (
          <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            Sale!
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Details */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="flex items-baseline space-x-4">
          {product.originalPrice && (
            <span className="text-gray-500 line-through">
              ৳{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
          <span className="text-2xl font-bold text-orange-600">
            ৳{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="text-gray-700">{product.description}</p>

        <ul className="space-y-1">
          {Object.entries(product.features).map(([label, val]) => (
            <li key={label} className="flex">
              <strong className="w-40">{label}:</strong> {val}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Buy now
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Free Shipping • Satisfaction Guaranteed • Quick Delivery
        </p>

        <p className="text-sm">
          Categories:{" "}
          {product.categories.map((cat, i) => (
            <React.Fragment key={cat}>
              <Link
                href={`/category/${cat.toLowerCase()}`}
                className="text-blue-600 hover:underline"
              >
                {cat}
              </Link>
              {i < product.categories.length - 1 && ", "}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Description & Related */}
      <div className="md:col-span-2 mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="prose">{product.description}</p>

        <h3 className="text-xl font-semibold mt-10 mb-4">Related products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {product.relatedIds.map((rid) => {
            const rel = getProductById(rid);
            return (
              <Link
                key={rid}
                href={`/products/${rid}`}
                className="text-center block"
              >
                {rel.sale && (
                  <span className="block text-purple-600 mb-1">Sale!</span>
                )}
                <Image
                  src={rel.image}
                  alt={rel.name}
                  width={80}
                  height={80}
                  className="mx-auto object-contain mb-2"
                />
                <p className="text-sm">{rel.name}</p>
                <p className="text-sm font-bold text-orange-600">
                  ৳{rel.price.toLocaleString("en-IN")}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
