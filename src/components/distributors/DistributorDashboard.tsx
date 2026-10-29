"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  FileText,
  Settings,
  LogOut,
  Download,
  Truck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/products";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

type Tab = "overview" | "orders" | "catalog" | "resources" | "account";

// Demo data — replace with real backend data
const demoOrders = [
  {
    id: "PO-1042",
    date: "2026-10-12",
    status: "Shipped",
    items: 14,
    total: 428000,
  },
  {
    id: "PO-1038",
    date: "2026-09-28",
    status: "Delivered",
    items: 8,
    total: 196500,
  },
  {
    id: "PO-1031",
    date: "2026-09-05",
    status: "Delivered",
    items: 22,
    total: 612000,
  },
];

const resources = [
  { name: "Brand Guidelines PDF", type: "PDF", size: "2.4 MB" },
  { name: "Product Image Pack", type: "ZIP", size: "48 MB" },
  { name: "Wholesale Price List", type: "PDF", size: "180 KB" },
  { name: "Sell Sheet — Power Tools", type: "PDF", size: "1.1 MB" },
  { name: "Sell Sheet — Batteries", type: "PDF", size: "890 KB" },
];

export function DistributorDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  // Demo login — accepts any non-empty email
  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim()) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md border border-border bg-charcoal p-8">
          <div className="text-center mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center border border-metallic/40 bg-black mb-4">
              <span className="text-lg font-bold text-white">P</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-2">
              Distributor Portal
            </h1>
            <p className="text-sm text-muted">
              Sign in to access orders, pricing, and resources.
            </p>
          </div>

          <div className="border border-yellow-600/40 bg-yellow-900/20 p-3 mb-6">
            <p className="text-xs text-yellow-200 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              Demo mode — enter any email to preview the dashboard. Real authentication will be required in production.
            </p>
          </div>

          <form onSubmit={handleDemoLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full h-11 px-4 bg-black border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Sign In (Demo)
            </Button>
          </form>

          <p className="text-xs text-muted text-center mt-6">
            Not a distributor yet?{" "}
            <Link href="/distributors" className="text-metallic hover:text-white underline">
              Apply here
            </Link>
          </p>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard className="h-4 w-4" /> },
    { id: "orders", label: "Orders", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "catalog", label: "Catalog & Pricing", icon: <Package className="h-4 w-4" /> },
    { id: "resources", label: "Resources", icon: <FileText className="h-4 w-4" /> },
    { id: "account", label: "Account", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-[80vh] bg-black">
      <div className="border-b border-border bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Distributor Portal</p>
            <h1 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
              Dashboard
            </h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "bg-red/10 text-white border-l-2 border-red lg:border-l-2"
                      : "text-muted hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Open Orders", value: "1", sub: "In transit" },
                    { label: "YTD Orders", value: "3", sub: "This year" },
                    { label: "Account Status", value: "Active", sub: "Good standing" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-border bg-charcoal p-5">
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-muted mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                    Recent Orders
                  </h2>
                  <div className="border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-charcoal text-xs uppercase tracking-wider text-muted">
                        <tr>
                          <th className="text-left px-4 py-3 font-semibold">Order</th>
                          <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
                          <th className="text-left px-4 py-3 font-semibold">Status</th>
                          <th className="text-right px-4 py-3 font-semibold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoOrders.map((order) => (
                          <tr key={order.id} className="border-t border-border">
                            <td className="px-4 py-3 text-white font-medium">{order.id}</td>
                            <td className="px-4 py-3 text-muted hidden sm:table-cell">{order.date}</td>
                            <td className="px-4 py-3">
                              <span
                                className={cn(
                                  "text-xs font-semibold uppercase tracking-wider",
                                  order.status === "Shipped" ? "text-yellow-400" : "text-green-400"
                                )}
                              >
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right text-white">
                              {formatPrice(order.total)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-border bg-charcoal p-5 flex items-start gap-4">
                  <Truck className="h-5 w-5 text-red shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Need to place an order?</p>
                    <p className="text-sm text-muted mb-3">
                      Contact your account manager or email orders@posadatools.com with your PO.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                  Order History
                </h2>
                <div className="space-y-4">
                  {demoOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border bg-charcoal p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-white font-semibold">{order.id}</p>
                        <p className="text-xs text-muted mt-1">
                          {order.date} · {order.items} items
                        </p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span
                          className={cn(
                            "text-xs font-semibold uppercase tracking-wider",
                            order.status === "Shipped" ? "text-yellow-400" : "text-green-400"
                          )}
                        >
                          {order.status}
                        </span>
                        <span className="text-white font-medium">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-6">
                  Demo data only. Real order history will load from your account once authentication is connected.
                </p>
              </div>
            )}

            {activeTab === "catalog" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Wholesale Catalog
                  </h2>
                  <p className="text-xs text-muted">Demo pricing — not final</p>
                </div>
                <div className="border border-border overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-charcoal text-xs uppercase tracking-wider text-muted">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold">Product</th>
                        <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">SKU</th>
                        <th className="text-right px-4 py-3 font-semibold">MSRP</th>
                        <th className="text-right px-4 py-3 font-semibold">Wholesale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => {
                        const variant = product.variants[0];
                        const wholesale = Math.round(variant.price * 0.62); // demo margin
                        return (
                          <tr key={product.id} className="border-t border-border">
                            <td className="px-4 py-3 text-white">{product.name}</td>
                            <td className="px-4 py-3 text-muted hidden md:table-cell">{variant.sku}</td>
                            <td className="px-4 py-3 text-right text-muted">
                              {formatPrice(variant.price)}
                            </td>
                            <td className="px-4 py-3 text-right text-white font-medium">
                              {formatPrice(wholesale)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted mt-4">
                  Wholesale prices shown are illustrative only. Final pricing is provided in your distributor agreement.
                </p>
              </div>
            )}

            {activeTab === "resources" && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                  Marketing & Sales Resources
                </h2>
                <div className="space-y-3">
                  {resources.map((file) => (
                    <div
                      key={file.name}
                      className="flex items-center justify-between border border-border bg-charcoal px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted" />
                        <div>
                          <p className="text-sm text-white font-medium">{file.name}</p>
                          <p className="text-xs text-muted">
                            {file.type} · {file.size}
                          </p>
                        </div>
                      </div>
                      <button
                        className="flex items-center gap-2 text-xs uppercase tracking-wider text-metallic hover:text-white transition-colors"
                        onClick={() => alert("Demo only — file download will be available when assets are uploaded.")}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                    Account Details
                  </h2>
                  <div className="border border-border bg-charcoal p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted mb-1">Company</p>
                        <p className="text-white">Demo Distribution Co.</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted mb-1">Account Manager</p>
                        <p className="text-white">Assigned after onboarding</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted mb-1">Territory</p>
                        <p className="text-white">—</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted mb-1">Status</p>
                        <p className="text-green-400 font-medium">Active (Demo)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-charcoal p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    Need help?
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Contact your account manager or use the main contact form for support.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
