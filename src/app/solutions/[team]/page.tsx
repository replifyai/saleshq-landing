import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { getTeamById, getAllTeams } from "@/data/teamSolutions";

interface TeamSolutionPageProps {
  params: Promise<{ team: string }>;
}

export function generateStaticParams() {
  return getAllTeams().map((team) => ({ team: team.id }));
}

export async function generateMetadata({ params }: TeamSolutionPageProps): Promise<Metadata> {
  const { team } = await params;
  const teamData = getTeamById(team);
  if (!teamData) return {};
  return {
    title: `${teamData.name} | Solutions`,
    description: teamData.description,
  };
}

export default async function TeamSolutionPage({ params }: TeamSolutionPageProps) {
  const { team } = await params;
  const teamData = getTeamById(team);

  if (!teamData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        </div>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All solutions
          </Link>
          <p className="section-eyebrow">{teamData.name}</p>
          <h1 className="hero-title text-4xl sm:text-5xl mb-6">
            SalesHQ for {teamData.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {teamData.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="section-title mb-4">
              Everything your {teamData.name.toLowerCase()} need
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.features.map((feature) => (
              <div key={feature.id} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support channels (customer support team) */}
      {teamData.supportChannels && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="section-title mb-4">One knowledge base, every channel</h2>
              <p className="section-subtitle">
                Deliver consistent answers across every customer touchpoint.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.supportChannels.map((channel) => (
                <div key={channel.name} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2">{channel.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key metrics (revops team) */}
      {teamData.keyMetrics && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="section-title mb-4">Complete revenue visibility</h2>
              <p className="section-subtitle">
                Analytics, forecasting, and optimization tools in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.keyMetrics.map((metric) => (
                <div key={metric.name} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground mb-2">{metric.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="section-title mb-4">
              The challenges we solve for {teamData.name.toLowerCase()}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamData.problemsSolved.map((problem) => (
              <div key={problem} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <p className="text-sm text-foreground/80">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Ready to put SalesHQ behind your {teamData.name.toLowerCase()}?
          </h2>
          <p className="section-subtitle mb-8 max-w-md mx-auto">
            Start a free trial or see it live on your own knowledge base.
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
