// src/app/products/[id]/page.js

import { getAllProducts, getProductById } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

// 1) Tell Next.js which IDs to statically generate
export function generateStaticParams() {
  return getAllProducts().map((p) => ({ id: p.id.toString() }));
}

// 2) Server component — just fetch and pass down
export default async function ProductDetailPage({ params }) {
  // Must await params before destructuring
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return <p className="p-8 text-center">Product not found.</p>;
  }

  return <ProductDetailClient product={product} />;
}
