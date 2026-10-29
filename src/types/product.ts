export type ProductCategory = "power-tools" | "batteries-chargers" | "accessories";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number; // in cents
  compareAtPrice?: number; // in cents
  stock: number;
  attributes?: Record<string, string>;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  categoryLabel: string;
  images: ProductImage[];
  variants: ProductVariant[];
  features: string[];
  specifications: Record<string, string>;
  included: string[];
  featured?: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  // Snapshot for display (validated server-side)
  name: string;
  price: number;
  image: string;
  slug: string;
  maxStock: number;
}

export interface Cart {
  items: CartItem[];
  updatedAt: string;
}
