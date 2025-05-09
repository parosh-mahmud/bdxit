// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaUsers } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        window.innerWidth >= 768 &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // no-op for desktop hover dropdown
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full py-2">
          <Image
            src="/logo.png"
            alt="Bdxit Logo"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <a
            href="https://www.facebook.com/profile.php?id=61575315973041"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
            className="hover:text-orange-600 transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.facebook.com/groups/yourgroup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Group"
            className="hover:text-orange-600 transition"
          >
            <FaUsers size={24} />
          </a>
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-orange-600 transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="hover:text-orange-600 transition"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Navigation + Mobile Toggle */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex items-center space-x-8 lg:space-x-10 text-base font-medium text-gray-700">
              <li>
                <Link
                  href="/"
                  className={`hover:text-orange-600 transition ${
                    pathname === "/" ? "text-orange-600 font-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`hover:text-orange-600 transition ${
                    pathname === "/products"
                      ? "text-orange-600 font-bold"
                      : ""
                  }`}
                >
                  All Products
                </Link>
              </li>
              <li className="relative group" ref={dropdownRef}>
                <div className="flex items-center cursor-pointer hover:text-orange-600 transition">
                  <span>Products Categories</span>
                  <ChevronDown size={18} className="ml-1" />
                </div>
                <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <Link
                    href="/products/bestselling"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bestselling
                  </Link>
                  <Link
                    href="/products/ott-platforms"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    OTT Platforms
                  </Link>
                  <Link
                    href="/products/tools-softwares"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tools Softwares
                  </Link>
                  <Link
                    href="/products/premium-subscriptions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Premium Subscriptions
                  </Link>
                  <Link
                    href="/products/wordpress-themes-plugins"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    WordPress Theme & Plugin
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`flex items-center hover:text-orange-600 transition ${
                    pathname === "/cart"
                      ? "text-orange-600 font-bold"
                      : ""
                  }`}
                >
                  <ShoppingCart size={20} className="mr-1" />
                  Cart
                  {cartItemCount > 0 && (
                    <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                {/* <Link
                  href="/auth/login"
                  className={`hover:text-orange-600 transition ${
                    pathname === "/auth/login"
                      ? "text-orange-600 font-bold"
                      : ""
                  }`}
                >
                  Login
                </Link> */}
              </li>
            </ul>
          </nav>

          {/* Mobile Social Icons */}
          <div className="flex md:hidden items-center space-x-4 mr-4 text-gray-600">
            <a
              href="https://www.facebook.com/profile.php?id=61575315973041"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="hover:text-orange-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.facebook.com/groups/yourgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Group"
              className="hover:text-orange-600 transition"
            >
              <FaUsers size={20} />
            </a>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-orange-600 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="hover:text-orange-600 transition"
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3">
          {/* Mobile Social Icons */}
          <div className="flex justify-around items-center py-2 border-b border-gray-200 mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=61575315973041"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.facebook.com/groups/yourgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Group"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              <FaUsers size={24} />
            </a>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <Link
            href="/"
            className={`block text-base text-gray-700 hover:text-orange-600 transition py-2 px-3 rounded-md hover:bg-gray-50 ${
              pathname === "/" ? "text-orange-600 font-bold bg-gray-100" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`block text-base text-gray-700 hover:text-orange-600 transition py-2 px-3 rounded-md hover:bg-gray-50 ${
              pathname === "/products"
                ? "text-orange-600 font-bold bg-gray-100"
                : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            All Products
          </Link>

          {/* Mobile Products Accordion */}
          <div>
            <button
              className="flex justify-between items-center w-full text-base text-gray-700 hover:text-orange-600 transition py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={toggleMobileProductsDropdown}
            >
              Products Categories
              {productsDropdownOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {productsDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2 border-l border-gray-300 pl-4">
                <Link
                  href="/products/bestselling"
                  className="block text-sm text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProductsDropdownOpen(false);
                  }}
                >
                  Bestselling
                </Link>
                <Link
                  href="/products/ott-platforms"
                  className="block text-sm text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProductsDropdownOpen(false);
                  }}
                >
                  OTT Platforms
                </Link>
                <Link
                  href="/products/tools-softwares"
                  className="block text-sm text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProductsDropdownOpen(false);
                  }}
                >
                  Tools Softwares
                </Link>
                <Link
                  href="/products/premium-subscriptions"
                  className="block text-sm text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProductsDropdownOpen(false);
                  }}
                >
                  Premium Subscriptions
                </Link>
                <Link
                  href="/products/wordpress-themes-plugins"
                  className="block text-sm text-gray-600 hover:text-orange-600"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProductsDropdownOpen(false);
                  }}
                >
                  WordPress Theme & Plugin
                </Link>
              </div>
            )}
          </div>

          {/* Cart Link */}
          <Link
            href="/cart"
            className={`flex items-center text-base text-gray-700 hover:text-orange-600 transition py-2 px-3 rounded-md hover:bg-gray-50 ${
              pathname === "/cart" ? "text-orange-600 font-bold bg-gray-100" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingCart size={20} className="mr-2" />
            Cart
            {cartItemCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Login Link */}
          {/* <Link
            href="/auth/login"
            className={`block text-base text-gray-700 hover:text-orange-600 transition py-2 px-3 rounded-md hover:bg-gray-50 ${
              pathname === "/auth/login"
                ? "text-orange-600 font-bold bg-gray-100"
                : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Link> */}
        </div>
      )}
    </header>
  );
}
