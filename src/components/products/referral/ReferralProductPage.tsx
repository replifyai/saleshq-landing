import Link from "next/link";
import {
  ArrowRight,
  Check,
  Share2,
  Award,
  MessageCircle,
  Wallet,
  TrendingUp,
  Shield,
  Eye,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";
import ReferralHeroFlowCreative from "@/components/creatives/ReferralHeroFlowCreative";
import ReferralCheckoutCreative from "@/components/creatives/ReferralCheckoutCreative";
import ReferralWhatsAppCreative from "@/components/creatives/ReferralWhatsAppCreative";
import ReferralAffiliatePageCreative from "@/components/creatives/ReferralAffiliatePageCreative";
import ReferralAffiliateDashboardCreative from "@/components/creatives/ReferralAffiliateDashboardCreative";
import ReferralMerchantDashboardCreative from "@/components/creatives/ReferralMerchantDashboardCreative";
import ReferralUPICreative from "@/components/creatives/ReferralUPICreative";
import ReferralComplianceCreative from "@/components/creatives/ReferralComplianceCreative";
import {
  REFERRAL_SEO_DESCRIPTION,
  REFERRAL_HERO_BULLETS,
  REFERRAL_STEPS,
  REFERRAL_FEATURES,
  REFERRAL_AFFILIATE_PERKS,
  REFERRAL_PLANS,
  REFERRAL_SLABS,
  REFERRAL_EXAMPLE_ROWS,
  REFERRAL_FAQS,
} from "@/data/referralProduct";

const CANONICAL = "/referral-affiliate";
const URL = `${SITE_URL}${CANONICAL}`;

const FEATURE_ICONS = [Share2, Award, MessageCircle, Wallet];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
      {children}
    </p>
  );
}

