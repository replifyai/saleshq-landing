import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Share2, Award, MessageCircle, Wallet } from "lucide-react";
import ReferralHeroFlowCreative from "@/components/creatives/ReferralHeroFlowCreative";
import ReferralWhatsAppCreative from "@/components/creatives/ReferralWhatsAppCreative";
import ReferralAffiliatePageCreative from "@/components/creatives/ReferralAffiliatePageCreative";
import ReferralAffiliateDashboardCreative from "@/components/creatives/ReferralAffiliateDashboardCreative";
import ReferralMerchantDashboardCreative from "@/components/creatives/ReferralMerchantDashboardCreative";
import ReferralUPICreative from "@/components/creatives/ReferralUPICreative";
import { REFERRAL_FEATURES, REFERRAL_HERO_BULLETS } from "@/data/referralProduct";

const FEATURE_ICONS = [Share2, Award, MessageCircle, Wallet];

type Props = {
  compact?: boolean;
};

export default function ReferralAffiliateSection({ compact = false }: Props) {
  return (
    <section
      id="referral-affiliate"
      aria-label="Referral & Affiliate"
      className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
              For D2C growth
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
              Referral &amp; Affiliate — growth built for India&apos;s D2C brands
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 text-pretty">
              Turn customers and creators into a 24/7 sales channel. WhatsApp-first sharing,
              instant UPI rewards, and tax compliance baked in — launch in under 30 minutes.
            </p>

            <ul className="mb-8 space-y-3">
              {REFERRAL_HERO_BULLETS.map((point) => (
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
                <Link href="/referral-affiliate">
                  Explore the platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <Link href="/contact">Join the beta</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-[-8%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.12),transparent_72%)] blur-lg" />
            <ReferralHeroFlowCreative />
          </div>
        </div>

        {!compact && (
          <>
            <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <ReferralWhatsAppCreative />
              <ReferralAffiliatePageCreative />
              <ReferralUPICreative />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <ReferralAffiliateDashboardCreative />
              <ReferralMerchantDashboardCreative />
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {REFERRAL_FEATURES.map((f, i) => {
                const Icon = FEATURE_ICONS[i] ?? Share2;
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
          </>
        )}
      </div>
    </section>
  );
}
