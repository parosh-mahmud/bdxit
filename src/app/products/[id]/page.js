// // src/app/products/[id]/page.js
// "use client";

// import Image from "next/image";
// import { useCart } from "@/context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Modern UI Kit",
//     description: "Figma Design File",
//     price: 12,
//     image: "/images/ui-kit.png",
//   },
//   {
//     id: 2,
//     name: "Startup Logo Pack",
//     description: "SVG & PNG Logos",
//     price: 8,
//     image: "/images/logo-pack.png",
//   },
//   {
//     id: 3,
//     name: "Background Music Loops",
//     description: "MP3 & WAV Files",
//     price: 5,
//     image: "/images/music-loops.png",
//   },
// ];

// export default function ProductDetail({ params }) {
//   const { addToCart } = useCart();
//   const product = products.find((p) => p.id === parseInt(params.id));

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 mt-10">Product not found!</div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
//       <div className="relative w-full h-64 mb-6">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover rounded"
//         />
//       </div>
//       <h1 className="text-3xl font-bold text-orange-600">{product.name}</h1>
//       <p className="text-gray-700 mt-2">{product.description}</p>
//       <p className="text-xl font-bold text-gray-900 mt-4">${product.price}</p>
//       <button
//         onClick={() => addToCart(product)}
//         className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// src/app/products/[id]/page.js
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getProductById } from "@/lib/products";

// tells Next.js which IDs to build at compile time
export function generateStaticParams() {
  return getAllProducts().map((p) => ({ id: p.id.toString() }));
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) {
    return <p className="p-8 text-center">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Left: image */}
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

      {/* Right: details */}
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

        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to cart
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Buy now
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Free Shipping • Satisfaction Guaranteed • Quick Delivery
        </p>

        <p className="text-sm">
          Categories:{" "}
          {product.categories.map((cat, i) => (
            <>
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="text-blue-600 hover:underline"
              >
                {cat}
              </Link>
              {i < product.categories.length - 1 && ", "}
            </>
          ))}
        </p>
      </div>

      {/* Full description + related */}
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
