import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReferralCreative from "@/components/creatives/ReferralCreative";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";
import {
    ArrowRight,
    Check,
    Share2,
    Award,
    MessageCircle,
    Wallet,
    Link2,
    LayoutDashboard,
    BadgePercent,
    TrendingUp,
    Shield,
    Eye,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Referral & Affiliate for D2C Brands | SalesHQ",
    description:
        "Referral and affiliate platform for India's D2C brands. WhatsApp-first sharing, instant UPI payouts, TDS/PAN/GST compliance. Turn customers and creators into a sales channel.",
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
    alternates: { canonical: "/referral-affiliate" },
    openGraph: {
        title: "Referral & Affiliate for D2C Brands | SalesHQ",
        description:
            "Referral and affiliate platform for India's D2C brands. WhatsApp-first, UPI payouts, TDS/PAN/GST.",
        url: "/referral-affiliate",
        type: "website",
    },
};

const steps = [
    {
        number: "01",
        title: "Launch your program",
        description:
            "Set reward rules, branding, and payout terms in a no-code dashboard. Go live in under 30 minutes.",
    },
    {
        number: "02",
        title: "Customers & creators share",
        description:
            "Unique links and codes spread over WhatsApp, Instagram, and SMS. Every click and conversion is tracked automatically.",
    },
    {
        number: "03",
        title: "Rewards pay out instantly",
        description:
            "Confirmed conversions trigger same-day UPI payouts, with TDS deducted and documented automatically.",
    },
];

const features = [
    {
        icon: Share2,
        title: "Customer referrals",
        description: "Turn buyers into advocates the moment they check out.",
        items: ["WhatsApp, SMS & email sharing", "Thank-you page widgets", "QR codes for packaging inserts"],
    },
    {
        icon: Award,
        title: "Affiliate & creator program",
        description: "Scale influencer partnerships without spreadsheets.",
        items: ["Branded landing pages & custom codes", "Tiered commission structures", "Real-time performance dashboard"],
    },
    {
        icon: MessageCircle,
        title: "WhatsApp-first",
        description: "Run the entire program where your customers already are.",
        items: ["Native WhatsApp flows", "Pre-approved message templates", "Automated reward status updates"],
    },
    {
        icon: Wallet,
        title: "UPI payouts & compliance",
        description: "Instant rewards with Indian tax compliance built in.",
        items: ["Same-day UPI payouts", "Automatic TDS deduction & certificates", "PAN & GST verification, ITR-ready exports"],
    },
];

const affiliatePerks = [
    {
        icon: Link2,
        title: "Your own link & code",
        description: "Every affiliate gets a branded landing page, unique link, and custom discount code to share anywhere.",
    },
    {
        icon: LayoutDashboard,
        title: "Live earnings dashboard",
        description: "Clicks, conversions, and commissions update in real time — no waiting for a monthly report.",
    },
    {
        icon: Wallet,
        title: "Same-day UPI payouts",
        description: "Earnings land directly in any Indian bank account via UPI, with TDS certificates generated for you.",
    },
    {
        icon: BadgePercent,
        title: "Transparent commissions",
        description: "Clear tier rules and per-order breakdowns, so affiliates always know exactly what they earn.",
    },
];

