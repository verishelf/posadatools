import { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://posadatools.com";

  const staticPages = [
    "",
    "/shop",
    "/collections/power-tools",
    "/collections/batteries-chargers",
    "/collections/accessories",
    "/distributors",
    "/suppliers",
    "/partners",
    "/sponsors",
    "/about",
    "/contact",
    "/shipping-returns",
    "/warranty",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
