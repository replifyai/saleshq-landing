import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    Zap,
    TrendingUp,
    Shield,
    Eye,
    Users,
    ChevronRight,
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

const features = [
    {
        title: "Customer Referrals",
        description: "Turn customers into advocates with shareable links and instant rewards.",
        items: ["WhatsApp & SMS sharing", "Instant UPI rewards", "QR codes for packaging"],
    },
    {
        title: "Affiliate Program",
        description: "Scale creator partnerships without spreadsheets.",
        items: ["Custom discount codes", "Tiered commissions", "Real-time analytics"],
    },
    {
        title: "WhatsApp-First",
        description: "Run your program where customers already are.",
        items: ["Native flows", "Pre-approved templates", "Auto status updates"],
    },
    {
        title: "UPI & Compliance",
        description: "Instant payouts with built-in tax compliance.",
        items: ["Same-day UPI payouts", "Auto TDS deduction", "PAN & GST verification"],
    },
];

const plans = [
    {
        name: "Starter",
        price: "₹2,999",
        description: "For early-stage creators",
        revenue: "Up to ₹20L",
        commission: "1.8%",
        features: ["Basic reports", "Email support", "Limited affiliates"],
    },
    {
        name: "Growth",
        price: "₹5,999",
        description: "For growing brands",
        revenue: "Up to ₹50L",
        commission: "1.8% → 1%",
        features: ["Advanced analytics", "Priority support", "Medium affiliates"],
        popular: false,
    },
    {
        name: "Scale",
        price: "₹9,999",
        description: "For high-volume partners",
        revenue: "Up to ₹1Cr",
        commission: "1.8% → 0.75%",
        features: ["API access", "Priority + onboarding", "Unlimited affiliates"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large businesses",
        revenue: "Unlimited",
        commission: "0.5%",
        features: ["White label", "Dedicated manager", "Custom SLA"],
    },
];

const faqs = [
    {
        question: "How quickly can I launch?",
        answer: "Go live in under 30 minutes. No technical setup required.",
    },
    {
        question: "What payout methods are supported?",
        answer: "Instant UPI payouts to any Indian bank account. Bank transfers for affiliates.",
    },
    {
        question: "How does TDS compliance work?",
        answer: "We automatically deduct TDS on payouts above ₹20,000/year and generate certificates.",
    },
    {
        question: "Can I run this on WhatsApp only?",
        answer: "Yes. Everything from referral sharing to rewards runs natively on WhatsApp.",
    },
];

export default function ReferralAffiliatePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            {/* Hero */}
            <section className="pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Coming Soon
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
                        Referral & Affiliate
                        <span className="block text-neutral-400 dark:text-neutral-500">for D2C Brands</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10">
                        Turn customers and creators into a 24/7 sales channel. WhatsApp-first. Instant UPI payouts. Full compliance.
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="h-12 px-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-full font-medium transition-all"
                    >
                        <Link href="/contact" className="inline-flex items-center gap-2">
                            Join the Beta
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-neutral-200 dark:border-neutral-800">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {[
                            { value: "30%", label: "customers from referrals" },
                            { value: "<30 min", label: "to go live" },
                            { value: "₹0", label: "beta platform fee" },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-2xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-1">
                                    {value}
                                </div>
                                <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-4">
                            Everything you need
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
                            A complete platform to run referral and affiliate programs at scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map(({ title, description, items }) => (
                            <div
                                key={title}
                                className="group p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                                    {title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
                                    {description}
                                </p>
                                <ul className="space-y-2.5">
                                    {items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                                            <Check className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-4">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
                            Monthly platform fee + progressive commission. Lower rates as you scale.
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border transition-all ${plan.popular
                                        ? "border-neutral-900 dark:border-white shadow-lg"
                                        : "border-neutral-200 dark:border-neutral-800"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-full">
                                        Popular
                                    </div>
                                )}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{plan.name}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{plan.description}</p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-3xl font-semibold text-neutral-900 dark:text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-neutral-500 dark:text-neutral-400 text-sm">/mo</span>}
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                                        <span className="text-neutral-500 dark:text-neutral-400">Revenue</span>
                                        <span className="font-medium text-neutral-900 dark:text-white">{plan.revenue}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                                        <span className="text-neutral-500 dark:text-neutral-400">Commission</span>
                                        <span className="font-medium text-neutral-900 dark:text-white">{plan.commission}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                            <Check className="w-4 h-4 text-neutral-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Commission Table */}
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                        <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-800">
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                                Progressive Commission
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Commission decreases as you scale. Calculated incrementally per slab.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                                        <th className="text-left py-4 px-6 font-medium text-neutral-600 dark:text-neutral-400">Revenue Slab</th>
                                        <th className="text-right py-4 px-6 font-medium text-neutral-600 dark:text-neutral-400">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { slab: "Up to ₹20,00,000", rate: "1.8%" },
                                        { slab: "₹20,00,001 – ₹50,00,000", rate: "1.0%" },
                                        { slab: "₹50,00,001 – ₹1,00,00,000", rate: "0.75%" },
                                        { slab: "Above ₹1,00,00,000", rate: "0.5%" },
                                    ].map(({ slab, rate }, i, arr) => (
                                        <tr key={slab} className={i !== arr.length - 1 ? "border-b border-neutral-100 dark:border-neutral-800/50" : ""}>
                                            <td className="py-4 px-6 text-neutral-700 dark:text-neutral-300">{slab}</td>
                                            <td className="py-4 px-6 text-right font-semibold text-neutral-900 dark:text-white">{rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Example Calculation */}
                    <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                            <div>
                                <h4 className="font-semibold text-neutral-900 dark:text-white">Example Calculation</h4>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">Revenue: ₹75,00,000</p>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <div>
                                    <span className="text-neutral-500 dark:text-neutral-400">Total Commission</span>
                                    <p className="text-lg font-semibold text-neutral-900 dark:text-white">₹84,750</p>
                                </div>
                                <div>
                                    <span className="text-neutral-500 dark:text-neutral-400">Effective Rate</span>
                                    <p className="text-lg font-semibold text-neutral-900 dark:text-white">1.13%</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-neutral-100 dark:border-neutral-800">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                                        <th className="text-left py-3 px-4 font-medium text-neutral-600 dark:text-neutral-400">Slab</th>
                                        <th className="text-right py-3 px-4 font-medium text-neutral-600 dark:text-neutral-400">Amount</th>
                                        <th className="text-right py-3 px-4 font-medium text-neutral-600 dark:text-neutral-400">Rate</th>
                                        <th className="text-right py-3 px-4 font-medium text-neutral-600 dark:text-neutral-400">Commission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-neutral-100 dark:border-neutral-800/50">
                                        <td className="py-3 px-4 text-neutral-700 dark:text-neutral-300">First ₹20L</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">₹20,00,000</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">1.8%</td>
                                        <td className="py-3 px-4 text-right text-neutral-900 dark:text-white font-medium">₹36,000</td>
                                    </tr>
                                    <tr className="border-t border-neutral-100 dark:border-neutral-800/50">
                                        <td className="py-3 px-4 text-neutral-700 dark:text-neutral-300">Next ₹30L</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">₹30,00,000</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">1.0%</td>
                                        <td className="py-3 px-4 text-right text-neutral-900 dark:text-white font-medium">₹30,000</td>
                                    </tr>
                                    <tr className="border-t border-neutral-100 dark:border-neutral-800/50">
                                        <td className="py-3 px-4 text-neutral-700 dark:text-neutral-300">Next ₹25L</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">₹25,00,000</td>
                                        <td className="py-3 px-4 text-right text-neutral-600 dark:text-neutral-400">0.75%</td>
                                        <td className="py-3 px-4 text-right text-neutral-900 dark:text-white font-medium">₹18,750</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { icon: TrendingUp, text: "Lower rates as you grow" },
                            { icon: Shield, text: "No slab penalties" },
                            { icon: Eye, text: "Fully transparent" },
                            { icon: Users, text: "Partner-aligned" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                                </div>
                                {text}
                            </div>
                        ))}
                    </div>

                    {/* Notes */}
                    <div className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-500">
                        All fees exclusive of taxes • Commission on net eligible revenue • Annual billing discounts available
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white text-center mb-12">
                        Questions?
                    </h2>

                    <div className="space-y-4">
                        {faqs.map(({ question, answer }, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                            >
                                <h3 className="font-medium text-neutral-900 dark:text-white mb-2">{question}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                        Join the beta and transform your customers into your sales channel.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="h-12 px-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-full font-medium transition-all"
                    >
                        <Link href="/contact" className="inline-flex items-center gap-2">
                            Join the Beta
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
