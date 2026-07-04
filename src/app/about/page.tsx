import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Zap,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  Headphones,
  ShoppingBag,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SalesHQ builds an AI platform across the whole revenue motion: an AI shopping assistant for Shopify, a referral & affiliate growth platform for D2C brands, and a real-time sales assistant for revenue teams.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Zap,
    title: "Speed matters",
    description:
      "Slow answers lose deals and slow software loses users. We optimize for time-to-value in everything we ship.",
  },
  {
    icon: Target,
    title: "Tailored, not templated",
    description:
      "Every business sells differently. Our products adapt to your knowledge, workflows, and market — not the other way around.",
  },
  {
    icon: TrendingUp,
    title: "Measurable value",
    description:
      "We hold ourselves to outcomes you can count: hours saved, deals accelerated, referrals converted.",
  },
  {
    icon: Users,
    title: "Built with customers",
    description:
      "Our roadmap comes from the teams using SalesHQ daily. Feedback loops are short and taken seriously.",
  },
];

const products = [
  {
    icon: ShoppingBag,
    name: "SalesHQ for Shopify",
    description:
      "An intent-driven AI shopping assistant for Shopify. It reads each shopper's intent, finds the right products from your live catalog, compares options, and nudges at the right moment — installed in one click.",
    href: "/products/shopify",
    cta: "Explore SalesHQ for Shopify",
  },
  {
    icon: Headphones,
    name: "Sales Assistant",
    description:
      "An AI assistant built on your own knowledge base. Reps ask in plain language and get instant, source-cited answers — live on calls, in chats, wherever they sell.",
    href: "/products/sales-assistant",
    cta: "Explore Sales Assistant",
  },
  {
    icon: Gift,
    name: "Referral & Affiliate",
    description:
      "A WhatsApp-first referral and affiliate platform for India's D2C brands, with instant UPI payouts and TDS/PAN/GST compliance built in.",
    href: "/referral-affiliate",
    cta: "Explore the platform",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow justify-center">About SalesHQ</p>
          <h1 className="hero-title text-4xl sm:text-5xl mb-6">
            AI behind everyone who sells your product
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            SalesHQ is the AI layer across your whole revenue motion — the shopper on your
            storefront, the customer sharing your brand, and the rep on a live call. One mission:
            put the full power of your business behind every sale.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-6">Why we exist</h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Sales teams drown in documents — product specs, pricing sheets, battlecards,
              policy PDFs — yet still say &ldquo;let me get back to you&rdquo; on live calls.
              The knowledge exists; access is the bottleneck. We founded SalesHQ in 2024 to
              close that gap with AI that answers in seconds and cites its sources.
            </p>
            <p>
              Then our D2C customers showed us a second gap: their happiest customers and creator
              partners wanted to sell for them, but running referral programs over spreadsheets and
              manual payouts didn&apos;t scale. So we built Referral &amp; Affiliate — WhatsApp-first,
              with instant UPI payouts and Indian tax compliance handled automatically.
            </p>
            <p>
              And on the storefront itself, we saw shoppers leave because no one was there to help
              them decide. So we built SalesHQ for Shopify — an AI shopping assistant that reads
              intent, recommends from your real catalog, and turns browsers into buyers.
            </p>
            <p>
              Three products, one mission: put the full power of your business behind every sale —
              from the first click, to the referral, to the closed deal.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="section-eyebrow">What we build</p>
            <h2 className="section-title">Three products, one mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(({ icon: Icon, name, description, href, cta }) => (
              <div key={name} className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">{description}</p>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="section-eyebrow">How we work</p>
            <h2 className="section-title">Our values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Want to see what we&apos;re building?</h2>
          <p className="section-subtitle mb-8 max-w-md mx-auto">
            Talk to us — we&apos;d love to show you SalesHQ on your own data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 h-12">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
              <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
