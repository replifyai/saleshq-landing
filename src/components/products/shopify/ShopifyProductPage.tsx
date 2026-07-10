import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Search,
  Columns3,
  Target,
  BellRing,
  Package,
  ShoppingCart,
  BarChart3,
  BookOpen,
  FileUp,
  Zap,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";
import ShopifyCreative from "@/components/creatives/ShopifyCreative";
import ShopifyIntentTriggersCreative from "@/components/creatives/ShopifyIntentTriggersCreative";
import ShopifyChatCreative from "@/components/creatives/ShopifyChatCreative";
import ShopifyAnalyticsCreative from "@/components/creatives/ShopifyAnalyticsCreative";
import ShopifyKnowledgeCreative from "@/components/creatives/ShopifyKnowledgeCreative";
import ShopifyCustomizeCreative from "@/components/creatives/ShopifyCustomizeCreative";
import {
  SHOPIFY_SEO_DESCRIPTION,
  SHOPIFY_TRIAL_DAYS,
  SHOPIFY_HERO_BULLETS,
  SHOPIFY_FEATURES,
  SHOPIFY_STEPS,
  SHOPIFY_PRICING,
  SHOPIFY_TOPUP_NOTE,
  SHOPIFY_FAQS,
  SHOPIFY_MERCHANT_BULLETS,
  SHOPIFY_KNOWLEDGE_BULLETS,
  SHOPIFY_CUSTOMIZE_BULLETS,
} from "@/data/shopifyProduct";

const CANONICAL = "/products/shopify";
const URL = `${SITE_URL}${CANONICAL}`;

// Order-matched to SHOPIFY_FEATURES.
const FEATURE_ICONS = [Sparkles, Search, Columns3, Target, BookOpen, FileUp, BellRing, ShoppingCart, Package, Zap, Palette, BarChart3];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
      {children}
    </p>
  );
}

