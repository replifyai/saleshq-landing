import { ArrowRight } from "lucide-react";

const journey = [
  {
    stage: "Convert",
    headline: "Turn browsers into buyers",
    problem: "Shoppers leave when they can't find the right product, compare options, or get order help.",
    outcome: "AI reads intent on your storefront and guides them to purchase — grounded in your live catalog.",
    product: "SalesHQ for Shopify",
  },
  {
    stage: "Grow",
    headline: "Turn customers into a sales channel",
    problem: "Paid ads get expensive. Word-of-mouth is free — but hard to track, reward, and scale.",
    outcome: "Referral and affiliate programs with WhatsApp sharing and instant UPI payouts, fully compliant.",
    product: "Referral & Affiliate",
  },
  {
    stage: "Close",
    headline: "Give reps answers in the moment",
    problem: "Reps lose deals when they say \"let me get back to you\" on pricing, specs, or objections.",
    outcome: "Source-backed answers live on calls and in chat — cited back to your docs every time.",
    product: "Sales Assistant",
  },
];

export default function PlatformOverviewSection() {
  return (
    <section
      id="platform"
      aria-label="What SalesHQ does"
      className="border-t border-border bg-muted/30 px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="font-mono-label mb-4 flex items-center justify-center gap-2 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
            What SalesHQ does
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.06] tracking-[-0.025em] text-foreground text-balance mb-4">
            AI for the full path from first visit to closed deal
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most tools cover one step. SalesHQ covers three — convert on your store, grow through
            referrals, and close with instant answers for your team.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {journey.map((step, i) => (
              <div key={step.stage} className="relative flex flex-col">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-mono-label text-[11px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono-label text-[11px] uppercase tracking-wider text-muted-foreground">
                    {step.stage}
                  </span>
                </div>

                <h3 className="font-display mb-3 text-xl font-semibold text-foreground">{step.headline}</h3>

                <p className="mb-4 text-[14px] leading-relaxed text-muted-foreground">{step.problem}</p>

                <div className="mb-5 flex items-start gap-2 rounded-xl border border-border bg-background p-4">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-[14px] leading-relaxed text-foreground/90">{step.outcome}</p>
                </div>

                <p className="mt-auto font-mono-label text-[11px] text-primary">{step.product}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
