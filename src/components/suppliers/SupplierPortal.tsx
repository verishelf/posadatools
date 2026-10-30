"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Package,
  ClipboardList,
  Settings,
  LogOut,
  Download,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tab = "overview" | "pos" | "specs" | "documents" | "account";

const demoPOs = [
  { id: "PO-S-8821", date: "2026-10-18", status: "Open", items: 3, due: "2026-11-15" },
  { id: "PO-S-8794", date: "2026-09-22", status: "Received", items: 5, due: "2026-10-10" },
  { id: "PO-S-8710", date: "2026-08-30", status: "Closed", items: 2, due: "2026-09-20" },
];

const specs = [
  { name: "Motor Spec — Brushless 20V Platform", rev: "B", updated: "2026-09-01" },
  { name: "Battery Pack Mechanical Drawing", rev: "C", updated: "2026-08-12" },
  { name: "Quality Requirements — Incoming Inspection", rev: "A", updated: "2026-07-20" },
];

const documents = [
  { name: "Supplier Quality Manual", type: "PDF", size: "1.8 MB" },
  { name: "Packaging Specification", type: "PDF", size: "640 KB" },
  { name: "Non-Disclosure Agreement Template", type: "PDF", size: "210 KB" },
];

export function SupplierPortal() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim()) setIsAuthenticated(true);
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
              Supplier Portal
            </h1>
            <p className="text-sm text-muted">
              Access purchase orders, specifications, and documents.
            </p>
          </div>

          <div className="border border-yellow-600/40 bg-yellow-900/20 p-3 mb-6">
            <p className="text-xs text-yellow-200 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              Demo mode — enter any email to preview. Real authentication required in production.
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
                placeholder="you@supplier.com"
                className="w-full h-11 px-4 bg-black border border-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-red"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Sign In (Demo)
            </Button>
          </form>

          <p className="text-xs text-muted text-center mt-6">
            Not a supplier yet?{" "}
            <Link href="/suppliers" className="text-metallic hover:text-white underline">
              Introduce your company
            </Link>
          </p>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard className="h-4 w-4" /> },
    { id: "pos", label: "Purchase Orders", icon: <ClipboardList className="h-4 w-4" /> },
    { id: "specs", label: "Specifications", icon: <Package className="h-4 w-4" /> },
    { id: "documents", label: "Documents", icon: <FileText className="h-4 w-4" /> },
    { id: "account", label: "Account", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-[80vh] bg-black">
      <div className="border-b border-border bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Supplier Portal</p>
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
          <aside className="lg:w-56 shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "bg-red/10 text-white border-l-2 border-red"
                      : "text-muted hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Open POs", value: "1", sub: "In progress" },
                    { label: "On-Time Rate", value: "98%", sub: "Last 12 months" },
                    { label: "Account Status", value: "Approved", sub: "Active supplier" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-border bg-charcoal p-5">
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-muted mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Recent Purchase Orders</h2>
                  <div className="border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-charcoal text-xs uppercase tracking-wider text-muted">
                        <tr>
                          <th className="text-left px-4 py-3 font-semibold">PO</th>
                          <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Date</th>
                          <th className="text-left px-4 py-3 font-semibold">Status</th>
                          <th className="text-right px-4 py-3 font-semibold">Due</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoPOs.map((po) => (
                          <tr key={po.id} className="border-t border-border">
                            <td className="px-4 py-3 text-white font-medium">{po.id}</td>
                            <td className="px-4 py-3 text-muted hidden sm:table-cell">{po.date}</td>
                            <td className="px-4 py-3">
                              <span
                                className={cn(
                                  "text-xs font-semibold uppercase tracking-wider",
                                  po.status === "Open" ? "text-yellow-400" : "text-green-400"
                                )}
                              >
                                {po.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right text-muted">{po.due}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pos" && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Purchase Orders</h2>
                <div className="space-y-4">
                  {demoPOs.map((po) => (
                    <div
                      key={po.id}
                      className="border border-border bg-charcoal p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-white font-semibold">{po.id}</p>
                        <p className="text-xs text-muted mt-1">
                          {po.date} · {po.items} line items · Due {po.due}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider",
                          po.status === "Open" ? "text-yellow-400" : "text-green-400"
                        )}
                      >
                        {po.status}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-6">Demo data only.</p>
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Specifications</h2>
                <div className="space-y-3">
                  {specs.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between border border-border bg-charcoal px-4 py-4"
                    >
                      <div>
                        <p className="text-sm text-white font-medium">{s.name}</p>
                        <p className="text-xs text-muted">Rev {s.rev} · Updated {s.updated}</p>
                      </div>
                      <button
                        className="flex items-center gap-2 text-xs uppercase tracking-wider text-metallic hover:text-white"
                        onClick={() => alert("Demo only — downloads available when files are uploaded.")}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Documents</h2>
                <div className="space-y-3">
                  {documents.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center justify-between border border-border bg-charcoal px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted" />
                        <div>
                          <p className="text-sm text-white font-medium">{d.name}</p>
                          <p className="text-xs text-muted">{d.type} · {d.size}</p>
                        </div>
                      </div>
                      <button
                        className="flex items-center gap-2 text-xs uppercase tracking-wider text-metallic hover:text-white"
                        onClick={() => alert("Demo only — downloads available when files are uploaded.")}
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
                <div className="border border-border bg-charcoal p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">Company</p>
                      <p className="text-white">Demo Supplier Ltd.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">Status</p>
                      <p className="text-green-400 font-medium">Approved (Demo)</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">Primary Contact</p>
                      <p className="text-white">—</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted mb-1">Category</p>
                      <p className="text-white">—</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border bg-charcoal p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">Need help?</h3>
                  <p className="text-sm text-muted mb-4">Contact purchasing or quality for support.</p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">Contact Us</Button>
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
