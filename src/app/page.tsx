import HeroSection from "@/components/landing/HeroSection";
import ProductsSection from "@/components/landing/ProductsSection";
import ShopifyChatbotSection from "@/components/landing/ShopifyChatbotSection";
import ROISection from "@/components/landing/ROISection";
import FAQSection from "@/components/landing/FAQSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* Platform overview — all three products */}
      <ProductsSection />
      {/* Flagship deep-dive: the homepage shows the complete feature set for the
          Shopify chatbot only; Sales Assistant & Referral link out to their own pages. */}
      <ShopifyChatbotSection />
      <ROISection />
      <FAQSection />
    </div>
  );
}
