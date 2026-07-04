import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { getAllTeams } from "@/data/teamSolutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "SalesHQ solutions for sales teams, customer support, and RevOps — plus a referral & affiliate platform for D2C brands.",
};

export default function SolutionsPage() {
  const teamSolutions = getAllTeams();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow justify-center">Solutions</p>
          <h1 className="hero-title text-4xl sm:text-5xl mb-6">
            Built for every team that talks to customers
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            One knowledge platform, tailored to how sales, support, and RevOps teams actually work.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {teamSolutions.map((solution) => (
              <div
                key={solution.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-foreground/20 transition-colors"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">{solution.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {solution.keyFeatures.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="mt-auto rounded-full">
                  <Link href={`/solutions/${solution.id}`}>
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="section-eyebrow">Why teams switch</p>
            <h2 className="section-title mb-4">The challenges we solve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamSolutions.map((solution) => (
              <div key={solution.id} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-4">{solution.name}</h3>
                <ul className="space-y-3">
                  {solution.problemsSolved.slice(0, 4).map((problem) => (
                    <li key={problem} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D2C cross-link */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            <div className="flex-1">
              <p className="section-eyebrow mb-3">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                For D2C brands
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                Referral &amp; Affiliate platform
              </h2>
              <p className="text-muted-foreground">
                Turn customers and creators into a sales channel — WhatsApp-first, instant UPI
                payouts, full tax compliance.
              </p>
            </div>
            <Button asChild className="rounded-full px-6 shrink-0">
              <Link href="/referral-affiliate">
                Explore the platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Find the right fit for your team</h2>
          <p className="section-subtitle mb-8 max-w-md mx-auto">
            Start a free trial or talk to us about your team&apos;s workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 h-12">
              <Link href="/contact">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
              <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
