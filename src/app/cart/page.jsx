// src/app/cart/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 border-b pb-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="flex-1">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-gray-600">
                ৳{item.price.toLocaleString("en-IN")} each
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <div className="text-lg font-bold">
              ৳{(item.price * item.quantity).toLocaleString("en-IN")}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-xl font-semibold">
        <span>Total:</span>
        <span>৳{total.toLocaleString("en-IN")}</span>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/checkout")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => router.push("/products")}
          className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
