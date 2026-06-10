import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Announcement */}
          <Link
            href="/referral-affiliate"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-colors mb-8"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            New: Referral &amp; Affiliate platform for D2C brands
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Every answer your sales team needs, the moment they need it
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            SalesHQ turns your product docs, pricing sheets, and battlecards into an AI assistant
            that gives reps instant, source-backed answers — on calls, in chats, everywhere they sell.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Button asChild size="lg" className="rounded-full px-7 h-12 text-base">
              <Link href="/contact">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 text-base">
              <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">14-day free trial · No credit card required</p>
        </div>

        {/* Product preview */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card shadow-[0_24px_60px_-24px_rgb(0_0_0/0.18)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-border" />
              <span className="h-3 w-3 rounded-full bg-border" />
              <span className="h-3 w-3 rounded-full bg-border" />
              <span className="ml-3 text-xs text-muted-foreground">SalesHQ — Ask anything</span>
            </div>

            <div className="p-5 sm:p-8 space-y-4">
              {/* Question */}
              <div className="flex justify-end">
                <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground">
                  Customer is asking how our warranty compares to Competitor X. What do I say?
                </div>
              </div>

              {/* Answer */}
              <div className="flex justify-start">
                <div className="max-w-[90%] sm:max-w-[80%] rounded-2xl rounded-bl-md border border-border bg-muted/50 px-4 py-3 text-sm">
                  <div className="flex items-center gap-1.5 mb-2 text-xs font-medium text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    SalesHQ
                  </div>
                  <p className="text-foreground leading-relaxed mb-3">
                    We offer a 2-year comprehensive warranty covering parts and labour.
                    Competitor X covers 1 year, parts only. Lead with the labour coverage —
                    it&apos;s the gap customers care about most.
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                      <FileText className="w-3 h-3" />
                      Warranty Policy, p.4
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                      <FileText className="w-3 h-3" />
                      Battlecard: Competitor X
                    </span>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                <span className="text-sm text-muted-foreground flex-1">Ask about pricing, specs, competitors…</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
