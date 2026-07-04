import type { Metadata } from "next";
import { Sparkles, Search, Columns3, Target, BellRing, BarChart3 } from "lucide-react";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";
import ShopifyCreative from "@/components/creatives/ShopifyCreative";

const DESCRIPTION =
  "SalesHQ for Shopify is an intent-driven AI shopping assistant that reads each shopper's intent in real time, finds the right products from your live catalog, compares options side by side, and nudges at the right moment — installed in one click with a 14-day free trial billed through Shopify.";

export const metadata: Metadata = {
  title: "SalesHQ for Shopify — AI Shopping Assistant",
  description: DESCRIPTION,
  keywords: [
    "Shopify AI chatbot",
    "AI shopping assistant",
    "Shopify shopping assistant",
    "ecommerce AI assistant",
    "product recommendation AI",
    "conversational commerce Shopify",
  ],
  alternates: { canonical: "/products/shopify" },
  openGraph: {
    title: "SalesHQ for Shopify — AI Shopping Assistant",
    description: DESCRIPTION,
    url: "/products/shopify",
    type: "website",
  },
};

const AnalyticsVisual = () => (
  <div className="rounded-2xl border border-border bg-background p-5">
    <div className="grid grid-cols-2 gap-3">
      {[
        { k: "Sessions", v: "4,182" },
        { k: "Conversations", v: "1,067" },
        { k: "Assisted orders", v: "312", accent: true },
        { k: "Popup reply rate", v: "38%" },
      ].map((s) => (
        <div key={s.k} className="rounded-xl border border-border p-4">
          <div className="text-[12px] text-muted-foreground">{s.k}</div>
          <div className={`font-display text-2xl font-bold ${s.accent ? "text-primary" : "text-foreground"}`}>{s.v}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-end gap-1 h-[70px] border-t border-border pt-3">
      {[40, 65, 50, 80, 70, 90].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className={`flex-1 rounded-t-[3px] ${i === 3 || i === 5 ? "bg-primary" : "bg-primary/30"}`}
        />
      ))}
    </div>
  </div>
);

export default function ShopifyProductPage() {
  return (
    <ProductPageTemplate
      breadcrumb="SalesHQ for Shopify"
      canonicalPath="/products/shopify"
      seoDescription={DESCRIPTION}
      eyebrowTag="NEW"
      eyebrow="AI shopping assistant for Shopify"
      title={
        <>
          Turn browsers into buyers,{" "}
          <span className="text-primary">one conversation</span> at a time
        </>
      }
      subtitle="SalesHQ for Shopify reads each shopper's intent in real time, finds the right products from your live catalog, compares options, and nudges at exactly the right moment."
      bullets={[
        "Installs in one click — no code, no theme edits",
        "Grounded in your live catalog — zero hallucinated products",
        "14-day free trial · billed through Shopify",
      ]}
      primaryCta={{ label: "Add to your store", href: "/contact" }}
      secondaryCta={{ label: "Book a demo", href: "https://calendly.com/saleshqai/30min", external: true }}
      note="14-day free trial · billed through Shopify · one-click install"
      creative={<ShopifyCreative />}
      stepsHeading="Live in under 30 minutes"
      steps={[
        { title: "One-click install", text: "Add the app embed from your theme editor — no code, no theme edits, nothing to maintain." },
        { title: "It learns your catalog", text: "SalesHQ syncs your live products, prices, and stock, and picks up your brand voice automatically." },
        { title: "Shoppers get an assistant", text: "Every visitor can ask, compare, and get nudged — and you watch intent analytics fill in." },
      ]}
      featuresHeading="Everything a great sales associate does — at scale"
      features={[
        { icon: <Sparkles className="h-5 w-5" />, title: "Reads shopper intent live", text: "Every search, view, dwell, and cart signal folds into a real-time picture of what each shopper wants." },
        { icon: <Search className="h-5 w-5" />, title: "Grounded product discovery", text: "Real titles, prices, stock, variants — straight from your catalog. No hallucinated products, ever." },
        { icon: <Columns3 className="h-5 w-5" />, title: "Side-by-side comparisons", text: "A clean in-chat comparison table — specs, price, best-for — so shoppers decide without leaving." },
        { icon: <Target className="h-5 w-5" />, title: "Personalized recommendations", text: "Semantic ranking surfaces what similar shoppers actually bought, with in-budget and social-proof cues." },
        { icon: <BellRing className="h-5 w-5" />, title: "Proactive, never pushy", text: "Nudges fire only on real intent + friction — never in the first 8s, never twice, and one dismissal quiets it." },
        { icon: <BarChart3 className="h-5 w-5" />, title: "Merchant intent analytics", text: "Intent cohorts, shopper funnel, top intents, assisted orders — plus an analytics assistant you can just ask." },
      ]}
      highlight={{
        eyebrow: "For merchants",
        title: "See exactly what your shoppers want",
        text: "Beyond chat, SalesHQ hands you an intelligence layer: which cohorts convert, where shoppers drop off, what they search for, and which orders the assistant influenced.",
        bullets: ["Intent cohorts & shopper mindset mix", "Conversion funnel & assisted orders", "Ask-anything analytics assistant"],
        visual: <AnalyticsVisual />,
      }}
      pricingHeading="Simple, conversation-based pricing"
      pricingNote="14-day free trial on every plan · billed through Shopify · upgrade or downgrade anytime."
      pricing={[
        { name: "Starter", price: "$19", blurb: "New stores getting started", detail: "250 conversations / month" },
        { name: "Growth", price: "$49", blurb: "Growing stores, steady traffic", detail: "800 conversations / month", featured: true },
        { name: "Pro", price: "$99", blurb: "High-volume stores", detail: "2,500 conversations / month" },
      ]}
      faqs={[
        { q: "Does it change my theme code?", a: "No. It runs as a Shopify app embed — enable it in the theme editor, disable it anytime. Nothing is written to your theme files." },
        { q: "Can it recommend products that are out of stock?", a: "No. Answers are grounded in your live catalog including stock and variants, so shoppers only see what they can actually buy." },
        { q: "How is it billed?", a: "Through Shopify billing, on a conversation-based plan with a 14-day free trial. Change plans anytime from inside the app." },
      ]}
      finalCta={{
        title: "Give every shopper a personal assistant",
        text: "Install in one click and start your 14-day free trial.",
        primary: { label: "Add to your store", href: "/contact" },
        secondary: { label: "Book a demo", href: "https://calendly.com/saleshqai/30min", external: true },
      }}
    />
  );
}
