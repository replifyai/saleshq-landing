import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Share2,
  Award,
  MessageCircle,
  Wallet,
  Check,
} from "lucide-react";

const pillars = [
  {
    title: "Customer referrals",
    description: "Shareable links over WhatsApp, SMS, and email turn happy customers into your best channel.",
    icon: Share2,
  },
  {
    title: "Affiliate & creator programs",
    description: "Branded landing pages, custom codes, and tiered commissions — no spreadsheets.",
    icon: Award,
  },
  {
    title: "WhatsApp-first",
    description: "Onboarding, status updates, and rewards run natively where Indian customers already are.",
    icon: MessageCircle,
  },
  {
    title: "Instant UPI payouts",
    description: "Same-day rewards with TDS, PAN, and GST compliance handled automatically.",
    icon: Wallet,
  },
];

export default function ReferralAffiliateSection() {
  return (
    <section id="referral-affiliate" aria-label="Referral & Affiliate" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              New from SalesHQ
            </p>
            <h2 className="section-title mb-4">
              Referral &amp; Affiliate — growth built for India&apos;s D2C brands
            </h2>
            <p className="section-subtitle mb-8">
              Turn customers and creators into a 24/7 sales channel. WhatsApp-first sharing,
              instant UPI rewards, and tax compliance baked in — launch in under 30 minutes.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Go live in under 30 minutes, no engineering required",
                "Instant UPI payouts with automatic TDS handling",
                "Transparent, usage-based pricing that drops as you scale",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-full px-6 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/referral-affiliate">
                  Explore the platform
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Join the beta</Link>
              </Button>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
