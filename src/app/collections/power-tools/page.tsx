import { getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Tools",
  description: "POSADA TOOLS power tools collection — drills, impact drivers, saws and more.",
};

export default function PowerToolsPage() {
  const products = getProductsByCategory("power-tools");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white">
          Power Tools
        </h1>
        <p className="text-sm text-muted mt-2">
          {products.length} products · Demo catalog
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
