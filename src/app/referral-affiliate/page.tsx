import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Gift,
    Share2,
    Award,
    MessageCircle,
    Wallet,
    ArrowRight,
    CheckCircle,
    Users,
    Zap,
    QrCode,
    Mail,
    Smartphone,
    TrendingUp,
    Shield,
    Receipt,
    HelpCircle,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Referral & Affiliate for D2C Brands | SalesHQ",
    description:
        "Referral and affiliate platform for India's D2C brands. WhatsApp-first, UPI payouts, TDS/PAN/GST. Turn customers and creators into a sales channel.",
    keywords: [
        "referral program",
        "affiliate marketing",
        "D2C brands",
        "WhatsApp marketing",
        "UPI payouts",
        "TDS compliance",
        "influencer marketing",
        "referral rewards",
    ],
    openGraph: {
        title: "Referral & Affiliate for D2C Brands | SalesHQ",
        description:
            "Referral and affiliate platform for India's D2C brands. WhatsApp-first, UPI payouts, TDS/PAN/GST.",
        type: "website",
    },
};

const offerings = [
    {
        title: "Customer Referrals",
        description: "Turn every customer into your brand advocate with shareable links and instant rewards.",
        features: [
            "WhatsApp, Email & SMS sharing",
            "Instant UPI rewards on conversion",
            "Thank-you page widgets",
            "QR codes for packaging",
            "Re-engagement pop-ups",
        ],
    },
    {
        title: "Affiliate Program",
        description: "Scale your creator and influencer partnerships without spreadsheets.",
        features: [
            "Branded affiliate sign-up pages",
            "Custom discount codes",
            "Tiered commission structures",
            "Performance-based payouts",
            "Real-time analytics dashboard",
        ],
    },
    {
        title: "WhatsApp-First",
        description: "Run your entire program natively on WhatsApp—where your customers already are.",
        features: [
            "Native WhatsApp flows",
            "Connect your existing provider",
            "Pre-approved templates",
            "Automated status updates",
        ],
    },
    {
        title: "UPI & Compliance",
        description: "Instant payouts with built-in tax compliance. No more manual paperwork.",
        features: [
            "Same-day UPI payouts",
            "Automatic TDS deduction",
            "PAN & GST verification",
            "ITR-ready exports",
        ],
    },
];

const faqs = [
    {
        question: "How quickly can I launch?",
        answer: "Go live in under 30 minutes. No technical setup required.",
    },
    {
        question: "What payout methods are supported?",
        answer: "Instant UPI payouts to any Indian bank account. Bank transfers and international payouts for affiliates.",
    },
    {
        question: "How does TDS compliance work?",
        answer: "We automatically deduct TDS on payouts above ₹20,000/year, collect PAN details, and generate TDS certificates.",
    },
    {
        question: "Can I run this on WhatsApp only?",
        answer: "Yes. From referral sharing to reward notifications—everything runs natively on WhatsApp.",
    },
];

export default function ReferralAffiliatePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="mb-8 px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-0 text-sm font-medium">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Coming Soon
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-black dark:text-white">
                        Referral & Affiliate
                        <br />
                        <span className="text-gray-400 dark:text-gray-500">for D2C Brands</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Turn your customers and creators into a 24/7 sales channel.
                        WhatsApp-first. Instant UPI payouts. Full compliance.
                    </p>

                    {/* Beta CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6"
                        >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                                Join the Beta
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

            {/* Offerings Section */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                            Everything you need
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            A complete platform to run referral and affiliate programs at scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {offerings.map(({ title, description, features }) => (
                            <div
                                key={title}
                                className="group p-8 lg:p-10 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                    {title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {description}
                                </p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

            {/* Social Proof */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
                        Built for India's D2C brands
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                        Designed from the ground up for WhatsApp, UPI, and Indian tax compliance.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { metric: "30%", label: "of new customers from referrals" },
                            { metric: "< 30 min", label: "to go live" },
                            { metric: "₹0", label: "platform fee for beta users" },
                        ].map(({ metric, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-3">
                                    {metric}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

            {/* FAQ Section */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
                            Questions?
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map(({ question, answer }, index) => (
                            <div
                                key={index}
                                className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
                            >
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                                    {question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

            {/* Bottom CTA */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                        Join the beta and be among the first to transform your customers into your sales channel.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6"
                    >
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                            Join the Beta
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
