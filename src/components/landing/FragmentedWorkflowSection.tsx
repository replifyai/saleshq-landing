'use client'
import { X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FragmentedWorkflowSection = () => {
    const router = useRouter();

    const painPoints = [
        "Stop losing deals because reps can't find answers fast enough",
        "Stop wasting hours searching through documents and Slack threads",
        "Stop giving inconsistent information that hurts your brand"
    ];

    return (
        <section
            id="fragmented-workflow-section"
            className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background Elements - matching theme */}
            <div className="absolute inset-0 -z-10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem]" />

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

                {/* Question marks background pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-gray-400 dark:text-gray-600 text-2xl sm:text-3xl lg:text-4xl font-bold"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        >
                            ?
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 dark:bg-black bg-white rounded-2xl pb-20">
                {/* Problem Statement */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24 bg-gradient-to-b from-gray-900 to-gray-950 pb-20 rounded-2xl">
                    <div className="mb-8 pt-20">
                        <h2 className="text-xl sm:text-4xl md:text-3xl lg:text-5xl font-bold text-white dark:text-gray-600 mb-4 relative inline-block">
                            <span className="relative bg-gradient-to-t from-gray-800 to-gray-500 dark:text-gray-400 p-2 px-6 rounded-3xl">
                                We love losing deals due to slow responses
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400 dark:text-gray-500 italic">
                            - said no sales team ever
                        </p>
                    </div>

                    <h3 className="text-3xl font-bold text-white dark:text-white leading-tight mt-[15%] max-w-5xl mx-auto mb-16 sm:mb-20">
                        But scattered knowledge, slow information access,
                        and inconsistent messaging are costing you deals.
                    </h3>

                    {/* Pain point cards */}
                    <div className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center mb-16 sm:mb-20">
                        <div
                            className="absolute bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-4 shadow-2xl hover:shadow-red-500/30 hover:border-red-500/50"
                            style={{
                                transform: 'rotate(-8deg)',
                                top: '10%',
                                left: '5%',
                                maxWidth: '90%',
                                zIndex: 3
                            }}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                            </div>
                            <span className="text-sm sm:text-base lg:text-lg text-white font-medium">{painPoints[0]}</span>
                        </div>

                        <div
                            className="absolute bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-4 shadow-2xl hover:shadow-red-500/30 hover:border-red-500/50"
                            style={{
                                transform: 'rotate(12deg)',
                                top: '45%',
                                left: '45%',
                                maxWidth: '90%',
                                zIndex: 2
                            }}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                            </div>
                            <span className="text-sm sm:text-base lg:text-lg text-white font-medium">{painPoints[1]}</span>
                        </div>

                        <div
                            className="absolute bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-4 shadow-2xl hover:shadow-red-500/30 hover:border-red-500/50"
                            style={{
                                transform: 'rotate(-6deg)',
                                top: '70%',
                                left: '15%',
                                maxWidth: '90%',
                                zIndex: 1
                            }}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                            </div>
                            <span className="text-sm sm:text-base lg:text-lg text-white font-medium">{painPoints[2]}</span>
                        </div>
                    </div>
                </div>

                {/* Solution - One Unified Platform */}
                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 leading-tight px-4">
                        To close more deals faster,
                        <br />
                        your sales team needs –
                    </h3>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto px-4 text-center justify-center items-center">
                        {/* Left Column - Efficiency */}
                        <div className="text-center">
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                <span className="italic font-serif">Instant answers</span> with
                                <br />
                                AI-powered knowledge
                            </h4>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                Find any product info, pricing, or competitive intel in seconds
                            </p>
                        </div>

                        {/* Right Column - Effectiveness */}
                        <div className="text-center">
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                <span className="italic font-serif">Consistent messaging</span>
                                <br />
                                with verified sources
                            </h4>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                                Every rep gives accurate, brand-aligned answers every time
                            </p>
                        </div>
                    </div>
                </div>

                {/* Solution Features Grid with flowing lines */}
                <div className="relative max-w-7xl mx-auto px-4 mt-[-60px]">
                    <div className="flex justify-between">
                        {/* Flowing tree branches background - Left side (Efficiency) */}
                        <div className="w-3/4 h-auto pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
                            <img
                                src="/lines2.svg"
                                alt=""
                                className="w-full h-full object-contain"
                                style={{ transform: 'scale(1.2) translateX(-5%)' }}
                            />
                        </div>

                        {/* Flowing tree branches background - Right side (Effectiveness) */}
                        <div className="w-3/4 h-auto pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
                            <img
                                src="/lines1.svg"
                                alt=""
                                className="w-full h-full object-contain"
                                style={{ transform: 'scale(1.2) translateX(5%)' }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 relative" style={{ zIndex: 10,marginTop: '-65px' }}>
                        {/* Card 1 - Real-Time Responses (Yellow/Gold) */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-50/50 dark:from-yellow-900/30 dark:via-yellow-800/20 dark:to-yellow-900/10 border-2 border-yellow-200/60 dark:border-yellow-700/30 hover:border-yellow-300 dark:hover:border-yellow-600/50 hover:shadow-2xl hover:shadow-yellow-500/30 min-h-[200px] flex flex-col justify-center shadow-lg">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white mb-5 shadow-lg mx-auto">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                                </svg>
                            </div>
                            <div className="text-xs font-bold tracking-wide text-gray-600 dark:text-yellow-400 mb-2 text-center uppercase">LIGHTNING-FAST</div>
                            <h4 className="text-xl font-bold text-yellow-600 dark:text-yellow-300 text-center leading-tight">Real-Time AI Responses</h4>
                        </div>

                        {/* Card 2 - Centralized Knowledge (Blue) */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-blue-50/50 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-blue-900/10 border-2 border-blue-200/60 dark:border-blue-700/30 hover:border-blue-300 dark:hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/30 min-h-[200px] flex flex-col justify-center shadow-lg">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white mb-5 shadow-lg mx-auto">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 6h-3v3h-2v-3h-3v-2h3V7h2v3h3v2z" />
                                </svg>
                            </div>
                            <div className="text-xs font-bold tracking-wide text-gray-600 dark:text-blue-400 mb-2 text-center uppercase">UNIFIED</div>
                            <h4 className="text-xl font-bold text-blue-500 dark:text-blue-300 text-center leading-tight">Centralized Knowledge</h4>
                        </div>

                        {/* Card 3 - Source-Backed Answers (Purple) */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-100 via-purple-50 to-purple-50/50 dark:from-purple-900/30 dark:via-purple-800/20 dark:to-purple-900/10 border-2 border-purple-200/60 dark:border-purple-700/30 hover:border-purple-300 dark:hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-500/30 min-h-[200px] flex flex-col justify-center shadow-lg">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white mb-5 shadow-lg mx-auto">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                            </div>
                            <div className="text-xs font-bold tracking-wide text-gray-600 dark:text-purple-400 mb-2 text-center uppercase">VERIFIED</div>
                            <h4 className="text-xl font-bold text-purple-500 dark:text-purple-300 text-center leading-tight">Source-Backed Answers</h4>
                        </div>

                        {/* Card 4 - Performance Analytics (Green/Teal) */}
                        <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-emerald-50/50 dark:from-emerald-900/30 dark:via-emerald-800/20 dark:to-emerald-900/10 border-2 border-emerald-200/60 dark:border-emerald-700/30 hover:border-emerald-300 dark:hover:border-emerald-600/50 hover:shadow-2xl hover:shadow-emerald-500/30 min-h-[200px] flex flex-col justify-center shadow-lg">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white mb-5 shadow-lg mx-auto">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <div className="text-xs font-bold tracking-wide text-gray-600 dark:text-emerald-400 mb-2 text-center uppercase">INSIGHTS</div>
                            <h4 className="text-xl font-bold text-emerald-500 dark:text-emerald-300 text-center leading-tight">Performance Analytics</h4>
                        </div>
                    </div>

                    {/* AI Badge */}
                    <div className="relative mt-8">
                        <div className="flex justify-center pt-8 relative" style={{ zIndex: 20 }}>
                            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-lg bg-white dark:bg-gray-100 shadow-2xl border-2 border-gray-100 dark:border-gray-200 relative overflow-hidden">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-100 dark:via-purple-100 dark:to-gray-50 opacity-60" />
                                
                                {/* Content */}
                                <div className="relative flex items-center gap-4">
                                    <Image src="/logo.png" alt="SalesHQ" width={120} height={120} priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          [style*="left: 5%"] {
            left: 5% !important;
          }
          [style*="left: 45%"] {
            left: 5% !important;
          }
          [style*="left: 15%"] {
            left: 5% !important;
          }
          [style*="top: 10%"] {
            top: 5% !important;
          }
          [style*="top: 45%"] {
            top: 40% !important;
          }
          [style*="top: 70%"] {
            top: 75% !important;
          }
          [style*="rotate(-8deg)"] {
            transform: rotate(0deg) !important;
          }
          [style*="rotate(12deg)"] {
            transform: rotate(0deg) !important;
          }
          [style*="rotate(-6deg)"] {
            transform: rotate(0deg) !important;
          }
        }
      `}</style>
        </section>
    );
};

export default FragmentedWorkflowSection;

