import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Search,
  Columns3,
  Target,
  BellRing,
  BarChart3,
  ShieldCheck,
  Check,
} from "lucide-react";
import ShopifyCreative from "@/components/creatives/ShopifyCreative";

const features = [
  {
    icon: Sparkles,
    title: "Reads shopper intent live",
    text: "Every search, product view, dwell, and cart signal is folded into a real-time picture of what each shopper actually wants — not a scripted flow.",
  },
  {
    icon: Search,
    title: "Grounded product discovery",
    text: "Answers come straight from your live catalog — real titles, prices, stock, and variants. No hallucinated products, ever.",
  },
  {
    icon: Columns3,
    title: "Side-by-side comparisons",
    text: "Shoppers weighing options get a clean, in-chat comparison table — specs, price, and best-for, so they decide without leaving.",
  },
  {
    icon: Target,
    title: "Personalized recommendations",
    text: "Semantic ranking surfaces what similar shoppers actually bought, with in-budget and “popular with similar shoppers” cues that lift conversion.",
  },
  {
    icon: BellRing,
    title: "Proactive, never pushy",
    text: "Smart nudges fire only on genuine intent + friction — never in the first 8 seconds, never twice, and one dismissal quiets the session.",
  },
  {
    icon: BarChart3,
    title: "Merchant intent analytics",
    text: "A built-in dashboard shows intent cohorts, the shopper funnel, top searches and intents, and assisted orders — plus an analytics assistant you can just ask.",
  },
];

const pricing = [
  { name: "Starter", price: "$19", convos: "250", blurb: "New stores getting started" },
  { name: "Growth", price: "$49", convos: "800", blurb: "Growing stores, steady traffic", featured: true },
  { name: "Pro", price: "$99", convos: "2,500", blurb: "High-volume stores" },
];

export default function ShopifyChatbotSection() {
  return (
    <section
      id="shopify"
      aria-label="SalesHQ for Shopify"
      className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro row */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
              New from SalesHQ · for Shopify
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
              SalesHQ for Shopify — the AI shopping assistant that turns browsers into buyers
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 text-pretty">
              Drop one app embed into your theme and every shopper gets a personal
              assistant that understands intent, finds the right product, compares
              options, and nudges at exactly the right moment — grounded in your real
              catalog.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Installs in one click — no code, no theme edits",
                "Grounded in your live catalog — zero hallucinated products",
                "14-day free trial · billed through Shopify",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/80">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <Link href="/contact">
                  Add to your store
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 transition-transform hover:-translate-y-0.5"
              >
                <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                  Book a demo
                </Link>
              </Button>
            </div>

            <Link
              href="/products/shopify"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              Explore the full SalesHQ for Shopify page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Animated storefront → intent → auto-popup creative */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-[-8%_4%_-12%_4%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.14),transparent_72%)] blur-lg" />
            <ShopifyCreative />
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mb-1.5 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        {/* Trust / guardrails */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Built to protect trust and margin.</span>{" "}
            Rate limits, fail-soft degradation, and model tiering keep spend predictable and
            shoppers happy — any AI hiccup degrades quietly, never with an error in front of a buyer.
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground mb-3">
              Simple, conversation-based pricing
            </h3>
            <p className="text-[15px] text-muted-foreground">
              Every plan includes a 14-day free trial and is billed through Shopify. Upgrade or
              downgrade anytime.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  tier.featured
                    ? "border-primary bg-primary/[0.04] shadow-[0_28px_56px_-32px_rgba(37,99,235,0.4)]"
                    : "border-border bg-background"
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-foreground">{tier.name}</span>
                  {tier.featured && (
                    <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-[13px] text-muted-foreground">/mo</span>
                </div>
                <p className="mb-4 text-[13px] text-muted-foreground">{tier.blurb}</p>
                <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-[13px] font-medium text-foreground">
                  <span className="text-primary">{tier.convos}</span> conversations / month
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
