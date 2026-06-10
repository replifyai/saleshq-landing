import HeroSection from "@/components/landing/HeroSection";
import FragmentedWorkflowSection from "@/components/landing/FragmentedWorkflowSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import ReferralAffiliateSection from "@/components/landing/ReferralAffiliateSection";
import ROISection from "@/components/landing/ROISection";
import FAQSection from "@/components/landing/FAQSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FragmentedWorkflowSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ReferralAffiliateSection />
      <ROISection />
      <FAQSection />
    </div>
  );
}
