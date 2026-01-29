'use client'
import dynamic from "next/dynamic";
import HeroSection from "@/components/landing/HeroSection";
import { TableOfContents } from "@/components/landing/TableOfContent";

// Lazy load below-the-fold components
const HowItWorksSection = dynamic(() => import("@/components/landing/HowItWorksSection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

const FragmentedWorkflowSection = dynamic(() => import("@/components/landing/FragmentedWorkflowSection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

const UseCasesSection = dynamic(() => import("@/components/landing/UseCasesSection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

const ReferralAffiliateSection = dynamic(() => import("@/components/landing/ReferralAffiliateSection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

const ROISection = dynamic(() => import("@/components/landing/ROISection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

const FAQSection = dynamic(() => import("@/components/landing/FAQSection").then(mod => ({ default: mod.default })), {
  loading: () => null,
  ssr: true
});

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/50 to-blue-50/30 dark:from-slate-950 dark:via-slate-900/80 dark:to-blue-950/40" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem]" />

        {/* Simplified radial orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full blur-[140px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),rgba(34,197,94,0.04)_50%,transparent_80%)]" />
        <div className="absolute -bottom-32 right-1/4 w-[45rem] h-[45rem] rounded-full blur-[130px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),rgba(59,130,246,0.04)_50%,transparent_80%)]" />
      </div>

      <div className="relative z-10">
        <TableOfContents />
        {/* Sections wrapper */}
        <div className="bg-gradient-to-b from-slate-50/70 via-slate-100/30 to-white/80 dark:from-slate-900/70 dark:via-slate-800/30 dark:to-gray-950/80">
          <HeroSection />
          <HowItWorksSection />
          <FragmentedWorkflowSection />
          <UseCasesSection />
          <ReferralAffiliateSection />
          <ROISection />
          <FAQSection />
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
