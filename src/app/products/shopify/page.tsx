import type { Metadata } from "next";
import ShopifyProductPage from "@/components/products/shopify/ShopifyProductPage";
import { SHOPIFY_SEO_DESCRIPTION } from "@/data/shopifyProduct";

export const metadata: Metadata = {
  title: "SalesHQ for Shopify — AI Shopping Assistant",
  description: SHOPIFY_SEO_DESCRIPTION,
  keywords: [
    "Shopify AI chatbot",
    "AI shopping assistant",
    "Shopify shopping assistant",
    "intent-driven chatbot",
    "product recommendation AI",
    "conversational commerce Shopify",
    "cart recovery Shopify",
    "Shopify intent analytics",
  ],
  alternates: { canonical: "/products/shopify" },
  openGraph: {
    title: "SalesHQ for Shopify — AI Shopping Assistant",
    description: SHOPIFY_SEO_DESCRIPTION,
    url: "/products/shopify",
    type: "website",
  },
};

export default function Page() {
  return <ShopifyProductPage />;
}
