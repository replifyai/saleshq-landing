import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/seo/JsonLd";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/products/shopify",
    "/products/sales-assistant",
    "/referral-affiliate",
    "/features",
    "/solutions",
    "/about",
    "/contact",
    "/case-studies",
    "/privacy-policy",
    "/terms-of-service",
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : r.startsWith("/products") || r === "/referral-affiliate" ? 0.9 : 0.7,
  }));
}