export default function ReferralProductPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SalesHQ Referral & Affiliate",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: REFERRAL_SEO_DESCRIPTION,
    url: URL,
    provider: { "@type": "Organization", name: "SalesHQ", url: SITE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: REFERRAL_FAQS.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Referral & Affiliate", item: URL },
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={[appSchema, breadcrumbSchema, faqSchema]} />

      {/* Hero — split */}
      <section className="relative overflow-hidden mt-16 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-8%,hsl(221,83%,53%,0.12),transparent_68%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-2.5 py-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="pr-2 text-sm font-medium text-muted-foreground">Now in beta — ₹0 platform fee</span>
            </div>
            <h1 className="hero-title text-[2.25rem] sm:text-5xl lg:text-[3.25rem] mb-5 text-balance">
              Turn customers and creators into your{" "}
              <span className="text-primary">best sales channel</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Referral &amp; affiliate platform built for India&apos;s D2C brands — WhatsApp-first sharing,
              instant UPI payouts, and TDS/PAN/GST compliance handled automatically.
            </p>
            <ul className="mb-8 space-y-3">
              {REFERRAL_HERO_BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 rounded-full px-6">
                <Link href="/contact">Join the beta <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6">
                <a href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">Book a demo</a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="pointer-events-none absolute inset-[-8%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.12),transparent_72%)] blur-lg" />
            <ReferralHeroFlowCreative />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 text-center">
          {[
            { value: "<30 min", label: "to launch your program" },
            { value: "Same day", label: "UPI reward payouts" },
            { value: "₹0", label: "platform fee during beta" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp flow */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ReferralWhatsAppCreative />
          <div>
            <Eyebrow>WhatsApp-first</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Share where India already shops
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Customers share referral links in WhatsApp groups. Friends convert. Rewards trigger
              automatically — with status updates and payout confirmations sent in the same thread.
            </p>
            <ul className="space-y-3">
              {["Native WhatsApp sharing flows", "Pre-approved message templates", "Automated reward status updates"].map((b) => (
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

      {/* Post-checkout referral */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Eyebrow>Customer referrals</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Turn every buyer into an advocate
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              The moment someone checks out, they get a personal referral link — ready to share on
              WhatsApp, SMS, or email. No app download, no extra steps.
            </p>
            <ul className="space-y-3">
              {["Post-purchase referral widget on your storefront", "Unique link + discount code per customer", "Rewards trigger automatically on confirmed orders"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <ReferralCheckoutCreative />
          </div>
        </div>
      </section>

      {/* Affiliate dashboard */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ReferralAffiliatePageCreative />
          <div>
            <Eyebrow>For affiliates &amp; creators</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              An experience partners actually love
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Programs grow when sharing is effortless and payouts are fast. Every affiliate gets a
              branded page, live earnings, and same-day UPI — no chasing monthly reports.
            </p>
            <ul className="space-y-3">
              {REFERRAL_AFFILIATE_PERKS.map((b) => (
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
        <div className="mx-auto mt-20 grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Eyebrow>Affiliate portal</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Live earnings, order by order
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every affiliate sees clicks, conversions, and UPI payouts in real time — with TDS
              certificates and tax exports in one place.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <ReferralAffiliateDashboardCreative />
          </div>
        </div>
      </section>

      {/* Merchant dashboard */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ReferralMerchantDashboardCreative />
          <div>
            <Eyebrow>For your team</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Run the whole program from one dashboard
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Track referred revenue, manage affiliates, and monitor payout status — without
              spreadsheets or manual reconciliation.
            </p>
            <ul className="space-y-3">
              {["Program KPIs and conversion analytics", "Affiliate roster with payout status", "Progressive commission tracking"].map((b) => (
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

      {/* Compliance + UPI */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ReferralComplianceCreative />
          <div>
            <Eyebrow>Compliance built in</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              UPI payouts with tax handled
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              PAN verification, automatic TDS deduction, and same-day UPI payouts — with certificates
              and exports ready for your finance team and affiliates&apos; ITR filing.
            </p>
            <ul className="space-y-3">
              {["PAN & GST verification at onboarding", "TDS certificates for every payee", "ITR-ready payout exports"].map((b) => (
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
        <div className="mx-auto mt-20 grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ReferralUPICreative />
          <div>
            <Eyebrow>Instant payouts</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Rewards land on UPI the same day
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Affiliates get a real UPI credit the moment an order confirms — with TDS breakdown
              and certificates ready for ITR filing.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
              From setup to first payout in three steps
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {REFERRAL_STEPS.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]">
                <div className="font-mono-label mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-[11px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mb-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>Platform</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              Everything you need to run referrals at scale
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {REFERRAL_FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Share2;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]">
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
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="font-display mb-3 text-3xl font-bold tracking-[-0.02em] text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-[15px] text-muted-foreground">
              Monthly platform fee plus progressive commission that drops as you scale.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REFERRAL_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 ${
                  "featured" in plan && plan.featured
                    ? "border-primary bg-primary/[0.04] shadow-[0_28px_56px_-32px_rgba(37,99,235,0.4)]"
                    : "border-border bg-background"
                }`}
              >
                {"featured" in plan && plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-medium text-primary-foreground">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mb-3 text-[13px] text-muted-foreground">{plan.blurb}</p>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[13px] text-muted-foreground">/mo</span>}
                </div>
                <div className="mb-4 space-y-2 text-[12px]">
                  <div className="flex justify-between border-b border-border py-2">
                    <span className="text-muted-foreground">Revenue</span>
                    <span className="font-medium">{plan.revenue}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Commission</span>
                    <span className="font-medium">{plan.commission}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="border-b border-border p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">Progressive commission</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Rates decrease as you scale — calculated incrementally per slab.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-3 text-left font-medium text-muted-foreground">Revenue slab</th>
                    <th className="px-6 py-3 text-right font-medium text-muted-foreground">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {REFERRAL_SLABS.map(({ slab, rate }, i) => (
                    <tr key={slab} className={i < REFERRAL_SLABS.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-6 py-3 text-foreground/85">{slab}</td>
                      <td className="px-6 py-3 text-right font-semibold">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-foreground">Example · ₹75L annual revenue</h4>
                <p className="text-sm text-muted-foreground">Total commission ₹84,750 · effective 1.13%</p>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-2 text-left font-medium text-muted-foreground">Slab</th>
                    <th className="px-4 py-2 text-right font-medium text-muted-foreground">Amount</th>
                    <th className="px-4 py-2 text-right font-medium text-muted-foreground">Rate</th>
                    <th className="px-4 py-2 text-right font-medium text-muted-foreground">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {REFERRAL_EXAMPLE_ROWS.map((row) => (
                    <tr key={row.slab} className="border-t border-border">
                      <td className="px-4 py-2 text-foreground/85">{row.slab}</td>
                      <td className="px-4 py-2 text-right text-muted-foreground">{row.amount}</td>
                      <td className="px-4 py-2 text-right text-muted-foreground">{row.rate}</td>
                      <td className="px-4 py-2 text-right font-medium">{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: TrendingUp, text: "Lower rates as you grow" },
              { icon: Shield, text: "No slab penalties" },
              { icon: Eye, text: "Fully transparent" },
              { icon: Users, text: "Partner-aligned" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <Icon className="h-4 w-4" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl font-bold tracking-[-0.02em] text-foreground">
            Questions, answered
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {REFERRAL_FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-background p-5">
                <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">{f.q}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display mb-4 text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
            Launch your referral program this week
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join the beta — ₹0 platform fee, full feature access, and hands-on onboarding.
          </p>
          <Button asChild className="h-11 rounded-full px-6">
            <Link href="/contact">Join the beta <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
