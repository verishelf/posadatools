import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Strategic, technology, and channel partners working with POSADA TOOLS.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Collaboration
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Partners
            </h1>
            <p className="text-lg text-metallic max-w-xl leading-relaxed">
              We collaborate with companies that share a commitment to quality,
              practical performance, and professional standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-12 text-center">
            Partnership Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Partners",
                text: "Component, battery, motor, and electronics partners who help us deliver reliable performance in the field.",
              },
              {
                title: "Channel Partners",
                text: "Distributors and retailers who bring POSADA TOOLS to professional and serious DIY customers.",
              },
              {
                title: "Strategic Partners",
                text: "Organizations we work with on product development, market access, or long-term capability building.",
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-6">
              Partner With POSADA TOOLS
            </h2>
            <p className="text-metallic leading-relaxed mb-8">
              Whether you supply critical components, distribute the line, or
              collaborate on technology, we are interested in serious, long-term
              relationships built on clear expectations and mutual respect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/suppliers">
                <Button size="lg">Become a Supplier</Button>
              </Link>
              <Link href="/distributors">
                <Button variant="outline" size="lg">
                  Become a Distributor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal border-t border-border">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            Have a specific partnership idea? Reach out directly.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
