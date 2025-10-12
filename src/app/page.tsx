'use client'
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  ChallengesSection,
  UseCasesSection,
  // CaseStudiesSection,
  ROISection,
  FooterSection,
  HeroSection,
  ProblemStatementSection,
  HowItWorksSection,
  FAQSection,
  FeaturesSection,
  FragmentedWorkflowSection,
} from "@/components/landing";
import { TableOfContents } from "@/components/landing/TableOfContent";

export default function LandingPage() {
  const neonContainerRef = useRef<HTMLDivElement | null>(null);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    let isCancelled = false;
    let cleanupCanvas: (() => void) | null = null;

    const init = async () => {
      try {
        if (isCancelled || !neonContainerRef.current) return;

        // Clean up any existing canvas first
        if (cleanupCanvas) {
          cleanupCanvas();
          cleanupCanvas = null;
        }

        // Only initialize neonCursor in dark mode
        const isDarkMode = resolvedTheme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');
        
        if (!isDarkMode) {
          // Clean up and hide cursor in light mode
          const container = neonContainerRef.current;
          if (container) {
            const canvases = container.getElementsByTagName("canvas");
            Array.from(canvases).forEach((c) => c.remove());
          }
          return;
        }

        const startNeon = () => {
          if (!neonContainerRef.current || typeof window.neonCursor !== "function") return;
          const neon = window.neonCursor({
            el: neonContainerRef.current,
            shaderPoints: 18,
            curvePoints: 70,
            curveLerp: 0.5,
            radius1: 4,
            radius2: 48,
            velocityTreshold: 1,
            sleepRadiusX: 100,
            sleepRadiusY: 100,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025,
          });

          // Nudge canvas styles for better visibility
          const container = neonContainerRef.current;
          if (container) {
            const canvas = container.querySelector("canvas");
            if (canvas) {
              (canvas as HTMLCanvasElement).style.mixBlendMode = "screen";
              (canvas as HTMLCanvasElement).style.opacity = "0.20";
              canvas.classList.add("neon-animate-hue");
            }
          }

          cleanupCanvas = () => {
            const container = neonContainerRef.current;
            if (!container) return;
            const canvases = container.getElementsByTagName("canvas");
            Array.from(canvases).forEach((c) => c.remove());
            try {
              if (neon && typeof neon.destroy === "function") {
                neon.destroy();
              }
            } catch { }
          };
        };

        if (window.neonCursor) {
          startNeon();
        } else {
          const handler = () => {
            startNeon();
            window.removeEventListener("neonCursorReady", handler);
          };
          window.addEventListener("neonCursorReady", handler);
        }
      } catch (err) {
        // Silently ignore to avoid breaking the page if CDN fails
        console.error("Failed to load neon cursor:", err);
      }
    };

    init();

    return () => {
      isCancelled = true;
      if (cleanupCanvas) cleanupCanvas();
    };
  }, [theme, resolvedTheme]); // Re-run when theme changes

  return (
    <div ref={neonContainerRef} className="min-h-screen relative overflow-hidden neon-cursor-area">
      {/* Elegant and smooth glass morphism background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Sophisticated base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/50 to-blue-50/30 dark:from-slate-950 dark:via-slate-900/80 dark:to-blue-950/40" />
        
        {/* Elegant glass overlay with smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent dark:from-white/8 dark:via-white/3 dark:to-transparent backdrop-blur-[1px]" />
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        
        {/* Elegant glass panels with smooth curves */}
        <div className="absolute top-24 left-12 w-36 h-36 rounded-3xl bg-gradient-to-br from-white/25 to-white/8 dark:from-white/12 dark:to-white/4 backdrop-blur-md border border-white/15 dark:border-white/8 shadow-xl shadow-blue-500/8 dark:shadow-blue-400/4 glass-elegant" />
        <div className="absolute top-48 right-16 w-28 h-28 rounded-2xl bg-gradient-to-br from-white/20 to-white/6 dark:from-white/10 dark:to-white/3 backdrop-blur-md border border-white/12 dark:border-white/6 shadow-xl shadow-indigo-500/8 dark:shadow-indigo-400/4 glass-elegant" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-40 left-1/3 w-32 h-32 rounded-3xl bg-gradient-to-br from-white/18 to-white/5 dark:from-white/8 dark:to-white/2 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl shadow-emerald-500/8 dark:shadow-emerald-400/4 glass-elegant" style={{animationDelay: '3s'}} />
        
        {/* Smooth radial orbs with elegant gradients */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full blur-[140px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),rgba(34,197,94,0.04)_50%,transparent_80%)]" />
        <div className="absolute -bottom-32 right-1/4 w-[45rem] h-[45rem] rounded-full blur-[130px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),rgba(59,130,246,0.04)_50%,transparent_80%)]" />
        <div className="absolute top-1/2 left-1/5 w-[35rem] h-[35rem] rounded-full blur-[120px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),rgba(168,85,247,0.02)_60%,transparent_85%)]" />
        
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent dark:via-white/1 smooth-shimmer" />
        
        {/* Elegant edge highlights */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/8" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent dark:via-white/6" />
      </div>

      <div className="relative z-10">
        <TableOfContents />
        {/* Sections wrapper with elegant glass background */}
        <div className="bg-gradient-to-b from-slate-50/70 via-slate-100/30 to-white/80 dark:from-slate-900/70 dark:via-slate-800/30 dark:to-gray-950/80 backdrop-blur-md">
          <HeroSection />
          <HowItWorksSection />
          <FragmentedWorkflowSection />
          {/* <ProblemStatementSection /> */}
          {/* <ChallengesSection /> */}
          <UseCasesSection />
          <ROISection />
          <FAQSection />
        </div>
      </div>

      {/* Global styles for elegant and smooth animations */}
      <style jsx global>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes elegant-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-8px) scale(1.02);
            opacity: 1;
          }
        }

        @keyframes smooth-shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes gentle-glow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.03);
          }
        }

        @keyframes neon-animate-hue {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .process-animate {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-in {
          animation: animate-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .glass-elegant {
          animation: elegant-float 6s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-elegant:hover {
          transform: translateY(-4px) scale(1.05);
          opacity: 0.9;
        }

        .smooth-shimmer {
          animation: smooth-shimmer 8s ease-in-out infinite;
        }

        .gentle-glow {
          animation: gentle-glow 5s ease-in-out infinite;
        }

        .neon-animate-hue {
          animation: neon-animate-hue 12s linear infinite;
        }

        /* Elegant glass morphism with smooth transitions */
        .glass-morphism {
          backdrop-filter: blur(12px) saturate(150%);
          -webkit-backdrop-filter: blur(12px) saturate(150%);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-morphism-dark {
          backdrop-filter: blur(12px) saturate(150%);
          -webkit-backdrop-filter: blur(12px) saturate(150%);
          background: rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced focus states for accessibility */
        .glass-elegant:focus-visible {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
