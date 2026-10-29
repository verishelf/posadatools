import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/collections/power-tools", label: "Power Tools" },
  { href: "/collections/batteries-chargers", label: "Batteries & Chargers" },
  { href: "/collections/accessories", label: "Accessories" },
];

const supportLinks = [
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/warranty", label: "Warranty" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center border border-metallic/40 bg-black">
                <span className="text-lg font-bold text-white tracking-tighter">P</span>
              </div>
              <div>
                <span className="block text-sm font-bold uppercase tracking-[0.15em] text-white">
                  POSADA
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
                  TOOLS
                </span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Professional-grade tools built for people who get it done. Practical design. Dependable performance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} POSADA TOOLS. All rights reserved.
          </p>
          <p className="text-xs text-muted uppercase tracking-wider">
            Built for Real Work
          </p>
        </div>
      </div>
    </footer>
  );
}
