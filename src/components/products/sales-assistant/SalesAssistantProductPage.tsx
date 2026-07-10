import Link from "next/link";
import {
  ArrowRight,
  Check,
  Headphones,
  FileText,
  Swords,
  MessageSquare,
  BarChart3,
  BookOpen,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";
import SalesAssistantCreative from "@/components/creatives/SalesAssistantCreative";
import SalesAssistantKnowledgeCreative from "@/components/creatives/SalesAssistantKnowledgeCreative";
import SalesAssistantBattlecardCreative from "@/components/creatives/SalesAssistantBattlecardCreative";
import SalesAssistantAnalyticsCreative from "@/components/creatives/SalesAssistantAnalyticsCreative";
import {
  SALES_ASSISTANT_SEO_DESCRIPTION,
  SALES_ASSISTANT_HERO_BULLETS,
  SALES_ASSISTANT_STATS,
  SALES_ASSISTANT_STEPS,
  SALES_ASSISTANT_FEATURES,
  SALES_ASSISTANT_MANAGER_BULLETS,
  SALES_ASSISTANT_FAQS,
} from "@/data/salesAssistantProduct";

const CANONICAL = "/products/sales-assistant";
const URL = `${SITE_URL}${CANONICAL}`;

const FEATURE_ICONS = [Headphones, FileText, Swords, MessageSquare, BarChart3, BookOpen];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-label mb-4 flex items-center gap-2 text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(221,83%,53%,0.16)]" />
      {children}
    </p>
  );
}

export default function SalesAssistantProductPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SalesHQ Sales Assistant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SALES_ASSISTANT_SEO_DESCRIPTION,
    url: URL,
    provider: { "@type": "Organization", name: "SalesHQ", url: SITE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SALES_ASSISTANT_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/#products` },
      { "@type": "ListItem", position: 2, name: "Sales Assistant", item: URL },
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={[appSchema, breadcrumbSchema, faqSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden mt-16 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-8%,hsl(221,83%,53%,0.14),transparent_68%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-2.5 py-1.5">
              <span className="pr-2 text-sm font-medium text-muted-foreground">
                Real-time AI for revenue teams
              </span>
            </div>
            <h1 className="hero-title text-[2.25rem] sm:text-5xl lg:text-[3.25rem] mb-5 text-balance">
              Every answer your team needs,{" "}
              <span className="text-primary">the second</span> they need it
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              SalesHQ turns your product docs, pricing, and battlecards into an AI assistant that gives
              reps instant, source-backed answers — live on calls, in chats, and email.
            </p>
            <ul className="mb-8 space-y-3">
              {SALES_ASSISTANT_HERO_BULLETS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <Link href="/contact">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6 transition-transform hover:-translate-y-0.5">
                <a href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                  Book a demo
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">14-day free trial · No credit card required</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="pointer-events-none absolute inset-[-8%] bg-[radial-gradient(50%_60%_at_50%_40%,hsl(221,83%,53%,0.14),transparent_72%)] blur-lg" />
            <SalesAssistantCreative />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {SALES_ASSISTANT_STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge base */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Source of truth</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Grounded in your docs — not the internet
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Connect product specs, pricing sheets, battlecards, and FAQs. SalesHQ indexes everything
              and keeps answers in sync as your materials change.
            </p>
            <ul className="space-y-3">
              {[
                "Docs, PDFs, and spreadsheets — auto-indexed",
                "Every answer cites the exact source",
                "Stays current as you update materials",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <SalesAssistantKnowledgeCreative />
        </div>
      </section>

      {/* Battlecards */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SalesAssistantBattlecardCreative />
          <div>
            <Eyebrow>Competitive deals</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Battlecards when rivals come up
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              The moment a competitor is mentioned, SalesHQ surfaces your latest positioning,
              differentiators, and objection handlers — so reps respond with confidence, not improvisation.
            </p>
            <ul className="space-y-3">
              {[
                "Side-by-side competitor comparisons",
                "Objection handling in context",
                "Always-current battlecards — no stale decks",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Every channel */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>Every channel</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              One assistant, everywhere your reps sell
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              The same knowledge base and citations on live calls, chat, and email — no duplicate setup.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: Phone, title: "Live calls", text: "Transcription + instant cited answers mid-conversation." },
              { icon: MessageSquare, title: "Chat & Slack", text: "Reps ask in plain language and get source-backed replies." },
              { icon: Mail, title: "Email", text: "Draft accurate responses grounded in your latest materials." },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mb-1.5 text-base font-semibold text-foreground">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manager analytics */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SalesAssistantAnalyticsCreative />
          <div>
            <Eyebrow>For managers</Eyebrow>
            <h2 className="font-display mb-4 text-3xl sm:text-[2rem] font-bold tracking-[-0.025em] text-foreground">
              Know what your team asks — and where they&apos;re stuck
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              SalesHQ turns every question into insight: the most-asked topics, the knowledge gaps
              costing you deals, and the answers that move prospects forward.
            </p>
            <ul className="space-y-3">
              {SALES_ASSISTANT_MANAGER_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
              From docs to live answers in a day
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SALES_ASSISTANT_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(15,23,42,0.3)]"
              >
                <div className="font-mono-label mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-[11px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mb-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground text-balance">
              Your reps&apos; unfair advantage on every call
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SALES_ASSISTANT_FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Headphones;
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
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl font-bold tracking-[-0.02em] text-foreground">
            Questions, answered
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {SALES_ASSISTANT_FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-background p-5">
                <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">{f.q}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display mb-4 text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-foreground">
            Give every rep instant, source-backed answers
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start your 14-day free trial — no credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-full px-6">
              <Link href="/contact">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-6">
              <a href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
