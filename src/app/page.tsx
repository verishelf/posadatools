import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Professional Power Tools
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Power Through
              <br />
              Every Job.
            </h1>
            <p className="text-lg text-metallic max-w-md mb-10 leading-relaxed">
              Professional-grade tools. Precision engineering. Built for real work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/collections/power-tools">
                <Button size="lg">Shop Power Tools</Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  Explore the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-charcoal border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/collections/power-tools",
                title: "Power Tools",
                desc: "Drills, impact drivers, saws and more.",
                image:
                  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
              },
              {
                href: "/collections/batteries-chargers",
                title: "Batteries & Chargers",
                desc: "Keep your tools running longer.",
                image:
                  "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
              },
              {
                href: "/collections/accessories",
                title: "Accessories",
                desc: "Bits, bags, and essential gear.",
                image:
                  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative aspect-[4/3] overflow-hidden border border-border bg-black"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white">
                Featured Tools
              </h2>
              <p className="text-sm text-muted mt-2">Demo catalog — illustrative pricing only</p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-metallic hover:text-white transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Value */}
      <section className="py-20 bg-charcoal border-y border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-6">
              Engineered for the Work Ahead.
            </h2>
            <p className="text-metallic leading-relaxed mb-12">
              POSADA TOOLS focuses on practical design, useful features, and professional presentation.
              Tools that feel right in the hand and perform when it counts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Functional Design", text: "Form follows the job. Every detail serves a purpose." },
                { title: "Practical Performance", text: "Reliable power delivery for everyday professional use." },
                { title: "Dependable Support", text: "Clear warranty coverage and responsive service." },
                { title: "Purpose-Built Accessories", text: "Matched batteries, chargers, and gear that work together." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-red pl-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wider text-white mb-6">
              Tools for People Who Get It Done.
            </h2>
            <p className="text-metallic leading-relaxed mb-4">
              POSADA TOOLS is building a modern tool brand focused on practical design, useful features,
              and professional presentation. We believe good tools should be straightforward, durable,
              and ready for the work ahead.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              No marketing fluff. Just tools that earn their place in your kit.
            </p>
            <Link href="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-charcoal border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-3">
              Get on the List.
            </h2>
            <p className="text-sm text-muted mb-8">
              Product updates and practical tips. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
