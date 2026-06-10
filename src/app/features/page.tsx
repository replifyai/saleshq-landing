import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  MessageSquare,
  BarChart3,
  BookOpen,
  Globe,
  Database,
  TrendingUp,
  Target,
  FileText,
  Headphones,
  DollarSign,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore SalesHQ features: AI-powered answers with source citations, real-time communication, analytics, knowledge management, and integrations.",
};

const availableFeatures = [
  {
    icon: Brain,
    title: "AI-powered answers",
    description:
      "Natural-language understanding that returns accurate, source-cited responses to complex sales questions.",
    benefits: ["Context-aware responses", "Source citations", "Multi-language support", "Continuous learning"],
  },
  {
    icon: MessageSquare,
    title: "Real-time communication",
    description:
      "Instant AI assistance during calls, meetings, and customer chats across every channel your team uses.",
    benefits: ["Live transcription", "Instant suggestions", "Multi-channel support", "Team collaboration"],
  },
  {
    icon: BarChart3,
    title: "Advanced analytics",
    description:
      "Insight into team performance, query patterns, and knowledge gaps — with recommendations you can act on.",
    benefits: ["Performance tracking", "Gap analysis", "ROI measurement", "Custom reports"],
  },
  {
    icon: BookOpen,
    title: "Knowledge management",
    description:
      "One repository for sales materials, product info, and best practices, with intelligent search built in.",
    benefits: ["Centralized content", "Smart search", "Version control", "Access control"],
  },
  {
    icon: Globe,
    title: "Integrations",
    description:
      "Connects with your CRM, communication tools, and storage — plus a REST API and webhooks for anything custom.",
    benefits: ["CRM sync", "API access", "Webhook support", "Custom connectors"],
  },
  {
    icon: Database,
    title: "Online store integration",
    description:
      "Deep Shopify integration for order management, cart data, and real-time product synchronization.",
    benefits: ["Order & cart management", "Product synchronization", "Inventory tracking", "Customer data sync"],
  },
];

const comingSoonFeatures = [
  {
    icon: TrendingUp,
    title: "Real-time product insights",
    description: "Live review monitoring, customer sentiment, and market intelligence from your store data.",
  },
  {
    icon: Target,
    title: "Query intelligence",
    description: "Deep analysis of what your team asks, surfacing knowledge gaps and training opportunities.",
  },
  {
    icon: FileText,
    title: "Deal briefing & handover",
    description: "Auto-generated deal summaries for seamless handovers between reps.",
  },
  {
    icon: Headphones,
    title: "Sales scenario simulation",
    description: "AI-powered practice scenarios with coaching and performance feedback.",
  },
  {
    icon: DollarSign,
    title: "Revenue prediction",
    description: "Forecasts based on customer conversations and live pipeline data.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow justify-center">Features</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Everything your team needs to sell with confidence
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            AI answers, analytics, and knowledge management — one platform, built around how
            sales teams actually work.
          </p>
        </div>
      </section>

      {/* Available */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFeatures.map(({ icon: Icon, title, description, benefits }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-foreground/20 transition-colors">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2.5">
                  {benefits.map((benefit) => (
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

      {/* Coming soon */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="section-eyebrow">On the roadmap</p>
            <h2 className="section-title mb-4">Coming soon</h2>
            <p className="section-subtitle">
              What we&apos;re building next, shaped by feedback from teams using SalesHQ today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-dashed border-border bg-card/50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">See it on your own knowledge base</h2>
          <p className="section-subtitle mb-8 max-w-md mx-auto">
            Upload your docs and ask real questions — the best demo is your own data.
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
