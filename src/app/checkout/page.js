"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Simulate success
    setTimeout(() => setIsSuccess(true), 1000);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-green-600">
          ✅ Payment Successful!
        </h2>
        <p className="mt-2 text-gray-600">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-700 mb-4">
          Total: <strong>${total.toFixed(2)}</strong>
        </p>
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
