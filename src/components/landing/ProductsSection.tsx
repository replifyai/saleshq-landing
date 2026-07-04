import Link from "next/link";
import { ArrowRight, Headphones, Share2, ShoppingBag } from "lucide-react";

const products = [
  {
    id: "sales-assistant",
    tag: "For revenue teams",
    name: "Sales Assistant",
    tagline:
      "Real-time, source-backed answers live on every call and chat — your reps never fumble a question again.",
    points: ["Live call assist & transcription", "Instant battlecards & pricing", "95% source-backed accuracy"],
    href: "/products/sales-assistant",
    icon: Headphones,
    cta: "Explore Sales Assistant",
  },
  {
    id: "referral-affiliate",
    tag: "For D2C growth",
    name: "Referral & Affiliate",
    tagline:
      "Turn customers and creators into a 24/7 sales channel — WhatsApp-first sharing with instant UPI rewards.",
    points: ["Referrals + affiliate programs", "WhatsApp-native onboarding", "Same-day UPI payouts, tax-compliant"],
    href: "/referral-affiliate",
    icon: Share2,
    cta: "Explore Referral & Affiliate",
  },
  {
    id: "shopify",
    tag: "For Shopify stores",
    name: "SalesHQ for Shopify",
    tagline:
      "An intent-driven AI shopping assistant that reads what each shopper wants and turns browsers into buyers.",
    points: ["Understands shopper intent live", "Personalized recs & comparisons", "Merchant-side intent analytics"],
    href: "/products/shopify",
    icon: ShoppingBag,
    cta: "See SalesHQ for Shopify",
    isNew: true,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-label="Products"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="font-mono-label mb-4 flex items-center justify-center gap-2 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
            One platform, three products
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
            Everywhere you sell, an AI that closes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            SalesHQ is no longer just a sales assistant. It&rsquo;s the AI layer across
            your whole revenue motion — from the shopper on your storefront to the
            rep on a live call.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.id}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgba(15,23,42,0.34)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {p.isNew && (
                    <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                      NEW
                    </span>
                  )}
                </div>
                <p className="font-mono-label mb-1.5 text-[11px] text-muted-foreground">{p.tag}</p>
                <h3 className="font-display mb-2.5 text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mb-5 text-[14px] leading-relaxed text-muted-foreground">{p.tagline}</p>
                <ul className="mb-6 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[13.5px] text-foreground/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
