import { Product, ProductCategory } from "@/types/product";

/**
 * DEMO CATALOG
 * These are demonstration products for the POSADA TOOLS storefront.
 * Prices, specifications, and stock levels are illustrative only.
 * Replace with real manufacturer data before production use.
 */
export const products: Product[] = [
  {
    id: "posada-20v-drill-driver",
    slug: "posada-20v-cordless-drill-driver",
    name: "POSADA 20V Cordless Drill Driver",
    shortDescription: "Compact cordless drill designed for everyday fastening and drilling tasks.",
    description:
      "The POSADA 20V Cordless Drill Driver is built for practical workshop and jobsite use. It features a comfortable grip, variable speed trigger, and a keyless chuck for quick bit changes. Designed as a reliable everyday tool for professionals and serious DIYers who value straightforward performance.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [
      {
        src: "/images/products/drill-driver.jpg",
        alt: "POSADA 20V Cordless Drill Driver",
      },
    ],
    variants: [
      {
        id: "drill-driver-kit",
        name: "Tool Only",
        sku: "PT-DRL-20V-TO",
        price: 12900,
        stock: 24,
      },
      {
        id: "drill-driver-battery",
        name: "With 2.0Ah Battery",
        sku: "PT-DRL-20V-B",
        price: 17900,
        stock: 18,
      },
    ],
    features: [
      "Variable speed trigger for controlled operation",
      "Keyless chuck for fast bit changes",
      "Compact design for tight spaces",
      "LED work light",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Chuck Size": "1/2 in",
      Weight: "Approx. 2.8 lbs (tool only)",
      "Speed Settings": "2-speed gearbox",
    },
    included: ["Drill driver", "Side handle", "Belt clip", "Operator manual"],
    featured: true,
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "posada-brushless-impact",
    slug: "posada-brushless-impact-driver",
    name: "POSADA Brushless Impact Driver",
    shortDescription: "Brushless impact driver for high-torque fastening applications.",
    description:
      "The POSADA Brushless Impact Driver delivers the torque needed for driving lag screws and large fasteners. The brushless motor provides efficient power delivery and extended runtime. Built with a durable housing and ergonomic grip for all-day use on demanding projects.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [
      {
        src: "/images/products/impact-driver.jpg",
        alt: "POSADA Brushless Impact Driver",
      },
    ],
    variants: [
      {
        id: "impact-tool-only",
        name: "Tool Only",
        sku: "PT-IMP-BL-TO",
        price: 14900,
        stock: 32,
      },
      {
        id: "impact-kit",
        name: "Kit with Battery & Charger",
        sku: "PT-IMP-BL-KIT",
        price: 24900,
        compareAtPrice: 27900,
        stock: 12,
      },
    ],
    features: [
      "Brushless motor for efficiency",
      "High-torque impact mechanism",
      "Three speed settings",
      "LED work light",
      "Belt clip included",
    ],
    specifications: {
      Voltage: "20V",
      "Anvil Size": "1/4 in hex",
      Weight: "Approx. 2.4 lbs (tool only)",
      Motor: "Brushless",
    },
    included: ["Impact driver", "Belt clip", "Operator manual"],
    featured: true,
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "posada-circular-saw",
    slug: "posada-cordless-circular-saw",
    name: "POSADA Cordless Circular Saw",
    shortDescription: "Cordless circular saw for accurate crosscuts and rip cuts.",
    description:
      "The POSADA Cordless Circular Saw is designed for accurate cutting of lumber and sheet goods. It features a sturdy base plate, clear line-of-sight, and an efficient motor. Suitable for framing, decking, and general construction tasks where mobility matters.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [
      {
        src: "/images/products/circular-saw.jpg",
        alt: "POSADA Cordless Circular Saw",
      },
    ],
    variants: [
      {
        id: "saw-tool-only",
        name: "Tool Only",
        sku: "PT-CSW-20V-TO",
        price: 18900,
        stock: 15,
      },
    ],
    features: [
      "Bevel capacity up to 50 degrees",
      "Electric brake",
      "Dust blower for clear sight line",
      "Compatible with standard 6-1/2 in blades",
      "Rafter hook",
    ],
    specifications: {
      Voltage: "20V",
      "Blade Diameter": "6-1/2 in",
      "Max Cut Depth (90°)": "2-1/8 in",
      Weight: "Approx. 7.5 lbs (tool only)",
    },
    included: ["Circular saw", "Blade", "Rip guide", "Operator manual"],
    featured: true,
    createdAt: "2025-02-20T00:00:00Z",
  },
  {
    id: "posada-20v-battery",
    slug: "posada-20v-battery-pack",
    name: "POSADA 20V Battery Pack",
    shortDescription: "High-capacity 20V lithium-ion battery for the POSADA system.",
    description:
      "Power your POSADA 20V tools with this lithium-ion battery pack. Designed for consistent power delivery and compatibility across the POSADA cordless lineup. Available in multiple capacity options to match your runtime needs.",
    category: "batteries-chargers",
    categoryLabel: "Batteries & Chargers",
    images: [
      {
        src: "/images/products/battery.jpg",
        alt: "POSADA 20V Battery Pack",
      },
    ],
    variants: [
      {
        id: "battery-2ah",
        name: "2.0Ah",
        sku: "PT-BAT-20V-2AH",
        price: 5900,
        stock: 48,
      },
      {
        id: "battery-4ah",
        name: "4.0Ah",
        sku: "PT-BAT-20V-4AH",
        price: 9900,
        stock: 36,
      },
      {
        id: "battery-5ah",
        name: "5.0Ah",
        sku: "PT-BAT-20V-5AH",
        price: 12900,
        stock: 22,
      },
    ],
    features: [
      "Lithium-ion chemistry",
      "Fuel gauge indicator",
      "Compatible with all POSADA 20V tools",
      "Overcharge and temperature protection",
    ],
    specifications: {
      Voltage: "20V",
      Chemistry: "Lithium-ion",
      "Charge Time (approx)": "Varies by capacity and charger",
    },
    included: ["Battery pack"],
    featured: true,
    createdAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "posada-dual-charger",
    slug: "posada-dual-port-battery-charger",
    name: "POSADA Dual-Port Battery Charger",
    shortDescription: "Charge two 20V batteries simultaneously.",
    description:
      "Keep your tools running with the POSADA Dual-Port Battery Charger. Charge two batteries at once to minimize downtime on the job. Compatible with the full range of POSADA 20V battery packs.",
    category: "batteries-chargers",
    categoryLabel: "Batteries & Chargers",
    images: [
      {
        src: "/images/products/charger.jpg",
        alt: "POSADA Dual-Port Battery Charger",
      },
    ],
    variants: [
      {
        id: "charger-dual",
        name: "Dual Port",
        sku: "PT-CHG-DUAL",
        price: 7900,
        stock: 28,
      },
    ],
    features: [
      "Simultaneous dual-port charging",
      "LED charge status indicators",
      "Compatible with all POSADA 20V batteries",
      "Compact footprint",
    ],
    specifications: {
      Input: "120V AC",
      Ports: "2",
      Compatibility: "POSADA 20V battery system",
    },
    included: ["Dual-port charger", "Power cord"],
    featured: true,
    createdAt: "2025-01-20T00:00:00Z",
  },
  {
    id: "posada-tool-kit",
    slug: "posada-heavy-duty-tool-kit",
    name: "POSADA Heavy-Duty Tool Kit",
    shortDescription: "Complete starter kit with drill, impact, batteries, and case.",
    description:
      "The POSADA Heavy-Duty Tool Kit is a practical starting point for professionals building out their cordless system. Includes a drill driver, impact driver, two batteries, charger, and a durable carrying case. Ideal for those who want a matched set ready for the jobsite.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [
      {
        src: "/images/products/tool-kit.jpg",
        alt: "POSADA Heavy-Duty Tool Kit",
      },
    ],
    variants: [
      {
        id: "kit-complete",
        name: "Complete Kit",
        sku: "PT-KIT-HD",
        price: 39900,
        compareAtPrice: 44900,
        stock: 10,
      },
    ],
    features: [
      "Drill driver and impact driver",
      "Two 4.0Ah batteries",
      "Dual-port charger",
      "Heavy-duty carrying case",
      "Matched system compatibility",
    ],
    specifications: {
      Voltage: "20V",
      "Tools Included": "Drill Driver + Impact Driver",
      Batteries: "2 x 4.0Ah",
    },
    included: [
      "Drill driver",
      "Impact driver",
      "2 x 4.0Ah batteries",
      "Dual-port charger",
      "Carrying case",
      "Operator manuals",
    ],
    featured: true,
    createdAt: "2025-03-01T00:00:00Z",
  },
  {
    id: "posada-bit-set",
    slug: "posada-impact-bit-set",
    name: "POSADA Impact Bit Set",
    shortDescription: "25-piece impact-rated bit set for fastening work.",
    description:
      "A practical assortment of impact-rated bits designed for use with POSADA impact drivers and other 1/4-inch hex tools. Includes common Phillips, square, and Torx bits in a compact case.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [
      {
        src: "/images/products/bit-set.jpg",
        alt: "POSADA Impact Bit Set",
      },
    ],
    variants: [
      {
        id: "bit-set-25",
        name: "25-Piece Set",
        sku: "PT-ACC-BIT25",
        price: 2490,
        stock: 64,
      },
    ],
    features: [
      "Impact-rated construction",
      "Common drive types included",
      "Compact storage case",
      "1/4 in hex shank",
    ],
    specifications: {
      Pieces: "25",
      Shank: "1/4 in hex",
      Case: "Included",
    },
    included: ["25-piece bit set", "Storage case"],
    featured: false,
    createdAt: "2025-03-10T00:00:00Z",
  },
  {
    id: "posada-tool-bag",
    slug: "posada-heavy-duty-tool-bag",
    name: "POSADA Heavy-Duty Tool Bag",
    shortDescription: "Rugged tool bag with multiple compartments.",
    description:
      "Organize your tools and accessories with the POSADA Heavy-Duty Tool Bag. Features reinforced construction, multiple pockets, and a wide opening for easy access. Built for daily jobsite transport.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [
      {
        src: "/images/products/tool-bag.jpg",
        alt: "POSADA Heavy-Duty Tool Bag",
      },
    ],
    variants: [
      {
        id: "bag-standard",
        name: "Standard",
        sku: "PT-ACC-BAG",
        price: 5900,
        stock: 40,
      },
    ],
    features: [
      "Reinforced base and handles",
      "Multiple internal and external pockets",
      "Wide mouth opening",
      "Shoulder strap included",
    ],
    specifications: {
      Material: "Heavy-duty fabric",
      "Base": "Reinforced",
      Capacity: "Large",
    },
    included: ["Tool bag", "Shoulder strap"],
    featured: false,
    createdAt: "2025-03-15T00:00:00Z",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
  );
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