const plans = [
    {
        name: "Starter",
        price: "₹2,999",
        description: "For early-stage brands",
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
    },
    {
        name: "Scale",
        price: "₹9,999",
        description: "For high-volume brands",
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

const slabs = [
    { slab: "Up to ₹20,00,000", rate: "1.8%" },
    { slab: "₹20,00,001 – ₹50,00,000", rate: "1.0%" },
    { slab: "₹50,00,001 – ₹1,00,00,000", rate: "0.75%" },
    { slab: "Above ₹1,00,00,000", rate: "0.5%" },
];

const exampleRows = [
    { slab: "First ₹20L", amount: "₹20,00,000", rate: "1.8%", commission: "₹36,000" },
    { slab: "Next ₹30L", amount: "₹30,00,000", rate: "1.0%", commission: "₹30,000" },
    { slab: "Next ₹25L", amount: "₹25,00,000", rate: "0.75%", commission: "₹18,750" },
];

const faqs = [
    {
        question: "How quickly can I launch?",
        answer: "Go live in under 30 minutes. No technical setup or engineering time required.",
    },
    {
        question: "What payout methods are supported?",
        answer: "Instant UPI payouts to any Indian bank account, with bank transfer available for affiliates.",
    },
    {
        question: "How does TDS compliance work?",
        answer: "We automatically deduct TDS on payouts above ₹20,000 per year and generate certificates for every payee.",
    },
    {
        question: "Can I run my program entirely on WhatsApp?",
        answer: "Yes. Referral sharing, status updates, and reward notifications all run natively on WhatsApp.",
    },
    {
        question: "How are affiliates onboarded?",
        answer: "Invite them with a link. They verify PAN and bank details once, get their branded page and code, and can start sharing immediately.",
    },
    {
        question: "What does the beta include?",
        answer: "Beta partners get the full platform with no platform fee — only the usage-based commission applies. Beta pricing is locked in for early adopters.",
    },
];

export default function ReferralAffiliatePage() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SalesHQ Referral & Affiliate",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
                "Referral and affiliate platform for India's D2C brands with WhatsApp-first sharing, instant UPI payouts, and TDS/PAN/GST compliance.",
            url: `${SITE_URL}/referral-affiliate`,
            provider: { "@type": "Organization", name: "SalesHQ", url: SITE_URL },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/#products` },
                { "@type": "ListItem", position: 2, name: "Referral & Affiliate", item: `${SITE_URL}/referral-affiliate` },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer },
            })),
        },
    ];

    return (
        <div className="min-h-screen">
            <JsonLd data={schemas} />
            {/* Breadcrumb (mt-16 clears the fixed h-16 nav) */}
            <div className="border-b border-border mt-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center text-[13px] text-muted-foreground">
                    <Link href="/#products" className="hover:text-foreground">Products</Link>
                    <span className="mx-2">/</span>
                    <span className="font-medium text-foreground">Referral &amp; Affiliate</span>
                </div>
            </div>

            {/* Hero */}
            <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground mb-8">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Now in beta — ₹0 platform fee for early partners
                    </div>

                    <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl mb-6">
                        Turn customers and creators into your best sales channel
                    </h1>

                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                        The referral &amp; affiliate platform built for India&apos;s D2C brands.
                        WhatsApp-first sharing, instant UPI payouts, and TDS/PAN/GST compliance — handled.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button asChild size="lg" className="rounded-full px-7 h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contact">
                                Join the beta
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 text-base">
                            <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                                Book a demo
                            </Link>
                        </Button>
                    </div>

                    <div className="mx-auto mt-14 max-w-lg">
                        <ReferralCreative />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {[
                            { value: "<30 min", label: "to launch your program" },
                            { value: "Same day", label: "UPI reward payouts" },
                            { value: "₹0", label: "platform fee during beta" },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-1">
                                    {value}
                                </div>
                                <div className="text-sm text-muted-foreground">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12 sm:mb-16">
                        <p className="section-eyebrow">
                            How it works
                        </p>
                        <h2 className="section-title mb-4">From setup to first payout in three steps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map(({ number, title, description }) => (
                            <div key={number} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                                <span className="text-sm font-medium text-primary tabular-nums">
                                    {number}
                                </span>
                                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">{title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12 sm:mb-16">
                        <p className="section-eyebrow">
                            Platform
                        </p>
                        <h2 className="section-title mb-4">Everything you need to run referrals at scale</h2>
                        <p className="section-subtitle">
                            One platform for customer referrals and creator affiliates — built for how India shops.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map(({ icon: Icon, title, description, items }) => (
                            <div key={title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                                <p className="text-sm text-muted-foreground mb-6">{description}</p>
                                <ul className="space-y-2.5">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For affiliates */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12 sm:mb-16">
                        <p className="section-eyebrow">
                            For affiliates &amp; creators
                        </p>
                        <h2 className="section-title mb-4">An experience your partners will actually love</h2>
                        <p className="section-subtitle">
                            Programs grow when sharing is effortless and payouts are fast. We obsess over the
                            affiliate side so your partners keep promoting.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {affiliatePerks.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-colors">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
                        <p className="section-eyebrow justify-center">
                            Pricing
                        </p>
                        <h2 className="section-title mb-4">Simple, transparent pricing</h2>
                        <p className="section-subtitle">
                            Monthly platform fee plus a progressive commission that drops as you scale.
                        </p>
                    </div>

                    {/* Plans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-xl bg-card p-6 border transition-colors ${
                                    plan.popular
                                        ? "border-primary shadow-[0_0_0_1px_var(--primary)]"
                                        : "border-border"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                                        Most popular
                                    </div>
                                )}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </div>
                                <div className="mb-6">
                                    <span className="text-3xl font-semibold tracking-tight text-foreground">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">Revenue</span>
                                        <span className="font-medium text-foreground">{plan.revenue}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">Commission</span>
                                        <span className="font-medium text-foreground">{plan.commission}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-primary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Commission slabs */}
                    <div className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className="p-6 sm:p-8 border-b border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-2">Progressive commission</h3>
                            <p className="text-sm text-muted-foreground">
                                Rates decrease as you scale, calculated incrementally per slab — like income tax, but in your favour.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-muted/50">
                                        <th className="text-left py-4 px-6 font-medium text-muted-foreground">Revenue slab</th>
                                        <th className="text-right py-4 px-6 font-medium text-muted-foreground">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {slabs.map(({ slab, rate }, i) => (
                                        <tr key={slab} className={i !== slabs.length - 1 ? "border-b border-border" : ""}>
                                            <td className="py-4 px-6 text-foreground/80">{slab}</td>
                                            <td className="py-4 px-6 text-right font-semibold text-foreground">{rate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Example */}
                    <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                            <div>
                                <h4 className="font-semibold text-foreground">Example calculation</h4>
                                <p className="text-sm text-muted-foreground">Annual revenue: ₹75,00,000</p>
                            </div>
                            <div className="flex gap-8 text-sm">
                                <div>
                                    <span className="text-muted-foreground">Total commission</span>
                                    <p className="text-lg font-semibold text-foreground">₹84,750</p>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Effective rate</span>
                                    <p className="text-lg font-semibold text-foreground">1.13%</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-muted/50">
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Slab</th>
                                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Amount</th>
                                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Rate</th>
                                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Commission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exampleRows.map((row) => (
                                        <tr key={row.slab} className="border-t border-border">
                                            <td className="py-3 px-4 text-foreground/80">{row.slab}</td>
                                            <td className="py-3 px-4 text-right text-muted-foreground">{row.amount}</td>
                                            <td className="py-3 px-4 text-right text-muted-foreground">{row.rate}</td>
                                            <td className="py-3 px-4 text-right font-medium text-foreground">{row.commission}</td>
                                        </tr>
                                    ))}
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
                            <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                                    <Icon className="w-4 h-4" />
                                </div>
                                {text}
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        All fees exclusive of taxes · Commission on net eligible revenue · Annual billing discounts available
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="section-title text-center mb-12">Questions, answered</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {faqs.map(({ question, answer }) => (
                            <div key={question} className="rounded-2xl border border-border bg-card p-5">
                                <h3 className="font-medium text-foreground mb-2">{question}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="section-title mb-4">Launch your referral program this week</h2>
                    <p className="section-subtitle mb-8 max-w-md mx-auto">
                        Join the beta — ₹0 platform fee, full feature access, and hands-on onboarding.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-7 h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/contact">
                            Join the beta
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