export default function ShopifyProductPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SalesHQ for Shopify",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SHOPIFY_SEO_DESCRIPTION,
    url: URL,
    installUrl: "https://apps.shopify.com/saleshq-chatbot",
    provider: { "@type": "Organization", name: "SalesHQ", url: SITE_URL },
    offers: SHOPIFY_PRICING.map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      description: t.detail,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SHOPIFY_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/#products` },
      { "@type": "ListItem", position: 2, name: "SalesHQ for Shopify", item: URL },
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={[appSchema, breadcrumbSchema, faqSchema]} />

      {/* Hero — split layout */}
      <section className="relative overflow-hidden mt-16 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-8%,hsl(221,83%,53%,0.14),transparent_68%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-2.5 py-1.5">
              <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">NEW</span>
              <span className="pr-2 text-sm font-medium text-muted-foreground">The AI sales associate for Shopify</span>
            </div>
            <h1 className="hero-title text-[2.25rem] sm:text-5xl lg:text-[3.25rem] mb-5 text-balance">
              Your store&apos;s <span className="text-primary">best salesperson</span> — on every visit
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Like the top associate in a physical store: SalesHQ reads each shopper&apos;s buying intent,
              recommends products with reasons, compares options side by side, answers objections from your
              own policies, and closes the sale — right in the conversation.
            </p>
            <ul className="mb-8 space-y-3">
              {SHOPIFY_HERO_BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <a href="https://apps.shopify.com/saleshq-chatbot" target="_blank" rel="noopener noreferrer">
                  Add to your store <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <a href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                  Book a demo
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="pointer-events-none absolute inset-[-8%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.14),transparent_72%)] blur-lg" />
            <ShopifyCreative />
          </div>
        </div>
      </section>

      {/* Intent engine — animated triggers */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>Proactive intent engine</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              Four moments of real friction. Four perfectly-timed nudges.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Every visit streams live intent signals — dwell, comparison loops, cart hesitation, stalling
              searches — and the assistant steps in only at those moments. Never in the first 8 seconds,
              never twice for the same trigger, one dismissal quiets the whole session, and you control the
              timing, cooldowns, and caps.
            </p>
          </div>
          <ShopifyIntentTriggersCreative />
        </div>
      </section>

      {/* Shopper experience */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ShopifyChatCreative />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Shopper experience</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Grounded discovery. Confident decisions.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Every answer comes from your live catalog. Shoppers compare in chat, get personalized picks,
              add to cart without leaving the conversation, and track orders when signed in.
            </p>
            <ul className="space-y-3">
              {[
                "Catalog-grounded Q&A — zero hallucinated products",
                "Side-by-side comparison tables in chat",
                "Cross-sell and one-tap add to cart",
                "Order status and tracking for signed-in customers",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Knowledge base — the assistant answers from YOUR documents */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Store knowledge</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              It answers with <span className="text-primary">your</span> policies — not a guess
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Returns, shipping, warranty, FAQs, live offers — feed the assistant your own documents and it
              answers from your exact words. Drop in a PDF and AI converts it into clean, editable sections;
              nothing reaches shoppers until you hit publish.
            </p>
            <ul className="space-y-3">
              {SHOPIFY_KNOWLEDGE_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ShopifyKnowledgeCreative />
        </div>
      </section>

      {/* Customization — make it unmistakably yours */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ShopifyCustomizeCreative />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Fully customizable</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Looks like your brand. Sells in your voice.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              The widget auto-matches your theme the moment it&apos;s installed — then every detail is yours to
              tune, from colors and icons to how often it speaks up. Changes go live in about a minute, no
              redeploys, no code.
            </p>
            <ul className="space-y-3">
              {SHOPIFY_CUSTOMIZE_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Merchant analytics */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>For merchants</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              See exactly what shoppers want
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Beyond chat, SalesHQ is an intelligence layer — which cohorts convert, where shoppers drop off,
              what they search for, and which orders the assistant influenced.
            </p>
            <ul className="space-y-3">
              {SHOPIFY_MERCHANT_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ShopifyAnalyticsCreative />
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
              Live in under 30 minutes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SHOPIFY_STEPS.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]">
                <div className="font-mono-label mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-[11px] tracking-normal text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mb-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full feature grid */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              Everything a great sales associate does — at scale
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SHOPIFY_FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Sparkles;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mb-1.5 text-[15px] font-semibold text-foreground">{f.title}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display mb-3 text-3xl font-bold tracking-[-0.02em] text-foreground">
              Simple, reply-based pricing
            </h2>
            <p className="text-[15px] text-muted-foreground">
              {SHOPIFY_TRIAL_DAYS}-day free trial on every plan · billed through Shopify · upgrade or downgrade anytime.
              One AI reply = one assistant answer.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {SHOPIFY_PRICING.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl border p-6 ${
                  "featured" in t && t.featured
                    ? "border-primary bg-primary/[0.04] shadow-[0_28px_56px_-32px_rgba(37,99,235,0.4)]"
                    : "border-border bg-background"
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-foreground">{t.name}</span>
                  {"featured" in t && t.featured && (
                    <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-foreground">{t.price}</span>
                  <span className="text-[13px] text-muted-foreground">/mo</span>
                </div>
                <p className="mb-4 text-[13px] text-muted-foreground">{t.blurb}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-[13px] font-medium text-foreground">{t.detail}</div>
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-[13px] font-medium text-foreground">{t.knowledge}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[13px] text-muted-foreground">{SHOPIFY_TOPUP_NOTE}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl font-bold tracking-[-0.02em] text-foreground">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {SHOPIFY_FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-background p-5">
                <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">{f.q}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display mb-4 text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
            Give every shopper a personal assistant
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Install in one click and start your {SHOPIFY_TRIAL_DAYS}-day free trial.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-full px-6">
              <a href="https://apps.shopify.com/saleshq-chatbot" target="_blank" rel="noopener noreferrer">
                Add to your store <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-6">
              <a href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
