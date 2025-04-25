// src/app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Bdxit | Digital Store",
  description: "Buy and download digital products instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen px-4 py-6 max-w-7xl mx-auto">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
