"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((s) => s.addItem);
  const primaryVariant = product.variants[0];
  const inStock = primaryVariant.stock > 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inStock) return;
    addItem({
      productId: product.id,
      variantId: primaryVariant.id,
      quantity: 1,
      name: product.name,
      price: primaryVariant.price,
      image: product.images[0]?.src || "",
      slug: product.slug,
      maxStock: primaryVariant.stock,
    });
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col border border-border bg-charcoal hover:border-metallic/50 transition-colors"
    >
      <div className="relative aspect-square bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: product.images[0]
              ? `url('${product.images[0].src}')`
              : "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80')",
          }}
        />
        {!inStock && (
          <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted">
            Out of Stock
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1">
          {product.categoryLabel}
        </p>
        <h3 className="text-sm font-semibold text-white group-hover:text-metallic transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-bold text-white">
              {formatPrice(primaryVariant.price)}
            </span>
            {primaryVariant.compareAtPrice && (
              <span className="ml-2 text-sm text-muted line-through">
                {formatPrice(primaryVariant.compareAtPrice)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleAdd}
            disabled={!inStock}
            className="shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
