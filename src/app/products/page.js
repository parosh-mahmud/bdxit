// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Adobe Creative Cloud",
//     price: 6800,
//     originalPrice: 10000,
//     sale: true,
//     image: "/images/adobe.jpg",
//   },
//   {
//     id: 2,
//     name: "Canva Pro",
//     price: 55,
//     originalPrice: 99,
//     sale: true,
//     image: "/images/canva.jpg",
//   },
//   {
//     id: 3,
//     name: "CapCut Pro Account",
//     price: 350,
//     originalPrice: 4200,
//     sale: true,
//     extraText: "Order Now",
//     image: "/images/capcutpro.jpg",
//   },
//   {
//     id: 4,
//     name: "ChatGPT Plus",
//     price: 350,
//     originalPrice: 1950,
//     sale: true,
//     image: "/images/chatgptplus.jpg",
//   },
//   {
//     id: 5,
//     name: "Chorki Subscription",
//     price: 125,
//     originalPrice: 199,
//     sale: true,
//     image: "/images/chorki.jpg",
//   },
//   {
//     id: 6,
//     name: "Crunchyroll Premium",
//     price: 160,
//     originalPrice: 300,
//     sale: true,
//     image: "/images/crunchyroll.jpg",
//   },
//   {
//     id: 7,
//     name: "Envato Elements",
//     price: 450,
//     originalPrice: 600,
//     sale: true,
//     image: "/images/freepik.jpg",
//   },
//   {
//     id: 8,
//     name: "Freepik Premium",
//     price: 450,
//     sale: false,
//     image: "/images/freepik.jpg",
//   },
//   {
//     id: 9,
//     name: "Google Meet",
//     price: 499,
//     sale: false,
//     image: "/images/googlemeet.jpg",
//   },
//   {
//     id: 10,
//     name: "Grammarly Premium Account",
//     price: 2800,
//     originalPrice: 3500,
//     sale: true,
//     image: "/images/grammarly.jpg",
//   },
//   {
//     id: 11,
//     name: "Hoichoi Subscription",
//     price: 160,
//     originalPrice: 200,
//     sale: true,
//     image: "/images/hoicoi.jpg",
//   },
//   {
//     id: 12,
//     name: "Microsoft 365 Personal",
//     price: 1200,
//     originalPrice: 1500,
//     sale: true,
//     image: "/images/microsoft365.jpg",
//   },
//   {
//     id: 13,
//     name: "Netflix Subscription",
//     price: 199,
//     originalPrice: 350,
//     sale: true,
//     image: "/images/netflix.jpg",
//   },
//   {
//     id: 14,
//     name: "Office 2021 License Key",
//     price: 449,
//     originalPrice: 650,
//     sale: true,
//     image: "/images/office2021.jpg",
//   },
//   {
//     id: 15,
//     name: "QuillBot Premium",
//     price: 2500,
//     originalPrice: 2999,
//     sale: true,
//     image: "/images/quillbot.jpg",
//   },
//   {
//     id: 16,
//     name: "SonyLiv Premium",
//     price: 170,
//     sale: false,
//     image: "/images/sonyliv.jpg",
//   },
//   {
//     id: 17,
//     name: "Spotify Pro",
//     price: 1150,
//     originalPrice: 1499,
//     sale: true,
//     image: "/images/spotify.jpg",
//   },
//   {
//     id: 18,
//     name: "T-Sports Subscription",
//     price: 230,
//     sale: false,
//     image: "/images/tsports.jpg",
//   },
//   {
//     id: 19,
//     name: "Windows 10 Pro License Key",
//     price: 350,
//     originalPrice: 400,
//     sale: true,
//     image: "/images/windows10pro.jpg",
//   },
//   {
//     id: 20,
//     name: "Windows 11 Pro License Key",
//     price: 399,
//     originalPrice: 650,
//     sale: true,
//     image: "/images/windows11pro.jpg",
//   },
//   {
//     id: 21,
//     name: "Wondershare Filmora",
//     price: 350,
//     originalPrice: 499,
//     sale: true,
//     image: "/images/Wondershare.jpg",
//   },
//   {
//     id: 22,
//     name: "Wondershare Dr. Fone",
//     price: 650,
//     originalPrice: 899,
//     sale: true,
//     image: "/images/Wondersharedrphone.jpg",
//   },
//   {
//     id: 23,
//     name: "Wondershare EdrawMax",
//     price: 450,
//     originalPrice: 799,
//     sale: true,
//     image: "/images/WondershareEdrawMax.jpg",
//   },
//   {
//     id: 24,
//     name: "Wondershare Filmora 14 Android",
//     price: 399,
//     originalPrice: 650,
//     sale: true,
//     image: "/images/WondershareFilmora14Android.jpg",
//   },
//   {
//     id: 25,
//     name: "Wondershare Filmora 14 Mac",
//     price: 350,
//     originalPrice: 499,
//     sale: true,
//     image: "/images/WondershareFilmora14Mac.jpg",
//   },
//   {
//     id: 26,
//     name: "Wondershare Filmstock",
//     price: 1050,
//     sale: false,
//     image: "/images/WondershareFilmstock.jpg",
//   },
//   {
//     id: 27,
//     name: "Wondershare Recoverit",
//     price: 750,
//     originalPrice: 899,
//     sale: true,
//     image: "/images/WondershareRecoverit.jpg",
//   },
//   {
//     id: 28,
//     name: "YouTube Premium Subscription",
//     price: 115,
//     originalPrice: 199,
//     sale: true,
//     image: "/images/youtubepremium.jpg",
//   },
//   {
//     id: 29,
//     name: "Zoom Premium",
//     price: 650,
//     sale: false,
//     image: "/images/zoom.jpg",
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col text-center p-4 relative hover:shadow-lg transition-shadow duration-300"
//           >
//             {product.sale && (
//               <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//                 Sale!
//               </div>
//             )}

