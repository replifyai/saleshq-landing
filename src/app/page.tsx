import HeroSection from "@/components/landing/HeroSection";
import PlatformOverviewSection from "@/components/landing/PlatformOverviewSection";
import ProductsSection from "@/components/landing/ProductsSection";
import ShopifyChatbotSection from "@/components/landing/ShopifyChatbotSection";
import ReferralAffiliateSection from "@/components/landing/ReferralAffiliateSection";
import SalesAssistantSection from "@/components/landing/SalesAssistantSection";
import ROISection from "@/components/landing/ROISection";
import FAQSection from "@/components/landing/FAQSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PlatformOverviewSection />
      <ProductsSection />
      <ShopifyChatbotSection compact />
      <ReferralAffiliateSection compact />
      <SalesAssistantSection compact />
      <ROISection />
      <FAQSection />
    </div>
  );
}
