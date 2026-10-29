"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, getSubtotal, clearCart } = useCart();
  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-4">
          Nothing to Checkout
        </h1>
        <Link href="/shop">
          <Button size="lg">Browse Tools</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-6">
        Checkout
      </h1>

      <div className="border border-yellow-600/50 bg-yellow-900/20 p-4 mb-8">
        <p className="text-sm text-yellow-200 font-medium">
          DEMO MODE — Stripe credentials are not configured. This is a demonstration checkout only.
          No real payment will be processed.
        </p>
      </div>

      <div className="border border-border bg-charcoal p-6 mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
          Order Summary
        </h2>
        <ul className="space-y-3 mb-6">
          {items.map((item) => (
            <li key={item.variantId} className="flex justify-between text-sm">
              <span className="text-muted">
                {item.name} × {item.quantity}
              </span>
              <span className="text-white">{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-border pt-4 flex justify-between">
          <span className="font-semibold text-white">Subtotal</span>
          <span className="font-bold text-white">{formatPrice(subtotal)}</span>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full mb-4"
        onClick={() => {
          alert(
            "Demo checkout complete. In production, this would create a Stripe Checkout Session after server-side validation of prices and stock."
          );
          clearCart();
        }}
      >
        Complete Demo Order
      </Button>
      <Link href="/cart" className="block text-center text-sm text-muted hover:text-white">
        ← Back to Cart
      </Link>
    </div>
  );
}
