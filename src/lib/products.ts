import { Product, ProductCategory } from "@/types/product";

/**
 * DEMO CATALOG
 * These are demonstration products for the POSADA TOOLS storefront.
 * Prices, specifications, and stock levels are illustrative only.
 * Replace with real manufacturer data before production use.
 *
 * Images: SVG placeholders live in public/images/products/.
 * Replace with real JPGs/PNGs using the same base filename when ready.
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
    images: [{ src: "/images/products/drill-driver.svg", alt: "POSADA 20V Cordless Drill Driver" }],
    variants: [
      { id: "drill-driver-kit", name: "Tool Only", sku: "PT-DRL-20V-TO", price: 12900, stock: 24 },
      { id: "drill-driver-battery", name: "With 2.0Ah Battery", sku: "PT-DRL-20V-B", price: 17900, stock: 18 },
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
    images: [{ src: "/images/products/impact-driver.svg", alt: "POSADA Brushless Impact Driver" }],
    variants: [
      { id: "impact-tool-only", name: "Tool Only", sku: "PT-IMP-BL-TO", price: 14900, stock: 32 },
      { id: "impact-kit", name: "Kit with Battery & Charger", sku: "PT-IMP-BL-KIT", price: 24900, compareAtPrice: 27900, stock: 12 },
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
    images: [{ src: "/images/products/circular-saw.svg", alt: "POSADA Cordless Circular Saw" }],
    variants: [
      { id: "saw-tool-only", name: "Tool Only", sku: "PT-CSW-20V-TO", price: 18900, stock: 15 },
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
    id: "posada-extended-electric-ratchet",
    slug: "posada-extended-electric-ratchet",
    name: "POSADA Extended Electric Ratchet",
    shortDescription:
      "20V cordless extended-reach electric ratchet for tight engine bays and confined fastening work.",
    description:
      "The POSADA Extended Electric Ratchet is built for mechanics and technicians who need powered fastening in hard-to-reach spaces. An extended head and slim profile reach deep into engine compartments and equipment frames, while the 20V motor delivers steady torque without the fatigue of a hand ratchet.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/electric-ratchet.svg", alt: "POSADA Extended Electric Ratchet" }],
    variants: [
      { id: "ratchet-tool-only", name: "Tool Only", sku: "PT-RCH-EXT-TO", price: 15900, stock: 20 },
      { id: "ratchet-with-battery", name: "With 2.0Ah Battery", sku: "PT-RCH-EXT-B", price: 20900, stock: 14 },
    ],
    features: [
      "Extended head for deep reach in confined spaces",
      "Variable speed trigger for controlled fastening",
      "Forward and reverse control",
      "3/8 in square drive",
      "Slim profile for engine bay access",
      "Compatible with POSADA 20V battery system",
      "LED work light",
    ],
    specifications: {
      Voltage: "20V",
      Drive: "3/8 in square",
      "Head Style": "Extended reach",
      Weight: "Approx. 2.6 lbs (tool only)",
      "No-Load Speed": "0–220 RPM (approx.)",
      Motor: "Brushed",
    },
    included: ["Extended electric ratchet", "Operator manual"],
    featured: true,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-half-inch-impact-wrench",
    slug: "posada-half-inch-impact-wrench",
    name: "POSADA 1/2 in Impact Wrench",
    shortDescription:
      "High-torque 1/2 in cordless impact wrench for lug nuts, suspension, and heavy automotive fastening.",
    description:
      "The POSADA 1/2 in Impact Wrench delivers the breakaway torque needed for stubborn lug nuts, suspension bolts, and other high-load fasteners. Built for automotive and equipment service work, it pairs a durable housing with the POSADA 20V platform so you can stay mobile around the vehicle or shop without dragging an air hose.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/impact-wrench.svg", alt: "POSADA 1/2 in Impact Wrench" }],
    variants: [
      { id: "iw-tool-only", name: "Tool Only", sku: "PT-IW-HALF-TO", price: 18900, stock: 18 },
      { id: "iw-with-battery", name: "With 4.0Ah Battery", sku: "PT-IW-HALF-B", price: 26900, stock: 11 },
    ],
    features: [
      "High-torque impact mechanism for lug nuts and suspension",
      "1/2 in square drive with friction ring",
      "Variable speed trigger",
      "Forward / reverse control",
      "LED work light",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      Drive: "1/2 in square",
      "Max Torque": "Up to 300 ft-lb (illustrative)",
      Weight: "Approx. 3.8 lbs (tool only)",
      Motor: "Brushed",
    },
    included: ["Impact wrench", "Operator manual"],
    featured: true,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-cordless-angle-grinder",
    slug: "posada-cordless-angle-grinder",
    name: "POSADA Cordless Angle Grinder",
    shortDescription:
      "20V cordless angle grinder for cutting, grinding, and surface prep in the shop or field.",
    description:
      "The POSADA Cordless Angle Grinder gives you freedom from the outlet for cutting exhaust, grinding welds, and preparing surfaces. A compact body and side handle support control in tight vehicle spaces, while the 20V system keeps it compatible with the rest of your POSADA kit.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/angle-grinder.svg", alt: "POSADA Cordless Angle Grinder" }],
    variants: [
      { id: "ag-tool-only", name: "Tool Only", sku: "PT-AG-20V-TO", price: 11900, stock: 22 },
    ],
    features: [
      "4-1/2 in disc capacity",
      "Tool-free guard adjustment",
      "Side handle for control",
      "Spindle lock for disc changes",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Disc Size": "4-1/2 in",
      "Spindle": "5/8 in-11",
      Weight: "Approx. 3.2 lbs (tool only)",
    },
    included: ["Angle grinder", "Side handle", "Guard", "Operator manual"],
    featured: true,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-cordless-grease-gun",
    slug: "posada-cordless-grease-gun",
    name: "POSADA Cordless Grease Gun",
    shortDescription:
      "Powered grease gun for chassis, bearings, and equipment lubrication without hand pumping.",
    description:
      "Skip the hand pump. The POSADA Cordless Grease Gun delivers consistent grease flow for chassis points, U-joints, and industrial fittings. Compatible with standard grease cartridges and the POSADA 20V battery system for shop or field use.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/grease-gun.svg", alt: "POSADA Cordless Grease Gun" }],
    variants: [
      { id: "gg-tool-only", name: "Tool Only", sku: "PT-GG-20V-TO", price: 13900, stock: 16 },
    ],
    features: [
      "Powered grease delivery — no hand pumping",
      "Accepts standard 14 oz cartridges",
      "Variable speed trigger",
      "Hose and coupler included",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Cartridge": "14 oz standard",
      "Hose Length": "Approx. 30 in",
      Weight: "Approx. 4.5 lbs (tool only)",
    },
    included: ["Grease gun", "Flexible hose", "Coupler", "Operator manual"],
    featured: false,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-digital-tire-inflator",
    slug: "posada-digital-tire-inflator",
    name: "POSADA Digital Tire Inflator",
    shortDescription:
      "Portable digital tire inflator with preset PSI for cars, trucks, and equipment.",
    description:
      "Set the target pressure and let the POSADA Digital Tire Inflator do the work. Compact enough for the service truck or trunk, with a clear digital display and auto shut-off when the preset PSI is reached. Runs on the POSADA 20V battery system.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/tire-inflator.svg", alt: "POSADA Digital Tire Inflator" }],
    variants: [
      { id: "ti-tool-only", name: "Tool Only", sku: "PT-TI-20V-TO", price: 8900, stock: 30 },
    ],
    features: [
      "Digital PSI display",
      "Preset target pressure with auto shut-off",
      "Multiple valve adapters included",
      "Compact for vehicle or toolbox storage",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Max Pressure": "150 PSI (illustrative)",
      Display: "Digital",
      Weight: "Approx. 2.2 lbs (tool only)",
    },
    included: ["Tire inflator", "Hose", "Valve adapters", "Operator manual"],
    featured: true,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-underhood-work-light",
    slug: "posada-underhood-work-light",
    name: "POSADA Underhood Work Light",
    shortDescription:
      "Bright cordless LED work light designed to hang under the hood or mount in the bay.",
    description:
      "Light the job properly. The POSADA Underhood Work Light provides broad, even illumination for engine work, inspections, and night service. Hook and magnetic mounting options keep both hands free, powered by the POSADA 20V platform.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [{ src: "/images/products/work-light.svg", alt: "POSADA Underhood Work Light" }],
    variants: [
      { id: "wl-standard", name: "Standard", sku: "PT-WL-UH", price: 6900, stock: 35 },
    ],
    features: [
      "High-output LED array",
      "Underhood hooks and magnetic base",
      "Rotating head for aimed light",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Light Source": "LED",
      Mounting: "Hooks + magnetic base",
      Weight: "Approx. 1.8 lbs (tool only)",
    },
    included: ["Work light", "Operator manual"],
    featured: false,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-cordless-recip-saw",
    slug: "posada-cordless-reciprocating-saw",
    name: "POSADA Cordless Reciprocating Saw",
    shortDescription:
      "Cordless recip saw for exhaust, body work, and general automotive cut-off tasks.",
    description:
      "Cut exhaust pipe, body panels, and fasteners without a cord. The POSADA Cordless Reciprocating Saw is sized for automotive and light industrial cutting, with tool-free blade changes and a variable speed trigger for control in tight quarters.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/recip-saw.svg", alt: "POSADA Cordless Reciprocating Saw" }],
    variants: [
      { id: "rs-tool-only", name: "Tool Only", sku: "PT-RS-20V-TO", price: 12900, stock: 17 },
    ],
    features: [
      "Variable speed trigger",
      "Tool-free blade clamp",
      "Shoe adjusts for depth control",
      "Compatible with standard recip blades",
      "Compatible with POSADA 20V battery system",
    ],
    specifications: {
      Voltage: "20V",
      "Stroke Length": "1-1/8 in (approx.)",
      "Blade Change": "Tool-free",
      Weight: "Approx. 4.0 lbs (tool only)",
    },
    included: ["Reciprocating saw", "Operator manual"],
    featured: false,
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "posada-impact-socket-set",
    slug: "posada-impact-socket-set",
    name: "POSADA Impact Socket Set",
    shortDescription:
      "27-piece 1/2 in drive impact socket set for automotive and equipment service.",
    description:
      "A practical impact-rated socket assortment for the POSADA 1/2 in impact wrench and other 1/2 in drive tools. Covers common SAE and metric sizes used in automotive and equipment maintenance, stored in a durable case.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [{ src: "/images/products/socket-set.svg", alt: "POSADA Impact Socket Set" }],
    variants: [
      { id: "socket-27", name: "27-Piece Set", sku: "PT-ACC-SOC27", price: 8900, stock: 40 },
    ],
    features: [
      "Impact-rated chrome molybdenum construction",
      "1/2 in drive",
      "SAE and metric sizes included",
      "Durable storage case",
    ],
    specifications: {
      Drive: "1/2 in",
      Pieces: "27",
      Material: "Chrome molybdenum",
      Case: "Included",
    },
    included: ["27-piece impact socket set", "Storage case"],
    featured: false,
    createdAt: "2026-11-01T00:00:00Z",
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
    images: [{ src: "/images/products/battery.svg", alt: "POSADA 20V Battery Pack" }],
    variants: [
      { id: "battery-2ah", name: "2.0Ah", sku: "PT-BAT-20V-2AH", price: 5900, stock: 48 },
      { id: "battery-4ah", name: "4.0Ah", sku: "PT-BAT-20V-4AH", price: 9900, stock: 36 },
      { id: "battery-5ah", name: "5.0Ah", sku: "PT-BAT-20V-5AH", price: 12900, stock: 22 },
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
    images: [{ src: "/images/products/charger.svg", alt: "POSADA Dual-Port Battery Charger" }],
    variants: [
      { id: "charger-dual", name: "Dual Port", sku: "PT-CHG-DUAL", price: 7900, stock: 28 },
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
      "The POSADA Heavy-Duty Tool Kit is a practical starting point for professionals building out their cordless system. Includes a drill driver, impact driver, two batteries, charger, and a durable carrying case.",
    category: "power-tools",
    categoryLabel: "Power Tools",
    images: [{ src: "/images/products/tool-kit.svg", alt: "POSADA Heavy-Duty Tool Kit" }],
    variants: [
      { id: "kit-complete", name: "Complete Kit", sku: "PT-KIT-HD", price: 39900, compareAtPrice: 44900, stock: 10 },
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
      "A practical assortment of impact-rated bits designed for use with POSADA impact drivers and other 1/4-inch hex tools.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [{ src: "/images/products/tool-kit.svg", alt: "POSADA Impact Bit Set" }],
    variants: [
      { id: "bit-set-25", name: "25-Piece Set", sku: "PT-ACC-BIT25", price: 2490, stock: 64 },
    ],
    features: [
      "Impact-rated construction",
      "Common drive types included",
      "Compact storage case",
      "1/4 in hex shank",
    ],
    specifications: { Pieces: "25", Shank: "1/4 in hex", Case: "Included" },
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
      "Organize your tools and accessories with the POSADA Heavy-Duty Tool Bag. Features reinforced construction, multiple pockets, and a wide opening for easy access.",
    category: "accessories",
    categoryLabel: "Accessories",
    images: [{ src: "/images/products/tool-kit.svg", alt: "POSADA Heavy-Duty Tool Bag" }],
    variants: [
      { id: "bag-standard", name: "Standard", sku: "PT-ACC-BAG", price: 5900, stock: 40 },
    ],
    features: [
      "Reinforced base and handles",
      "Multiple internal and external pockets",
      "Wide mouth opening",
      "Shoulder strap included",
    ],
    specifications: { Material: "Heavy-duty fabric", Base: "Reinforced", Capacity: "Large" },
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
