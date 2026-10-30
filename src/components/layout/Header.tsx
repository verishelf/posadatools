"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/collections/power-tools", label: "Power Tools" },
  { href: "/collections/batteries-chargers", label: "Batteries & Chargers" },
  { href: "/collections/accessories", label: "Accessories" },
  { href: "/distributors", label: "Distributors" },
  { href: "/about", label: "About Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCart((s) => s.getItemCount());

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-border">
      <div className="bg-black border-b border-red/30">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <span className="text-red">POSADA TOOLS</span>
            <span className="mx-2 text-muted">—</span>
            <span>BUILT FOR REAL WORK</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center border border-metallic/40 bg-charcoal group-hover:border-red transition-colors">
              <span className="text-lg font-bold text-white tracking-tighter">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold uppercase tracking-[0.15em] text-white">
                POSADA
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                TOOLS
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-metallic hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2 text-metallic hover:text-white transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Account"
              className="p-2 text-metallic hover:text-white transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 text-metallic hover:text-white transition-colors"
              aria-label={`Cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center bg-red text-[10px] font-bold text-white">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            <button
              className="lg:hidden p-2 text-metallic hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-charcoal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-sm font-semibold uppercase tracking-wider text-metallic hover:text-white hover:bg-black/40 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
