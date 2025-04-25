// src/components/Navbar.jsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50 h-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
        {/* Fixed 120×32 logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo.png"
            alt="Bdxit Logo"
            width={120}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-4 text-xs font-medium text-gray-700 h-full items-center">
          <Link href="/products" className="hover:text-orange-500">Products</Link>
          <Link href="/cart"    className="hover:text-orange-500">Cart</Link>
          <Link href="/auth/login" className="hover:text-orange-500">Login</Link>
        </nav>

        <button
          className="md:hidden p-0 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-1 text-xl">
          <Link href="/products" className="block hover:text-orange-500">Products</Link>
          <Link href="/cart"    className="block hover:text-orange-500">Cart</Link>
          <Link href="/auth/login" className="block hover:text-orange-500">Login</Link>
        </div>
      )}
    </header>
  )
}
