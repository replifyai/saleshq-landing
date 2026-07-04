import type { Metadata } from "next";
import { Headphones, FileText, Swords, MessageSquare, BarChart3, BookOpen } from "lucide-react";
import ProductPageTemplate from "@/components/products/ProductPageTemplate";
import SalesAssistantCreative from "@/components/creatives/SalesAssistantCreative";

const DESCRIPTION =
  "SalesHQ Sales Assistant turns your product docs, pricing, and battlecards into an AI assistant that gives reps instant, source-backed answers — live on calls, in chats, and email — with real-time transcription and citations they can trust.";

export const metadata: Metadata = {
  title: "Sales Assistant — Real-Time AI for Revenue Teams",
  description: DESCRIPTION,
  keywords: [
    "AI sales assistant",
    "real-time call assistant",
    "sales enablement AI",
    "battlecards AI",
    "live call transcription",
    "source-backed sales answers",
  ],
  alternates: { canonical: "/products/sales-assistant" },
  openGraph: {
    title: "Sales Assistant — Real-Time AI for Revenue Teams",
    description: DESCRIPTION,
    url: "/products/sales-assistant",
    type: "website",
  },
};

const TeamVisual = () => (
  <div className="rounded-2xl border border-border bg-background p-5">
    <div className="grid grid-cols-2 gap-3">
      {[
        { k: "Avg. answer time", v: "0.8s", accent: true },
        { k: "Source-backed", v: "95%" },
        { k: "Saved / rep daily", v: "3.2h" },
        { k: "Faster closes", v: "+40%" },
      ].map((s) => (
        <div key={s.k} className="rounded-xl border border-border p-4">
          <div className="text-[12px] text-muted-foreground">{s.k}</div>
          <div className={`font-display text-2xl font-bold ${s.accent ? "text-primary" : "text-foreground"}`}>{s.v}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 rounded-xl bg-muted/50 p-3 text-[12px] text-muted-foreground">
      Top knowledge gap this week: <span className="font-medium text-foreground">&ldquo;SOC 2 &amp; data residency&rdquo;</span> — asked 34×
    </div>
  </div>
);

export default function SalesAssistantPage() {
  return (
    <ProductPageTemplate
      breadcrumb="Sales Assistant"
      canonicalPath="/products/sales-assistant"
      seoDescription={DESCRIPTION}
      eyebrow="Real-time assistant for revenue teams"
      title={
        <>
          Every answer your sales team needs,{" "}
          <span className="text-primary">the second</span> they need it
        </>
      }
      subtitle="SalesHQ turns your product docs, pricing, and battlecards into an AI assistant that gives reps instant, source-backed answers — live on calls, in chats, everywhere they sell."
      bullets={[
        "Live call assist with real-time transcription",
        "Every answer cited back to your source of truth",
        "Works across calls, chat, and email",
      ]}
      primaryCta={{ label: "Start free trial", href: "/contact" }}
      secondaryCta={{ label: "Book a demo", href: "https://calendly.com/saleshqai/30min", external: true }}
      note="14-day free trial · No credit card required"
      creative={<SalesAssistantCreative />}
      stepsHeading="From docs to live answers in a day"
      steps={[
        { title: "Connect your knowledge", text: "Point SalesHQ at your docs, pricing, battlecards, and past calls — it ingests and indexes them automatically." },
        { title: "It learns your product", text: "Answers are grounded in your source material, with citations, so reps can trust every response." },
        { title: "Reps get answers live", text: "On calls and in chat, SalesHQ surfaces the right answer in under a second — no tab-switching." },
      ]}
      featuresHeading="Your reps' unfair advantage on every call"
      features={[
        { icon: <Headphones className="h-5 w-5" />, title: "Real-time call assist", text: "Live transcription listens to the call and surfaces the right answer the moment a question is asked." },
        { icon: <FileText className="h-5 w-5" />, title: "Source-backed answers", text: "Every response is cited back to your docs or pricing — 95% accuracy your reps can quote with confidence." },
        { icon: <Swords className="h-5 w-5" />, title: "Battlecards & objections", text: "Competitive positioning and objection handling, surfaced in context exactly when the prospect raises them." },
        { icon: <MessageSquare className="h-5 w-5" />, title: "Every channel", text: "The same assistant works across live calls, chat, and email — one source of truth, everywhere you sell." },
        { icon: <BarChart3 className="h-5 w-5" />, title: "Team analytics", text: "See what reps ask most, where the knowledge gaps are, and which answers close deals." },
        { icon: <BookOpen className="h-5 w-5" />, title: "Living knowledge base", text: "Answers stay in sync with your latest docs and pricing — update once, every rep is current." },
      ]}
      highlight={{
        eyebrow: "For managers",
        title: "Know what your team asks — and where they're stuck",
        text: "SalesHQ turns every question into insight: the most-asked topics, the knowledge gaps costing you deals, and the answers that move prospects forward.",
        bullets: ["Most-asked topics & knowledge gaps", "Per-rep and team-level trends", "Answers ranked by deal impact"],
        visual: <TeamVisual />,
      }}
      faqs={[
        { q: "How does it get my product knowledge?", a: "Connect your docs, pricing, and battlecards — SalesHQ ingests and indexes them, and stays in sync as you update them." },
        { q: "Does it work during live calls?", a: "Yes. Live transcription listens to the call and surfaces cited answers in real time, so reps never have to go hunting mid-call." },
        { q: "Can I trust the answers?", a: "Every answer is source-backed with a citation to your material, so reps can verify and quote it with confidence." },
      ]}
      finalCta={{
        title: "Give every rep instant, source-backed answers",
        text: "Start your 14-day free trial — no credit card required.",
        primary: { label: "Start free trial", href: "/contact" },
        secondary: { label: "Book a demo", href: "https://calendly.com/saleshqai/30min", external: true },
      }}
    />
  );
}
