import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "3", label: "products, one login" },
  { value: "40%", label: "faster deal closure" },
  { value: "95%", label: "source-backed accuracy" },
  { value: "<30min", label: "to go live" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle blue glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_60%_45%_at_50%_-4%,hsl(221,83%,53%,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.3] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Announcement */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-2.5 py-1.5 mb-7">
          <span className="font-mono-label rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">NEW</span>
          <span className="text-sm font-medium text-muted-foreground pr-2">Three products, one AI platform</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title text-[2.5rem] sm:text-6xl lg:text-[4.75rem] mb-5">
          AI that powers how you sell —{" "}
          <span className="text-primary">from the first click</span> to the closed deal
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 text-pretty">
          SalesHQ is the AI layer across your whole revenue motion — an intent-driven shopping
          assistant on your storefront, a referral &amp; affiliate growth engine, and a real-time
          assistant for your sales team.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
          <Button asChild size="lg" className="rounded-full px-7 h-12 text-base transition-transform hover:-translate-y-0.5">
            <Link href="/contact">
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 text-base transition-transform hover:-translate-y-0.5">
            <Link href="#products">See the products</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-10">14-day free trial · No credit card required</p>

        {/* Stat band */}
        <div className="mx-auto flex max-w-2xl flex-wrap overflow-hidden rounded-2xl border border-border bg-card">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 min-w-[150px] px-5 py-4 text-center ${
                i < stats.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="font-display text-2xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
