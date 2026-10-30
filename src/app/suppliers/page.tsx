import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SupplierForm } from "@/components/forms/SupplierForm";

export const metadata: Metadata = {
  title: "Suppliers",
  description:
    "Supply POSADA TOOLS. Partner with us as a component, materials, or manufacturing supplier.",
};

export default function SuppliersPage() {
  return (
    <>
      <section className="relative bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Supply Chain
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Suppliers
            </h1>
            <p className="text-lg text-metallic max-w-xl leading-relaxed mb-8">
              We work with capable suppliers who deliver quality components,
              materials, and manufacturing support on time and to specification.
            </p>
            <p className="text-sm text-muted">
              Existing supplier?{" "}
              <Link
                href="/suppliers/portal"
                className="text-white underline underline-offset-4 hover:text-metallic transition-colors"
              >
                Sign in to the Supplier Portal
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-12 text-center">
            What We Source
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Motors & Electronics",
                text: "Brushless motors, controllers, switches, and electronic assemblies that meet performance and reliability standards.",
              },
              {
                title: "Batteries & Charging",
                text: "Lithium-ion cells, pack assembly, BMS, and charger components for our 20V platform.",
              },
              {
                title: "Mechanical Components",
                text: "Gearboxes, chucks, housings, fasteners, and precision-machined parts.",
              },
              {
                title: "Materials & Finishes",
                text: "Engineered plastics, metals, coatings, and packaging materials.",
              },
              {
                title: "Manufacturing Services",
                text: "Injection molding, die casting, CNC, assembly, and testing capacity.",
              },
              {
                title: "Packaging & Logistics",
                text: "Retail packaging, protective packaging, and fulfillment support.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-black p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
                What We Look For
              </h2>
              <ul className="space-y-4">
                {[
                  "Consistent quality and process control",
                  "On-time delivery performance",
                  "Transparent pricing and lead times",
                  "Willingness to support engineering collaboration",
                  "Capacity to scale with demand",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-red mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
                How We Work
              </h2>
              <ul className="space-y-4">
                {[
                  "Clear specifications and quality requirements",
                  "Fair, professional commercial terms",
                  "Direct communication with engineering and purchasing",
                  "Long-term relationships over one-off transactions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="text-red mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4">
              Introduce Your Company
            </h2>
            <p className="text-sm text-muted max-w-lg mx-auto">
              Tell us what you supply and how you can support POSADA TOOLS.
            </p>
          </div>
          <SupplierForm />
        </div>
      </section>
    </>
  );
}
