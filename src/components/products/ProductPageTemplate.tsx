import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";

export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}
export interface Step {
  title: string;
  text: string;
}
export interface Feature {
  icon: ReactNode;
  title: string;
  text: string;
}
export interface PricingTier {
  name: string;
  price: string;
  blurb: string;
  detail: string;
  featured?: boolean;
}
export interface Faq {
  q: string;
  a: string;
}

export interface ProductPageProps {
  breadcrumb: string;
  /** Canonical path, e.g. "/products/shopify" — used for structured data. */
  canonicalPath: string;
  /** Plain-text product description for structured data / AI answer engines. */
  seoDescription: string;
  eyebrow: string;
  eyebrowTag?: string;
  title: ReactNode;
  subtitle: string;
  bullets: string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  note?: string;
  creative: ReactNode;
  stepsHeading?: string;
  steps?: Step[];
  featuresHeading: string;
  featuresSubhead?: string;
  features: Feature[];
  highlight?: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    visual: ReactNode;
  };
  pricingHeading?: string;
  pricingNote?: string;
  pricing?: PricingTier[];
  faqHeading?: string;
  faqs?: Faq[];
  finalCta: { title: string; text: string; primary: Cta; secondary?: Cta };
}

function CtaButton({ cta, variant = "default" }: { cta: Cta; variant?: "default" | "outline" }) {
  const inner =
    variant === "default" ? (
      <>
        {cta.label} <ArrowRight className="h-4 w-4" />
      </>
    ) : (
      cta.label
    );
  return (
    <Button asChild variant={variant} className="rounded-full px-6 h-11 transition-transform hover:-translate-y-0.5">
      {cta.external ? (
        <a href={cta.href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link href={cta.href}>{inner}</Link>
      )}
    </Button>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
      {children}
    </p>
  );
}

export default function ProductPageTemplate(p: ProductPageProps) {
  const url = `${SITE_URL}${p.canonicalPath}`;

  // SoftwareApplication — helps search + LLMs understand the product & pricing.
  const appSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.breadcrumb,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: p.seoDescription,
    url,
    provider: { "@type": "Organization", name: "SalesHQ", url: SITE_URL },
  };
  if (p.pricing && p.pricing.length > 0) {
    appSchema.offers = p.pricing.map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price.replace(/[^0-9.]/g, "") || undefined,
      priceCurrency: "USD",
      description: t.detail,
    }));
  }

  // FAQPage — the biggest AEO win: answer engines lift these Q&A pairs directly.
  const faqSchema =
    p.faqs && p.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/#products` },
      { "@type": "ListItem", position: 2, name: p.breadcrumb, item: url },
    ],
  };

  const schemas = [appSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <div className="min-h-screen">
      <JsonLd data={schemas} />
      {/* Breadcrumb (mt-16 clears the fixed h-16 nav) */}
      <div className="border-b border-border mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center text-[13px] text-muted-foreground">
          <Link href="/#products" className="hover:text-foreground">Products</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-foreground">{p.breadcrumb}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_-4%,hsl(221,83%,53%,0.10),transparent_70%)]" />
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-2.5 py-1.5 mb-6">
            {p.eyebrowTag && (
              <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">{p.eyebrowTag}</span>
            )}
            <span className="text-sm font-medium text-muted-foreground pr-2">{p.eyebrow}</span>
          </div>
          <h1 className="hero-title text-[2.25rem] sm:text-5xl lg:text-6xl mb-5">{p.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 text-pretty">{p.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CtaButton cta={p.primaryCta} />
            {p.secondaryCta && <CtaButton cta={p.secondaryCta} variant="outline" />}
          </div>
          {p.note && <p className="text-sm text-muted-foreground mt-4">{p.note}</p>}
        </div>
        <div className="mx-auto mt-14 max-w-lg">{p.creative}</div>
      </section>

      {/* How it works */}
      {p.steps && p.steps.length > 0 && (
        <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
                {p.stepsHeading}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {p.steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-border bg-background p-7">
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
      )}

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              {p.featuresHeading}
            </h2>
            {p.featuresSubhead && <p className="mt-3 text-[15px] text-muted-foreground">{p.featuresSubhead}</p>}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {f.icon}
                </div>
                <h3 className="font-display mb-1.5 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      {p.highlight && (
        <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{p.highlight.eyebrow}</Eyebrow>
              <h2 className="font-display text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground mb-4">
                {p.highlight.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 text-pretty">{p.highlight.text}</p>
              <ul className="space-y-3">
                {p.highlight.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/80">
                    <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>{p.highlight.visual}</div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {p.pricing && p.pricing.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground mb-3">{p.pricingHeading}</h2>
              {p.pricingNote && <p className="text-[15px] text-muted-foreground">{p.pricingNote}</p>}
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {p.pricing.map((t) => (
                <div
                  key={t.name}
                  className={`rounded-2xl border p-6 ${
                    t.featured
                      ? "border-primary bg-primary/[0.04] shadow-[0_28px_56px_-32px_rgba(37,99,235,0.4)]"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-foreground">{t.name}</span>
                    {t.featured && (
                      <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">POPULAR</span>
                    )}
                  </div>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-foreground">{t.price}</span>
                    <span className="text-[13px] text-muted-foreground">/mo</span>
                  </div>
                  <p className="mb-4 text-[13px] text-muted-foreground">{t.blurb}</p>
                  <div className="rounded-lg bg-muted/60 px-3 py-2 text-[13px] font-medium text-foreground">{t.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {p.faqs && p.faqs.length > 0 && (
        <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground mb-8 text-center">
              {p.faqHeading ?? "Frequently asked questions"}
            </h2>
            <div className="flex flex-col gap-3">
              {p.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-background p-5">
                  <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{f.q}</h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground mb-4">
            {p.finalCta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{p.finalCta.text}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CtaButton cta={p.finalCta.primary} />
            {p.finalCta.secondary && <CtaButton cta={p.finalCta.secondary} variant="outline" />}
          </div>
        </div>
      </section>
    </div>
  );
}
