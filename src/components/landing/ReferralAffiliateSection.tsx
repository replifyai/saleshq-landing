import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Customer referrals",
    text: "Shareable links over WhatsApp, SMS, and email turn happy customers into your best channel.",
  },
  {
    num: "02",
    title: "Affiliate & creator programs",
    text: "Branded landing pages, custom codes, and tiered commissions — no spreadsheets.",
  },
  {
    num: "03",
    title: "WhatsApp-first",
    text: "Onboarding, status updates, and rewards run natively where Indian customers already are.",
  },
  {
    num: "04",
    title: "Instant UPI payouts",
    text: "Same-day rewards with TDS, PAN, and GST compliance handled automatically.",
  },
];

const points = [
  "Go live in under 30 minutes — no engineering required",
  "Instant UPI payouts with automatic TDS handling",
  "Transparent, usage-based pricing that drops as you scale",
];

export default function ReferralAffiliateSection() {
  return (
    <section
      id="referral-affiliate"
      aria-label="Referral & Affiliate"
      className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
            New from SalesHQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
            Referral &amp; Affiliate — growth built for India&rsquo;s D2C brands
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 text-pretty">
            Turn customers and creators into a 24/7 sales channel. WhatsApp-first
            sharing, instant UPI rewards, and tax compliance baked in — launch in
            under 30 minutes.
          </p>

          <ul className="mb-8 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[15px] text-foreground/80"
              >
                <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-full px-6 transition-transform hover:-translate-y-0.5"
            >
              <Link href="/referral-affiliate">
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 transition-transform hover:-translate-y-0.5"
            >
              <Link href="/contact">Join the beta</Link>
            </Button>
          </div>
        </div>

        {/* Pillar grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ num, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-border hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <span className="font-mono-label text-[11px] tracking-normal text-primary">
                  {num}
                </span>
              </div>
              <h3 className="font-display mb-1.5 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
