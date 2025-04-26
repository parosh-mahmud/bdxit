// src/components/Navbar.jsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from 'next/navigation';
// Import icons from lucide-react that are still used
import { Menu, X, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react"
// Import icons from react-icons
import { FaFacebookF, FaWhatsapp, FaUsers } from "react-icons/fa"; // Using Font Awesome icons
import { FiMail } from "react-icons/fi"; // Using Feather icon for Mail


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false); // State for mobile dropdown visibility
  // Placeholder for cart item count. In a real app, this would come from state management.
  const [cartItemCount, setCartItemCount] = useState(3); // Example count

  const pathname = usePathname(); // Get the current path

  // Ref for the desktop dropdown container to detect clicks outside
  const dropdownRef = useRef(null);

  // Effect to close the desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if on desktop and the click is outside the dropdown ref
      if (window.innerWidth >= 768 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // For pure hover, CSS handles closing when mouse leaves.
        // Keeping this for robustness if click behavior is added later or for mobile state sync.
        // We don't need to explicitly close the state here for the desktop hover dropdown.
        // However, the mobile dropdown state might be linked, so let's keep the check
        // but ensure it doesn't interfere with desktop hover.
        // A better approach is to have separate states for desktop/mobile dropdowns if behavior differs significantly.
        // For now, let's assume productsDropdownOpen only controls mobile.
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]); // Dependency array includes ref

  // Function to toggle the mobile products dropdown
  const toggleMobileProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };


  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8"> {/* Increased height */}
        {/* Logo - Vertically centered by flex container */}
        <Link href="/" className="flex items-center h-full py-2">
          <Image
            src="/logo.png"
            alt="Bdxit Logo"
            width={150} // Slightly increased logo size
            height={40} // Adjusted height
            className="object-contain"
            priority
          />
        </Link>

        {/* Center Icons (Desktop Only) - Moved to mobile menu for mobile view */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600"> {/* Added text color */}
            {/* Using react-icons for social/communication icons */}
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="hover:text-orange-600 transition duration-300 ease-in-out">
                <FaFacebookF size={24} /> {/* Facebook Page Icon from react-icons/fa */}
            </a>
             <a href="https://www.facebook.com/groups/yourgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook Group" className="hover:text-orange-600 transition duration-300 ease-in-out">
                <FaUsers size={24} /> {/* Facebook Group Icon from react-icons/fa */}
            </a>
            <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-orange-600 transition duration-300 ease-in-out">
                <FaWhatsapp size={24} /> {/* WhatsApp Icon from react-icons/fa */}
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-orange-600 transition duration-300 ease-in-out">
                <FiMail size={24} /> {/* Email Icon from react-icons/fi */}
            </a>
        </div>


        {/* Desktop Navigation and Mobile Toggle */}
        <div className="flex items-center"> {/* Wrap nav and button */}
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center h-full">
              <ul className="flex items-center space-x-8 lg:space-x-10 text-base font-medium text-gray-700"> {/* Increased text size and spacing */}
                <li>
                  {/* Home Link - Active state */}
                  <Link
                    href="/"
                    className={`hover:text-orange-600 transition duration-300 ease-in-out ${
                      pathname === '/' ? 'text-orange-600 font-bold' : '' // Active class
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {/* All Products Link - Active state */}
                  <Link
                    href="/products/all"
                    className={`hover:text-orange-600 transition duration-300 ease-in-out ${
                      pathname === '/products/all' ? 'text-orange-600 font-bold' : '' // Active class
                    }`}
                  >
                    All Products
                  </Link>
                </li>
                {/* Products Categories Dropdown (Desktop - Hover) */}
                <li className="relative group" ref={dropdownRef}> {/* Added group class for hover */}
                  <div className="flex items-center cursor-pointer hover:text-orange-600 transition duration-300 ease-in-out"> {/* Use a div for the hover trigger */}
                     <span>Products Categories</span>
                     {/* Chevron icon for desktop hover */}
                     <ChevronDown size={18} className="ml-1" />
                  </div>
                  {/* Dropdown Menu (Desktop - Hidden by default, shown on group-hover) */}
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block transition duration-200 ease-out origin-top"> {/* Added hidden, group-hover:block, transition, origin-top, increased width */}
                     <Link href="/products/bestselling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                        Bestselling
                      </Link>
                       <Link href="/products/ott-platforms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                        OTT Platforms
                      </Link>
                       <Link href="/products/tools-softwares" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                        Tools Software's
                      </Link>
                       <Link href="/products/premium-subscriptions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                        Premium Subscriptions
                      </Link>
                       <Link href="/products/wordpress-themes-plugins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                        WordPress Theme & Plugin
                      </Link>
                  </div>
                </li>
                <li>
                  {/* Cart link with icon and count - Active state */}
                  <Link
                    href="/cart"
                    className={`flex items-center hover:text-orange-600 transition duration-300 ease-in-out ${
                       pathname === '/cart' ? 'text-orange-600 font-bold' : '' // Active class
                    }`}
                  >
                    <ShoppingCart size={20} className="mr-1" /> {/* Increased icon size */}
                    Cart
                    {cartItemCount > 0 && (
                      <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  {/* Login Link - Active state */}
                  <Link
                    href="/auth/login"
                    className={`hover:text-orange-600 transition duration-300 ease-in-out ${
                       pathname === '/auth/login' ? 'text-orange-600 font-bold' : '' // Active class
                    }`}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ml-4" // Added ml-4 for spacing from potential icons if they were shown on mobile
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}{" "} {/* Increased icon size */}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3">
            {/* Social/Communication Icons (Mobile View) */}
            <div className="flex justify-around items-center py-2 border-b border-gray-200 mb-3"> {/* Added spacing and border */}
                 <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="text-gray-600 hover:text-orange-600 transition duration-300 ease-in-out">
                    <FaFacebookF size={24} />
                </a>
                 <a href="https://www.facebook.com/groups/yourgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook Group" className="text-gray-600 hover:text-orange-600 transition duration-300 ease-in-out">
                    <FaUsers size={24} />
                </a>
                <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-600 hover:text-orange-600 transition duration-300 ease-in-out">
                    <FaWhatsapp size={24} />
                </a>
                <a href="mailto:your.email@example.com" aria-label="Email" className="text-gray-600 hover:text-orange-600 transition duration-300 ease-in-out">
                    <FiMail size={24} />
                </a>
            </div>

            {/* Home Link (Mobile) - Active state */}
           <Link
              href="/"
              className={`block text-base text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-gray-50 ${
                pathname === '/' ? 'text-orange-600 font-bold bg-gray-100' : '' // Active class with background
              }`}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
            {/* All Products Link (Mobile) - Active state */}
             <Link
              href="/products/all"
              className={`block text-base text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-gray-50 ${
                pathname === '/products/all' ? 'text-orange-600 font-bold bg-gray-100' : '' // Active class with background
              }`}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              All Products
            </Link>
           {/* Products Categories Mobile Accordion */}
           <div>
             <button
               className="flex justify-between items-center w-full text-base text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-gray-50"
               onClick={toggleMobileProductsDropdown} // Toggle dropdown state
             >
               Products Categories
               {productsDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
             </button>
             {productsDropdownOpen && (
               <div className="ml-4 mt-2 space-y-2 border-l border-gray-300 pl-4">
                 <Link href="/products/bestselling" className="block text-sm text-gray-600 hover:text-orange-600" onClick={() => { setMobileMenuOpen(false); setProductsDropdownOpen(false); }}>
                   Bestselling
                 </Link>
                  <Link href="/products/ott-platforms" className="block text-sm text-gray-600 hover:text-orange-600" onClick={() => { setMobileMenuOpen(false); setProductsDropdownOpen(false); }}>
                   OTT Platforms
                 </Link>
                  <Link href="/products/tools-softwares" className="block text-sm text-gray-600 hover:text-orange-600" onClick={() => { setMobileMenuOpen(false); setProductsDropdownOpen(false); }}>
                   Tools Software's
                 </Link>
                  <Link href="/products/premium-subscriptions" className="block text-sm text-gray-600 hover:text-orange-600" onClick={() => { setMobileMenuOpen(false); setProductsDropdownOpen(false); }}>
                   Premium Subscriptions
                 </Link>
                  <Link href="/products/wordpress-themes-plugins" className="block text-sm text-gray-600 hover:text-orange-600" onClick={() => { setMobileMenuOpen(false); setProductsDropdownOpen(false); }}>
                    WordPress Theme & Plugin
                  </Link>
               </div>
             )}
           </div>

            {/* Cart link with icon and count for mobile - Active state */}
            <Link
              href="/cart"
              className={`flex items-center text-base text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-gray-50 ${
                 pathname === '/cart' ? 'text-orange-600 font-bold bg-gray-100' : '' // Active class with background
              }`}
               onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              <ShoppingCart size={20} className="mr-2" />
              Cart
              {cartItemCount > 0 && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* Login Link (Mobile) - Active state */}
            <Link
              href="/auth/login"
              className={`block text-base text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out py-2 px-3 rounded-md hover:bg-gray-50 ${
                 pathname === '/auth/login' ? 'text-orange-600 font-bold bg-gray-100' : '' // Active class with background
              }`}
               onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              Login
            </Link>
        </div>
      )}
    </header>
  )
}
