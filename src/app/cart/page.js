"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">
          🛒 Your cart is empty
        </h2>
        <Link href="/products" className="text-orange-500 hover:underline">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white shadow rounded"
          >
            <div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-500">
                ${item.price} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 border rounded hover:bg-gray-200"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 border rounded hover:bg-gray-200"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-white rounded shadow text-right">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <Link
          href="/checkout"
          className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
