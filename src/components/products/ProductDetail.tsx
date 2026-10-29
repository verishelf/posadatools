"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((s) => s.addItem);

  const variant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  const inStock = variant.stock > 0;
  const maxQty = variant.stock;

  const handleAdd = () => {
    if (!inStock) return;
    addItem({
      productId: product.id,
      variantId: variant.id,
      quantity,
      name: `${product.name}${product.variants.length > 1 ? ` — ${variant.name}` : ""}`,
      price: variant.price,
      image: product.images[0]?.src || "",
      slug: product.slug,
      maxStock: variant.stock,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image */}
      <div className="aspect-square bg-charcoal border border-border relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: product.images[0]
              ? `url('${product.images[0].src}')`
              : "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80')",
          }}
        />
      </div>

      {/* Info */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          {product.categoryLabel}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white mb-4">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-2xl font-bold text-white">{formatPrice(variant.price)}</span>
          {variant.compareAtPrice && (
            <span className="text-lg text-muted line-through">
              {formatPrice(variant.compareAtPrice)}
            </span>
          )}
        </div>

        <p className="text-metallic leading-relaxed mb-8">{product.description}</p>

        {/* Variants */}
        {product.variants.length > 1 && (
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Options
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVariantId(v.id);
                    setQuantity(1);
                  }}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    selectedVariantId === v.id
                      ? "border-red bg-red/10 text-white"
                      : "border-border text-metallic hover:border-metallic"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stock */}
        <p className={`text-sm mb-4 ${inStock ? "text-green-400" : "text-red"}`}>
          {inStock ? `${variant.stock} in stock` : "Out of stock"}
        </p>

        {/* Quantity + Add */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center border border-border">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 text-metallic hover:text-white disabled:opacity-40"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-white font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(maxQty, quantity + 1))}
              className="p-3 text-metallic hover:text-white disabled:opacity-40"
              disabled={quantity >= maxQty}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <Button size="lg" onClick={handleAdd} disabled={!inStock} className="flex-1">
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>

        {/* Features */}
        <div className="border-t border-border pt-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-red mt-1">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Specifications
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="contents">
                  <dt className="text-sm text-muted">{key}</dt>
                  <dd className="text-sm text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Included</h3>
            <ul className="space-y-1">
              {product.included.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
