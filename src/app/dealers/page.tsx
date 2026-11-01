import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DealerLocator } from "@/components/dealers/DealerLocator";

export const metadata: Metadata = {
  title: "Find a Dealer",
  description:
    "Find POSADA TOOLS at major retailers and authorized dealers near you. Available online and in select stores.",
};

export default function DealersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-red text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Where to Buy
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95] mb-6">
              Find a Dealer
            </h1>
            <p className="text-lg text-metallic max-w-xl leading-relaxed">
              POSADA TOOLS is available online and at select retailers.
              Shop direct or find a location near you.
            </p>
          </div>
        </div>
      </section>

      {/* Online Retailers */}
      <section className="py-16 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4 text-center">
            Shop Online
          </h2>
          <p className="text-sm text-muted text-center mb-12 max-w-xl mx-auto">
            Purchase POSADA TOOLS from these online retailers. Availability may vary by product and region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "POSADA TOOLS",
                type: "Official Store",
                href: "/shop",
                external: false,
                description: "Shop the full lineup direct from the brand.",
              },
              {
                name: "Home Depot",
                type: "Retail Partner",
                href: "https://www.homedepot.com",
                external: true,
                description: "Select POSADA tools available online and in store.",
              },
              {
                name: "Walmart",
                type: "Retail Partner",
                href: "https://www.walmart.com",
                external: true,
                description: "Shop POSADA products online at Walmart.com.",
              },
              {
                name: "Amazon",
                type: "Retail Partner",
                href: "https://www.amazon.com",
                external: true,
                description: "Find POSADA TOOLS on Amazon with fast shipping options.",
              },
              {
                name: "Lowe's",
                type: "Retail Partner",
                href: "https://www.lowes.com",
                external: true,
                description: "Select tools available online and at participating locations.",
              },
              {
                name: "Ace Hardware",
                type: "Retail Partner",
                href: "https://www.acehardware.com",
                external: true,
                description: "Independent Ace stores may carry POSADA products.",
              },
            ].map((retailer) => (
              <div
                key={retailer.name}
                className="border border-border bg-black p-6 flex flex-col"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red mb-2">
                  {retailer.type}
                </p>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                  {retailer.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {retailer.description}
                </p>
                {retailer.external ? (
                  <a
                    href={retailer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Visit Site
                    </Button>
                  </a>
                ) : (
                  <Link href={retailer.href}>
                    <Button size="sm" className="w-full sm:w-auto">
                      Shop Now
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Locator */}
      <section className="py-16 bg-black border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4 text-center">
            Find a Store Near You
          </h2>
          <p className="text-sm text-muted text-center mb-12 max-w-xl mx-auto">
            Search by city, state, or ZIP code to find authorized dealers and retail locations.
          </p>
          <DealerLocator />
        </div>
      </section>

      {/* Authorized Dealers CTA */}
      <section className="py-16 bg-charcoal border-b border-border">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wider text-white mb-4">
            Become an Authorized Dealer
          </h2>
          <p className="text-sm text-muted mb-8 max-w-lg mx-auto">
            Independent retailers and distributors can apply to carry the POSADA TOOLS line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/distributors">
              <Button size="lg">Distributor Application</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-12 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs text-muted text-center max-w-2xl mx-auto leading-relaxed">
            Retailer availability is illustrative for demonstration purposes.
            Product selection, pricing, and stock vary by location and channel.
            Home Depot, Walmart, Amazon, Lowe&apos;s, and Ace Hardware are trademarks of their respective owners.
            POSADA TOOLS is not affiliated with or endorsed by these retailers unless a formal partnership is in place.
          </p>
        </div>
      </section>
    </>
  );
}
