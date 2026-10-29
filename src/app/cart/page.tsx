"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal } = useCart();
  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-muted mb-8">Add some tools and get back to work.</p>
        <Link href="/shop">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-10">
        Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.variantId}
              className="flex gap-4 border border-border bg-charcoal p-4"
            >
              <div
                className="w-24 h-24 bg-black shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage: item.image
                    ? `url('${item.image}')`
                    : "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80')",
                }}
              />
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${item.slug}`}
                  className="text-sm font-semibold text-white hover:text-metallic line-clamp-2"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-white font-medium mt-1">
                  {formatPrice(item.price)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                      className="p-2 text-metallic hover:text-white"
                      aria-label="Decrease"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                      className="p-2 text-metallic hover:text-white"
                      disabled={item.quantity >= item.maxStock}
                      aria-label="Increase"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.variantId)}
                    className="p-2 text-muted hover:text-red transition-colors"
                    aria-label="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border bg-charcoal p-6 h-fit">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-6">
            Order Summary
          </h2>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted">Subtotal</span>
            <span className="text-white font-medium">{formatPrice(subtotal)}</span>
          </div>
          <p className="text-xs text-muted mb-6">
            Shipping calculated at checkout. Demo store — no real payments processed.
          </p>
          <Link href="/checkout">
            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>
          </Link>
          <Link
            href="/shop"
            className="block text-center text-xs text-muted hover:text-white mt-4 uppercase tracking-wider"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
