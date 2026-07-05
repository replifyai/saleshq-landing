import type { Metadata } from "next";
import SalesAssistantProductPage from "@/components/products/sales-assistant/SalesAssistantProductPage";
import { SALES_ASSISTANT_SEO_DESCRIPTION } from "@/data/salesAssistantProduct";

export const metadata: Metadata = {
  title: "Sales Assistant — Real-Time AI for Revenue Teams",
  description: SALES_ASSISTANT_SEO_DESCRIPTION,
  keywords: [
    "AI sales assistant",
    "real-time call assistant",
    "sales enablement AI",
    "battlecards AI",
    "live call transcription",
    "source-backed sales answers",
  ],
  alternates: { canonical: "/products/sales-assistant" },
  openGraph: {
    title: "Sales Assistant — Real-Time AI for Revenue Teams",
    description: SALES_ASSISTANT_SEO_DESCRIPTION,
    url: "/products/sales-assistant",
    type: "website",
  },
};

export default function Page() {
  return <SalesAssistantProductPage />;
}