//             <div className="flex justify-center items-center mb-4 h-32">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="object-contain max-h-full"
//                 onError={(e) => {
//                   e.currentTarget.src = "/images/placeholder.png";
//                 }}
//               />
//             </div>

//             <div className="flex flex-col flex-grow">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2 leading-tight min-h-[2.5em]">
//                 <Link
//                   href={`/products/${product.id}`}
//                   className="hover:text-orange-600 transition-colors"
//                 >
//                   {product.name}
//                 </Link>
//               </h2>

//               {product.extraText && (
//                 <p className="text-xs text-gray-500 mb-2">
//                   {product.extraText}
//                 </p>
//               )}

//               <div className="mt-auto">
//                 <p className="text-md font-bold text-gray-900">
//                   {product.originalPrice && (
//                     <span className="text-sm font-normal text-gray-500 line-through mr-2">
//                       ৳{product.originalPrice.toLocaleString("en-IN")}
//                     </span>
//                   )}
//                   <span className="text-orange-600">
//                     ৳{product.price.toLocaleString("en-IN")}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/app/products/page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div
      className="container mx-auto px-4 py-12 grid gap-6 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group block bg-white rounded-2xl shadow-md 
                     border border-gray-100 overflow-hidden p-4 
                     hover:shadow-lg transition"
        >
          {product.sale && (
            <span
              className="absolute top-3 right-3 bg-purple-600 
                              text-white text-xs px-2 py-1 rounded-full"
            >
              Sale!
            </span>
          )}

          <div className="h-32 flex items-center justify-center mb-4">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600">
            {product.name}
          </h2>

          <p className="text-md font-bold text-gray-900">
            {product.originalPrice && (
              <span className="line-through text-gray-500 mr-2">
                ৳{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            <span className="text-orange-600">
              ৳{product.price.toLocaleString("en-IN")}
            </span>
          </p>
        </Link>
      ))}
    </div>
  );
}
